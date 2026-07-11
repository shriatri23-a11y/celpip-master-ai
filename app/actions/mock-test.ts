"use server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { scoreAttempt } from "@/lib/db/schema"
import { headers } from "next/headers"
import { revalidatePath } from "next/cache"

async function getUserId() {
  const s = await auth.api.getSession({ headers: await headers() })
  if (!s?.user) throw new Error("Unauthorized")
  return s.user.id
}

type SaveMockResultInput = {
  testId: string
  title: string
  section: "listening" | "reading" | "writing" | "speaking"
  correct: number
  total: number
  level: number
  label: string
}

export async function saveMockTestResult(input: SaveMockResultInput) {
  const userId = await getUserId()
  await db.insert(scoreAttempt).values({
    userId,
    skill: input.section,
    taskType: input.title,
    prompt: `Mock test — ${input.title}`,
    responseText: `${input.correct}/${input.total} correct`,
    celpipLevel: input.level,
    overallLabel: input.label,
    report: {
      kind: "mock-test",
      testId: input.testId,
      section: input.section,
      correct: input.correct,
      total: input.total,
      pct: input.total ? input.correct / input.total : 0,
    },
  })
  revalidatePath("/dashboard")
  revalidatePath("/dashboard/history")
}
