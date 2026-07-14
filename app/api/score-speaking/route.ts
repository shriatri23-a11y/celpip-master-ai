import { generateText, Output } from 'ai'
import { z } from 'zod'
import { scoreSchema } from '@/lib/scoring-schema'
import { withModelFallback } from '@/lib/ai'

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

    const { output } = await withModelFallback((model) => generateText({
      model,
      output: Output.object({ schema: scoreSchema }),
      system: `You are a certified CELPIP Speaking examiner applying the official CELPIP Speaking Performance Standards. You evaluate spoken responses that have been transcribed to text, and you score on the official CELPIP scale of 1 to 12, where 9-12 is advanced, 7-8 is good, 5-6 is developing, and below 5 is emerging.

Evaluate using exactly these four official Dimensions, in this order. For each, weigh the listed factors:
1. "Content / Coherence" — number and quality of ideas, organization, and use of examples/supporting details. Ask: how well are the ideas organized and developed for the full speaking time?
2. "Vocabulary" — word choice, range, and precision/accuracy. Penalize vague, repetitive, or prompt-copied language.
3. "Listenability" — fluency, natural phrasing, connectors/transitions, and hesitation. Infer fillers (um, uh, like), false starts, and repetition from the transcript. Note that some natural hesitation is acceptable even at Level 10-12, as long as meaning stays clear.
4. "Task Fulfillment" — relevance, completeness (every part of the task addressed), and tone appropriate to the audience and situation.

Because this is a transcript, do NOT penalize spelling or punctuation. Be fair but rigorous, like a real examiner, and base the overall level on the four Dimensions together. Give specific, actionable feedback that references the speaker's actual words. Keep feedback encouraging and concrete.

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
    }))

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
