'use server'

import { db } from '@/lib/db'
import { aiSpeakingTask } from '@/lib/db/schema'
import { desc, eq } from 'drizzle-orm'
import type { SpeakingTask } from '@/lib/celpip'

export type AiTaskRecord = SpeakingTask & {
  dbId: number
  createdAt: Date
}

/** Fetch all published AI-generated tasks, newest first. */
export async function getAiSpeakingTasks(): Promise<AiTaskRecord[]> {
  const rows = await db
    .select()
    .from(aiSpeakingTask)
    .where(eq(aiSpeakingTask.published, true))
    .orderBy(desc(aiSpeakingTask.createdAt))

  return rows.map((r) => ({
    dbId: r.id,
    id: `ai-${r.id}`,
    title: r.title,
    taskType: r.taskType,
    prompt: r.prompt,
    requirements: r.requirements as string[],
    tips: r.tips as string[],
    imageSrc: r.imageSrc ?? undefined,
    imageAlt: r.imageAlt ?? undefined,
    prepSeconds: r.prepSeconds,
    speakSeconds: r.speakSeconds,
    createdAt: r.createdAt,
  }))
}
