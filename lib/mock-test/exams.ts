import type { MockTest } from "./types"
import { listeningTest } from "./listening-test"
import { readingTest } from "./reading-test"
import { writingTest } from "./writing-test"
import { speakingTest } from "./speaking-test"

export type SectionKey = "listening" | "reading" | "writing" | "speaking"

export type MockExam = {
  id: string
  title: string
  description: string
  sections: Record<SectionKey, MockTest>
}

// A single full exam that contains all four sections. Additional exams can be
// added to the array; each section test is self-contained and AI/auto scored.
export const mockExams: MockExam[] = [
  {
    id: "mock-1",
    title: "Advanced Mock Exam 1",
    description:
      "A rigorous, original CELPIP-style simulation built for CLB 9–12 practice, with inference-heavy questions, plausible distractors, and demanding production tasks.",
    sections: {
      listening: listeningTest,
      reading: readingTest,
      writing: writingTest,
      speaking: speakingTest,
    },
  },
]

export function getMockExam(id: string): MockExam | undefined {
  return mockExams.find((e) => e.id === id)
}

export function getExamSection(
  examId: string,
  section: SectionKey,
): MockTest | undefined {
  return getMockExam(examId)?.sections[section]
}

export const SECTION_ORDER: SectionKey[] = [
  "listening",
  "reading",
  "writing",
  "speaking",
]
