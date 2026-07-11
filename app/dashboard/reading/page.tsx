'use client'

import { useMemo, useState } from 'react'
import {
  BookOpen,
  Clock,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Sparkles,
} from 'lucide-react'
import { PageHeader } from '@/components/dashboard/page-header'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { readingTasks, readingLevelFromScore, levelDescriptor } from '@/lib/celpip'
import { saveReadingAttempt } from '@/app/actions/score-history'
import { cn } from '@/lib/utils'

export default function ReadingPage() {
  const [taskId, setTaskId] = useState(readingTasks[0].id)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  const task = useMemo(
    () => readingTasks.find((t) => t.id === taskId) ?? readingTasks[0],
    [taskId],
  )

  const total = task.questions.length
  const answeredCount = Object.keys(answers).length
  const correctCount = useMemo(
    () =>
      submitted
        ? task.questions.reduce(
            (n, q, i) => n + (answers[i] === q.correctIndex ? 1 : 0),
            0,
          )
        : 0,
    [submitted, answers, task.questions],
  )
  const level = readingLevelFromScore(correctCount, total)

  function reset() {
    setAnswers({})
    setSubmitted(false)
  }

  function selectOption(qIndex: number, oIndex: number) {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [qIndex]: oIndex }))
  }

  function handleSubmit() {
    setSubmitted(true)
    const correct = task.questions.reduce(
      (n, q, i) => n + (answers[i] === q.correctIndex ? 1 : 0),
      0,
    )
    const lvl = readingLevelFromScore(correct, total)
    // Persist the attempt so it appears in the user's history and stats.
    void saveReadingAttempt({
      taskType: `${task.type} — ${task.title}`,
      prompt: task.instruction,
      level: lvl,
      correct,
      total,
      review: {
        kind: 'reading',
        correct,
        total,
        questions: task.questions.map((q, i) => ({
          prompt: q.prompt,
          options: q.options,
          selectedIndex: answers[i] ?? -1,
          correctIndex: q.correctIndex,
          explanation: q.explanation,
        })),
      },
    }).catch(() => {})
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-8">
      <PageHeader
        title="Reading practice"
        description="Read a passage, answer the questions, and get an instant CELPIP Reading estimate with explanations."
      >
        <Select
          value={taskId}
          onValueChange={(v) => {
            setTaskId(v as string)
            reset()
          }}
        >
          <SelectTrigger size="default" className="h-9 w-[240px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {readingTasks.map((t) => (
              <SelectItem key={t.id} value={t.id}>
                {t.type}: {t.title.replace(/^Part \d+ — /, '')}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </PageHeader>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Passage */}
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
            <p className="mt-1 text-xs text-muted-foreground">{task.instruction}</p>
            <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-foreground/80">
              {task.passage.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="flex flex-col gap-4">
          {submitted && (
            <div className="rounded-2xl border border-border bg-foreground p-6 text-background">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-background/70">Estimated level</p>
                  <div className="mt-1 flex items-end gap-2">
                    <span className="font-display text-5xl font-bold leading-none">
                      {level}
                    </span>
                    <span className="pb-1 text-background/60">/ 12</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-display text-3xl font-bold">
                    {correctCount}
                    <span className="text-lg text-background/60">/{total}</span>
                  </span>
                  <p className="text-xs text-background/70">correct</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-background/80">
                {levelDescriptor(level)}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-4">
            {task.questions.map((q, qi) => {
              const selected = answers[qi]
              return (
                <fieldset
                  key={qi}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <legend className="sr-only">Question {qi + 1}</legend>
                  <p className="font-medium text-card-foreground">
                    <span className="text-muted-foreground">{qi + 1}. </span>
                    {q.prompt}
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    {q.options.map((opt, oi) => {
                      const isSelected = selected === oi
                      const isCorrect = oi === q.correctIndex
                      const showCorrect = submitted && isCorrect
                      const showWrong = submitted && isSelected && !isCorrect
                      return (
                        <button
                          key={oi}
                          type="button"
                          disabled={submitted}
                          onClick={() => selectOption(qi, oi)}
                          className={cn(
                            'flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition-colors',
                            !submitted &&
                              (isSelected
                                ? 'border-primary bg-primary/5 text-foreground'
                                : 'border-border text-foreground/80 hover:border-primary/40 hover:bg-muted'),
                            showCorrect &&
                              'border-success bg-success/10 text-foreground',
                            showWrong &&
                              'border-destructive bg-destructive/10 text-foreground',
                            submitted &&
                              !showCorrect &&
                              !showWrong &&
                              'border-border text-muted-foreground',
                          )}
                        >
                          <span
                            className={cn(
                              'flex size-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold',
                              !submitted &&
                                (isSelected
                                  ? 'border-primary bg-primary text-primary-foreground'
                                  : 'border-muted-foreground/40 text-muted-foreground'),
                              showCorrect &&
                                'border-success bg-success text-background',
                              showWrong &&
                                'border-destructive bg-destructive text-background',
                              submitted &&
                                !showCorrect &&
                                !showWrong &&
                                'border-muted-foreground/40 text-muted-foreground',
                            )}
                          >
                            {String.fromCharCode(65 + oi)}
                          </span>
                          <span className="flex-1">{opt}</span>
                          {showCorrect && (
                            <CheckCircle2 className="size-4 shrink-0 text-success" />
                          )}
                          {showWrong && (
                            <XCircle className="size-4 shrink-0 text-destructive" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                  {submitted && (
                    <p className="mt-3 rounded-lg bg-muted px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Explanation:{' '}
                      </span>
                      {q.explanation}
                    </p>
                  )}
                </fieldset>
              )
            })}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {submitted
                ? `${correctCount} of ${total} correct`
                : `${answeredCount} of ${total} answered`}
            </span>
            {submitted ? (
              <Button variant="outline" size="sm" onClick={reset}>
                <RotateCcw className="size-3.5" />
                Try again
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={handleSubmit}
                disabled={answeredCount < total}
              >
                <Sparkles className="size-3.5" />
                Check answers
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
