import Link from 'next/link'
import { ArrowRight, Sparkles, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_10%,transparent),transparent)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Examiner-grade AI feedback in seconds
          </span>

          <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Score higher on the{' '}
            <span className="text-primary">CELPIP</span> test with your own AI
            coach
          </h1>

          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Practice real Writing and Speaking tasks and get instant, detailed
            feedback mapped to the official CELPIP levels. Built for newcomers
            aiming for Canadian PR, citizenship, and work.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" render={<Link href="/sign-up" />}>
              Start practicing free
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              render={<a href="#how-it-works" />}
            >
              See how it works
            </Button>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
            {['No credit card required', 'All 4 test skills', 'CLB aligned'].map(
              (item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <Check className="size-4 text-success" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <HeroScoreCard />
      </div>
    </section>
  )
}

function HeroScoreCard() {
  const criteria = [
    { label: 'Content / Coherence', score: 10 },
    { label: 'Vocabulary', score: 9 },
    { label: 'Readability', score: 11 },
    { label: 'Task Fulfillment', score: 10 },
  ]
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/5" />
      <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-foreground/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Writing Task 1 · Email
            </p>
            <p className="font-display text-lg font-semibold text-card-foreground">
              Your estimated level
            </p>
          </div>
          <div className="flex size-16 flex-col items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <span className="text-2xl font-bold leading-none">10</span>
            <span className="text-[10px] uppercase tracking-wide opacity-80">
              CELPIP
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {criteria.map((c) => (
            <div key={c.label}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="text-card-foreground">{c.label}</span>
                <span className="font-semibold text-card-foreground">
                  {c.score}/12
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${(c.score / 12) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-success/10 p-4">
          <p className="flex items-center gap-2 text-sm font-medium text-success">
            <Sparkles className="size-4" />
            AI Coach tip
          </p>
          <p className="mt-1 text-sm leading-relaxed text-card-foreground/80">
            {
              'Strong structure and tone. Vary your sentence openers and add one concrete example to push Content toward level 11.'
            }
          </p>
        </div>
      </div>
    </div>
  )
}
