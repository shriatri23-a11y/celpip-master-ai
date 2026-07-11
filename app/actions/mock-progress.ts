'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { mockSectionProgress } from '@/lib/db/schema'
import { and, eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export type SectionName = 'listening' | 'reading' | 'writing' | 'speaking'
export type SectionStatus = 'not_started' | 'in_progress' | 'completed'

export type SectionProgress = {
  section: SectionName
  status: SectionStatus
  stepIndex: number
  answers: Record<string, string>
  level: number | null
  label: string | null
  correct: number | null
  total: number | null
  reviewData: unknown
}

/** Returns a map of section -> progress for one exam (defaults to not_started). */
export async function getExamProgress(
  examId: string,
): Promise<Record<SectionName, SectionProgress>> {
  const userId = await getUserId()
  const rows = await db
    .select()
    .from(mockSectionProgress)
    .where(
      and(
        eq(mockSectionProgress.userId, userId),
        eq(mockSectionProgress.examId, examId),
      ),
    )

  const base: Record<SectionName, SectionProgress> = {
    listening: emptyProgress('listening'),
    reading: emptyProgress('reading'),
    writing: emptyProgress('writing'),
    speaking: emptyProgress('speaking'),
  }

  for (const r of rows) {
    const s = r.section as SectionName
    if (!base[s]) continue
    base[s] = {
      section: s,
      status: r.status as SectionStatus,
      stepIndex: r.stepIndex,
      answers: (r.answers as Record<string, string>) ?? {},
      level: r.level,
      label: r.label,
      correct: r.correct,
      total: r.total,
      reviewData: r.reviewData ?? null,
    }
  }
  return base
}

function emptyProgress(section: SectionName): SectionProgress {
  return {
    section,
    status: 'not_started',
    stepIndex: 0,
    answers: {},
    level: null,
    label: null,
    correct: null,
    total: null,
    reviewData: null,
  }
}

/** Upserts autosave state while a section is in progress. */
export async function saveSectionProgress(input: {
  examId: string
  section: SectionName
  stepIndex: number
  answers: Record<string, string>
}) {
  const userId = await getUserId()
  await db
    .insert(mockSectionProgress)
    .values({
      userId,
      examId: input.examId,
      section: input.section,
      status: 'in_progress',
      stepIndex: input.stepIndex,
      answers: input.answers,
      updatedAt: new Date(),
    })
    .onConflictDoUpdate({
      target: [
        mockSectionProgress.userId,
        mockSectionProgress.examId,
        mockSectionProgress.section,
      ],
      set: {
        status: 'in_progress',
        stepIndex: input.stepIndex,
        answers: input.answers,
        updatedAt: new Date(),
      },
    })
}

/** Marks a section complete with its scored result. */
export async function completeSectionProgress(input: {
  examId: string
  section: SectionName
  answers: Record<string, string>
  level: number
  label: string
  correct: number
  total: number
  // Stored AI task reports (writing/speaking) so a past attempt can be viewed.
  reviewData?: unknown
}) {
  const userId = await getUserId()
  const now = new Date()
  await db
    .insert(mockSectionProgress)
    .values({
      userId,
      examId: input.examId,
      section: input.section,
      status: 'completed',
      answers: input.answers,
      level: input.level,
      label: input.label,
      correct: input.correct,
      total: input.total,
      reviewData: input.reviewData ?? null,
      completedAt: now,
      updatedAt: now,
    })
    .onConflictDoUpdate({
      target: [
        mockSectionProgress.userId,
        mockSectionProgress.examId,
        mockSectionProgress.section,
      ],
      set: {
        status: 'completed',
        answers: input.answers,
        level: input.level,
        label: input.label,
        correct: input.correct,
        total: input.total,
        reviewData: input.reviewData ?? null,
        completedAt: now,
        updatedAt: now,
      },
    })
  revalidatePath(`/dashboard/mock-tests/${input.examId}`)
}

/** Clears a section so it can be retaken/restarted. */
export async function resetSectionProgress(input: {
  examId: string
  section: SectionName
}) {
  const userId = await getUserId()
  await db
    .delete(mockSectionProgress)
    .where(
      and(
        eq(mockSectionProgress.userId, userId),
        eq(mockSectionProgress.examId, input.examId),
        eq(mockSectionProgress.section, input.section),
      ),
    )
  revalidatePath(`/dashboard/mock-tests/${input.examId}`)
}
