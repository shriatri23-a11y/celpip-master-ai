import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { gateway, generateText, Output } from 'ai'
import { z } from 'zod'

function googleKeys() {
  const keys = []
  const bulk = process.env.GOOGLE_GENERATIVE_AI_API_KEYS ?? ''
  for (const k of bulk.split(/[\n,]/)) {
    const t = k.trim()
    if (t) keys.push(t)
  }
  const single = process.env.GOOGLE_GENERATIVE_AI_API_KEY
  if (single && single.trim()) keys.push(single.trim())
  for (let i = 2; i <= 10; i++) {
    const v = process.env[`GOOGLE_GENERATIVE_AI_API_KEY_${i}`]
    if (v && v.trim()) keys.push(v.trim())
  }
  return Array.from(new Set(keys))
}

const keys = googleKeys()
console.log('[test] google keys found:', keys.length)
console.log('[test] AI_GATEWAY_API_KEY set:', !!process.env.AI_GATEWAY_API_KEY)
console.log('[test] VERCEL_OIDC_TOKEN set:', !!process.env.VERCEL_OIDC_TOKEN)
console.log('[test] OPENROUTER_API_KEY set:', !!process.env.OPENROUTER_API_KEY)

const schema = z.object({ prompt: z.string() })

const candidates = []
keys.forEach((apiKey, i) => {
  const g = createGoogleGenerativeAI({ apiKey })
  for (const m of ['gemini-flash-latest', 'gemini-flash-lite-latest']) {
    candidates.push({ label: `google[key${i + 1}]:${m}`, model: g(m) })
  }
})
if (process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN) {
  for (const m of ['google/gemini-2.5-flash', 'deepseek/deepseek-v3.2']) {
    candidates.push({ label: `gateway:${m}`, model: gateway(m) })
  }
}

console.log('[test] total candidates:', candidates.length)

for (const c of candidates) {
  try {
    console.log(`\n[test] trying ${c.label} ...`)
    const { output } = await generateText({
      model: c.model,
      output: Output.object({ schema }),
      prompt: 'Generate a short original CELPIP email writing task as JSON with a "prompt" field.',
    })
    console.log(`[test] SUCCESS via ${c.label}:`, output.prompt.slice(0, 120))
    process.exit(0)
  } catch (err) {
    console.log(`[test] FAILED ${c.label}:`, err instanceof Error ? err.message : String(err))
  }
}
console.log('\n[test] ALL CANDIDATES FAILED')
process.exit(1)
