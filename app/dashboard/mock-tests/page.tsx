import Link from "next/link"
import { Headphones, Clock, ListChecks, ArrowRight, BookOpen, PenLine, Mic } from "lucide-react"
import { mockTests } from "@/lib/mock-test/listening-test"

const sectionMeta: Record<
  string,
  { icon: typeof Headphones; label: string }
> = {
  listening: { icon: Headphones, label: "Listening" },
  reading: { icon: BookOpen, label: "Reading" },
  writing: { icon: PenLine, label: "Writing" },
  speaking: { icon: Mic, label: "Speaking" },
}

export default function MockTestsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-8">
      <header className="mb-8">
        <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">
          Mock Tests
        </h1>
        <p className="mt-1 text-muted-foreground">
          Take full, timed CELPIP-style practice tests that match the official
          interface. Your results are saved to your score history.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {mockTests.map((test) => {
          const meta = sectionMeta[test.section]
          const Icon = meta.icon
          return (
            <div
              key={test.id}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {meta.label}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-card-foreground text-balance">
                {test.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {test.description}
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {test.durationLabel}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ListChecks className="size-4" />
                  {test.questionCount} questions
                </span>
              </div>
              <Link
                href={`/mock-test/${test.id}`}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start test
                <ArrowRight className="size-4" />
              </Link>
            </div>
          )
        })}
      </div>

      <div className="mt-8 rounded-xl border border-dashed border-border bg-muted/40 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          Reading, Writing, and Speaking full mock tests are coming next in this
          same official-style interface.
        </p>
      </div>
    </div>
  )
}
