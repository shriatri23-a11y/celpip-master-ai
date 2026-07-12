import type { ReadingDiagram } from '@/lib/reading-diagram'
import type { ReadingStep } from '@/lib/mock-test/types'

/** CELPIP reading is split into four parts ("modules"). */
export type ReadingPart = 1 | 2 | 3 | 4

export type ReadingDifficulty = 'easy' | 'medium' | 'hard'

/** A single auto-scored reading question with an explanation shown on review. */
export type ReadingPracticeQuestion = {
  prompt: string
  options: string[]
  /** Index of the correct option within `options`. */
  correctIndex: number
  explanation: string
}

/**
 * A self-contained reading practice test. Static tests are authored in the
 * `part*.ts` files; AI-generated tests share the same shape (persisted as JSON)
 * so both flow through the same frame-accurate runner.
 */
export type ReadingPracticeTest = {
  id: string
  part: ReadingPart
  /** e.g. "Reading Correspondence". */
  partLabel: string
  /** Short passage title, e.g. "A Message from an Old Colleague". */
  title: string
  /** Optional one-line topic used for AI generation context. */
  topic?: string
  difficulty: ReadingDifficulty
  /** Instruction shown beside the info badge on the passage panel. */
  instruction: string
  timeMinutes: number
  /** Passage paragraphs rendered on the left panel. */
  passage: string[]
  /** Optional comparison diagram (CELPIP Part 2). */
  diagram?: ReadingDiagram
  questions: ReadingPracticeQuestion[]
  /** Where the test came from. */
  source: 'static' | 'ai'
  /** Display name of the student who generated an AI test. */
  authorName?: string
}

export const PART_META: Record<
  ReadingPart,
  { label: string; blurb: string; defaultMinutes: number }
> = {
  1: {
    label: 'Reading Correspondence',
    blurb:
      'Read a personal or professional message, then complete a related reply by choosing the best word or phrase for each blank.',
    defaultMinutes: 11,
  },
  2: {
    label: 'Reading to Apply a Diagram',
    blurb:
      'Study a diagram or table alongside a short message and answer questions that require applying the information.',
    defaultMinutes: 9,
  },
  3: {
    label: 'Reading for Information',
    blurb:
      'Read an informational passage organised in paragraphs and match statements to the correct section.',
    defaultMinutes: 10,
  },
  4: {
    label: 'Reading for Viewpoints',
    blurb:
      'Read an article and a reader response, then identify opinions, tone, and the best way to complete each statement.',
    defaultMinutes: 13,
  },
}

/**
 * Convert a practice test into the `ReadingStep` shape used by the shared
 * mock-test `ReadingContent` renderer so practice reuses the exact CELPIP UI.
 */
export function toReadingStep(test: ReadingPracticeTest): ReadingStep {
  return {
    kind: 'reading',
    id: test.id,
    headerTitle: `Reading Part ${test.part}: ${test.partLabel}`,
    instruction: test.instruction,
    passage: test.passage,
    diagram: test.diagram,
    questions: test.questions.map((q, i) => ({
      id: `q${i}`,
      prompt: q.prompt,
      options: q.options.map((text, oi) => ({ id: `o${oi}`, text })),
      correctOptionId: `o${q.correctIndex}`,
    })),
  }
}
