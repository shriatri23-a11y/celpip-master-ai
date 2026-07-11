"use client"

import { useState, useTransition } from "react"
import {
  PenLine,
  Mic,
  BookOpen,
  Trash2,
  ChevronDown,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react"
import { ScoreReport } from "@/components/dashboard/score-report"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  deleteAttempt,
  type AttemptRecord,
  type ReadingReview,
} from "@/app/actions/score-history"

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
}

function ReadingReviewView({ review }: { review: ReadingReview }) {
  return (
    <div className="flex flex-col gap-4">
      {review.questions.map((q, qi) => (
        <div key={qi} className="rounded-xl border border-border bg-card p-4">
          <p className="text-sm font-medium text-card-foreground">
            <span className="text-muted-foreground">{qi + 1}. </span>
            {q.prompt}
          </p>
          <div className="mt-3 flex flex-col gap-1.5">
            {q.options.map((opt, oi) => {
              const isCorrect = oi === q.correctIndex
              const isSelected = oi === q.selectedIndex
              return (
                <div
                  key={oi}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm",
                    isCorrect && "border-success bg-success/10 text-foreground",
                    isSelected &&
                      !isCorrect &&
                      "border-destructive bg-destructive/10 text-foreground",
                    !isCorrect &&
                      !isSelected &&
                      "border-border text-muted-foreground",
                  )}
                >
                  <span className="flex-1">{opt}</span>
                  {isCorrect && (
                    <CheckCircle2 className="size-4 shrink-0 text-success" />
                  )}
                  {isSelected && !isCorrect && (
                    <XCircle className="size-4 shrink-0 text-destructive" />
                  )}
                </div>
              )
            })}
          </div>
          <p className="mt-3 rounded-lg bg-muted px-3 py-2 text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Explanation: </span>
            {q.explanation}
          </p>
        </div>
      ))}
    </div>
  )
}

function AttemptCard({ attempt }: { attempt: AttemptRecord }) {
  const [open, setOpen] = useState(false)
  const [pending, startTransition] = useTransition()
  const isReading = attempt.skill === "reading"
  const Icon =
    attempt.skill === "writing"
      ? PenLine
      : attempt.skill === "reading"
        ? BookOpen
        : Mic

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center gap-4 p-4">
        <span
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-xl",
            attempt.skill === "writing"
              ? "bg-primary/10 text-primary"
              : attempt.skill === "reading"
                ? "bg-accent text-accent-foreground"
                : "bg-success/10 text-success",
          )}
        >
          <Icon className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-card-foreground">
            {attempt.taskType}
          </p>
          <p className="text-xs text-muted-foreground">
            {formatDate(attempt.createdAt)}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-center">
          <span className="font-display text-xl font-bold text-primary">
            {attempt.celpipLevel}
          </span>
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
            level
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Hide details" : "Show details"}
        >
          <ChevronDown
            className={cn("size-4 transition-transform", open && "rotate-180")}
          />
        </Button>
      </div>

      {open && (
        <div className="border-t border-border bg-muted/30 p-5">
          <div className="mb-5 rounded-xl border border-border bg-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Task
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground/80">
              {attempt.prompt}
            </p>
            {!isReading && (
              <>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Your response
                </p>
                <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-foreground/80">
                  {attempt.responseText}
                </p>
              </>
            )}
          </div>

          {isReading ? (
            <ReadingReviewView
              review={attempt.report as unknown as ReadingReview}
            />
          ) : (
            <ScoreReport result={attempt.report} />
          )}

          <div className="mt-4 flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              className="text-destructive hover:bg-destructive/10 hover:text-destructive"
              disabled={pending}
              onClick={() =>
                startTransition(async () => {
                  await deleteAttempt(attempt.id)
                })
              }
            >
              {pending ? (
                <Loader2 className="size-3.5 animate-spin" />
              ) : (
                <Trash2 className="size-3.5" />
              )}
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export function HistoryList({ attempts }: { attempts: AttemptRecord[] }) {
  const [filter, setFilter] = useState<
    "all" | "writing" | "speaking" | "reading"
  >("all")

  const filtered = attempts.filter((a) =>
    filter === "all" ? true : a.skill === filter,
  )

  const filters = [
    { id: "all", label: "All" },
    { id: "writing", label: "Writing" },
    { id: "speaking", label: "Speaking" },
    { id: "reading", label: "Reading" },
  ] as const

  return (
    <div className="mt-8">
      <div className="flex gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              filter === f.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center">
          <p className="font-display font-semibold text-foreground">
            No attempts yet
          </p>
          <p className="mt-1 max-w-xs text-sm text-muted-foreground">
            Complete a writing, speaking, or reading task and your scored
            attempts will show up here.
          </p>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-3">
          {filtered.map((a) => (
            <AttemptCard key={a.id} attempt={a} />
          ))}
        </div>
      )}
    </div>
  )
}
