import Link from "next/link"
import { headers } from "next/headers"
import {
  PenLine,
  Mic,
  Headphones,
  BookOpen,
  ArrowRight,
  Target,
  TrendingUp,
  History,
} from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Button } from "@/components/ui/button"
import { auth } from "@/lib/auth"
import { getStats } from "@/app/actions/score-history"

const quickActions = [
  {
    title: "Score a writing task",
    description: "Get instant, criterion-based feedback on an email or survey.",
    icon: PenLine,
    href: "/dashboard/writing",
  },
  {
    title: "Practice speaking",
    description: "Record an answer and let the AI examiner evaluate it.",
    icon: Mic,
    href: "/dashboard/speaking",
  },
  {
    title: "Ask your coach",
    description: "Build a study plan or get any CELPIP question answered.",
    icon: Target,
    href: "/dashboard/coach",
  },
]

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  const firstName = session?.user?.name?.split(" ")[0] ?? "there"
  const stats = await getStats()

  const skills = [
    {
      label: "Writing",
      level: stats.writingAvg,
      count: stats.writingCount,
      icon: PenLine,
      active: true,
    },
    {
      label: "Speaking",
      level: stats.speakingAvg,
      count: stats.speakingCount,
      icon: Mic,
      active: true,
    },
    { label: "Listening", level: null, count: 0, icon: Headphones, active: false },
    { label: "Reading", level: null, count: 0, icon: BookOpen, active: false },
  ]

  const hasData = stats.total > 0

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-8">
      <PageHeader
        title={`Welcome back, ${firstName}`}
        description={
          hasData
            ? "Here's where you stand today. Keep practicing to raise your levels across all skills."
            : "Complete your first practice task to start tracking your CELPIP progress."
        }
      >
        <Button render={<Link href="/dashboard/writing" />}>
          Start a session
          <ArrowRight className="size-4" />
        </Button>
      </PageHeader>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-foreground p-6 text-background lg:col-span-1">
          <p className="text-sm text-background/70">Best CELPIP level</p>
          <div className="mt-3 flex items-end gap-2">
            <span className="font-display text-6xl font-bold leading-none">
              {stats.bestLevel ?? "—"}
            </span>
            <span className="pb-1 text-background/60">/ 12</span>
          </div>
          <p className="mt-4 flex items-center gap-1.5 text-sm text-background/80">
            <TrendingUp className="size-4" />
            {stats.total} scored attempt{stats.total === 1 ? "" : "s"} so far
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
                  {s.level ?? "—"}
                </span>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-card-foreground">
                    {s.label}
                  </p>
                  {!s.active ? (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                      Soon
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      {s.count} attempt{s.count === 1 ? "" : "s"}
                    </span>
                  )}
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${((s.level ?? 0) / 12) * 100}%` }}
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

      {hasData && (
        <>
          <div className="mt-10 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-foreground">
              Recent attempts
            </h2>
            <Button
              variant="ghost"
              size="sm"
              render={<Link href="/dashboard/history" />}
            >
              <History className="size-4" />
              View all
            </Button>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            {stats.recent.map((a) => (
              <div
                key={a.id}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                  {a.skill === "writing" ? (
                    <PenLine className="size-4" />
                  ) : (
                    <Mic className="size-4" />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-card-foreground">
                    {a.taskType}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(a.createdAt).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <span className="font-display text-lg font-bold text-primary">
                  {a.celpipLevel}
                  <span className="text-xs text-muted-foreground">/12</span>
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
