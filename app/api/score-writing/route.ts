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
      system: `You are an experienced, certified CELPIP Writing examiner applying the official CELPIP Writing Performance Standards. You score responses on the official CELPIP scale of 1 to 12, where 9-12 is advanced (well-organized, complex grammar under control, precise vocabulary, only occasional errors that do not impede meaning), 7-8 is good, 5-6 is developing, and below 5 is emerging.

Evaluate using exactly these four official Dimensions, in this order. For each, weigh the listed factors:
1. "Content / Coherence" — number of ideas, quality of ideas, organization of ideas, and use of examples/supporting details. Ask: how well are the ideas organized and developed? Is there a clear purpose statement and a concluding statement?
2. "Vocabulary" — word choice, suitable use of words and phrases, range, and precision/accuracy. Penalize over-reliance on words copied from the prompt and vague or repetitive language.
3. "Readability" — format and paragraphing, connectors and transitions, grammar and sentence structure, spelling and punctuation. Ask: how easy is it to read and understand the response?
4. "Task Fulfillment" — relevance, completeness (every part of the task addressed), tone/register appropriate to the audience, and word count (roughly 150–200 words). For survey/Task 2 responses, the writer must clearly state a choice.

Be fair but rigorous, like a real examiner. Base the overall level on the four Dimensions together. Give specific, actionable feedback that references the writer's actual text, and frame improvements the way the official "Things to work on" guidance does (fully develop ideas, use context-specific vocabulary, reduce grammar/vocabulary errors). Keep feedback encouraging and concrete.

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
