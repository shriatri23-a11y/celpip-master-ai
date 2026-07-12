import type { MockTest, TestStep, SpeakingStep } from "./types"

const HEADER_BASE = "Advanced Mock Exam 6 - Speaking"

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
    id: "speaking6-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} - CELPIP Test`,
    sectionTitle: "Speaking Test Instructions",
    bullets: [
      "This is the most demanding simulation in the set. The scenarios contain competing pressures and specific constraints; simply answering the surface question will not reach the top bands.",
      "To score well you must organise your response, use precise and varied vocabulary, and speak fluently for the full time without long pauses.",
      "The Speaking Test has eight tasks and takes about 15 to 20 minutes. Each task gives you preparation time, then a recording window that begins automatically.",
      "Your responses are transcribed and scored by AI on the official criteria: Content/Coherence, Vocabulary, Listenability, and Task Fulfillment.",
    ],
  },

  speaking(
    "speaking6-t1",
    `${HEADER_BASE} Task 1: Giving Advice`,
    "Giving Advice",
    "A colleague has been offered an exciting job at a startup with much higher pay but far less job security, and they would have to leave a stable job they have held for ten years. They are torn and have asked for your advice. Help them think through the decision.",
    [
      "Address the specific trade-off between security and opportunity.",
      "Give concrete, practical advice, not just encouragement.",
      "Organise your advice clearly and speak for the full time.",
    ],
    30,
    90,
  ),

  speaking(
    "speaking6-t2",
    `${HEADER_BASE} Task 2: Talking about a Personal Experience`,
    "Personal Experience",
    "Talk about a time when you had to give someone difficult or unwelcome news. Describe the situation, how you chose to deliver the news, and how the person reacted.",
    [
      "Clearly describe the situation and the news you had to give.",
      "Explain how and why you chose to deliver it the way you did.",
      "Reflect on the reaction and what you would do differently.",
    ],
    30,
    60,
  ),

  speaking(
    "speaking6-t3",
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
    "/speaking/scene-train-platform-delay.png",
    "A crowded train station platform during a delay: a departures board shows several trains marked delayed, frustrated passengers wait with luggage, and a uniformed staff member on a step stool is about to make an announcement.",
  ),

  speaking(
    "speaking6-t4",
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
    "/speaking/scene-train-platform-delay.png",
    "A crowded train station platform during a delay: a departures board shows several trains marked delayed, frustrated passengers wait with luggage, and a uniformed staff member on a step stool is about to make an announcement.",
  ),

  speaking(
    "speaking6-t5",
    `${HEADER_BASE} Task 5: Comparing and Persuading`,
    "Comparing and Persuading",
    "Your neighbourhood association has enough money for one safety improvement: either install brighter street lighting throughout the area, or add speed bumps and clearer crossings on the busiest streets. Choose one and persuade the association to adopt it.",
    [
      "State which option you support.",
      "Compare it directly with the other, noting trade-offs.",
      "Use persuasive reasoning aimed at the association's priorities.",
    ],
    60,
    60,
  ),

  speaking(
    "speaking6-t6",
    `${HEADER_BASE} Task 6: Dealing with a Difficult Situation`,
    "Difficult Situation",
    "You hired a contractor to renovate your kitchen, agreeing on a fixed price and a completion date. The work is now two weeks behind, and the contractor has just told you the final cost will be significantly higher than agreed, blaming 'unexpected issues' they never discussed with you. You still need the work finished. Speak to the contractor about the situation.",
    [
      "Clearly express your concerns about the delay and the cost increase.",
      "Propose a reasonable way to resolve the situation.",
      "Keep a firm but professional tone that keeps the project moving.",
    ],
    60,
    60,
  ),

  speaking(
    "speaking6-t7",
    `${HEADER_BASE} Task 7: Expressing Opinions`,
    "Expressing Opinions",
    "Some people believe that governments should require large companies to disclose the environmental impact of their products. Others argue this places an unfair burden on business. What is your opinion? Give your view and support it with reasons.",
    [
      "State your opinion clearly and take a definite position.",
      "Support it with specific reasons and examples.",
      "Acknowledge the opposing view and respond to it.",
    ],
    30,
    90,
  ),

  speaking(
    "speaking6-t8",
    `${HEADER_BASE} Task 8: Describing an Unusual Situation`,
    "Unusual Situation",
    "You bought an expensive electronic device online as a gift. When the package arrives, the box is correct on the outside, but inside you find a completely different, cheaper item, clearly used, with none of the accessories or documentation you paid for. The gift is needed in two days. Call the retailer and describe exactly what is wrong and what you need.",
    [
      "Describe in detail what you received versus what you ordered.",
      "Convey the urgency created by the timing.",
      "State clearly and specifically what you want the retailer to do.",
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

export const speakingTest6: MockTest = {
  id: "speaking-6",
  title: "CELPIP Speaking — Advanced Practice Test 6",
  section: "speaking",
  description:
    "The most demanding CELPIP-style Speaking test in the set, with all eight tasks. Scenarios involve competing pressures and specific constraints that demand organised, nuanced responses. Recorded, transcribed, and scored by AI.",
  durationLabel: "15–20 min",
  questionCount: 8,
  steps,
}
