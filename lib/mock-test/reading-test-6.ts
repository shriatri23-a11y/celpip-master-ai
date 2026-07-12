import type { MockTest, TestStep, ReadingStep } from "./types"
import type { ReadingDiagram } from "@/lib/reading-diagram"

const HEADER_BASE = "Advanced Mock Exam 6 - Reading"

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
    id: "reading6-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} - CELPIP Test`,
    sectionTitle: "Reading Test Instructions",
    bullets: [
      "This is the most demanding simulation in the set. Passages are long and abstract, sentences are complex, and distractors are deliberately close to the correct answer.",
      "Many questions test inference, tone, author's purpose, and the meaning of words in context — not just literal recall.",
      "Watch for options that are true statements from the passage but do not answer the question asked.",
      "There are four parts and 38 questions. All questions are worth one mark.",
    ],
  },

  // ---- Part 1: Reading Correspondence (11 questions) ----
  {
    id: "reading6-p1-intro",
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
    "reading6-p1",
    `${HEADER_BASE} Part 1: Reading Correspondence`,
    "Read the two messages below, then choose the best answer to each question.",
    [
      "MESSAGE 1",
      "Dear Mr. Delacroix,",
      "I am writing on behalf of the tenants of Building C regarding the renovation notice we received last week. Before anything else, I want to acknowledge that the building genuinely needs the work; the plumbing failures over the winter were serious, and no one here disputes that repairs are overdue. My purpose is not to oppose the project but to raise concerns about how it is being carried out.",
      "The notice states that work will proceed floor by floor, requiring each unit to be vacated for approximately three weeks, and that tenants are responsible for their own alternative accommodation during that period. This is where the difficulty lies. Many of us are long-term tenants on fixed incomes; three weeks of hotel costs, on top of ongoing rent, is simply beyond reach for several households. The notice presents this as settled, but I do not believe it can be, legally or ethically.",
      "What we are requesting is a meeting before the schedule is finalised, to explore alternatives — phased work that allows tenants to remain, a rent reduction covering the displacement period, or assistance in arranging temporary units. We are not asking you to delay necessary repairs; we are asking not to be made to bear a cost that the situation, not our conduct, has created.",
      "Respectfully,",
      "Helena Barros, Tenants' Representative",
      "",
      "MESSAGE 2",
      "Dear Ms. Barros,",
      "Thank you for a letter that separates the necessity of the work from the manner of it — a distinction I wish more correspondence made. You have raised a legitimate issue, and I will not pretend the original notice handled it well; it did not.",
      "Let me be straightforward about what I can and cannot do. A full rent reduction for three weeks across every unit is not feasible without jeopardising the financing for the repairs themselves, which would help no one. However, I can offer two things. First, for the displacement period, I will suspend rent entirely for any tenant who can show the hotel or temporary-housing cost would exceed their monthly rent — which addresses precisely the fixed-income households you describe. Second, I have asked the contractor to price a phased approach that keeps kitchens and one bathroom functional per floor; if the cost is not prohibitive, we will use it, and displacement may drop to a matter of days.",
      "I cannot promise the phased option until I have the quote, which I expect within ten days. What I can promise now is the meeting you asked for, and that no schedule will be finalised before it. Please propose three dates.",
      "Sincerely,",
      "Julien Delacroix, Property Manager",
    ],
    660,
    [
      {
        prompt: "What is Ms. Barros's main purpose in writing?",
        options: [
          "To stop the renovation from happening",
          "To object to how the necessary renovation is being carried out and request a meeting",
          "To complain about the winter plumbing failures",
          "To demand the manager be replaced",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why does Ms. Barros acknowledge the building 'genuinely needs the work'?",
        options: [
          "To flatter the manager into agreement",
          "To make clear her concern is the method, not the necessity, of the repairs",
          "To request that the work be done sooner",
          "To blame the tenants for the damage",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What is the central difficulty the tenants face?",
        options: [
          "The repairs will take too long",
          "Three weeks of alternative-accommodation cost is beyond reach for fixed-income households",
          "The building is unsafe to enter",
          "The manager refuses to communicate",
        ],
        correctIndex: 1,
      },
      {
        prompt: "When Ms. Barros writes that the cost was created by 'the situation, not our conduct,' she means",
        options: [
          "The tenants damaged the plumbing",
          "The tenants should not bear a cost arising from circumstances they did not cause",
          "The repairs are the tenants' legal responsibility",
          "The situation cannot be changed",
        ],
        correctIndex: 1,
      },
      {
        prompt: "How does Mr. Delacroix characterise the original notice?",
        options: [
          "As perfectly reasonable",
          "As not having handled the displacement issue well",
          "As legally binding and final",
          "As written by someone else",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why can Mr. Delacroix not offer a full rent reduction for all units?",
        options: [
          "The tenants have not asked for one",
          "It would jeopardise the financing for the repairs themselves",
          "The law forbids it",
          "He does not believe the tenants need it",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What is the first concrete offer Mr. Delacroix makes?",
        options: [
          "A permanent rent freeze",
          "Suspending rent for any tenant whose temporary-housing cost would exceed their monthly rent",
          "Free hotel rooms for everyone",
          "Cancelling the renovation",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What is the potential benefit of the phased approach he describes?",
        options: [
          "It makes the repairs cheaper for tenants to fund",
          "It keeps kitchens and a bathroom functional, potentially cutting displacement to days",
          "It removes the need for a meeting",
          "It allows the work to be delayed indefinitely",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does Mr. Delacroix explicitly say he cannot yet promise?",
        options: [
          "The meeting",
          "The phased option, until he receives the contractor's quote",
          "Any rent relief at all",
          "That the repairs will happen",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does Mr. Delacroix promise 'now'?",
        options: [
          "A full rent reduction",
          "The meeting, and that no schedule will be finalised before it",
          "That displacement will be zero",
          "A new contractor",
        ],
        correctIndex: 1,
      },
      {
        prompt: "How would you best describe the relationship the two writers establish?",
        options: [
          "Adversaries preparing for legal conflict",
          "Reasonable parties working toward a fair, practical compromise",
          "An authority ignoring a powerless complainant",
          "Two people with no real disagreement",
        ],
        correctIndex: 1,
      },
    ],
  ),

  // ---- Part 2: Reading to Apply a Diagram (8 questions) ----
  {
    id: "reading6-p2-intro",
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
    "reading6-p2",
    `${HEADER_BASE} Part 2: Reading to Apply a Diagram`,
    "Read the diagram comparing four course-delivery formats and the message that refers to it. Then use the drop-down menu to choose the best option for each question.",
    [
      "Subject: Choosing a format for the staff certification course",
      "To: Training <training@harborhealth.org>",
      "From: Yuki Tanaka <ytanaka@harborhealth.org>",
      "",
      "Hi,",
      "We need to pick one delivery format for the mandatory certification course. I've compared four in the diagram, but a few constraints aren't visible there.",
      "Our staff work rotating shifts, so any format with fixed live sessions at set times will exclude whoever is on shift then — that's a real problem for us. We also have a hard deadline: everyone must be certified within six weeks, so a self-paced format with no structure risks people leaving it to the last minute and missing the deadline.",
      "On cost, I can spend up to $120 per person. Note that the Blended format's listed price covers only the online portion; the required in-person assessment day adds $40, which isn't shown in the grid. Also, the Live Online price assumes a minimum of twenty enrolments — below that, it rises by a third, and we only have twelve staff to certify.",
      "Let me know which format fits.",
      "Yuki",
    ],
    540,
    [
      {
        prompt: "The formats that avoid fixed live sessions at set times are",
        options: ["Self-Paced and Blended", "Live Online and Blended", "Self-Paced and Live Online", "all four formats"],
        correctIndex: 0,
      },
      {
        prompt: "Why is a purely self-paced format risky for this team?",
        options: [
          "It is the most expensive",
          "With no structure, people may leave it late and miss the six-week deadline",
          "It requires an in-person day",
          "It excludes shift workers",
        ],
        correctIndex: 1,
      },
      {
        prompt: "The true total cost per person for the Blended format is",
        options: ["$90", "$110", "$130", "$150"],
        correctIndex: 2,
      },
      {
        prompt: "Because only twelve staff are enrolling, the Live Online price would",
        options: [
          "stay the same",
          "rise by a third above the listed price",
          "fall by a third",
          "become free",
        ],
        correctIndex: 1,
      },
      {
        prompt: "The Live Online adjusted price for twelve enrolments (listed $90) would be about",
        options: ["$90", "$100", "$120", "$135"],
        correctIndex: 2,
      },
      {
        prompt: "Which format is disqualified specifically because it excludes shift workers on duty?",
        options: ["Self-Paced", "Guided Online", "Blended", "both Live Online and Guided Online with fixed sessions"],
        correctIndex: 3,
      },
      {
        prompt: "Considering the shift constraint, the deadline, and the $120 cap, the best fit is",
        options: ["Self-Paced", "Guided Online", "Live Online", "Blended"],
        correctIndex: 1,
      },
      {
        prompt: "Guided Online works for this team mainly because it",
        options: [
          "has no deadlines at all",
          "combines flexible timing with weekly checkpoints, and stays within budget",
          "is the cheapest option available",
          "requires an in-person assessment",
        ],
        correctIndex: 1,
      },
    ],
    {
      title: "Course Delivery Formats",
      caption: "Compare scheduling, structure, and cost across four formats.",
      rows: [
        {
          label: "Self-Paced",
          icon: "users",
          cells: [
            { label: "Schedule", lines: ["Anytime, no sessions"] },
            { label: "Structure", lines: ["None — fully independent"] },
            { label: "Cost", lines: ["$70 / person"] },
          ],
        },
        {
          label: "Guided Online",
          icon: "calendar",
          cells: [
            { label: "Schedule", lines: ["Flexible, weekly checkpoints"] },
            { label: "Structure", lines: ["Deadlines, no fixed live time"] },
            { label: "Cost", lines: ["$110 / person"] },
          ],
        },
        {
          label: "Live Online",
          icon: "building",
          cells: [
            { label: "Schedule", lines: ["Fixed live sessions"] },
            { label: "Structure", lines: ["Instructor-led, set times"] },
            { label: "Cost", lines: ["$90 / person (min. 20)"] },
          ],
        },
        {
          label: "Blended",
          icon: "home",
          cells: [
            { label: "Schedule", lines: ["Online + in-person day"] },
            { label: "Structure", lines: ["Fixed assessment day"] },
            { label: "Cost", lines: ["$90 online (+$40 in person)"] },
          ],
        },
      ],
    },
  ),

  // ---- Part 3: Reading for Information (9 questions) ----
  {
    id: "reading6-p3-intro",
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
    "reading6-p3",
    `${HEADER_BASE} Part 3: Reading for Information`,
    "Read the passage, then choose the best answer to each question.",
    [
      "WHY THE 'WISDOM OF CROWDS' SOMETIMES FAILS",
      "",
      "The idea that large groups make better judgments than individuals has become something of a modern article of faith. Ask enough people to guess the number of jellybeans in a jar, the story goes, and the average of their guesses will be startlingly accurate — often closer than any single expert. This phenomenon, popularised as the 'wisdom of crowds,' is real, but the conditions under which it holds are far more restrictive than its enthusiasts usually admit, and ignoring those conditions can turn collective wisdom into collective folly.",
      "",
      "The jellybean effect works because of a statistical property: when errors are independent and unbiased, they tend to cancel out. Some people guess too high, others too low, and the overs and unders average toward the truth. The crucial word is 'independent.' Each guesser must arrive at their estimate without being influenced by the others. The moment that independence breaks down, the mathematics that produces the wisdom breaks down with it.",
      "",
      "Consider what happens when guessers can see each other's answers. Early responses, however arbitrary, begin to anchor later ones. People assume that if many others have converged on a number, those others must know something, and so they adjust toward the emerging consensus. The errors are no longer independent; they are correlated, all pulled in the same direction. A crowd in this state does not average toward truth — it stampedes toward whatever the first confident voices proposed. This is how bubbles form in markets and how panics spread: not because crowds are inherently stupid, but because the very interaction that makes a group feel like a group destroys the independence its accuracy depended on.",
      "",
      "A second, subtler failure arises from shared bias. Averaging cancels random error, but it does nothing to cancel a systematic error that everyone shares. If an entire group has been taught the same mistaken fact, or is subject to the same optical illusion, then every individual estimate is wrong in the same direction, and no amount of averaging will rescue the result. The crowd's confidence may even increase as more people agree, producing the dangerous combination of high certainty and shared error.",
      "",
      "The practical lesson is not to abandon collective judgment but to engineer the conditions under which it works. Well-designed forecasting systems deliberately preserve independence — collecting estimates privately before any discussion, or actively seeking out dissenting and diverse viewpoints to break up correlation. The counter-intuitive implication is that a group trying to be wise should often resist the urge to deliberate its way to a single answer too quickly. Premature consensus feels like agreement, but it is frequently just the sound of independence collapsing.",
    ],
    600,
    [
      {
        prompt: "What is the author's overall stance on the 'wisdom of crowds'?",
        options: [
          "It is a myth with no basis in fact",
          "It is real but depends on restrictive conditions often ignored",
          "It always outperforms experts",
          "It applies only to guessing games",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why does averaging many guesses produce an accurate result in the jellybean case?",
        options: [
          "Because most people are experts",
          "Because independent, unbiased errors tend to cancel out",
          "Because the jar is easy to estimate",
          "Because people copy the best guesser",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Which word does the author call 'crucial'?",
        options: ["Accurate", "Independent", "Expert", "Average"],
        correctIndex: 1,
      },
      {
        prompt: "What happens when guessers can see each other's answers?",
        options: [
          "Their errors cancel out more effectively",
          "Early answers anchor later ones, making errors correlated",
          "The average becomes more accurate",
          "People stop guessing",
        ],
        correctIndex: 1,
      },
      {
        prompt: "According to the passage, how do market bubbles and panics relate to crowd behaviour?",
        options: [
          "They prove crowds are inherently stupid",
          "They show what happens when interaction destroys the independence accuracy depends on",
          "They are unrelated to the wisdom of crowds",
          "They occur only among experts",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What is the 'second, subtler failure' the author describes?",
        options: [
          "People guessing too high",
          "A systematic error shared by everyone, which averaging cannot cancel",
          "Groups being too small",
          "Experts refusing to participate",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why is shared bias described as especially 'dangerous'?",
        options: [
          "It makes groups guess randomly",
          "It can combine high certainty with shared error as more people agree",
          "It only affects experts",
          "It cancels out over time",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What do well-designed forecasting systems do to preserve accuracy?",
        options: [
          "Encourage rapid group consensus",
          "Preserve independence — e.g., private estimates and seeking dissenting views",
          "Rely on a single expert",
          "Eliminate all discussion permanently",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does the author mean that premature consensus is 'the sound of independence collapsing'?",
        options: [
          "Agreement always signals correctness",
          "Quick agreement can mean the independence that produces accuracy has been lost",
          "Groups should never agree",
          "Consensus is impossible to achieve",
        ],
        correctIndex: 1,
      },
    ],
  ),

  // ---- Part 4: Reading for Viewpoints (10 questions) ----
  {
    id: "reading6-p4-intro",
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
    "reading6-p4",
    `${HEADER_BASE} Part 4: Reading for Viewpoints`,
    "Read the article and the comment below, then choose the best answer to each question.",
    [
      "ARTICLE — SHOULD REMOTE WORKERS BE PAID BY LOCATION?",
      "",
      "As remote work has become permanent for many companies, a thorny question has moved to the centre of debate: if two employees do the same job equally well, but one lives in an expensive city and the other in a cheaper region, should they be paid the same, or should pay be adjusted for local cost of living? The question sounds technical but touches deep intuitions about fairness.",
      "",
      "Proponents of location-based pay argue that it reflects economic reality. Salaries, they note, have always varied by geography precisely because the cost of living does; a wage that is generous in a small town may be inadequate in a major city. Paying everyone the big-city rate, they contend, would either bankrupt the company or force it to hire far fewer people. Location-based pay, on this view, lets a company employ more people fairly, each compensated appropriately for where they actually live.",
      "",
      "Critics find the logic backwards. Pay, they argue, should reflect the value of the work, not the employee's postal code. If two engineers produce identical results, paying one less because she chose to live somewhere cheaper effectively penalises a personal choice that costs the company nothing — indeed, the remote worker in the cheaper area may be saving the company office and relocation costs. Worse, critics warn, location-based pay can entrench inequality: it tends to pay the most to those already living in the wealthiest areas.",
      "",
      "A third perspective questions the framing entirely. The real issue, its advocates say, is not geography but transparency and consistency. A location policy is defensible if it is applied openly and predictably, and indefensible if it is used as a quiet tool to pay some people less than others for reasons that have nothing to do with cost of living. On this view, employees resent not the existence of a formula but the suspicion that the formula is a pretext. What matters is whether workers can see the rule and trust that it is applied to everyone alike.",
      "",
      "Most analysts now concede that no policy is fair in the abstract; fairness depends on execution. A location adjustment that is modest, transparent, and consistently applied provokes little resentment. One that is large, opaque, or selectively enforced breeds exactly the distrust that poisons a workplace. The debate, in the end, is shifting from 'location or not?' to 'under what conditions is any pay rule perceived as legitimate?' — a question about trust as much as economics.",
      "",
      "COMMENT (by a fully remote software developer):",
      "I moved from a big city to a small town two years ago and took a 15% pay cut under my company's location policy, so I have skin in this. My gut reaction was exactly the critics': I do the same work, so why less money? But I've softened. What actually bothered me wasn't the cut — it was that I couldn't see how it was calculated, and I suspected colleagues in similar towns had negotiated their way out of it. When the company later published the whole formula and applied it uniformly, my resentment mostly evaporated, even though my pay didn't change. So I've ended up agreeing with the article's third camp: for me it was never really about geography, it was about whether I could trust the rule. The one thing I'd add is that transparency came far too late — the damage to morale was already done.",
    ],
    780,
    [
      {
        prompt: "What is the central question the article addresses?",
        options: [
          "Whether remote work should be permanent",
          "Whether remote workers' pay should be adjusted for local cost of living",
          "Whether cities are too expensive to live in",
          "Whether engineers are overpaid",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What is the main argument of proponents of location-based pay?",
        options: [
          "That remote work should be discouraged",
          "That it reflects economic reality and lets a company employ more people appropriately",
          "That big-city workers deserve less",
          "That pay should never vary",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why do critics call the logic 'backwards'?",
        options: [
          "Because cheaper areas are actually more expensive",
          "Because pay should reflect the value of the work, not the employee's location",
          "Because companies cannot afford remote workers",
          "Because remote work reduces productivity",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What additional point do critics make about company costs?",
        options: [
          "Remote workers cost more to manage",
          "The remote worker in a cheaper area may be saving the company office and relocation costs",
          "Location pay saves no money",
          "Cheaper areas have worse internet",
        ],
        correctIndex: 1,
      },
      {
        prompt: "According to critics, how can location-based pay 'entrench inequality'?",
        options: [
          "By paying everyone the same",
          "By tending to pay the most to those already in the wealthiest areas",
          "By forcing workers to relocate",
          "By eliminating remote work",
        ],
        correctIndex: 1,
      },
      {
        prompt: "How does the 'third perspective' reframe the issue?",
        options: [
          "It says geography is the only thing that matters",
          "It says the real issue is transparency and consistency, not geography",
          "It says pay should be secret",
          "It says the debate cannot be resolved",
        ],
        correctIndex: 1,
      },
      {
        prompt: "According to the third perspective, what do employees actually resent?",
        options: [
          "The existence of any formula",
          "The suspicion that the formula is a pretext for paying some people less",
          "Working remotely at all",
          "Living in expensive cities",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What do most analysts now concede?",
        options: [
          "That location pay is always fair",
          "That no policy is fair in the abstract; fairness depends on execution",
          "That pay should never be adjusted",
          "That transparency does not matter",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Which position does the commenter ultimately align with?",
        options: [
          "The proponents of location-based pay",
          "The third camp — that it was about trust in the rule, not geography",
          "The view that remote work should end",
          "The critics' original position, unchanged",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What single criticism does the commenter add to the article?",
        options: [
          "That the formula was too generous",
          "That transparency came far too late, after morale was already damaged",
          "That location pay should be illegal",
          "That the third camp is wrong",
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

export const readingTest6: MockTest = {
  id: "reading-6",
  title: "CELPIP Reading — Advanced Practice Test 6",
  section: "reading",
  description:
    "The most demanding CELPIP-style Reading test in the set, with all four parts: layered Correspondence (11Q), a conditional Diagram task (8Q), a dense Information passage (9Q), and multi-voice Viewpoints (10Q) — 38 questions total. Inference, tone, and vocabulary-in-context heavy.",
  durationLabel: "55–60 min",
  questionCount: 38,
  steps,
}
