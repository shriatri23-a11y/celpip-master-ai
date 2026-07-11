"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState, useCallback } from "react"
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
  Wand2,
  Users,
  RefreshCcw,
} from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Button } from "@/components/ui/button"
import { speakingTasks, speakingExtraTasks } from "@/lib/celpip"
import type { SpeakingTask } from "@/lib/celpip"
import type { ScoreResult } from "@/lib/scoring-schema"
import { useSpeechRecognition } from "@/hooks/use-speech-recognition"
import { saveAttempt } from "@/app/actions/score-history"
import { getAiSpeakingTasks } from "@/app/actions/ai-speaking-tasks"
import type { AiTaskRecord } from "@/app/actions/ai-speaking-tasks"
import { SpeakingScoreReport } from "@/components/dashboard/speaking-score-report"
import { cn } from "@/lib/utils"

// ─── Types ─────────────────────────────────────────────────────────────────

type Phase = "idle" | "prep" | "recording" | "done" | "scoring" | "result"
type Tab = "curated" | "extra" | "ai"

const TASK_TYPE_OPTIONS = [
  "Giving Advice",
  "Personal Experience",
  "Describing a Scene",
  "Making Predictions",
  "Comparing and Persuading",
  "Difficult Situation",
  "Expressing Opinions",
  "Unusual Situation",
] as const

