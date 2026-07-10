"use client"

import { useState, useTransition } from "react"
import { PenLine, Mic, Trash2, ChevronDown, Loader2 } from "lucide-react"
import { ScoreReport } from "@/components/dashboard/score-report"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { deleteAttempt, type AttemptRecord } from "@/app/actions/score-history"

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
}

function AttemptCard({ attempt }: { attempt: AttemptRecord }) {
  const [open, setOpen] = useState(false)
  const [pending, startTransition] = useTransition()
  const Icon = attempt.skill === "writing" ? PenLine : Mic

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center gap-4 p-4">
        <span
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-xl",
            attempt.skill === "writing"
              ? "bg-primary/10 text-primary"
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
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Your response
            </p>
            <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-foreground/80">
              {attempt.responseText}
            </p>
          </div>

          <ScoreReport result={attempt.report} />

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
  const [filter, setFilter] = useState<"all" | "writing" | "speaking">("all")

  const filtered = attempts.filter((a) =>
    filter === "all" ? true : a.skill === filter,
  )

  const filters = [
    { id: "all", label: "All" },
    { id: "writing", label: "Writing" },
    { id: "speaking", label: "Speaking" },
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
            Complete a writing or speaking task and your scored attempts will
            show up here.
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
