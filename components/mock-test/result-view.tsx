"use client"

import { CheckCircle2, RotateCcw, LayoutDashboard } from "lucide-react"
import type { MockTest } from "@/lib/mock-test/types"

type Results = {
  total: number
  correct: number
  pct: number
  level: number
  label: string
}

export function ResultView({
  test,
  results,
  onExit,
  onReview,
}: {
  test: MockTest
  results: Results
  onExit: () => void
  onReview: () => void
}) {
  const pct = Math.round(results.pct * 100)

  return (
    <div className="mx-auto max-w-2xl px-8 py-12">
      <div className="rounded-xl border border-mt-border bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="size-8" />
        </div>
        <h2 className="text-2xl font-bold text-[#222]">Test complete</h2>
        <p className="mt-1 text-mt-body">{test.title}</p>

        <div className="my-8 flex items-center justify-center gap-8">
          <div>
            <p className="text-4xl font-bold text-mt-next">{results.level}</p>
            <p className="text-sm text-mt-body">Est. CELPIP level</p>
          </div>
          <div className="h-12 w-px bg-mt-border" />
          <div>
            <p className="text-4xl font-bold text-[#222]">
              {results.correct}
              <span className="text-2xl text-mt-body">/{results.total}</span>
            </p>
            <p className="text-sm text-mt-body">Correct answers</p>
          </div>
          <div className="h-12 w-px bg-mt-border" />
          <div>
            <p className="text-4xl font-bold text-[#222]">{pct}%</p>
            <p className="text-sm text-mt-body">Score</p>
          </div>
        </div>

        <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-mt-border">
          <div
            className="h-full rounded-full bg-mt-next"
            style={{ width: `${pct}%` }}
          />
        </div>

        <p className="mb-8 text-mt-body">
          Estimated performance level:{" "}
          <span className="font-semibold text-[#222]">{results.label}</span>. Your
          result has been saved to your score history.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={onReview}
            className="inline-flex items-center gap-2 rounded-sm border border-mt-border bg-white px-5 py-2.5 text-sm font-semibold text-mt-body transition-colors hover:bg-black/[0.03]"
          >
            <RotateCcw className="size-4" />
            Review from start
          </button>
          <button
            type="button"
            onClick={onExit}
            className="inline-flex items-center gap-2 rounded-sm bg-mt-next px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-mt-next-hover"
          >
            <LayoutDashboard className="size-4" />
            Back to mock tests
          </button>
        </div>
      </div>
    </div>
  )
}
