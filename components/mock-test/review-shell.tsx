"use client"

import Link from "next/link"
import { ReviewAuto } from "./review-auto"
import { ReviewAi } from "./review-ai"
import type { ReviewGroup, TaskReview } from "@/lib/mock-test/review"

const SECTION_LABEL: Record<string, string> = {
  listening: "Listening",
  reading: "Reading",
  writing: "Writing",
  speaking: "Speaking",
}

export function ReviewShell({
  examId,
  examTitle,
  section,
  level,
  autoGroups,
  aiTasks,
}: {
  examId: string
  examTitle: string
  section: string
  level: number | null
  autoGroups?: ReviewGroup[]
  aiTasks?: TaskReview[]
}) {
  const sectionLabel = SECTION_LABEL[section] ?? section

  const scoreCard = (
    <div className="rounded-xl border border-mt-border bg-white p-6">
      <p className="text-mt-body">Overall Score</p>
      <p className="mt-1 text-4xl font-bold text-[#222]">
        CLB {level ?? "—"}
        <span className="text-lg font-medium text-mt-body"> /12</span>
      </p>
      <p className="mt-3 text-sm text-mt-body">
        {sectionLabel} section of {examTitle}.
      </p>
      <Link
        href={`/dashboard/mock-tests/${examId}`}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-mt-next px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-mt-next-hover"
      >
        Back to exam
      </Link>
    </div>
  )

  return (
    <div className="min-h-screen bg-mt-bg">
      {/* Top gradient accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-teal-400 via-mt-next to-indigo-700" />

      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-mt-body">
          <Link href="/dashboard/mock-tests" className="hover:text-mt-next">
            Mock Exams
          </Link>
          <span>/</span>
          <Link
            href={`/dashboard/mock-tests/${examId}`}
            className="hover:text-mt-next"
          >
            {examTitle}
          </Link>
          <span>/</span>
          <span className="font-medium text-[#222]">{sectionLabel} Review</span>
        </nav>

        {autoGroups ? (
          <ReviewAuto
            section={section}
            groups={autoGroups}
            scoreCard={scoreCard}
          />
        ) : (
          <ReviewAi tasks={aiTasks ?? []} scoreCard={scoreCard} />
        )}
      </div>
    </div>
  )
}
