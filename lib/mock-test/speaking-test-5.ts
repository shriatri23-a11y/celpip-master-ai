import type { MockTest, TestStep, SpeakingStep } from "./types"

const HEADER_BASE = "Advanced Mock Exam 5 - Speaking"

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
    id: "speaking5-intro",
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
    "speaking5-t1",
    `${HEADER_BASE} Task 1: Giving Advice`,
    "Giving Advice",
    "A younger relative has been accepted into two universities: one is prestigious and far from home with a heavy debt load, and the other is solid, local, and affordable. They are paralysed by the decision and have asked for your advice. Give them guidance on how to decide.",
    [
      "Address the specific trade-off between prestige/debt and affordability/proximity.",
      "Give concrete decision-making advice, not just reassurance.",
      "Organise your advice clearly and speak for the full time.",
    ],
    30,
    90,
  ),

  speaking(
    "speaking5-t2",
    `${HEADER_BASE} Task 2: Talking about a Personal Experience`,
    "Personal Experience",
    "Talk about a time when you took a risk that did not turn out the way you hoped. Describe the risk you took, what actually happened, and what you learned from the outcome.",
    [
      "Clearly describe the risk and why you took it.",
      "Explain what happened and how it differed from your hopes.",
      "Reflect on what you learned from the experience.",
    ],
    30,
    60,
  ),

  speaking(
    "speaking5-t3",
    `${HEADER_BASE} Task 3: Describing a Scene`,
    "Describing a Scene",
    "Look at the image carefully. Describe this scene in as much detail as you can to someone who cannot see it. Include the setting, the people, what they are doing, and the overall mood.",
    [
      "Describe the location of people and objects precisely.",
      "Capture the activity and the atmosphere, including any tension.",
      "Organise your description so it is easy to follow.",
    ],
    30,
    60,
    "/speaking/scene-busy-cafe-mishap.png",
    "A crowded café at lunchtime: a waiter carries a wobbling stack of plates while a child runs across his path and a parent reaches to stop them, with customers, a barista, and a dog on a leash nearby.",
  ),

  speaking(
    "speaking5-t4",
    `${HEADER_BASE} Task 4: Making Predictions`,
    "Making Predictions",
    "Look at the image again. Predict what is likely to happen in the next few moments. Explain what you think will happen and give reasons based on what you can see.",
    [
      "Make specific predictions grounded in details of the scene.",
      "Justify each prediction with visible evidence.",
      "Use appropriate future-tense and probability language.",
    ],
    30,
    60,
    "/speaking/scene-busy-cafe-mishap.png",
    "A crowded café at lunchtime: a waiter carries a wobbling stack of plates while a child runs across his path and a parent reaches to stop them, with customers, a barista, and a dog on a leash nearby.",
  ),

  speaking(
    "speaking5-t5",
    `${HEADER_BASE} Task 5: Comparing and Persuading`,
    "Comparing and Persuading",
    "Your community centre has funds to improve one thing for local families: either extend its opening hours into the evenings and weekends, or keep current hours but add new programs and equipment. Choose one and persuade the centre's board to adopt it.",
    [
      "State which option you support.",
      "Compare it directly with the other, noting trade-offs.",
      "Use persuasive reasoning aimed at a board's priorities.",
    ],
    60,
    60,
  ),

  speaking(
    "speaking5-t6",
    `${HEADER_BASE} Task 6: Dealing with a Difficult Situation`,
    "Difficult Situation",
    "You lent a valuable piece of equipment to a coworker for a weekend project. They returned it late and clearly damaged, but they have not mentioned the damage or offered to fix it. You need the equipment for your own work and value the working relationship. Speak to your coworker about the situation.",
    [
      "Raise the damage clearly without accusing aggressively.",
      "Propose a fair way to resolve it.",
      "Keep a professional, relationship-preserving tone.",
    ],
    60,
    60,
  ),

  speaking(
    "speaking5-t7",
    `${HEADER_BASE} Task 7: Expressing Opinions`,
    "Expressing Opinions",
    "Some people believe that schools should replace traditional letter grades with written feedback only. Others argue that grades are necessary. What is your opinion? Give your view and support it with reasons.",
    [
      "State your opinion clearly and take a definite position.",
      "Support it with specific reasons and examples.",
      "Acknowledge the opposing view and respond to it.",
    ],
    30,
    90,
  ),

  speaking(
    "speaking5-t8",
    `${HEADER_BASE} Task 8: Describing an Unusual Situation`,
    "Unusual Situation",
    "You booked a hotel room for an important trip. When you arrive, you are given a room that is nothing like what you reserved: it is much smaller, faces a noisy construction site, and the promised work desk and reliable internet are missing, though you have meetings tomorrow morning. Speak to the hotel manager and describe exactly what is wrong and what you need.",
    [
      "Describe in detail what you received versus what you booked.",
      "Convey the urgency created by your meetings.",
      "State clearly and specifically what you want the hotel to do.",
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

export const speakingTest5: MockTest = {
  id: "speaking-5",
  title: "CELPIP Speaking — Advanced Practice Test 5",
  section: "speaking",
  description:
    "A high-difficulty CELPIP-style Speaking test with all eight tasks. Scenarios involve competing pressures and specific constraints that demand organised, nuanced responses. Recorded, transcribed, and scored by AI.",
  durationLabel: "15–20 min",
  questionCount: 8,
  steps,
}
