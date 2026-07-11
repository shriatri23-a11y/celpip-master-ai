import type { MockTest, TestStep } from "./types"

const HEADER_BASE = "Mock Test 2 - Writing"

const steps: TestStep[] = [
  {
    id: "writing2-intro",
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
    id: "writing2-t1-intro",
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
    id: "writing2-t1",
    kind: "writing",
    headerTitle: `${HEADER_BASE} Task 1: Writing an Email`,
    instruction: "Read the situation and write your email.",
    taskType: "Email",
    prompt:
      "You signed up for an online course, but after two weeks you have discovered several problems: some video lessons will not load, and the promised weekly feedback from an instructor has not arrived.\n\nWrite an email to the course provider's support team. In your email:",
    requirements: [
      "Describe the specific problems you have experienced.",
      "Explain how these problems have affected your learning.",
      "State clearly what you would like the provider to do.",
    ],
    minWords: 150,
    maxWords: 200,
    answerSeconds: 27 * 60,
  },

  // ---- Task 2: Responding to Survey Questions ----
  {
    id: "writing2-t2-intro",
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
    id: "writing2-t2",
    kind: "writing",
    headerTitle: `${HEADER_BASE} Task 2: Responding to Survey Questions`,
    instruction: "Read the survey and write your response.",
    taskType: "Survey",
    prompt:
      "Your employer is surveying staff about how to spend a limited training budget. They have offered two options:\n\nOption A: Send employees to in-person workshops in another city.\nOption B: Buy subscriptions to online courses employees can take from home.\n\nChoose the option you prefer and explain your choice. Give reasons to support your opinion.",
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

export const writingTest2: MockTest = {
  id: "writing-2",
  title: "CELPIP Writing — Full Practice Test 2",
  section: "writing",
  description:
    "A second complete CELPIP-style Writing test with both tasks: Writing an Email and Responding to Survey Questions. Scored by AI on the official criteria.",
  durationLabel: "53 min",
  questionCount: 2,
  steps,
}
