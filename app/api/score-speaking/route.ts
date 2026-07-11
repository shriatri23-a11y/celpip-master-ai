import { generateText, Output } from 'ai'
import { z } from 'zod'
import { scoreSchema } from '@/lib/scoring-schema'
import { scoringModel } from '@/lib/ai'

export const maxDuration = 60

const bodySchema = z.object({
  prompt: z.string().min(1),
  taskTitle: z.string().min(1),
  transcript: z.string().min(1),
  durationSeconds: z.number().optional(),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const { prompt, taskTitle, transcript, durationSeconds } =
      bodySchema.parse(json)

    if (transcript.trim().length < 20) {
      return Response.json(
        { error: 'Please record a longer response before scoring.' },
        { status: 400 },
      )
    }

    const wordCount = transcript.trim().split(/\s+/).filter(Boolean).length

    const { output } = await generateText({
      model: scoringModel,
      output: Output.object({ schema: scoreSchema }),
      system: `You are a certified CELPIP Speaking examiner. You evaluate spoken responses that have been transcribed to text. You score on the official CELPIP scale of 1 to 12.

Evaluate using exactly these four criteria, in this order:
1. "Content / Coherence" — is the message complete, on-topic, well-organized, and logically connected?
2. "Vocabulary" — range, precision, and appropriateness of word choice.
3. "Listenability" — fluency, natural phrasing, and hesitation. Infer fillers (um, uh, like) and repetition from the transcript.
4. "Task Fulfillment" — did the speaker address all parts of the task with an appropriate tone?

Because this is a transcript, do NOT penalize spelling or punctuation. Be fair but rigorous, like a real examiner. Give specific, actionable feedback that references the speaker's actual words. Keep feedback encouraging and concrete.

Also provide:
- "weakPhrases": 2-6 short phrases copied VERBATIM from the transcript that are weak, awkward, repetitive, or unnatural. Each must be an exact substring of the transcript so it can be highlighted.
- "suggestedResponse": a complete, high-scoring (CELPIP 10-12) model spoken answer to the SAME task, in a natural first-person conversational voice, that the speaker can learn from.`,
      prompt: `CELPIP Speaking task: "${taskTitle}"

PROMPT SHOWN TO TEST TAKER:
${prompt}

TRANSCRIBED SPOKEN RESPONSE (${wordCount} words${
        durationSeconds ? `, ${durationSeconds}s speaking time` : ''
      }):
"""
${transcript}
"""

Provide a full CELPIP Speaking evaluation now.`,
    })

    return Response.json(output)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.log('[v0] score-speaking error:', message)
    return Response.json(
      { error: 'Scoring failed. Please try again.' },
      { status: 500 },
    )
  }
}
