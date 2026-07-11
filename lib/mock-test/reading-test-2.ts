import type { MockTest, TestStep, ReadingStep } from "./types"

const HEADER_BASE = "Mock Test 2 - Reading"

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
    id: "reading2-intro",
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
    id: "reading2-p1-intro",
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
    "reading2-p1",
    `${HEADER_BASE} Part 1: Reading Correspondence`,
    "Read the message, then choose the best answer to each question.",
    [
      "Hi Priya,",
      "I hope your move went smoothly! I'm writing because our book club is starting up again after the summer break, and everyone is hoping you'll rejoin us now that you're back in the neighbourhood. We've decided to meet on the first Tuesday of each month instead of Thursdays, since a few members had evening classes on Thursday.",
      "This season we're focusing on travel writing, and our first pick is a memoir about cycling across Portugal. If that doesn't appeal to you, don't worry — each member gets to choose the book for one month, so you'll have your turn to pick something you love. We meet at the Corner Cafe, which now has a quiet back room we can reserve for free as long as we each order something.",
      "Let me know if the new schedule works for you. It really wouldn't be the same without your recommendations.",
      "Take care,",
      "Danielle",
    ],
    [
      {
        prompt: "Why is Danielle writing to Priya?",
        options: [
          "To invite her to rejoin the book club",
          "To cancel this season's meetings",
          "To return a book she borrowed",
          "To recommend a new cafe",
        ],
        correctIndex: 0,
      },
      {
        prompt: "What has changed about the meeting schedule?",
        options: [
          "Meetings are now weekly",
          "Meetings moved to the first Tuesday of the month",
          "Meetings now happen on Thursdays",
          "Meetings were cancelled for the summer",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What is this season's reading theme?",
        options: [
          "Science fiction",
          "Local history",
          "Travel writing",
          "Cookbooks",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What does Danielle say about members' book choices?",
        options: [
          "Only Danielle chooses the books",
          "Books are chosen by vote each week",
          "Members must read three books a month",
          "Each member picks the book for one month",
        ],
        correctIndex: 3,
      },
      {
        prompt: "What is the condition for using the cafe's back room?",
        options: [
          "Each person must order something",
          "The group must pay a booking fee",
          "They can only meet in the morning",
          "They must bring their own food",
        ],
        correctIndex: 0,
      },
    ],
  ),

  // ---- Part 2: Reading to Apply a Diagram ----
  {
    id: "reading2-p2-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 2: Reading to Apply a Diagram`,
    sectionTitle: "Reading to Apply a Diagram",
    bullets: [
      "Read the description of the situation.",
      "Then answer the questions by choosing the best option.",
    ],
  },
  reading(
    "reading2-p2",
    `${HEADER_BASE} Part 2: Reading to Apply a Diagram`,
    "A recreation centre posted the floor plan below. Choose the best answer to complete each statement.",
    [
      "The Lakeside Recreation Centre has four wings arranged around a central lobby. The North Wing holds the swimming pool and change rooms. The East Wing contains two gymnasiums used for basketball and indoor soccer. The South Wing is the quiet zone, with a library corner, study tables, and the art studio. The West Wing houses the fitness room with weights and cardio machines, plus a small cafe near the exit.",
      "Members check in at the front desk in the central lobby. Children under twelve must be accompanied by an adult everywhere except the library corner, which has a supervised after-school program.",
    ],
    [
      {
        prompt: "A member who wants to swim laps should go to the:",
        options: ["North Wing", "East Wing", "South Wing", "West Wing"],
        correctIndex: 0,
      },
      {
        prompt: "A basketball game would take place in the:",
        options: ["North Wing", "East Wing", "South Wing", "West Wing"],
        correctIndex: 1,
      },
      {
        prompt: "Someone looking for a quiet place to study should go to the:",
        options: ["North Wing", "East Wing", "South Wing", "West Wing"],
        correctIndex: 2,
      },
      {
        prompt: "A member wanting to lift weights would head to the:",
        options: ["North Wing", "East Wing", "South Wing", "West Wing"],
        correctIndex: 3,
      },
      {
        prompt: "Where can a child under twelve go without an adult?",
        options: [
          "The library corner's after-school program",
          "The swimming pool",
          "The fitness room",
          "The gymnasiums",
        ],
        correctIndex: 0,
      },
    ],
  ),

  // ---- Part 3: Reading for Information ----
  {
    id: "reading2-p3-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 3: Reading for Information`,
    sectionTitle: "Reading for Information",
    bullets: [
      "Read the following passage.",
      "Then answer the questions by choosing the best option.",
    ],
  },
  reading(
    "reading2-p3",
    `${HEADER_BASE} Part 3: Reading for Information`,
    "Read the passage, then choose the best answer to each question.",
    [
      "Honeybees communicate the location of food through a remarkable behaviour known as the 'waggle dance.' When a forager returns to the hive after finding a rich patch of flowers, it moves in a figure-eight pattern on the vertical honeycomb. The angle of the dance relative to straight up signals the direction of the food in relation to the sun, while the duration of the central 'waggle' run indicates the distance.",
      "Researchers have found that the dance is astonishingly precise. A longer waggle run tells other bees the food is farther away, and nearby workers crowd around the dancer to read the message before flying off. Remarkably, bees can adjust their dance to account for the movement of the sun across the sky during the day.",
      "This system is not learned individually; it appears to be largely inherited. However, studies suggest that young bees improve their accuracy by following experienced dancers, hinting that even instinctive behaviours can be refined through a form of social learning.",
    ],
    [
      {
        prompt: "What does the waggle dance communicate?",
        options: [
          "The location of food",
          "The age of the hive",
          "The health of the queen",
          "The temperature outside",
        ],
        correctIndex: 0,
      },
      {
        prompt: "What does the duration of the waggle run indicate?",
        options: [
          "The type of flower",
          "The distance to the food",
          "The number of foragers",
          "The time of day",
        ],
        correctIndex: 1,
      },
      {
        prompt: "How do bees account for the changing position of the sun?",
        options: [
          "They stop dancing at noon",
          "They dance only at night",
          "They adjust their dance throughout the day",
          "They wait for cloudy weather",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What do studies suggest about young bees?",
        options: [
          "They cannot dance at all",
          "They ignore experienced dancers",
          "They are born knowing the exact distance",
          "They improve accuracy by following experienced dancers",
        ],
        correctIndex: 3,
      },
      {
        prompt: "What is the main idea of the passage?",
        options: [
          "Bees use a precise, partly refined dance to share food locations",
          "Honey production depends on the weather",
          "Bees rarely leave the hive",
          "Flowers attract bees using colour alone",
        ],
        correctIndex: 0,
      },
    ],
  ),

  // ---- Part 4: Reading for Viewpoints ----
  {
    id: "reading2-p4-intro",
    kind: "instruction",
    headerTitle: `${HEADER_BASE} Part 4: Reading for Viewpoints`,
    sectionTitle: "Reading for Viewpoints",
    bullets: [
      "Read the following article and the comment that follows it.",
      "Then answer the questions by choosing the best option.",
    ],
  },
  reading(
    "reading2-p4",
    `${HEADER_BASE} Part 4: Reading for Viewpoints`,
    "Read the article and comment, then choose the best answer to each question.",
    [
      "ARTICLE: Many school boards are debating whether to start high school classes later in the morning. Supporters point to research showing that teenagers are biologically inclined to fall asleep and wake later than adults. They argue that later start times lead to better attendance, higher grades, and fewer car accidents among young drivers who are no longer driving while exhausted.",
      "Opponents raise practical concerns. Bus schedules are often shared with elementary schools, and shifting high school hours could disrupt the entire system. After-school jobs and sports practices might run late into the evening, and some parents worry about supervising younger children in the early morning if schedules no longer overlap.",
      "COMMENT (by a parent): As someone with both a teenager and a nine-year-old, I was skeptical at first. But after our district pushed the high school start back by an hour, my son is far less irritable and his marks have improved. The bus issue was real, though — we had to rearrange our mornings, and it took a full term before the new routine felt normal.",
    ],
    [
      {
        prompt: "What do supporters of later start times argue?",
        options: [
          "They improve attendance, grades, and safety",
          "They reduce the cost of running schools",
          "They shorten the school year",
          "They make sports practices longer",
        ],
        correctIndex: 0,
      },
      {
        prompt: "What practical concern do opponents raise?",
        options: [
          "Students will study too much",
          "Shared bus schedules could be disrupted",
          "Teachers will earn less",
          "Classrooms will be overcrowded",
        ],
        correctIndex: 1,
      },
      {
        prompt: "How did the parent feel at first?",
        options: [
          "Enthusiastic",
          "Angry",
          "Skeptical",
          "Indifferent",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What difficulty did the parent actually experience?",
        options: [
          "Their son's grades dropped",
          "The school closed early",
          "Sports were cancelled",
          "They had to rearrange their mornings",
        ],
        correctIndex: 3,
      },
      {
        prompt: "What is the parent's overall view after the change?",
        options: [
          "Broadly positive, despite an adjustment period",
          "Completely opposed",
          "Unchanged from their initial doubt",
          "Convinced it helped no one",
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

export const readingTest2: MockTest = {
  id: "reading-2",
  title: "CELPIP Reading — Full Practice Test 2",
  section: "reading",
  description:
    "A second complete CELPIP-style Reading test with all four parts: Correspondence, Applying a Diagram, Information, and Viewpoints.",
  durationLabel: "55–60 min",
  questionCount: 20,
  steps,
}
