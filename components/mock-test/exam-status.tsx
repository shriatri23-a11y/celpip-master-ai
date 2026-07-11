"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Headphones, Mic, BookOpen, PenLine } from "lucide-react"
import { resetSectionProgress } from "@/app/actions/mock-progress"
import type {
  SectionName,
  SectionProgress,
} from "@/app/actions/mock-progress"
import { cn } from "@/lib/utils"

const SECTION_META: Record<
  SectionName,
  { label: string; icon: typeof Headphones }
> = {
  listening: { label: "Listening", icon: Headphones },
  reading: { label: "Reading", icon: BookOpen },
  writing: { label: "Writing", icon: PenLine },
  speaking: { label: "Speaking", icon: Mic },
}

// Card order matches the screenshot: Listening, Speaking, Reading, Writing.
const CARD_ORDER: SectionName[] = [
  "listening",
  "speaking",
  "reading",
  "writing",
]

function StatusBadge({ status }: { status: SectionProgress["status"] }) {
  if (status === "completed") {
    return (
      <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-600">
        Completed
      </span>
    )
  }
  if (status === "in_progress") {
    return (
      <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-600">
        In Progress
      </span>
    )
  }
  return (
    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-500">
      Not Started
    </span>
  )
}

function statusSubtitle(p: SectionProgress) {
  if (p.status === "completed") {
    return p.level ? `Completed · Level ${p.level}` : "Completed"
  }
  if (p.status === "in_progress") return "In Progress"
  return "Not started yet"
}

export function ExamStatus({
  examId,
  progress,
}: {
  examId: string
  progress: Record<SectionName, SectionProgress>
}) {
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  const [busy, setBusy] = useState<string | null>(null)

  function start(section: SectionName, restart = false) {
    const url = `/mock-test/${examId}/${section}${restart ? "?restart=1" : ""}`
    router.push(url)
  }

  function retake(section: SectionName) {
    setBusy(section)
    startTransition(async () => {
      await resetSectionProgress({ examId, section })
      setBusy(null)
      start(section, true)
    })
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {CARD_ORDER.map((section) => {
        const meta = SECTION_META[section]
        const p = progress[section]
        const Icon = meta.icon
        const isBusy = (pending || busy === section) && busy === section
        return (
          <div
            key={section}
            className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {meta.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {statusSubtitle(p)}
                  </p>
                </div>
              </div>
              <StatusBadge status={p.status} />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              {p.status === "completed" && (
                <button
                  type="button"
                  disabled={isBusy}
                  onClick={() => retake(section)}
                  className={cn(
                    "rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90",
                    isBusy && "opacity-60",
                  )}
                >
                  {isBusy ? "Starting…" : "Retake"}
                </button>
              )}

              {p.status === "in_progress" && (
                <>
                  <button
                    type="button"
                    disabled={isBusy}
                    onClick={() => retake(section)}
                    className="rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                  >
                    Restart
                  </button>
                  <button
                    type="button"
                    onClick={() => start(section)}
                    className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Continue
                  </button>
                </>
              )}

              {p.status === "not_started" && (
                <button
                  type="button"
                  onClick={() => start(section)}
                  className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Start
                </button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
