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
  prompt: string
  prepSeconds: number
  speakSeconds: number
}

export const speakingTasks: SpeakingTask[] = [
  {
    id: 'advice',
    title: 'Task 1 — Giving Advice',
    prompt:
      'A friend has just moved to Canada and is nervous about their first job interview in English. Give them advice on how to prepare and feel confident.',
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'personal-experience',
    title: 'Task 2 — Talking about a Personal Experience',
    prompt:
      'Describe a memorable trip or celebration you experienced. Explain what happened and why it was meaningful to you.',
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'opinion',
    title: 'Task 5 — Expressing Opinions',
    prompt:
      'Some people think working from home is better than working in an office. Do you agree or disagree? Explain your opinion with reasons.',
    prepSeconds: 30,
    speakSeconds: 90,
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
