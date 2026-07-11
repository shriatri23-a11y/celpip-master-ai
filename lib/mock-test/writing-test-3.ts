import type { MockTest, TestStep } from "./types"

const HEADER_BASE = "Mock Test 3 - Writing"

const steps: TestStep[] = [
  {
    id: "writing3-intro",
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
    id: "writing3-t1-intro",
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
    id: "writing3-t1",
    kind: "writing",
    headerTitle: `${HEADER_BASE} Task 1: Writing an Email`,
    instruction: "Read the situation and write your email.",
    taskType: "Email",
    prompt:
      "You recently stayed at a hotel for a short holiday. While most of your stay was pleasant, a few things disappointed you, and you also want to praise one member of staff who was especially helpful.\n\nWrite an email to the hotel manager. In your email:",
    requirements: [
      "Describe what you were disappointed with during your stay.",
      "Praise the staff member who helped you and explain what they did.",
      "Suggest what the hotel could do to improve for future guests.",
    ],
    minWords: 150,
    maxWords: 200,
    answerSeconds: 27 * 60,
  },

  // ---- Task 2: Responding to Survey Questions ----
  {
    id: "writing3-t2-intro",
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
    id: "writing3-t2",
    kind: "writing",
    headerTitle: `${HEADER_BASE} Task 2: Responding to Survey Questions`,
    instruction: "Read the survey and write your response.",
    taskType: "Survey",
    prompt:
      "Your local university is surveying the public about a new building on campus. They have proposed two options:\n\nOption A: A large student residence to house more students on campus.\nOption B: A public performing-arts theatre open to the whole community.\n\nChoose the option you prefer and explain your choice. Give reasons to support your opinion.",
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

export const writingTest3: MockTest = {
  id: "writing-3",
  title: "CELPIP Writing — Full Practice Test 3",
  section: "writing",
  description:
    "A third complete CELPIP-style Writing test with both tasks: Writing an Email and Responding to Survey Questions. Scored by AI on the official criteria.",
  durationLabel: "53 min",
  questionCount: 2,
  steps,
}
