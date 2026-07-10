import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Cta() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,color-mix(in_oklch,var(--primary)_35%,transparent),transparent)]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-background md:text-4xl">
              Your target CELPIP level is closer than you think
            </h2>
            <p className="mt-4 text-pretty text-lg text-background/70">
              Join thousands of newcomers preparing smarter. Start free today
              and get your first AI score in minutes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" render={<Link href="/sign-up" />}>
                Start practicing free
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
