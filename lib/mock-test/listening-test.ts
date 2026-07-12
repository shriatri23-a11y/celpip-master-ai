import type { MockTest, TestStep, AudioLine } from "./types"
import { LISTENING_BLUEPRINT } from "./listening-blueprint"

const HEADER = "Mock Test - Listening Part 1: Listening to Problem Solving"

// Helper to build a spoken-question audio-mcq step.
function q(
  id: string,
  header: string,
  script: AudioLine[],
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
    script,
    question: {
      id,
      prompt,
      correctOptionId: `${id}-${correctIndex}`,
      options: options.map((text, i) => ({ id: `${id}-${i}`, text })),
    },
  }
}

const steps: TestStep[] = [
  /* ---- Global instructions ---- */
  {
    id: "intro",
    kind: "instruction",
    headerTitle: "Mock Test - CELPIP Test",
    sectionTitle: "Listening Test Instructions",
    bullets: [
      "On the official test, once you leave a page, you cannot go back to it to change your answers. However, in this practice test, you can.",
      "For more information on test format, visit the official CELPIP website.",
      "Please note that the order of question types on the official test may differ from the order presented here.",
      "This Listening Test is identical in format to the official test except that the Listening section of the official test may be slightly longer as it might contain additional questions included for research and development purposes.",
    ],
  },
  {
    id: "video",
    kind: "video",
    headerTitle: "Mock Test - Instructional Video",
    heading: "Listening Video Instructions",
    posterSrc: "/mock-test/listening-video-poster.png",
    narration:
      "Welcome to the CELPIP Listening Test. In this section you will hear conversations, news items, and discussions. Each audio clip plays only once, so listen carefully. After each clip you will answer multiple choice questions by choosing the best answer. When you are ready, select Next to begin.",
  },
  {
    id: "practice",
    kind: "audio",
    audioSrc: "/audio/listening-1/practice.mp3",
    headerTitle: "Mock Test - Practice Task",
    instruction: "Practice Task: Check your headphones. You will hear a short sound.",
    script: [
      { text: "This is a sound check. If you can hear this clearly, your headphones are working. Adjust your volume to a comfortable level, then select Next to begin the test." },
    ],
    transcript:
      "This is a sound check. If you can hear this clearly, your headphones are working. Adjust your volume to a comfortable level, then select Next to begin the test.",
  },

  /* ---------------- PART 1 — Problem Solving (8 questions) ---------------- */
  {
    id: "p1-instr",
    kind: "instruction",
    headerTitle: HEADER,
    sectionTitle: "Listening to Problem Solving",
    bullets: [
      "You will hear a conversation in 3 sections. You will hear each section only once.",
      "After each section, you will hear 2 or 3 questions. You will hear the questions only once.",
      "Choose the best answer to each question.",
    ],
  },
  {
    id: "p1-scenario",
    kind: "instruction",
    headerTitle: HEADER,
    heading: "Instructions:",
    paragraphs: ["A man urgently seeks help at a train station to retrieve his forgotten bag."],
    imageSrc: "/mock-test/telephone-desk.png",
    imageAlt: "A desk telephone with the handset lifted",
  },
  {
    id: "p1-audio",
    kind: "audio",
    audioSrc: "/audio/listening-1/p1-audio.mp3",
    headerTitle: HEADER,
    instruction:
      "Listen to the conversation. You will hear the conversation only once. It is about 45 to 90 seconds long.",
    blueprint: LISTENING_BLUEPRINT.customerService,
    script: [
      { speaker: "Agent", text: "Central Station customer services. Before we begin, are you reporting property that is missing, or an item you can see but cannot retrieve?" },
      { speaker: "David", text: "The second one, I hope. I stepped off the ten-fifteen from Oakville and noticed my brown leather backpack through the window as the train pulled toward the service yard." },
      { speaker: "Agent", text: "That distinction helps. Cleaning staff can secure visible property, but because the train is no longer at a public platform, passengers cannot board it. Which carriage and seat area?" },
      { speaker: "David", text: "Second carriage, beside the accessible doors. I moved there only after a coffee spilled near my original seat, so my reservation number points to the wrong place." },
      { speaker: "Agent", text: "I will note both locations. The yard team reports in batches, usually within ninety minutes. Please do not come immediately; a claim number is not confirmation that we have the bag." },
      { speaker: "David", text: "Understood. My work laptop is encrypted, but my passport is inside and I fly tomorrow evening. Is there any way to flag the deadline?" },
      { speaker: "Agent", text: "I can mark it time-sensitive, not guaranteed. If it is logged before six, collect it from platform one with photo identification. After six, secured items move to the main terminal office and require an appointment." },
    ],
    transcript:
      "David saw his backpack remain on a train bound for the service yard. His reservation identifies an earlier seat, so he clarifies that he moved to the accessible doors in the second carriage. The agent warns him to wait for confirmation, flags his passport-related deadline, and explains that collection location depends on whether the item is logged before or after 6 p.m.",
  },
  q("p1q1", HEADER, [{ text: "Why does the agent say David's distinction is helpful?" }],
    "Why does the agent say David's distinction is helpful?",
    ["It establishes that the bag may still be visible and recoverable.", "It proves the railway is legally responsible for the bag.", "It allows David to enter the service yard himself.", "It confirms that cleaning staff have already logged the bag."], 0),
  q("p1q2", HEADER, [{ text: "Why could David's reservation information mislead the search team?" }],
    "Why could David's reservation information mislead the search team?",
    ["He boarded a different train than the one on his ticket.", "He changed places after an incident near his first seat.", "The accessible carriage was removed at Oakville.", "He purchased the reservation after leaving the train."], 1),
  q("p1q3", HEADER, [{ text: "What is David cautioned not to assume?" }],
    "What is David cautioned not to assume?",
    ["That the service yard operates in the evening.", "That his laptop can be identified by its encryption.", "That receiving a claim number means the property was found.", "That photo identification will be accepted at the terminal."], 2),
  q("p1q4", HEADER, [{ text: "What most directly makes the request time-sensitive?" }],
    "What most directly makes the request time-sensitive?",
    ["The laptop belongs to his employer.", "His train reservation expires tonight.", "The leather bag may be damaged during cleaning.", "He needs the passport for travel the following day."], 3),
  q("p1q5", HEADER, [{ text: "What does the agent imply about the ninety-minute estimate?" }],
    "What does the agent imply about the ninety-minute estimate?",
    ["It is a typical reporting interval rather than a recovery promise.", "It is the maximum time David may wait at platform one.", "It applies only when a passenger knows the exact seat number.", "It is a deadline after which unclaimed items are discarded."], 0),
  q("p1q6", HEADER, [{ text: "Why is David unable to retrieve the bag immediately?" }],
    "Why is David unable to retrieve the bag immediately?",
    ["His photo identification is inside the backpack.", "The train is in a non-public operational area.", "The customer-service office has closed early.", "Cleaning staff are prohibited from handling passports."], 1),
  q("p1q7", HEADER, [{ text: "What can the agent do about David's flight?" }],
    "What can the agent do about David's flight?",
    ["Guarantee the bag will be searched before all others.", "Issue temporary travel documentation at the station.", "Record the urgency without promising a result.", "Keep the platform office open beyond six o'clock."], 2),
  q("p1q8", HEADER, [{ text: "What determines where David would collect the bag?" }],
    "What determines where David would collect the bag?",
    ["Whether the laptop can be unlocked.", "Whether he books an appointment online.", "Which carriage the cleaning team searches first.", "The time at which the property is officially logged."], 3),

  /* ---------------- PART 2 — Daily Life Conversation (5 questions) ---------------- */
  {
    id: "p2-instr",
    kind: "instruction",
    headerTitle: "Mock Test - Listening Part 2: Listening to a Daily Life Conversation",
    sectionTitle: "Listening to a Daily Life Conversation",
    bullets: [
      "You will hear a conversation. You will hear it only once.",
      "Then you will answer 5 questions. Choose the best answer to each question.",
    ],
  },
  {
    id: "p2-audio",
    kind: "audio",
    audioSrc: "/audio/listening-1/p2-audio.mp3",
    headerTitle: "Mock Test - Listening Part 2: Listening to a Daily Life Conversation",
    instruction:
      "Listen to the conversation. You will hear the conversation only once. It is about 30 to 60 seconds long.",
    blueprint: LISTENING_BLUEPRINT.dailyConversation,
    script: [
      { speaker: "Maya", text: "Hey Sam, are we still on for the hiking trip on Saturday?" },
      { speaker: "Sam", text: "Definitely. But the forecast says it might rain in the morning, so maybe we start after lunch?" },
      { speaker: "Maya", text: "Good idea. Let's meet at one. I'll bring sandwiches if you bring water and snacks." },
      { speaker: "Sam", text: "Deal. Should we take the Ridge Trail again or try the new Lakeside route?" },
      { speaker: "Maya", text: "Let's try Lakeside. It's longer, but my sister said the views are amazing. I'll drive." },
      { speaker: "Sam", text: "Perfect. I'll text you the trail map tonight." },
    ],
    transcript:
      "Maya and Sam plan a Saturday hike. Because of possible morning rain they will start after lunch, meeting at 1 p.m. Maya brings sandwiches; Sam brings water and snacks. They choose the new, longer Lakeside route for its views, and Maya will drive.",
  },
  q("p2q1", "Mock Test - Listening Part 2: Listening to a Daily Life Conversation", [{ text: "What are the speakers planning?" }],
    "What are the speakers planning?",
    ["A dinner party.", "A weekend hiking trip.", "A road trip to the city.", "A birthday celebration."], 1),
  q("p2q2", "Mock Test - Listening Part 2: Listening to a Daily Life Conversation", [{ text: "Why will they start after lunch?" }],
    "Why will they start after lunch?",
    ["They have morning work.", "Rain is expected in the morning.", "The trail opens at noon.", "They want to sleep in."], 1),
  q("p2q3", "Mock Test - Listening Part 2: Listening to a Daily Life Conversation", [{ text: "What will Maya bring?" }],
    "What will Maya bring?",
    ["Water and snacks.", "Sandwiches.", "A trail map.", "Hiking poles."], 1),
  q("p2q4", "Mock Test - Listening Part 2: Listening to a Daily Life Conversation", [{ text: "Which trail do they decide to take?" }],
    "Which trail do they decide to take?",
    ["The Ridge Trail.", "The Lakeside route.", "The Forest loop.", "The Summit path."], 1),
  q("p2q5", "Mock Test - Listening Part 2: Listening to a Daily Life Conversation", [{ text: "How will they get there?" }],
    "How will they get there?",
    ["By bus.", "Maya will drive.", "Sam will drive.", "They will bike."], 1),

  /* ---------------- PART 3 — Listening for Information (6 questions) ---------------- */
  {
    id: "p3-instr",
    kind: "instruction",
    headerTitle: "Mock Test - Listening Part 3: Listening for Information",
    sectionTitle: "Listening for Information",
    bullets: [
      "You will hear an informational conversation. You will hear it only once.",
      "Then you will answer 6 questions. Choose the best answer to each question.",
    ],
  },
  {
    id: "p3-audio",
    kind: "audio",
    audioSrc: "/audio/listening-1/p3-audio.mp3",
    headerTitle: "Mock Test - Listening Part 3: Listening for Information",
    instruction:
      "Listen to the conversation. You will hear the conversation only once. It is about 45 to 90 seconds long.",
    blueprint: LISTENING_BLUEPRINT.customerService,
    script: [
      { speaker: "Patron", text: "Hi, I'd like to sign up for a library membership. What do I need?" },
      { speaker: "Librarian", text: "Just a piece of photo ID and proof of address, like a utility bill. Membership is free for residents." },
      { speaker: "Patron", text: "Great. How many books can I borrow at once?" },
      { speaker: "Librarian", text: "Up to twenty items, including books, DVDs, and audiobooks, for three weeks. You can renew twice online." },
      { speaker: "Patron", text: "And if I return something late?" },
      { speaker: "Librarian", text: "There are no late fees anymore, but if an item is thirty days overdue, we bill you the replacement cost. You can also access e-books through our app." },
    ],
    transcript:
      "A librarian explains membership: free for residents with photo ID and proof of address. Members borrow up to 20 items for three weeks, renewable twice online. No late fees, but items 30 days overdue are billed at replacement cost. E-books are available via the app.",
  },
  q("p3q1", "Mock Test - Listening Part 3: Listening for Information", [{ text: "What does the patron want to do?" }],
    "What does the patron want to do?",
    ["Return a book.", "Sign up for a membership.", "Apply for a job.", "Book a study room."], 1),
  q("p3q2", "Mock Test - Listening Part 3: Listening for Information", [{ text: "What documents are required?" }],
    "What documents are required?",
    ["A passport only.", "Photo ID and proof of address.", "A credit card.", "A student card."], 1),
  q("p3q3", "Mock Test - Listening Part 3: Listening for Information", [{ text: "How much does membership cost for residents?" }],
    "How much does membership cost for residents?",
    ["Ten dollars a year.", "It is free.", "Five dollars a month.", "It depends on age."], 1),
  q("p3q4", "Mock Test - Listening Part 3: Listening for Information", [{ text: "How many items can be borrowed at once?" }],
    "How many items can be borrowed at once?",
    ["Up to ten.", "Up to twenty.", "Up to thirty.", "Unlimited."], 1),
  q("p3q5", "Mock Test - Listening Part 3: Listening for Information", [{ text: "What happens with late returns?" }],
    "What happens with late returns?",
    ["A daily fine applies.", "There are no late fees.", "Membership is cancelled.", "A warning letter is sent."], 1),
  q("p3q6", "Mock Test - Listening Part 3: Listening for Information", [{ text: "How can members read e-books?" }],
    "How can members read e-books?",
    ["By visiting in person.", "Through the library app.", "By mail.", "They cannot."], 1),

  /* ---------------- PART 4 — News Item (5 questions) ---------------- */
  {
    id: "p4-instr",
    kind: "instruction",
    headerTitle: "Mock Test - Listening Part 4: Listening to a News Item",
    sectionTitle: "Listening to a News Item",
    bullets: [
      "You will hear a news item. You will hear it only once.",
      "Then you will answer 5 questions. Choose the best answer to each question.",
    ],
  },
  {
    id: "p4-audio",
    kind: "audio",
    audioSrc: "/audio/listening-1/p4-audio.mp3",
    headerTitle: "Mock Test - Listening Part 4: Listening to a News Item",
    instruction: "Listen to the news item. You will hear it only once. It is about 60 to 120 seconds long.",
    blueprint: LISTENING_BLUEPRINT.newsReport,
    script: [
      { speaker: "Reporter", text: "Starting next month, the city will launch a new curbside composting program for all households. Residents will receive a green bin for food scraps and yard waste, collected every week. The city hopes to reduce landfill waste by forty percent within two years. Bins will be delivered free of charge, and an information booklet will explain what can be composted. Officials say the program will also create about fifty new jobs at the local processing facility." },
    ],
    transcript:
      "The city will launch weekly curbside composting next month. Households get a free green bin for food and yard waste. The goal is to cut landfill waste by 40% in two years. An info booklet explains accepted materials, and the program will create about 50 jobs at the processing facility.",
  },
  q("p4q1", "Mock Test - Listening Part 4: Listening to a News Item", [{ text: "What is the news item mainly about?" }],
    "What is the news item mainly about?",
    ["A new recycling law.", "A new curbside composting program.", "A landfill closure.", "A water conservation plan."], 1),
  q("p4q2", "Mock Test - Listening Part 4: Listening to a News Item", [{ text: "How often will the green bins be collected?" }],
    "How often will the green bins be collected?",
    ["Daily.", "Every week.", "Twice a month.", "Once a month."], 1),
  q("p4q3", "Mock Test - Listening Part 4: Listening to a News Item", [{ text: "What is the city's waste-reduction goal?" }],
    "What is the city's waste-reduction goal?",
    ["20% in one year.", "40% within two years.", "50% within five years.", "10% within a year."], 1),
  q("p4q4", "Mock Test - Listening Part 4: Listening to a News Item", [{ text: "How much will the bins cost residents?" }],
    "How much will the bins cost residents?",
    ["Twenty dollars.", "Nothing — they are free.", "A small monthly fee.", "It varies by household."], 1),
  q("p4q5", "Mock Test - Listening Part 4: Listening to a News Item", [{ text: "What additional benefit is mentioned?" }],
    "What additional benefit is mentioned?",
    ["Lower property taxes.", "About fifty new jobs.", "Free garden tools.", "A new city park."], 1),

  /* ---------------- PART 5 — Discussion (8 questions) ---------------- */
  {
    id: "p5-instr",
    kind: "instruction",
    headerTitle: "Mock Test - Listening Part 5: Listening to a Discussion",
    sectionTitle: "Listening to a Discussion",
    bullets: [
      "You will hear a discussion among three people. You will hear it only once.",
      "Then you will answer 8 questions. Choose the best answer to each question.",
    ],
  },
  {
    id: "p5-audio",
    kind: "audio",
    audioSrc: "/audio/listening-1/p5-audio.mp3",
    headerTitle: "Mock Test - Listening Part 5: Listening to a Discussion",
    instruction:
      "Listen to the discussion. You will hear it only once. It is about 60 to 120 seconds long.",
    blueprint: LISTENING_BLUEPRINT.workplaceMeeting,
    script: [
      { speaker: "Lena", text: "So the proposal is to move our team to a four-day work week. I think it could really boost morale." },
      { speaker: "Raj", text: "I like the idea, but I worry about client coverage on Fridays. Someone still needs to answer calls." },
      { speaker: "Tom", text: "We could rotate, so half the team is off Friday and half is off Monday. That keeps the office open five days." },
      { speaker: "Lena", text: "That's smart. Studies show people are often more productive when they work fewer, focused hours." },
      { speaker: "Raj", text: "True, but we'd need clear goals so work doesn't just spill into evenings." },
      { speaker: "Tom", text: "Agreed. Let's pilot it for three months and measure output and customer satisfaction before deciding." },
      { speaker: "Lena", text: "Perfect. I'll draft a plan and share it with everyone by Friday." },
    ],
    transcript:
      "Three colleagues discuss a four-day work week. Lena supports it for morale and productivity. Raj worries about Friday client coverage and evening spillover. Tom proposes a rotation so the office stays open five days, and suggests a three-month pilot measuring output and customer satisfaction. Lena will draft a plan.",
  },
  q("p5q1", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "What is the main topic of the discussion?" }],
    "What is the main topic of the discussion?",
    ["Hiring new staff.", "Switching to a four-day work week.", "Moving to a new office.", "Cutting the budget."], 1),
  q("p5q2", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "Why does Lena support the idea?" }],
    "Why does Lena support the idea?",
    ["It saves money.", "It could boost morale and productivity.", "Clients requested it.", "It reduces travel."], 1),
  q("p5q3", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "What is Raj's main concern?" }],
    "What is Raj's main concern?",
    ["The cost of equipment.", "Client coverage on Fridays.", "Office temperature.", "Team size."], 1),
  q("p5q4", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "What solution does Tom suggest for coverage?" }],
    "What solution does Tom suggest for coverage?",
    ["Hiring temps.", "Rotating days off.", "Closing on Fridays.", "Outsourcing calls."], 1),
  q("p5q5", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "What does Raj say is needed to avoid overwork?" }],
    "What does Raj say is needed to avoid overwork?",
    ["More holidays.", "Clear goals.", "A bigger team.", "New software."], 1),
  q("p5q6", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "How long is the proposed pilot?" }],
    "How long is the proposed pilot?",
    ["One month.", "Three months.", "Six months.", "One year."], 1),
  q("p5q7", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "What will be measured during the pilot?" }],
    "What will be measured during the pilot?",
    ["Only revenue.", "Output and customer satisfaction.", "Employee attendance only.", "Office expenses."], 1),
  q("p5q8", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "What will Lena do next?" }],
    "What will Lena do next?",
    ["Cancel the plan.", "Draft a plan and share it by Friday.", "Interview candidates.", "Book a meeting room."], 1),

  /* ---------------- PART 6 — Viewpoints (6 questions) ---------------- */
  {
    id: "p6-instr",
    kind: "instruction",
    headerTitle: "Mock Test - Listening Part 6: Listening to Viewpoints",
    sectionTitle: "Listening to Viewpoints",
    bullets: [
      "You will hear a person presenting different viewpoints. You will hear it only once.",
      "Then you will answer 6 questions. Choose the best answer to each question.",
    ],
  },
  {
    id: "p6-audio",
    kind: "audio",
    audioSrc: "/audio/listening-1/p6-audio.mp3",
    headerTitle: "Mock Test - Listening Part 6: Listening to Viewpoints",
    instruction:
      "Listen to the passage. You will hear it only once. It presents contrasting perspectives and is about 2 to 4 minutes long.",
    blueprint: LISTENING_BLUEPRINT.publicTalk,
    script: [
      { speaker: "Speaker", text: "There's ongoing debate about online learning in universities. Supporters argue it increases access: students in remote areas or with jobs can attend lectures anytime, and recorded classes let them review difficult material. Critics, however, point out that online formats can weaken engagement. Without face-to-face contact, some students feel isolated and are more likely to fall behind. There's also concern about unequal internet access, which can disadvantage lower-income students. A middle view suggests a blended model, combining in-person seminars for discussion with online lectures for flexibility, may capture the benefits of both while reducing the drawbacks." },
    ],
    transcript:
      "The speaker outlines the online-learning debate. Supporters cite greater access and the ability to review recorded lectures. Critics note weaker engagement, isolation, and unequal internet access harming lower-income students. A blended model — in-person seminars plus online lectures — is offered as a balanced compromise.",
  },
  q("p6q1", "Mock Test - Listening Part 6: Listening to Viewpoints", [{ text: "What is the passage mainly about?" }],
    "What is the passage mainly about?",
    ["The cost of tuition.", "Debate over online learning.", "How to apply to university.", "Choosing a major."], 1),
  q("p6q2", "Mock Test - Listening Part 6: Listening to Viewpoints", [{ text: "What benefit do supporters mention?" }],
    "What benefit do supporters mention?",
    ["Cheaper textbooks.", "Increased access and flexibility.", "Smaller class sizes.", "Better sports facilities."], 1),
  q("p6q3", "Mock Test - Listening Part 6: Listening to Viewpoints", [{ text: "Why is reviewing recorded lectures useful?" }],
    "Why is reviewing recorded lectures useful?",
    ["It saves paper.", "Students can revisit difficult material.", "It replaces exams.", "It shortens the course."], 1),
  q("p6q4", "Mock Test - Listening Part 6: Listening to Viewpoints", [{ text: "What concern do critics raise about engagement?" }],
    "What concern do critics raise about engagement?",
    ["Classes are too long.", "Students may feel isolated and fall behind.", "Teachers earn less.", "Campuses become crowded."], 1),
  q("p6q5", "Mock Test - Listening Part 6: Listening to Viewpoints", [{ text: "Which group may be disadvantaged by unequal internet access?" }],
    "Which group may be disadvantaged by unequal internet access?",
    ["International students.", "Lower-income students.", "Graduate students.", "Part-time teachers."], 1),
  q("p6q6", "Mock Test - Listening Part 6: Listening to Viewpoints", [{ text: "What compromise does the speaker suggest?" }],
    "What compromise does the speaker suggest?",
    ["Ending online classes.", "A blended learning model.", "Longer semesters.", "Mandatory attendance."], 1),

  /* ---- Result ---- */
  { id: "result", kind: "result", headerTitle: "Mock Test - Listening Results" },
]

export const listeningTest: MockTest = {
  id: "listening-1",
  title: "CELPIP Listening — Full Practice Test 1",
  section: "listening",
  description:
    "A complete CELPIP-style Listening test covering all six parts: Problem Solving, Daily Life, Information, News, Discussion, and Viewpoints.",
  durationLabel: "47–55 min",
  questionCount: 38,
  steps,
}

export const mockTests: MockTest[] = [listeningTest]

export function getMockTest(id: string): MockTest | undefined {
  return mockTests.find((t) => t.id === id)
}
