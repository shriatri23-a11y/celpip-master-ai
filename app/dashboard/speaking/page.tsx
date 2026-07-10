"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Loader2, Sparkles, RotateCcw, Clock, Mic, Square, TriangleAlert } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { ScoreReport } from "@/components/dashboard/score-report"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { speakingTasks } from "@/lib/celpip"
import type { ScoreResult } from "@/lib/scoring-schema"
import { useSpeechRecognition } from "@/hooks/use-speech-recognition"

type Phase = "idle" | "prep" | "recording" | "done"

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, "0")}`
}

export default function SpeakingPage() {
  const [taskId, setTaskId] = useState(speakingTasks[0].id)
  const [phase, setPhase] = useState<Phase>("idle")
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ScoreResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const { supported, listening, transcript, interim, error: speechError, start, stop, reset: resetSpeech } =
    useSpeechRecognition()

  const task = useMemo(
    () => speakingTasks.find((t) => t.id === taskId) ?? speakingTasks[0],
    [taskId],
  )

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
    setSecondsLeft(0)
    setElapsed(0)
    setResult(null)
    setError(null)
  }

  function beginPrep() {
    fullReset()
    setPhase("prep")
    setSecondsLeft(task.prepSeconds)
    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
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
    setSecondsLeft(task.speakSeconds)
    start()
    timerRef.current = setInterval(() => {
      setElapsed((e) => e + 1)
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearTimer()
          finishRecording()
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
    setLoading(true)
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
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const wordCount = transcript.trim() ? transcript.trim().split(/\s+/).length : 0

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-8">
      <PageHeader
        title="Speaking practice"
        description="Prepare, record your spoken answer, and get instant examiner-grade feedback."
      >
        <Select
          value={taskId}
          onValueChange={(v) => {
            setTaskId(v as string)
            fullReset()
          }}
        >
          <SelectTrigger size="default" className="h-9 w-[220px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {speakingTasks.map((t) => (
              <SelectItem key={t.id} value={t.id}>
                {t.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </PageHeader>

      {!supported && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-accent bg-accent/40 p-4">
          <TriangleAlert className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
          <p className="text-sm text-accent-foreground">
            Live transcription uses your browser&apos;s speech recognition, which works best in
            Chrome or Edge on desktop. In other browsers you can still read the task and use the
            writing practice for feedback.
          </p>
        </div>
      )}

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <p className="font-display font-semibold text-card-foreground">{task.title}</p>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="size-3.5" />
                {task.prepSeconds}s prep / {task.speakSeconds}s speak
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{task.prompt}</p>
          </div>

          <div className="flex flex-1 flex-col rounded-2xl border border-border bg-card p-6">
            {/* Status / timer */}
            <div className="flex flex-col items-center justify-center gap-4 py-4 text-center">
              {phase === "idle" && (
                <>
                  <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mic className="size-7" />
                  </span>
                  <p className="text-sm text-muted-foreground">
                    You&apos;ll get {task.prepSeconds}s to prepare, then {task.speakSeconds}s to
                    speak.
                  </p>
                  <Button onClick={beginPrep} disabled={!supported}>
                    <Mic className="size-4" />
                    Start task
                  </Button>
                </>
              )}

              {phase === "prep" && (
                <>
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Preparation
                  </p>
                  <p className="font-display text-5xl font-bold tabular-nums text-foreground">
                    {formatTime(secondsLeft)}
                  </p>
                  <p className="text-sm text-muted-foreground">Think about your answer...</p>
                  <Button variant="outline" size="sm" onClick={beginRecording}>
                    Skip to recording
                  </Button>
                </>
              )}

              {phase === "recording" && (
                <>
                  <span className="flex items-center gap-2 text-sm font-medium text-primary">
                    <span className="relative flex size-3">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                      <span className="relative inline-flex size-3 rounded-full bg-primary" />
                    </span>
                    Recording
                  </span>
                  <p className="font-display text-5xl font-bold tabular-nums text-foreground">
                    {formatTime(secondsLeft)}
                  </p>
                  <Button variant="destructive" size="sm" onClick={finishRecording}>
                    <Square className="size-3.5" />
                    Stop &amp; finish
                  </Button>
                </>
              )}

              {phase === "done" && (
                <>
                  <span className="flex size-16 items-center justify-center rounded-full bg-success/10 text-success">
                    <Mic className="size-7" />
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Recorded {formatTime(elapsed)} · {wordCount} words
                  </p>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={fullReset}>
                      <RotateCcw className="size-3.5" />
                      Retry
                    </Button>
                    <Button size="sm" onClick={handleScore} disabled={loading || wordCount < 5}>
                      {loading ? (
                        <>
                          <Loader2 className="size-3.5 animate-spin" />
                          Scoring...
                        </>
                      ) : (
                        <>
                          <Sparkles className="size-3.5" />
                          Score my response
                        </>
                      )}
                    </Button>
                  </div>
                </>
              )}
            </div>

            {/* Live transcript */}
            {(phase === "recording" || phase === "done") && (
              <div className="mt-4 border-t border-border pt-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Live transcript
                </p>
                <p className="min-h-24 text-sm leading-relaxed text-foreground">
                  {transcript}
                  <span className="text-muted-foreground">{interim}</span>
                  {!transcript && !interim && (
                    <span className="text-muted-foreground">
                      {listening ? "Listening..." : "No speech detected yet."}
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

        <div>
          {!result && !loading && !error && (
            <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles className="size-6" />
              </span>
              <p className="mt-4 font-display font-semibold text-foreground">
                Your feedback appears here
              </p>
              <p className="mt-1 max-w-xs text-sm text-muted-foreground">
                Record a response, then score it to see a detailed CELPIP Speaking breakdown.
              </p>
            </div>
          )}

          {loading && (
            <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center">
              <Loader2 className="size-8 animate-spin text-primary" />
              <p className="mt-4 font-display font-semibold text-foreground">
                Your examiner is listening...
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Evaluating content, vocabulary, listenability, and task fulfillment.
              </p>
            </div>
          )}

          {error && (
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
              <p className="font-medium text-destructive">{error}</p>
              <Button variant="outline" size="sm" className="mt-4" onClick={handleScore}>
                Try again
              </Button>
            </div>
          )}

          {result && <ScoreReport result={result} />}
        </div>
      </div>
    </div>
  )
}
