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
  ReadingContent,
  WritingContent,
  SpeakingContent,
} from "./steps"
import { ResultView } from "./result-view"
import { ReviewShell } from "./review-shell"
import { saveMockTestResult } from "@/app/actions/mock-test"
import {
  saveSectionProgress,
  completeSectionProgress,
  type SectionName,
} from "@/app/actions/mock-progress"
import { useSpeechRecognition } from "@/hooks/use-speech-recognition"
import { buildReview, type TaskReview } from "@/lib/mock-test/review"
import type { ScoreResult } from "@/lib/scoring-schema"
import type { MockTest, McqQuestion } from "@/lib/mock-test/types"

function collectQuestions(test: MockTest): McqQuestion[] {
  const qs: McqQuestion[] = []
  for (const step of test.steps) {
    if (step.kind === "audio-mcq") qs.push(step.question)
    if (step.kind === "mcq") qs.push(...step.questions)
    if (step.kind === "reading") qs.push(...step.questions)
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

function labelFromLevel(level: number) {
  if (level >= 9) return "Advanced"
  if (level >= 7) return "Proficient"
  if (level >= 5) return "Competent"
  if (level >= 4) return "Developing"
  return "Developing"
}

type SpeakingPhase = "idle" | "prep" | "speaking" | "done"

export function TestRunner({
  test,
  examId,
  section,
  initialStepIndex = 0,
  initialAnswers = {},
}: {
  test: MockTest
  examId: string
  section: SectionName
  initialStepIndex?: number
  initialAnswers?: Record<string, string>
}) {
  const router = useRouter()
  const isAutoScored = section === "listening" || section === "reading"

  const [index, setIndex] = useState(
    Math.min(initialStepIndex, test.steps.length - 1),
  )
  const [answers, setAnswers] = useState<Record<string, string>>(initialAnswers)
  const [showTranscript, setShowTranscript] = useState(false)
  const [countdown, setCountdown] = useState<number | null>(null)
  const [saved, setSaved] = useState(false)
  const [scoring, setScoring] = useState(false)
  const [aiResult, setAiResult] = useState<{
    level: number
    label: string
  } | null>(null)
  // Per-task AI reports (writing/speaking), keyed by step id.
  const [taskReports, setTaskReports] = useState<Record<string, ScoreResult>>(
    {},
  )
  const [reviewing, setReviewing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Speaking recording state
  const speech = useSpeechRecognition()
  const [speakingPhase, setSpeakingPhase] = useState<SpeakingPhase>("idle")

  const step = test.steps[index]

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  // Autosave progress whenever the step or answers change (in-progress only).
  useEffect(() => {
    if (step.kind === "result") return
    const t = setTimeout(() => {
      void saveSectionProgress({
        examId,
        section,
        stepIndex: index,
        answers,
      }).catch(() => {})
    }, 400)
    return () => clearTimeout(t)
  }, [index, answers, step.kind, examId, section])

  const goNext = useCallback(() => {
    clearTimer()
    setCountdown(null)
    setShowTranscript(false)
    setSpeakingPhase("idle")
    speech.reset()
    setIndex((i) => Math.min(test.steps.length - 1, i + 1))
  }, [clearTimer, test.steps.length, speech])

  const goBack = useCallback(() => {
    clearTimer()
    setCountdown(null)
    setShowTranscript(false)
    setSpeakingPhase("idle")
    speech.reset()
    setIndex((i) => Math.max(0, i - 1))
  }, [clearTimer, speech])

  useEffect(() => () => clearTimer(), [clearTimer])

  // Generic countdown helper that runs `onDone` at zero.
  const startCountdown = useCallback(
    (seconds: number, onDone?: () => void) => {
      setCountdown(seconds)
      clearTimer()
      timerRef.current = setInterval(() => {
        setCountdown((c) => {
          if (c === null) return null
          if (c <= 1) {
            clearTimer()
            if (onDone) setTimeout(onDone, 0)
            return 0
          }
          return c - 1
        })
      }, 1000)
    },
    [clearTimer],
  )

  // Audio-mcq: start answering window after audio ends.
  const handleAudioEnded = useCallback(() => {
    if (step.kind === "audio-mcq" && step.answerSeconds) {
      startCountdown(step.answerSeconds, goNext)
    }
  }, [step, startCountdown, goNext])

  // Writing: start the task timer when the writing step appears.
  useEffect(() => {
    if (step.kind === "writing") {
      startCountdown(step.answerSeconds, goNext)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  // Speaking: prep -> speaking -> done state machine.
  const startSpeaking = useCallback(() => {
    if (step.kind !== "speaking") return
    setSpeakingPhase("prep")
    startCountdown(step.prepSeconds, () => {
      setSpeakingPhase("speaking")
      speech.start()
      startCountdown(step.speakSeconds, () => {
        speech.stop()
        setSpeakingPhase("done")
        setCountdown(null)
      })
    })
  }, [step, startCountdown, speech])

  // Persist the speaking transcript into answers when a task finishes.
  useEffect(() => {
    if (step.kind === "speaking" && speakingPhase === "done") {
      setAnswers((a) => ({ ...a, [step.id]: speech.transcript }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speakingPhase])

  // ----- Auto-scored results (listening / reading) -----
  const autoResults = useMemo(() => {
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

  // ----- AI scoring for writing / speaking on the result screen -----
  const runAiScoring = useCallback(async () => {
    setScoring(true)
    const endpoint =
      section === "writing" ? "/api/score-writing" : "/api/score-speaking"
    const taskSteps = test.steps.filter(
      (s) => s.kind === "writing" || s.kind === "speaking",
    )
    const levels: number[] = []
    const reports: Record<string, ScoreResult> = {}
    for (const s of taskSteps) {
      const response = answers[s.id] ?? ""
      if (response.trim().length < 20) continue
      try {
        const body =
          s.kind === "writing"
            ? { prompt: s.prompt, taskType: s.taskType, response }
            : { prompt: s.prompt, taskTitle: s.taskType, transcript: response }
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
        const data = await res.json()
        if (res.ok && typeof data.overallLevel === "number") {
          levels.push(data.overallLevel)
          reports[s.id] = data as ScoreResult
        }
      } catch {
        // skip failed task
      }
    }
    const avg = levels.length
      ? Math.round(levels.reduce((a, b) => a + b, 0) / levels.length)
      : 0
    setTaskReports(reports)
    setAiResult({ level: avg, label: labelFromLevel(avg) })
    setScoring(false)
  }, [section, test.steps, answers])

  // Kick off AI scoring once when reaching the result step.
  useEffect(() => {
    if (step.kind === "result" && !isAutoScored && !aiResult && !scoring) {
      void runAiScoring()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step.kind])

  const results = isAutoScored
    ? autoResults
    : {
        total: aiResult ? 1 : 0,
        correct: 0,
        pct: 0,
        level: aiResult?.level ?? 0,
        label: aiResult?.label ?? "",
      }

  // Grouped question review for auto-scored sections.
  const reviewGroups = useMemo(
    () => (isAutoScored ? buildReview(test, answers) : []),
    [isAutoScored, test, answers],
  )

  // Task-by-task review for AI-scored sections.
  const aiTasks = useMemo<TaskReview[]>(() => {
    if (isAutoScored) return []
    return test.steps
      .filter((s) => s.kind === "writing" || s.kind === "speaking")
      .map((s) => ({
        id: s.id,
        taskType: (s as { taskType: string }).taskType,
        prompt: (s as { prompt: string }).prompt,
        response: answers[s.id] ?? "",
        report: taskReports[s.id] ?? null,
      }))
  }, [isAutoScored, test.steps, answers, taskReports])

  // Persist the section result once scoring is ready.
  useEffect(() => {
    if (step.kind !== "result" || saved) return
    if (!isAutoScored && !aiResult) return // wait for AI scoring
    setSaved(true)
    const level = results.level
    const label = results.label
    void completeSectionProgress({
      examId,
      section,
      answers,
      level,
      label,
      correct: results.correct,
      total: results.total,
      reviewData: isAutoScored ? null : aiTasks,
    }).catch(() => {})
    void saveMockTestResult({
      testId: test.id,
      title: test.title,
      section: test.section,
      correct: results.correct,
      total: results.total,
      level,
      label,
    }).catch(() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step.kind, saved, aiResult, isAutoScored])

  const selectSingle = (optionId: string) => {
    if (step.kind !== "audio-mcq") return
    setAnswers((a) => ({ ...a, [step.question.id]: optionId }))
  }
  const selectMulti = (questionId: string, optionId: string) => {
    setAnswers((a) => ({ ...a, [questionId]: optionId }))
  }
  const setWriting = (text: string) => {
    if (step.kind !== "writing") return
    setAnswers((a) => ({ ...a, [step.id]: text }))
  }

  // Full-page detailed review (question-by-question / task-by-task).
  if (reviewing) {
    return (
      <ReviewShell
        examId={examId}
        examTitle={test.title.replace(/\s*-\s*.*$/, "")}
        section={section}
        level={results.level}
        autoGroups={isAutoScored ? reviewGroups : undefined}
        aiTasks={isAutoScored ? undefined : aiTasks}
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
        <AudioContent key={step.id} step={step} showTranscript={showTranscript} />
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
      {step.kind === "reading" && (
        <ReadingContent step={step} answers={answers} onSelect={selectMulti} />
      )}
      {step.kind === "writing" && (
        <WritingContent
          key={step.id}
          step={step}
          value={answers[step.id] ?? ""}
          onChange={setWriting}
        />
      )}
      {step.kind === "speaking" && (
        <SpeakingContent
          key={step.id}
          step={step}
          phase={speakingPhase}
          secondsLeft={countdown}
          transcript={speech.transcript || speech.interim}
          onStart={startSpeaking}
        />
      )}
      {step.kind === "result" && (
        <ResultView
          test={test}
          results={results}
          scoring={scoring}
          onExit={() => router.push(`/dashboard/mock-tests/${examId}`)}
          onReview={() => setReviewing(true)}
        />
      )}
    </TestShell>
  )
}
