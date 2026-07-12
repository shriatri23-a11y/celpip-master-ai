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
      "Listen to the conversation. You will hear the conversation only once. It is about 45 to 75 seconds long.",
    blueprint: LISTENING_BLUEPRINT.dailyConversation,
    script: [
      { speaker: "Maya", text: "Hey Sam, are we still on for the hiking trip on Saturday? I've been looking forward to it all week." },
      { speaker: "Sam", text: "Definitely, though I checked the forecast this morning and there's a good chance of rain before noon. Maybe we push the start to after lunch?" },
      { speaker: "Maya", text: "That works for me. Let's aim for one o'clock — that gives the trails time to dry out a little too. I'll pack sandwiches for both of us." },
      { speaker: "Sam", text: "Great. In that case I'll bring water, some trail mix, and my first-aid kit, just in case. Are we doing the Ridge Trail again?" },
      { speaker: "Maya", text: "Actually, my sister hiked the new Lakeside route last weekend and said the views over the valley are incredible. It's about two kilometres longer, but I think it's worth it." },
      { speaker: "Sam", text: "I'm up for the challenge. Should we ask Priya to come? She's mentioned wanting to join us." },
      { speaker: "Maya", text: "I already texted her, but she's visiting her parents this weekend, so maybe next time. I'll drive and swing by your place around twelve thirty." },
      { speaker: "Sam", text: "Sounds perfect. I'll send you the trail map and the parking details tonight." },
    ],
    transcript:
      "Maya and Sam confirm a Saturday hike. Because rain is likely before noon, they move the start to 1 p.m. Maya will pack sandwiches; Sam will bring water, trail mix, and a first-aid kit. Instead of the Ridge Trail they choose the new, longer Lakeside route for its valley views. Priya cannot come because she is visiting her parents, and Maya will drive, picking Sam up at 12:30.",
  },
  q("p2q1", "Mock Test - Listening Part 2: Listening to a Daily Life Conversation", [{ text: "What are the speakers mainly planning?" }],
    "What are the speakers mainly planning?",
    ["A dinner party.", "A cycling race.", "A weekend hiking trip.", "A camping weekend."], 2),
  q("p2q2", "Mock Test - Listening Part 2: Listening to a Daily Life Conversation", [{ text: "Why do they decide to start after lunch?" }],
    "Why do they decide to start after lunch?",
    ["Rain is likely in the morning.", "Maya has to work.", "The trail opens at noon.", "Sam tends to wake up late."], 0),
  q("p2q3", "Mock Test - Listening Part 2: Listening to a Daily Life Conversation", [{ text: "What does Sam say he will bring?" }],
    "What does Sam say he will bring?",
    ["Sandwiches for both of them.", "Only a trail map.", "Hiking poles and a tent.", "Water, trail mix, and a first-aid kit."], 3),
  q("p2q4", "Mock Test - Listening Part 2: Listening to a Daily Life Conversation", [{ text: "Why do they choose the Lakeside route?" }],
    "Why do they choose the Lakeside route?",
    ["It is shorter and easier.", "Maya's sister praised its valley views.", "It is closest to the parking lot.", "It is the only trail open on Saturday."], 1),
  q("p2q5", "Mock Test - Listening Part 2: Listening to a Daily Life Conversation", [{ text: "Why will Priya not join them?" }],
    "Why will Priya not join them?",
    ["She does not enjoy hiking.", "She has to work that day.", "She is visiting her parents.", "She was never invited."], 2),

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
      { speaker: "Patron", text: "Hi, I'd like to sign up for a library membership. Could you tell me what I need to bring?" },
      { speaker: "Librarian", text: "Of course. You'll need one piece of photo identification and something showing your current address, like a utility bill or a bank statement. Membership is free for anyone living in the city." },
      { speaker: "Patron", text: "That's easier than I expected. Once I'm a member, how many items can I borrow at a time?" },
      { speaker: "Librarian", text: "You can borrow up to twenty items at once — that includes books, DVDs, and audiobooks — and you keep them for three weeks. As long as no one else has requested an item, you can renew it twice online or through our app." },
      { speaker: "Patron", text: "Good to know. And what happens if I return something late?" },
      { speaker: "Librarian", text: "We actually stopped charging daily late fees a couple of years ago. However, if an item is more than thirty days overdue, the system automatically bills you the replacement cost. The charge is cancelled the moment you bring the item back." },
      { speaker: "Patron", text: "That seems fair. One last thing — can I read e-books without coming in?" },
      { speaker: "Librarian", text: "Absolutely. Once your card is active, download our app, sign in with your card number, and you can borrow e-books and digital magazines from home." },
    ],
    transcript:
      "A librarian explains membership: it is free for city residents who bring photo ID and proof of address. Members borrow up to 20 items for three weeks, renewable twice online if unrequested. Daily late fees were abolished, but items over 30 days overdue are billed at replacement cost until returned. E-books and magazines can be borrowed from home through the app using the card number.",
  },
  q("p3q1", "Mock Test - Listening Part 3: Listening for Information", [{ text: "What does the patron want to do?" }],
    "What does the patron want to do?",
    ["Return an overdue book.", "Pay an outstanding fine.", "Reserve a study room.", "Sign up for a membership."], 3),
  q("p3q2", "Mock Test - Listening Part 3: Listening for Information", [{ text: "What two documents are required?" }],
    "What two documents are required?",
    ["Photo ID and proof of address.", "A passport and a photograph.", "A credit card and ID.", "A student card only."], 0),
  q("p3q3", "Mock Test - Listening Part 3: Listening for Information", [{ text: "How many items can be borrowed at once?" }],
    "How many items can be borrowed at once?",
    ["Up to ten.", "Up to fifteen.", "Up to twenty.", "There is no limit."], 2),
  q("p3q4", "Mock Test - Listening Part 3: Listening for Information", [{ text: "Under what condition can an item be renewed?" }],
    "Under what condition can an item be renewed?",
    ["Only by phoning the branch.", "Twice online, if no one else has requested it.", "Only once, and only in person.", "Items can never be renewed."], 1),
  q("p3q5", "Mock Test - Listening Part 3: Listening for Information", [{ text: "What happens if an item is more than thirty days overdue?" }],
    "What happens if an item is more than thirty days overdue?",
    ["A daily fine is added.", "The membership is suspended.", "A warning letter is mailed.", "The replacement cost is billed until it is returned."], 3),
  q("p3q6", "Mock Test - Listening Part 3: Listening for Information", [{ text: "How can the patron read e-books from home?" }],
    "How can the patron read e-books from home?",
    ["By signing in to the app with the card number.", "By visiting the branch each time.", "By mailing a request form.", "E-books are not offered."], 0),

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
      { speaker: "Reporter", text: "In local news, the city council has approved a new curbside composting program that will begin next month for all single-family households. Under the program, residents will receive a green bin for food scraps, yard trimmings, and other organic waste, which will be collected every week on the same day as their regular garbage. City officials say the initiative is designed to divert organic material away from the landfill, and they hope to cut the amount of waste sent there by forty percent within two years." },
      { speaker: "Reporter", text: "The green bins will be delivered free of charge over the coming weeks, and each household will also receive an information booklet explaining exactly what can and cannot be composted. Items such as meat bones and dairy will now be accepted, but plastic bags — even the so-called compostable ones — will not be. The collected material will be turned into soil for city parks and community gardens, and sold to local farms at a reduced price. Officials add that the new processing facility on the east side is expected to create about fifty permanent jobs. Residents with questions can call the city's waste-management hotline or visit its website." },
    ],
    transcript:
      "The city council has approved a curbside composting program starting next month for single-family homes. A free green bin for food scraps and yard waste will be collected weekly on the regular garbage day, aiming to cut landfill waste by 40% within two years. An information booklet lists accepted items (including meat and dairy) and banned ones (all plastic bags, even compostable). The compost becomes soil for parks and is sold cheaply to farms, and a new east-side facility will create about fifty permanent jobs.",
  },
  q("p4q1", "Mock Test - Listening Part 4: Listening to a News Item", [{ text: "What is the news item mainly about?" }],
    "What is the news item mainly about?",
    ["A ban on plastic bags.", "A new curbside composting program.", "The closure of a landfill.", "A garbage-collection strike."], 1),
  q("p4q2", "Mock Test - Listening Part 4: Listening to a News Item", [{ text: "How often will the green bins be collected?" }],
    "How often will the green bins be collected?",
    ["Weekly, on the regular garbage day.", "Every two weeks.", "Twice a week.", "Once a month."], 0),
  q("p4q3", "Mock Test - Listening Part 4: Listening to a News Item", [{ text: "What is the city's waste-reduction goal?" }],
    "What is the city's waste-reduction goal?",
    ["20% within one year.", "30% within five years.", "40% within two years.", "50% within three years."], 2),
  q("p4q4", "Mock Test - Listening Part 4: Listening to a News Item", [{ text: "Which item will NOT be accepted in the green bin?" }],
    "Which item will NOT be accepted in the green bin?",
    ["Meat bones.", "Dairy products.", "Yard trimmings.", "Compostable plastic bags."], 3),
  q("p4q5", "Mock Test - Listening Part 4: Listening to a News Item", [{ text: "What economic benefit does the report mention?" }],
    "What economic benefit does the report mention?",
    ["About fifty permanent jobs.", "Lower property taxes.", "Free garden tools for residents.", "A new downtown park."], 0),

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
      { speaker: "Lena", text: "So, the proposal on the table is to move our whole team to a four-day work week. Honestly, I think it could do wonders for morale — a few people are close to burning out." },
      { speaker: "Raj", text: "I like the idea in principle. My worry is client coverage. A lot of our accounts expect someone to answer their calls on Fridays, and if the whole office is closed, we could lose their trust." },
      { speaker: "Tom", text: "What if we don't all take the same day off? We could split the team — half take Friday, half take Monday. The office stays open five days, but each person still works only four." },
      { speaker: "Lena", text: "That's clever. And there's research suggesting people are actually more productive when they work fewer, more focused hours, because they waste less time in unnecessary meetings." },
      { speaker: "Raj", text: "That's a fair point. Still, I'd want clear, measurable goals for each week. Otherwise the work just spills into the evenings and we haven't really gained anything." },
      { speaker: "Tom", text: "Agreed. I'd suggest we run it as a three-month pilot rather than committing permanently, and track two things: our actual output, and our customer-satisfaction scores." },
      { speaker: "Lena", text: "Perfect. If both hold steady or improve, we make it permanent. If not, we go back to the old schedule with no hard feelings." },
      { speaker: "Raj", text: "I can live with that. So who's putting the proposal together?" },
      { speaker: "Lena", text: "I'll draft the plan and circulate it to everyone by Friday, and then we can vote on it at Monday's meeting." },
    ],
    transcript:
      "Three colleagues discuss switching to a four-day work week. Lena supports it because staff are burning out and productivity may rise when hours are more focused. Raj worries about losing client trust if Fridays go uncovered and insists on clear weekly goals to prevent overwork. Tom proposes staggering days off so the office stays open five days, and running a three-month pilot that measures output and customer-satisfaction scores. Lena will draft the plan by Friday for a vote at Monday's meeting.",
  },
  q("p5q1", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "What is the main topic of the discussion?" }],
    "What is the main topic of the discussion?",
    ["Hiring additional staff.", "Cutting the department budget.", "Switching to a four-day work week.", "Relocating to a new office."], 2),
  q("p5q2", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "Why does Lena support the change?" }],
    "Why does Lena support the change?",
    ["Employees are burning out and morale would improve.", "It would save the company money.", "Clients specifically requested it.", "It would shorten everyone's commute."], 0),
  q("p5q3", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "What is Raj's main concern?" }],
    "What is Raj's main concern?",
    ["The cost of new equipment.", "The office being too small.", "Tracking employee attendance.", "Losing client trust if Fridays are uncovered."], 3),
  q("p5q4", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "What solution does Tom suggest for coverage?" }],
    "What solution does Tom suggest for coverage?",
    ["Hiring temporary workers.", "Staggering days off so the office stays open five days.", "Closing the office every Friday.", "Outsourcing the phone calls."], 1),
  q("p5q5", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "Why does Lena say fewer hours can raise productivity?" }],
    "Why does Lena say fewer hours can raise productivity?",
    ["Employees can take second jobs.", "It allows the company to lower salaries.", "People focus better and waste less time in meetings.", "It reduces the number of managers needed."], 2),
  q("p5q6", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "What does Raj insist on to prevent overwork?" }],
    "What does Raj insist on to prevent overwork?",
    ["Clear, measurable weekly goals.", "A larger team.", "New scheduling software.", "Extra paid holidays."], 0),
  q("p5q7", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "How will success be judged during the pilot?" }],
    "How will success be judged during the pilot?",
    ["By total revenue only.", "By the number of meetings held.", "By employee attendance alone.", "By output and customer-satisfaction scores."], 3),
  q("p5q8", "Mock Test - Listening Part 5: Listening to a Discussion", [{ text: "What will Lena do next?" }],
    "What will Lena do next?",
    ["Cancel the proposal entirely.", "Draft the plan and circulate it before a Monday vote.", "Begin interviewing new candidates.", "Book a larger meeting room."], 1),

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
      { speaker: "Speaker", text: "Today I want to explore a question that universities around the world are still wrestling with: what role should online learning play in higher education? Over the past few years, opinions have hardened into several distinct camps, and it's worth understanding each of them before rushing to a conclusion." },
      { speaker: "Speaker", text: "Let's begin with the strongest supporters. For them, online learning is fundamentally about access. A student who lives in a rural town hours from the nearest campus, a parent juggling childcare, or someone working a full-time job — all of these people can now attend lectures that would once have been completely out of reach. Because most online lectures are recorded, students can also pause, rewind, and review difficult material as many times as they need, rather than scrambling to copy everything down in a single live session. Supporters argue that this flexibility doesn't just help a few individuals; it can widen the pool of who gets a degree at all, and that, they say, is a matter of fairness." },
      { speaker: "Speaker", text: "Critics, however, are far less enthusiastic. Their central objection is that learning is a social activity, and something important is lost when it moves onto a screen. In a physical classroom, a puzzled expression or a raised hand can change the direction of a whole discussion. Online, that spontaneous back-and-forth often disappears. Critics also warn that students who are already struggling tend to fall behind faster when they're isolated at home, with no classmates nearby to keep them motivated. And there's a practical problem they're quick to highlight: not every student has a fast, reliable internet connection or a quiet place to study. A learner in a crowded household, sharing one slow connection, is at a real disadvantage compared with a classmate who has a private room and fast broadband. Far from levelling the playing field, they argue, a poorly designed online program can actually widen the gap between wealthier and lower-income students." },
      { speaker: "Speaker", text: "There's a third group that resists both extremes. These commentators accept that online learning is neither a miracle nor a disaster; its value, they insist, depends almost entirely on how it is used. A lecture that simply films a professor talking for an hour is unlikely to inspire anyone, whether it's watched in a hall or on a laptop. But a course that uses short recorded segments for content, and then reserves live time for genuine discussion and problem-solving, can be more effective than a traditional lecture ever was." },
      { speaker: "Speaker", text: "This leads naturally to what many now call the blended, or hybrid, model. The idea is straightforward: deliver the core information through online lectures that students watch on their own schedule, then bring everyone together — in person or in small live sessions — for the parts that truly benefit from human interaction, such as debate, feedback, and hands-on practice. Supporters of this approach believe it captures the flexibility that enthusiasts love while preserving the engagement that critics rightly value." },
      { speaker: "Speaker", text: "So where does that leave us? The honest answer is that the debate is less about technology and more about design and intention. Online tools can expand opportunity or deepen inequality; they can enrich a course or hollow it out. The real task facing universities, then, is not simply to decide whether to go online, but to decide how — and to make sure that no group of students is left behind in the process." },
    ],
    transcript:
      "The speaker examines the debate over online learning in universities. Supporters emphasize access and flexibility, noting that recorded lectures can be reviewed and that more people can earn a degree. Critics counter that engagement suffers online, that isolated struggling students fall behind, and that unequal internet access disadvantages lower-income learners. A third, moderate group argues the value of online learning depends on how it is designed. This supports a blended model — online lectures for content plus in-person time for discussion — and the speaker concludes the key question is not whether to go online, but how, so that no students are left behind.",
  },
  q("p6q1", "Mock Test - Listening Part 6: Listening to Viewpoints", [{ text: "What is the speaker's main purpose?" }],
    "What is the speaker's main purpose?",
    ["To argue that online learning should replace campuses.", "To examine different viewpoints on online learning in universities.", "To explain how to enrol in an online course.", "To compare tuition costs across universities."], 1),
  q("p6q2", "Mock Test - Listening Part 6: Listening to Viewpoints", [{ text: "According to supporters, what is the main advantage of online learning?" }],
    "According to supporters, what is the main advantage of online learning?",
    ["Lower tuition fees.", "Smaller class sizes.", "Better campus facilities.", "Greater access and the ability to review lectures."], 3),
  q("p6q3", "Mock Test - Listening Part 6: Listening to Viewpoints", [{ text: "What concern do critics raise about struggling students?" }],
    "What concern do critics raise about struggling students?",
    ["They fall behind faster when isolated at home.", "They watch lectures too many times.", "They demand smaller classes.", "They avoid recorded material."], 0),
  q("p6q4", "Mock Test - Listening Part 6: Listening to Viewpoints", [{ text: "Which group do critics say is most disadvantaged by unequal internet access?" }],
    "Which group do critics say is most disadvantaged by unequal internet access?",
    ["International students.", "Graduate students.", "Lower-income students.", "Part-time instructors."], 2),
  q("p6q5", "Mock Test - Listening Part 6: Listening to Viewpoints", [{ text: "What does the third, moderate group mainly believe?" }],
    "What does the third, moderate group mainly believe?",
    ["Online learning is always superior to classrooms.", "The value of online learning depends on how it is designed.", "Online learning should be banned outright.", "Recorded lectures should replace all teaching."], 1),
  q("p6q6", "Mock Test - Listening Part 6: Listening to Viewpoints", [{ text: "How does the speaker describe the blended model?" }],
    "How does the speaker describe the blended model?",
    ["Ending all in-person classes.", "Recording every lecture and nothing more.", "Making daily attendance mandatory.", "Combining online lectures with in-person discussion."], 3),

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
