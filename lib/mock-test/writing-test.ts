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
      "Your employer introduced a mandatory hybrid-work policy requiring every employee to reserve a desk through an app before coming to the office. The app frequently confirms more reservations than there are desks, yet employees who work remotely on a scheduled office day may be marked absent. Your team has an important client deadline next month.\n\nWrite an email to the Director of Operations, Ms. Delgado. In your email:",
    requirements: [
      "Explain the conflicting policy requirements and provide specific evidence of the reservation problem.",
      "Describe the consequences for productivity, attendance records, and the upcoming client deadline.",
      "Propose a practical short-term remedy and a fair long-term policy, while anticipating one likely objection.",
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
      "Your province must reduce next year's transportation budget by ten percent while population growth is increasing demand. Residents are being asked to choose between two policies:\n\nOption A: Preserve current bus and rail frequency but postpone accessibility upgrades at older stations.\nOption B: Complete the accessibility upgrades now but reduce evening and weekend service across the network.\n\nChoose the option you prefer and explain your decision.",
    requirements: [
      "State your position and establish the principle that should guide the decision.",
      "Compare the effects on at least two different groups of residents using concrete examples.",
      "Acknowledge the strongest disadvantage of your choice and explain how it could be mitigated.",
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
