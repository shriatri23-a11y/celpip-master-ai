import type { MockTest, TestStep, ReadingStep } from "./types"

const HEADER_BASE = "Mock Test - Reading"

// Helper to build a reading split step (passage + MCQs).
function reading(
  id: string,
  header: string,
  instruction: string,
  passage: string[],
  questions: {
    prompt: string
    options: [string, string, string, string]
    correctIndex: number
  }[],
): ReadingStep {
  return {
    id,
    kind: "reading",
    headerTitle: header,
    instruction,
    passage,
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
      "On the official test, once you leave a page, you cannot go back to it to change your answers. However, in this practice test, you can.",
      "For more information on test format, review the CELPIP Reading overview.",
      "Please note that the order of question types on the official test may differ from the order presented here.",
      "This Reading Test is identical in format to the official test. It has four parts and takes about 55 to 60 minutes.",
    ],
  },

  // ---- Part 1: Reading Correspondence ----
  {
    id: "reading-p1-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 1: Reading Correspondence`,
    sectionTitle: "Reading Correspondence",
    bullets: [
      "Read the following message.",
      "Then answer the questions by choosing the best option.",
      "You have about 11 minutes to complete this part.",
    ],
  },
  reading(
    "reading-p1",
    `${HEADER_BASE} Part 1: Reading Correspondence`,
    "Read the message, then choose the best answer to each question.",
    [
      "Dear Mr. Okafor,",
      "Thank you for renting a workshop space at the Riverside Community Centre last month. I am writing because several members have asked whether your woodworking course will run again this fall. The response to your spring session was overwhelmingly positive, and we would be delighted to host you once more.",
      "If you are available, we can offer you the larger studio on the second floor, which seats up to twenty participants and has improved ventilation. The rental fee would remain the same as last term, provided you commit to a full eight-week schedule. We would also ask that you supply your own hand tools, as the centre can only guarantee workbenches and safety equipment.",
      "Please let me know by the end of the month so that we can include the course in our autumn brochure. I look forward to working with you again.",
      "Warm regards,",
      "Renata Alvsson, Programs Coordinator",
    ],
    [
      {
        prompt: "Why is Renata writing to Mr. Okafor?",
        options: [
          "To invite him to teach his course again",
          "To complain about last term's workshop",
          "To offer him a refund on his rental fee",
          "To cancel an upcoming woodworking class",
        ],
        correctIndex: 0,
      },
      {
        prompt: "What is different about the space being offered this term?",
        options: [
          "It is cheaper than the previous room",
          "It is larger and better ventilated",
          "It includes a full set of hand tools",
          "It is located on the ground floor",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What condition must Mr. Okafor meet to keep the same fee?",
        options: [
          "He must enrol at least twenty students",
          "He must teach on weekends only",
          "He must commit to a full eight-week schedule",
          "He must provide his own workbenches",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What does the centre expect participants to bring?",
        options: [
          "Their own safety equipment",
          "A registration deposit",
          "Nothing; everything is supplied",
          "Their own hand tools",
        ],
        correctIndex: 3,
      },
      {
        prompt: "By when must Mr. Okafor respond?",
        options: [
          "By the end of the month",
          "Within one week",
          "Before the spring session",
          "By the first day of class",
        ],
        correctIndex: 0,
      },
    ],
  ),

  // ---- Part 2: Reading to Apply a Diagram ----
  {
    id: "reading-p2-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 2: Reading to Apply a Diagram`,
    sectionTitle: "Reading to Apply a Diagram",
    bullets: [
      "Read the description of the situation.",
      "Then complete the reply message by choosing the best word or phrase for each blank.",
    ],
  },
  reading(
    "reading-p2",
    `${HEADER_BASE} Part 2: Reading to Apply a Diagram`,
    "A community garden posted the plan below. Choose the best answer to complete each statement.",
    [
      "The Maple Street Community Garden is divided into four zones. Zone A, nearest the entrance, is reserved for raised beds suitable for gardeners who cannot bend easily. Zone B, in the sunny south corner, is used for vegetables that need full daylight, such as tomatoes and peppers. Zone C, shaded by a large oak, is planted with herbs and leafy greens that tolerate partial shade. Zone D, at the back, holds the compost bins and a rainwater collection tank shared by all members.",
      "New members are assigned a plot based on their needs and are asked to attend one orientation session before planting.",
    ],
    [
      {
        prompt: "A gardener who uses a wheelchair would most likely be assigned to:",
        options: ["Zone A", "Zone B", "Zone C", "Zone D"],
        correctIndex: 0,
      },
      {
        prompt: "Someone wanting to grow tomatoes should choose:",
        options: ["Zone A", "Zone B", "Zone C", "Zone D"],
        correctIndex: 1,
      },
      {
        prompt: "The best zone for growing shade-tolerant herbs is:",
        options: ["Zone A", "Zone B", "Zone C", "Zone D"],
        correctIndex: 2,
      },
      {
        prompt: "A member who needs to collect rainwater would go to:",
        options: ["Zone A", "Zone B", "Zone C", "Zone D"],
        correctIndex: 3,
      },
      {
        prompt: "Before planting, every new member must:",
        options: [
          "Attend one orientation session",
          "Pay an annual membership fee",
          "Build their own raised bed",
          "Bring their own compost",
        ],
        correctIndex: 0,
      },
    ],
  ),

  // ---- Part 3: Reading for Information ----
  {
    id: "reading-p3-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 3: Reading for Information`,
    sectionTitle: "Reading for Information",
    bullets: [
      "Read the following passage.",
      "Then answer the questions by choosing the best option.",
    ],
  },
  reading(
    "reading-p3",
    `${HEADER_BASE} Part 3: Reading for Information`,
    "Read the passage, then choose the best answer to each question.",
    [
      "For decades, city planners assumed that widening roads would reduce traffic. Experience has repeatedly shown the opposite. When a congested highway is expanded, the extra capacity is quickly filled by drivers who previously avoided the route or travelled at different times. Researchers call this phenomenon 'induced demand.'",
      "A growing number of cities have therefore shifted their focus from moving cars to moving people. Investments in frequent bus service, protected bicycle lanes, and pedestrian-friendly streets can carry far more travellers per hour than an additional traffic lane. Crucially, these measures also tend to reduce emissions and injuries.",
      "Change is not always welcomed. Merchants sometimes fear that removing parking will drive away customers, and some commuters resist longer walks to transit stops. Studies from several cities, however, suggest that foot traffic and local spending often rise once streets become more comfortable for walking. The evidence points to a simple lesson: the goal of a transportation system should be access, not merely speed.",
    ],
    [
      {
        prompt: "What is 'induced demand'?",
        options: [
          "New road capacity being filled by additional drivers",
          "A sudden drop in the number of cars on a highway",
          "The demand for cheaper public transit",
          "A method for measuring road construction costs",
        ],
        correctIndex: 0,
      },
      {
        prompt: "According to the passage, what carries more travellers per hour than an extra lane?",
        options: [
          "Larger parking garages",
          "Frequent transit, bike lanes, and walkable streets",
          "Wider suburban highways",
          "Toll roads and express lanes",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why do some merchants resist removing parking?",
        options: [
          "They must pay for the construction",
          "They prefer wider sidewalks",
          "They fear losing customers",
          "They want more bicycle lanes",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What do studies suggest happens after streets become friendlier to walking?",
        options: [
          "Traffic accidents increase sharply",
          "Public transit is shut down",
          "Commuters buy more cars",
          "Foot traffic and local spending often rise",
        ],
        correctIndex: 3,
      },
      {
        prompt: "What is the main lesson of the passage?",
        options: [
          "Transportation should prioritize access, not just speed",
          "Cities should build as many roads as possible",
          "Driving is always faster than walking",
          "Parking should never be removed",
        ],
        correctIndex: 0,
      },
    ],
  ),

  // ---- Part 4: Reading for Viewpoints ----
  {
    id: "reading-p4-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 4: Reading for Viewpoints`,
    sectionTitle: "Reading for Viewpoints",
    bullets: [
      "Read the following article and the comment that follows it.",
      "Then answer the questions by choosing the best option.",
    ],
  },
  reading(
    "reading-p4",
    `${HEADER_BASE} Part 4: Reading for Viewpoints`,
    "Read the article and comment, then choose the best answer to each question.",
    [
      "ARTICLE: Supporters of a four-day work week argue that compressing the same output into fewer days improves both productivity and well-being. Trials in several countries have reported steadier focus, fewer sick days, and lower staff turnover. Advocates say that giving employees a third day of rest allows them to return to work more motivated and less prone to burnout.",
      "Critics counter that the model does not fit every industry. Hospitals, restaurants, and customer-service centres must remain staffed regardless of the calendar, and simply shifting the same work into four days can intensify daily pressure. They also warn that measured productivity gains may fade once the novelty wears off.",
      "COMMENT (by a reader): I manage a small design studio, and we tried the four-day week for six months. Honestly, the biggest surprise was that our clients barely noticed. We set clear response times, and my team's quality of work actually improved. That said, I agree it wouldn't suit a business that needs someone at the front desk every hour of every day.",
    ],
    [
      {
        prompt: "What benefit do supporters of the four-day week claim?",
        options: [
          "Improved productivity and well-being",
          "Lower salaries for employees",
          "Longer daily commutes",
          "Fewer public holidays",
        ],
        correctIndex: 0,
      },
      {
        prompt: "What concern do critics raise?",
        options: [
          "Employees will demand more pay",
          "The model does not fit every industry",
          "Customers will stop shopping entirely",
          "Offices will become overcrowded",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What did the reader find most surprising about their trial?",
        options: [
          "Their clients complained frequently",
          "Their costs rose dramatically",
          "Their clients barely noticed the change",
          "Their team wanted to return to five days",
        ],
        correctIndex: 2,
      },
      {
        prompt: "On what point does the reader agree with the critics?",
        options: [
          "That productivity always declines",
          "That salaries should be cut",
          "That the trial should have been longer",
          "That it would not suit a business needing constant front-desk coverage",
        ],
        correctIndex: 3,
      },
      {
        prompt: "What is the reader's overall attitude toward the four-day week?",
        options: [
          "Broadly positive, with limits for some businesses",
          "Completely opposed to the idea",
          "Indifferent and uninterested",
          "Convinced it works for every workplace",
        ],
        correctIndex: 0,
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
    "A complete CELPIP-style Reading test with all four parts: Correspondence, Applying a Diagram, Information, and Viewpoints.",
  durationLabel: "55–60 min",
  questionCount: 20,
  steps,
}
