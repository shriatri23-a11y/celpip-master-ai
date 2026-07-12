import type { MockTest, TestStep } from "./types"

const HEADER_BASE = "Advanced Mock Exam 4 - Writing"

const steps: TestStep[] = [
  {
    id: "writing4-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} - CELPIP Test`,
    sectionTitle: "Writing Test Instructions",
    bullets: [
      "This is an advanced simulation. The prompts are deliberately complex: each task involves competing considerations, a specific audience, and constraints you must balance to score well.",
      "To reach the top bands you must go beyond addressing the bullet points — you need a clear stance, precise vocabulary, appropriate register, and cohesive argumentation.",
      "The Writing Test has two tasks and takes about 53 minutes. Task 1 is Writing an Email. Task 2 is Responding to Survey Questions.",
      "Your responses are scored by AI using the official CELPIP criteria: Content/Coherence, Vocabulary, Readability, and Task Fulfillment.",
    ],
  },

  // ---- Task 1: Writing an Email ----
  {
    id: "writing4-t1-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Task 1: Writing an Email`,
    sectionTitle: "Writing an Email",
    bullets: [
      "You will have about 27 minutes to complete this task.",
      "Write 150 to 200 words.",
      "Read the situation carefully. To score in the top bands, manage the competing demands of firmness and diplomacy that the situation requires.",
    ],
  },
  {
    id: "writing4-t1",
    kind: "writing",
    headerTitle: `${HEADER_BASE} Task 1: Writing an Email`,
    instruction: "Read the situation and write your email.",
    taskType: "Email",
    prompt:
      "Eight months ago you signed a two-year contract with a company to install and maintain solar panels on your home. The installation was excellent, but the promised quarterly maintenance visits have not happened, and your system's output has dropped noticeably. When you called, a representative was dismissive and implied the drop was 'normal.' You value the relationship and do not want to cancel, but you need the problem resolved and the poor service acknowledged.\n\nWrite an email to the company's customer relations manager. In your email:",
    requirements: [
      "Explain the specific problem, including the missed maintenance visits and the drop in output.",
      "Convey your dissatisfaction with how the representative handled your call, without being aggressive.",
      "State clearly what you want the company to do, and what you expect if it is not resolved.",
    ],
    minWords: 150,
    maxWords: 200,
    answerSeconds: 27 * 60,
  },

  // ---- Task 2: Responding to Survey Questions ----
  {
    id: "writing4-t2-intro",
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
    id: "writing4-t2",
    kind: "writing",
    headerTitle: `${HEADER_BASE} Task 2: Responding to Survey Questions`,
    instruction: "Read the survey and write your response.",
    taskType: "Survey",
    prompt:
      "Your city has received a one-time grant that must be spent on ONE of two projects. It cannot be divided between them, and residents are being surveyed:\n\nOption A: Build a modern central library with study spaces, technology labs, and community programming.\nOption B: Convert three underused lots across different neighbourhoods into small parks with playgrounds and gardens.\n\nChoose the option you prefer and explain your choice. Consider factors such as who benefits, long-term value, and how the money is distributed across the city.",
    requirements: [
      "State clearly which option you prefer and why.",
      "Support your choice with specific reasoning about benefit, cost, and fairness across neighbourhoods.",
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

export const writingTest4: MockTest = {
  id: "writing-4",
  title: "CELPIP Writing — Advanced Practice Test 4",
  section: "writing",
  description:
    "A high-difficulty CELPIP-style Writing test with both tasks. The prompts demand balancing competing considerations, precise tone, and argumentation to reach the top bands. Scored by AI on the official criteria.",
  durationLabel: "53 min",
  questionCount: 2,
  steps,
}
