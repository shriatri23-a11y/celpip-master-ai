import { part1Tests } from './part1-correspondence'
import { part2Tests } from './part2-diagram'
import { part3Tests } from './part3-information'
import { part4Tests } from './part4-viewpoints'
import { PART_META, type ReadingPart, type ReadingPracticeTest } from './types'

export { PART_META, toReadingStep } from './types'
export type {
  ReadingPart,
  ReadingPracticeTest,
  ReadingPracticeQuestion,
  ReadingDifficulty,
} from './types'

/** All statically authored reading practice tests, normalised with source. */
export const staticReadingTests: ReadingPracticeTest[] = [
  ...part1Tests,
  ...part2Tests,
  ...part3Tests,
  ...part4Tests,
].map((t) => ({ ...t, source: 'static' as const }))

export const READING_PARTS: ReadingPart[] = [1, 2, 3, 4]

export function staticTestsForPart(part: ReadingPart): ReadingPracticeTest[] {
  return staticReadingTests.filter((t) => t.part === part)
}

export function findStaticTest(id: string): ReadingPracticeTest | undefined {
  return staticReadingTests.find((t) => t.id === id)
}

export function partMeta(part: ReadingPart) {
  return PART_META[part]
}

/** Count of static tests per part, for hub summary cards. */
export function staticCountByPart(): Record<ReadingPart, number> {
  return {
    1: staticTestsForPart(1).length,
    2: staticTestsForPart(2).length,
    3: staticTestsForPart(3).length,
    4: staticTestsForPart(4).length,
  }
}

/** Lightweight, client-serializable summary used by the hub list cards. */
export type ReadingTestSummary = {
  id: string
  part: ReadingPart
  partLabel: string
  title: string
  topic?: string
  difficulty: ReadingPracticeTest['difficulty']
  timeMinutes: number
  questionCount: number
  source: 'static' | 'ai'
  authorName?: string
  attempts?: number
}

export function toSummary(t: ReadingPracticeTest): ReadingTestSummary {
  return {
    id: t.id,
    part: t.part,
    partLabel: t.partLabel,
    title: t.title,
    topic: t.topic,
    difficulty: t.difficulty,
    timeMinutes: t.timeMinutes,
    questionCount: t.questions.length,
    source: t.source ?? 'static',
    authorName: t.authorName,
    attempts: t.attempts,
  }
}
