import type { MockTest, TestStep, SpeakingStep } from "./types"

const HEADER_BASE = "Mock Test - Speaking"

function speaking(
  id: string,
  header: string,
  taskType: string,
  prompt: string,
  requirements: string[],
  prepSeconds: number,
  speakSeconds: number,
  imageSrc?: string,
  imageAlt?: string,
): SpeakingStep {
  return {
    id,
    kind: "speaking",
    headerTitle: header,
    instruction: "Read the task, then prepare and record your response.",
    taskType,
    prompt,
    requirements,
    imageSrc,
    imageAlt,
    prepSeconds,
    speakSeconds,
  }
}

const steps: TestStep[] = [
  {
    id: "speaking-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} - CELPIP Test`,
    sectionTitle: "Speaking Test Instructions",
    bullets: [
      "On the official test, once you leave a page, you cannot go back to it. However, in this practice test, you can.",
      "The Speaking Test has eight tasks and takes about 15 to 20 minutes.",
      "Each task gives you preparation time, then a recording window. Recording begins automatically when preparation ends.",
      "Your responses are transcribed and scored by AI on the official criteria: Content/Coherence, Vocabulary, Listenability, and Task Fulfillment.",
    ],
  },

  speaking(
    "speaking-t1",
    `${HEADER_BASE} Task 1: Giving Advice`,
    "Giving Advice",
    "A friend has accepted a probationary job in your city but cannot afford a central apartment. They are considering signing a year-long lease in a distant suburb before visiting it. Advise them how to balance cost, commute reliability, lease risk, and the uncertainty of probation.",
    [
      "Suggest practical ways to search for housing.",
      "Explain what your friend should check before signing.",
      "Speak for the full recording time.",
    ],
    30,
    90,
  ),

  speaking(
    "speaking-t2",
    `${HEADER_BASE} Task 2: Talking about a Personal Experience`,
    "Personal Experience",
    "Talk about a time when you learned a new skill that turned out to be more difficult than you expected. Describe the skill, why you wanted to learn it, and how you dealt with the challenge.",
    [
      "Describe the skill and why you chose it.",
      "Explain the difficulty and how you responded.",
      "Give enough detail to fill the time.",
    ],
    30,
    60,
  ),

  speaking(
    "speaking-t3",
    `${HEADER_BASE} Task 3: Describing a Scene`,
    "Describing a Scene",
    "Look at the image carefully. Describe this scene in as much detail as you can to someone who cannot see it.",
    [
      "Describe where people and objects are located.",
      "Include details about actions and atmosphere.",
      "Organize your description clearly.",
    ],
    30,
    60,
    "/speaking/scene-farmers-market.png",
    "A busy outdoor farmers market on a Saturday morning with vendors, a musician, families, and a coffee stand.",
  ),

  speaking(
    "speaking-t4",
    `${HEADER_BASE} Task 4: Making Predictions`,
    "Making Predictions",
    "Look at the image again. Predict what might happen next at the coffee stand where a long line has formed. Explain what you think will happen and why.",
    [
      "Make clear predictions about what will happen.",
      "Give reasons based on the situation.",
      "Use appropriate future-tense language.",
    ],
    30,
    60,
    "/speaking/scene-farmers-market.png",
    "A busy outdoor farmers market on a Saturday morning with vendors, a musician, families, and a coffee stand.",
  ),

  speaking(
    "speaking-t5",
    `${HEADER_BASE} Task 5: Comparing and Persuading`,
    "Comparing and Persuading",
    "Your condominium board can fund either a comprehensive building energy retrofit with higher short-term fees, or cosmetic lobby and landscaping improvements that may increase resale appeal immediately. Choose one option and persuade a neighbour who strongly prefers the other.",
    [
      "State which option you prefer.",
      "Compare it with the other option.",
      "Persuade the listener with strong reasons.",
    ],
    60,
    60,
  ),

  speaking(
    "speaking-t6",
    `${HEADER_BASE} Task 6: Dealing with a Difficult Situation`,
    "Difficult Situation",
    "You supervise a small team. A highly reliable employee privately disclosed a medical appointment and requested tomorrow morning off. Your manager has now ordered everyone to attend an urgent client rehearsal at that time and asked you to identify anyone who refuses. Leave your employee a message explaining what you will do without revealing confidential information or jeopardizing the client meeting.",
    [
      "Explain the situation clearly.",
      "State your decision and the reason for it.",
      "Use a polite, appropriate tone.",
    ],
    60,
    60,
  ),

  speaking(
    "speaking-t7",
    `${HEADER_BASE} Task 7: Expressing Opinions`,
    "Expressing Opinions",
    "Municipalities facing budget deficits should charge user fees for services that are currently free, such as public libraries, recreation centres, and community festivals. Do you agree or disagree? Address both fairness and service quality in your response.",
    [
      "State your opinion clearly.",
      "Support it with specific reasons and examples.",
      "Maintain a clear, logical structure.",
    ],
    30,
    90,
  ),

  speaking(
    "speaking-t8",
    `${HEADER_BASE} Task 8: Describing an Unusual Situation`,
    "Unusual Situation",
    "You ordered a standard blue bicycle online, but the one that arrived is bright orange, has three wheels instead of two, and came with a basket you did not order. Call the store and describe exactly what you received and what you expected.",
    [
      "Describe what you received in detail.",
      "Explain how it differs from what you ordered.",
      "Clearly state what you want the store to do.",
    ],
    30,
    60,
  ),

  {
    id: "result",
    kind: "result",
    headerTitle: `${HEADER_BASE} Results`,
  },
]

export const speakingTest: MockTest = {
  id: "speaking-1",
  title: "CELPIP Speaking — Full Practice Test 1",
  section: "speaking",
  description:
    "A complete CELPIP-style Speaking test with all eight tasks, from Giving Advice to Describing an Unusual Situation. Recorded, transcribed, and scored by AI.",
  durationLabel: "15–20 min",
  questionCount: 8,
  steps,
}
