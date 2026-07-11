import type { MockTest, TestStep, ReadingStep } from "./types"

const HEADER_BASE = "Mock Test 2 - Reading"

function reading(
  id: string,
  header: string,
  instruction: string,
  passage: string[],
  answerSeconds: number,
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
    answerSeconds,
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
      "This Reading Test has four parts and takes approximately 55–60 minutes to complete.",
      "Each part has its own time limit shown in the header. Manage your time carefully.",
      "On the official test, once you leave a page you cannot return. In this practice test, you may review your answers.",
      "Read each passage carefully, then choose the best answer to each question.",
      "There are 38 questions in total. All questions are worth one mark each.",
    ],
  },

  // ---- Part 1: Reading Correspondence (11 questions / 11 min) ----
  {
    id: "reading2-p1-intro",
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
    "reading2-p1",
    `${HEADER_BASE} Part 1: Reading Correspondence`,
    "Read the two messages below, then choose the best answer to each question.",
    [
      "MESSAGE 1",
      "Dear Members,",
      "The Westbrook Hiking Club is pleased to announce our annual autumn hike, scheduled for Saturday, October 19th. This year we will be exploring the Ridge Trail at Clearwater Provincial Park, a moderately difficult route of approximately 14 kilometres with an elevation gain of 480 metres. The hike will take roughly five to six hours, including a lunch stop at the summit.",
      "Participants should be comfortable with uphill terrain and be prepared for cool temperatures and possible rain. Please bring sturdy footwear, layered clothing, a packed lunch, and at least two litres of water. The club will provide a first-aid kit and a trail map. Carpools will be arranged from the community centre parking lot at 7:30 a.m.",
      "Registration is required by October 12th, as we must limit the group to 20 participants for trail preservation reasons. Non-members are welcome to join as guests for a $10 day fee. To register, email or call the club secretary.",
      "We look forward to seeing you on the trail!",
      "Westbrook Hiking Club Executive",
      "",
      "MESSAGE 2",
      "Hello,",
      "I saw the announcement about the October 19th hike and I'm very interested, but I have a few questions before I register.",
      "First, I have never been on this particular trail. Would the hike be suitable for someone with moderate fitness who does regular 8-kilometre walks on flat terrain? I don't want to register and then struggle or hold the group back.",
      "Second, I am not a current member of the club. Is the $10 guest fee paid on the day, or do I need to send payment in advance?",
      "Third, my dog is a very well-behaved border collie who I take on hikes regularly. Is he welcome on this trail and on the carpool?",
      "I would really appreciate a quick response so I can register before the October 12th deadline.",
      "Thank you,",
      "Keiko Tanaka",
    ],
    660,
    [
      {
        prompt: "What type of trail is the Ridge Trail described as?",
        options: [
          "Easy and flat, suitable for beginners",
          "Moderately difficult with significant elevation",
          "Extremely challenging and for experts only",
          "A paved path through a forest",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What time will carpools leave from the community centre?",
        options: [
          "6:00 a.m.",
          "7:00 a.m.",
          "7:30 a.m.",
          "8:00 a.m.",
        ],
        correctIndex: 2,
      },
      {
        prompt: "Why is the group limited to 20 participants?",
        options: [
          "The parking lot at the park only fits 20 cars",
          "Insurance does not cover groups larger than 20",
          "The club has only 20 members",
          "For trail preservation reasons",
        ],
        correctIndex: 3,
      },
      {
        prompt: "What must non-members do to join the hike?",
        options: [
          "Become a full member before October 12th",
          "Pay a $10 day fee and register by October 12th",
          "Attend an orientation session first",
          "Bring their own first-aid kit",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What is Keiko's first concern about the hike?",
        options: [
          "Whether the weather will be suitable",
          "Whether the carpool has space for her",
          "Whether her fitness level is appropriate for the trail",
          "Whether non-members are allowed to attend",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What does Keiko ask about the $10 guest fee?",
        options: [
          "Whether it can be waived for first-time guests",
          "Whether it can be paid on the day or must be sent in advance",
          "Whether it includes a trail map and first-aid kit",
          "Whether it covers a full year of guest visits",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What additional question does Keiko ask in her message?",
        options: [
          "Whether she can bring a guest",
          "Whether her dog is welcome on the trail and in the carpool",
          "Whether a vegetarian lunch will be provided",
          "Whether the hike can be shortened if weather is bad",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Why is Keiko asking for a quick response?",
        options: [
          "She is planning to leave the country before the hike",
          "She wants to register before the October 12th deadline",
          "She has another commitment on October 19th",
          "She is worried the group will fill up immediately",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Which item does the hiking club confirm it will provide?",
        options: [
          "Lunch for all participants",
          "Waterproof clothing for rainy conditions",
          "A first-aid kit and a trail map",
          "Shuttle service from the trailhead",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What does the tone of Keiko's message suggest about her?",
        options: [
          "She is confident the hike will be easy for her",
          "She is cautious and wants to make sure she is suitable before committing",
          "She is frustrated by the club's registration requirements",
          "She is not really interested in attending",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What is the main purpose of Message 1?",
        options: [
          "To announce the hike and provide key details for interested participants",
          "To report on last year's autumn hike",
          "To recruit new members to the Westbrook Hiking Club",
          "To describe the history of Clearwater Provincial Park",
        ],
        correctIndex: 0,
      },
    ],
  ),

  // ---- Part 2: Reading to Apply a Diagram (8 questions / 9 min) ----
  {
    id: "reading2-p2-intro",
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
    "reading2-p2",
    `${HEADER_BASE} Part 2: Reading to Apply a Diagram`,
    "Read the apartment building recycling and waste guide below, then choose the best answer to each question.",
    [
      "HARBORVIEW TOWERS — RESIDENT WASTE SORTING GUIDE",
      "",
      "BLUE BIN — Paper & Cardboard Recycling",
      "Accepted: newspapers, flyers, cardboard boxes (flattened), paper bags, office paper, egg cartons, cereal boxes (empty).",
      "Not accepted: paper towels, tissues, paper cups, waxed cardboard, shredded paper (bag separately and leave at front desk for special pickup).",
      "",
      "GREEN BIN — Organics",
      "Accepted: food scraps (cooked and raw), coffee grounds and filters, tea bags, fruit and vegetable peels, soiled paper plates and napkins.",
      "Not accepted: liquids, cooking oil, pet waste, diapers, or any non-food items.",
      "",
      "GREY BIN — Landfill / General Waste",
      "Use for anything that cannot go in the blue or green bins. This includes broken glass, ceramics, foam packaging, plastic bags, and small electronics (see below).",
      "",
      "SPECIAL ITEMS",
      "• Small electronics (phones, chargers, earbuds): place in the labelled collection box in the mail room. Picked up on the first Monday of each month.",
      "• Batteries: drop-off box is located in the lobby near the elevator. Accepted at any time.",
      "• Large furniture and appliances: contact the building manager at least 48 hours in advance to arrange bulk pickup.",
      "• Hazardous materials (paint, solvents, cleaning chemicals): do NOT place in any bin. Contact the building manager for proper disposal instructions.",
      "",
      "GENERAL RULES",
      "• All bins are located in the waste room on each floor, accessible 24 hours a day.",
      "• Do not leave bags outside your apartment door. Place waste directly in the appropriate bin.",
      "• Bins are emptied on Tuesday and Friday mornings. Avoid overfilling bins the night before.",
      "• Residents who repeatedly sort incorrectly may be subject to a notice from management.",
    ],
    540,
    [
      {
        prompt: "Where should a resident put shredded paper?",
        options: [
          "In the blue bin on their floor",
          "In the grey bin",
          "Bagged separately and left at the front desk for special pickup",
          "In the organics green bin",
        ],
        correctIndex: 2,
      },
      {
        prompt: "A resident has leftover cooking oil. Which bin should they use?",
        options: [
          "Green bin",
          "Grey bin",
          "Blue bin",
          "There is no bin — contact the building manager",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Where should a resident drop off an old mobile phone?",
        options: [
          "Grey bin on their floor",
          "Battery drop-off box in the lobby",
          "Labelled collection box in the mail room",
          "Outside their apartment door",
        ],
        correctIndex: 2,
      },
      {
        prompt: "When are batteries accepted for drop-off?",
        options: [
          "Only on the first Monday of each month",
          "Only on Tuesday and Friday mornings",
          "At any time",
          "Only during building office hours",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What must a resident do if they need to dispose of a large sofa?",
        options: [
          "Place it in the waste room and notify management afterward",
          "Contact the building manager at least 48 hours in advance",
          "Call the city directly to arrange a pickup",
          "Leave it in the lobby with a note",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Which of the following items belongs in the blue bin?",
        options: [
          "Paper coffee cups",
          "Waxed cardboard",
          "Soiled paper napkins",
          "Flattened cereal boxes",
        ],
        correctIndex: 3,
      },
      {
        prompt: "What should a resident do with a container of old paint?",
        options: [
          "Pour it down the drain and recycle the can in the blue bin",
          "Put it in the grey bin",
          "Contact the building manager for proper disposal instructions",
          "Leave it in the waste room with a label",
        ],
        correctIndex: 2,
      },
      {
        prompt: "According to the general rules, what may happen to residents who repeatedly sort incorrectly?",
        options: [
          "They may be fined by the city",
          "They may receive a notice from management",
          "Their bin access may be restricted",
          "Their waste may be returned to their unit",
        ],
        correctIndex: 1,
      },
    ],
  ),

  // ---- Part 3: Reading for Information (9 questions / 10 min) ----
  {
    id: "reading2-p3-intro",
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
    "reading2-p3",
    `${HEADER_BASE} Part 3: Reading for Information`,
    "Read the passage, then choose the best answer to each question.",
    [
      "THE WAGGLE DANCE: HOW HONEYBEES COMMUNICATE",
      "",
      "Among the most remarkable behaviours in the animal kingdom is the honeybee's 'waggle dance' — a precise physical communication system that allows a single forager bee to transmit the location, distance, and quality of a food source to thousands of hivemates. Decoded by zoologist Karl von Frisch in the 1940s (work for which he later shared the Nobel Prize in Physiology or Medicine), the waggle dance is now considered one of the most sophisticated non-human communication systems known to science.",
      "",
      "The dance is performed on the vertical surface of the honeycomb inside the hive. The bee moves in a figure-eight pattern, with the central 'waggle run' — the straight portion between the two loops — carrying most of the information. The direction of the waggle run relative to vertical corresponds to the direction of the food source relative to the sun: if the bee runs straight up the comb, the food is in the direction of the sun; if the run angles 40 degrees to the left of vertical, the food source lies 40 degrees to the left of the sun.",
      "",
      "Distance is encoded in the duration of the waggle run: the longer the run, the farther away the food. A waggle run lasting one second indicates a source roughly 1 kilometre away. Bees watching the dance crowd close to the dancer and even follow her movements before flying out, apparently to memorize the directional information.",
      "",
      "The quality of the food source is communicated partly through the dance's vigour and the number of repetitions: a highly rewarding patch of flowers prompts a more energetic, repeated performance, recruiting more workers. Bees also exchange nectar samples with the dancer, giving followers a chemical preview of what they will find.",
      "",
      "What makes the system particularly extraordinary is its flexibility. Because the sun moves across the sky during the day, bees continuously adjust the angle of the dance to compensate — without re-visiting the food source. Remarkably, this compensation works even in cloudy conditions, because bees can detect the polarization pattern of ultraviolet light penetrating clouds to determine the sun's position.",
      "",
      "Research also shows that the dance is not purely instinctive. Young bees initially make significant errors in the distance encoding of their dances. They improve gradually by following and presumably learning from more experienced dancers, suggesting that a form of social learning refines an otherwise innate ability.",
    ],
    600,
    [
      {
        prompt: "Who decoded the meaning of the waggle dance?",
        options: [
          "Charles Darwin",
          "Karl von Frisch",
          "David Attenborough",
          "A team of Canadian researchers",
        ],
        correctIndex: 1,
      },
      {
        prompt: "On what surface is the waggle dance performed?",
        options: [
          "The floor of the hive",
          "The outside of the hive near the entrance",
          "The vertical surface of the honeycomb inside the hive",
          "A special flat stone near the hive",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What does the direction of the waggle run communicate?",
        options: [
          "The distance to the food source",
          "The quality of the food source",
          "The direction of the food source relative to the sun",
          "The number of bees needed to collect the food",
        ],
        correctIndex: 2,
      },
      {
        prompt: "According to the passage, how far away is a food source if the waggle run lasts one second?",
        options: [
          "100 metres",
          "500 metres",
          "1 kilometre",
          "2 kilometres",
        ],
        correctIndex: 2,
      },
      {
        prompt: "How is the quality of the food source communicated?",
        options: [
          "Through the colour pattern of the dance",
          "Through the vigour and number of repetitions of the dance, and nectar exchange",
          "Through a separate sound signal made by the bee",
          "Through the speed of the bee's flight into the hive",
        ],
        correctIndex: 1,
      },
      {
        prompt: "How do bees adjust their dance when the sun moves across the sky?",
        options: [
          "They stop dancing until the sun is in the correct position",
          "They fly to the food source again to re-check the direction",
          "They continuously adjust the angle of the dance to compensate",
          "They switch to a different type of dance for afternoon hours",
        ],
        correctIndex: 2,
      },
      {
        prompt: "How do bees locate the sun's position in cloudy conditions?",
        options: [
          "They wait for the clouds to clear before dancing",
          "They detect the polarization pattern of ultraviolet light through the clouds",
          "They use the temperature of the air to determine direction",
          "They follow the flight paths of returning foragers",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does the research on young bees suggest about the waggle dance?",
        options: [
          "It is entirely instinctive and cannot be improved",
          "Young bees learn it perfectly from birth",
          "Social learning refines an innate but initially imprecise ability",
          "Older bees teach younger ones through verbal instruction",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What is the main purpose of the passage?",
        options: [
          "To argue that honeybees are more intelligent than any other insect",
          "To describe the waggle dance and explain how it communicates information",
          "To criticize early researchers who misunderstood bee behaviour",
          "To compare bee communication with human language",
        ],
        correctIndex: 1,
      },
    ],
  ),

  // ---- Part 4: Reading for Viewpoints (10 questions / 13 min) ----
  {
    id: "reading2-p4-intro",
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
    "reading2-p4",
    `${HEADER_BASE} Part 4: Reading for Viewpoints`,
    "Read the article and the comment below, then choose the best answer to each question.",
    [
      "ARTICLE — SHOULD HIGH SCHOOLS START LATER IN THE MORNING?",
      "",
      "A debate with significant implications for student health, academic performance, and public safety is gaining traction in school boards across Canada and other countries: should high schools delay their start times to better align with the natural sleep patterns of teenagers?",
      "",
      "The scientific basis for later start times is well established. During puberty, biological changes shift the circadian rhythm — the body's internal clock — toward later sleep and wake times. This shift is not a matter of habit or laziness: it is driven by hormonal changes that delay the release of melatonin, the hormone that induces sleep, until approximately 11:00 p.m. As a result, a teenager asked to wake at 6:00 a.m. for a 7:30 start is physiologically similar to an adult waking at 4:00 a.m. The American Academy of Pediatrics and several other major health bodies recommend that high schools not begin before 8:30 a.m.",
      "",
      "Proponents of the change argue that the benefits extend beyond individual well-being. Studies from districts that have already shifted to later start times report improvements in attendance, graduation rates, and standardized test scores. A 2019 study published in the journal Science Advances found that later school start times were associated with more sleep and better academic outcomes across a large sample of U.S. students.",
      "",
      "Opponents raise practical difficulties. Later start times push after-school activities — sports practices, music rehearsals, part-time jobs — into the evening, which can conflict with dinner, homework, and family time. For families relying on older children to supervise younger siblings after school, a later high school end time may create genuine hardship. There are also transportation concerns: shared bus routes linking elementary, middle, and high schools make schedule changes logistically complex and potentially costly.",
      "",
      "COMMENT (by a high school teacher):",
      "I have taught Grade 11 English for sixteen years, and the difference between my 8:00 a.m. class and my 10:00 a.m. class is striking. Students in my early class are visibly tired — they stare, they struggle to follow discussion, and several fall asleep within the first twenty minutes. By contrast, my mid-morning class is engaged and contributes actively. I would strongly support a later start time, though I recognize the scheduling complications are real. In our district, any change would require coordination with elementary schools and the transportation department, which takes time and political will. Still, I believe the evidence is compelling enough that we owe it to students to try.",
    ],
    780,
    [
      {
        prompt: "What biological reason does the article give for teenagers' late sleep patterns?",
        options: [
          "Teenagers choose to stay up late using screens",
          "Melatonin release is delayed until approximately 11:00 p.m. due to hormonal changes",
          "Teenagers need less sleep than adults and therefore go to sleep later",
          "High stress levels from school cause poor sleep quality",
        ],
        correctIndex: 1,
      },
      {
        prompt: "According to the article, what time do major health organizations recommend high schools start?",
        options: [
          "7:30 a.m. or earlier",
          "8:00 a.m.",
          "No earlier than 8:30 a.m.",
          "9:00 a.m. or later",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What does the 2019 Science Advances study suggest?",
        options: [
          "Later start times have no measurable effect on academic performance",
          "Later start times are associated with more sleep and better academic outcomes",
          "Students prefer early start times once they adjust to them",
          "Later start times benefit elementary students more than high school students",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What family concern do opponents of later start times mention?",
        options: [
          "Younger children might arrive home before their parents",
          "Families relying on older children to supervise younger siblings after school may face hardship",
          "Parents will need to buy a second car to manage new schedules",
          "Late-night homework will increase family conflict",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What logistical challenge does the article identify?",
        options: [
          "There are not enough teachers willing to work later hours",
          "Shared bus routes make schedule changes complex and potentially costly",
          "Sports facilities are not available in the evenings",
          "Most schools lack the classroom space for extended hours",
        ],
        correctIndex: 1,
      },
      {
        prompt: "What does the teacher observe about students in the 8:00 a.m. class compared to the 10:00 a.m. class?",
        options: [
          "The early class is more focused and produces better work",
          "There is no meaningful difference between the two classes",
          "The early class is visibly tired and struggles, while the mid-morning class is engaged",
          "The early class completes more homework but understands less",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What is the teacher's position on later start times?",
        options: [
          "Strongly opposed, citing scheduling complications",
          "Neutral — the teacher does not express a clear preference",
          "Strongly in favour, while acknowledging real scheduling difficulties",
          "Uncertain, because the evidence is not yet convincing",
        ],
        correctIndex: 2,
      },
      {
        prompt: "What does the teacher say would be required for a schedule change in their district?",
        options: [
          "A vote by parents and students",
          "Coordination with elementary schools and the transportation department",
          "New funding from the provincial government",
          "A pilot program running for at least five years",
        ],
        correctIndex: 1,
      },
      {
        prompt: "On what point do the teacher's observations directly support the scientific argument in the article?",
        options: [
          "That transportation logistics are the biggest obstacle to change",
          "That teenagers are biologically unable to function well in early morning classes",
          "That part-time jobs conflict with later school schedules",
          "That standardized test scores always improve with later start times",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Which of the following best summarizes the article's overall approach to the issue?",
        options: [
          "The article argues strongly that all schools must shift immediately",
          "The article presents both the evidence in favour and the practical concerns against later start times",
          "The article focuses only on the scientific evidence and ignores practical issues",
          "The article concludes that no change should be made until more research is done",
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

export const readingTest2: MockTest = {
  id: "reading-2",
  title: "CELPIP Reading — Full Practice Test 2",
  section: "reading",
  description:
    "A second complete CELPIP-style Reading test with all four parts: Correspondence (11Q), Applying a Diagram (8Q), Information (9Q), and Viewpoints (10Q) — 38 questions total.",
  durationLabel: "55–60 min",
  questionCount: 38,
  steps,
}
