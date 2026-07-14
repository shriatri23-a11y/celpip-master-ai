import { NextResponse } from 'next/server'
import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { createOpenAICompatible } from '@ai-sdk/openai-compatible'
import { gateway, generateText } from 'ai'

export const maxDuration = 60

// TEMPORARY diagnostic endpoint. Reports which AI providers work in the
// production runtime and the exact error for the ones that fail. Gated behind
// a token so it is not publicly abusable. Remove after debugging.
export async function GET(req: Request) {
  const url = new URL(req.url)
  if (url.searchParams.get('token') !== 'celpip-diag-2026') {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 })
  }

  const results: Array<{ provider: string; ok: boolean; detail: string; ms: number }> = []

  const probe = async (provider: string, run: () => Promise<unknown>) => {
    const t = Date.now()
    try {
      await run()
      results.push({ provider, ok: true, detail: 'ok', ms: Date.now() - t })
    } catch (err) {
      results.push({
        provider,
        ok: false,
        detail: (err instanceof Error ? err.message : String(err)).slice(0, 300),
        ms: Date.now() - t,
      })
    }
  }

  // Gemini keys
  const bulk = process.env.GOOGLE_GENERATIVE_AI_API_KEYS ?? ''
  const keys = Array.from(
    new Set(bulk.split(/[\n,]/).map((s) => s.trim()).filter(Boolean)),
  )
  for (let i = 0; i < keys.length; i++) {
    const google = createGoogleGenerativeAI({ apiKey: keys[i] })
    await probe(`gemini[key${i + 1}]:flash-lite`, () =>
      generateText({ model: google('gemini-flash-lite-latest'), prompt: 'say ok' }),
    )
  }

  // OpenRouter
  const orKey = process.env.OPENROUTER_API_KEY
  if (orKey) {
    const openrouter = createOpenAICompatible({
      name: 'openrouter',
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: orKey,
    })
    await probe('openrouter:deepseek-chat-v3-0324:free', () =>
      generateText({ model: openrouter('deepseek/deepseek-chat-v3-0324:free'), prompt: 'say ok' }),
    )
  } else {
    results.push({ provider: 'openrouter', ok: false, detail: 'OPENROUTER_API_KEY not set', ms: 0 })
  }

  // Gateway
  const hasGateway = !!process.env.AI_GATEWAY_API_KEY || !!process.env.VERCEL_OIDC_TOKEN
  if (hasGateway) {
    await probe('gateway:deepseek-v3.2', () =>
      generateText({ model: gateway('deepseek/deepseek-v3.2'), prompt: 'say ok' }),
    )
  } else {
    results.push({ provider: 'gateway', ok: false, detail: 'no gateway key/OIDC', ms: 0 })
  }

  return NextResponse.json({
    region: process.env.VERCEL_REGION ?? 'unknown',
    geminiKeyCount: keys.length,
    results,
  })
}
