import { listeningPracticeTest1 } from "./test-1"
import { listeningPracticeTest2 } from "./test-2"
import { listeningPracticeTest3 } from "./test-3"
import { listeningPracticeTest4 } from "./test-4"
import { listeningPracticeTest5 } from "./test-5"
import { listeningPracticeTest6 } from "./test-6"
import { listeningPracticeTest7 } from "./test-7"
import { listeningPracticeTest8 } from "./test-8"
import { listeningPracticeTest9 } from "./test-9"
import { listeningPracticeTest10 } from "./test-10"
import { questionCount, type ListeningPracticeTest } from "./types"

export { toListeningSteps, flattenQuestions, questionCount } from "./types"
export type {
  ListeningPracticeTest,
  ListeningPart,
  ListeningQuestion,
  FlatQuestion,
} from "./types"

/** All authored full-length listening practice tests (hardest tier). */
export const listeningPracticeTests: ListeningPracticeTest[] = [
  listeningPracticeTest1,
  listeningPracticeTest2,
  listeningPracticeTest3,
  listeningPracticeTest4,
  listeningPracticeTest5,
  listeningPracticeTest6,
  listeningPracticeTest7,
  listeningPracticeTest8,
  listeningPracticeTest9,
  listeningPracticeTest10,
]

export function findListeningTest(id: string): ListeningPracticeTest | undefined {
  return listeningPracticeTests.find((t) => t.id === id)
}

/** Lightweight, client-serializable summary used by the hub list cards. */
export type ListeningTestSummary = {
  id: string
  title: string
  topic?: string
  difficulty: ListeningPracticeTest["difficulty"]
  timeMinutes: number
  partCount: number
  questionCount: number
}

export function toListeningSummary(t: ListeningPracticeTest): ListeningTestSummary {
  return {
    id: t.id,
    title: t.title,
    topic: t.topic,
    difficulty: t.difficulty,
    timeMinutes: t.timeMinutes,
    partCount: t.parts.length,
    questionCount: questionCount(t),
  }
}

export function listeningSummaries(): ListeningTestSummary[] {
  return listeningPracticeTests.map(toListeningSummary)
}
