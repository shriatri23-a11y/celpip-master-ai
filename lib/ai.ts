import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { createOpenAICompatible } from '@ai-sdk/openai-compatible'
import { gateway, streamText, type LanguageModel } from 'ai'

/**
 * Multi-provider AI fallback layer.
 *
 * The app used to depend on a single free Google Gemini key, which quickly hit
 * its daily quota. This module builds an ordered chain of model "candidates"
 * and transparently moves to the next one whenever a call fails (rate limit,
 * quota exhausted, provider error, etc). The chain is, in order:
 *
 *   1. Google Gemini — every free key you provide, each tried with a primary
 *      and a lighter model. Adding more free keys multiplies your daily quota
 *      because Google tracks limits per key.
 *   2. OpenRouter — cheap / free Chinese models (DeepSeek, Qwen, GLM). Only
 *      used if OPENROUTER_API_KEY is set.
 *   3. Vercel AI Gateway — final safety net once every free option is drained.
 *      Only used if AI_GATEWAY_API_KEY (or Vercel OIDC) is available.
 *
 * Configure via environment variables (all optional except the first key):
 *   GOOGLE_GENERATIVE_AI_API_KEY            (primary free Gemini key)
 *   GOOGLE_GENERATIVE_AI_API_KEY_2..._10    (extra free Gemini keys, rotated)
 *   OPENROUTER_API_KEY                      (enables the OpenRouter layer)
 *   OPENROUTER_MODELS                       (comma-separated overrides)
 *   AI_GATEWAY_API_KEY                      (enables the gateway layer)
 *   AI_GATEWAY_MODELS                       (comma-separated overrides)
 */

export type ModelCandidate = { label: string; model: LanguageModel }

const GOOGLE_MODELS = ['gemini-flash-latest', 'gemini-flash-lite-latest']

const DEFAULT_OPENROUTER_MODELS = [
  'deepseek/deepseek-chat-v3-0324:free',
  'qwen/qwen3-235b-a22b:free',
  'z-ai/glm-4.5-air:free',
]

const DEFAULT_GATEWAY_MODELS = ['google/gemini-2.5-flash', 'deepseek/deepseek-v3.2']

