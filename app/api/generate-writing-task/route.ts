import { generateText, Output } from 'ai'
import { z } from 'zod'
import { withModelFallback } from '@/lib/ai'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { aiWritingTask } from '@/lib/db/schema'
import { headers } from 'next/headers'

export const maxDuration = 60

const TASK_TYPES = {
  Email: {
    label: 'Task 1 — Writing an Email',
    timeMinutes: 27,
    description:
      'A realistic everyday email situation (to a neighbour, landlord, manager, coworker, friend, business, or public organization). The prompt must ask the writer to do three specific things (e.g. explain a situation, describe a problem, request an action, apologize, thank, suggest).',
  },
  Survey: {
    label: 'Task 2 — Responding to Survey Questions',
    timeMinutes: 26,
    description:
      'A survey/opinion scenario presenting two clear options (Option A and Option B) on a community, workplace, school, or lifestyle topic. The prompt must ask the writer to choose one option and support it with reasons and examples.',
  },
} as const

const requestSchema = z.object({
  taskType: z.enum(['Email', 'Survey']),
})

const generatedTaskSchema = z.object({
  prompt: z.string(),
})

export async function POST(req: Request) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) {
    return Response.json(
      { error: 'You must be signed in to generate tasks.' },
      { status: 401 },
    )
  }

  try {
    const json = await req.json()
    const { taskType } = requestSchema.parse(json)
    const meta = TASK_TYPES[taskType]

    const { output } = await withModelFallback((model) => generateText({
      model,
      output: Output.object({ schema: generatedTaskSchema }),
      system: `You are a certified CELPIP exam writer with years of experience creating official CELPIP Writing tasks.
You create authentic, exam-quality prompts that accurately reflect the real CELPIP Writing test format, difficulty, and tone.
Your tasks must be completely original — never repeat or rephrase existing tasks.
Keep prompts realistic, culturally Canadian or internationally neutral, and free from any bias.`,
      prompt: `Generate a brand-new, unique CELPIP Writing task of type "${taskType}".

${meta.description}

Rules for the "prompt":
- Write it as the exact instructions a candidate would see on the real test.
- ${
        taskType === 'Email'
          ? 'Set up the situation in 1–2 sentences, then instruct: "Write an email ... (about 150–200 words)." Then list the three things the writer must include, in one flowing sentence (e.g. "In your email: ..., ..., and ...").'
          : 'Set up the scenario in 1–2 sentences, clearly present "Option A: ..." and "Option B: ...", then instruct the writer to choose the option they prefer and explain their choice in about 150–200 words, giving reasons and examples.'
      }
- The whole prompt should be 3–5 sentences and completely original.

Generate only the JSON — no markdown, no commentary.`,
    }))

    const title = meta.label

    const [inserted] = await db
      .insert(aiWritingTask)
      .values({
        createdByUserId: session.user.id,
        createdByName: session.user.name ?? null,
        taskType,
        title,
        prompt: output.prompt,
        minWords: 150,
        maxWords: 200,
        timeMinutes: meta.timeMinutes,
        published: true,
      })
      .returning()

    return Response.json({
      dbId: inserted.id,
      id: `ai-${inserted.id}`,
      type: inserted.taskType,
      title: inserted.title,
      prompt: inserted.prompt,
      minWords: inserted.minWords,
      maxWords: inserted.maxWords,
      timeMinutes: inserted.timeMinutes,
      createdByName: inserted.createdByName,
      createdAt: inserted.createdAt,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.log('[v0] generate-writing-task error:', message)
    return Response.json(
      { error: 'Failed to generate task. Please try again.' },
      { status: 500 },
    )
  }
}
