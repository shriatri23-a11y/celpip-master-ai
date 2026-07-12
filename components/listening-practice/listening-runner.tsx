"use client"

import { useCallback, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from "lucide-react"
import { InstructionContent, AudioContent, McqContent } from "@/components/mock-test/steps"
import { TestShell, InfoBadge } from "@/components/mock-test/test-shell"
import {
  toListeningSteps,
  flattenQuestions,
  questionCount,
  type ListeningPracticeTest,
} from "@/lib/listening-practice/types"
import { cn } from "@/lib/utils"

type Phase = "intro" | "test" | "result"

export function ListeningRunner({ test }: { test: ListeningPracticeTest }) {
  const router = useRouter()
  const [phase, setPhase] = useState<Phase>("intro")
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showTranscript, setShowTranscript] = useState(false)

  const steps = useMemo(() => toListeningSteps(test), [test])
  const flat = useMemo(() => flattenQuestions(test), [test])
  const total = flat.length

  // The last step is the "result" placeholder; the runner shows its own result
  // screen instead of walking into it.
  const lastStepIndex = steps.length - 2
  const step = steps[index]

  const goNext = useCallback(() => {
    setShowTranscript(false)
    if (index >= lastStepIndex) {
      setPhase("result")
      return
    }
    setIndex((i) => Math.min(lastStepIndex, i + 1))
  }, [index, lastStepIndex])

  const goBack = useCallback(() => {
    setShowTranscript(false)
    setIndex((i) => Math.max(0, i - 1))
  }, [])

  const onSelect = useCallback((questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }))
  }, [])

  const answeredCount = flat.filter((q) => !!answers[q.id]).length

  const correct = useMemo(
    () => flat.reduce((n, q) => n + (answers[q.id] === q.correctOptionId ? 1 : 0), 0),
    [flat, answers],
  )

  if (phase === "intro") {
    return (
      <IntroScreen
        test={test}
        onStart={() => {
          setIndex(0)
          setPhase("test")
        }}
        onExit={() => router.push("/dashboard/listening")}
      />
    )
  }

  if (phase === "result") {
    return (
      <ResultScreen
        test={test}
        answers={answers}
        correct={correct}
        total={total}
        onRetry={() => {
          setAnswers({})
          setIndex(0)
          setPhase("intro")
        }}
        onExit={() => router.push("/dashboard/listening")}
      />
    )
  }

  const footerLeft =
    step.kind === "audio" && step.transcript ? (
      <button
        type="button"
        onClick={() => setShowTranscript((s) => !s)}
        className="rounded-sm border border-mt-border bg-white px-4 py-1.5 text-sm text-mt-body transition-colors hover:bg-black/[0.03]"
      >
        Transcript
      </button>
    ) : (
      <span className="text-sm text-mt-title">
        {answeredCount} of {total} answered
      </span>
    )

  const isLast = index >= lastStepIndex

  return (
    <TestShell
      headerTitle={step.headerTitle}
      onNext={goNext}
      onBack={goBack}
      backDisabled={index === 0}
      nextLabel={isLast ? "SUBMIT" : "NEXT"}
      footerLeft={footerLeft}
    >
      {step.kind === "instruction" && <InstructionContent step={step} />}
      {step.kind === "audio" && (
        <AudioContent key={step.id} step={step} showTranscript={showTranscript} />
      )}
      {step.kind === "mcq" && (
        <McqContent step={step} answers={answers} onSelect={onSelect} />
      )}
    </TestShell>
  )
}

