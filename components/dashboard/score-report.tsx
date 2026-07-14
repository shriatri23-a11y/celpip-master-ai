import { Check, TrendingUp, Sparkles, Lightbulb, Award } from 'lucide-react'
import type { ScoreResult } from '@/lib/scoring-schema'
import { levelDescriptor } from '@/lib/celpip'

export function ScoreReport({ result }: { result: ScoreResult }) {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-border bg-foreground p-6 text-background">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-background/70">Estimated CELPIP level</p>
            <p className="mt-1 font-display text-base font-medium text-background">
              {levelDescriptor(result.overallLevel)}
            </p>
          </div>
          <div className="flex size-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <span className="font-display text-3xl font-bold leading-none">
              {result.overallLevel}
            </span>
            <span className="text-[10px] uppercase tracking-wide opacity-80">
              / 12
            </span>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-background/80">
          {result.summary}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {result.criteria.map((c) => (
          <div
            key={c.name}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-card-foreground">
                {c.name}
              </p>
              <span className="font-display text-lg font-bold text-primary">
                {c.score}
                <span className="text-sm text-muted-foreground">/12</span>
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${(c.score / 12) * 100}%` }}
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {c.feedback}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-success/5 p-5">
          <p className="flex items-center gap-2 font-display font-semibold text-foreground">
            <TrendingUp className="size-4 text-success" />
            Strengths
          </p>
          <ul className="mt-3 space-y-2">
            {result.strengths.map((s, i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground/80">
                <Check className="mt-0.5 size-4 shrink-0 text-success" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-primary/5 p-5">
          <p className="flex items-center gap-2 font-display font-semibold text-foreground">
            <Lightbulb className="size-4 text-primary" />
            Focus on next
          </p>
          <ul className="mt-3 space-y-2">
            {result.improvements.map((s, i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground/80">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <p className="flex items-center gap-2 font-display font-semibold text-card-foreground">
          <Sparkles className="size-4 text-primary" />
          Higher-level rewrite
        </p>
        <p className="mt-3 border-l-2 border-primary pl-4 text-sm italic leading-relaxed text-muted-foreground">
          {result.revisedExample}
        </p>
      </div>

      {result.suggestedResponse && (
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
          <p className="flex items-center gap-2 font-display font-semibold text-foreground">
            <Award className="size-4 text-primary" />
            Band 11–12 model answer
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            An AI-written top-band response created for this exact task — read
            it and learn how to lift your own answer.
          </p>
          <div className="mt-3 space-y-3 rounded-xl border border-primary/15 bg-card p-4">
            {result.suggestedResponse
              .split(/\n\s*\n/)
              .map((para) => para.trim())
              .filter(Boolean)
              .map((para, i) => (
                <p
                  key={i}
                  className="whitespace-pre-line text-sm leading-relaxed text-foreground"
                >
                  {para}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
