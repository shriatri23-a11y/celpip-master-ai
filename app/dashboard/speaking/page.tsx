"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"
import {
  Loader2,
  Sparkles,
  RotateCcw,
  Clock,
  Mic,
  Square,
  TriangleAlert,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  BookOpen,
  CheckCircle2,
} from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Button } from "@/components/ui/button"
import { speakingTasks } from "@/lib/celpip"
import type { ScoreResult } from "@/lib/scoring-schema"
import { useSpeechRecognition } from "@/hooks/use-speech-recognition"
import { saveAttempt } from "@/app/actions/score-history"
import { SpeakingScoreReport } from "@/components/dashboard/speaking-score-report"
import { cn } from "@/lib/utils"

type Phase = "idle" | "prep" | "recording" | "done" | "scoring" | "result"

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, "0")}`
}

function AudioWaveform({ active }: { active: boolean }) {
  const bars = 28
  return (
    <div className="flex items-center justify-center gap-[3px] h-10" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "w-[3px] rounded-full transition-all",
            active
              ? "bg-primary animate-waveform"
              : "bg-muted h-1"
          )}
          style={
            active
              ? {
                  animationDelay: `${(i * 70) % 500}ms`,
                  animationDuration: `${400 + ((i * 137) % 300)}ms`,
                }
              : undefined
          }
        />
      ))}
    </div>
  )
}

function PrepCircle({ seconds, total }: { seconds: number; total: number }) {
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const progress = total > 0 ? (total - seconds) / total : 0
  const dashOffset = circumference * (1 - progress)

  return (
    <div className="relative flex items-center justify-center w-36 h-36">
      <svg className="absolute inset-0 -rotate-90" width="144" height="144" viewBox="0 0 144 144">
        <circle cx="72" cy="72" r={radius} fill="none" stroke="currentColor" strokeWidth="5" className="text-muted" />
        <circle
          cx="72"
          cy="72"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className="text-primary transition-all duration-1000"
        />
      </svg>
      <div className="flex flex-col items-center">
        <span className="font-display text-4xl font-bold tabular-nums text-foreground leading-none">
          {formatTime(seconds)}
        </span>
        <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">prep</span>
      </div>
    </div>
  )
}

function RecordCircle({ seconds, total }: { seconds: number; total: number }) {
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const progress = total > 0 ? (total - seconds) / total : 0
  const dashOffset = circumference * (1 - progress)

  return (
    <div className="relative flex items-center justify-center w-36 h-36">
      <svg className="absolute inset-0 -rotate-90" width="144" height="144" viewBox="0 0 144 144">
        <circle cx="72" cy="72" r={radius} fill="none" stroke="currentColor" strokeWidth="5" className="text-muted" />
        <circle
          cx="72"
          cy="72"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className="text-destructive transition-all duration-1000"
        />
      </svg>
      <div className="flex flex-col items-center">
        <span className="font-display text-4xl font-bold tabular-nums text-foreground leading-none">
          {formatTime(seconds)}
        </span>
        <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">left</span>
      </div>
    </div>
  )
}

export default function SpeakingPage() {
  const [taskIndex, setTaskIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>("idle")
  const [prepSecondsLeft, setPrepSecondsLeft] = useState(0)
  const [recordSecondsLeft, setRecordSecondsLeft] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [result, setResult] = useState<ScoreResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showTips, setShowTips] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const {
    supported,
    listening,
    transcript,
    interim,
    error: speechError,
    start,
    stop,
    reset: resetSpeech,
  } = useSpeechRecognition()

  const task = useMemo(() => speakingTasks[taskIndex], [taskIndex])

  function clearTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => () => clearTimer(), [])

  function fullReset() {
    clearTimer()
    stop()
    resetSpeech()
    setPhase("idle")
    setPrepSecondsLeft(0)
    setRecordSecondsLeft(0)
    setElapsed(0)
    setResult(null)
    setError(null)
    setShowTips(false)
  }

  function goToTask(index: number) {
    fullReset()
    setTaskIndex(index)
  }

  function beginPrep() {
    fullReset()
    setPhase("prep")
    setPrepSecondsLeft(task.prepSeconds)
    timerRef.current = setInterval(() => {
      setPrepSecondsLeft((prev) => {
        if (prev <= 1) {
          clearTimer()
          beginRecording()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  function beginRecording() {
    clearTimer()
    resetSpeech()
    setPhase("recording")
    setElapsed(0)
    setRecordSecondsLeft(task.speakSeconds)
    start()
    timerRef.current = setInterval(() => {
      setElapsed((e) => e + 1)
      setRecordSecondsLeft((prev) => {
        if (prev <= 1) {
          clearTimer()
          stop()
          setPhase("done")
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  function finishRecording() {
    clearTimer()
    stop()
    setPhase("done")
  }

  async function handleScore() {
    setPhase("scoring")
    setError(null)
    setResult(null)
    try {
      const res = await fetch("/api/score-speaking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: task.prompt,
          taskTitle: task.title,
          transcript,
          durationSeconds: elapsed,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.")
      setResult(data as ScoreResult)
      setPhase("result")
      void saveAttempt({
        skill: "speaking",
        taskType: task.title,
        prompt: task.prompt,
        responseText: transcript,
        report: data as ScoreResult,
      }).catch(() => {})
    } catch (err) {
      setError((err as Error).message)
      setPhase("done")
    }
  }

  const wordCount = transcript.trim() ? transcript.trim().split(/\s+/).length : 0

  const taskTypeColors: Record<string, string> = {
    "Giving Advice": "bg-blue-50 text-blue-700 border-blue-200",
    "Personal Experience": "bg-amber-50 text-amber-700 border-amber-200",
    "Describing a Scene": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Making Predictions": "bg-purple-50 text-purple-700 border-purple-200",
    "Comparing and Persuading": "bg-orange-50 text-orange-700 border-orange-200",
    "Difficult Situation": "bg-red-50 text-red-700 border-red-200",
    "Expressing Opinions": "bg-indigo-50 text-indigo-700 border-indigo-200",
    "Unusual Situation": "bg-pink-50 text-pink-700 border-pink-200",
  }

  return (
    <>
      <style>{`
        @keyframes waveform {
          0%, 100% { height: 4px; }
          50% { height: 28px; }
        }
        .animate-waveform {
          animation: waveform ease-in-out infinite;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <PageHeader
          title="Speaking practice"
          description="Work through all 8 CELPIP task types. Prepare, record your response, and get instant AI examiner feedback."
        />

        {!supported && (
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-accent bg-accent/40 p-4">
            <TriangleAlert className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
            <p className="text-sm text-accent-foreground">
              Live transcription uses your browser&apos;s speech recognition, which works best in
              Chrome or Edge on desktop. In other browsers you can still read the task and practice
              without live feedback.
            </p>
          </div>
        )}

        {/* Task navigation strip */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-1">
          {speakingTasks.map((t, i) => (
            <button
              key={t.id}
              onClick={() => goToTask(i)}
              className={cn(
                "flex shrink-0 flex-col items-center gap-1 rounded-xl border px-3 py-2 text-xs font-medium transition-all",
                i === taskIndex
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">
                Task {i + 1}
              </span>
              <span className="max-w-[80px] text-center leading-tight line-clamp-2">
                {t.taskType}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_400px]">
          {/* Left column: task info + recorder */}
          <div className="flex flex-col gap-4">
            {/* Task card */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
                        taskTypeColors[task.taskType] ?? "bg-muted text-muted-foreground border-border"
                      )}
                    >
                      {task.taskType}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3" />
                      {task.prepSeconds}s prep / {task.speakSeconds}s speak
                    </span>
                  </div>
                  <h2 className="mt-2 font-display font-semibold text-foreground">{task.title}</h2>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => goToTask(Math.max(0, taskIndex - 1))}
                    disabled={taskIndex === 0}
                    className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted disabled:opacity-30"
                    aria-label="Previous task"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    onClick={() => goToTask(Math.min(speakingTasks.length - 1, taskIndex + 1))}
                    disabled={taskIndex === speakingTasks.length - 1}
                    className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted disabled:opacity-30"
                    aria-label="Next task"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>

              {task.imageSrc && (
                <div className="mt-4 overflow-hidden rounded-xl border border-border">
                  <Image
                    src={task.imageSrc}
                    alt={task.imageAlt ?? "Scene to describe"}
                    width={960}
                    height={540}
                    className="h-auto w-full object-cover"
                    priority
                  />
                  <p className="px-3 py-1.5 text-xs text-muted-foreground italic border-t border-border bg-muted/30">
                    Study this image carefully during your preparation time.
                  </p>
                </div>
              )}

              <p className="mt-4 text-sm leading-relaxed text-foreground">{task.prompt}</p>

              {task.requirements.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {task.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              )}

              <button
                onClick={() => setShowTips((v) => !v)}
                className="mt-4 flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
              >
                <Lightbulb className="size-3.5" />
                {showTips ? "Hide tips" : "Show examiner tips"}
              </button>

              {showTips && (
                <div className="mt-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                    Examiner tips
                  </p>
                  <ul className="space-y-2">
                    {task.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Recorder */}
            <div className="flex-1 rounded-2xl border border-border bg-card overflow-hidden">
              {/* Phase display */}
              <div className="flex flex-col items-center justify-center gap-5 p-8">
                {phase === "idle" && (
                  <>
                    <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
                      <Mic className="size-9 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="font-display font-semibold text-foreground">Ready to start?</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        You&apos;ll get {task.prepSeconds}s to prepare, then {task.speakSeconds}s
                        to record your response.
                      </p>
                    </div>
                    <Button onClick={beginPrep} disabled={!supported} size="lg" className="gap-2">
                      <Mic className="size-4" />
                      Begin task
                    </Button>
                  </>
                )}

                {phase === "prep" && (
                  <>
                    <PrepCircle seconds={prepSecondsLeft} total={task.prepSeconds} />
                    <div className="text-center">
                      <p className="font-display font-semibold text-foreground">
                        Preparation time
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Think through your answer. Recording begins automatically.
                      </p>
                    </div>
                    <Button variant="outline" size="sm" onClick={beginRecording}>
                      Skip to recording
                    </Button>
                  </>
                )}

                {phase === "recording" && (
                  <>
                    <div className="flex flex-col items-center gap-4 w-full">
                      <div className="flex items-center gap-2 text-sm font-semibold text-destructive">
                        <span className="relative flex size-3">
                          <span className="absolute inline-flex size-full animate-ping rounded-full bg-destructive/60" />
                          <span className="relative inline-flex size-3 rounded-full bg-destructive" />
                        </span>
                        Recording
                      </div>
                      <RecordCircle seconds={recordSecondsLeft} total={task.speakSeconds} />
                      <div className="w-full px-4">
                        <AudioWaveform active={listening} />
                      </div>
                    </div>
                    <Button variant="destructive" size="sm" onClick={finishRecording} className="gap-2">
                      <Square className="size-3.5" />
                      Stop &amp; finish
                    </Button>
                  </>
                )}

                {phase === "done" && (
                  <>
                    <div className="flex size-20 items-center justify-center rounded-full bg-success/10">
                      <Mic className="size-9 text-success" />
                    </div>
                    <div className="text-center">
                      <p className="font-display font-semibold text-foreground">Response recorded</p>
                      <p className="text-sm text-muted-foreground">
                        {formatTime(elapsed)} recorded &middot; {wordCount} words
                      </p>
                    </div>
                    {error && (
                      <p className="rounded-xl bg-destructive/10 px-4 py-2 text-sm text-destructive">
                        {error}
                      </p>
                    )}
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={fullReset} className="gap-1.5">
                        <RotateCcw className="size-3.5" />
                        Re-record
                      </Button>
                      <Button
                        size="sm"
                        onClick={handleScore}
                        disabled={wordCount < 5}
                        className="gap-1.5"
                      >
                        <Sparkles className="size-3.5" />
                        Score my response
                      </Button>
                    </div>
                  </>
                )}

                {phase === "scoring" && (
                  <>
                    <Loader2 className="size-10 animate-spin text-primary" />
                    <div className="text-center">
                      <p className="font-display font-semibold text-foreground">
                        Your examiner is listening&hellip;
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Evaluating content, vocabulary, listenability, and task fulfillment.
                      </p>
                    </div>
                  </>
                )}

                {phase === "result" && (
                  <>
                    <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
                      <Sparkles className="size-9 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="font-display font-semibold text-foreground">Scored!</p>
                      <p className="text-sm text-muted-foreground">See your feedback on the right.</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={fullReset} className="gap-1.5">
                      <RotateCcw className="size-3.5" />
                      Try again
                    </Button>
                  </>
                )}
              </div>

              {/* Live transcript */}
              {(phase === "recording" || phase === "done" || phase === "result") && (
                <div className="border-t border-border bg-muted/30 px-6 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Your transcript
                    </p>
                    {wordCount > 0 && (
                      <span className="text-xs text-muted-foreground">{wordCount} words</span>
                    )}
                  </div>
                  <p className="min-h-20 text-sm leading-relaxed text-foreground">
                    {transcript}
                    <span className="text-muted-foreground">{interim}</span>
                    {!transcript && !interim && (
                      <span className="text-muted-foreground italic">
                        {listening ? "Listening for speech..." : "No speech captured yet."}
                      </span>
                    )}
                  </p>
                  {speechError && (
                    <p className="mt-2 text-xs text-destructive">{speechError}</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right column: score / placeholder */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            {(phase === "idle" || phase === "prep" || phase === "recording") && (
              <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
                  <BookOpen className="size-7 text-primary" />
                </span>
                <p className="mt-4 font-display font-semibold text-foreground">
                  AI feedback appears here
                </p>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Record your response, then tap &ldquo;Score my response&rdquo; to get a detailed
                  CELPIP breakdown with weak phrase highlighting and a model answer.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-2 text-left w-full max-w-xs">
                  {["Content / Coherence", "Vocabulary", "Listenability", "Task Fulfillment"].map(
                    (c) => (
                      <div
                        key={c}
                        className="rounded-lg bg-muted/60 px-3 py-2 text-xs font-medium text-muted-foreground"
                      >
                        {c}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {phase === "done" && !result && (
              <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
                <Sparkles className="size-10 text-primary/40" />
                <p className="mt-4 font-display font-semibold text-foreground">Ready to score</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Click &ldquo;Score my response&rdquo; to get your examiner feedback.
                </p>
              </div>
            )}

            {phase === "scoring" && (
              <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center">
                <div className="space-y-3 w-full">
                  {["Content / Coherence", "Vocabulary", "Listenability", "Task Fulfillment"].map(
                    (c, i) => (
                      <div key={c} className="space-y-1.5">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{c}</span>
                          <Loader2 className="size-3 animate-spin" />
                        </div>
                        <div
                          className="h-1.5 rounded-full bg-muted overflow-hidden"
                          style={{ animationDelay: `${i * 150}ms` }}
                        >
                          <div className="h-full bg-primary/30 rounded-full animate-pulse w-3/4" />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {result && phase === "result" && (
              <SpeakingScoreReport result={result} transcript={transcript} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
