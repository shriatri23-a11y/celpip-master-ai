import type { MockTest, TestStep } from "./types"

const HEADER_BASE = "Mock Test - Writing"

const steps: TestStep[] = [
  {
    id: "writing-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} - CELPIP Test`,
    sectionTitle: "Writing Test Instructions",
    bullets: [
      "On the official test, once you leave a page, you cannot go back to it. However, in this practice test, you can.",
      "The Writing Test has two tasks and takes about 53 minutes.",
      "Task 1 is Writing an Email. Task 2 is Responding to Survey Questions.",
      "Your responses are scored by AI using the official CELPIP criteria: Content/Coherence, Vocabulary, Readability, and Task Fulfillment.",
    ],
  },

  // ---- Task 1: Writing an Email ----
  {
    id: "writing-t1-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Task 1: Writing an Email`,
    sectionTitle: "Writing an Email",
    bullets: [
      "You will have about 27 minutes to complete this task.",
      "Write 150 to 200 words.",
      "Read the situation carefully and address every point.",
    ],
  },
  {
    id: "writing-t1",
    kind: "writing",
    headerTitle: `${HEADER_BASE} Task 1: Writing an Email`,
    instruction: "Read the situation and write your email.",
    taskType: "Email",
    prompt:
      "The apartment building where you live recently replaced its old laundry machines with a new card-only payment system. Many residents, including you, have found the new system inconvenient and unreliable.\n\nWrite an email to the building manager, Ms. Delgado. In your email:",
    requirements: [
      "Explain the problems you have experienced with the new system.",
      "Describe how these problems have affected you and other residents.",
      "Suggest one or two changes that would improve the situation.",
    ],
    minWords: 150,
    maxWords: 200,
    answerSeconds: 27 * 60,
  },

  // ---- Task 2: Responding to Survey Questions ----
  {
    id: "writing-t2-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Task 2: Responding to Survey Questions`,
    sectionTitle: "Responding to Survey Questions",
    bullets: [
      "You will have about 26 minutes to complete this task.",
      "Write 150 to 200 words.",
      "Choose one option and explain the reasons for your choice.",
    ],
  },
  {
    id: "writing-t2",
    kind: "writing",
    headerTitle: `${HEADER_BASE} Task 2: Responding to Survey Questions`,
    instruction: "Read the survey and write your response.",
    taskType: "Survey",
    prompt:
      "Your city council is deciding how to use a vacant downtown lot. They have sent residents a survey with two options:\n\nOption A: Build a public park with green space and seating.\nOption B: Build a covered parking structure for shoppers and commuters.\n\nChoose the option you prefer and explain your choice. Give reasons to support your opinion.",
    requirements: [
      "State clearly which option you prefer.",
      "Give specific reasons and examples for your choice.",
      "Explain why the other option is less suitable.",
    ],
    minWords: 150,
    maxWords: 200,
    answerSeconds: 26 * 60,
  },

  {
    id: "result",
    kind: "result",
    headerTitle: `${HEADER_BASE} Results`,
  },
]

export const writingTest: MockTest = {
  id: "writing-1",
  title: "CELPIP Writing — Full Practice Test 1",
  section: "writing",
  description:
    "A complete CELPIP-style Writing test with both tasks: Writing an Email and Responding to Survey Questions. Scored by AI on the official criteria.",
  durationLabel: "53 min",
  questionCount: 2,
  steps,
}
