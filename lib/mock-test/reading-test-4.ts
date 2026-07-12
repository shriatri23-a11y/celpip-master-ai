import type { MockTest, TestStep, ReadingStep } from "./types"
import type { ReadingDiagram } from "@/lib/reading-diagram"

const HEADER_BASE = "Advanced Mock Exam 4 - Reading"

function reading(
  id: string,
  header: string,
  instruction: string,
  passage: string[],
  answerSeconds: number,
  questions: {
    prompt: string
    options: string[]
    correctIndex: number
  }[],
  diagram?: ReadingDiagram,
): ReadingStep {
  return {
    id,
    kind: "reading",
    headerTitle: header,
    instruction,
    passage,
    answerSeconds,
    ...(diagram ? { diagram } : {}),
    questions: questions.map((q, qi) => ({
      id: `${id}-q${qi}`,
      prompt: q.prompt,
      correctOptionId: `${id}-q${qi}-${q.correctIndex}`,
      options: q.options.map((text, i) => ({ id: `${id}-q${qi}-${i}`, text })),
    })),
  }
}

const steps: TestStep[] = [
  {
    id: "reading4-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} - CELPIP Test`,
    sectionTitle: "Reading Test Instructions",
    bullets: [
      "This is an advanced simulation. Passages are longer and more abstract, sentences are more complex, and distractors are deliberately close to the correct answer.",
      "Many questions test inference, tone, author's purpose, and the meaning of words in context — not just literal recall.",
      "Watch for options that are true statements from the passage but do not answer the question asked.",
      "There are four parts and 38 questions. All questions are worth one mark.",
    ],
  },

  // ---- Part 1: Reading Correspondence (11 questions / 11 min) ----
  {
    id: "reading4-p1-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 1: Reading Correspondence`,
    sectionTitle: "Part 1 — Reading Correspondence",
    bullets: [
      "You will read two related pieces of correspondence containing subtle, layered meaning.",
      "Read carefully, then answer all 11 questions.",
      "You have 11 minutes to complete this part.",
    ],
  },
  reading(
    "reading4-p1",
    `${HEADER_BASE} Part 1: Reading Correspondence`,
    "Read the two messages below, then choose the best answer to each question.",
    [
      "MESSAGE 1",
      "Dear Ms. Okonkwo,",
      "I am writing in my capacity as chair of the Maple Ridge Residents' Association regarding the proposed conversion of the vacant Dellwood warehouse into a twenty-four-hour logistics depot. I want to be candid: the Association is not, as some have suggested, reflexively opposed to development. Several of us welcomed the bakery and the cycle repair shop that opened on the same street last year. Our concerns are specific and, I hope, addressable.",
      "The first is noise. A round-the-clock operation implies delivery vehicles idling and reversing through the night, and the warehouse sits barely thirty metres from a row of family homes. The second is the traffic modelling in your application, which, respectfully, appears to assume that all heavy vehicles will use the ring road. In practice, drivers routinely cut through Larch Avenue to save time, and that street has a primary school on it.",
      "We are not asking you to abandon the project. We are asking that the operating hours be capped, at least initially, and that the traffic study be revised to reflect actual driver behaviour rather than the idealised routing in the current draft. I would welcome the chance to discuss this before the planning committee meets on the 14th.",
      "Yours sincerely,",
      "Gerald Voss, Chair",
      "",
      "MESSAGE 2",
      "Dear Mr. Voss,",
      "Thank you for a letter that is a good deal more constructive than much of the correspondence we receive. Let me respond to your two points directly.",
      "On noise: I take your point about the proximity of the homes, and I am prepared to commit, in writing, to no heavy-vehicle movements between 11 p.m. and 6 a.m. for the first twelve months, after which the arrangement would be reviewed using actual noise data rather than projections. I cannot promise a permanent cap, but I can promise evidence-based review, which I hope you will accept as good faith.",
      "On traffic: you are, frankly, correct that our study assumed ring-road compliance. I have instructed our consultants to remodel using the local authority's own traffic-counter data for Larch Avenue. If, as you suspect, cut-through traffic is significant, we will fund signage and, if warranted, a loading restriction on Larch itself.",
      "What I would ask in return is that the Association not lodge a blanket objection that could stall the entire application, but instead submit these two specific conditions as proposed amendments. That way the committee can approve the project with your concerns built in, rather than being forced to choose between us.",
      "Kind regards,",
      "Amara Okonkwo, Development Director",
    ],
    660,
    [
      {
        prompt: "What is Mr. Voss's primary purpose in writing?",
        options: [
          "To demand that the warehouse project be cancelled",
          "To raise two specific, addressable concerns and request a discussion",
          "To complain that the Association was not consulted",
          "To praise the recent bakery and cycle shop openings",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why does Mr. Voss mention the bakery and cycle repair shop?",
        options: [
          "To argue that the street is already too crowded",
          "To establish that the Association is not opposed to development in general",
          "To request similar businesses instead of a depot",
          "To show that noise has already been a problem",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What specifically does Mr. Voss criticise about the traffic modelling?",
        options: [
          "It underestimates the total number of vehicles",
          "It assumes all heavy vehicles will use the ring road, ignoring cut-through routes",
          "It was prepared by unqualified consultants",
          "It ignores pedestrian crossings entirely",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does Ms. Okonkwo commit to regarding noise?",
        options: [
          "A permanent ban on all night-time operations",
          "No heavy-vehicle movements from 11 p.m. to 6 a.m. for twelve months, then an evidence-based review",
          "Soundproofing the neighbouring homes",
          "Relocating the depot away from the homes",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does Ms. Okonkwo mean by 'evidence-based review'?",
        options: [
          "A review conducted by an independent judge",
          "Revisiting the arrangement using actual measured noise data rather than projections",
          "A public vote by residents after a year",
          "A guarantee that the cap will become permanent",
        ],
        correctIndex: 1,
      },
      {
        prompt: "How does Ms. Okonkwo respond to the traffic concern?",
        options: [
          "She rejects it as speculative",
          "She concedes the point and orders remodelling using local traffic-counter data",
          "She insists the ring-road assumption is correct",
          "She refuses to alter the study before the meeting",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does Ms. Okonkwo ask of the Association in return?",
        options: [
          "A public endorsement of the project",
          "To submit the two concerns as proposed amendments rather than a blanket objection",
          "To withdraw from the planning process entirely",
          "To pay for the revised traffic study",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why does Ms. Okonkwo prefer amendments to a blanket objection?",
        options: [
          "Amendments are cheaper to process",
          "So the committee can approve the project with the concerns built in, rather than choosing sides",
          "A blanket objection would be illegal",
          "She wants to avoid meeting Mr. Voss in person",
        ],
        correctIndex: 1,
      },
      {
        prompt: "How would you best describe the tone of Ms. Okonkwo's reply?",
        options: [
          "Defensive and dismissive",
          "Conciliatory but strategically firm",
          "Apologetic and yielding on every point",
          "Formal and evasive",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Which statement best captures the relationship the two writers are trying to establish?",
        options: [
          "Adversaries preparing for a legal dispute",
          "Negotiating parties seeking a workable compromise",
          "Officials with no real disagreement",
          "A complainant and an authority who ignores him",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What can be inferred about the significance of the 14th?",
        options: [
          "It is the date the depot would open",
          "It is when the planning committee meets to decide the application",
          "It is the deadline for noise measurements",
          "It is when the twelve-month review would occur",
        ],
        correctIndex: 1,
      },
    ],
  ),

  // ---- Part 2: Reading to Apply a Diagram (8 questions / 9 min) ----
  {
    id: "reading4-p2-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 2: Reading to Apply a Diagram`,
    sectionTitle: "Part 2 — Reading to Apply a Diagram",
    bullets: [
      "You will read a comparison diagram together with a message that refers to it.",
      "Some questions require combining the diagram with conditions stated only in the message.",
      "You have 9 minutes to complete this part.",
    ],
  },
  reading(
    "reading4-p2",
    `${HEADER_BASE} Part 2: Reading to Apply a Diagram`,
    "Read the diagram comparing four coworking membership tiers and the message that refers to it. Then use the drop-down menu to choose the best option for each question.",
    [
      "Subject: Picking a membership for the new hires",
      "To: Facilities <facilities@northloop.io>",
      "From: Devi Menon <dmenon@northloop.io>",
      "",
      "Hi team,",
      "We're onboarding four contractors next month and I've summarised the coworking tiers in the diagram. A few things aren't obvious from the grid, so read this alongside it.",
      "Two of the four will be here full-time, five days a week, and they need a guaranteed desk plus a quiet place to take client calls — so a plan without a bookable meeting room won't work for them. The other two are part-time, roughly two days a week, and mainly need somewhere to sit; they don't take calls and won't use meeting rooms.",
      "Budget matters: I've been told to keep the average cost per person at or below $250 a month across all four, though individual plans can exceed that as long as the average holds. Also note the Flex tier's price is per visit, not monthly, so for anyone coming more than eight days a month it works out more expensive than Resident.",
      "Let me know what you'd recommend.",
      "Devi",
    ],
    540,
    [
      {
        prompt: "The only tier that includes bookable meeting-room hours AND a guaranteed dedicated desk is",
        options: ["Flex", "Shared", "Resident", "Executive"],
        correctIndex: 2,
      },
      {
        prompt: "For the two full-time contractors who must take client calls, the minimum suitable tier is",
        options: ["Flex", "Shared", "Resident", "any tier works"],
        correctIndex: 2,
      },
      {
        prompt: "The two part-time contractors who only need a seat are best matched to",
        options: ["Flex", "Resident", "Executive", "Shared with meeting rooms"],
        correctIndex: 0,
      },
      {
        prompt: "The Flex tier is charged",
        options: ["per month", "per visit", "per hour", "per meeting room"],
        correctIndex: 1,
      },
      {
        prompt: "A person visiting 10 days a month on Flex ($20/visit) would pay about",
        options: ["$120", "$160", "$200", "$250"],
        correctIndex: 2,
      },
      {
        prompt: "If two contractors take Resident ($320) and two take Flex at $200 each, the average cost per person is",
        options: ["$200", "$260", "$320", "$520"],
        correctIndex: 1,
      },
      {
        prompt: "Given the $250 average-cost target, the plan of two Resident and two Flex members",
        options: [
          "meets the target",
          "exceeds the target and must be revised",
          "cannot be calculated from the information given",
          "only works if all four are full-time",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Which single change would bring the average to or below $250 while still meeting every stated need?",
        options: [
          "Move the two full-timers to Shared, which has no meeting room",
          "Reduce the two part-timers' Flex visits so their monthly cost drops enough to lower the average",
          "Upgrade everyone to Executive",
          "Nothing can meet both the needs and the budget",
        ],
        correctIndex: 1,
      },
    ],
    {
      title: "Coworking Membership Tiers",
      caption: "Compare access, meeting rooms, and cost across four plans.",
      rows: [
        {
          label: "Flex",
          icon: "users",
          cells: [
            { label: "Access", lines: ["Any open seat", "No guaranteed desk"] },
            { label: "Meeting room", lines: ["None included"] },
            { label: "Cost", lines: ["$20 / visit"] },
          ],
        },
        {
          label: "Shared",
          icon: "building",
          cells: [
            { label: "Access", lines: ["Reserved seat in shared area"] },
            { label: "Meeting room", lines: ["None included"] },
            { label: "Cost", lines: ["$180 / month"] },
          ],
        },
        {
          label: "Resident",
          icon: "home",
          cells: [
            { label: "Access", lines: ["Guaranteed dedicated desk"] },
            { label: "Meeting room", lines: ["8 bookable hours / month"] },
            { label: "Cost", lines: ["$320 / month"] },
          ],
        },
        {
          label: "Executive",
          icon: "calendar",
          cells: [
            { label: "Access", lines: ["Private lockable office"] },
            { label: "Meeting room", lines: ["Unlimited bookable hours"] },
            { label: "Cost", lines: ["$650 / month"] },
          ],
        },
      ],
    },
  ),

  // ---- Part 3: Reading for Information (9 questions / 10 min) ----
  {
    id: "reading4-p3-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 3: Reading for Information`,
    sectionTitle: "Part 3 — Reading for Information",
    bullets: [
      "You will read a dense informational passage with an academic register.",
      "Read carefully, then answer all 9 questions.",
      "You have 10 minutes to complete this part.",
    ],
  },
  reading(
    "reading4-p3",
    `${HEADER_BASE} Part 3: Reading for Information`,
    "Read the passage, then choose the best answer to each question.",
    [
      "THE PARADOX OF THE 'PAPERLESS' OFFICE",
      "",
      "When digital document systems entered mainstream offices in the 1980s, forecasters confidently predicted the imminent demise of paper. The logic seemed unassailable: if documents could be created, stored, and transmitted electronically, the physical page would become a costly redundancy. Yet for roughly two decades after the prediction, office paper consumption did not fall — it rose, and steeply. Understanding why reveals something counter-intuitive about how new technologies interact with human habits.",
      "",
      "The first factor was accessibility. Before digital files, producing a clean copy of a document was laborious, so people economised: they circulated a single copy, annotated it, and passed it on. Once printing became trivially easy and cheap, the friction that had suppressed printing vanished. Employees printed drafts to read them, printed emails to file them, and printed web pages to keep them — behaviours that had no analogue in the pre-digital office because the documents themselves had not previously existed in such volume.",
      "",
      "The second factor was psychological, and it is the one researchers find most instructive. Studies of reading comprehension consistently found that, for demanding or lengthy material, people retained more and made fewer errors when reading from paper than from a screen. The tactile experience of paper — the ability to spread pages out, to write in margins, to gauge one's progress by physical thickness — supported a mode of deep reading that early screens did not. Far from being irrational, the persistence of printing reflected a genuine cognitive preference for a superior tool for certain tasks.",
      "",
      "It was only later, and gradually, that paper consumption in offices began to decline — and notably, the decline did not coincide with the arrival of better software. It coincided with the arrival of better screens. High-resolution displays, and later tablets that could be held and annotated like paper, began to erode paper's cognitive advantage. In other words, paper did not lose ground when digital storage became possible; it lost ground when the digital reading experience became good enough to rival the physical one.",
      "",
      "The episode is often cited as a cautionary tale for technological forecasting. The forecasters of the 1980s were not wrong about the capabilities of the new technology; they were wrong about the timeline and the mechanism. They assumed that a superior storage-and-transmission technology would automatically displace an older medium, overlooking that the older medium was superior at a different task — reading — and would persist until that specific advantage was neutralised. The lesson is not that predictions are futile, but that they must reckon with the particular, and sometimes hidden, tasks a technology actually performs for its users.",
    ],
    600,
    [
      {
        prompt: "What happened to office paper consumption in the two decades after digital systems arrived?",
        options: [
          "It fell sharply as predicted",
          "It rose steeply",
          "It stayed roughly constant",
          "It fell and then rose again",
        ],
        correctIndex: 1,
      },
      {
        prompt: "According to the passage, why did easy printing increase paper use?",
        options: [
          "Printers became more expensive to run",
          "The friction that had previously suppressed printing disappeared",
          "Employees were required to keep paper backups",
          "Digital files were unreliable and often lost",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Which behaviour is described as having 'no analogue' in the pre-digital office?",
        options: [
          "Circulating a single annotated copy",
          "Printing emails and web pages that had not existed in such volume before",
          "Writing in the margins of a document",
          "Storing documents in filing cabinets",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why does the author call the persistence of printing 'far from irrational'?",
        options: [
          "Because printing was cheaper than screens",
          "Because paper genuinely supported better comprehension of demanding material at the time",
          "Because employers mandated it",
          "Because digital files could not be edited",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What finally caused office paper use to decline?",
        options: [
          "The arrival of better document-storage software",
          "The arrival of high-resolution screens and tablets that rivalled paper for reading",
          "New environmental regulations",
          "The rising cost of paper",
        ],
        correctIndex: 1,
      },
      {
        prompt: "The phrase 'neutralised' (final paragraph) most nearly means",
        options: [
          "made illegal",
          "cancelled out or removed as an advantage",
          "made more powerful",
          "widely publicised",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What error did the 1980s forecasters make, according to the author?",
        options: [
          "They overestimated the capabilities of digital technology",
          "They were wrong about the timeline and mechanism, not the technology's capabilities",
          "They failed to anticipate high-resolution screens would ever exist",
          "They ignored the cost of printing",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What is the central 'paradox' referred to in the title?",
        options: [
          "That paper became more expensive as it became less used",
          "That a technology meant to reduce paper initially caused paper use to rise",
          "That offices refused to adopt digital systems",
          "That screens were worse for storage than paper",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What broader lesson does the author draw for technological forecasting?",
        options: [
          "Predictions about technology are essentially futile",
          "Forecasts must account for the particular tasks a technology actually performs for users",
          "Newer technologies always displace older ones eventually",
          "Human habits never change in response to technology",
        ],
        correctIndex: 1,
      },
    ],
  ),

  // ---- Part 4: Reading for Viewpoints (10 questions / 13 min) ----
  {
    id: "reading4-p4-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 4: Reading for Viewpoints`,
    sectionTitle: "Part 4 — Reading for Viewpoints",
    bullets: [
      "You will read an article presenting competing viewpoints, followed by a reader comment.",
      "Track precisely who holds which view — the author, proponents, skeptics, or the commenter.",
      "You have 13 minutes to complete this part.",
    ],
  },
  reading(
    "reading4-p4",
    `${HEADER_BASE} Part 4: Reading for Viewpoints`,
    "Read the article and the comment below, then choose the best answer to each question.",
    [
      "ARTICLE — SHOULD UNIVERSITIES REPLACE LECTURES WITH RECORDED VIDEO?",
      "",
      "As universities weigh the future of teaching, a contentious question has emerged: should the traditional in-person lecture be replaced by pre-recorded video that students watch on their own schedule? The debate is more subtle than its loudest voices suggest.",
      "",
      "Advocates of recorded lectures make an efficiency argument. A professor records a lecture once, and it can be watched by thousands, paused, rewound, and revisited before exams. Students who commute, work, or struggle with a second language particularly benefit from the ability to control the pace. Advocates add that freeing professors from repeating the same lecture each term allows that time to be redirected toward small-group discussion and individual feedback — arguably where the deepest learning occurs.",
      "",
      "Skeptics do not dispute that recordings are convenient, but they question what is lost. The live lecture, they argue, is not merely a delivery mechanism for information; it is a social event that creates accountability and momentum. Data from several institutions show that when attendance becomes optional, a significant share of students fall behind, intending to 'catch up later' and never doing so. The discipline imposed by a fixed schedule, skeptics contend, is not a bug but a feature — especially for younger or less experienced students who have not yet developed independent study habits.",
      "",
      "A third position, increasingly influential, rejects the framing of the debate itself. Why, its proponents ask, must the choice be between live and recorded? The so-called 'flipped classroom' has students watch recorded material before class and then use the scheduled in-person time for problem-solving, debate, and application. On this view, recording is not a replacement for the lecture hall but a way to make the time spent there far more valuable than passive listening ever was.",
      "",
      "What most participants in the debate now concede is that the format matters less than the design. A well-structured flipped course can outperform both a hall full of passive listeners and a library of unwatched videos. A poorly structured one, in either format, fails. The evidence increasingly suggests that the question 'live or recorded?' is the wrong one; the right question is whether the chosen format is matched by deliberate design that keeps students engaged and accountable.",
      "",
      "COMMENT (by a second-year student):",
      "I've experienced both, and I lean toward the skeptics — but with a twist. In my first year, two of my courses went fully recorded, and I'm embarrassed to admit I fell exactly into the trap the article describes: I told myself I'd watch everything before exams, and I ended up cramming three months of lectures into four days. It was a disaster. But my current statistics course uses the flipped model, and it's the best course I've taken. The difference isn't the videos — it's that the in-person sessions are mandatory and actually useful, so I keep up. So I'd say the article's final point is exactly right: it's not live versus recorded, it's whether the structure forces you to stay on track.",
    ],
    780,
    [
      {
        prompt: "What is the main question the article addresses?",
        options: [
          "Whether universities should charge less for online courses",
          "Whether in-person lectures should be replaced by pre-recorded video",
          "Whether professors are paid fairly for recording lectures",
          "Whether students prefer statistics to other subjects",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What efficiency argument do advocates of recorded lectures make?",
        options: [
          "Recordings are cheaper to produce than live lectures",
          "A lecture recorded once can be reused, freeing professor time for discussion and feedback",
          "Students learn faster from video than from people",
          "Recordings eliminate the need for exams",
        ],
        correctIndex: 1,
      },
      {
        prompt: "According to skeptics, what is the live lecture besides a way to deliver information?",
        options: [
          "A cheaper alternative to video",
          "A social event that creates accountability and momentum",
          "A legal requirement at most universities",
          "A chance for professors to be evaluated",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What evidence do skeptics cite about optional attendance?",
        options: [
          "Students perform better when attendance is optional",
          "A significant share of students fall behind, intending to catch up but not doing so",
          "Professors record worse lectures when attendance drops",
          "Optional attendance saves universities money",
        ],
        correctIndex: 1,
      },
      {
        prompt: "When skeptics say a fixed schedule is 'not a bug but a feature,' they mean that",
        options: [
          "Scheduling errors are actually helpful",
          "The discipline of a fixed schedule is a genuine benefit, not a flaw",
          "Software should be redesigned",
          "Students dislike flexibility",
        ],
        correctIndex: 1,
      },
      {
        prompt: "How does the 'third position' reframe the debate?",
        options: [
          "It argues recordings should be banned",
          "It rejects the either/or choice, proposing the flipped classroom that combines both",
          "It claims live lectures are always superior",
          "It says the debate cannot be resolved",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What do most participants now concede, according to the article?",
        options: [
          "That recorded video is always better",
          "That the format matters less than deliberate course design",
          "That live lectures should never change",
          "That students cannot be trusted to study alone",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Which position does the student commenter most align with?",
        options: [
          "The advocates of fully recorded lectures",
          "The skeptics, but modified by endorsing the flipped model",
          "The view that video should be banned",
          "The view that design does not matter",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does the commenter identify as the real reason the flipped statistics course works for them?",
        options: [
          "The videos are more entertaining",
          "The mandatory, useful in-person sessions keep them on track",
          "The course has no exams",
          "Statistics is an easy subject",
        ],
        correctIndex: 1,
      },
      {
        prompt: "The commenter's first-year experience serves mainly to",
        options: [
          "Prove that recorded lectures are always superior",
          "Illustrate the exact pitfall the article's skeptics warned about",
          "Show that flipped classrooms do not work",
          "Argue that exams should be abolished",
        ],
        correctIndex: 1,
      },
    ],
  ),

  {
    id: "result",
    kind: "result",
    headerTitle: `${HEADER_BASE} Results`,
  },
]

export const readingTest4: MockTest = {
  id: "reading-4",
  title: "CELPIP Reading — Advanced Practice Test 4",
  section: "reading",
  description:
    "A high-difficulty CELPIP-style Reading test with all four parts: layered Correspondence (11Q), a conditional Diagram task (8Q), a dense Information passage (9Q), and multi-voice Viewpoints (10Q) — 38 questions total. Inference, tone, and vocabulary-in-context heavy.",
  durationLabel: "55–60 min",
  questionCount: 38,
  steps,
}
