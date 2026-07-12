import type { AudioLine, TestStep, McqQuestion } from "@/lib/mock-test/types"
import type { BlueprintCategory } from "@/lib/mock-test/listening-blueprint"

/** A single auto-scored listening question with a review explanation. */
export type ListeningQuestion = {
  prompt: string
  /** Exactly four answer choices. */
  options: [string, string, string, string]
  /** Index of the correct option within `options`. */
  correctIndex: number
  /** Shown on the review screen to explain why the key is correct. */
  explanation: string
}

/** One CELPIP listening part: a spoken passage followed by its questions. */
export type ListeningPart = {
  /** 1–6, matching the CELPIP listening task order. */
  part: number
  /** e.g. "Listening to Problem Solving". */
  partLabel: string
  /** Bold section title on the pre-audio instruction screen. */
  sectionTitle: string
  /** Bulleted instructions shown before the audio. */
  instructionBullets: string[]
  /** Optional scenario sentence shown on its own screen before the audio. */
  scenario?: string
  /** Content-blueprint classification badge shown on the audio screen. */
  blueprint?: BlueprintCategory
  /** Instruction shown above the audio player. */
  audioInstruction: string
  /** Lines spoken via TTS (one voice per distinct speaker). */
  script: AudioLine[]
  /** Concise transcript available on the review screen. */
  transcript?: string
  questions: ListeningQuestion[]
}

/** A self-contained, full-length listening practice test (all six parts). */
export type ListeningPracticeTest = {
  id: string
  title: string
  topic?: string
  /** These practice tests are authored at the hardest tier only. */
  difficulty: "hard"
  description: string
  /** Approximate completion time in minutes. */
  timeMinutes: number
  parts: ListeningPart[]
}

/** A flattened, scorable question with its global id and review metadata. */
export type FlatQuestion = {
  id: string
  correctOptionId: string
  prompt: string
  options: string[]
  correctIndex: number
  explanation: string
  partLabel: string
}

function qId(partIndex: number, questionIndex: number) {
  return `p${partIndex + 1}q${questionIndex + 1}`
}

function toMcqQuestion(
  q: ListeningQuestion,
  partIndex: number,
  questionIndex: number,
): McqQuestion {
  const id = qId(partIndex, questionIndex)
  return {
    id,
    prompt: q.prompt,
    correctOptionId: `${id}-o${q.correctIndex}`,
    options: q.options.map((text, oi) => ({ id: `${id}-o${oi}`, text })),
  }
}

/** Total number of scored questions across all parts. */
export function questionCount(test: ListeningPracticeTest): number {
  return test.parts.reduce((n, p) => n + p.questions.length, 0)
}

/**
 * Flatten every question with the ids the runner uses, so scoring and the
 * review screen can look up the correct answer and explanation directly.
 */
export function flattenQuestions(test: ListeningPracticeTest): FlatQuestion[] {
  const flat: FlatQuestion[] = []
  test.parts.forEach((part, pi) => {
    part.questions.forEach((q, qi) => {
      const id = qId(pi, qi)
      flat.push({
        id,
        correctOptionId: `${id}-o${q.correctIndex}`,
        prompt: q.prompt,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        partLabel: part.partLabel,
      })
    })
  })
  return flat
}

/**
 * Convert a listening practice test into the ordered `TestStep[]` the shared
 * mock-test renderer walks through: a global intro, then for each part an
 * instruction screen, an (optional) scenario screen, the spoken passage, and
 * the part's questions shown together as CELPIP-style MCQs.
 */
export function toListeningSteps(test: ListeningPracticeTest): TestStep[] {
  const steps: TestStep[] = [
    {
      id: "intro",
      kind: "instruction",
      headerTitle: `${test.title} — Listening`,
      sectionTitle: "Listening Test Instructions",
      bullets: [
        "There are six parts in this listening test. Each passage is played once.",
        "Listen carefully — you cannot replay the audio. Take notes if it helps.",
        "After each passage, answer every question by choosing the single best option.",
        "This is an advanced (hardest-tier) practice test built for CLB 11–12 preparation.",
      ],
    },
  ]

  test.parts.forEach((part, pi) => {
    const header = `${test.title} — Listening Part ${part.part}: ${part.partLabel}`

    steps.push({
      id: `p${part.part}-instr`,
      kind: "instruction",
      headerTitle: header,
      sectionTitle: part.sectionTitle,
      bullets: part.instructionBullets,
    })

    if (part.scenario) {
      steps.push({
        id: `p${part.part}-scenario`,
        kind: "instruction",
        headerTitle: header,
        heading: "Instructions:",
        paragraphs: [part.scenario],
      })
    }

    steps.push({
      id: `p${part.part}-audio`,
      kind: "audio",
      headerTitle: header,
      instruction: part.audioInstruction,
      blueprint: part.blueprint,
      script: part.script,
      transcript: part.transcript,
    })

    steps.push({
      id: `p${part.part}-questions`,
      kind: "mcq",
      headerTitle: header,
      instruction: "Choose the best answer to each question.",
      questions: part.questions.map((q, qi) => toMcqQuestion(q, pi, qi)),
    })
  })

  steps.push({
    id: "result",
    kind: "result",
    headerTitle: `${test.title} — Results`,
  })

  return steps
}
