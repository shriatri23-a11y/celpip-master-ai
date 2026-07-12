"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  BookOpen,
  Clock,
  Wand2,
  Loader2,
  Users,
  Sparkles,
  ArrowRight,
  FileText,
  GitCompare,
  ListChecks,
  MessagesSquare,
} from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PART_META, type ReadingPart, type ReadingDifficulty } from "@/lib/reading-practice/types"

const READING_PARTS: ReadingPart[] = [1, 2, 3, 4]

const PART_ICONS: Record<ReadingPart, typeof FileText> = {
  1: FileText,
  2: GitCompare,
  3: ListChecks,
  4: MessagesSquare,
}

type SerializableTest = {
  id: string
  part: ReadingPart
  partLabel: string
  title: string
  topic?: string
  difficulty: ReadingDifficulty
  timeMinutes: number
  questionCount: number
  source: "static" | "ai"
  authorName?: string
  attempts?: number
}

export function ReadingHub({
  staticTests,
  communityTests,
  signedIn,
}: {
  staticTests: SerializableTest[]
  communityTests: SerializableTest[]
  signedIn: boolean
}) {
  const [activePart, setActivePart] = useState<ReadingPart>(1)

  const staticForPart = useMemo(
    () => staticTests.filter((t) => t.part === activePart),
    [staticTests, activePart],
  )
  const communityForPart = useMemo(
    () => communityTests.filter((t) => t.part === activePart),
    [communityTests, activePart],
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
      <PageHeader
        title="Reading practice"
        description="Practice authentic CELPIP Reading tasks in the real test interface. Take a timed test, then review every answer with explanations."
      />

      {/* Module selector */}
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {READING_PARTS.map((part) => {
          const meta = PART_META[part]
          const Icon = PART_ICONS[part]
          const count =
            staticTests.filter((t) => t.part === part).length +
            communityTests.filter((t) => t.part === part).length
          const active = part === activePart
          return (
            <button
              key={part}
              type="button"
              onClick={() => setActivePart(part)}
              aria-pressed={active}
              className={cn(
                "flex flex-col gap-3 rounded-2xl border p-5 text-left transition-colors",
                active
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:border-primary/40 hover:bg-muted",
              )}
            >
              <div
                className={cn(
                  "flex size-10 items-center justify-center rounded-xl",
                  active ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
                )}
              >
                <Icon className="size-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">Part {part}</p>
                <p className="font-display font-semibold leading-tight text-card-foreground text-pretty">
                  {meta.label}
                </p>
              </div>
              <span className="mt-auto text-xs text-muted-foreground">{count} tests</span>
            </button>
          )
        })}
      </div>

      {/* Active module detail */}
      <section className="mt-8" aria-labelledby="module-heading">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-start gap-3">
            <BookOpen className="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
              <h2 id="module-heading" className="font-display text-lg font-bold text-card-foreground">
                Part {activePart}: {PART_META[activePart].label}
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {PART_META[activePart].blurb}
              </p>
            </div>
          </div>
        </div>

        {/* AI generator */}
        <AiGenerator part={activePart} signedIn={signedIn} />

        {/* Curated tests */}
        <h3 className="mb-3 mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          <Sparkles className="size-4" /> Curated tests
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {staticForPart.map((t) => (
            <TestCard key={t.id} test={t} />
          ))}
        </div>

        {/* Community tests */}
        <h3 className="mb-3 mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          <Users className="size-4" /> Community tests
          <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium normal-case tracking-normal text-muted-foreground">
            {communityForPart.length}
          </span>
        </h3>
        {communityForPart.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
            <p className="text-sm text-muted-foreground">
              No community tests for this part yet. Generate one above to share it with everyone.
            </p>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {communityForPart.map((t) => (
              <TestCard key={t.id} test={t} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

function TestCard({ test }: { test: SerializableTest }) {
  return (
    <Link
      href={`/reading-practice/${test.id}`}
      className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-muted"
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-xs font-medium capitalize",
            test.difficulty === "hard"
              ? "bg-destructive/10 text-destructive"
              : test.difficulty === "easy"
                ? "bg-success/10 text-success"
                : "bg-primary/10 text-primary",
          )}
        >
          {test.difficulty}
        </span>
        {test.source === "ai" && (
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Wand2 className="size-3" /> AI
          </span>
        )}
      </div>
      <p className="font-display font-semibold leading-snug text-card-foreground text-pretty">
        {test.title}
      </p>
      <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <ListChecks className="size-3.5" />
            {test.questionCount} Q
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {test.timeMinutes} min
          </span>
        </span>
        <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
      </div>
      {test.source === "ai" && test.authorName && (
        <p className="text-xs text-muted-foreground">by {test.authorName}</p>
      )}
    </Link>
  )
}

function AiGenerator({ part, signedIn }: { part: ReadingPart; signedIn: boolean }) {
  const router = useRouter()
  const [topic, setTopic] = useState("")
  const [difficulty, setDifficulty] = useState<ReadingDifficulty>("medium")
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleGenerate() {
    setGenerating(true)
    setError(null)
    try {
      const res = await fetch("/api/generate-reading-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ part, topic, difficulty }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed to generate test.")
      // The new test is now shared with everyone; jump straight into it.
      router.push(`/reading-practice/ai-${data.id}`)
    } catch (err) {
      setError((err as Error).message)
      setGenerating(false)
    }
  }

  return (
    <div className="mt-4 rounded-2xl border border-primary/30 bg-primary/5 p-6">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Wand2 className="size-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-display font-semibold text-card-foreground">
            Create a new test with AI
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Generate a fresh Part {part} test. It is instantly shared with the community so other
            students can practice it too.
          </p>

          {signedIn ? (
            <>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Optional topic (e.g. renting an apartment)"
                  maxLength={120}
                  className="h-10 flex-1 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as ReadingDifficulty)}
                  className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  aria-label="Difficulty"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                <Button onClick={handleGenerate} disabled={generating} className="shrink-0 gap-2">
                  {generating ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Wand2 className="size-4" />
                  )}
                  {generating ? "Generating…" : "Generate & share"}
                </Button>
              </div>
              {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
            </>
          ) : (
            <div className="mt-4">
              <Link
                href="/sign-in"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Sign in to generate tests <ArrowRight className="size-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
