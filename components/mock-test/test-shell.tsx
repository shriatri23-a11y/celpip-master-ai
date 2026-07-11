"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type TestShellProps = {
  headerTitle: string
  children: ReactNode
  onNext?: () => void
  onBack?: () => void
  nextLabel?: string
  nextDisabled?: boolean
  backDisabled?: boolean
  hideBack?: boolean
  footerLeft?: ReactNode
  /** Remaining seconds to display in the header (red). Omit to hide. */
  timerSeconds?: number | null
}

function formatTimer(seconds: number) {
  if (seconds >= 60) {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, "0")}`
  }
  return `${seconds} second${seconds === 1 ? "" : "s"}`
}

export function TestShell({
  headerTitle,
  children,
  onNext,
  onBack,
  nextLabel = "NEXT",
  nextDisabled,
  backDisabled,
  hideBack,
  footerLeft,
  timerSeconds,
}: TestShellProps) {
  return (
    <div className="flex h-dvh flex-col bg-mt-bg">
      {/* Header */}
      <header
        className="flex shrink-0 items-center justify-between gap-4 border-b border-mt-border px-6 py-3"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, var(--mt-header-top), var(--mt-header-bottom))",
        }}
      >
        <h1 className="truncate text-lg font-semibold text-mt-title">
          {headerTitle}
        </h1>
        <div className="flex items-center gap-5">
          {typeof timerSeconds === "number" && (
            <p className="whitespace-nowrap text-sm text-mt-title">
              Time remaining :{" "}
              <span className="font-bold text-mt-timer">
                {formatTimer(timerSeconds)}
              </span>
            </p>
          )}
          {onNext && (
            <button
              type="button"
              onClick={onNext}
              disabled={nextDisabled}
              className={cn(
                "rounded-sm bg-mt-next px-5 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-mt-next-hover",
                nextDisabled && "cursor-not-allowed opacity-50",
              )}
            >
              {nextLabel}
            </button>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="mt-scroll min-h-0 flex-1 overflow-y-auto">
        {children}
      </main>

      {/* Footer */}
      <footer
        className="flex shrink-0 items-center justify-between gap-4 border-t border-mt-border px-6 py-3"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, var(--mt-header-top), var(--mt-header-bottom))",
        }}
      >
        <div className="flex items-center">{footerLeft}</div>
        {!hideBack && (
          <button
            type="button"
            onClick={onBack}
            disabled={backDisabled}
            className={cn(
              "rounded-sm bg-mt-back px-6 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-mt-back-hover",
              backDisabled && "cursor-not-allowed opacity-50",
            )}
          >
            BACK
          </button>
        )}
      </footer>
    </div>
  )
}

/** Small blue info/bang badge used beside instruction headings. */
export function InfoBadge({ variant = "info" }: { variant?: "info" | "bang" }) {
  return (
    <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-mt-next text-sm font-bold text-white">
      {variant === "info" ? "i" : "!"}
    </span>
  )
}
