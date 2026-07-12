import type { MockTest, TestStep, AudioLine } from "./types"
import { LISTENING_BLUEPRINT } from "./listening-blueprint"

const HEADER_BASE = "Mock Test 2 - Listening"

function q(
  id: string,
  header: string,
  prompt: string,
  options: [string, string, string, string],
  correctIndex: number,
): TestStep {
  return {
    id,
    kind: "audio-mcq",
    headerTitle: header,
    instruction: "Listen to the question. You will hear it only once.",
    answerSeconds: 30,
    script: [{ text: prompt }],
    question: {
      id,
      prompt,
      correctOptionId: `${id}-${correctIndex}`,
      options: options.map((text, i) => ({ id: `${id}-${i}`, text })),
    },
  }
}

const steps: TestStep[] = [
  {
    id: "intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} - CELPIP Test`,
    sectionTitle: "Listening Test Instructions",
    bullets: [
      "On the official test, once you leave a page, you cannot go back to it to change your answers. However, in this practice test, you can.",
      "You will hear each audio clip only once.",
      "After each clip you will answer multiple choice questions by choosing the best answer.",
    ],
  },
  {
    id: "video",
    kind: "video",
    headerTitle: `${HEADER_BASE} - Instructional Video`,
    heading: "Listening Video Instructions",
    posterSrc: "/mock-test/listening-video-poster.png",
    narration:
      "Welcome to the second CELPIP Listening practice test. You will hear conversations, an informational talk, a news item, and a discussion. Each clip plays only once, so listen carefully. When you are ready, select Next to begin.",
  },
  {
    id: "practice",
    kind: "audio",
    headerTitle: `${HEADER_BASE} - Practice Task`,
    instruction: "Practice Task: Check your headphones. You will hear a short sound.",
    script: [
      { text: "This is a sound check. If you can hear this clearly, your headphones are working. Adjust your volume to a comfortable level, then select Next to begin the test." },
    ],
    transcript:
      "This is a sound check. If you can hear this clearly, your headphones are working. Adjust your volume, then select Next to begin.",
  },

  /* ---------------- PART 1 — Problem Solving ---------------- */
  {
    id: "p1-instr",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 1: Listening to Problem Solving`,
    sectionTitle: "Listening to Problem Solving",
    bullets: [
      "You will hear a conversation. You will hear it only once.",
      "Then you will answer questions. Choose the best answer to each question.",
    ],
  },
  {
    id: "p1-audio",
    kind: "audio",
    headerTitle: `${HEADER_BASE} Part 1: Listening to Problem Solving`,
    instruction:
      "Listen to the conversation. You will hear it only once. It is about 45 to 90 seconds long.",
    blueprint: LISTENING_BLUEPRINT.customerService,
    script: [
      { speaker: "Clerk", text: "Hello, Maple Electronics service desk. How can I help?" },
      { speaker: "Customer", text: "Hi, I bought a laptop here three weeks ago and the screen keeps flickering." },
      { speaker: "Clerk", text: "I'm sorry to hear that. Do you still have your receipt and the original box?" },
      { speaker: "Customer", text: "I have the receipt, but I recycled the box. Is that a problem?" },
      { speaker: "Clerk", text: "Not at all. Since it's within thirty days, we can offer a replacement or a full repair. The repair takes about a week, but a replacement is immediate if we have the model in stock." },
      { speaker: "Customer", text: "I need it for work, so I'd prefer the replacement if possible." },
      { speaker: "Clerk", text: "Let me check our stock. Yes, we have one. Bring in your receipt and we'll swap it today." },
    ],
    transcript:
      "A customer reports a flickering laptop screen bought three weeks earlier. They kept the receipt but recycled the box. Because it is within thirty days, the clerk offers a repair (about a week) or an immediate replacement. The customer chooses a replacement, which is in stock, and is told to bring the receipt.",
  },
  q("p1q1", `${HEADER_BASE} Part 1: Listening to Problem Solving`,
    "What problem is the customer having?",
    ["The laptop will not turn on.", "The screen keeps flickering.", "The keyboard is broken.", "The battery drains quickly."], 1),
  q("p1q2", `${HEADER_BASE} Part 1: Listening to Problem Solving`,
    "What does the customer no longer have?",
    ["The receipt.", "The charger.", "The original box.", "The warranty card."], 2),
  q("p1q3", `${HEADER_BASE} Part 1: Listening to Problem Solving`,
    "Why can the store still help easily?",
    ["The purchase is within thirty days.", "The customer is a member.", "The laptop is very cheap.", "The manager approved it."], 0),
  q("p1q4", `${HEADER_BASE} Part 1: Listening to Problem Solving`,
    "How long does a repair take?",
    ["One day.", "About a week.", "About a month.", "Two weeks."], 1),
  q("p1q5", `${HEADER_BASE} Part 1: Listening to Problem Solving`,
    "What does the customer choose?",
    ["A refund.", "A repair.", "A replacement.", "Store credit."], 2),

  /* ---------------- PART 2 — Daily Life Conversation ---------------- */
  {
    id: "p2-instr",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 2: Listening to a Daily Life Conversation`,
    sectionTitle: "Listening to a Daily Life Conversation",
    bullets: [
      "You will hear a conversation. You will hear it only once.",
      "Then answer the questions. Choose the best answer to each question.",
    ],
  },
  {
    id: "p2-audio",
    kind: "audio",
    headerTitle: `${HEADER_BASE} Part 2: Listening to a Daily Life Conversation`,
    instruction:
      "Listen to the conversation. You will hear it only once. It is about 30 to 60 seconds long.",
    blueprint: LISTENING_BLUEPRINT.dailyConversation,
    script: [
      { speaker: "Ben", text: "Are you coming to the community potluck on Sunday?" },
      { speaker: "Aisha", text: "I'd love to. What should I bring? I'm not a great cook." },
      { speaker: "Ben", text: "Don't worry, a salad or some drinks would be perfect. We already have plenty of main dishes." },
      { speaker: "Aisha", text: "Okay, I'll bring a big fruit salad and some sparkling water. What time does it start?" },
      { speaker: "Ben", text: "Noon, at the park pavilion. If it rains, we'll move it to the community hall." },
      { speaker: "Aisha", text: "Great. Should I come early to help set up?" },
      { speaker: "Ben", text: "That would be wonderful — maybe eleven thirty? We need help with the tables." },
    ],
    transcript:
      "Ben invites Aisha to a Sunday community potluck at noon at the park pavilion, moving to the community hall if it rains. Aisha, not a confident cook, agrees to bring a fruit salad and sparkling water, and offers to arrive at 11:30 to help set up the tables.",
  },
  q("p2q1", `${HEADER_BASE} Part 2: Listening to a Daily Life Conversation`,
    "What event are they discussing?",
    ["A birthday party.", "A community potluck.", "A cooking class.", "A concert."], 1),
  q("p2q2", `${HEADER_BASE} Part 2: Listening to a Daily Life Conversation`,
    "What does Ben suggest Aisha bring?",
    ["A main dish.", "A dessert only.", "A salad or drinks.", "Nothing at all."], 2),
  q("p2q3", `${HEADER_BASE} Part 2: Listening to a Daily Life Conversation`,
    "Where will the event move if it rains?",
    ["To the community hall.", "To Ben's house.", "To a restaurant.", "It will be cancelled."], 0),
  q("p2q4", `${HEADER_BASE} Part 2: Listening to a Daily Life Conversation`,
    "What time does the potluck start?",
    ["Eleven o'clock.", "Noon.", "One o'clock.", "Two o'clock."], 1),
  q("p2q5", `${HEADER_BASE} Part 2: Listening to a Daily Life Conversation`,
    "Why will Aisha arrive early?",
    ["To help set up the tables.", "To cook the main dish.", "To decorate the hall.", "To park her car."], 0),

  /* ---------------- PART 3 — Listening for Information ---------------- */
  {
    id: "p3-instr",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 3: Listening for Information`,
    sectionTitle: "Listening for Information",
    bullets: [
      "You will hear an informational talk. You will hear it only once.",
      "Then answer the questions. Choose the best answer to each question.",
    ],
  },
  {
    id: "p3-audio",
    kind: "audio",
    headerTitle: `${HEADER_BASE} Part 3: Listening for Information`,
    instruction: "Listen to the talk. You will hear it only once. It is about 45 to 60 seconds long.",
    blueprint: LISTENING_BLUEPRINT.travelAnnouncement,
    script: [
      { speaker: "Guide", text: "Welcome to the Riverside Nature Reserve. Before we start our walk, a few reminders. The main loop trail is four kilometres and takes about ninety minutes at an easy pace. Please stay on marked paths, since some areas are home to nesting birds this season. We provide binoculars at the visitor centre for a small refundable deposit. Photography is welcome, but please do not use flash near the wetlands. Our guided walks leave every hour until four p.m., and the last entry to the reserve is at four thirty." },
    ],
    transcript:
      "A guide introduces the Riverside Nature Reserve: a 4 km main loop taking about 90 minutes. Visitors must stay on marked paths to protect nesting birds. Binoculars are available at the visitor centre for a refundable deposit. Flash photography is banned near the wetlands. Guided walks leave hourly until 4 p.m., with last entry at 4:30.",
  },
  q("p3q1", `${HEADER_BASE} Part 3: Listening for Information`,
    "How long is the main loop trail?",
    ["Two kilometres.", "Four kilometres.", "Six kilometres.", "Ten kilometres."], 1),
  q("p3q2", `${HEADER_BASE} Part 3: Listening for Information`,
    "Why must visitors stay on marked paths?",
    ["To avoid getting lost.", "Because of nesting birds.", "To protect the trees.", "Because of muddy ground."], 1),
  q("p3q3", `${HEADER_BASE} Part 3: Listening for Information`,
    "How can visitors get binoculars?",
    ["For a refundable deposit at the visitor centre.", "By buying them at the gate.", "They must bring their own.", "They are mailed in advance."], 0),
  q("p3q4", `${HEADER_BASE} Part 3: Listening for Information`,
    "What photography rule is mentioned?",
    ["No photos are allowed.", "Only staff may take photos.", "No flash near the wetlands.", "Photos cost extra."], 2),
  q("p3q5", `${HEADER_BASE} Part 3: Listening for Information`,
    "When is the last entry to the reserve?",
    ["Three p.m.", "Four p.m.", "Four thirty p.m.", "Five p.m."], 2),

  /* ---------------- PART 4 — News Item ---------------- */
  {
    id: "p4-instr",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 4: Listening to a News Item`,
    sectionTitle: "Listening to a News Item",
    bullets: [
      "You will hear a news item. You will hear it only once.",
      "Then answer the questions. Choose the best answer to each question.",
    ],
  },
  {
    id: "p4-audio",
    kind: "audio",
    headerTitle: `${HEADER_BASE} Part 4: Listening to a News Item`,
    instruction: "Listen to the news item. You will hear it only once. It is about 60 to 120 seconds long.",
    blueprint: LISTENING_BLUEPRINT.newsReport,
    script: [
      { speaker: "Reporter", text: "The city announced today that its downtown library will undergo a major renovation beginning this fall. The six-month project will add a children's learning centre, expand the study areas, and install energy-efficient lighting throughout the building. During construction, library services will move to a temporary location in the community centre on Elm Street. Officials say all borrowed books can still be returned at any branch, and late fees will be suspended until the main branch reopens in the spring." },
    ],
    transcript:
      "The downtown library will be renovated over six months starting in the fall, adding a children's learning centre, expanded study areas, and energy-efficient lighting. Services move temporarily to the Elm Street community centre. Books can be returned at any branch, and late fees are suspended until the main branch reopens in spring.",
  },
  q("p4q1", `${HEADER_BASE} Part 4: Listening to a News Item`,
    "What is the news item mainly about?",
    ["A new library opening.", "A downtown library renovation.", "A book sale.", "A branch closing permanently."], 1),
  q("p4q2", `${HEADER_BASE} Part 4: Listening to a News Item`,
    "How long will the project take?",
    ["Three months.", "Six months.", "One year.", "Two years."], 1),
  q("p4q3", `${HEADER_BASE} Part 4: Listening to a News Item`,
    "What will be added for children?",
    ["A playground.", "A daycare.", "A learning centre.", "A cafe."], 2),
  q("p4q4", `${HEADER_BASE} Part 4: Listening to a News Item`,
    "Where will services move during construction?",
    ["The Elm Street community centre.", "A nearby school.", "City hall.", "A shopping mall."], 0),
  q("p4q5", `${HEADER_BASE} Part 4: Listening to a News Item`,
    "What will happen to late fees?",
    ["They will double.", "They will be suspended until reopening.", "They stay the same.", "They apply only downtown."], 1),

  {
    id: "result",
    kind: "result",
    headerTitle: `${HEADER_BASE} Results`,
  },
]

export const listeningTest2: MockTest = {
  id: "listening-2",
  title: "CELPIP Listening — Full Practice Test 2",
  section: "listening",
  description:
    "A second CELPIP-style Listening test with problem solving, a daily-life conversation, an informational talk, and a news item.",
  durationLabel: "35–40 min",
  questionCount: 20,
  steps,
}
