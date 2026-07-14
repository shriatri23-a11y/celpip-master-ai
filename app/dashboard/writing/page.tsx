'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Loader2,
  Sparkles,
  RotateCcw,
  Clock,
  Wand2,
  Users,
  Mail,
  ClipboardList,
  RefreshCcw,
} from 'lucide-react'
import { PageHeader } from '@/components/dashboard/page-header'
import { ScoreReport } from '@/components/dashboard/score-report'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { writingTasks } from '@/lib/celpip'
import type { WritingTask } from '@/lib/celpip'
import type { ScoreResult } from '@/lib/scoring-schema'
import { saveAttempt } from '@/app/actions/score-history'
import { getAiWritingTasks } from '@/app/actions/ai-writing-tasks'
import type { AiWritingTaskRecord } from '@/app/actions/ai-writing-tasks'
import { cn } from '@/lib/utils'

type Tab = 'curated' | 'ai'

const typeStyles: Record<string, string> = {
  Email: 'bg-blue-50 text-blue-700 border-blue-200',
  Survey: 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

// ─── Shared writing workspace (prompt + textarea + score) ────────────────────

function WritingWorkspace({ task }: { task: WritingTask }) {
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ScoreResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Reset the workspace whenever the active task changes.
  useEffect(() => {
    setResponse('')
    setResult(null)
    setError(null)
    setLoading(false)
  }, [task.id])

  const wordCount = response.trim() ? response.trim().split(/\s+/).length : 0

  async function handleScore() {
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await fetch('/api/score-writing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: task.prompt,
          taskType: task.type,
          response,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.')
      setResult(data as ScoreResult)
      void saveAttempt({
        skill: 'writing',
        taskType: task.type,
        prompt: task.prompt,
        responseText: response,
        report: data as ScoreResult,
      }).catch(() => {})
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  function reset() {
    setResult(null)
    setError(null)
    setResponse('')
  }

  const withinRange = wordCount >= task.minWords && wordCount <= task.maxWords

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold',
                  typeStyles[task.type] ?? 'bg-muted text-muted-foreground border-border',
                )}
              >
                {task.type === 'Email' ? (
                  <Mail className="size-3" />
                ) : (
                  <ClipboardList className="size-3" />
                )}
                {task.type}
              </span>
              <p className="font-display font-semibold text-card-foreground">
                {task.title}
              </p>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="size-3.5" />
              {task.timeMinutes} min
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {task.prompt}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Suggested length: {task.minWords}–{task.maxWords} words
          </p>
        </div>

        <div className="flex flex-1 flex-col rounded-2xl border border-border bg-card p-4">
          <Textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Write your response here..."
            className="min-h-64 flex-1 resize-none border-0 bg-transparent p-2 text-base shadow-none focus-visible:ring-0"
            disabled={loading}
          />
          <div className="flex items-center justify-between border-t border-border pt-3">
            <span
              className={cn(
                'text-sm',
                withinRange ? 'text-success' : 'text-muted-foreground',
              )}
            >
              {wordCount} words
            </span>
            <div className="flex gap-2">
              {(result || response) && (
                <Button variant="ghost" size="sm" onClick={reset}>
                  <RotateCcw className="size-3.5" />
                  Clear
                </Button>
              )}
              <Button
                size="sm"
                onClick={handleScore}
                disabled={loading || wordCount < 20}
              >
                {loading ? (
                  <>
                    <Loader2 className="size-3.5 animate-spin" />
                    Scoring...
                  </>
                ) : (
                  <>
                    <Sparkles className="size-3.5" />
                    Score my writing
                  </>
                )}
              </Button>
            </div>
          </div>
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
              Write at least a few sentences, then score your response to see a
              detailed CELPIP breakdown.
            </p>
          </div>
        )}

        {loading && (
          <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center">
            <Loader2 className="size-8 animate-spin text-primary" />
            <p className="mt-4 font-display font-semibold text-foreground">
              Your examiner is reading...
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Evaluating content, vocabulary, readability, and task fulfillment.
            </p>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
            <p className="font-medium text-destructive">{error}</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={handleScore}
            >
              Try again
            </Button>
          </div>
        )}

        {result && <ScoreReport result={result} />}
      </div>
    </div>
  )
}

