import type { MockTest, TestStep, SpeakingStep } from "./types"

const HEADER_BASE = "Mock Test 3 - Speaking"

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
    id: "speaking3-intro",
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
    "speaking3-t1",
    `${HEADER_BASE} Task 1: Giving Advice`,
    "Giving Advice",
    "A relative is thinking about adopting a pet for the first time but is unsure whether they are ready. Give your relative advice about what to consider before adopting a pet and how to prepare.",
    [
      "Suggest practical things to consider before adopting.",
      "Explain how to prepare for a new pet.",
      "Speak for the full recording time.",
    ],
    30,
    90,
  ),

  speaking(
    "speaking3-t2",
    `${HEADER_BASE} Task 2: Talking about a Personal Experience`,
    "Personal Experience",
    "Talk about a time when you helped a stranger or someone you did not know well. Describe what happened, what you did, and how you felt afterward.",
    [
      "Describe the situation and the person you helped.",
      "Explain what you did and why.",
      "Give enough detail to fill the time.",
    ],
    30,
    60,
  ),

  speaking(
    "speaking3-t3",
    `${HEADER_BASE} Task 3: Describing a Scene`,
    "Describing a Scene",
    "Imagine you are looking at a lively city square in the evening. String lights hang overhead, a street performer juggles near a fountain, people sit at outdoor tables eating, and children chase each other across the open space. Describe this scene in as much detail as you can to someone who cannot see it.",
    [
      "Describe where people and objects are located.",
      "Include details about actions and atmosphere.",
      "Organize your description clearly.",
    ],
    30,
    60,
  ),

  speaking(
    "speaking3-t4",
    `${HEADER_BASE} Task 4: Making Predictions`,
    "Making Predictions",
    "Look again at the evening city square scene. Predict what will happen next with the street performer near the fountain. Explain what you think will happen and why.",
    [
      "Make clear predictions about what will happen.",
      "Give reasons based on the situation.",
      "Use appropriate future-tense language.",
    ],
    30,
    60,
  ),

  speaking(
    "speaking3-t5",
    `${HEADER_BASE} Task 5: Comparing and Persuading`,
    "Comparing and Persuading",
    "A friend is choosing between two ways to celebrate a special birthday: a big party with many guests, or a small trip with just a few close friends. Choose one option and persuade your friend that it is the better choice.",
    [
      "State which option you prefer.",
      "Compare it with the other option.",
      "Persuade the listener with strong reasons.",
    ],
    60,
    60,
  ),

  speaking(
    "speaking3-t6",
    `${HEADER_BASE} Task 6: Dealing with a Difficult Situation`,
    "Difficult Situation",
    "You lent a valuable item to a friend, and it has been returned damaged. Your friend has not mentioned it or offered to fix it. You must call your friend to discuss the situation. Decide what you will do and leave a message explaining your decision.",
    [
      "Explain the situation clearly.",
      "State your decision and the reason for it.",
      "Use a polite, appropriate tone.",
    ],
    60,
    60,
  ),

  speaking(
    "speaking3-t7",
    `${HEADER_BASE} Task 7: Expressing Opinions`,
    "Expressing Opinions",
    "Some people believe that working from home is better than working in an office. Do you agree or disagree? Give your opinion and support it with reasons.",
    [
      "State your opinion clearly.",
      "Support it with specific reasons and examples.",
      "Maintain a clear, logical structure.",
    ],
    30,
    90,
  ),

  speaking(
    "speaking3-t8",
    `${HEADER_BASE} Task 8: Describing an Unusual Situation`,
    "Unusual Situation",
    "You booked a standard rental car for a weekend trip, but the vehicle waiting for you is a bright pink convertible with racing stripes, only two seats, and a loud engine — nothing like what you reserved. Call the rental company and describe exactly what you received and what you expected.",
    [
      "Describe what you received in detail.",
      "Explain how it differs from what you reserved.",
      "Clearly state what you want the company to do.",
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

export const speakingTest3: MockTest = {
  id: "speaking-3",
  title: "CELPIP Speaking — Full Practice Test 3",
  section: "speaking",
  description:
    "A third complete CELPIP-style Speaking test with all eight tasks, recorded, transcribed, and scored by AI.",
  durationLabel: "15–20 min",
  questionCount: 8,
  steps,
}
