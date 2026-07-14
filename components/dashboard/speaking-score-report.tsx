"use client"

import { useState } from "react"
import { Check, TrendingUp, Sparkles, Lightbulb, Mic2, AlertCircle, ChevronDown, ChevronUp } from "lucide-react"
import type { ScoreResult } from "@/lib/scoring-schema"
import { levelDescriptor } from "@/lib/celpip"
import { cn } from "@/lib/utils"

/**
 * Splits transcript text into segments, wrapping weak phrases in a highlight span.
 * Returns an array of { text, weak } segments.
 */
function highlightWeakPhrases(
  text: string,
  phrases: string[]
): { text: string; weak: boolean }[] {
  if (!phrases.length || !text) return [{ text, weak: false }]

  // Sort by length descending so longer matches take priority
  const sorted = [...phrases].filter(Boolean).sort((a, b) => b.length - a.length)

  // Build a regex alternation with escaped phrases
  const escaped = sorted.map((p) =>
    p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  )
  const pattern = new RegExp(`(${escaped.join("|")})`, "gi")

  const parts = text.split(pattern)
  return parts.map((part) => ({
    text: part,
    weak: phrases.some((p) => p.toLowerCase() === part.toLowerCase()),
  }))
}

function TranscriptWithHighlights({
  transcript,
  weakPhrases,
}: {
  transcript: string
  weakPhrases: string[]
}) {
  const segments = highlightWeakPhrases(transcript, weakPhrases)
  return (
    <p className="text-sm leading-relaxed text-foreground">
      {segments.map((seg, i) =>
        seg.weak ? (
          <mark
            key={i}
            className="rounded bg-amber-100 px-0.5 text-amber-900 underline decoration-amber-400 decoration-wavy decoration-1 not-italic"
            title="Flagged for improvement"
          >
            {seg.text}
          </mark>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </p>
  )
}

function ScoreBar({ score }: { score: number }) {
  const pct = (score / 12) * 100
  const color =
    score >= 9
      ? "bg-success"
      : score >= 7
      ? "bg-primary"
      : score >= 5
      ? "bg-amber-500"
      : "bg-destructive"
  return (
    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
      <div
        className={cn("h-full rounded-full transition-all duration-700", color)}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

export function SpeakingScoreReport({
  result,
  transcript,
}: {
  result: ScoreResult
  transcript: string
}) {
  const [showModel, setShowModel] = useState(false)
  const [showTranscript, setShowTranscript] = useState(false)

  const overallColor =
    result.overallLevel >= 9
      ? "bg-success text-success-foreground"
      : result.overallLevel >= 7
      ? "bg-primary text-primary-foreground"
      : result.overallLevel >= 5
      ? "bg-amber-500 text-white"
      : "bg-destructive text-white"

  return (
    <div className="space-y-4">
      {/* Overall level card */}
      <div className="rounded-2xl border border-border bg-foreground p-5 text-background">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-background/60 uppercase tracking-wider">Estimated level</p>
            <p className="mt-1 font-display text-sm font-semibold text-background">
              {levelDescriptor(result.overallLevel)}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-background/75">{result.summary}</p>
          </div>
          <div
            className={cn(
              "flex size-16 shrink-0 flex-col items-center justify-center rounded-2xl",
              overallColor
            )}
          >
            <span className="font-display text-2xl font-bold leading-none">
              {result.overallLevel}
            </span>
            <span className="text-[10px] uppercase tracking-wide opacity-80">/ 12</span>
          </div>
        </div>
      </div>

      {/* Criteria grid */}
      <div className="grid grid-cols-2 gap-3">
        {result.criteria.map((c) => (
          <div key={c.name} className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-semibold text-card-foreground leading-tight">{c.name}</p>
              <span className="font-display text-base font-bold text-primary shrink-0">
                {c.score}
                <span className="text-xs text-muted-foreground">/12</span>
              </span>
            </div>
            <ScoreBar score={c.score} />
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.feedback}</p>
          </div>
        ))}
      </div>

      {/* Strengths + improvements */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-border bg-success/5 p-4">
          <p className="flex items-center gap-2 text-xs font-semibold text-foreground">
            <TrendingUp className="size-3.5 text-success" />
            Strengths
          </p>
          <ul className="mt-2 space-y-1.5">
            {result.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs text-foreground/80">
                <Check className="mt-0.5 size-3.5 shrink-0 text-success" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-primary/5 p-4">
          <p className="flex items-center gap-2 text-xs font-semibold text-foreground">
            <Lightbulb className="size-3.5 text-primary" />
            Focus on next
          </p>
          <ul className="mt-2 space-y-1.5">
            {result.improvements.map((s, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs text-foreground/80">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Weak phrase highlight panel */}
      {result.weakPhrases && result.weakPhrases.length > 0 && transcript && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <button
            type="button"
            onClick={() => setShowTranscript((v) => !v)}
            className="flex w-full items-center justify-between text-left"
          >
            <p className="flex items-center gap-2 text-xs font-semibold text-amber-800">
              <AlertCircle className="size-3.5" />
              Phrases to improve ({result.weakPhrases.length})
            </p>
            {showTranscript ? (
              <ChevronUp className="size-4 text-amber-600" />
            ) : (
              <ChevronDown className="size-4 text-amber-600" />
            )}
          </button>

          {showTranscript && (
            <div className="mt-3 space-y-3">
              <TranscriptWithHighlights
                transcript={transcript}
                weakPhrases={result.weakPhrases}
              />
              <div className="flex flex-wrap gap-1.5 pt-1">
                {result.weakPhrases.map((phrase, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 border border-amber-200"
                  >
                    &ldquo;{phrase}&rdquo;
                  </span>
                ))}
              </div>
              {result.revisedExample && (
                <div className="rounded-xl bg-white border border-amber-200 p-3">
                  <p className="text-xs font-semibold text-amber-800 mb-1">Better phrasing:</p>
                  <p className="text-xs italic leading-relaxed text-amber-900">
                    {result.revisedExample}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Model answer */}
      {result.suggestedResponse && (
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <button
            type="button"
            onClick={() => setShowModel((v) => !v)}
            className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/30 transition-colors"
          >
            <p className="flex items-center gap-2 font-display text-sm font-semibold text-card-foreground">
              <Mic2 className="size-4 text-primary" />
              Band 11–12 model answer
            </p>
            {showModel ? (
              <ChevronUp className="size-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="size-4 text-muted-foreground" />
            )}
          </button>

          {showModel && (
            <div className="border-t border-border px-5 py-4">
              <p className="mb-3 text-xs text-muted-foreground">
                Study this high-scoring response to improve your own approach.
              </p>
              <div className="rounded-xl bg-primary/5 border border-primary/15 p-4">
                <p className="text-sm leading-relaxed text-foreground whitespace-pre-line">
                  {result.suggestedResponse}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Higher-level rewrite (if not already shown) */}
      {result.revisedExample && !(result.weakPhrases?.length > 0) && (
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="flex items-center gap-2 font-display text-sm font-semibold text-card-foreground">
            <Sparkles className="size-4 text-primary" />
            Higher-level rewrite
          </p>
          <p className="mt-3 border-l-2 border-primary pl-3 text-xs italic leading-relaxed text-muted-foreground">
            {result.revisedExample}
          </p>
        </div>
      )}
    </div>
  )
}
