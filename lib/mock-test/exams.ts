import type { MockTest } from "./types"
import { listeningTest } from "./listening-test"
import { readingTest } from "./reading-test"
import { writingTest } from "./writing-test"
import { speakingTest } from "./speaking-test"
import { listeningTest2 } from "./listening-test-2"
import { readingTest2 } from "./reading-test-2"
import { writingTest2 } from "./writing-test-2"
import { speakingTest2 } from "./speaking-test-2"
import { listeningTest3 } from "./listening-test-3"
import { readingTest3 } from "./reading-test-3"
import { writingTest3 } from "./writing-test-3"
import { speakingTest3 } from "./speaking-test-3"

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
    title: "Mock Test 1",
    description:
      "A complete CELPIP-style practice exam. Take the four sections in any order you like.",
    sections: {
      listening: listeningTest,
      reading: readingTest,
      writing: writingTest,
      speaking: speakingTest,
    },
  },
  {
    id: "mock-2",
    title: "Mock Test 2",
    description:
      "A second full CELPIP-style practice exam with all-new passages, audio, and prompts. Take the four sections in any order.",
    sections: {
      listening: listeningTest2,
      reading: readingTest2,
      writing: writingTest2,
      speaking: speakingTest2,
    },
  },
  {
    id: "mock-3",
    title: "Mock Test 3",
    description:
      "A third full CELPIP-style practice exam with fresh content across every section. Take the four sections in any order.",
    sections: {
      listening: listeningTest3,
      reading: readingTest3,
      writing: writingTest3,
      speaking: speakingTest3,
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
