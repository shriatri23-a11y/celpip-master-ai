"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { TestShell } from "./test-shell"
import {
  InstructionContent,
  VideoContent,
  AudioContent,
  AudioMcqContent,
  McqContent,
} from "./steps"
import { ResultView } from "./result-view"
import { saveMockTestResult } from "@/app/actions/mock-test"
import type { MockTest, McqQuestion } from "@/lib/mock-test/types"

function collectQuestions(test: MockTest): McqQuestion[] {
  const qs: McqQuestion[] = []
  for (const step of test.steps) {
    if (step.kind === "audio-mcq") qs.push(step.question)
    if (step.kind === "mcq") qs.push(...step.questions)
  }
  return qs
}

function levelFromPercent(pct: number) {
  if (pct >= 0.92) return { level: 10, label: "Advanced" }
  if (pct >= 0.83) return { level: 9, label: "Advanced" }
  if (pct >= 0.74) return { level: 8, label: "Proficient" }
  if (pct >= 0.65) return { level: 7, label: "Proficient" }
  if (pct >= 0.55) return { level: 6, label: "Competent" }
  if (pct >= 0.45) return { level: 5, label: "Competent" }
  if (pct >= 0.35) return { level: 4, label: "Developing" }
  return { level: 3, label: "Developing" }
}

export function TestRunner({ test }: { test: MockTest }) {
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showTranscript, setShowTranscript] = useState(false)
  const [countdown, setCountdown] = useState<number | null>(null)
  const [saved, setSaved] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const step = test.steps[index]
  const isLast = index === test.steps.length - 1

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const goNext = useCallback(() => {
    clearTimer()
    setCountdown(null)
    setShowTranscript(false)
    setIndex((i) => Math.min(test.steps.length - 1, i + 1))
  }, [clearTimer, test.steps.length])

  const goBack = useCallback(() => {
    clearTimer()
    setCountdown(null)
    setShowTranscript(false)
    setIndex((i) => Math.max(0, i - 1))
  }, [clearTimer])

  // Countdown for audio-mcq answering window
  useEffect(() => () => clearTimer(), [clearTimer])

  const handleAudioEnded = useCallback(() => {
    if (step.kind === "audio-mcq" && step.answerSeconds) {
      setCountdown(step.answerSeconds)
      clearTimer()
      timerRef.current = setInterval(() => {
        setCountdown((c) => {
          if (c === null) return null
          if (c <= 1) {
            clearTimer()
            // Auto-advance when the answering window closes.
            setTimeout(() => goNext(), 0)
            return 0
          }
          return c - 1
        })
      }, 1000)
    }
  }, [step, clearTimer, goNext])

  // Results (computed when reaching the result step)
  const results = useMemo(() => {
    const questions = collectQuestions(test)
    const total = questions.length
    const correct = questions.reduce(
      (n, q) => n + (answers[q.id] === q.correctOptionId ? 1 : 0),
      0,
    )
    const pct = total ? correct / total : 0
    const { level, label } = levelFromPercent(pct)
    return { total, correct, pct, level, label }
  }, [test, answers])

  // Persist once when the result screen is shown
  useEffect(() => {
    if (step.kind === "result" && !saved) {
      setSaved(true)
      void saveMockTestResult({
        testId: test.id,
        title: test.title,
        section: test.section,
        correct: results.correct,
        total: results.total,
        level: results.level,
        label: results.label,
      }).catch(() => {})
    }
  }, [step, saved, test, results])

  const selectSingle = (optionId: string) => {
    if (step.kind !== "audio-mcq") return
    setAnswers((a) => ({ ...a, [step.question.id]: optionId }))
  }
  const selectMulti = (questionId: string, optionId: string) => {
    setAnswers((a) => ({ ...a, [questionId]: optionId }))
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
    ) : null

  return (
    <TestShell
      headerTitle={step.headerTitle}
      onNext={step.kind === "result" ? undefined : goNext}
      onBack={goBack}
      backDisabled={index === 0}
      hideBack={step.kind === "result"}
      footerLeft={footerLeft}
      timerSeconds={countdown}
    >
      {step.kind === "instruction" && <InstructionContent step={step} />}
      {step.kind === "video" && <VideoContent step={step} />}
      {step.kind === "audio" && (
        <AudioContent
          key={step.id}
          step={step}
          showTranscript={showTranscript}
        />
      )}
      {step.kind === "audio-mcq" && (
        <AudioMcqContent
          key={step.id}
          step={step}
          selectedId={answers[step.question.id]}
          onSelect={selectSingle}
          onAudioEnded={handleAudioEnded}
        />
      )}
      {step.kind === "mcq" && (
        <McqContent step={step} answers={answers} onSelect={selectMulti} />
      )}
      {step.kind === "result" && (
        <ResultView
          test={test}
          results={results}
          onExit={() => router.push("/dashboard/mock-tests")}
          onReview={() => setIndex(0)}
        />
      )}
    </TestShell>
  )
}
