import type { MockTest, TestStep } from "./types"
import type { ReadingDiagram } from "@/lib/reading-diagram"

/** Turn a Part 2 comparison diagram into plain text for the review AI context. */
function serializeDiagram(diagram: ReadingDiagram): string {
  const lines: string[] = [diagram.title]
  if (diagram.caption) lines.push(diagram.caption)
  for (const row of diagram.rows) {
    const cells = row.cells
      .map((c) => `${c.label ? `${c.label}: ` : ""}${c.lines.join(", ")}`)
      .join(" | ")
    lines.push(`${row.label} — ${cells}`)
  }
  return lines.join("\n")
}

export type ReviewQuestion = {
  id: string
  /** 1-based index across the whole section. */
  number: number
  prompt: string
  options: string[]
  yourAnswer: string
  correctAnswer: string
  isCorrect: boolean
  /** Passage / audio context used to power the per-question AI analysis. */
  context?: string
}

export type ReviewGroup = {
  title: string
  correct: number
  total: number
  /** The passage text for reading groups (rendered in a collapsible box). */
  passage?: string
  questions: ReviewQuestion[]
}

/** Turn a "Mock Test ... Part 1: Reading Correspondence" header into "Reading Correspondence". */
function groupTitleFromHeader(header: string): string {
  const partMatch = header.match(/Part\s+\d+:\s*(.+)$/i)
  if (partMatch) return partMatch[1].trim()
  // Fall back to text after the last dash, else the whole header.
  const dash = header.split(" - ").pop()
  return (dash ?? header).trim()
}

function textForOption(
  options: { id: string; text: string }[],
  id: string | undefined,
): string {
  if (!id) return ""
  return options.find((o) => o.id === id)?.text ?? ""
}

/**
 * Builds grouped review data for an auto-scored section (listening / reading)
 * from the test definition and the candidate's answers.
 */
export function buildReview(
  test: MockTest,
  answers: Record<string, string>,
): ReviewGroup[] {
  const groups: ReviewGroup[] = []
  let current: ReviewGroup | null = null
  let counter = 0

  const pushGroup = (title: string, passage?: string) => {
    current = { title, correct: 0, total: 0, passage, questions: [] }
    groups.push(current)
  }

  const addQuestions = (
    step: Extract<TestStep, { kind: "reading" | "mcq" | "audio-mcq" }>,
    context: string | undefined,
  ) => {
    const title = groupTitleFromHeader(step.headerTitle)
    // Start a new group when the title changes.
    if (!current || current.title !== title) pushGroup(title, context)
    else if (context && !current.passage) current.passage = context

    const questions =
      step.kind === "audio-mcq" ? [step.question] : step.questions
    for (const q of questions) {
      counter += 1
      const your = textForOption(q.options, answers[q.id])
      const correct = textForOption(q.options, q.correctOptionId)
      const isCorrect = answers[q.id] === q.correctOptionId
      current!.total += 1
      if (isCorrect) current!.correct += 1
      current!.questions.push({
        id: q.id,
        number: counter,
        prompt: q.prompt,
        options: q.options.map((o) => o.text),
        yourAnswer: your,
        correctAnswer: correct,
        isCorrect,
        context,
      })
    }
  }

  for (const step of test.steps) {
    if (step.kind === "reading") {
      const diagramText = step.diagram ? serializeDiagram(step.diagram) : ""
      const context = [diagramText, step.passage.join("\n\n")]
        .filter(Boolean)
        .join("\n\n")
      addQuestions(step, context)
    } else if (step.kind === "mcq") {
      addQuestions(step, step.passage)
    } else if (step.kind === "audio-mcq") {
      // Use the transcript-like script as context when present.
      const ctx = step.script.map((l) => l.text).join(" ")
      addQuestions(step, ctx)
    }
  }

  return groups
}

/** A single scored writing/speaking task, paired with its AI report. */
export type TaskReview = {
  id: string
  taskType: string
  prompt: string
  response: string
  report: import("@/lib/scoring-schema").ScoreResult | null
}
