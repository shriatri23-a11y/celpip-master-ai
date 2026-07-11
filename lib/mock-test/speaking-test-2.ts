import type { MockTest, TestStep, SpeakingStep } from "./types"

const HEADER_BASE = "Mock Test 2 - Speaking"

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
    id: "speaking2-intro",
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
    "speaking2-t1",
    `${HEADER_BASE} Task 1: Giving Advice`,
    "Giving Advice",
    "A coworker has been offered a chance to lead a big project but feels nervous about managing a team for the first time. Give your coworker advice about how to prepare and succeed as a first-time team leader.",
    [
      "Suggest practical steps your coworker can take.",
      "Explain what to focus on when leading others.",
      "Speak for the full recording time.",
    ],
    30,
    90,
  ),

  speaking(
    "speaking2-t2",
    `${HEADER_BASE} Task 2: Talking about a Personal Experience`,
    "Personal Experience",
    "Talk about a time when a plan you made had to change at the last minute. Describe what the original plan was, what went wrong, and how you handled the change.",
    [
      "Describe the original plan and the problem.",
      "Explain how you responded to the change.",
      "Give enough detail to fill the time.",
    ],
    30,
    60,
  ),

  speaking(
    "speaking2-t3",
    `${HEADER_BASE} Task 3: Describing a Scene`,
    "Describing a Scene",
    "Imagine you are looking at a busy airport departure area. Travellers are checking screens, a family is saying goodbye near a gate, staff are helping passengers with luggage, and a small coffee kiosk is nearby. Describe this scene in as much detail as you can to someone who cannot see it.",
    [
      "Describe where people and objects are located.",
      "Include details about actions and atmosphere.",
      "Organize your description clearly.",
    ],
    30,
    60,
  ),

  speaking(
    "speaking2-t4",
    `${HEADER_BASE} Task 4: Making Predictions`,
    "Making Predictions",
    "Look again at the airport departure scene. Predict what will happen next with the family saying goodbye near the gate. Explain what you think will happen and why.",
    [
      "Make clear predictions about what will happen.",
      "Give reasons based on the situation.",
      "Use appropriate future-tense language.",
    ],
    30,
    60,
  ),

  speaking(
    "speaking2-t5",
    `${HEADER_BASE} Task 5: Comparing and Persuading`,
    "Comparing and Persuading",
    "Your community centre can afford only one new facility this year: a children's playground or a community vegetable garden. Choose one option and persuade a neighbour that it is the better choice.",
    [
      "State which option you prefer.",
      "Compare it with the other option.",
      "Persuade the listener with strong reasons.",
    ],
    60,
    60,
  ),

  speaking(
    "speaking2-t6",
    `${HEADER_BASE} Task 6: Dealing with a Difficult Situation`,
    "Difficult Situation",
    "You booked a hotel room for an important trip, but on arrival you learn the hotel is overbooked and no room is available. You must call a family member who was expecting you to stay elsewhere. Decide what you will do and leave a message explaining your decision.",
    [
      "Explain the situation clearly.",
      "State your decision and the reason for it.",
      "Use a polite, appropriate tone.",
    ],
    60,
    60,
  ),

  speaking(
    "speaking2-t7",
    `${HEADER_BASE} Task 7: Expressing Opinions`,
    "Expressing Opinions",
    "Some people believe that all students should be required to volunteer in their community before graduating. Do you agree or disagree? Give your opinion and support it with reasons.",
    [
      "State your opinion clearly.",
      "Support it with specific reasons and examples.",
      "Maintain a clear, logical structure.",
    ],
    30,
    90,
  ),

  speaking(
    "speaking2-t8",
    `${HEADER_BASE} Task 8: Describing an Unusual Situation`,
    "Unusual Situation",
    "You ordered a plain birthday cake for a small family gathering, but the cake that was delivered is enormous, covered in bright green frosting, and decorated with the wrong name. Call the bakery and describe exactly what you received and what you expected.",
    [
      "Describe what you received in detail.",
      "Explain how it differs from what you ordered.",
      "Clearly state what you want the bakery to do.",
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

export const speakingTest2: MockTest = {
  id: "speaking-2",
  title: "CELPIP Speaking — Full Practice Test 2",
  section: "speaking",
  description:
    "A second complete CELPIP-style Speaking test with all eight tasks, recorded, transcribed, and scored by AI.",
  durationLabel: "15–20 min",
  questionCount: 8,
  steps,
}
