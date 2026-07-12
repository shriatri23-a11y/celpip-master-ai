import type { MockTest, TestStep, ReadingStep } from "./types"
import type { ReadingDiagram } from "@/lib/reading-diagram"

const HEADER_BASE = "Mock Test 3 - Reading"

// Helper to build a reading split step (optional diagram + passage + questions).
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
    id: "reading3-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} - CELPIP Test`,
    sectionTitle: "Reading Test Instructions",
    bullets: [
      "This Reading Test has four parts and takes approximately 55–60 minutes to complete.",
      "Each part has its own time limit shown in the header. Manage your time carefully.",
      "On the official test, once you leave a page you cannot return. In this practice test, you may review your answers.",
      "Read each passage carefully, then choose the best answer to each question.",
      "There are 38 questions in total. All questions are worth one mark each.",
    ],
  },

  // ---- Part 1: Reading Correspondence (11 questions / 11 min) ----
  {
    id: "reading3-p1-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 1: Reading Correspondence`,
    sectionTitle: "Part 1 — Reading Correspondence",
    bullets: [
      "You will read one or two pieces of correspondence (emails, letters, notes, or notices).",
      "Read the message(s) carefully, then answer all 11 questions.",
      "You have 11 minutes to complete this part.",
    ],
  },
  reading(
    "reading3-p1",
    `${HEADER_BASE} Part 1: Reading Correspondence`,
    "Read the two messages below, then choose the best answer to each question.",
    [
      "MESSAGE 1",
      "Dear Mr. Tanaka,",
      "Thank you for volunteering to coach the Eastside Junior Soccer League this season. I'm writing to confirm a few important details before our first session.",
      "Practices will be held on Wednesday evenings from 6:00 to 7:30 p.m. at Fielder Park, starting Wednesday, September 11th. Please note that due to a double-booking, we have relocated from Field 2 (near the south entrance) to Field 5, which is adjacent to the north parking lot. Field 5 is slightly larger, which should work well for the drills we have planned.",
      "You will be responsible for bringing the equipment bag to each session. I will hand it over to you at the first practice. Please remind parents and players that shin guards are mandatory and water bottles are strongly recommended, as the park's water fountain is currently being repaired.",
      "If a practice needs to be cancelled due to weather, I will notify all coaches by text message no later than 4:00 p.m. on the day of practice. Please forward any cancellations to your team's parents as soon as possible.",
      "We are grateful for your dedication. The kids are in great hands.",
      "Regards,",
      "Nadia Farouk, League Coordinator",
      "",
      "MESSAGE 2",
      "Hi Nadia,",
      "Thanks for the details — I'm excited to get started! I do have a few questions before the first session.",
      "I noticed Field 5 is near the north parking lot. Will there be enough parking on weekday evenings? A few parents mentioned it gets congested during peak hours.",
      "Also, I want to make sure I understand the cancellation process: if I receive your text at, say, 3:45 p.m., should I also post on the team's group chat, or is there an official league app or website where parents can check for updates?",
      "One more thing — my team has two players with nut allergies. Is there a first-aid kit in the equipment bag, and does it include an epinephrine auto-injector, or should I arrange for the affected families to keep one on the field during practices?",
      "Looking forward to the season!",
      "Marcus Tanaka",
    ],
    660,
    [
      {
        prompt: "Why has the practice location changed from Field 2 to Field 5?",
        options: [
          "Field 2 is under construction",
          "Field 5 is closer to the equipment storage room",
          "There was a double-booking at Field 2",
          "Parents requested a field with better lighting",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What is Marcus responsible for bringing to each practice?",
        options: [
          "Cones and training bibs",
          "The equipment bag",
          "A printed team roster",
          "A portable first-aid kit",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does Nadia say about the park's water fountain?",
        options: [
          "It has been permanently removed",
          "It is available but located near the south entrance",
          "It is currently being repaired",
          "It only works during daytime hours",
        ],
        correctIndex: 2,
      },
      {
        prompt: "By what time will Nadia notify coaches of a weather cancellation?",
        options: [
          "By 2:00 p.m.",
          "By 3:00 p.m.",
          "By 4:00 p.m.",
          "By 5:00 p.m.",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What is Marcus's concern about Field 5?",
        options: [
          "It is too far from public transit",
          "Parking near the north lot may be congested",
          "The field surface is not suitable for soccer drills",
          "It is too small for the team's drills",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does Marcus want to clarify about the cancellation process?",
        options: [
          "Whether he will be reimbursed for text message costs",
          "Whether cancellations are posted on a league app or website",
          "Whether parents are responsible for notifying the league",
          "Whether practices can be rescheduled rather than cancelled",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why does Marcus ask about the first-aid kit?",
        options: [
          "He does not have any first-aid training",
          "He wants to know if it includes epinephrine for two players with nut allergies",
          "He is concerned the equipment bag is too heavy",
          "He has a personal medical condition requiring special equipment",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What is the overall tone of Nadia's message?",
        options: [
          "Formal and demanding",
          "Grateful, informative, and encouraging",
          "Cautious and uncertain",
          "Brief and impersonal",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does Marcus's message suggest about his approach to coaching?",
        options: [
          "He is unprepared and wants Nadia to handle most responsibilities",
          "He is thorough and proactive about logistics and player safety",
          "He is reluctant to coach and has doubts about his commitment",
          "He is experienced and does not need Nadia's guidance",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What equipment item does Nadia specifically mention players must bring?",
        options: [
          "Cleats",
          "Goalkeeper gloves",
          "Shin guards",
          "A numbered jersey",
        ],
        correctIndex: 2,
      },
      {
        prompt: "Which of the following best describes the main purpose of Marcus's message?",
        options: [
          "To confirm he will attend the first practice",
          "To ask three clarifying questions about logistics and player safety",
          "To suggest changes to the practice schedule",
          "To report a problem with Field 5",
        ],
        correctIndex: 1,
      },
    ],
  ),

  // ---- Part 2: Reading to Apply a Diagram (8 questions / 9 min) ----
  {
    id: "reading3-p2-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 2: Reading to Apply a Diagram`,
    sectionTitle: "Part 2 — Reading to Apply a Diagram",
    bullets: [
      "You will read a diagram, chart, schedule, or set of instructions.",
      "Use the information provided to answer all 8 questions.",
      "You have 9 minutes to complete this part.",
    ],
  },
  reading(
    "reading3-p2",
    `${HEADER_BASE} Part 2: Reading to Apply a Diagram`,
    "Read the diagram comparing three ways to commute to work, and the email that refers to it. Then use the drop-down menu to choose the best option for each question.",
    [
      "Subject: Deciding how to get to the new office",
      "To: Sam Okafor <sokafor@brightlab.ca>",
      "From: Nadia Roy <nroy@brightlab.ca>",
      "",
      "Hi Sam,",
      "Now that we're moving to the downtown office, I've compared three ways to commute and put them in the diagram on the left.",
      "Cycling is free and the fastest in rush hour, but there's no shelter from rain and you arrive needing to change. The bus is cheap and lets you read or work on the way, but it's the slowest because of frequent stops. Driving is the most comfortable and quickest outside rush hour, but it's by far the most expensive once you add parking, and traffic makes it unpredictable in the morning.",
      "I care most about keeping costs low and arriving on time, so I'm leaning one way — what do you think?",
      "Cheers,",
      "Nadia",
    ],
    540, // 9 minutes
    [
      {
        prompt: "The option with no daily cost is",
        options: ["Cycling", "The bus", "Driving", "all cost the same"],
        correctIndex: 0,
      },
      {
        prompt: "The fastest way to commute during rush hour is",
        options: ["Cycling", "The bus", "Driving", "the bus and driving"],
        correctIndex: 0,
      },
      {
        prompt: "Someone who wants to read or work during the commute should take",
        options: ["Cycling", "The bus", "Driving", "none of the options"],
        correctIndex: 1,
      },
      {
        prompt: "The slowest option because of frequent stops is",
        options: ["Cycling", "The bus", "Driving", "cycling and the bus"],
        correctIndex: 1,
      },
      {
        prompt: "The daily cost of driving is about",
        options: ["$0", "$5", "$22", "$12"],
        correctIndex: 2,
      },
      {
        prompt: "The commute time by bus is about",
        options: ["15 minutes", "25 minutes", "45 minutes", "1 hour"],
        correctIndex: 2,
      },
      {
        prompt: "Compared with cycling, driving is",
        options: [
          "cheaper but slower",
          "the most comfortable but the most expensive",
          "free but unsheltered",
          "the fastest in rush hour",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Because Nadia wants low cost and reliable arrival times, she should most likely choose",
        options: ["Cycling", "The bus", "Driving", "Driving or the bus"],
        correctIndex: 0,
      },
    ],
    {
      title: "Ways to Commute to the Downtown Office",
      caption: "Daily one-way commute — compare features, cost, and time.",
      rows: [
        {
          label: "Cycling",
          image: "/reading-diagrams/commute-bike.png",
          icon: "bike",
          cells: [
            { label: "Features", lines: ["Fastest in rush hour", "No shelter from rain", "Arrive needing to change"] },
            { label: "Cost", lines: ["$0 / day"] },
            { label: "Time", lines: ["20 min"] },
          ],
        },
        {
          label: "Bus",
          image: "/reading-diagrams/commute-bus.png",
          icon: "bus",
          cells: [
            { label: "Features", lines: ["Can read or work", "Frequent stops", "Slowest option"] },
            { label: "Cost", lines: ["$5 / day"] },
            { label: "Time", lines: ["45 min"] },
          ],
        },
        {
          label: "Driving",
          image: "/reading-diagrams/commute-car.png",
          icon: "car",
          cells: [
            { label: "Features", lines: ["Most comfortable", "Unpredictable in traffic", "Includes parking fee"] },
            { label: "Cost", lines: ["$22 / day"] },
            { label: "Time", lines: ["30 min (off-peak)"] },
          ],
        },
      ],
    },
  ),

  // ---- Part 3: Reading for Information (9 questions / 10 min) ----
  {
    id: "reading3-p3-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 3: Reading for Information`,
    sectionTitle: "Part 3 — Reading for Information",
    bullets: [
      "You will read an informational passage on a general-interest topic.",
      "Read the passage carefully, then answer all 9 questions.",
      "You have 10 minutes to complete this part.",
    ],
  },
  reading(
    "reading3-p3",
    `${HEADER_BASE} Part 3: Reading for Information`,
    "Read the passage, then choose the best answer to each question.",
    [
      "THE TOMATO'S UNLIKELY JOURNEY FROM POISON TO STAPLE",
      "",
      "Few foods have had a more dramatic rehabilitation than the tomato. Today it is one of the most widely consumed fruits in the world, a cornerstone of cuisines from Italy to India. Yet for nearly two centuries after its arrival in Europe from the Americas, the tomato was viewed by many with deep suspicion — and the reason, it turns out, had less to do with the fruit itself than with the dishes wealthy Europeans ate it from.",
      "",
      "When Spanish explorers brought the tomato to Europe in the early sixteenth century, it joined a category of New World plants regarded with curiosity and some wariness. Members of the nightshade family — which includes belladonna, a plant whose berries are genuinely toxic — the tomato was handled cautiously. Early European botanists noted its similarities to known poisonous plants and did not recommend it for consumption.",
      "",
      "But the more immediate reason for its toxic reputation among the wealthy was their dinnerware. Prosperous European households commonly ate from plates and dishes made of pewter, an alloy that in that era typically contained a significant amount of lead. Tomatoes are unusually high in citric and malic acids, and when acidic foods sit on or are served in lead-containing vessels, the acid leaches lead out of the metal and into the food. Repeated exposure to lead-contaminated meals could and did cause illness, and the tomato, as the most obviously acidic new ingredient on the table, received the blame.",
      "",
      "Peasants and poorer households, who could not afford pewter and ate instead from wooden trenchers or plain earthenware, had no such problem. They consumed tomatoes regularly without ill effect, and in southern Italy and parts of Spain the fruit had become a common ingredient in cooking by the seventeenth century.",
      "",
      "As pewter gradually gave way to ceramic and porcelain dishes — more affordable as manufacturing improved — the mysterious illnesses associated with the tomato faded. By the nineteenth century, the tomato's reputation had recovered sufficiently for it to be cultivated on a large scale, and the rest is culinary history.",
      "",
      "The story of the tomato carries a broader lesson about how scientific misunderstanding can persist for generations. The real culprit — lead in pewter — was not identified until long after the belief in the tomato's toxicity had become entrenched. It is a reminder that popular explanations, once established, are remarkably resistant to correction, and that isolating the true cause of a phenomenon often requires looking past the most obvious suspect.",
    ],
    600,
    [
      {
        prompt: "When did Spanish explorers first bring the tomato to Europe?",
        options: [
          "The early sixteenth century",
          "The late seventeenth century",
          "The early nineteenth century",
          "The fifteenth century",
        ],
        correctIndex: 0,
      },
      {
        prompt: "Why did early European botanists treat the tomato cautiously?",
        options: [
          "They believed all New World plants were dangerous",
          "It resembled members of the nightshade family, including genuinely toxic plants",
          "Tests showed it contained the same poison as belladonna berries",
          "It had caused illness in the Americas before being brought to Europe",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What was the actual cause of illness among wealthy Europeans who ate tomatoes?",
        options: [
          "A natural toxin in the tomato's skin",
          "Lead leaching from pewter plates into the acidic food",
          "Improper storage of tomatoes in cold cellars",
          "Cross-contamination with belladonna plants in the garden",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why were peasants unaffected by the illnesses that troubled wealthy Europeans?",
        options: [
          "They cooked tomatoes at higher temperatures, destroying any toxins",
          "They ate only ripe tomatoes, which are less acidic",
          "They ate from wooden or earthenware dishes, not pewter",
          "They consumed tomatoes in smaller quantities",
        ],
        correctIndex: 2,
      },
      {
        prompt: "In which regions was the tomato already commonly used in cooking by the seventeenth century?",
        options: [
          "England and the Netherlands",
          "France and Germany",
          "Southern Italy and parts of Spain",
          "Scandinavia and northern Europe",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What development helped the tomato's reputation recover?",
        options: [
          "A royal endorsement of the tomato as a healthy food",
          "The discovery of vitamins and the tomato's nutritional value",
          "Pewter dishes being replaced by ceramic and porcelain",
          "A scientific paper disproving the tomato's toxicity",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What property of the tomato caused lead to leach from pewter?",
        options: [
          "Its high sugar content",
          "Its unusual acidity due to citric and malic acids",
          "Its high water content, which softened the metal",
          "A natural chemical it releases when heated",
        ],
        correctIndex: 1,
      },
      {
        prompt: "According to the passage, when was the tomato cultivated on a large scale?",
        options: [
          "By the mid-sixteenth century",
          "By the late seventeenth century",
          "By the early eighteenth century",
          "By the nineteenth century",
        ],
        correctIndex: 3,
      },
      {
        prompt: "What broader lesson does the passage draw from the tomato's story?",
        options: [
          "Wealthy people are always more cautious about food than the poor",
          "Scientific progress always moves faster than popular belief",
          "Scientific misunderstandings can persist for generations, and popular explanations resist correction",
          "Lead poisoning was the most common cause of illness in early modern Europe",
        ],
        correctIndex: 2,
      },
    ],
  ),

  // ---- Part 4: Reading for Viewpoints (10 questions / 13 min) ----
  {
    id: "reading3-p4-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 4: Reading for Viewpoints`,
    sectionTitle: "Part 4 — Reading for Viewpoints",
    bullets: [
      "You will read a short article presenting different viewpoints on a topic, followed by a reader comment.",
      "Read both texts carefully, then answer all 10 questions.",
      "Pay attention to who holds which opinion — the article, supporters, critics, or the commenter.",
      "You have 13 minutes to complete this part.",
    ],
  },
  reading(
    "reading3-p4",
    `${HEADER_BASE} Part 4: Reading for Viewpoints`,
    "Read the article and the comment below, then choose the best answer to each question.",
    [
      "ARTICLE — SHOULD CITIES MAKE PUBLIC TRANSIT FREE?",
      "",
      "A growing number of cities around the world — from Tallinn, Estonia, to Dunkirk, France, to some municipalities in Canada — have experimented with eliminating fares on public transit systems. The results have been varied, and the debate over whether free transit is a worthwhile policy has intensified as cities search for ways to reduce car traffic, improve equity, and meet climate commitments.",
      "",
      "Supporters of fare-free transit argue that removing the financial barrier to riding increases ridership, particularly among low-income residents for whom transit costs can represent a meaningful share of their income. They also point to the environmental dividend: more riders on buses and trains means fewer cars on the road, reducing greenhouse gas emissions. A further argument is administrative efficiency: collecting fares requires ticket machines, inspectors, fare-evasion enforcement, and accounting systems that cost cities substantial sums. Eliminating fares, proponents say, removes all of these costs.",
      "",
      "Critics are less enthusiastic. Their central concern is funding: fare revenue, while it rarely covers the full cost of operating a transit system, provides a reliable income stream. Eliminating it means the shortfall must be covered by taxes, which may not be politically sustainable. Critics also argue that the money might achieve more good if invested in improving service — more frequent routes, longer operating hours, and newer vehicles — since these improvements attract riders just as effectively as free fares, but also make the system more useful to those who are already willing to pay.",
      "",
      "There are also concerns about overcrowding. Cities that have gone fare-free have sometimes reported crowded buses and trains, particularly at peak hours, without a commensurate expansion of service. For transit-dependent riders who were already using the system, this can actually worsen their experience.",
      "",
      "COMMENT (by a regular transit commuter):",
      "I commute by bus every day, and our city made fares free about two years ago. For me personally, it has made a noticeable difference to my monthly budget. I have also seen more people on the buses, which is encouraging — but rush hour has become genuinely uncomfortable. The buses are packed, and I sometimes have to let one or two pass before I can board. I think the city made the right call, but I really wish they had invested in more buses at the same time. Free transit without better service is only half a solution.",
    ],
    780,
    [
      {
        prompt: "What is the main topic of the article?",
        options: [
          "Why transit fares are rising in most cities",
          "Whether cities should make public transit free",
          "How cities can reduce their carbon footprint through urban planning",
          "Why low-income residents rely more heavily on public transit",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What administrative efficiency do supporters of fare-free transit mention?",
        options: [
          "Drivers no longer need to verify passengers' tickets",
          "Fewer transit routes need to be operated",
          "Costs of ticket machines, inspectors, and fare enforcement are eliminated",
          "The city can reduce the number of buses on the road",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What do critics say about fare revenue?",
        options: [
          "It is too small to matter to transit budgets",
          "It covers the full cost of running most transit systems",
          "It provides a reliable income stream that must be replaced if eliminated",
          "It mainly benefits private transit operators, not city systems",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What alternative use of the money do critics suggest?",
        options: [
          "Building new roads to reduce transit demand",
          "Investing in service improvements such as more frequent routes and newer vehicles",
          "Subsidizing taxi services for low-income residents",
          "Expanding parking facilities near transit hubs",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What overcrowding concern is raised in the article?",
        options: [
          "Free transit discourages people from using bicycles",
          "Fare-free systems sometimes become crowded without a matching expansion of service",
          "Transit workers are overwhelmed by the increased demand",
          "Overcrowding causes transit systems to run less frequently",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What personal benefit does the commenter mention?",
        options: [
          "Their commute time has shortened significantly",
          "They no longer need to own a car",
          "Free fares have made a noticeable difference to their monthly budget",
          "They now get a seat on the bus every day",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What problem does the commenter report experiencing on the bus?",
        options: [
          "Buses now arrive less frequently than before",
          "The buses are packed and the commenter sometimes has to let buses pass",
          "The fare-free policy has been poorly communicated to riders",
          "New riders are disruptive and rude on the bus",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does the commenter say the city should have done alongside making fares free?",
        options: [
          "Lowered fares gradually rather than eliminating them entirely",
          "Improved safety on buses first before removing fares",
          "Invested in more buses to handle increased demand",
          "Consulted existing riders before making the change",
        ],
        correctIndex: 2,
      },
      {
        prompt: "On what point does the commenter's experience support the critics' argument?",
        options: [
          "That fare revenue is essential for transit funding",
          "That overcrowding without expanded service worsens the experience for existing riders",
          "That free transit does not actually increase ridership",
          "That only low-income riders benefit from fare-free policies",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Which of the following best describes the commenter's overall assessment?",
        options: [
          "The policy was a mistake and should be reversed",
          "The policy was correct but incomplete — service investment was also needed",
          "The policy has been perfect and no changes are needed",
          "The policy has helped others but personally made no difference",
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

export const readingTest3: MockTest = {
  id: "reading-3",
  title: "CELPIP Reading — Full Practice Test 3",
  section: "reading",
  description:
    "A third complete CELPIP-style Reading test with all four parts: Correspondence (11Q), Applying a Diagram (8Q), Information (9Q), and Viewpoints (10Q) — 38 questions total.",
  durationLabel: "55–60 min",
  questionCount: 38,
  steps,
}
