import type { MockTest, TestStep, SpeakingStep } from "./types"

const HEADER_BASE = "Advanced Mock Exam 4 - Speaking"

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
    id: "speaking4-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} - CELPIP Test`,
    sectionTitle: "Speaking Test Instructions",
    bullets: [
      "This is an advanced simulation. The scenarios contain competing pressures and specific constraints; simply answering the surface question will not reach the top bands.",
      "To score well you must organise your response, use precise and varied vocabulary, and speak fluently for the full time without long pauses.",
      "The Speaking Test has eight tasks and takes about 15 to 20 minutes. Each task gives you preparation time, then a recording window that begins automatically.",
      "Your responses are transcribed and scored by AI on the official criteria: Content/Coherence, Vocabulary, Listenability, and Task Fulfillment.",
    ],
  },

  speaking(
    "speaking4-t1",
    `${HEADER_BASE} Task 1: Giving Advice`,
    "Giving Advice",
    "A close friend has been offered a promotion to manage the very team of colleagues they currently work alongside as an equal. They are excited but anxious about suddenly becoming the boss of their friends. Give your friend advice on how to handle this transition well.",
    [
      "Address the specific challenge of managing former peers.",
      "Give concrete, practical advice, not just encouragement.",
      "Organise your advice clearly and speak for the full time.",
    ],
    30,
    90,
  ),

  speaking(
    "speaking4-t2",
    `${HEADER_BASE} Task 2: Talking about a Personal Experience`,
    "Personal Experience",
    "Talk about a time when you changed your mind about something important after hearing someone else's point of view. Describe what you originally believed, what changed your thinking, and how you felt about changing your mind.",
    [
      "Clearly describe your original position and the situation.",
      "Explain what specifically changed your mind.",
      "Reflect on how the experience affected you.",
    ],
    30,
    60,
  ),

  speaking(
    "speaking4-t3",
    `${HEADER_BASE} Task 3: Describing a Scene`,
    "Describing a Scene",
    "Look at the image carefully. Describe this scene in as much detail as you can to someone who cannot see it. Include the setting, the people, what they are doing, and the overall mood.",
    [
      "Describe the location of people and objects precisely.",
      "Capture the activity and the atmosphere, including the weather.",
      "Organise your description so it is easy to follow.",
    ],
    30,
    60,
    "/speaking/scene-community-garden-storm.png",
    "A busy community garden work-day: volunteers plant, water, and move soil in raised beds while dark storm clouds gather overhead and paper cups begin to blow off a snack table.",
  ),

  speaking(
    "speaking4-t4",
    `${HEADER_BASE} Task 4: Making Predictions`,
    "Making Predictions",
    "Look at the image again. Predict what is likely to happen in the next few minutes. Explain what you think will happen and give reasons based on what you can see.",
    [
      "Make specific predictions grounded in details of the scene.",
      "Justify each prediction with visible evidence.",
      "Use appropriate future-tense and probability language.",
    ],
    30,
    60,
    "/speaking/scene-community-garden-storm.png",
    "A busy community garden work-day: volunteers plant, water, and move soil in raised beds while dark storm clouds gather overhead and paper cups begin to blow off a snack table.",
  ),

  speaking(
    "speaking4-t5",
    `${HEADER_BASE} Task 5: Comparing and Persuading`,
    "Comparing and Persuading",
    "Your workplace can fund only one professional-development benefit next year: either a generous annual budget each employee can spend on any external course or conference of their choice, or a structured in-house training program led by senior staff. Choose one and persuade your manager to adopt it.",
    [
      "State which option you support.",
      "Compare it directly with the other, noting trade-offs.",
      "Use persuasive reasoning aimed at a manager's priorities.",
    ],
    60,
    60,
  ),

  speaking(
    "speaking4-t6",
    `${HEADER_BASE} Task 6: Dealing with a Difficult Situation`,
    "Difficult Situation",
    "You agreed to share a rental cottage with two friends for a week, splitting the cost equally. One friend has now invited two extra people without asking you, which will make the cottage crowded and change the atmosphere you were expecting. You do not want to ruin the trip, but you are unhappy. Call your friend and address the situation.",
    [
      "Explain clearly why you are unhappy about the change.",
      "Propose a reasonable way forward.",
      "Keep a firm but friendly, relationship-preserving tone.",
    ],
    60,
    60,
  ),

  speaking(
    "speaking4-t7",
    `${HEADER_BASE} Task 7: Expressing Opinions`,
    "Expressing Opinions",
    "Some people argue that public figures, such as politicians and celebrities, should be held to a higher standard of behaviour than ordinary citizens. Others say this is unfair. What is your opinion? Give your view and support it with reasons.",
    [
      "State your opinion clearly and take a definite position.",
      "Support it with specific reasons and examples.",
      "Acknowledge the opposing view and respond to it.",
    ],
    30,
    90,
  ),

  speaking(
    "speaking4-t8",
    `${HEADER_BASE} Task 8: Describing an Unusual Situation`,
    "Unusual Situation",
    "You ordered a custom cake for an important celebration. When you arrive to collect it, the bakery presents a cake that is the wrong flavour, has someone else's name written on it, and is decorated in a completely different theme from what you ordered. The celebration is in three hours. Call the bakery and describe exactly what is wrong and what you need.",
    [
      "Describe in detail what you received versus what you ordered.",
      "Convey the urgency created by the timing.",
      "State clearly and specifically what you want the bakery to do.",
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

export const speakingTest4: MockTest = {
  id: "speaking-4",
  title: "CELPIP Speaking — Advanced Practice Test 4",
  section: "speaking",
  description:
    "A high-difficulty CELPIP-style Speaking test with all eight tasks. Scenarios involve competing pressures and specific constraints that demand organised, nuanced responses. Recorded, transcribed, and scored by AI.",
  durationLabel: "15–20 min",
  questionCount: 8,
  steps,
}
