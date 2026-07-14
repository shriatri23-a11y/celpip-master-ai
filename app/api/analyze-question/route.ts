import { generateText } from 'ai'
import { z } from 'zod'
import { withModelFallback } from '@/lib/ai'

export const maxDuration = 30

const bodySchema = z.object({
  section: z.string(),
  questionPrompt: z.string(),
  options: z.array(z.string()),
  yourAnswer: z.string(),
  correctAnswer: z.string(),
  isCorrect: z.boolean(),
  passage: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const input = bodySchema.parse(json)

    const { text } = await withModelFallback((model) => generateText({
      model,
      system: `You are a friendly CELPIP ${input.section} tutor. In 2-3 short sentences, explain why the correct answer is right. If the candidate answered incorrectly, briefly explain the trap or misreading that likely led to their wrong choice, and give one concrete tip. Be encouraging and specific. Do not use markdown, headings, or bullet points — just plain prose.`,
      prompt: `${input.passage ? `PASSAGE / CONTEXT:\n${input.passage}\n\n` : ''}QUESTION: ${input.questionPrompt}
OPTIONS: ${input.options.join(' | ')}
CANDIDATE'S ANSWER: ${input.yourAnswer || '(no answer)'}
CORRECT ANSWER: ${input.correctAnswer}
RESULT: ${input.isCorrect ? 'correct' : 'incorrect'}

Explain now.`,
    }))

    return Response.json({ analysis: text.trim() })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.log('[v0] analyze-question error:', message)
    return Response.json({ error: 'Analysis failed.' }, { status: 500 })
  }
}
