'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { aiReadingTest } from '@/lib/db/schema'
import { desc, eq, sql } from 'drizzle-orm'
import { headers } from 'next/headers'
import type { ReadingPart, ReadingPracticeTest } from '@/lib/reading-practice/types'

/** Returns the current user id, or null when signed out (community browsing is public). */
async function getOptionalUserId() {
  try {
    const session = await auth.api.getSession({ headers: await headers() })
    return session?.user?.id ?? null
  } catch {
    return null
  }
}

/** Convert a DB row into the shared ReadingPracticeTest shape used by the runner. */
function rowToTest(r: typeof aiReadingTest.$inferSelect): ReadingPracticeTest {
  const data = r.data as Omit<ReadingPracticeTest, 'id' | 'source' | 'dbId'>
  return {
    ...data,
    id: `ai-${r.id}`,
    part: r.part as ReadingPart,
    partLabel: r.partLabel,
    title: r.title,
    topic: r.topic ?? undefined,
    source: 'ai',
    authorName: r.createdByName ?? undefined,
    dbId: r.id,
    attempts: r.attempts,
  }
}

/** All published community reading tests, newest first. */
export async function getCommunityReadingTests(): Promise<ReadingPracticeTest[]> {
  const rows = await db
    .select()
    .from(aiReadingTest)
    .where(eq(aiReadingTest.published, true))
    .orderBy(desc(aiReadingTest.createdAt))
  return rows.map(rowToTest)
}

/** A single community test by its DB id. */
export async function getCommunityReadingTest(dbId: number): Promise<ReadingPracticeTest | null> {
  const rows = await db.select().from(aiReadingTest).where(eq(aiReadingTest.id, dbId)).limit(1)
  return rows[0] ? rowToTest(rows[0]) : null
}

/** Increment the attempt counter for a community test (best-effort). */
export async function recordReadingAttempt(dbId: number) {
  try {
    await db
      .update(aiReadingTest)
      .set({ attempts: sql`${aiReadingTest.attempts} + 1` })
      .where(eq(aiReadingTest.id, dbId))
  } catch {
    // Non-critical; ignore failures.
  }
}
