"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import type { TaskReview } from "@/lib/mock-test/review"

export function ReviewAi({
  tasks,
  scoreCard,
}: {
  tasks: TaskReview[]
  scoreCard?: React.ReactNode
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = tasks[activeIndex]

  if (!tasks.length) {
    return (
      <p className="py-12 text-center text-mt-body">
        No responses were recorded for this section.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
      {/* Sidebar: score + tasks */}
      <aside className="flex flex-col gap-6 lg:sticky lg:top-6 lg:self-start">
        {scoreCard}
        <div className="rounded-xl border border-mt-border bg-white p-5">
          <h2 className="mb-4 text-lg font-bold text-[#222]">Tasks</h2>
          <ul className="flex flex-col gap-2">
            {tasks.map((t, i) => (
              <li key={t.id}>
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
                  <span className="truncate pr-2">{t.taskType}</span>
                  <span className="shrink-0 tabular-nums text-mt-body">
                    {t.report ? `${t.report.overallLevel}/12` : "—"}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <section>
        <TaskReviewPanel task={active} />
      </section>
    </div>
  )
}

function TaskReviewPanel({ task }: { task: TaskReview }) {
  const report = task.report
  return (
    <div className="flex flex-col gap-6">
      {/* Prompt banner */}
      <div className="rounded-xl border border-mt-border bg-gradient-to-br from-mt-next/5 to-transparent p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-mt-body">
          {task.taskType}
        </p>
        <p className="mt-2 whitespace-pre-line font-medium leading-relaxed text-mt-blue">
          {task.prompt}
        </p>
      </div>

      {/* Response comparison */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-mt-border bg-white p-5">
          <p className="mb-3 font-semibold text-[#222]">Your Response</p>
          <p className="leading-relaxed text-mt-body">
            {report?.weakPhrases?.length ? (
              highlight(task.response, report.weakPhrases)
            ) : (
              task.response || (
                <span className="italic">No response recorded.</span>
              )
            )}
          </p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5">
          <p className="mb-3 font-semibold text-emerald-700">
            Suggested Response
          </p>
          <p className="leading-relaxed text-emerald-900">
            {report?.suggestedResponse ?? "Model answer unavailable."}
          </p>
        </div>
      </div>

      {report && (
        <>
          {/* Dimension score + explanation */}
          <div className="rounded-xl border border-mt-border bg-white p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold text-[#222]">
                Question Explanation
              </h3>
              <div className="text-right">
                <p className="text-xs font-semibold uppercase tracking-wide text-mt-body">
                  Dimension Score
                </p>
                <p className="text-3xl font-bold text-[#222]">
                  {report.overallLevel}
                  <span className="text-xl text-mt-body"> / 12</span>
                </p>
                <span className="mt-1 inline-block rounded-full bg-mt-next/10 px-3 py-1 text-xs font-semibold text-mt-next">
                  Estimated CELPIP {report.overallLevel}
                </span>
              </div>
            </div>

            <h4 className="mt-6 font-bold text-mt-back">Why this score</h4>
            <ul className="mt-2 flex flex-col gap-2">
              {report.criteria.map((c) => (
                <li key={c.name} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mt-body" />
                  <span className="leading-relaxed text-mt-body">
                    <span className="font-semibold text-[#222]">
                      {c.name} ({c.score}/12):
                    </span>{" "}
                    {c.feedback}
                  </span>
                </li>
              ))}
            </ul>

            <h4 className="mt-6 font-bold text-mt-back">How to improve</h4>
            <ul className="mt-2 flex flex-col gap-2">
              {report.improvements.map((imp, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mt-next" />
                  <span className="leading-relaxed text-mt-body">{imp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Strengths */}
          {report.strengths.length > 0 && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-6">
              <h4 className="font-bold text-emerald-700">What you did well</h4>
              <ul className="mt-2 flex flex-col gap-2">
                {report.strengths.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                    <span className="leading-relaxed text-emerald-900">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  )
}

/** Renders text with the given phrases underlined/highlighted in red. */
function highlight(text: string, phrases: string[]) {
  if (!text) return <span className="italic">No response recorded.</span>
  // Build a set of match ranges.
  const ranges: { start: number; end: number }[] = []
  for (const phrase of phrases) {
    if (!phrase) continue
    let from = 0
    const lower = text.toLowerCase()
    const target = phrase.toLowerCase()
    while (true) {
      const idx = lower.indexOf(target, from)
      if (idx === -1) break
      ranges.push({ start: idx, end: idx + phrase.length })
      from = idx + phrase.length
    }
  }
  if (!ranges.length) return text
  ranges.sort((a, b) => a.start - b.start)

  // Merge overlaps.
  const merged: { start: number; end: number }[] = []
  for (const r of ranges) {
    const last = merged[merged.length - 1]
    if (last && r.start <= last.end) last.end = Math.max(last.end, r.end)
    else merged.push({ ...r })
  }

  const parts: React.ReactNode[] = []
  let cursor = 0
  merged.forEach((r, i) => {
    if (cursor < r.start) parts.push(text.slice(cursor, r.start))
    parts.push(
      <mark
        key={i}
        className="rounded bg-mt-timer/10 px-0.5 text-mt-timer underline decoration-mt-timer/60 underline-offset-2"
      >
        {text.slice(r.start, r.end)}
      </mark>,
    )
    cursor = r.end
  })
  if (cursor < text.length) parts.push(text.slice(cursor))
  return parts
}