// ─── AI generator + community pool ───────────────────────────────────────────

const AI_TASK_TYPES: { value: WritingTask['type']; label: string }[] = [
  { value: 'Email', label: 'Task 1 — Writing an Email' },
  { value: 'Survey', label: 'Task 2 — Responding to Survey Questions' },
]

function AiWritingPanel({
  communityTasks,
  onTaskSelect,
  onNewTaskGenerated,
}: {
  communityTasks: AiWritingTaskRecord[]
  onTaskSelect: (task: AiWritingTaskRecord) => void
  onNewTaskGenerated: (task: AiWritingTaskRecord) => void
}) {
  const [selectedType, setSelectedType] = useState<WritingTask['type']>('Email')
  const [generating, setGenerating] = useState(false)
  const [genError, setGenError] = useState<string | null>(null)
  const [lastGenerated, setLastGenerated] = useState<AiWritingTaskRecord | null>(
    null,
  )

  async function handleGenerate() {
    setGenerating(true)
    setGenError(null)
    setLastGenerated(null)
    try {
      const res = await fetch('/api/generate-writing-task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskType: selectedType }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Generation failed.')
      const task = data as AiWritingTaskRecord
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
        <div className="mb-1 flex items-center gap-2">
          <Wand2 className="size-4 text-primary" />
          <h3 className="font-display font-semibold text-foreground">
            Generate a unique task
          </h3>
        </div>
        <p className="mb-5 text-sm text-muted-foreground">
          The AI writes a completely original CELPIP writing task. Once
          generated, it is automatically shared with all students so everyone
          can practise with it.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <label htmlFor="writing-type-select" className="sr-only">
              Task type
            </label>
            <select
              id="writing-type-select"
              value={selectedType}
              onChange={(e) =>
                setSelectedType(e.target.value as WritingTask['type'])
              }
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {AI_TASK_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <Button
            onClick={handleGenerate}
            disabled={generating}
            className="shrink-0 gap-2"
          >
            {generating ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Wand2 className="size-4" />
            )}
            {generating ? 'Generating…' : 'Generate task'}
          </Button>
        </div>

        {genError && (
          <p className="mt-3 rounded-xl bg-destructive/10 px-4 py-2 text-sm text-destructive">
            {genError}
          </p>
        )}

        {lastGenerated && (
          <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <span
              className={cn(
                'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
                typeStyles[lastGenerated.type] ??
                  'bg-muted text-muted-foreground border-border',
              )}
            >
              {lastGenerated.type}
            </span>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
              {lastGenerated.prompt}
            </p>
            <Button
              size="sm"
              className="mt-3 gap-1.5"
              onClick={() => onTaskSelect(lastGenerated)}
            >
              <Sparkles className="size-3.5" /> Practise this task
            </Button>
          </div>
        )}
      </div>

      {/* Community pool */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <Users className="size-4 text-muted-foreground" />
          <h3 className="font-display font-semibold text-foreground">
            Community tasks
          </h3>
          <span className="text-xs text-muted-foreground">
            ({communityTasks.length} available)
          </span>
        </div>

        {communityTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-12 text-center">
            <Wand2 className="mb-3 size-8 text-muted-foreground/40" />
            <p className="font-medium text-foreground">No community tasks yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Generate the first one above — it will appear here for all
              students.
            </p>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {communityTasks.map((task) => (
              <button
                key={task.id}
                onClick={() => onTaskSelect(task)}
                className="group flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-4 text-left transition-all hover:border-primary/40 hover:shadow-sm"
              >
                <span
                  className={cn(
                    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
                    typeStyles[task.type] ??
                      'bg-muted text-muted-foreground border-border',
                  )}
                >
                  {task.type}
                </span>
                <p className="line-clamp-3 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                  {task.prompt}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-1 text-xs text-muted-foreground">
                  <Clock className="size-3" />
                  {task.timeMinutes} min · {task.minWords}–{task.maxWords} words
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Main page ───────────────────────────────────────────────────────────────

export default function WritingPage() {
  const [activeTab, setActiveTab] = useState<Tab>('curated')
  const [curatedId, setCuratedId] = useState(writingTasks[0].id)
  const [selectedAiTask, setSelectedAiTask] =
    useState<AiWritingTaskRecord | null>(null)
  const [communityTasks, setCommunityTasks] = useState<AiWritingTaskRecord[]>([])
  const [loadingCommunity, setLoadingCommunity] = useState(false)

  const curatedTask = useMemo(
    () => writingTasks.find((t) => t.id === curatedId) ?? writingTasks[0],
    [curatedId],
  )

  const loadCommunity = useCallback(async () => {
    setLoadingCommunity(true)
    try {
      const tasks = await getAiWritingTasks()
      setCommunityTasks(tasks)
    } catch {
      // non-fatal
    } finally {
      setLoadingCommunity(false)
    }
  }, [])

  useEffect(() => {
    if (activeTab === 'ai') loadCommunity()
  }, [activeTab, loadCommunity])

  function handleNewTaskGenerated(task: AiWritingTaskRecord) {
    setCommunityTasks((prev) => [task, ...prev])
    setSelectedAiTask(task)
  }

  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: 'curated', label: 'Practice Bank', count: writingTasks.length },
    { id: 'ai', label: 'AI Generated' },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-8">
      <PageHeader
        title="Writing practice"
        description={`Both CELPIP writing tasks — ${writingTasks.length} curated prompts. Write your response, get instant examiner-grade feedback, or generate unlimited new tasks with AI.`}
      />

      {/* Tab bar */}
      <div className="mt-8 flex gap-1 rounded-2xl border border-border bg-muted/30 p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id)
              setSelectedAiTask(null)
            }}
            className={cn(
              'flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-all',
              activeTab === tab.id
                ? 'border border-border bg-card text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {tab.id === 'ai' && <Wand2 className="size-3.5" />}
            {tab.label}
            {tab.count !== undefined && (
              <span
                className={cn(
                  'rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none',
                  activeTab === tab.id
                    ? 'bg-primary/10 text-primary'
                    : 'bg-muted text-muted-foreground',
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Practice Bank tab */}
      {activeTab === 'curated' && (
        <div className="mt-6">
          <div className="flex flex-wrap gap-2 pb-1">
            {writingTasks.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setCuratedId(t.id)}
                className={cn(
                  'rounded-full border px-3 py-1 text-xs font-medium transition-all',
                  curatedId === t.id
                    ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                    : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground',
                )}
              >
                #{i + 1} · {t.type}
              </button>
            ))}
          </div>

          <div className="mt-4">
            <WritingWorkspace task={curatedTask} />
          </div>
        </div>
      )}

      {/* AI Generated tab */}
      {activeTab === 'ai' && (
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
          <div>
            {selectedAiTask ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold text-foreground">
                    Practising AI task
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedAiTask(null)}
                    className="gap-1.5 text-muted-foreground"
                  >
                    <RefreshCcw className="size-3.5" /> Change task
                  </Button>
                </div>
                <WritingWorkspace task={selectedAiTask} />
              </div>
            ) : (
              <div className="flex min-h-60 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
                <Wand2 className="mb-3 size-10 text-muted-foreground/40" />
                <p className="font-medium text-foreground">No task selected</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Generate a new task or pick one from the community pool.
                </p>
              </div>
            )}
          </div>

          <div>
            {loadingCommunity ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="size-6 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <AiWritingPanel
                communityTasks={communityTasks}
                onTaskSelect={(t) => setSelectedAiTask(t)}
                onNewTaskGenerated={handleNewTaskGenerated}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
