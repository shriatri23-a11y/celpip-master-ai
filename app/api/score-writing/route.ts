import { generateText, Output } from 'ai'
import { scoreSchema } from '@/lib/scoring-schema'
import { scoringModel } from '@/lib/ai'

export const maxDuration = 60

export async function POST(req: Request) {
  const { prompt, taskType, response } = (await req.json()) as {
    prompt: string
    taskType: string
    response: string
  }

  if (!response || response.trim().length < 20) {
    return Response.json(
      { error: 'Please write a longer response before scoring.' },
      { status: 400 },
    )
  }

  try {
    const { output } = await generateText({
      model: scoringModel,
      output: Output.object({ schema: scoreSchema }),
      system: `You are an experienced, certified CELPIP Writing examiner. You score responses on the official CELPIP scale of 1 to 12, where 9-12 is advanced, 7-8 is good, 5-6 is developing, and below 5 is emerging.

Evaluate using exactly these four criteria, in this order:
1. "Content / Coherence" — is the message complete, on-topic, well-organized, and logically connected?
2. "Vocabulary" — range, precision, and appropriateness of word choice.
3. "Readability" — grammar, sentence structure, punctuation, and spelling.
4. "Task Fulfillment" — did the writer address all parts of the task with an appropriate tone and register?

Be fair but rigorous, like a real examiner. Base the overall level on the criteria. Give specific, actionable feedback that references the writer's actual text. Keep feedback encouraging and concrete.

Also provide:
- "weakPhrases": 2-6 short phrases copied VERBATIM from the candidate's response that are weak, awkward, or grammatically incorrect. Each must be an exact substring of their text so it can be highlighted.
- "suggestedResponse": a complete, high-scoring (CELPIP 10-12) model answer to the SAME task, in a natural first-person voice, that the candidate can learn from.`,
      prompt: `TASK TYPE: ${taskType}

TASK PROMPT:
${prompt}

CANDIDATE RESPONSE:
${response}

Score this response now.`,
    })

    return Response.json(output)
  } catch (err) {
    console.log('[v0] score-writing error:', (err as Error).message)
    return Response.json(
      { error: 'Scoring failed. Please try again.' },
      { status: 500 },
    )
  }
}
