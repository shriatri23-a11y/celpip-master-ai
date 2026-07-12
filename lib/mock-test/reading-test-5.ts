import type { MockTest, TestStep, ReadingStep } from "./types"
import type { ReadingDiagram } from "@/lib/reading-diagram"

const HEADER_BASE = "Advanced Mock Exam 5 - Reading"

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
    id: "reading5-intro",
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

  // ---- Part 1: Reading Correspondence (11 questions) ----
  {
    id: "reading5-p1-intro",
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
    "reading5-p1",
    `${HEADER_BASE} Part 1: Reading Correspondence`,
    "Read the two messages below, then choose the best answer to each question.",
    [
      "MESSAGE 1",
      "Dear Professor Halvorsen,",
      "I am writing about the graduate research assistantship I was offered last month, which I accepted in good faith. At the time, the offer letter specified twelve hours of work per week, primarily supporting your data-analysis course. Over the past three weeks, however, the actual demands have averaged closer to twenty hours, and much of that time has been spent on administrative tasks — formatting grant paperwork, booking rooms — that bear little relation to the research training the position was supposed to provide.",
      "I want to be clear that I am not complaining about hard work; I came here precisely because I wanted to be stretched. My concern is twofold. First, the extra hours are eating into the coursework my funding is contingent on, which puts me in an awkward bind. Second, I worry that if the administrative drift continues, I will finish the year without the analytical experience that was the whole point of choosing this assistantship over a teaching one.",
      "Could we meet to realign the role with what was described? I am flexible about how, but I would like the research-to-administration balance restored.",
      "Best regards,",
      "Priya Nair",
      "",
      "MESSAGE 2",
      "Dear Priya,",
      "Thank you for raising this directly rather than letting it fester, which is precisely the professionalism I hoped for when I selected you. You are right on both counts, and I owe you an explanation rather than an excuse.",
      "The administrative overflow is real, and it is my doing: a departmental coordinator left unexpectedly in September, and I leaned on assistantships to plug the gap. That was expedient but unfair to you, and it was never meant to be permanent. Here is what I propose. From next week, I will cap administrative tasks at three hours weekly and redirect the rest to the analysis work — you will co-run the diagnostic modelling for the course, which is exactly the experience you came for. The room-booking and paperwork will move to a work-study undergraduate I am hiring this week.",
      "One caveat: for the first two weeks of the transition, there may be some residual paperwork as the new hire is trained. After that, the balance we originally agreed will hold, and if it does not, I want you to tell me at once rather than absorbing it silently.",
      "Warm regards,",
      "Erik Halvorsen",
    ],
    660,
    [
      {
        prompt: "What is Priya's main purpose in writing?",
        options: [
          "To resign from the assistantship",
          "To ask that the role be realigned with the research focus originally described",
          "To request a pay increase for the extra hours",
          "To complain that the work is too difficult",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why does Priya emphasise that she is 'not complaining about hard work'?",
        options: [
          "To flatter the professor",
          "To pre-empt the misreading that her concern is about effort rather than the type of work",
          "To request fewer total hours",
          "To explain why she is behind on coursework",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What are the two concerns Priya raises?",
        options: [
          "Low pay and long hours",
          "That the extra hours threaten her funding-linked coursework, and that she'll miss the analytical training",
          "That the professor is unavailable and the course is disorganised",
          "That she prefers a teaching assistantship",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why is Priya's coursework situation described as an 'awkward bind'?",
        options: [
          "Her funding depends on the coursework the extra hours are eroding",
          "She dislikes the subject matter",
          "The professor grades her unfairly",
          "She cannot attend classes at all",
        ],
        correctIndex: 0,
      },
      {
        prompt: "How does Professor Halvorsen characterise his response in his opening line?",
        options: [
          "As an excuse for the situation",
          "As an explanation he owes her, not an excuse",
          "As a formal reprimand",
          "As a refusal to change anything",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What caused the administrative overflow, according to the professor?",
        options: [
          "Priya's slow work",
          "A departmental coordinator leaving unexpectedly, whose gap he filled with assistantships",
          "A budget cut",
          "An increase in student enrolment",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What concrete change does the professor propose?",
        options: [
          "Ending the assistantship early",
          "Capping admin at three hours weekly and moving Priya to co-run diagnostic modelling",
          "Hiring Priya as a lecturer",
          "Reducing her total hours to eight",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What is the single caveat the professor attaches to his plan?",
        options: [
          "That Priya must work weekends",
          "That some residual paperwork may remain for two weeks while the new hire is trained",
          "That the change depends on department approval",
          "That Priya must first improve her grades",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does the professor ask Priya to do if the balance is not restored?",
        options: [
          "File a formal complaint with the university",
          "Tell him at once rather than absorbing it silently",
          "Wait until the end of the year",
          "Reduce her own workload independently",
        ],
        correctIndex: 1,
      },
      {
        prompt: "How would you best describe the professor's tone in his reply?",
        options: [
          "Defensive and dismissive",
          "Accountable and constructive",
          "Formal and non-committal",
          "Apologetic to the point of self-blame",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What can be inferred about why the professor selected Priya?",
        options: [
          "She was the cheapest candidate",
          "He valued professionalism, which her direct approach confirmed",
          "She had the most teaching experience",
          "No other candidates applied",
        ],
        correctIndex: 1,
      },
    ],
  ),

  // ---- Part 2: Reading to Apply a Diagram (8 questions) ----
  {
    id: "reading5-p2-intro",
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
    "reading5-p2",
    `${HEADER_BASE} Part 2: Reading to Apply a Diagram`,
    "Read the diagram comparing four conference-room booking plans and the message that refers to it. Then use the drop-down menu to choose the best option for each question.",
    [
      "Subject: Choosing a booking plan for the design studio",
      "To: Operations <ops@studioloop.co>",
      "From: Marcus Reyes <mreyes@studioloop.co>",
      "",
      "Hi,",
      "We need to pick one shared-workspace booking plan for the studio. I've put the four options in the diagram, but a few things need explaining alongside it.",
      "Our team runs client presentations that must never be interrupted, so we need rooms we can guarantee in advance — a plan that only offers 'first-come' access won't do for those. We hold about six such presentations a month. For internal stand-ups, though, we're happy with whatever's free on the day; those are short and flexible.",
      "On budget: the finance team will approve up to $600 a month, but they've asked that we avoid any plan with a lock-in longer than three months, because our lease is under review. Note that the Premium plan's advertised price assumes an annual commitment — month-to-month, it's 25% higher, which pushes it over our cap.",
      "Let me know which plan fits.",
      "Marcus",
    ],
    540,
    [
      {
        prompt: "The only plans that let you guarantee a room in advance (not first-come) are",
        options: ["Basic and Team", "Team and Premium", "Basic and Flex", "Flex and Premium"],
        correctIndex: 1,
      },
      {
        prompt: "For the six monthly client presentations, the minimum suitable plan is",
        options: ["Flex", "Basic", "Team", "any plan works"],
        correctIndex: 2,
      },
      {
        prompt: "For internal stand-ups, the team is content with",
        options: ["Guaranteed advance booking", "First-come access on the day", "A private locked room", "No rooms at all"],
        correctIndex: 1,
      },
      {
        prompt: "The Premium plan's month-to-month price would be about",
        options: ["$480", "$540", "$600", "$675"],
        correctIndex: 3,
      },
      {
        prompt: "Finance has asked the team to avoid any plan with a lock-in longer than",
        options: ["One month", "Three months", "Six months", "Twelve months"],
        correctIndex: 1,
      },
      {
        prompt: "Which plan is disqualified specifically because its budget-friendly price requires a 12-month commitment?",
        options: ["Flex", "Basic", "Team", "Premium"],
        correctIndex: 3,
      },
      {
        prompt: "Given all the constraints (guaranteed rooms, ≤3-month lock-in, ≤$600/month), the best fit is",
        options: ["Flex", "Basic", "Team", "Premium"],
        correctIndex: 2,
      },
      {
        prompt: "If the lease review were resolved and long lock-ins allowed, which plan would become the cheapest way to get guaranteed rooms?",
        options: [
          "Flex, at first-come rates",
          "Basic, with add-ons",
          "Premium on an annual commitment",
          "No plan would change",
        ],
        correctIndex: 2,
      },
    ],
    {
      title: "Workspace Booking Plans",
      caption: "Compare booking type, lock-in, and monthly cost across four plans.",
      rows: [
        {
          label: "Flex",
          icon: "users",
          cells: [
            { label: "Booking", lines: ["First-come only", "No advance guarantee"] },
            { label: "Lock-in", lines: ["None (month-to-month)"] },
            { label: "Cost", lines: ["$220 / month"] },
          ],
        },
        {
          label: "Basic",
          icon: "building",
          cells: [
            { label: "Booking", lines: ["First-come only"] },
            { label: "Lock-in", lines: ["1 month"] },
            { label: "Cost", lines: ["$340 / month"] },
          ],
        },
        {
          label: "Team",
          icon: "calendar",
          cells: [
            { label: "Booking", lines: ["Guaranteed advance booking"] },
            { label: "Lock-in", lines: ["3 months"] },
            { label: "Cost", lines: ["$560 / month"] },
          ],
        },
        {
          label: "Premium",
          icon: "home",
          cells: [
            { label: "Booking", lines: ["Guaranteed + priority rooms"] },
            { label: "Lock-in", lines: ["12 months for listed price"] },
            { label: "Cost", lines: ["$540 / month (annual)"] },
          ],
        },
      ],
    },
  ),

  // ---- Part 3: Reading for Information (9 questions) ----
  {
    id: "reading5-p3-intro",
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
    "reading5-p3",
    `${HEADER_BASE} Part 3: Reading for Information`,
    "Read the passage, then choose the best answer to each question.",
    [
      "THE HIDDEN COST OF THE 'FRICTIONLESS' INTERFACE",
      "",
      "For two decades, the guiding principle of consumer software design has been the reduction of friction. Every extra tap, every confirmation dialog, every moment of hesitation was treated as a defect to be engineered away. The ideal was an interface so smooth that using it required no conscious thought at all. By most commercial measures, this project succeeded spectacularly: purchases, sign-ups, and subscriptions all rose as barriers fell. Yet a growing body of research suggests that frictionlessness, pursued without limit, produces harms that its champions did not anticipate.",
      "",
      "The clearest example is the accidental action. When confirming a purchase requires no deliberate step, users buy things they did not intend to buy and, more corrosively, lose the brief pause in which they might have reconsidered. Designers discovered that the very hesitation they had worked to eliminate had been performing a quiet protective function. A moment of friction is also a moment of reflection, and removing the first removes the second.",
      "",
      "A subtler cost concerns memory and understanding. Psychologists distinguish between tasks performed fluently and tasks performed effortfully, and have repeatedly found that a modest degree of difficulty — what researchers call 'desirable difficulty' — improves retention. A navigation app that hands a driver every turn on demand produces someone who reaches the destination but cannot find it again unaided. The effort that friction demands is often the very process by which we learn. Strip it away entirely, and competence quietly atrophies.",
      "",
      "None of this amounts to a case for deliberately clumsy design. The point is not that friction is good, but that friction is information: it tells the user that something consequential is happening and invites the attention that consequence deserves. The mature version of the design philosophy, now gaining ground, does not ask 'how do we remove all friction?' but 'where is friction doing useful work, and where is it merely an obstacle?' Confirming a five-dollar song purchase and confirming the deletion of a decade of photographs are not the same act, and treating them identically — as maximally frictionless design does — is not neutrality but a failure of judgment.",
      "",
      "The lesson generalises beyond software. Any system optimised relentlessly for a single metric — here, ease — will eventually erode the values that the metric failed to capture. Ease is genuinely valuable, but it is not the only value, and a design culture that forgot how to weigh it against reflection, comprehension, and consent produced tools that served their makers' conversion rates better than their users' interests. The correction now underway is less a rejection of the frictionless ideal than a rediscovery of the reasons friction existed in the first place.",
    ],
    600,
    [
      {
        prompt: "By what measures did the reduction of friction 'succeed spectacularly'?",
        options: [
          "User satisfaction surveys",
          "Commercial measures such as purchases, sign-ups, and subscriptions",
          "Academic citations",
          "The speed of software development",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What 'quiet protective function' had hesitation been performing?",
        options: [
          "Preventing software crashes",
          "Providing a brief pause in which users might reconsider an action",
          "Reducing the load on servers",
          "Slowing down competitors",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does the phrase 'desirable difficulty' refer to?",
        options: [
          "A design flaw that frustrates users",
          "A modest degree of difficulty that improves retention",
          "The challenge of programming an interface",
          "A marketing technique",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What point does the navigation-app example illustrate?",
        options: [
          "That apps should give fewer directions to save data",
          "That effortless assistance can prevent the learning that effort produces",
          "That drivers dislike navigation apps",
          "That maps are more accurate than memory",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does the author mean by 'competence quietly atrophies'?",
        options: [
          "Software becomes slower over time",
          "Skills weaken when the effort that builds them is removed",
          "Users forget their passwords",
          "Designers lose their jobs",
        ],
        correctIndex: 1,
      },
      {
        prompt: "The author states that 'friction is information.' This means friction",
        options: [
          "Should always be maximised",
          "Signals that something consequential is happening and invites appropriate attention",
          "Is a form of data collection",
          "Makes software more profitable",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why does the author contrast buying a song with deleting a decade of photographs?",
        options: [
          "To show photos are more valuable than music",
          "To argue that acts of different consequence should not be made equally frictionless",
          "To recommend banning one-click purchases",
          "To show that deletion should be free",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What broader lesson does the author draw in the final paragraph?",
        options: [
          "Ease is worthless as a design goal",
          "Optimising relentlessly for one metric erodes the values that metric fails to capture",
          "All metrics are misleading",
          "Software should never be updated",
        ],
        correctIndex: 1,
      },
      {
        prompt: "How does the author characterise the 'correction now underway'?",
        options: [
          "A complete rejection of frictionless design",
          "A rediscovery of the reasons friction existed in the first place",
          "A return to 1990s software",
          "A purely commercial strategy",
        ],
        correctIndex: 1,
      },
    ],
  ),

  // ---- Part 4: Reading for Viewpoints (10 questions) ----
  {
    id: "reading5-p4-intro",
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
    "reading5-p4",
    `${HEADER_BASE} Part 4: Reading for Viewpoints`,
    "Read the article and the comment below, then choose the best answer to each question.",
    [
      "ARTICLE — SHOULD CITIES MAKE PUBLIC TRANSIT FREE?",
      "",
      "As municipalities search for ways to cut emissions and ease congestion, a bold proposal keeps resurfacing: abolish transit fares entirely and fund the system from general taxation. The idea is intuitively appealing, but the evidence is more tangled than either side tends to admit.",
      "",
      "Supporters argue that free transit is both fair and effective. Fares, they note, fall hardest on low-income riders, for whom the daily cost is a real burden, while wealthier residents drive. Removing fares, supporters say, is therefore progressive. They also point to reduced boarding times — no fumbling for payment — and to cities like Tallinn, where ridership rose after fares were scrapped. Above all, they frame free transit as a statement that mobility is a public good, like libraries or parks, not a commodity.",
      "",
      "Critics accept the goals but dispute the mechanism. Fare revenue, they observe, typically funds a substantial share of operating costs; remove it, and either service quality falls or taxes rise elsewhere, often on the same working residents the policy claims to help. More provocatively, critics cite studies suggesting that free transit mainly converts former walkers and cyclists into riders, rather than drivers — meaning emissions barely fall while crowding worsens. The binding constraint on ridership, they argue, is usually frequency and reliability, not price; a bus that is free but comes twice an hour will lose to a car every time.",
      "",
      "A third camp reframes the question around what the money buys. Given a fixed budget, they ask, is the marginal dollar better spent eliminating fares or improving service? Their answer is generally the latter: use the funds to run buses more often and later into the night, which benefits precisely the low-income shift workers that fare-free advocates care about, while actually pulling drivers off the road. Some in this camp support targeted free passes for those who need them, pairing social equity with fiscal realism, rather than universal free service.",
      "",
      "What nearly everyone now accepts is that 'free' is not free; it is a choice about who pays and what is foregone. The serious disagreement is not about whether transit matters but about whether the largest available lever is price or service. On that question, the accumulating evidence has shifted the centre of gravity toward service — though advocates rightly warn that 'improve service first' can become an excuse to do nothing at all.",
      "",
      "COMMENT (by a daily bus commuter):",
      "I used to be firmly in the 'make it free' camp — it just felt obviously right. But my own commute changed my mind. My route is free for seniors, and I watched buses get more crowded without a single extra bus being added, so my actual trip got worse, not better. What I'd genuinely pay more for is a bus every ten minutes instead of every twenty-five. So I've landed roughly where the article's third camp is: I'd rather the city spend on frequency and give free passes to people who truly can't afford fares. The one thing I'd push back on is the ending — in my city, 'improve service first' really has been used as an excuse to do nothing for years, so I understand why the free-transit people don't trust it.",
    ],
    780,
    [
      {
        prompt: "What is the central proposal the article examines?",
        options: [
          "Raising transit fares to fund new buses",
          "Abolishing transit fares and funding the system from general taxation",
          "Privatising the transit system",
          "Banning cars from city centres",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why do supporters consider free transit 'progressive'?",
        options: [
          "It uses the newest technology",
          "Fares fall hardest on low-income riders, so removing them helps those riders most",
          "It reduces the number of bus routes",
          "It benefits wealthy drivers",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What do supporters cite the example of Tallinn to show?",
        options: [
          "That fares should be raised",
          "That ridership rose after fares were scrapped",
          "That free transit is impossible to fund",
          "That buses became less frequent",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What is the critics' concern about fare revenue?",
        options: [
          "It is too small to matter",
          "Removing it means either service quality falls or taxes rise, often on the same working residents",
          "It is spent on advertising",
          "It cannot legally be removed",
        ],
        correctIndex: 1,
      },
      {
        prompt: "According to critics, who mainly becomes new riders when transit is free?",
        options: [
          "Former drivers",
          "Former walkers and cyclists, meaning emissions barely fall",
          "Tourists",
          "Suburban commuters",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What do critics identify as the usual binding constraint on ridership?",
        options: [
          "Price",
          "Frequency and reliability",
          "The cost of fuel",
          "The age of the buses",
        ],
        correctIndex: 1,
      },
      {
        prompt: "How does the 'third camp' reframe the question?",
        options: [
          "Whether transit should exist at all",
          "Whether a fixed budget is better spent on eliminating fares or improving service",
          "Whether cars should be taxed more",
          "Whether fares should double",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does 'free is not free' mean in the article?",
        options: [
          "That transit will always charge fares",
          "That it is a choice about who pays and what is foregone",
          "That free transit is illegal",
          "That taxes never change",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Which position does the commenter ultimately align with?",
        options: [
          "The supporters of universal free transit",
          "The third camp — spend on frequency, with free passes for those who need them",
          "The view that transit does not matter",
          "The critics' claim that service cannot improve",
        ],
        correctIndex: 1,
      },
      {
        prompt: "On what single point does the commenter push back against the article?",
        options: [
          "Its claim that free transit raises ridership",
          "Its ending, because in their city 'improve service first' has been an excuse to do nothing",
          "Its description of the critics",
          "Its use of the Tallinn example",
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

export const readingTest5: MockTest = {
  id: "reading-5",
  title: "CELPIP Reading — Advanced Practice Test 5",
  section: "reading",
  description:
    "A high-difficulty CELPIP-style Reading test with all four parts: layered Correspondence (11Q), a conditional Diagram task (8Q), a dense Information passage (9Q), and multi-voice Viewpoints (10Q) — 38 questions total. Inference, tone, and vocabulary-in-context heavy.",
  durationLabel: "55–60 min",
  questionCount: 38,
  steps,
}
