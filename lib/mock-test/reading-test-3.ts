import type { MockTest, TestStep, ReadingStep } from "./types"

const HEADER_BASE = "Mock Test 3 - Reading"

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
    id: "reading3-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} - CELPIP Test`,
    sectionTitle: "Reading Test Instructions",
    bullets: [
      "On the official test, once you leave a page, you cannot go back to it to change your answers. However, in this practice test, you can.",
      "This Reading Test is identical in format to the official test. It has four parts and takes about 55 to 60 minutes.",
      "Choose the best answer to each question.",
    ],
  },

  // ---- Part 1: Reading Correspondence ----
  {
    id: "reading3-p1-intro",
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
    "reading3-p1",
    `${HEADER_BASE} Part 1: Reading Correspondence`,
    "Read the message, then choose the best answer to each question.",
    [
      "Dear Mr. Tanaka,",
      "Thank you for volunteering to coach the junior soccer team this season. I'm writing to confirm a few details before our first practice. Practices will be held on Wednesday evenings from six to seven thirty at Fielder Park, starting next week. Because the earlier field was double-booked, we have moved to the larger field near the north parking lot.",
      "Each coach is responsible for bringing the equipment bag, which I will hand over to you at the first session. Please remind parents that players need shin guards and a filled water bottle, as the park's fountain is currently out of service. If a practice must be cancelled due to weather, I will send a message to all coaches by four o'clock that afternoon.",
      "We're so grateful for your time. The children are lucky to have you.",
      "Sincerely,",
      "Coordinator Nadia Farouk",
    ],
    [
      {
        prompt: "Why is Nadia writing to Mr. Tanaka?",
        options: [
          "To confirm details about coaching the team",
          "To ask him to pay a registration fee",
          "To cancel the soccer season",
          "To complain about the field",
        ],
        correctIndex: 0,
      },
      {
        prompt: "Why has the practice location changed?",
        options: [
          "The old field was too small",
          "The earlier field was double-booked",
          "The park is closing",
          "Parents requested the change",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What will Nadia give Mr. Tanaka at the first session?",
        options: [
          "A list of parents",
          "A coaching certificate",
          "The equipment bag",
          "A set of uniforms",
        ],
        correctIndex: 2,
      },
      {
        prompt: "Why should players bring a filled water bottle?",
        options: [
          "Bottled water is banned",
          "Players train for a long time",
          "The weather is very hot",
          "The park's fountain is out of service",
        ],
        correctIndex: 3,
      },
      {
        prompt: "How will coaches learn about a weather cancellation?",
        options: [
          "Nadia will message them by four o'clock",
          "A sign will be posted at the park",
          "Parents will call each coach",
          "They must check the website hourly",
        ],
        correctIndex: 0,
      },
    ],
  ),

  // ---- Part 2: Reading to Apply a Diagram ----
  {
    id: "reading3-p2-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 2: Reading to Apply a Diagram`,
    sectionTitle: "Reading to Apply a Diagram",
    bullets: [
      "Read the description of the situation.",
      "Then answer the questions by choosing the best option.",
    ],
  },
  reading(
    "reading3-p2",
    `${HEADER_BASE} Part 2: Reading to Apply a Diagram`,
    "A museum published the guide below. Choose the best answer to complete each statement.",
    [
      "The Harbourview Museum has three floors. The ground floor contains the ticket desk, the gift shop, and a hands-on discovery room designed for young children. The second floor houses the permanent art collection, arranged by century, along with a quiet reading lounge. The third floor is reserved for temporary exhibitions and a rooftop cafe with harbour views.",
      "Guided tours of the permanent collection begin at the second-floor information point at eleven and two o'clock daily. Strollers are welcome on all floors, but large bags must be left in the lockers beside the ticket desk.",
    ],
    [
      {
        prompt: "A visitor with young children looking for hands-on activities should go to the:",
        options: ["Ground floor", "Second floor", "Third floor", "Rooftop only"],
        correctIndex: 0,
      },
      {
        prompt: "The permanent art collection is on the:",
        options: ["Ground floor", "Second floor", "Third floor", "Basement"],
        correctIndex: 1,
      },
      {
        prompt: "A temporary exhibition would be found on the:",
        options: ["Ground floor", "Second floor", "Third floor", "Second floor lounge"],
        correctIndex: 2,
      },
      {
        prompt: "Where must a visitor leave a large bag?",
        options: [
          "In the rooftop cafe",
          "In the reading lounge",
          "On the third floor",
          "In the lockers beside the ticket desk",
        ],
        correctIndex: 3,
      },
      {
        prompt: "Where do guided tours of the permanent collection begin?",
        options: [
          "The second-floor information point",
          "The gift shop",
          "The rooftop cafe",
          "The discovery room",
        ],
        correctIndex: 0,
      },
    ],
  ),

  // ---- Part 3: Reading for Information ----
  {
    id: "reading3-p3-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 3: Reading for Information`,
    sectionTitle: "Reading for Information",
    bullets: [
      "Read the following passage.",
      "Then answer the questions by choosing the best option.",
    ],
  },
  reading(
    "reading3-p3",
    `${HEADER_BASE} Part 3: Reading for Information`,
    "Read the passage, then choose the best answer to each question.",
    [
      "For most of history, tomatoes were viewed with suspicion in parts of Europe. When they first arrived from the Americas in the sixteenth century, many wealthy Europeans believed the fruit was poisonous. In fact, the problem lay not with the tomato but with the plates. Rich households often ate from pewter dishes containing lead, and the tomato's acidity caused the lead to leach into the food, sometimes causing illness.",
      "Poorer families, who ate from plain wooden plates, suffered no such effects and continued to enjoy tomatoes freely. Over time, as cheaper ceramic and porcelain dishes became common, the mysterious 'poisonings' stopped, and the tomato's reputation slowly recovered.",
      "Today the tomato is one of the most widely grown fruits in the world. Its journey from feared curiosity to kitchen staple is a reminder that scientific misunderstandings can persist for generations before the true cause is finally identified.",
    ],
    [
      {
        prompt: "What did many wealthy Europeans believe about early tomatoes?",
        options: [
          "That they were poisonous",
          "That they were too expensive",
          "That they were sacred",
          "That they could not be grown locally",
        ],
        correctIndex: 0,
      },
      {
        prompt: "What actually caused the illnesses?",
        options: [
          "A disease in the plants",
          "Lead leaching from pewter plates",
          "Overeating the fruit",
          "Contaminated water",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why were poorer families unaffected?",
        options: [
          "They cooked the tomatoes longer",
          "They ate very few tomatoes",
          "They ate from plain wooden plates",
          "They grew a different variety",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What eventually helped the tomato's reputation recover?",
        options: [
          "A royal decree",
          "A famous chef's recipe",
          "New farming laws",
          "The spread of cheaper ceramic dishes",
        ],
        correctIndex: 3,
      },
      {
        prompt: "What lesson does the passage draw from the tomato's story?",
        options: [
          "Scientific misunderstandings can persist for generations",
          "Wealthy people always eat better food",
          "Fruits from the Americas are dangerous",
          "Wooden plates are healthier than ceramic",
        ],
        correctIndex: 0,
      },
    ],
  ),

  // ---- Part 4: Reading for Viewpoints ----
  {
    id: "reading3-p4-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 4: Reading for Viewpoints`,
    sectionTitle: "Reading for Viewpoints",
    bullets: [
      "Read the following article and the comment that follows it.",
      "Then answer the questions by choosing the best option.",
    ],
  },
  reading(
    "reading3-p4",
    `${HEADER_BASE} Part 4: Reading for Viewpoints`,
    "Read the article and comment, then choose the best answer to each question.",
    [
      "ARTICLE: Cities around the world are experimenting with making public transit free. Supporters argue that removing fares increases ridership, reduces car traffic, and helps low-income residents who spend a large share of their income on transportation. They also note that collecting fares is expensive, requiring ticket machines, inspectors, and administration that free systems could eliminate.",
      "Critics respond that 'free' transit is not truly free — the cost simply shifts to taxpayers. They worry that without fare revenue, systems may lack the funds to maintain vehicles or expand service, leading to crowding and delays. Some also argue that the money might do more good if spent directly on improving service frequency.",
      "COMMENT (by a commuter): My city made buses free two years ago, and I now leave my car at home most days. The buses are definitely more crowded at rush hour, which can be frustrating. Still, I save money and the city feels less congested. I just hope they invest enough to add more buses, because that's the real test.",
    ],
    [
      {
        prompt: "What do supporters say free transit does?",
        options: [
          "Increases ridership and reduces car traffic",
          "Raises ticket prices over time",
          "Eliminates the need for buses",
          "Reduces the number of routes",
        ],
        correctIndex: 0,
      },
      {
        prompt: "What is the critics' main financial concern?",
        options: [
          "Fares will rise sharply",
          "The cost shifts to taxpayers and may limit maintenance",
          "Drivers will be paid too much",
          "Tourists will overcrowd the system",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What change did the commenter make after buses became free?",
        options: [
          "They moved to a new city",
          "They bought a second car",
          "They leave their car at home most days",
          "They stopped commuting entirely",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What frustration does the commenter mention?",
        options: [
          "The buses are too expensive",
          "The routes were cancelled",
          "The buses run too early",
          "The buses are more crowded at rush hour",
        ],
        correctIndex: 3,
      },
      {
        prompt: "What does the commenter see as 'the real test'?",
        options: [
          "Whether the city invests enough to add more buses",
          "Whether fares return next year",
          "Whether other cities copy the idea",
          "Whether drivers go on strike",
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

export const readingTest3: MockTest = {
  id: "reading-3",
  title: "CELPIP Reading — Full Practice Test 3",
  section: "reading",
  description:
    "A third complete CELPIP-style Reading test with all four parts: Correspondence, Applying a Diagram, Information, and Viewpoints.",
  durationLabel: "55–60 min",
  questionCount: 20,
  steps,
}
