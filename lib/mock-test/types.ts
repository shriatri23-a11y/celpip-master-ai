export type McqOption = {
  id: string
  text: string
}

export type McqQuestion = {
  id: string
  /** The question stem shown on the right panel (or above options). */
  prompt: string
  options: McqOption[]
  /** id of the correct option */
  correctOptionId: string
}

/**
 * Every screen in a mock test is a "step". The runner walks through the ordered
 * list of steps. Only steps that contain questions contribute to the score.
 */
export type TestStep =
  | InstructionStep
  | VideoStep
  | AudioStep
  | AudioMcqStep
  | McqStep
  | ReadingStep
  | WritingStep
  | SpeakingStep
  | ResultStep

type BaseStep = {
  id: string
  /** Text shown in the gray header bar, e.g. "Listening Part 1: Listening to Problem Solving" */
  headerTitle: string
}

/** A plain instructions screen: heading + bullet points and/or paragraph + optional image. */
export type InstructionStep = BaseStep & {
  kind: "instruction"
  /** Heading next to the info icon, e.g. "Instructions:" */
  heading?: string
  /** Bold section title above the bullets, e.g. "Listening to Problem Solving" */
  sectionTitle?: string
  paragraphs?: string[]
  bullets?: string[]
  imageSrc?: string
  imageAlt?: string
}

/** Instructional video screen (uses a poster + narrated audio via TTS). */
export type VideoStep = BaseStep & {
  kind: "video"
  heading: string
  posterSrc: string
  /** Narration spoken via TTS to emulate the instructional video audio. */
  narration: string
}

/** Audio-only screen (centered player) with an optional transcript. */
export type AudioStep = BaseStep & {
  kind: "audio"
  instruction: string
  /** Bundled production audio. The script remains available for review and TTS fallback. */
  audioSrc?: string
  script: AudioLine[]
  transcript?: string
}

/** Split layout: audio on the left, a single MCQ on the right. */
export type AudioMcqStep = BaseStep & {
  kind: "audio-mcq"
  instruction: string
  script: AudioLine[]
  question: McqQuestion
  /** Seconds allowed to answer once audio finishes (drives the header timer). */
  answerSeconds?: number
}

/** One or more MCQs shown as text (no audio) — used for reading-style items. */
export type McqStep = BaseStep & {
  kind: "mcq"
  instruction: string
  passage?: string
  questions: McqQuestion[]
}

/**
 * Reading step: a passage on the left, one or more MCQs on the right — the
 * CELPIP Reading split layout. Scored automatically against correctOptionId.
 */
export type ReadingStep = BaseStep & {
  kind: "reading"
  instruction: string
  /** Passage paragraphs (rendered on the left panel). */
  passage: string[]
  /** Optional email/correspondence blanks rendered as inline dropdowns. */
  questions: McqQuestion[]
  /** Whole-step timer in seconds (optional). */
  answerSeconds?: number
}

/**
 * Writing step: a timed prompt with a textarea. Scored by the AI writing
 * endpoint (not by correctOptionId).
 */
export type WritingStep = BaseStep & {
  kind: "writing"
  instruction: string
  /** The task type used for AI scoring, e.g. "Email" or "Survey". */
  taskType: string
  prompt: string
  /** Bulleted requirements shown under the prompt. */
  requirements?: string[]
  minWords: number
  maxWords: number
  /** Time budget in seconds for this task. */
  answerSeconds: number
}

/**
 * Speaking step: a prep countdown then a recording window. Transcribed via the
 * browser and scored by the AI speaking endpoint.
 */
export type SpeakingStep = BaseStep & {
  kind: "speaking"
  instruction: string
  taskType: string
  prompt: string
  requirements?: string[]
  prepSeconds: number
  speakSeconds: number
}

export type ResultStep = BaseStep & {
  kind: "result"
}

export type AudioLine = {
  speaker?: string
  text: string
}

export type MockTest = {
  id: string
  title: string
  section: "listening" | "reading" | "writing" | "speaking"
  description: string
  /** Approx duration label, e.g. "47–55 min" */
  durationLabel: string
  questionCount: number
  steps: TestStep[]
}
