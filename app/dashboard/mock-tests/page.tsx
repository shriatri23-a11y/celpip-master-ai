import Link from "next/link"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
import {
  Headphones,
  BookOpen,
  PenLine,
  Mic,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { auth } from "@/lib/auth"
import { mockExams } from "@/lib/mock-test/exams"
import { getExamProgress } from "@/app/actions/mock-progress"

const sectionMeta = [
  { key: "listening", icon: Headphones, label: "Listening" },
  { key: "reading", icon: BookOpen, label: "Reading" },
  { key: "writing", icon: PenLine, label: "Writing" },
  { key: "speaking", icon: Mic, label: "Speaking" },
] as const

export default async function MockTestsPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect("/sign-in")

  const progressByExam = Object.fromEntries(
    await Promise.all(
      mockExams.map(async (e) => [e.id, await getExamProgress(e.id)] as const),
    ),
  )

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-8">
      <header className="mb-8">
        <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">
          Mock Exams
        </h1>
        <p className="mt-1 text-muted-foreground">
          Take original, timed exam simulations designed for advanced CELPIP
          preparation. Expect nuanced evidence, close distractors, competing
          viewpoints, and demanding speaking and writing tasks. Completed
          sections include a saved, question-by-question review.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        {mockExams.map((exam) => {
          const progress = progressByExam[exam.id]
          const completed = Object.values(progress).filter(
            (p) => p.status === "completed",
          ).length
          return (
            <div
              key={exam.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-card-foreground">
                    {exam.title}
                  </h2>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {exam.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  <Clock className="size-3.5" />4 sections
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {sectionMeta.map((s) => {
                  const Icon = s.icon
                  const status = progress[s.key].status
                  return (
                    <div
                      key={s.key}
                      className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5"
                    >
                      <span className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="size-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-foreground">
                          {s.label}
                        </p>
                        <p className="flex items-center gap-1 text-xs text-muted-foreground">
                          {status === "completed" && (
                            <CheckCircle2 className="size-3 text-emerald-600" />
                          )}
                          {status === "completed"
                            ? "Completed"
                            : status === "in_progress"
                              ? "In progress"
                              : "Not started"}
                        </p>
                        {status === "completed" && (
                          <Link
                            href={`/dashboard/mock-tests/${exam.id}/review/${s.key}`}
                            className="mt-1 inline-flex text-xs font-semibold text-primary hover:underline"
                          >
                            Review results
                          </Link>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {completed} of 4 completed
                </p>
                <Link
                  href={`/dashboard/mock-tests/${exam.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {completed > 0 ? "Continue exam" : "Start exam"}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
