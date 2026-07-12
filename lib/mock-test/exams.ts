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
import { listeningTest4 } from "./listening-test-4"
import { readingTest4 } from "./reading-test-4"
import { writingTest4 } from "./writing-test-4"
import { speakingTest4 } from "./speaking-test-4"
import { listeningTest5 } from "./listening-test-5"
import { readingTest5 } from "./reading-test-5"
import { writingTest5 } from "./writing-test-5"
import { speakingTest5 } from "./speaking-test-5"
import { listeningTest6 } from "./listening-test-6"
import { readingTest6 } from "./reading-test-6"
import { writingTest6 } from "./writing-test-6"
import { speakingTest6 } from "./speaking-test-6"

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
  {
    id: "mock-4",
    title: "Elite Mock Exam 4 (Very Hard)",
    description:
      "A high-difficulty CELPIP simulation pitched at CLB 11–12. Longer, denser listening audio, sophisticated academic reading passages, and multi-layered writing and speaking prompts designed so that a strong test-taker is genuinely challenged.",
    sections: {
      listening: listeningTest4,
      reading: readingTest4,
      writing: writingTest4,
      speaking: speakingTest4,
    },
  },
  {
    id: "mock-5",
    title: "Elite Mock Exam 5 (Very Hard)",
    description:
      "An advanced CELPIP simulation with fast, information-rich listening, abstract argumentative reading, and demanding production tasks. Built to stress-test comprehension, inference, and precision under time pressure.",
    sections: {
      listening: listeningTest5,
      reading: readingTest5,
      writing: writingTest5,
      speaking: speakingTest5,
    },
  },
  {
    id: "mock-6",
    title: "Elite Mock Exam 6 (Very Hard)",
    description:
      "The most rigorous exam in the set. Nuanced spoken dialogue with detail traps, complex expository reading with close distractors, and layered writing and speaking prompts requiring structured, high-register responses.",
    sections: {
      listening: listeningTest6,
      reading: readingTest6,
      writing: writingTest6,
      speaking: speakingTest6,
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
