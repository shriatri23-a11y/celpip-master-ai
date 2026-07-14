'use server'

import { db } from '@/lib/db'
import { aiWritingTask } from '@/lib/db/schema'
import { desc, eq } from 'drizzle-orm'
import type { WritingTask } from '@/lib/celpip'

export type AiWritingTaskRecord = WritingTask & {
  dbId: number
  createdByName: string | null
  createdAt: Date
}

/** Fetch all published AI-generated writing tasks, newest first. */
export async function getAiWritingTasks(): Promise<AiWritingTaskRecord[]> {
  const rows = await db
    .select()
    .from(aiWritingTask)
    .where(eq(aiWritingTask.published, true))
    .orderBy(desc(aiWritingTask.createdAt))

  return rows.map((r) => ({
    dbId: r.id,
    id: `ai-${r.id}`,
    type: r.taskType as WritingTask['type'],
    title: r.title,
    prompt: r.prompt,
    minWords: r.minWords,
    maxWords: r.maxWords,
    timeMinutes: r.timeMinutes,
    createdByName: r.createdByName,
    createdAt: r.createdAt,
  }))
}
