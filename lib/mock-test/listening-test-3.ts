import type { MockTest, TestStep } from "./types"

const HEADER_BASE = "Mock Test 3 - Listening"

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
      "Welcome to the third CELPIP Listening practice test. You will hear conversations, an informational talk, a news item, and a discussion. Each clip plays only once, so listen carefully. When you are ready, select Next to begin.",
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
      "Listen to the conversation. You will hear it only once. It is about 1 to 1.5 minutes long.",
    script: [
      { speaker: "Tenant", text: "Hi, I'm calling because the heating in my apartment stopped working last night." },
      { speaker: "Manager", text: "I'm sorry about that. Is it completely off, or just weak?" },
      { speaker: "Tenant", text: "Completely off. The apartment is really cold, and I have a baby at home." },
      { speaker: "Manager", text: "Understood — that's a priority. I can send our technician this afternoon between two and four. Will someone be home?" },
      { speaker: "Tenant", text: "Yes, I'll be here all day. Is there anything I can do in the meantime?" },
      { speaker: "Manager", text: "You can use a space heater if you have one, but keep it away from curtains. If the problem isn't fixed today, we'll arrange a temporary room for you." },
      { speaker: "Tenant", text: "Thank you, that's a relief." },
    ],
    transcript:
      "A tenant reports that the apartment heating stopped working overnight and is completely off, which is urgent because they have a baby. The manager treats it as a priority, promising a technician between two and four that afternoon, advises safe use of a space heater, and offers a temporary room if it cannot be fixed the same day.",
  },
  q("p1q1", `${HEADER_BASE} Part 1: Listening to Problem Solving`,
    "Why is the tenant calling?",
    ["To pay the rent.", "Because the heating stopped working.", "To report a water leak.", "To give notice of moving out."], 1),
  q("p1q2", `${HEADER_BASE} Part 1: Listening to Problem Solving`,
    "Why is the situation urgent?",
    ["The tenant has a baby at home.", "The tenant is leaving on a trip.", "Guests are arriving.", "The rent is overdue."], 0),
  q("p1q3", `${HEADER_BASE} Part 1: Listening to Problem Solving`,
    "When will the technician come?",
    ["Tomorrow morning.", "In the evening.", "This afternoon between two and four.", "Next week."], 2),
  q("p1q4", `${HEADER_BASE} Part 1: Listening to Problem Solving`,
    "What safety advice does the manager give?",
    ["Keep a space heater away from curtains.", "Open all the windows.", "Turn off the electricity.", "Boil water on the stove."], 0),
  q("p1q5", `${HEADER_BASE} Part 1: Listening to Problem Solving`,
    "What will happen if the heating is not fixed today?",
    ["The rent will be refunded.", "A temporary room will be arranged.", "The tenant must leave.", "Nothing can be done."], 1),

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
      "Listen to the conversation. You will hear it only once. It is about 1 to 1.5 minutes long.",
    script: [
      { speaker: "Leo", text: "Have you decided what to do for your sister's graduation gift?" },
      { speaker: "Mona", text: "Not yet. I was thinking about a nice watch, but they're so expensive." },
      { speaker: "Leo", text: "What about a weekend getaway instead? She's been so stressed with exams." },
      { speaker: "Mona", text: "That's actually a lovely idea. Maybe a cabin near the mountains?" },
      { speaker: "Leo", text: "Perfect. We could split the cost and go together as a surprise." },
      { speaker: "Mona", text: "Let's do it. I'll look for a place this weekend and send you a few options." },
      { speaker: "Leo", text: "Great. Try to find somewhere with a hot tub — she'd love that." },
    ],
    transcript:
      "Mona is unsure about a graduation gift for her sister and considered an expensive watch. Leo suggests a weekend getaway instead, since her sister has been stressed. They agree on a mountain cabin, decide to split the cost as a surprise, and Mona will find options this weekend — ideally with a hot tub.",
  },
  q("p2q1", `${HEADER_BASE} Part 2: Listening to a Daily Life Conversation`,
    "What are they trying to decide?",
    ["Where to go on holiday.", "A graduation gift for Mona's sister.", "What to cook for dinner.", "Which watch to repair."], 1),
  q("p2q2", `${HEADER_BASE} Part 2: Listening to a Daily Life Conversation`,
    "Why does Mona hesitate about the watch?",
    ["It is too expensive.", "Her sister has one.", "It is out of stock.", "She dislikes watches."], 0),
  q("p2q3", `${HEADER_BASE} Part 2: Listening to a Daily Life Conversation`,
    "What does Leo suggest instead?",
    ["A new phone.", "A gift card.", "A weekend getaway.", "A party."], 2),
  q("p2q4", `${HEADER_BASE} Part 2: Listening to a Daily Life Conversation`,
    "How will they share the cost?",
    ["They will split it and go together.", "Leo will pay everything.", "Mona will pay everything.", "Their parents will pay."], 0),
  q("p2q5", `${HEADER_BASE} Part 2: Listening to a Daily Life Conversation`,
    "What feature does Leo hope the cabin has?",
    ["A fireplace.", "A swimming pool.", "A hot tub.", "A games room."], 2),

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
    instruction: "Listen to the talk. You will hear it only once.",
    script: [
      { speaker: "Trainer", text: "Welcome to your first day as volunteers at the food bank. Here's how a typical shift works. First, you'll sign in at the front and put on a name tag and gloves. Most of you will be sorting donations by type and checking expiry dates — anything past its date goes in the red bins. Please do not lift boxes heavier than about ten kilograms on your own; ask a partner for help. Shifts run for three hours with a short break halfway through. At the end, we'd appreciate it if you helped sweep the sorting area before you leave." },
    ],
    transcript:
      "A trainer explains a food-bank volunteer shift: sign in, wear a name tag and gloves, then sort donations by type and check expiry dates, putting expired items in red bins. Volunteers should not lift boxes over about ten kilograms alone. Shifts last three hours with a mid-point break, and volunteers help sweep the sorting area before leaving.",
  },
  q("p3q1", `${HEADER_BASE} Part 3: Listening for Information`,
    "What should volunteers do first?",
    ["Start sorting immediately.", "Sign in and put on a name tag and gloves.", "Take a break.", "Sweep the floor."], 1),
  q("p3q2", `${HEADER_BASE} Part 3: Listening for Information`,
    "Where do expired items go?",
    ["In the red bins.", "Back to donors.", "In the recycling.", "On the shelves."], 0),
  q("p3q3", `${HEADER_BASE} Part 3: Listening for Information`,
    "What is the rule about heavy boxes?",
    ["Lift them quickly.", "Leave them for staff only.", "Do not lift boxes over about ten kilograms alone.", "Stack them by the door."], 2),
  q("p3q4", `${HEADER_BASE} Part 3: Listening for Information`,
    "How long is a shift?",
    ["One hour.", "Two hours.", "Three hours.", "Four hours."], 2),
  q("p3q5", `${HEADER_BASE} Part 3: Listening for Information`,
    "What are volunteers asked to do at the end?",
    ["Help sweep the sorting area.", "Lock the building.", "Count the money.", "Deliver food.",], 0),

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
    instruction: "Listen to the news item. You will hear it only once.",
    script: [
      { speaker: "Reporter", text: "A local bakery is making headlines after pledging to donate all of its unsold bread to nearby shelters each night. The owner says the idea began when she noticed how much good food was being thrown away. Since starting the program three months ago, the bakery has donated more than two thousand loaves. Other businesses on the street have taken notice, and two cafes have now joined the effort. The city is considering an award to recognize the bakery's contribution to reducing food waste." },
    ],
    transcript:
      "A local bakery now donates all unsold bread to nearby shelters each night. The owner started the program after noticing food waste. In three months it has donated over two thousand loaves, inspiring two cafes to join. The city is considering an award recognizing the bakery's contribution to reducing food waste.",
  },
  q("p4q1", `${HEADER_BASE} Part 4: Listening to a News Item`,
    "What has the bakery pledged to do?",
    ["Open a second location.", "Donate unsold bread to shelters each night.", "Lower its prices.", "Hire more staff."], 1),
  q("p4q2", `${HEADER_BASE} Part 4: Listening to a News Item`,
    "What inspired the owner to start?",
    ["Noticing how much food was thrown away.", "A customer's request.", "A government rule.", "A drop in sales."], 0),
  q("p4q3", `${HEADER_BASE} Part 4: Listening to a News Item`,
    "How many loaves have been donated in three months?",
    ["About five hundred.", "About one thousand.", "More than two thousand.", "More than ten thousand."], 2),
  q("p4q4", `${HEADER_BASE} Part 4: Listening to a News Item`,
    "Who else has joined the effort?",
    ["Two cafes.", "A supermarket chain.", "A school.", "A hospital."], 0),
  q("p4q5", `${HEADER_BASE} Part 4: Listening to a News Item`,
    "What is the city considering?",
    ["Closing the bakery.", "A new tax.", "An award for the bakery.", "A bread festival."], 2),

  {
    id: "result",
    kind: "result",
    headerTitle: `${HEADER_BASE} Results`,
  },
]

export const listeningTest3: MockTest = {
  id: "listening-3",
  title: "CELPIP Listening — Full Practice Test 3",
  section: "listening",
  description:
    "A third CELPIP-style Listening test with problem solving, a daily-life conversation, an informational talk, and a news item.",
  durationLabel: "35–40 min",
  questionCount: 20,
  steps,
}
