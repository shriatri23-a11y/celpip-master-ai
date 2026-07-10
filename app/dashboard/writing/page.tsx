'use client'

import { useMemo, useState } from 'react'
import { Loader2, Sparkles, RotateCcw, Clock } from 'lucide-react'
import { PageHeader } from '@/components/dashboard/page-header'
import { ScoreReport } from '@/components/dashboard/score-report'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { writingTasks } from '@/lib/celpip'
import type { ScoreResult } from '@/lib/scoring-schema'

export default function WritingPage() {
  const [taskId, setTaskId] = useState(writingTasks[0].id)
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ScoreResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const task = useMemo(
    () => writingTasks.find((t) => t.id === taskId) ?? writingTasks[0],
    [taskId],
  )

  const wordCount = response.trim()
    ? response.trim().split(/\s+/).length
    : 0

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

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-8">
      <PageHeader
        title="Writing practice"
        description="Choose a task, write your response, and get instant examiner-grade feedback."
      >
        <Select
          value={taskId}
          onValueChange={(v) => {
            setTaskId(v as string)
            reset()
          }}
        >
          <SelectTrigger size="default" className="h-9 w-[220px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {writingTasks.map((t) => (
              <SelectItem key={t.id} value={t.id}>
                {t.type}: {t.id.replace(/-/g, ' ')}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </PageHeader>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <p className="font-display font-semibold text-card-foreground">
                {task.title}
              </p>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
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
                className={`text-sm ${
                  wordCount >= task.minWords && wordCount <= task.maxWords
                    ? 'text-success'
                    : 'text-muted-foreground'
                }`}
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
                Write at least a few sentences, then score your response to see
                a detailed CELPIP breakdown.
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
                Evaluating content, vocabulary, readability, and task
                fulfillment.
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
    </div>
  )
}