function IntroScreen({
  test,
  onStart,
  onExit,
}: {
  test: ListeningPracticeTest
  onStart: () => void
  onExit: () => void
}) {
  return (
    <div className="flex h-dvh flex-col bg-mt-bg">
      <header
        className="flex shrink-0 items-center justify-between gap-4 border-b border-mt-border px-6 py-3"
        style={{
          backgroundImage: "linear-gradient(to bottom, var(--mt-header-top), var(--mt-header-bottom))",
        }}
      >
        <h1 className="truncate text-lg font-semibold text-mt-title">{test.title} — Listening</h1>
      </header>

      <main className="mt-scroll flex flex-1 items-center justify-center overflow-y-auto px-6 py-10">
        <div className="w-full max-w-2xl rounded-xl border border-mt-border bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-start gap-3">
            <InfoBadge variant="info" />
            <div>
              <h2 className="text-2xl font-bold text-mt-blue text-balance">{test.title}</h2>
              {test.topic && <p className="mt-1 text-sm text-muted-foreground">{test.topic}</p>}
            </div>
          </div>

          <p className="mb-6 leading-relaxed text-mt-body">{test.description}</p>

          <dl className="mb-8 grid grid-cols-3 gap-4">
            <Stat label="Parts" value={String(test.parts.length)} />
            <Stat label="Questions" value={String(questionCount(test))} />
            <Stat label="Time limit" value={`${test.timeMinutes} min`} />
          </dl>

          <p className="mb-6 rounded-md border border-mt-border bg-mt-panel px-4 py-3 text-sm leading-relaxed text-mt-body">
            This is a full-length, hardest-tier test spanning all six CELPIP listening parts. Each
            passage plays once via realistic text-to-speech — take notes, because you cannot replay
            the audio.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onStart}
              className="inline-flex items-center gap-2 rounded-md bg-mt-next px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-mt-next-hover"
            >
              Start test <ArrowRight className="size-4" />
            </button>
            <button
              type="button"
              onClick={onExit}
              className="rounded-md border border-mt-border px-6 py-3 text-sm font-semibold text-mt-body transition-colors hover:bg-mt-panel"
            >
              Back to practice
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

function ResultScreen({
  test,
  answers,
  correct,
  total,
  onRetry,
  onExit,
}: {
  test: ListeningPracticeTest
  answers: Record<string, string>
  correct: number
  total: number
  onRetry: () => void
  onExit: () => void
}) {
  const flat = useMemo(() => flattenQuestions(test), [test])
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0
  const band = pct >= 85 ? "Excellent" : pct >= 65 ? "Good" : pct >= 45 ? "Developing" : "Needs work"

  return (
    <div className="flex min-h-dvh flex-col bg-mt-bg">
      <header
        className="flex shrink-0 items-center justify-between gap-4 border-b border-mt-border px-6 py-3"
        style={{
          backgroundImage: "linear-gradient(to bottom, var(--mt-header-top), var(--mt-header-bottom))",
        }}
      >
        <h1 className="truncate text-lg font-semibold text-mt-title">Results: {test.title}</h1>
      </header>

      <main className="mt-scroll flex-1 overflow-y-auto px-6 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-col items-center rounded-xl border border-mt-border bg-white p-8 text-center shadow-sm">
            <div className="mb-3 flex size-20 items-center justify-center rounded-full bg-mt-panel">
              <span className="text-3xl font-bold text-mt-blue">{pct}%</span>
            </div>
            <p className="text-xl font-bold text-mt-body">
              {correct} / {total} correct
            </p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{band}</p>
          </div>

          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-mt-blue">
            <InfoBadge variant="info" /> Review &amp; explanations
          </h3>

          <div className="flex flex-col gap-4">
            {flat.map((q, i) => {
              const selected = answers[q.id]
              const isCorrect = selected === q.correctOptionId
              return (
                <div key={q.id} className="rounded-lg border border-mt-border bg-white p-5">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {q.partLabel}
                  </p>
                  <div className="mb-3 flex items-start gap-2">
                    {isCorrect ? (
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                    ) : (
                      <XCircle className="mt-0.5 size-5 shrink-0 text-red-600" />
                    )}
                    <p className="font-semibold text-mt-body">
                      {i + 1}. {q.prompt}
                    </p>
                  </div>
                  <ul className="mb-3 flex flex-col gap-1.5 pl-7">
                    {q.options.map((opt, oi) => {
                      const isRight = oi === q.correctIndex
                      const isChosen = selected === `${q.id}-o${oi}`
                      return (
                        <li
                          key={oi}
                          className={cn(
                            "rounded-md px-3 py-2 text-sm",
                            isRight && "bg-emerald-50 font-medium text-emerald-800",
                            !isRight && isChosen && "bg-red-50 text-red-800 line-through",
                            !isRight && !isChosen && "text-mt-body",
                          )}
                        >
                          {opt}
                          {isRight && " ✓"}
                          {!isRight && isChosen && " (your answer)"}
                        </li>
                      )
                    })}
                  </ul>
                  <p className="ml-7 rounded-md border-l-2 border-mt-blue bg-mt-panel px-3 py-2 text-sm leading-relaxed text-mt-body">
                    <span className="font-semibold text-mt-blue">Why: </span>
                    {q.explanation}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="my-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex items-center gap-2 rounded-md bg-mt-next px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-mt-next-hover"
            >
              <RotateCcw className="size-4" /> Try again
            </button>
            <button
              type="button"
              onClick={onExit}
              className="rounded-md border border-mt-border px-6 py-3 text-sm font-semibold text-mt-body transition-colors hover:bg-mt-panel"
            >
              Back to practice
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-mt-border bg-mt-panel px-4 py-3 text-center">
      <dt className="text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-base font-bold text-mt-body">{value}</dd>
    </div>
  )
}
