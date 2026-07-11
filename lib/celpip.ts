export type WritingTask = {
  id: string
  type: 'Email' | 'Survey'
  title: string
  prompt: string
  minWords: number
  maxWords: number
  timeMinutes: number
}

export const writingTasks: WritingTask[] = [
  {
    id: 'email-neighbour',
    type: 'Email',
    title: 'Task 1 — Writing an Email',
    prompt:
      'Your downstairs neighbour has complained several times about noise coming from your apartment in the evenings. Write an email to your neighbour (about 150–200 words). In your email: apologize for the disturbance, explain the reason for the noise, and suggest what you will do to solve the problem.',
    minWords: 150,
    maxWords: 200,
    timeMinutes: 27,
  },
  {
    id: 'email-manager',
    type: 'Email',
    title: 'Task 1 — Writing an Email',
    prompt:
      'You recently attended a training workshop organized by your employer. Write an email to your manager (about 150–200 words). In your email: thank the manager for the opportunity, describe one thing you learned, and recommend one improvement for future workshops.',
    minWords: 150,
    maxWords: 200,
    timeMinutes: 27,
  },
  {
    id: 'survey-transit',
    type: 'Survey',
    title: 'Task 2 — Responding to Survey Questions',
    prompt:
      'Your city is deciding how to spend a transportation budget. Option A: build more bike lanes. Option B: expand bus and train service. Choose the option you prefer and explain your choice in about 150–200 words. Give reasons and examples to support your opinion.',
    minWords: 150,
    maxWords: 200,
    timeMinutes: 26,
  },
]

export type SpeakingTask = {
  id: string
  title: string
  taskType: string
  prompt: string
  requirements: string[]
  tips: string[]
  /** Optional scene image shown for Task 3 (Describing a Scene) and Task 4 (Making Predictions). */
  imageSrc?: string
  imageAlt?: string
  prepSeconds: number
  speakSeconds: number
}