// ─── Helpers ───────────────────────────────────────────────────────────────

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, "0")}`
}

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

// ─── Sub-components ────────────────────────────────────────────────────────

function AudioWaveform({ active }: { active: boolean }) {
  const bars = 28
  return (
    <div className="flex items-center justify-center gap-[3px] h-10" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "w-[3px] rounded-full transition-all",
            active ? "bg-primary animate-waveform" : "bg-muted h-1"
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
        <circle cx="72" cy="72" r={radius} fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={dashOffset} className="text-primary transition-all duration-1000" />
      </svg>
      <div className="flex flex-col items-center">
        <span className="font-display text-4xl font-bold tabular-nums text-foreground leading-none">{formatTime(seconds)}</span>
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
        <circle cx="72" cy="72" r={radius} fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={dashOffset} className="text-destructive transition-all duration-1000" />
      </svg>
      <div className="flex flex-col items-center">
        <span className="font-display text-4xl font-bold tabular-nums text-foreground leading-none">{formatTime(seconds)}</span>
        <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">left</span>
      </div>
    </div>
  )
}

// ─── Recorder ──────────────────────────────────────────────────────────────

function Recorder({ task }: { task: SpeakingTask }) {
  const [phase, setPhase] = useState<Phase>("idle")
  const [prepSecondsLeft, setPrepSecondsLeft] = useState(0)
  const [recordSecondsLeft, setRecordSecondsLeft] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [result, setResult] = useState<ScoreResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showTips, setShowTips] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const { supported, listening, transcript, interim, error: speechError, start, stop, reset: resetSpeech } = useSpeechRecognition()

  function clearTimer() {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }

  useEffect(() => () => clearTimer(), [])

  // Reset when task changes
  useEffect(() => {
    clearTimer(); stop(); resetSpeech()
    setPhase("idle"); setPrepSecondsLeft(0); setRecordSecondsLeft(0)
    setElapsed(0); setResult(null); setError(null); setShowTips(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task.id])

  function fullReset() {
    clearTimer(); stop(); resetSpeech()
    setPhase("idle"); setPrepSecondsLeft(0); setRecordSecondsLeft(0)
    setElapsed(0); setResult(null); setError(null); setShowTips(false)
  }

  function beginRecording() {
    clearTimer(); resetSpeech()
    setPhase("recording"); setElapsed(0); setRecordSecondsLeft(task.speakSeconds); start()
    timerRef.current = setInterval(() => {
      setElapsed((e) => e + 1)
      setRecordSecondsLeft((prev) => {
        if (prev <= 1) { clearTimer(); stop(); setPhase("done"); return 0 }
        return prev - 1
      })
    }, 1000)
  }

  function beginPrep() {
    fullReset(); setPhase("prep"); setPrepSecondsLeft(task.prepSeconds)
    timerRef.current = setInterval(() => {
      setPrepSecondsLeft((prev) => {
        if (prev <= 1) { clearTimer(); beginRecording(); return 0 }
        return prev - 1
      })
    }, 1000)
  }

  function finishRecording() { clearTimer(); stop(); setPhase("done") }

  async function handleScore() {
    setPhase("scoring"); setError(null); setResult(null)
    try {
      const res = await fetch("/api/score-speaking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: task.prompt, taskTitle: task.title, transcript, durationSeconds: elapsed }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.")
      setResult(data as ScoreResult)
      setPhase("result")
      void saveAttempt({ skill: "speaking", taskType: task.title, prompt: task.prompt, responseText: transcript, report: data as ScoreResult }).catch(() => {})
    } catch (err) {
      setError((err as Error).message); setPhase("done")
    }
  }

  const wordCount = transcript.trim() ? transcript.trim().split(/\s+/).length : 0

  return (
    <div className="flex flex-col gap-4">
      {/* Task card */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", taskTypeColors[task.taskType] ?? "bg-muted text-muted-foreground border-border")}>
            {task.taskType}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="size-3" />
            {task.prepSeconds}s prep / {task.speakSeconds}s speak
          </span>
        </div>
        <h2 className="mt-2 font-display font-semibold text-foreground">{task.title}</h2>

        {task.imageSrc && (
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <Image src={task.imageSrc} alt={task.imageAlt ?? "Scene to describe"} width={960} height={540} className="h-auto w-full object-cover" priority />
            <p className="px-3 py-1.5 text-xs text-muted-foreground italic border-t border-border bg-muted/30">Study this image carefully during your preparation time.</p>
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

        <button onClick={() => setShowTips((v) => !v)} className="mt-4 flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">
          <Lightbulb className="size-3.5" />
          {showTips ? "Hide tips" : "Show examiner tips"}
        </button>

        {showTips && (
          <div className="mt-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">Examiner tips</p>
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
      <div className="rounded-2xl border border-border bg-card overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-5 p-8">
          {phase === "idle" && (
            <>
              <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
                <Mic className="size-9 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-display font-semibold text-foreground">Ready to start?</p>
                <p className="mt-1 text-sm text-muted-foreground">You&apos;ll get {task.prepSeconds}s to prepare, then {task.speakSeconds}s to record.</p>
              </div>
              <Button onClick={beginPrep} disabled={!supported} size="lg" className="gap-2">
                <Mic className="size-4" /> Begin task
              </Button>
            </>
          )}

          {phase === "prep" && (
            <>
              <PrepCircle seconds={prepSecondsLeft} total={task.prepSeconds} />
              <div className="text-center">
                <p className="font-display font-semibold text-foreground">Preparation time</p>
                <p className="text-sm text-muted-foreground">Think through your answer. Recording begins automatically.</p>
              </div>
              <Button variant="outline" size="sm" onClick={beginRecording}>Skip to recording</Button>
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
                <div className="w-full px-4"><AudioWaveform active={listening} /></div>
              </div>
              <Button variant="destructive" size="sm" onClick={finishRecording} className="gap-2">
                <Square className="size-3.5" /> Stop &amp; finish
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
                <p className="text-sm text-muted-foreground">{formatTime(elapsed)} recorded &middot; {wordCount} words</p>
              </div>
              {error && <p className="rounded-xl bg-destructive/10 px-4 py-2 text-sm text-destructive">{error}</p>}
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={fullReset} className="gap-1.5">
                  <RotateCcw className="size-3.5" /> Re-record
                </Button>
                <Button size="sm" onClick={handleScore} disabled={wordCount < 5} className="gap-1.5">
                  <Sparkles className="size-3.5" /> Score my response
                </Button>
              </div>
            </>
          )}

          {phase === "scoring" && (
            <>
              <Loader2 className="size-10 animate-spin text-primary" />
              <div className="text-center">
                <p className="font-display font-semibold text-foreground">Your examiner is listening&hellip;</p>
                <p className="text-sm text-muted-foreground">Evaluating content, vocabulary, listenability, and task fulfillment.</p>
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
                <p className="text-sm text-muted-foreground">See your feedback below.</p>
              </div>
              <Button variant="outline" size="sm" onClick={fullReset} className="gap-1.5">
                <RotateCcw className="size-3.5" /> Try again
              </Button>
            </>
          )}
        </div>

        {(phase === "recording" || phase === "done" || phase === "result") && (
          <div className="border-t border-border bg-muted/30 px-6 py-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Your transcript</p>
              {wordCount > 0 && <span className="text-xs text-muted-foreground">{wordCount} words</span>}
            </div>
            <p className="min-h-16 text-sm leading-relaxed text-foreground">
              {transcript}
              <span className="text-muted-foreground">{interim}</span>
              {!transcript && !interim && (
                <span className="text-muted-foreground italic">
                  {listening ? "Listening for speech..." : "No speech captured yet."}
                </span>
              )}
            </p>
            {speechError && <p className="mt-2 text-xs text-destructive">{speechError}</p>}
          </div>
        )}
      </div>

      {/* Score report inline */}
      {result && phase === "result" && (
        <SpeakingScoreReport result={result} transcript={transcript} />
      )}
    </div>
  )
}

// ─── AI Generator Panel ────────────────────────────────────────────────────

function AiGeneratorPanel({
  communityTasks,
  onTaskSelect,
  onNewTaskGenerated,
}: {
  communityTasks: AiTaskRecord[]
  onTaskSelect: (task: SpeakingTask) => void
  onNewTaskGenerated: (task: AiTaskRecord) => void
}) {
  const [selectedTaskNumber, setSelectedTaskNumber] = useState<number>(1)
  const [generating, setGenerating] = useState(false)
  const [genError, setGenError] = useState<string | null>(null)
  const [lastGenerated, setLastGenerated] = useState<AiTaskRecord | null>(null)

  async function handleGenerate() {
    setGenerating(true); setGenError(null); setLastGenerated(null)
    try {
      const res = await fetch("/api/generate-speaking-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskNumber: selectedTaskNumber }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "Generation failed.")
      const task = data as AiTaskRecord
      setLastGenerated(task)
      onNewTaskGenerated(task)
    } catch (err) {
      setGenError((err as Error).message)
    } finally {
      setGenerating(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Generator card */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 mb-1">
          <Wand2 className="size-4 text-primary" />
          <h3 className="font-display font-semibold text-foreground">Generate a unique task</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-5">
          The AI will write a completely original CELPIP task for any of the 8 task types. Once generated, it is automatically shared with all students.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <label htmlFor="task-type-select" className="sr-only">Task type</label>
            <select
              id="task-type-select"
              value={selectedTaskNumber}
              onChange={(e) => setSelectedTaskNumber(Number(e.target.value))}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {TASK_TYPE_OPTIONS.map((type, i) => (
                <option key={type} value={i + 1}>Task {i + 1} — {type}</option>
              ))}
            </select>
          </div>
          <Button onClick={handleGenerate} disabled={generating} className="gap-2 shrink-0">
            {generating ? <Loader2 className="size-4 animate-spin" /> : <Wand2 className="size-4" />}
            {generating ? "Generating…" : "Generate task"}
          </Button>
        </div>

        {genError && (
          <p className="mt-3 rounded-xl bg-destructive/10 px-4 py-2 text-sm text-destructive">{genError}</p>
        )}

        {lastGenerated && (
          <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", taskTypeColors[lastGenerated.taskType] ?? "bg-muted text-muted-foreground border-border")}>
                  {lastGenerated.taskType}
                </span>
                <p className="mt-2 font-display font-semibold text-foreground text-sm">{lastGenerated.title}</p>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-3">{lastGenerated.prompt}</p>
              </div>
            </div>
            <Button size="sm" className="mt-3 gap-1.5" onClick={() => onTaskSelect(lastGenerated)}>
              <Mic className="size-3.5" /> Practice this task
            </Button>
          </div>
        )}
      </div>

      {/* Community pool */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Users className="size-4 text-muted-foreground" />
          <h3 className="font-display font-semibold text-foreground">Community tasks</h3>
          <span className="text-xs text-muted-foreground">({communityTasks.length} available)</span>
        </div>

        {communityTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 py-12 text-center px-6">
            <Wand2 className="size-8 text-muted-foreground/40 mb-3" />
            <p className="font-medium text-foreground">No community tasks yet</p>
            <p className="text-sm text-muted-foreground mt-1">Generate the first one above — it will appear here for all students.</p>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {communityTasks.map((task) => (
              <button
                key={task.id}
                onClick={() => onTaskSelect(task)}
                className="group flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-4 text-left transition-all hover:border-primary/40 hover:shadow-sm"
              >
                <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", taskTypeColors[task.taskType] ?? "bg-muted text-muted-foreground border-border")}>
                  {task.taskType}
                </span>
                <p className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">{task.prompt}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto pt-1">
                  <Clock className="size-3" />
                  {task.prepSeconds}s prep / {task.speakSeconds}s speak
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Main page ─────────────────────────────────────────────────────────────

export default function SpeakingPage() {
  const [activeTab, setActiveTab] = useState<Tab>("curated")
  const [curatedIndex, setCuratedIndex] = useState(0)
  const [extraIndex, setExtraIndex] = useState(0)
  const [selectedTask, setSelectedTask] = useState<SpeakingTask | null>(null)
  const [communityTasks, setCommunityTasks] = useState<AiTaskRecord[]>([])
  const [loadingCommunity, setLoadingCommunity] = useState(false)

  const { supported } = useSpeechRecognition()

  // Determine which task is active
  const activeTask = useMemo<SpeakingTask>(() => {
    if (activeTab === "ai" && selectedTask) return selectedTask
    if (activeTab === "extra") return speakingExtraTasks[extraIndex]
    return speakingTasks[curatedIndex]
  }, [activeTab, selectedTask, curatedIndex, extraIndex])

  // Load community tasks when AI tab is opened
  const loadCommunity = useCallback(async () => {
    setLoadingCommunity(true)
    try {
      const tasks = await getAiSpeakingTasks()
      setCommunityTasks(tasks)
    } catch {
      // non-fatal
    } finally {
      setLoadingCommunity(false)
    }
  }, [])

  useEffect(() => {
    if (activeTab === "ai") loadCommunity()
  }, [activeTab, loadCommunity])

  function handleNewTaskGenerated(task: AiTaskRecord) {
    setCommunityTasks((prev) => [task, ...prev])
    setSelectedTask(task)
  }

  function handleTabChange(tab: Tab) {
    setActiveTab(tab)
    setSelectedTask(null)
  }

  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: "curated", label: "Curated Tasks", count: speakingTasks.length },
    { id: "extra", label: "Extra Practice", count: speakingExtraTasks.length },
    { id: "ai", label: "AI Generated" },
  ]

  return (
    <>
      <style>{`
        @keyframes waveform { 0%, 100% { height: 4px; } 50% { height: 28px; } }
        .animate-waveform { animation: waveform ease-in-out infinite; }
      `}</style>

      <div className="mx-auto max-w-5xl px-4 py-8 md:px-8">
        <PageHeader
          title="Speaking practice"
          description="All 8 CELPIP task types. Prepare, record, get instant AI examiner feedback. Generate unlimited unique tasks with AI."
        />

        {!supported && (
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-accent bg-accent/40 p-4">
            <TriangleAlert className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
            <p className="text-sm text-accent-foreground">
              Live transcription uses your browser&apos;s speech recognition, which works best in Chrome or Edge on desktop.
            </p>
          </div>
        )}

        {/* Tab bar */}
        <div className="mt-8 flex gap-1 rounded-2xl border border-border bg-muted/30 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                activeTab === tab.id
                  ? "bg-card text-foreground shadow-sm border border-border"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.id === "ai" && <Wand2 className="size-3.5" />}
              {tab.label}
              {tab.count !== undefined && (
                <span className={cn("rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none", activeTab === tab.id ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground")}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Curated tab */}
        {activeTab === "curated" && (
          <div className="mt-6">
            {/* Task strip */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {speakingTasks.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setCuratedIndex(i)}
                  className={cn(
                    "flex shrink-0 flex-col items-center gap-1 rounded-xl border px-3 py-2 text-xs font-medium transition-all",
                    i === curatedIndex
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  )}
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Task {i + 1}</span>
                  <span className="max-w-[80px] text-center leading-tight line-clamp-2">{t.taskType}</span>
                </button>
              ))}
            </div>

            <div className="mt-6 flex gap-2 justify-end">
              <button onClick={() => setCuratedIndex((i) => Math.max(0, i - 1))} disabled={curatedIndex === 0} className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted disabled:opacity-30" aria-label="Previous task">
                <ChevronLeft className="size-4" />
              </button>
              <button onClick={() => setCuratedIndex((i) => Math.min(speakingTasks.length - 1, i + 1))} disabled={curatedIndex === speakingTasks.length - 1} className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted disabled:opacity-30" aria-label="Next task">
                <ChevronRight className="size-4" />
              </button>
            </div>

            <div className="mt-3">
              <Recorder task={speakingTasks[curatedIndex]} />
            </div>
          </div>
        )}

        {/* Extra Practice tab */}
        {activeTab === "extra" && (
          <div className="mt-6">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {speakingExtraTasks.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setExtraIndex(i)}
                  className={cn(
                    "flex shrink-0 flex-col items-center gap-1 rounded-xl border px-3 py-2 text-xs font-medium transition-all",
                    i === extraIndex
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  )}
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">#{i + 1}</span>
                  <span className="max-w-[80px] text-center leading-tight line-clamp-2">{t.taskType}</span>
                </button>
              ))}
            </div>

            <div className="mt-6 flex gap-2 justify-end">
              <button onClick={() => setExtraIndex((i) => Math.max(0, i - 1))} disabled={extraIndex === 0} className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted disabled:opacity-30" aria-label="Previous task">
                <ChevronLeft className="size-4" />
              </button>
              <button onClick={() => setExtraIndex((i) => Math.min(speakingExtraTasks.length - 1, i + 1))} disabled={extraIndex === speakingExtraTasks.length - 1} className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted disabled:opacity-30" aria-label="Next task">
                <ChevronRight className="size-4" />
              </button>
            </div>

            <div className="mt-3">
              <Recorder task={speakingExtraTasks[extraIndex]} />
            </div>
          </div>
        )}

        {/* AI Generated tab */}
        {activeTab === "ai" && (
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
            <div>
              {selectedTask ? (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold text-foreground">Practising AI task</h3>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedTask(null)} className="gap-1.5 text-muted-foreground">
                      <RefreshCcw className="size-3.5" /> Change task
                    </Button>
                  </div>
                  <Recorder task={selectedTask} />
                </div>
              ) : (
                <div className="flex min-h-60 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
                  <Mic className="size-10 text-muted-foreground/40 mb-3" />
                  <p className="font-medium text-foreground">No task selected</p>
                  <p className="text-sm text-muted-foreground mt-1">Generate a new task or pick one from the community pool.</p>
                </div>
              )}
            </div>

            <div>
              {loadingCommunity ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="size-6 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <AiGeneratorPanel
                  communityTasks={communityTasks}
                  onTaskSelect={(t) => setSelectedTask(t)}
                  onNewTaskGenerated={handleNewTaskGenerated}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
