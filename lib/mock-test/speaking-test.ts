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
): SpeakingStep {
  return {
    id,
    kind: "speaking",
    headerTitle: header,
    instruction: "Read the task, then prepare and record your response.",
    taskType,
    prompt,
    requirements,
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
    "A friend has just moved to your city and asks you for advice on finding a good, affordable place to live. Give your friend advice about how to search for housing and what to consider before signing a lease.",
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
    "Imagine you are looking at a busy farmers' market on a Saturday morning. There are vendors selling fruit and vegetables, a musician playing near the entrance, families with children, and a coffee stand with a long line. Describe this scene in as much detail as you can to someone who cannot see it.",
    [
      "Describe where people and objects are located.",
      "Include details about actions and atmosphere.",
      "Organize your description clearly.",
    ],
    30,
    60,
  ),

  speaking(
    "speaking-t4",
    `${HEADER_BASE} Task 4: Making Predictions`,
    "Making Predictions",
    "Look again at the farmers' market scene. Predict what might happen next at the coffee stand where a long line has formed. Explain what you think will happen and why.",
    [
      "Make clear predictions about what will happen.",
      "Give reasons based on the situation.",
      "Use appropriate future-tense language.",
    ],
    30,
    60,
  ),

  speaking(
    "speaking-t5",
    `${HEADER_BASE} Task 5: Comparing and Persuading`,
    "Comparing and Persuading",
    "Your family is choosing between two options for a weekend trip: a quiet cabin by a lake, or a busy city with museums and restaurants. Choose one option and persuade a family member that it is the better choice.",
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
    "You promised to help a coworker finish a project this weekend, but a close family member has just asked you to attend an important event at the same time. You must call your coworker to explain. Decide what you will do and leave a message explaining your decision.",
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
    "Some people believe that public libraries are no longer necessary because most information is available online. Do you agree or disagree? Give your opinion and support it with reasons.",
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
