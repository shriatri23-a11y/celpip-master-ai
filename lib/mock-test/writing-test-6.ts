import type { MockTest, TestStep } from "./types"

const HEADER_BASE = "Advanced Mock Exam 6 - Writing"

const steps: TestStep[] = [
  {
    id: "writing6-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} - CELPIP Test`,
    sectionTitle: "Writing Test Instructions",
    bullets: [
      "This is the most demanding simulation in the set. The prompts are deliberately complex: each task involves competing considerations, a specific audience, and constraints you must balance to score well.",
      "To reach the top bands you must go beyond addressing the bullet points — you need a clear stance, precise vocabulary, appropriate register, and cohesive argumentation.",
      "The Writing Test has two tasks and takes about 53 minutes. Task 1 is Writing an Email. Task 2 is Responding to Survey Questions.",
      "Your responses are scored by AI using the official CELPIP criteria: Content/Coherence, Vocabulary, Readability, and Task Fulfillment.",
    ],
  },

  // ---- Task 1: Writing an Email ----
  {
    id: "writing6-t1-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Task 1: Writing an Email`,
    sectionTitle: "Writing an Email",
    bullets: [
      "You will have about 27 minutes to complete this task.",
      "Write 150 to 200 words.",
      "Read the situation carefully. To score in the top bands, manage the competing demands of accountability and self-advocacy that the situation requires.",
    ],
  },
  {
    id: "writing6-t1",
    kind: "writing",
    headerTitle: `${HEADER_BASE} Task 1: Writing an Email`,
    instruction: "Read the situation and write your email.",
    taskType: "Email",
    prompt:
      "You manage a small team. A project you were responsible for missed an important deadline. The delay was partly due to your own planning, but largely caused by another department that repeatedly failed to deliver information you needed on time — something you had flagged in writing weeks earlier. Your director has asked you to explain what went wrong. You want to be honest and accountable, but you must not let yourself take the entire blame for a failure that was not wholly yours.\n\nWrite an email to your director. In your email:",
    requirements: [
      "Take genuine ownership of the part of the delay that was yours.",
      "Explain clearly and factually how the other department's delays contributed, referring to your earlier warnings.",
      "Propose specific changes to prevent this from happening again.",
    ],
    minWords: 150,
    maxWords: 200,
    answerSeconds: 27 * 60,
  },

  // ---- Task 2: Responding to Survey Questions ----
  {
    id: "writing6-t2-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Task 2: Responding to Survey Questions`,
    sectionTitle: "Responding to Survey Questions",
    bullets: [
      "You will have about 26 minutes to complete this task.",
      "Write 150 to 200 words.",
      "Choose one option and defend it. Strong responses also acknowledge the trade-offs of the option they reject.",
    ],
  },
  {
    id: "writing6-t2",
    kind: "writing",
    headerTitle: `${HEADER_BASE} Task 2: Responding to Survey Questions`,
    instruction: "Read the survey and write your response.",
    taskType: "Survey",
    prompt:
      "A local university is deciding how to use a large donation and is surveying the community. It will fund ONLY ONE of the following:\n\nOption A: Substantially reduce tuition for a small number of students from low-income families, covering most of their costs.\nOption B: Modestly reduce tuition for all students by a small amount across the board.\n\nChoose the option you prefer and explain your choice. Consider factors such as who benefits most, fairness, and the long-term impact of each approach.",
    requirements: [
      "State clearly which option you prefer and why.",
      "Support your choice with specific reasoning about impact, fairness, and who benefits.",
      "Acknowledge a genuine strength of the option you did not choose, and explain why it does not change your decision.",
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

export const writingTest6: MockTest = {
  id: "writing-6",
  title: "CELPIP Writing — Advanced Practice Test 6",
  section: "writing",
  description:
    "The most demanding CELPIP-style Writing test in the set, with both tasks. The prompts require balancing accountability, fairness, and precise argumentation to reach the top bands. Scored by AI on the official criteria.",
  durationLabel: "53 min",
  questionCount: 2,
  steps,
}
