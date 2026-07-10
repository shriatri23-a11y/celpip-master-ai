import Link from 'next/link'
import {
  PenLine,
  Mic,
  Headphones,
  BookOpen,
  ArrowRight,
  Target,
  TrendingUp,
} from 'lucide-react'
import { PageHeader } from '@/components/dashboard/page-header'
import { Button } from '@/components/ui/button'

const skills = [
  {
    label: 'Writing',
    level: 10,
    icon: PenLine,
    href: '/dashboard/writing',
    active: true,
  },
  {
    label: 'Speaking',
    level: 9,
    icon: Mic,
    href: '/dashboard/speaking',
    active: true,
  },
  {
    label: 'Listening',
    level: 11,
    icon: Headphones,
    href: '#',
    active: false,
  },
  {
    label: 'Reading',
    level: 10,
    icon: BookOpen,
    href: '#',
    active: false,
  },
]

const quickActions = [
  {
    title: 'Score a writing task',
    description: 'Get instant, criterion-based feedback on an email or survey.',
    icon: PenLine,
    href: '/dashboard/writing',
  },
  {
    title: 'Practice speaking',
    description: 'Record an answer and let the AI examiner evaluate it.',
    icon: Mic,
    href: '/dashboard/speaking',
  },
  {
    title: 'Ask your coach',
    description: 'Build a study plan or get any CELPIP question answered.',
    icon: Target,
    href: '/dashboard/coach',
  },
]

export default function DashboardPage() {
  const overall = 10

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-8">
      <PageHeader
        title="Welcome back, Priya"
        description="Here's where you stand today. Keep practicing to reach your target level 10 across all skills."
      >
        <Button render={<Link href="/dashboard/writing" />}>
          Start a session
          <ArrowRight className="size-4" />
        </Button>
      </PageHeader>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-foreground p-6 text-background lg:col-span-1">
          <p className="text-sm text-background/70">Estimated overall level</p>
          <div className="mt-3 flex items-end gap-2">
            <span className="font-display text-6xl font-bold leading-none">
              {overall}
            </span>
            <span className="pb-1 text-background/60">/ 12</span>
          </div>
          <p className="mt-4 flex items-center gap-1.5 text-sm text-background/80">
            <TrendingUp className="size-4" />
            Up 1 level in the last 2 weeks
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          {skills.map((s) => (
            <div
              key={s.label}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-foreground">
                  <s.icon className="size-5" />
                </span>
                <span className="font-display text-2xl font-bold text-card-foreground">
                  {s.level}
                </span>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-card-foreground">
                    {s.label}
                  </p>
                  {!s.active && (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                      Soon
                    </span>
                  )}
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${(s.level / 12) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="mt-10 font-display text-lg font-semibold text-foreground">
        Jump back in
      </h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {quickActions.map((a) => (
          <Link
            key={a.title}
            href={a.href}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-foreground/5"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <a.icon className="size-5" />
            </span>
            <p className="mt-4 font-display font-semibold text-card-foreground">
              {a.title}
            </p>
            <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
              {a.description}
            </p>
            <span className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
              Open
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
