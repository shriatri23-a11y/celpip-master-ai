"use client"

import { useState } from "react"
import { CheckCircle2, XCircle, ChevronRight, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ReviewGroup, ReviewQuestion } from "@/lib/mock-test/review"

export function ReviewAuto({
  section,
  groups,
  scoreCard,
}: {
  section: string
  groups: ReviewGroup[]
  scoreCard?: React.ReactNode
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = groups[activeIndex]

  if (!groups.length) {
    return (
      <p className="py-12 text-center text-mt-body">
        No questions were recorded for this section.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
      {/* Sidebar: score + groups */}
      <aside className="flex flex-col gap-6 lg:sticky lg:top-6 lg:self-start">
        {scoreCard}
        <div className="rounded-xl border border-mt-border bg-white p-5">
          <h2 className="mb-4 text-lg font-bold text-[#222]">Groups</h2>
          <ul className="flex flex-col gap-2">
            {groups.map((g, i) => (
              <li key={g.title}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors",
                    i === activeIndex
                      ? "border-mt-next bg-mt-next/5 text-mt-next"
                      : "border-mt-border bg-white text-[#333] hover:bg-black/[0.02]",
                  )}
                >
                  <span className="truncate pr-2">{g.title}</span>
                  <span
                    className={cn(
                      "shrink-0 tabular-nums",
                      g.correct === g.total
                        ? "text-emerald-600"
                        : "text-mt-body",
                    )}
                  >
                    {g.correct}/{g.total}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Group breakdown */}
      <section>
        <div className="mb-6 rounded-xl border border-mt-border bg-gradient-to-br from-mt-next/5 to-transparent p-6">
          <h3 className="text-xl font-bold text-[#222]">{active.title}</h3>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-sm text-mt-body">
              {active.correct}/{active.total} correct
            </span>
            <div className="h-2 w-40 overflow-hidden rounded-full bg-mt-border">
              <div
                className="h-full rounded-full bg-emerald-500"
                style={{
                  width: `${active.total ? (active.correct / active.total) * 100 : 0}%`,
                }}
              />
            </div>
          </div>
        </div>

        {active.passage && <PassageBox passage={active.passage} />}

        <div className="flex flex-col gap-8">
          {active.questions.map((q) => (
            <QuestionRow key={q.id} section={section} question={q} />
          ))}
        </div>
      </section>
    </div>
  )
}

function PassageBox({ passage }: { passage: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mb-6 rounded-lg border border-mt-border bg-white">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold uppercase tracking-wide text-mt-body">
          Reading Passage
        </span>
        <ChevronRight
          className={cn(
            "size-5 text-mt-body transition-transform",
            open && "rotate-90",
          )}
        />
      </button>
      {open && (
        <div className="border-t border-mt-border px-5 py-4">
          {passage.split("\n\n").map((p, i) => (
            <p key={i} className="mb-3 leading-relaxed text-mt-body last:mb-0">
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

function QuestionRow({
  section,
  question,
}: {
  section: string
  question: ReviewQuestion
}) {
  const [open, setOpen] = useState(false)
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const toggle = async () => {
    const next = !open
    setOpen(next)
    if (next && analysis === null && !loading) {
      setLoading(true)
      try {
        const res = await fetch("/api/analyze-question", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            section,
            questionPrompt: question.prompt,
            options: question.options,
            yourAnswer: question.yourAnswer,
            correctAnswer: question.correctAnswer,
            isCorrect: question.isCorrect,
            passage: question.context,
          }),
        })
        const data = await res.json()
        setAnalysis(
          res.ok ? data.analysis : "Analysis is unavailable right now.",
        )
      } catch {
        setAnalysis("Analysis is unavailable right now.")
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div>
      <div className="flex gap-3">
        <span className="mt-0.5 shrink-0">
          {question.isCorrect ? (
            <CheckCircle2 className="size-6 text-emerald-500" />
          ) : (
            <XCircle className="size-6 text-mt-timer" />
          )}
        </span>
        <div className="flex-1">
          <p className="text-lg font-semibold leading-snug text-[#222]">
            {question.number}. {question.prompt}
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div
              className={cn(
                "rounded-lg border p-4",
                question.isCorrect
                  ? "border-emerald-100 bg-emerald-50/40"
                  : "border-mt-border bg-black/[0.02]",
              )}
            >
              <p className="mb-1 text-sm font-semibold text-mt-body">
                Your Answer
              </p>
              <p className="text-[#222]">
                {question.yourAnswer || (
                  <span className="italic text-mt-body">No answer</span>
                )}
              </p>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <p className="mb-1 text-sm font-semibold text-emerald-700">
                Correct Answer
              </p>
              <p className="text-emerald-900">{question.correctAnswer}</p>
            </div>
          </div>

          <div className="mt-4 border-t border-mt-border pt-3">
            <button
              type="button"
              onClick={toggle}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-semibold text-[#1a2b47]">AI Analysis</span>
              {loading ? (
                <Loader2 className="size-5 animate-spin text-mt-body" />
              ) : (
                <ChevronRight
                  className={cn(
                    "size-5 text-mt-body transition-transform",
                    open && "rotate-90",
                  )}
                />
              )}
            </button>
            {open && analysis && (
              <p className="mt-3 leading-relaxed text-mt-body">{analysis}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
