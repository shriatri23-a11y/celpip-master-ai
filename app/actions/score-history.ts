'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { scoreAttempt } from '@/lib/db/schema'
import { and, desc, eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import type { ScoreResult } from '@/lib/scoring-schema'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export type SaveAttemptInput = {
  skill: 'writing' | 'speaking'
  taskType: string
  prompt: string
  responseText: string
  report: ScoreResult
}

export async function saveAttempt(input: SaveAttemptInput) {
  const userId = await getUserId()

  await db.insert(scoreAttempt).values({
    userId,
    skill: input.skill,
    taskType: input.taskType,
    prompt: input.prompt,
    responseText: input.responseText,
    celpipLevel: Math.round(input.report.overallLevel),
    overallLabel: input.report.summary.slice(0, 240),
    report: input.report,
  })

  revalidatePath('/dashboard')
  revalidatePath('/dashboard/history')
}

export type AttemptRecord = {
  id: number
  skill: string
  taskType: string
  prompt: string
  responseText: string
  celpipLevel: number
  report: ScoreResult
  createdAt: Date
}

export async function getAttempts(skill?: 'writing' | 'speaking') {
  const userId = await getUserId()

  const rows = await db
    .select()
    .from(scoreAttempt)
    .where(
      skill
        ? and(eq(scoreAttempt.userId, userId), eq(scoreAttempt.skill, skill))
        : eq(scoreAttempt.userId, userId),
    )
    .orderBy(desc(scoreAttempt.createdAt))

  return rows.map((r) => ({
    id: r.id,
    skill: r.skill,
    taskType: r.taskType,
    prompt: r.prompt,
    responseText: r.responseText,
    celpipLevel: r.celpipLevel,
    report: r.report as ScoreResult,
    createdAt: r.createdAt,
  })) satisfies AttemptRecord[]
}

export async function deleteAttempt(id: number) {
  const userId = await getUserId()
  await db
    .delete(scoreAttempt)
    .where(and(eq(scoreAttempt.id, id), eq(scoreAttempt.userId, userId)))
  revalidatePath('/dashboard/history')
}

export async function getStats() {
  const attempts = await getAttempts()
  const writing = attempts.filter((a) => a.skill === 'writing')
  const speaking = attempts.filter((a) => a.skill === 'speaking')

  const avg = (arr: AttemptRecord[]) =>
    arr.length
      ? Math.round(
          (arr.reduce((s, a) => s + a.celpipLevel, 0) / arr.length) * 10,
        ) / 10
      : null

  const best = (arr: AttemptRecord[]) =>
    arr.length ? Math.max(...arr.map((a) => a.celpipLevel)) : null

  return {
    total: attempts.length,
    writingCount: writing.length,
    speakingCount: speaking.length,
    writingAvg: avg(writing),
    speakingAvg: avg(speaking),
    bestLevel: best(attempts),
    recent: attempts.slice(0, 5),
  }
}