function envList(value: string | undefined): string[] {
  return (value ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

function googleKeys(): string[] {
  const keys: string[] = []

  // Preferred: paste ALL keys into ONE variable, separated by commas or newlines.
  //   GOOGLE_GENERATIVE_AI_API_KEYS = key1,key2,key3,...
  const bulk = process.env.GOOGLE_GENERATIVE_AI_API_KEYS ?? ''
  for (const k of bulk.split(/[\n,]/)) {
    const trimmed = k.trim()
    if (trimmed) keys.push(trimmed)
  }

  // Also support individual numbered vars (GOOGLE_GENERATIVE_AI_API_KEY, _2 ... _10).
  const single = process.env.GOOGLE_GENERATIVE_AI_API_KEY
  if (single && single.trim()) keys.push(single.trim())
  for (let i = 2; i <= 10; i++) {
    const v = process.env[`GOOGLE_GENERATIVE_AI_API_KEY_${i}`]
    if (v && v.trim()) keys.push(v.trim())
  }

  // De-duplicate. Each unique key has its own free daily quota, so more keys
  // = more total free capacity before falling back to OpenRouter / AI Gateway.
  return Array.from(new Set(keys))
}

/**
 * Builds the ordered list of model candidates from the environment.
 * Rebuilt per request so newly added env keys are picked up without a restart.
 */
function buildCandidates(): ModelCandidate[] {
  const candidates: ModelCandidate[] = []

  // Layer 1 — Google Gemini free keys (rotated), each with a model fallback.
  googleKeys().forEach((apiKey, i) => {
    const google = createGoogleGenerativeAI({ apiKey })
    for (const modelId of GOOGLE_MODELS) {
      candidates.push({ label: `google[key${i + 1}]:${modelId}`, model: google(modelId) })
    }
  })

  // Layer 2 — OpenRouter cheap/free models (DeepSeek, Qwen, GLM, ...).
  const openrouterKey = process.env.OPENROUTER_API_KEY
  if (openrouterKey && openrouterKey.trim().length > 0) {
    const openrouter = createOpenAICompatible({
      name: 'openrouter',
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: openrouterKey,
    })
    const models = envList(process.env.OPENROUTER_MODELS)
    const list = models.length > 0 ? models : DEFAULT_OPENROUTER_MODELS
    for (const modelId of list) {
      candidates.push({ label: `openrouter:${modelId}`, model: openrouter(modelId) })
    }
  }

  // Layer 3 — Vercel AI Gateway (last resort, once every free option is drained).
  const hasGateway =
    !!process.env.AI_GATEWAY_API_KEY || !!process.env.VERCEL_OIDC_TOKEN
  if (hasGateway) {
    const models = envList(process.env.AI_GATEWAY_MODELS)
    const list = models.length > 0 ? models : DEFAULT_GATEWAY_MODELS
    for (const modelId of list) {
      candidates.push({ label: `gateway:${modelId}`, model: gateway(modelId) })
    }
  }

  return candidates
}

/**
 * Runs a non-streaming AI call (generateText, generateObject, generateText with
 * Output.object, ...) against the candidate chain, moving to the next model on
 * any error. Generic over the callback's return type so call sites keep full
 * type inference (e.g. `const { object } = await withModelFallback(...)`).
 */
export async function withModelFallback<T>(
  run: (model: LanguageModel) => Promise<T>,
): Promise<T> {
  const candidates = buildCandidates()
  if (candidates.length === 0) {
    throw new Error(
      'No AI providers configured. Set GOOGLE_GENERATIVE_AI_API_KEY (and optionally OPENROUTER_API_KEY or AI_GATEWAY_API_KEY).',
    )
  }

  let lastError: unknown
  for (const candidate of candidates) {
    try {
      return await run(candidate.model)
    } catch (err) {
      lastError = err
      console.log(
        `[v0] AI candidate failed (${candidate.label}):`,
        err instanceof Error ? err.message : String(err),
      )
    }
  }

  throw lastError ?? new Error('All AI providers failed.')
}

type StreamTextOptions = Omit<Parameters<typeof streamText>[0], 'model'>

/**
 * Streaming counterpart of withModelFallback. Because streamText surfaces
 * provider failures inside the stream (rather than throwing), we probe the
 * first chunk of each candidate: if the provider errors we advance to the next
 * one, otherwise we replay the buffered chunk(s) and hand back a fresh stream.
 *
 * Returns a ReadableStream of TextStreamPart, ready for `toUIMessageStream`.
 */
export async function streamTextWithFallback(options: StreamTextOptions) {
  const candidates = buildCandidates()
  if (candidates.length === 0) {
    throw new Error(
      'No AI providers configured. Set GOOGLE_GENERATIVE_AI_API_KEY (and optionally OPENROUTER_API_KEY or AI_GATEWAY_API_KEY).',
    )
  }

  let lastError: unknown
  for (const candidate of candidates) {
    try {
      const result = streamText({
        ...options,
        model: candidate.model,
        // Swallow here; failures are detected via the probed error part below.
        onError: () => {},
      } as Parameters<typeof streamText>[0])

      const iterator = result.stream[Symbol.asyncIterator]()
      const buffered: unknown[] = []
      let providerError: unknown = null

      // Read until the first meaningful content part or an error part.
      while (true) {
        const { value, done } = await iterator.next()
        if (done) break
        buffered.push(value)
        const type = (value as { type?: string })?.type
        if (type === 'error') {
          providerError = (value as { error?: unknown }).error ?? new Error('stream error')
          break
        }
        if (
          type === 'text-delta' ||
          type === 'text' ||
          type === 'reasoning-delta' ||
          type === 'tool-call'
        ) {
          break
        }
      }

      if (providerError) {
        lastError = providerError
        console.log(
          `[v0] AI stream candidate failed (${candidate.label}):`,
          providerError instanceof Error ? providerError.message : String(providerError),
        )
        continue
      }

      // Healthy: replay buffered parts, then forward the rest of the stream.
      return new ReadableStream({
        async pull(controller) {
          if (buffered.length > 0) {
            controller.enqueue(buffered.shift())
            return
          }
          try {
            const { value, done } = await iterator.next()
            if (done) {
              controller.close()
              return
            }
            controller.enqueue(value)
          } catch (err) {
            controller.error(err)
          }
        },
      })
    } catch (err) {
      lastError = err
      console.log(
        `[v0] AI stream candidate failed (${candidate.label}):`,
        err instanceof Error ? err.message : String(err),
      )
    }
  }

  throw lastError ?? new Error('All AI providers failed.')
}
