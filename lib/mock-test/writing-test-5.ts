import type { MockTest, TestStep } from "./types"

const HEADER_BASE = "Advanced Mock Exam 5 - Writing"

const steps: TestStep[] = [
  {
    id: "writing5-intro",
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
    id: "writing5-t1-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Task 1: Writing an Email`,
    sectionTitle: "Writing an Email",
    bullets: [
      "You will have about 27 minutes to complete this task.",
      "Write 150 to 200 words.",
      "Read the situation carefully. To score in the top bands, manage the competing demands of gratitude and firmness that the situation requires.",
    ],
  },
  {
    id: "writing5-t1",
    kind: "writing",
    headerTitle: `${HEADER_BASE} Task 1: Writing an Email`,
    instruction: "Read the situation and write your email.",
    taskType: "Email",
    prompt:
      "For the past year you have volunteered as a coordinator for a well-run community organization you genuinely care about. Recently the organization asked all coordinators to take on a large amount of additional administrative work, unpaid, with only a few days' notice and no discussion. You cannot sustain this alongside your job, but you do not want to quit or seem ungrateful for an organization you believe in.\n\nWrite an email to the volunteer director. In your email:",
    requirements: [
      "Express your genuine commitment to the organization and its mission.",
      "Explain clearly why the new workload, imposed with little notice, is not sustainable for you.",
      "Propose a specific, workable alternative and state what you need in order to continue.",
    ],
    minWords: 150,
    maxWords: 200,
    answerSeconds: 27 * 60,
  },

  // ---- Task 2: Responding to Survey Questions ----
  {
    id: "writing5-t2-intro",
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
    id: "writing5-t2",
    kind: "writing",
    headerTitle: `${HEADER_BASE} Task 2: Responding to Survey Questions`,
    instruction: "Read the survey and write your response.",
    taskType: "Survey",
    prompt:
      "Your employer is revising its remote-work policy and is surveying staff. The company will adopt ONE model for everyone:\n\nOption A: A fixed hybrid schedule in which all employees work in the office three set days each week and remotely for the other two.\nOption B: A fully flexible model in which employees may work from anywhere, with no required office days, coordinating in person only when a project needs it.\n\nChoose the option you prefer and explain your choice. Consider factors such as collaboration, fairness, productivity, and the needs of different kinds of workers.",
    requirements: [
      "State clearly which option you prefer and why.",
      "Support your choice with specific reasoning about collaboration, fairness, and productivity.",
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

export const writingTest5: MockTest = {
  id: "writing-5",
  title: "CELPIP Writing — Advanced Practice Test 5",
  section: "writing",
  description:
    "A high-difficulty CELPIP-style Writing test with both tasks. The prompts demand balancing competing considerations, precise tone, and argumentation to reach the top bands. Scored by AI on the official criteria.",
  durationLabel: "53 min",
  questionCount: 2,
  steps,
}