export const speakingTasks: SpeakingTask[] = [
  {
    id: 'giving-advice',
    title: 'Task 1 — Giving Advice',
    taskType: 'Giving Advice',
    prompt:
      'A close friend has been offered a new job in another city, but they are worried about leaving their current support network behind. They are asking for your advice. Give your friend advice on how to make this decision and how to handle the move if they choose to go.',
    requirements: [
      'Acknowledge the difficulty of the decision.',
      'Suggest at least two practical steps your friend can take.',
      'Encourage your friend and end on a positive note.',
    ],
    tips: [
      'Start by showing empathy before jumping into advice.',
      'Use phrases like "I would suggest…", "Have you thought about…", or "One thing that might help is…"',
      'Speak for the full 90 seconds — expand each point with an example or reason.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'personal-experience',
    title: 'Task 2 — Talking about a Personal Experience',
    taskType: 'Personal Experience',
    prompt:
      'Talk about a time when you had to adapt to a significant change in your life — such as starting a new job, moving to a new place, or joining a new group. Describe the situation, how you felt, and what you did to adjust.',
    requirements: [
      'Describe the situation clearly, including when and where it happened.',
      'Explain how you felt at the time.',
      'Tell what steps you took to adapt successfully.',
    ],
    tips: [
      'Use past tense consistently: "I felt…", "I had to…", "It was…"',
      'Make it specific — name a real situation rather than speaking generally.',
      'End with a reflection: what did you learn from this experience?',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'describing-scene',
    title: 'Task 3 — Describing a Scene',
    taskType: 'Describing a Scene',
    prompt:
      'Look at the image carefully. Describe this scene in as much detail as you can to someone who cannot see it.',
    requirements: [
      'Describe where people and objects are located in the space.',
      'Include details about actions, expressions, and atmosphere.',
      'Organize your description logically — for example, from one side of the room to the other.',
    ],
    tips: [
      'Use spatial language: "In the far left corner…", "Near the entrance…", "On the right side…"',
      'Describe what people are doing, not just what they look like.',
      'Include sensory details: the quiet atmosphere, the smell of books, the soft light.',
    ],
    imageSrc: '/speaking/scene-public-library.png',
    imageAlt: 'A busy public library with students studying, a librarian organizing shelves, a child in a reading corner, and people at computers.',
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'making-predictions',
    title: 'Task 4 — Making Predictions',
    taskType: 'Making Predictions',
    prompt:
      'Look at the image again. The child in the reading corner has just finished the story and the librarian is now walking toward that area. Predict what will happen next and explain your reasoning.',
    requirements: [
      'Make at least two clear predictions about what will happen.',
      'Give specific reasons based on what you observed in the scene.',
      'Use future-tense language naturally throughout your response.',
    ],
    tips: [
      'Use phrases like "I think…", "It is likely that…", "Based on what I see, I predict…"',
      'Connect your predictions directly to details in the scene.',
      'Keep your predictions realistic and logical — avoid wild guesses.',
    ],
    imageSrc: '/speaking/scene-public-library.png',
    imageAlt: 'A busy public library with students studying, a librarian organizing shelves, a child in a reading corner, and people at computers.',
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'comparing-persuading',
    title: 'Task 5 — Comparing and Persuading',
    taskType: 'Comparing and Persuading',
    prompt:
      'Your city has announced it will use a budget surplus to fund one of two initiatives: Option A is to build a new covered outdoor skating rink in the downtown core, or Option B is to expand the existing public library system with three new branches in underserved neighbourhoods. Choose one option and persuade a friend who strongly prefers the other option.',
    requirements: [
      'Clearly state which option you prefer.',
      'Compare your option to the other, acknowledging at least one strength of the other side.',
      'Use persuasive language and give at least two strong reasons for your choice.',
    ],
    tips: [
      'Acknowledge your friend\'s view briefly: "I understand why you prefer Option B, however…"',
      'Use persuasive phrases: "Not only does this…", "The most compelling reason is…", "Consider the fact that…"',
      'End with a strong closing argument that brings it all together.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'difficult-situation',
    title: 'Task 6 — Dealing with a Difficult Situation',
    taskType: 'Difficult Situation',
    prompt:
      'You are a shift supervisor at a busy café. Two employees have both requested the same Saturday off — one has already received written approval, and the other says they were verbally told they could have the day. You cannot leave the café understaffed. Leave a voicemail message for the employee whose verbal request is not confirmed, explaining the situation and what you have decided to do.',
    requirements: [
      'Explain the situation clearly and professionally.',
      'State your decision and the reason behind it.',
      'Use an appropriate, respectful tone throughout.',
    ],
    tips: [
      'Open your message by addressing the person and introducing the situation.',
      'Be direct but empathetic: "I understand this is disappointing, however…"',
      'Offer a next step or solution — for example, offering a future day off in exchange.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'expressing-opinions',
    title: 'Task 7 — Expressing Opinions',
    taskType: 'Expressing Opinions',
    prompt:
      'Some people believe that social media platforms should be held legally responsible when false information is spread on their sites and causes harm to individuals or communities. Others believe that holding platforms legally responsible would restrict freedom of expression and reduce the ability to share information openly. What is your opinion? Give your view and support it with specific reasons and examples.',
    requirements: [
      'State your position clearly at the beginning.',
      'Support your position with at least two specific reasons or examples.',
      'Acknowledge the opposing view and explain why your position is stronger.',
    ],
    tips: [
      'Open with a clear opinion statement: "In my view…" or "I strongly believe that…"',
      'Use transitional phrases: "Firstly…", "Furthermore…", "On the other hand…", "Despite this…"',
      'Wrap up with a conclusion that restates your view in different words.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'unusual-situation',
    title: 'Task 8 — Describing an Unusual Situation',
    taskType: 'Unusual Situation',
    prompt:
      'You ordered a replacement laptop online to arrive before an important work deadline. When the package arrives, you find it contains a children\'s toy keyboard, a bag of mixed socks, and a note addressed to someone else entirely. Call the company\'s customer service line and describe exactly what you received, what you expected, and what you would like the company to do about it.',
    requirements: [
      'Describe what you received in specific detail.',
      'Clearly explain how it differs from what you ordered.',
      'State exactly what resolution you expect from the company.',
    ],
    tips: [
      'Be specific and clear — describe colours, sizes, quantities where relevant.',
      'Keep a polite but firm tone: you are dissatisfied but professional.',
      'Use contrast language: "Instead of…, I received…", "What I was expecting was… however…"',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
]

/** Ten additional practice tasks — two more per task type (T1–T5) + one each for T6–T8. */
export const speakingExtraTasks: SpeakingTask[] = [
  // ── Task 1 · Giving Advice (×2) ─────────────────────────────────────────
  {
    id: 'advice-2',
    title: 'Task 1 — Giving Advice',
    taskType: 'Giving Advice',
    prompt:
      'Your younger sibling is about to start university and is very anxious about making friends and fitting in. They have asked for your advice. What would you tell them to help them feel more confident and build connections during their first semester?',
    requirements: [
      'Acknowledge their anxiety and show empathy.',
      'Give at least two specific, actionable suggestions.',
      'End with an encouraging comment.',
    ],
    tips: [
      'Draw on your own experience or things you wish someone had told you.',
      'Avoid vague advice like "just be yourself" — be specific: join a club, introduce yourself in class, etc.',
      'Use a warm, supportive tone throughout.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'advice-3',
    title: 'Task 1 — Giving Advice',
    taskType: 'Giving Advice',
    prompt:
      'A coworker confides in you that they are exhausted and feeling burned out from working too many overtime hours. They do not want to upset their manager but also cannot continue at this pace. Give your coworker advice on how to handle this situation professionally.',
    requirements: [
      'Validate your coworker\'s feelings before giving advice.',
      'Suggest at least two practical strategies they can try.',
      'Remind them of the importance of their own well-being.',
    ],
    tips: [
      'Acknowledge the difficulty of speaking to a manager — offer concrete phrases they can use.',
      'Suggest small changes first (blocking lunch breaks, not checking email after hours) before escalating.',
      'Keep your tone calm and reassuring, not alarmist.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },

  // ── Task 2 · Personal Experience (×2) ───────────────────────────────────
  {
    id: 'personal-experience-2',
    title: 'Task 2 — Talking about a Personal Experience',
    taskType: 'Personal Experience',
    prompt:
      'Describe a time when you worked as part of a team on an important project or goal. Talk about what the challenge was, how you contributed, and what the outcome was.',
    requirements: [
      'Describe the team and the goal you were working toward.',
      'Explain specifically what you did to contribute.',
      'Share what you learned about teamwork from the experience.',
    ],
    tips: [
      'Be specific about your own role — don\'t just talk about "we" the whole time.',
      'Include a challenge or conflict the team faced, and how it was resolved.',
      'Reflect at the end: how did this experience shape how you work with others?',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'personal-experience-3',
    title: 'Task 2 — Talking about a Personal Experience',
    taskType: 'Personal Experience',
    prompt:
      'Talk about a time when you had to make a difficult decision that affected others around you. Describe the situation, the options you considered, what you chose, and how things turned out.',
    requirements: [
      'Describe the situation and the decision you faced.',
      'Explain the options you considered and why the decision was difficult.',
      'Share what happened after your decision and what you learned.',
    ],
    tips: [
      'Focus on one specific decision rather than a general pattern of behaviour.',
      'Show your reasoning — explain what factors you weighed.',
      'Be honest; admitting the decision was hard or imperfect makes your response more authentic.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },

  // ── Task 3 · Describing a Scene (×1) ────────────────────────────────────
  {
    id: 'describing-scene-2',
    title: 'Task 3 — Describing a Scene',
    taskType: 'Describing a Scene',
    prompt:
      'Look at the image carefully. Describe this scene in as much detail as you can to someone who cannot see it.',
    requirements: [
      'Describe where people and objects are located in the space.',
      'Include details about actions, clothing, and expressions where visible.',
      'Organize your description clearly from one area to another.',
    ],
    tips: [
      'Start with a general overview ("This scene shows a busy…") then zoom in on specific details.',
      'Use a mix of spatial prepositions: in front of, behind, to the left of, in the background.',
      'Describe the mood or atmosphere — is it noisy, relaxed, urgent, cheerful?',
    ],
    imageSrc: '/speaking/scene-farmers-market.png',
    imageAlt: 'A busy outdoor farmers market on a Saturday morning with vendors, a musician, families, and a coffee stand.',
    prepSeconds: 30,
    speakSeconds: 60,
  },

  // ── Task 4 · Making Predictions (×1) ────────────────────────────────────
  {
    id: 'making-predictions-2',
    title: 'Task 4 — Making Predictions',
    taskType: 'Making Predictions',
    prompt:
      'Look at the image again. The musician near the entrance has just stopped playing and is now packing up their guitar case. Predict what will likely happen next and explain your reasoning.',
    requirements: [
      'Make at least two specific predictions about what will happen.',
      'Support each prediction with evidence from what you see in the image.',
      'Use natural future-tense language.',
    ],
    tips: [
      'Think about cause and effect — what does packing up normally lead to?',
      'Consider the reactions of people nearby: will they stop, move on, tip the musician?',
      'Use hedging language: "It seems likely that…", "I would expect that…", "Based on this, I think…"',
    ],
    imageSrc: '/speaking/scene-farmers-market.png',
    imageAlt: 'A busy outdoor farmers market on a Saturday morning with vendors, a musician, families, and a coffee stand.',
    prepSeconds: 30,
    speakSeconds: 60,
  },

  // ── Task 5 · Comparing and Persuading (×2) ──────────────────────────────
  {
    id: 'comparing-persuading-2',
    title: 'Task 5 — Comparing and Persuading',
    taskType: 'Comparing and Persuading',
    prompt:
      'Your workplace is deciding how employees should work going forward. Option A is a hybrid model where staff alternate between working from home and the office. Option B is a full return to the office five days a week. Your manager strongly prefers Option B. Choose an option and persuade your manager.',
    requirements: [
      'Clearly state which option you are advocating for.',
      'Acknowledge at least one valid point your manager\'s preferred option offers.',
      'Give at least two compelling reasons for your preferred option.',
    ],
    tips: [
      'Speak respectfully but confidently — you are making a professional argument.',
      'Use data or common knowledge: productivity studies, commute times, work-life balance research.',
      'End with a compromise or collaborative suggestion to make your argument more persuasive.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'comparing-persuading-3',
    title: 'Task 5 — Comparing and Persuading',
    taskType: 'Comparing and Persuading',
    prompt:
      'You and a friend are planning a week-long vacation. You prefer Option A: a guided cultural tour of a historic European city. Your friend prefers Option B: a beach resort stay in the Caribbean. You need to agree on one destination. Persuade your friend to choose your option.',
    requirements: [
      'State your preference clearly from the start.',
      'Acknowledge one thing that is appealing about the beach resort.',
      'Give at least two strong arguments for the cultural tour.',
    ],
    tips: [
      'Make it personal — why does this trip appeal to you specifically?',
      'Use vivid language to paint a picture of the experience you are advocating for.',
      'Address your friend\'s likely objections before they raise them.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },

  // ── Task 6 · Difficult Situation (×1) ───────────────────────────────────
  {
    id: 'difficult-situation-2',
    title: 'Task 6 — Dealing with a Difficult Situation',
    taskType: 'Difficult Situation',
    prompt:
      'You are a tenant in an apartment building. For the past two weeks, your upstairs neighbour has been doing loud renovation work starting at 6:00 a.m., well before the building\'s permitted hours of 8:00 a.m. to 8:00 p.m. You have to work night shifts and this is seriously affecting your sleep. Leave a voicemail message for your building manager explaining the problem and requesting action.',
    requirements: [
      'Describe the problem clearly, including specific times and duration.',
      'Explain how the situation is affecting you.',
      'State what action you expect the building manager to take.',
    ],
    tips: [
      'Be factual and specific: days, times, duration.',
      'Keep your tone firm but civil — you want results, not conflict.',
      'End with your contact information and a request for a follow-up.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },

  // ── Task 7 · Expressing Opinions (×1) ───────────────────────────────────
  {
    id: 'expressing-opinions-2',
    title: 'Task 7 — Expressing Opinions',
    taskType: 'Expressing Opinions',
    prompt:
      'Some people believe that university education should be free for all citizens, funded entirely by the government, because it leads to a more educated and productive society. Others argue that students should bear at least part of the cost because it ensures they value their education and reduces the financial burden on taxpayers. What is your opinion? Give specific reasons and examples.',
    requirements: [
      'State a clear position at the beginning.',
      'Support it with at least two reasons or examples.',
      'Acknowledge and counter the opposing view.',
    ],
    tips: [
      'Avoid sitting on the fence — pick one side and defend it.',
      'Think about real-world examples: countries that have free university (Germany, Norway) vs. tuition-based systems.',
      'Use logical connectors: "As a result…", "This means that…", "By contrast…"',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },

  // ── Task 8 · Unusual Situation (×1) ─────────────────────────────────────
  {
    id: 'unusual-situation-2',
    title: 'Task 8 — Describing an Unusual Situation',
    taskType: 'Unusual Situation',
    prompt:
      'You arrive at the airport for an international flight only to discover that your passport has expired. You are standing at the check-in counter with 45 minutes before your flight closes. Call a family member to explain what has happened, what your options are, and what you need them to do to help you.',
    requirements: [
      'Explain the situation quickly and clearly.',
      'Describe at least one option or plan you are considering.',
      'Ask for specific, concrete help from the family member.',
    ],
    tips: [
      'Convey appropriate urgency — you are under time pressure.',
      'Think through practical options: emergency passport services, rebooking fees, travel insurance.',
      'Keep the call focused and organized despite the stress of the situation.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
]

export type ReadingQuestion = {
  prompt: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type ReadingTask = {
  id: string
  type: 'Correspondence' | 'Information' | 'Viewpoints' | 'Diagram'
  title: string
  instruction: string
  passage: string[]
  timeMinutes: number
  questions: ReadingQuestion[]
}

export const readingTasks: ReadingTask[] = [
  {
    id: 'correspondence-workshop',
    type: 'Correspondence',
    title: 'Part 1 — Reading Correspondence',
    instruction: 'Read the message, then choose the best answer to each question.',
    timeMinutes: 11,
    passage: [
      'Dear Mr. Okafor,',
      'Thank you for renting a workshop space at the Riverside Community Centre last month. I am writing because several members have asked whether your woodworking course will run again this fall. The response to your spring session was overwhelmingly positive, and we would be delighted to host you once more.',
      'If you are available, we can offer you the larger studio on the second floor, which seats up to twenty participants and has improved ventilation. The rental fee would remain the same as last term, provided you commit to a full eight-week schedule. We would also ask that you supply your own hand tools, as the centre can only guarantee workbenches and safety equipment.',
      'Please let me know by the end of the month so that we can include the course in our autumn brochure. I look forward to working with you again.',
      'Warm regards,',
      'Renata Alvsson, Programs Coordinator',
    ],
    questions: [
      {
        prompt: 'Why is Renata writing to Mr. Okafor?',
        options: [
          'To invite him to teach his course again',
          "To complain about last term's workshop",
          'To offer him a refund on his rental fee',
          'To cancel an upcoming woodworking class',
        ],
        correctIndex: 0,
        explanation:
          'She writes that members asked whether the course will run again and that they would be "delighted to host you once more."',
      },
      {
        prompt: 'What is different about the space being offered this term?',
        options: [
          'It is cheaper than the previous room',
          'It is larger and better ventilated',
          'It includes a full set of hand tools',
          'It is located on the ground floor',
        ],
        correctIndex: 1,
        explanation:
          'The letter offers "the larger studio on the second floor... and has improved ventilation."',
      },
      {
        prompt: 'What condition must Mr. Okafor meet to keep the same fee?',
        options: [
          'He must enrol at least twenty students',
          'He must teach on weekends only',
          'He must commit to a full eight-week schedule',
          'He must provide his own workbenches',
        ],
        correctIndex: 2,
        explanation:
          'The fee stays the same "provided you commit to a full eight-week schedule."',
      },
      {
        prompt: 'What does the centre expect participants to bring?',
        options: [
          'Their own safety equipment',
          'A registration deposit',
          'Nothing; everything is supplied',
          'Their own hand tools',
        ],
        correctIndex: 3,
        explanation:
          'Instructors must "supply your own hand tools"; the centre only guarantees workbenches and safety equipment.',
      },
      {
        prompt: 'By when must Mr. Okafor respond?',
        options: [
          'By the end of the month',
          'Within one week',
          'Before the spring session',
          'By the first day of class',
        ],
        correctIndex: 0,
        explanation:
          'She asks him to reply "by the end of the month" so the course can be added to the brochure.',
      },
    ],
  },
  {
    id: 'information-traffic',
    type: 'Information',
    title: 'Part 3 — Reading for Information',
    instruction: 'Read the passage, then choose the best answer to each question.',
    timeMinutes: 10,
    passage: [
      'For decades, city planners assumed that widening roads would reduce traffic. Experience has repeatedly shown the opposite. When a congested highway is expanded, the extra capacity is quickly filled by drivers who previously avoided the route or travelled at different times. Researchers call this phenomenon "induced demand."',
      'A growing number of cities have therefore shifted their focus from moving cars to moving people. Investments in frequent bus service, protected bicycle lanes, and pedestrian-friendly streets can carry far more travellers per hour than an additional traffic lane. Crucially, these measures also tend to reduce emissions and injuries.',
      'Change is not always welcomed. Merchants sometimes fear that removing parking will drive away customers, and some commuters resist longer walks to transit stops. Studies from several cities, however, suggest that foot traffic and local spending often rise once streets become more comfortable for walking. The evidence points to a simple lesson: the goal of a transportation system should be access, not merely speed.',
    ],
    questions: [
      {
        prompt: "What is 'induced demand'?",
        options: [
          'New road capacity being filled by additional drivers',
          'A sudden drop in the number of cars on a highway',
          'The demand for cheaper public transit',
          'A method for measuring road construction costs',
        ],
        correctIndex: 0,
        explanation:
          'The passage defines it as extra capacity that "is quickly filled by drivers who previously avoided the route."',
      },
      {
        prompt: 'What carries more travellers per hour than an extra lane?',
        options: [
          'Larger parking garages',
          'Frequent transit, bike lanes, and walkable streets',
          'Wider suburban highways',
          'Toll roads and express lanes',
        ],
        correctIndex: 1,
        explanation:
          'It cites "frequent bus service, protected bicycle lanes, and pedestrian-friendly streets" as carrying far more travellers.',
      },
      {
        prompt: 'Why do some merchants resist removing parking?',
        options: [
          'They must pay for the construction',
          'They prefer wider sidewalks',
          'They fear losing customers',
          'They want more bicycle lanes',
        ],
        correctIndex: 2,
        explanation:
          'The text says merchants "fear that removing parking will drive away customers."',
      },
      {
        prompt: 'What happens after streets become friendlier to walking?',
        options: [
          'Traffic accidents increase sharply',
          'Public transit is shut down',
          'Commuters buy more cars',
          'Foot traffic and local spending often rise',
        ],
        correctIndex: 3,
        explanation:
          'Studies "suggest that foot traffic and local spending often rise once streets become more comfortable for walking."',
      },
      {
        prompt: 'What is the main lesson of the passage?',
        options: [
          'Transportation should prioritize access, not just speed',
          'Cities should build as many roads as possible',
          'Driving is always faster than walking',
          'Parking should never be removed',
        ],
        correctIndex: 0,
        explanation:
          'The closing line states the goal "should be access, not merely speed."',
      },
    ],
  },
  {
    id: 'viewpoints-workweek',
    type: 'Viewpoints',
    title: 'Part 4 — Reading for Viewpoints',
    instruction: 'Read the article and the comment, then choose the best answer to each question.',
    timeMinutes: 13,
    passage: [
      'ARTICLE: Supporters of a four-day work week argue that compressing the same output into fewer days improves both productivity and well-being. Trials in several countries have reported steadier focus, fewer sick days, and lower staff turnover. Advocates say that giving employees a third day of rest allows them to return to work more motivated and less prone to burnout.',
      'Critics counter that the model does not fit every industry. Hospitals, restaurants, and customer-service centres must remain staffed regardless of the calendar, and simply shifting the same work into four days can intensify daily pressure. They also warn that measured productivity gains may fade once the novelty wears off.',
      'COMMENT (by a reader): I manage a small design studio, and we tried the four-day week for six months. Honestly, the biggest surprise was that our clients barely noticed. We set clear response times, and my team\'s quality of work actually improved. That said, I agree it wouldn\'t suit a business that needs someone at the front desk every hour of every day.',
    ],
    questions: [
      {
        prompt: 'What benefit do supporters of the four-day week claim?',
        options: [
          'Improved productivity and well-being',
          'Lower salaries for employees',
          'Longer daily commutes',
          'Fewer public holidays',
        ],
        correctIndex: 0,
        explanation:
          'Supporters argue it "improves both productivity and well-being."',
      },
      {
        prompt: 'What concern do critics raise?',
        options: [
          'Employees will demand more pay',
          'The model does not fit every industry',
          'Customers will stop shopping entirely',
          'Offices will become overcrowded',
        ],
        correctIndex: 1,
        explanation:
          'Critics counter that "the model does not fit every industry," citing hospitals and restaurants.',
      },
      {
        prompt: 'What did the reader find most surprising about their trial?',
        options: [
          'Their clients complained frequently',
          'Their costs rose dramatically',
          'Their clients barely noticed the change',
          'Their team wanted to return to five days',
        ],
        correctIndex: 2,
        explanation:
          'The reader says "the biggest surprise was that our clients barely noticed."',
      },
      {
        prompt: 'On what point does the reader agree with the critics?',
        options: [
          'That productivity always declines',
          'That salaries should be cut',
          'That the trial should have been longer',
          'That it would not suit a business needing constant front-desk coverage',
        ],
        correctIndex: 3,
        explanation:
          'The reader agrees it "wouldn\'t suit a business that needs someone at the front desk every hour."',
      },
      {
        prompt: "What is the reader's overall attitude toward the four-day week?",
        options: [
          'Broadly positive, with limits for some businesses',
          'Completely opposed to the idea',
          'Indifferent and uninterested',
          'Convinced it works for every workplace',
        ],
        correctIndex: 0,
        explanation:
          'The reader reports a positive experience but notes it will not suit every business — broadly positive with limits.',
      },
    ],
  },
]

export const readingLevelFromScore = (
  correct: number,
  total: number,
): number => {
  if (total === 0) return 0
  const ratio = correct / total
  if (ratio >= 1) return 11
  if (ratio >= 0.9) return 10
  if (ratio >= 0.8) return 9
  if (ratio >= 0.7) return 8
  if (ratio >= 0.6) return 7
  if (ratio >= 0.5) return 6
  if (ratio >= 0.4) return 5
  if (ratio >= 0.25) return 4
  return 3
}

export const levelDescriptor = (level: number): string => {
  if (level >= 11) return 'Advanced — highly effective, native-like control'
  if (level >= 9) return 'Very good — strong, fluent, and well-organized'
  if (level >= 7) return 'Good — clear communication with minor lapses'
  if (level >= 5) return 'Developing — adequate but inconsistent'
  return 'Emerging — frequent breakdowns in communication'
}
