import { generateText, Output } from 'ai'
import { z } from 'zod'
import { withModelFallback } from '@/lib/ai'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { aiSpeakingTask } from '@/lib/db/schema'
import { headers } from 'next/headers'

export const maxDuration = 60

const TASK_TYPES = [
  { number: 1, type: 'Giving Advice',              prep: 30, speak: 90 },
  { number: 2, type: 'Personal Experience',        prep: 30, speak: 60 },
  { number: 3, type: 'Describing a Scene',         prep: 30, speak: 60 },
  { number: 4, type: 'Making Predictions',         prep: 30, speak: 60 },
  { number: 5, type: 'Comparing and Persuading',   prep: 60, speak: 60 },
  { number: 6, type: 'Difficult Situation',        prep: 60, speak: 60 },
  { number: 7, type: 'Expressing Opinions',        prep: 30, speak: 90 },
  { number: 8, type: 'Unusual Situation',          prep: 30, speak: 60 },
] as const

const requestSchema = z.object({
  taskNumber: z.number().int().min(1).max(8),
})

const generatedTaskSchema = z.object({
  title: z.string(),
  prompt: z.string(),
  requirements: z.array(z.string()).min(2).max(4),
  tips: z.array(z.string()).min(2).max(4),
})

export async function POST(req: Request) {
  // Auth check
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) {
    return Response.json({ error: 'You must be signed in to generate tasks.' }, { status: 401 })
  }

  try {
    const json = await req.json()
    const { taskNumber } = requestSchema.parse(json)

    const taskMeta = TASK_TYPES.find((t) => t.number === taskNumber)!

    const { output } = await withModelFallback((model) => generateText({
      model,
      output: Output.object({ schema: generatedTaskSchema }),
      system: `You are a certified CELPIP exam writer with years of experience creating official CELPIP Speaking tasks. 
You create authentic, exam-quality tasks that accurately reflect the real CELPIP test format, difficulty, and tone.
Your tasks must be completely original — never repeat or rephrase existing tasks.
Keep prompts realistic, culturally Canadian or internationally neutral, and free from any bias.`,
      prompt: `Generate a brand-new, unique CELPIP Speaking Task ${taskNumber} of type "${taskMeta.type}".

Task format rules:
- Title: "Task ${taskNumber} — ${taskMeta.type}"
- Prompt: A realistic scenario written in second person (e.g. "Your..."), 3–5 sentences long. Suitable for CELPIP candidates preparing for CLB 7–10. Must be completely original.
- Requirements: 3 bullet points specifying exactly what the student must cover in their response. Start each with a verb.
- Tips: 3 bullet points of examiner strategy advice — specific phrases to use, common mistakes to avoid, or structural guidance.
- Prep time: ${taskMeta.prep} seconds. Speaking time: ${taskMeta.speak} seconds.

${taskNumber === 3 || taskNumber === 4
  ? `Note: Task ${taskNumber} is a scene-based task. Since this is a text-only generator, write the prompt as if the student is looking at a described scene (e.g. "Imagine you are looking at…" and describe the scene in detail within the prompt itself — 4–6 vivid sentences).`
  : ''
}

Generate only the JSON — no markdown, no commentary.`,
    }))

    // Persist to DB so all students can access it
    const [inserted] = await db
      .insert(aiSpeakingTask)
      .values({
        createdByUserId: session.user.id,
        taskType: taskMeta.type,
        taskNumber: taskMeta.number,
        title: output.title,
        prompt: output.prompt,
        requirements: output.requirements,
        tips: output.tips,
        prepSeconds: taskMeta.prep,
        speakSeconds: taskMeta.speak,
        published: true,
      })
      .returning()

    return Response.json({
      id: inserted.id,
      taskType: inserted.taskType,
      taskNumber: inserted.taskNumber,
      title: inserted.title,
      prompt: inserted.prompt,
      requirements: inserted.requirements as string[],
      tips: inserted.tips as string[],
      imageSrc: inserted.imageSrc ?? undefined,
      imageAlt: inserted.imageAlt ?? undefined,
      prepSeconds: inserted.prepSeconds,
      speakSeconds: inserted.speakSeconds,
      createdAt: inserted.createdAt,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.log('[v0] generate-speaking-task error:', message)
    return Response.json({ error: 'Failed to generate task. Please try again.' }, { status: 500 })
  }
}
