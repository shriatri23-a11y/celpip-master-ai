import type { MockTest, TestStep, ReadingStep } from "./types"
import type { ReadingDiagram } from "@/lib/reading-diagram"

const HEADER_BASE = "Mock Test - Reading"

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
    id: "reading-intro",
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
    id: "reading-p1-intro",
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
    "reading-p1",
    `${HEADER_BASE} Part 1: Reading Correspondence`,
    "Read the two messages below, then choose the best answer to each question.",
    [
      "MESSAGE 1",
      "Dear Tenants,",
      "I am writing to inform you that the building's main water supply will be shut off on Saturday, September 14th, between 8:00 a.m. and 2:00 p.m. to allow our plumber to replace the aging pipes in the basement. This work has been necessary for some time, and we appreciate your patience.",
      "During this period, water will not be available in any unit. We strongly recommend that you fill containers the evening before and make other arrangements for drinking water. The laundry room will also be closed for the day. If you have any specific concerns — for example, if a medical condition requires continuous water access — please contact the building manager by Thursday so that we can make suitable arrangements.",
      "We apologize for the inconvenience and thank you for your cooperation.",
      "Sincerely,",
      "Margaret Osei, Building Manager",
      "",
      "MESSAGE 2",
      "Hi Margaret,",
      "Thank you for the advance notice about Saturday's shutdown. I have a question: I am hosting a small dinner that evening and I planned to cook. Will the water be back on by 6:00 p.m.? The notice says work ends at 2:00 p.m., but I want to make sure there are no delays.",
      "Also, my mother-in-law, who uses a kidney dialysis machine at home, will be staying with me that weekend. I am not sure whether that counts as a medical condition requiring continuous water access. Could you clarify?",
      "I would also appreciate knowing if any alternative water source will be set up in the building, such as a water station in the lobby.",
      "Thanks very much,",
      "Paul Simmons, Unit 304",
    ],
    660, // 11 minutes
    [
      {
        prompt: "Why is the water being shut off on Saturday?",
        options: [
          "To replace aging pipes in the basement",
          "To clean the water tanks on the roof",
          "Because the city is repairing the main water line",
          "To inspect all units for leaks",
        ],
        correctIndex: 0,
      },
      {
        prompt: "What does Margaret ask tenants who have medical concerns to do?",
        options: [
          "Call the city water authority",
          "Contact the building manager by Thursday",
          "Send a written letter by Friday",
          "Speak to the building plumber directly",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Which facility will be unavailable during the shutdown?",
        options: [
          "The parking garage",
          "The fitness centre",
          "The laundry room",
          "The mail room",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What does Margaret recommend tenants do the evening before?",
        options: [
          "Notify local emergency services",
          "Move to a hotel for the night",
          "Test all taps and report leaks",
          "Fill containers with water",
        ],
        correctIndex: 3,
      },
      {
        prompt: "What is Paul's primary concern about the shutdown?",
        options: [
          "Whether the water will be on by 6:00 p.m. for his dinner",
          "Whether the laundry room will be open on Sunday",
          "Whether the plumber is licensed",
          "Whether his rent will be reduced",
        ],
        correctIndex: 0,
      },
      {
        prompt: "Why does Paul mention his mother-in-law?",
        options: [
          "She is the building manager's contact",
          "She will be staying with him and uses a dialysis machine",
          "She complained about the notice being too short",
          "She plans to use the laundry room on Saturday",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What additional information does Paul ask about?",
        options: [
          "Whether any alternative water source will be available in the building",
          "Whether he can delay his rent payment",
          "Whether the plumber will enter his unit",
          "Whether the shutdown will affect the elevator",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What time does Margaret say the work will end?",
        options: [
          "10:00 a.m.",
          "12:00 p.m.",
          "2:00 p.m.",
          "4:00 p.m.",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What is the tone of Margaret's notice?",
        options: [
          "Apologetic and informative",
          "Angry and demanding",
          "Casual and humorous",
          "Vague and unhelpful",
        ],
        correctIndex: 0,
      },
      {
        prompt: "What does Paul's email suggest about his attitude toward the building management?",
        options: [
          "He is appreciative but has specific questions",
          "He is angry and threatens to move out",
          "He is indifferent and does not plan to prepare",
          "He is critical of the building's maintenance history",
        ],
        correctIndex: 0,
      },
      {
        prompt: "Which of the following best describes the main purpose of Paul's email?",
        options: [
          "To complain about the timing of the shutdown",
          "To request a reduction in rent",
          "To seek clarification on two concerns and ask about water alternatives",
          "To introduce his mother-in-law to the building manager",
        ],
        correctIndex: 2,
      },
    ],
  ),

  // ---- Part 2: Reading to Apply a Diagram (8 questions / 9 min) ----
  {
    id: "reading-p2-intro",
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
    "reading-p2",
    `${HEADER_BASE} Part 2: Reading to Apply a Diagram`,
    "Read the diagram comparing travel options to a conference in Seattle, and the email that refers to it. Then use the drop-down menu to choose the best option for each question.",
    [
      "Subject: Getting to the Seattle conference",
      "To: Janice Wong <jwong@ubc.ca>",
      "From: Peter Kull <pkull@ubc.ca>",
      "",
      "Hi Janice,",
      "The presentation file is ready! I've also looked into how we should travel to the conference next week. I've put the three options into the diagram on the left so we can compare them.",
      "The bus is by far the cheapest, but it only runs in the morning and has no washrooms on board, which is tough for a three-and-a-half-hour trip. The train costs more, but the coastal views are lovely and there's free Wi-Fi, so we could keep working. The plane is the priciest, but it would get us there in barely over an hour and give us the most flexibility.",
      "Let me know which one you prefer. After all, we've both worked hard on this project!",
      "Best,",
      "Peter",
    ],
    540, // 9 minutes
    [
      {
        prompt: "The cheapest return ticket is offered by the",
        options: ["train", "bus", "plane", "options cost the same"],
        correctIndex: 1,
      },
      {
        prompt: "The fastest way to reach Seattle is by",
        options: ["train", "bus", "plane", "any option (all are equal)"],
        correctIndex: 2,
      },
      {
        prompt: "A traveller who wants free Wi-Fi and scenic coastal views should take the",
        options: ["train", "bus", "plane", "none of the options"],
        correctIndex: 0,
      },
      {
        prompt: "The option that offers only morning departures is the",
        options: ["train", "bus", "plane", "train and plane"],
        correctIndex: 1,
      },
      {
        prompt: "The return train ticket costs",
        options: ["$100", "$260", "$340", "$180"],
        correctIndex: 1,
      },
      {
        prompt: "The plane journey takes about",
        options: ["1 hour 10 minutes", "3 hours 30 minutes", "4 hours 25 minutes", "2 hours"],
        correctIndex: 0,
      },
      {
        prompt: "Compared with the train, the bus is",
        options: [
          "more expensive but faster",
          "cheaper but has no washrooms",
          "the same price with more comfort",
          "slower and more expensive",
        ],
        correctIndex: 1,
      },
      {
        prompt: "If Peter and Janice must arrive in under two hours, they should choose the",
        options: ["train", "bus", "plane", "bus or train"],
        correctIndex: 2,
      },
    ],
    {
      title: "Travel Options to the Seattle Conference",
      caption: "Return trip from Vancouver — compare features, price, and duration.",
      rows: [
        {
          label: "Train",
          icon: "train",
          cells: [
            { label: "Features", lines: ["First-class option", "Scenic coastal route", "Free Wi-Fi on board"] },
            { label: "Price", lines: ["$260 return"] },
            { label: "Duration", lines: ["4 hr 25 min"] },
          ],
        },
        {
          label: "Bus",
          icon: "bus",
          cells: [
            { label: "Features", lines: ["No checked baggage", "No washrooms, no stops", "Morning trips only"] },
            { label: "Price", lines: ["$100 return"] },
            { label: "Duration", lines: ["3 hr 30 min"] },
          ],
        },
        {
          label: "Plane",
          icon: "plane",
          cells: [
            { label: "Features", lines: ["Carry-on only (fee for bags)", "Frequent daily departures", "Snacks for purchase"] },
            { label: "Price", lines: ["$340 return"] },
            { label: "Duration", lines: ["1 hr 10 min"] },
          ],
        },
      ],
    },
  ),

  // ---- Part 3: Reading for Information (9 questions / 10 min) ----
  {
    id: "reading-p3-intro",
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
    "reading-p3",
    `${HEADER_BASE} Part 3: Reading for Information`,
    "Read the passage, then choose the best answer to each question.",
    [
      "THE SCIENCE OF SLEEP DEBT",
      "",
      "Most adults need between seven and nine hours of sleep per night. Yet surveys consistently find that a large proportion of working adults sleep fewer than six hours on weekdays, relying on weekends to 'catch up.' Scientists who study sleep have a term for the accumulated shortage: sleep debt. The question of whether this debt can truly be repaid — and at what cost — has become one of the more contested areas of sleep research.",
      "",
      "In the short term, sleep loss has well-documented effects. Reaction time slows, concentration weakens, and the risk of errors in tasks requiring sustained attention rises sharply. A person who has been awake for seventeen hours shows measurable cognitive impairment roughly equivalent to a blood-alcohol level considered legally impaired in most countries. Crucially, people who are chronically sleep-deprived often underestimate how impaired they are, since the subjective sense of sleepiness fades even as objective performance continues to decline.",
      "",
      "The long-term picture is more worrying. Research has linked chronic sleep restriction to elevated risks of cardiovascular disease, type 2 diabetes, obesity, and impaired immune function. One mechanism is hormonal: short sleep raises levels of cortisol, the stress hormone, and disrupts the balance of leptin and ghrelin, two hormones that regulate appetite. This disruption may partly explain why shift workers, who often have fragmented or daytime sleep, show higher rates of metabolic disorders than day workers.",
      "",
      "The popular belief that a long weekend sleep can erase the week's debt is not fully supported by the evidence. Laboratory studies show that recovery sleep does restore many acute performance measures within a day or two. However, some studies suggest that the metabolic consequences of chronic restriction — particularly the hormonal imbalances — can persist even after several nights of recovery. Researchers caution that 'banking' sleep before a period of restriction, such as sleeping an extra hour or two in the days before a long-haul flight, does provide a modest benefit, but it is not a substitute for consistent, adequate sleep.",
      "",
      "Sleep scientists are increasingly calling for systemic changes: adjusting school and work start times to match natural circadian rhythms, reducing evening exposure to blue light from screens, and treating chronic insomnia as a medical condition rather than a personal failing. The evidence suggests that the cost of widespread sleep deprivation — in health, productivity, and road safety — is far higher than society currently recognizes.",
    ],
    600, // 10 minutes
    [
      {
        prompt: "What is 'sleep debt' as described in the passage?",
        options: [
          "A medical condition diagnosed by a doctor",
          "The accumulated shortage of sleep over time",
          "The extra sleep people get on weekends",
          "A method for measuring sleep quality in a laboratory",
        ],
        correctIndex: 1,
      },
      {
        prompt: "According to the passage, what happens to people who have been awake for seventeen hours?",
        options: [
          "They fall asleep involuntarily",
          "They show cognitive impairment similar to legal intoxication",
          "Their reaction time actually improves due to adrenaline",
          "They become more focused because of stress hormones",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does the passage say about people's awareness of their own sleep deprivation?",
        options: [
          "They accurately estimate how impaired they are",
          "They tend to overestimate how impaired they are",
          "They often underestimate how impaired they are",
          "They have no way of knowing they are impaired",
        ],
        correctIndex: 2,
      },
      {
        prompt: "Which of the following is NOT listed as a long-term health consequence of chronic sleep restriction?",
        options: [
          "Cardiovascular disease",
          "Improved immune function",
          "Type 2 diabetes",
          "Obesity",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why might shift workers have higher rates of metabolic disorders, according to the passage?",
        options: [
          "They eat less healthy food than day workers",
          "Their fragmented or daytime sleep disrupts appetite-regulating hormones",
          "They exercise less because of their unusual schedules",
          "They are more likely to have pre-existing conditions",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does the passage say about 'banking' sleep before a period of restriction?",
        options: [
          "It is completely ineffective and should not be attempted",
          "It provides a full substitute for consistent adequate sleep",
          "It provides a modest benefit but is not a full substitute",
          "It is only beneficial if done the night before the restriction",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What does the passage suggest about the metabolic effects of chronic sleep restriction, even after recovery sleep?",
        options: [
          "They disappear after one night of good sleep",
          "They may persist even after several nights of recovery",
          "They are completely reversed within a week",
          "They are not mentioned as being long-lasting",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Which systemic change do sleep scientists recommend?",
        options: [
          "Making it illegal to work night shifts",
          "Adjusting school and work start times to match circadian rhythms",
          "Requiring all adults to sleep at least nine hours per night",
          "Banning the use of all electronic devices after dark",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What is the main argument of the passage?",
        options: [
          "Most people do not need more than six hours of sleep per night",
          "Sleeping in on weekends is a reliable cure for sleep deprivation",
          "Sleep deprivation has serious and underestimated costs that society should address",
          "Shift work should be abolished because it causes too many health problems",
        ],
        correctIndex: 2,
      },
    ],
  ),

  // ---- Part 4: Reading for Viewpoints (10 questions / 13 min) ----
  {
    id: "reading-p4-intro",
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
    "reading-p4",
    `${HEADER_BASE} Part 4: Reading for Viewpoints`,
    "Read the article and the comment below, then choose the best answer to each question.",
    [
      "ARTICLE — SHOULD GROCERY STORES BE REQUIRED TO DONATE UNSOLD FOOD?",
      "",
      "Every year, an estimated one-third of food produced globally is lost or wasted. A significant portion of this waste occurs at the retail level: grocery stores discard large quantities of food that is still safe to eat — bread approaching its best-before date, produce with minor cosmetic imperfections, or items nearing the end of their shelf life. In response, a growing number of countries and cities have passed legislation requiring large retailers to donate unsold edible food to food banks and other charities rather than dispose of it.",
      "",
      "Supporters of these laws argue that the benefits are clear and multiple. Food banks in many cities operate with chronic shortages, and retailer donations can meaningfully supplement their supplies. Proponents also point to the environmental argument: food decomposing in landfills produces methane, a potent greenhouse gas, so diverting food waste reduces emissions. Finally, some advocates note that mandatory donation, by creating a legal obligation, removes any ambiguity about liability — retailers in jurisdictions with Good Samaritan laws are protected from lawsuits if donated food is consumed and causes illness.",
      "",
      "Critics are more cautious. Some retailers argue that the logistics of sorting, storing, and transporting near-expired food are costly and place an unfair burden on businesses that are already operating on thin margins. There are also concerns about food safety: critics note that donated food is not always handled under ideal conditions, and the risk of spoilage during transport to a food bank is real, even if legal protections exist. A further objection is philosophical: mandatory donation, critics argue, should not substitute for more fundamental changes to food pricing and distribution that would address food insecurity at its root.",
      "",
      "COMMENT (by a grocery store manager):",
      "We have been donating surplus food voluntarily for about three years, and frankly, the experience has been more positive than I expected. Our food bank partner sends a refrigerated van twice a week, which handles the logistics on their end. The sorting does take staff time, but once we established a system, it became routine. I will admit I was nervous about liability at first — we had stories of businesses being sued in other countries — but our lawyer confirmed that provincial law protects us fully. My one concern with making it mandatory is that smaller independent stores may not have the resources to set up a proper donation system, and I would not want the law to create a burden that only large chains can manage.",
      "",
    ],
    780, // 13 minutes
    [
      {
        prompt: "What is the main topic of the article?",
        options: [
          "The global problem of food loss at the production stage",
          "Whether grocery stores should be required to donate unsold food",
          "How food banks can raise more money through donations",
          "Why consumers waste so much food at home",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What environmental benefit do supporters of mandatory donation laws cite?",
        options: [
          "Reduced packaging waste from grocery stores",
          "Lower water usage in food production",
          "Reduced methane emissions from food decomposing in landfills",
          "Decreased use of pesticides on imperfect produce",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What do Good Samaritan laws do, according to the article?",
        options: [
          "Require all businesses to donate to charity",
          "Protect retailers from lawsuits if donated food causes illness",
          "Set standards for food quality at food banks",
          "Require food banks to accept all donated items",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What logistical concern do critics of mandatory donation raise?",
        options: [
          "Food banks do not have enough storage space",
          "Sorting and transporting near-expired food is costly",
          "Customers object to stores donating food",
          "Food banks are already adequately supplied",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What philosophical objection do some critics raise against mandatory donation laws?",
        options: [
          "Mandatory donation violates freedom of religion",
          "Retailers should not be responsible for social problems",
          "Mandatory donation should not substitute for more fundamental changes to food pricing and distribution",
          "Food waste is not actually a significant environmental problem",
        ],
        correctIndex: 2,
      },
      {
        prompt: "How does the grocery store manager describe the logistics of the donation program?",
        options: [
          "Difficult and not worth the effort",
          "Initially challenging but routine once a system was established",
          "Completely managed by the store with no outside help",
          "Too expensive for the store to sustain long-term",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What was the store manager's initial concern about donating food?",
        options: [
          "The quality of the food being donated",
          "Whether customers would object",
          "Potential liability if donated food caused illness",
          "Whether the food bank was trustworthy",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What is the store manager's main concern about making donation mandatory?",
        options: [
          "That the law will force stores to donate food that is unsafe",
          "That smaller independent stores may lack resources to comply",
          "That food banks will receive more food than they can use",
          "That provincial liability protections are not strong enough",
        ],
        correctIndex: 1,
      },
      {
        prompt: "On what point does the store manager's experience support the supporters' argument?",
        options: [
          "That mandatory laws are the only way to ensure donations",
          "That the environmental benefit of diverting food waste is overstated",
          "That voluntary donation can work well and be manageable in practice",
          "That food banks prefer cash donations over food",
        ],
        correctIndex: 2,
      },
      {
        prompt: "Which of the following best describes the store manager's overall position?",
        options: [
          "Strongly in favour of mandatory donation laws for all retailers",
          "Strongly opposed to any form of food donation",
          "Personally positive about donating, but cautious about mandatory laws for small stores",
          "Neutral — the manager has no opinion on the issue",
        ],
        correctIndex: 2,
      },
    ],
  ),

  {
    id: "result",
    kind: "result",
    headerTitle: `${HEADER_BASE} Results`,
  },
]

export const readingTest: MockTest = {
  id: "reading-1",
  title: "CELPIP Reading — Full Practice Test 1",
  section: "reading",
  description:
    "A complete CELPIP-style Reading test with all four parts: Correspondence (11Q), Applying a Diagram (8Q), Information (9Q), and Viewpoints (10Q) — 38 questions total.",
  durationLabel: "55–60 min",
  questionCount: 38,
  steps,
}
