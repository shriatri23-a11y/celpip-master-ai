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

  // ══════════════════════════════════════════════════════════════════
  //  TASK 1 — GIVING ADVICE  (10 prompts)
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'advice-new-city-job',
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
    id: 'advice-university-first-year',
    title: 'Task 1 — Giving Advice',
    taskType: 'Giving Advice',
    prompt:
      'Your younger sibling is about to start university for the first time and is very anxious about making friends and fitting in socially. They have asked for your advice. What would you tell them to help them feel more confident and build connections during their first semester?',
    requirements: [
      'Acknowledge their anxiety and show empathy.',
      'Give at least two specific, actionable suggestions.',
      'End with an encouraging comment.',
    ],
    tips: [
      'Avoid vague advice like "just be yourself" — be specific: join a club, introduce yourself in class.',
      'Draw on your own experience or things you wish someone had told you.',
      'Use a warm, supportive tone throughout.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'advice-burnout-coworker',
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
      'Suggest small changes first (setting boundaries around overtime) before escalating.',
      'Keep your tone calm and reassuring, not alarmist.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'advice-neighbour-conflict',
    title: 'Task 1 — Giving Advice',
    taskType: 'Giving Advice',
    prompt:
      'A friend is having an ongoing conflict with their neighbour over noise late at night. They have tried knocking on the door twice but the neighbour has not changed their behaviour. Your friend is considering calling the police but is not sure if that is the right step. Give your friend advice on how to handle the situation.',
    requirements: [
      'Acknowledge how frustrating the situation is.',
      'Suggest a course of action that escalates appropriately.',
      'Include what to do if that approach does not work.',
    ],
    tips: [
      'Suggest a middle step before calling the police — such as a written note or contacting the landlord.',
      'Use sequencing language: "First, I would try… If that does not work…"',
      'Keep the tone calm and practical.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'advice-financial-job-loss',
    title: 'Task 1 — Giving Advice',
    taskType: 'Giving Advice',
    prompt:
      'A friend tells you they have been struggling financially after losing their job three months ago. They have been avoiding the situation and have not looked for help. They want your advice on what to do next.',
    requirements: [
      'Show empathy and avoid being judgmental.',
      'Suggest at least two concrete next steps they could take.',
      'Remind them of community or government resources available to them.',
    ],
    tips: [
      'Mention Employment Insurance, food banks, or settlement services if you know of them.',
      'Use a gentle tone — your friend may already feel embarrassed.',
      'End on a positive note and offer to help where you can.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'advice-long-distance-relationship',
    title: 'Task 1 — Giving Advice',
    taskType: 'Giving Advice',
    prompt:
      'A friend is in a long-distance relationship and finding it very difficult to maintain. They feel disconnected and are wondering whether to end the relationship or try harder to make it work. They value your honest perspective. Give your friend advice.',
    requirements: [
      'Acknowledge both sides of the dilemma.',
      'Offer at least two practical suggestions to strengthen the relationship if they want to try.',
      'Respect that the final decision is theirs to make.',
    ],
    tips: [
      'Avoid telling them what to do directly — frame suggestions as options.',
      'Use phrases like "Some couples find it helps to…" or "One thing you could try is…"',
      'Close with something supportive regardless of what they decide.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'advice-new-immigrant',
    title: 'Task 1 — Giving Advice',
    taskType: 'Giving Advice',
    prompt:
      'A family friend has recently immigrated to Canada and is finding it very hard to adjust — they feel isolated, struggle with the language in professional settings, and are having trouble finding work in their field. Give them advice on how to start building their life in Canada.',
    requirements: [
      'Acknowledge that the transition is genuinely difficult.',
      'Suggest specific resources or strategies for language improvement and networking.',
      'Offer practical advice for finding work in their field.',
    ],
    tips: [
      'Mention settlement agencies, English language programs, or professional associations.',
      'Keep your advice specific to their situation — not just general encouragement.',
      'End with a reassuring and motivating statement.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'advice-teenager-screen-time',
    title: 'Task 1 — Giving Advice',
    taskType: 'Giving Advice',
    prompt:
      'A relative asks for your advice because their teenager is spending excessive time on video games and social media, and their school grades have been dropping. The relative does not want to create conflict but is genuinely worried. What advice would you give them?',
    requirements: [
      'Acknowledge the parent\'s concern without being dismissive.',
      'Offer at least two strategies for addressing the issue constructively.',
      'Suggest how to approach the conversation with their teenager.',
    ],
    tips: [
      'Avoid suggesting the parent simply "take away" devices — that often creates more conflict.',
      'Suggest a collaborative approach, like setting screen-time agreements together.',
      'Mention understanding the root cause — is the teenager bored, anxious, or socially isolated?',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'advice-career-change',
    title: 'Task 1 — Giving Advice',
    taskType: 'Giving Advice',
    prompt:
      'A friend who has worked as an accountant for ten years wants to quit and pursue a career as a photographer, but is terrified of the financial risk. They ask for your advice on whether to take the leap and how to manage the transition.',
    requirements: [
      'Validate their desire for change while acknowledging the real financial risk.',
      'Suggest a realistic transition plan with at least two concrete steps.',
      'End with motivation and support.',
    ],
    tips: [
      'Suggest starting photography part-time before quitting — test the market first.',
      'Mention financial preparation: building savings or finding photography clients while still employed.',
      'Avoid being dismissive of either path.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'advice-procrastination',
    title: 'Task 1 — Giving Advice',
    taskType: 'Giving Advice',
    prompt:
      'A classmate in your English language program tells you they always procrastinate on assignments and have failed two deadlines. They feel ashamed and do not know how to change. Give them advice on how to overcome procrastination and improve their study habits.',
    requirements: [
      'Show understanding — do not make them feel worse.',
      'Offer at least two specific study techniques or strategies.',
      'Suggest one tool or method they can start using right away.',
    ],
    tips: [
      'Mention techniques like breaking tasks into smaller pieces or using a timer.',
      'Be concrete: "Instead of trying to write the whole essay, try just writing the first paragraph."',
      'Normalize the struggle — many people deal with procrastination.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },

  // ══════════════════════════════════════════════════════════════════
  //  TASK 2 — TALKING ABOUT A PERSONAL EXPERIENCE  (10 prompts)
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'experience-adapting-to-change',
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
    id: 'experience-proud-achievement',
    title: 'Task 2 — Talking about a Personal Experience',
    taskType: 'Personal Experience',
    prompt:
      'Describe a time when you achieved something you were very proud of. It could be a professional, academic, or personal achievement. What was the challenge, what did you do, and how did it make you feel?',
    requirements: [
      'Clearly describe the achievement and what made it challenging.',
      'Explain the specific actions you took to succeed.',
      'Describe your feelings when you accomplished it.',
    ],
    tips: [
      'Give enough background so the listener understands why it was meaningful.',
      'Use strong emotion words: "overwhelmed", "thrilled", "relieved", "proud".',
      'A personal achievement rather than a big public event makes the story more authentic.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'experience-helping-someone',
    title: 'Task 2 — Talking about a Personal Experience',
    taskType: 'Personal Experience',
    prompt:
      'Describe a time when you helped someone who really needed it. What was the situation, what did you do, and what was the outcome? How did helping that person affect you personally?',
    requirements: [
      'Describe the person\'s situation and why they needed help.',
      'Explain exactly what you did to help.',
      'Reflect on how the experience impacted you.',
    ],
    tips: [
      'Be specific about what "helping" meant — concrete actions are more powerful.',
      'Show emotional depth: how did it feel to be needed? To succeed in helping?',
      'Keep the focus on your own experience, not just the other person\'s story.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'experience-cultural-difference',
    title: 'Task 2 — Talking about a Personal Experience',
    taskType: 'Personal Experience',
    prompt:
      'Talk about a time when you experienced a significant cultural difference — either in Canada or in another country. What happened, what surprised you, and what did you learn from the experience?',
    requirements: [
      'Describe the specific cultural difference you encountered.',
      'Explain how you felt and how you reacted.',
      'Share what the experience taught you about yourself or other cultures.',
    ],
    tips: [
      'A "cultural difference" could be about communication styles, workplace norms, or celebrations.',
      'Avoid generalizing — describe one specific moment or event.',
      'Finish with a reflection that shows growth or understanding.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'experience-memorable-mistake',
    title: 'Task 2 — Talking about a Personal Experience',
    taskType: 'Personal Experience',
    prompt:
      'Describe a mistake you made that taught you an important lesson. What was the situation, what went wrong, and what did you learn from it? How has it changed the way you approach similar situations now?',
    requirements: [
      'Describe the mistake honestly and clearly.',
      'Explain why you made that mistake and how you felt about it.',
      'Describe what you learned and how you changed as a result.',
    ],
    tips: [
      'Choosing a meaningful mistake shows depth — avoid trivial examples.',
      'Use past perfect where relevant: "I had assumed… but I realized…"',
      'End on a positive note — what good came from the experience?',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'experience-unfair-treatment',
    title: 'Task 2 — Talking about a Personal Experience',
    taskType: 'Personal Experience',
    prompt:
      'Talk about a time when you felt you were treated unfairly — at school, at work, or in a public situation. What happened, how did you respond, and what was the outcome?',
    requirements: [
      'Describe the situation clearly and what made it feel unfair.',
      'Explain what you did about it.',
      'Reflect on whether you think you handled it well.',
    ],
    tips: [
      'Keep the tone measured — sounding too angry or too passive may not reflect well.',
      'Show that you handled it maturely, even if the outcome was not ideal.',
      'Reflect honestly: "Looking back, I think I could have…" shows self-awareness.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'experience-overcoming-fear',
    title: 'Task 2 — Talking about a Personal Experience',
    taskType: 'Personal Experience',
    prompt:
      'Describe a time when you had to do something that frightened or intimidated you. What was the situation, how did you prepare yourself, and what happened when you went through with it?',
    requirements: [
      'Describe what you were afraid of and why it was intimidating.',
      'Explain how you pushed through despite the fear.',
      'Reflect on the outcome and what you gained from facing that fear.',
    ],
    tips: [
      'Public speaking, a new country, a difficult conversation — all are valid answers.',
      'Be honest about the fear — it makes the story more compelling.',
      'Use vivid language: "My heart was racing", "I kept reminding myself that…"',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'experience-special-celebration',
    title: 'Task 2 — Talking about a Personal Experience',
    taskType: 'Personal Experience',
    prompt:
      'Describe a memorable celebration or special occasion you were part of. What was the event, who was there, and what made it particularly meaningful or unforgettable?',
    requirements: [
      'Describe the event, when and where it took place, and who was involved.',
      'Explain what made it stand out from ordinary occasions.',
      'Share how the event made you feel at the time and afterward.',
    ],
    tips: [
      'Use descriptive sensory language: sights, sounds, smells, and emotions.',
      'Focus on a specific moment or highlight within the event to keep it vivid.',
      'A smaller personal celebration can be just as meaningful as a large public one.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'experience-unexpected-kindness',
    title: 'Task 2 — Talking about a Personal Experience',
    taskType: 'Personal Experience',
    prompt:
      'Describe a time when a stranger or someone you barely knew showed you unexpected kindness. What was the situation, what did they do, and how did it affect you?',
    requirements: [
      'Set the scene clearly — where you were and what was happening.',
      'Describe what the person did and why it was unexpected.',
      'Reflect on how it affected you or changed your perspective.',
    ],
    tips: [
      'Even a small act of kindness can make a great story if you explain its impact.',
      'Use emotion words to show how it felt in the moment.',
      'End with a reflection about people or human nature.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'experience-teamwork-challenge',
    title: 'Task 2 — Talking about a Personal Experience',
    taskType: 'Personal Experience',
    prompt:
      'Describe a time when you had to work closely with others to solve a difficult problem or complete a challenging project. What was the challenge, what was your role, and what did you learn about working as a team?',
    requirements: [
      'Describe the project or problem and why it was challenging.',
      'Explain what your specific role or contribution was.',
      'Reflect on what you learned about teamwork from that experience.',
    ],
    tips: [
      'Focus on your personal contribution, not just the group\'s actions.',
      'Mention a specific difficulty within the team — disagreement or deadline pressure — for a richer story.',
      'End with a lesson about collaboration or leadership.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },

  // ══════════════════════════════════════════════════════════════════
  //  TASK 3 — DESCRIBING A SCENE  (5 prompts — all use images)
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'scene-public-library',
    title: 'Task 3 — Describing a Scene',
    taskType: 'Describing a Scene',
    prompt:
      'Look at the image carefully. Describe this scene in as much detail as you can to someone who cannot see it. Cover the overall setting, the people, their actions, and the atmosphere.',
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
    id: 'scene-farmers-market',
    title: 'Task 3 — Describing a Scene',
    taskType: 'Describing a Scene',
    prompt:
      'Look at the image carefully. Describe what you see in as much detail as possible to someone who cannot see this image. Start with the overall setting, then describe the people and activities.',
    requirements: [
      'Cover the overall setting and then move to specific details.',
      'Describe the people, their actions, and the atmosphere.',
      'Use clear spatial references to organize your description.',
    ],
    tips: [
      'Start with the big picture: "This is an outdoor market on what appears to be a sunny morning."',
      'Then zoom in to specific people and activities.',
      'Do not forget background details — they add depth to your description.',
    ],
    imageSrc: '/speaking/scene-farmers-market.png',
    imageAlt: 'A busy outdoor farmers market with vendors, a street musician, families browsing stalls, and a coffee stand.',
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'scene-airport-departure',
    title: 'Task 3 — Describing a Scene',
    taskType: 'Describing a Scene',
    prompt:
      'Look at the image carefully. Describe the scene in detail to someone who cannot see it. Mention what is happening in different parts of the scene and what the overall atmosphere feels like.',
    requirements: [
      'Describe the overall environment and its purpose.',
      'Identify and describe at least three different groups or individuals.',
      'Comment on the mood or atmosphere of the scene.',
    ],
    tips: [
      'Airports have many activities happening at once — cover multiple areas.',
      'Describe body language and expressions to bring the scene to life.',
      'Summarize the overall feel at the end: "Overall, the atmosphere is…"',
    ],
    imageSrc: '/speaking/scene-airport-departure.png',
    imageAlt: 'A busy airport departure area with travellers, a family saying goodbye, staff helping with luggage, and a coffee kiosk.',
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'scene-city-square-evening',
    title: 'Task 3 — Describing a Scene',
    taskType: 'Describing a Scene',
    prompt:
      'Study the image. Describe what you can see to someone who cannot see it — cover the setting, the people, and the overall mood of the scene.',
    requirements: [
      'Describe the setting, including time of day and type of location.',
      'Describe the activities of at least three people or groups.',
      'Convey the mood and atmosphere through your word choices.',
    ],
    tips: [
      'Evening scenes have distinctive lighting — describe warm colours, shadows, and artificial lights.',
      'Describe what people seem to be feeling, not just what they are doing.',
      'Use a concluding sentence to wrap up the overall atmosphere.',
    ],
    imageSrc: '/speaking/scene-city-square-evening.png',
    imageAlt: 'A lively city square in the evening with string lights, a juggling street performer, people at outdoor tables, and children playing.',
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'scene-city-square-alt',
    title: 'Task 3 — Describing a Scene',
    taskType: 'Describing a Scene',
    prompt:
      'Look at the image carefully. Describe everything you see to someone who cannot view it. Focus on the people, the environment, the actions taking place, and what the scene feels like overall.',
    requirements: [
      'Begin with the setting — time of day, location type, and general layout.',
      'Describe at least four distinct things happening in the scene.',
      'End with a comment on the overall atmosphere or mood.',
    ],
    tips: [
      'Move your description systematically: left to right, foreground to background, or by group.',
      'Use varied sentence starters — avoid beginning every sentence with "There is…"',
      'The atmosphere is just as important as the physical details.',
    ],
    imageSrc: '/speaking/scene-farmers-market.png',
    imageAlt: 'A busy outdoor farmers market with vendors, a street musician, families browsing stalls, and a coffee stand.',
    prepSeconds: 30,
    speakSeconds: 60,
  },

  // ══════════════════════════════════════════════════════════════════
  //  TASK 4 — MAKING PREDICTIONS  (5 prompts — all use images)
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'predict-library-librarian',
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
    id: 'predict-market-musician',
    title: 'Task 4 — Making Predictions',
    taskType: 'Making Predictions',
    prompt:
      'Look at the image again. The musician near the entrance has just finished a song and is looking at the crowd. Predict what will happen next and explain your reasoning based on what you can see.',
    requirements: [
      'Make at least two predictions — one about the musician and one about the crowd.',
      'Support each prediction with a reason drawn from the scene.',
      'Use appropriate future and conditional language.',
    ],
    tips: [
      'Think about cause and effect: "Now that he has finished, the people nearby will probably…"',
      'Consider multiple people in the scene — someone in the crowd may react.',
      'Be confident in your predictions — you do not need to be certain, just logical.',
    ],
    imageSrc: '/speaking/scene-farmers-market.png',
    imageAlt: 'A busy outdoor farmers market with vendors, a street musician, families browsing stalls, and a coffee stand.',
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'predict-airport-boarding',
    title: 'Task 4 — Making Predictions',
    taskType: 'Making Predictions',
    prompt:
      'Look at the image again. The family near the gate has just been called for boarding. Predict what will happen next in this part of the scene and at the coffee kiosk, and explain your reasoning.',
    requirements: [
      'Make at least two predictions — one about the family and one about another part of the scene.',
      'Base your predictions on visible details.',
      'Use natural future-tense phrasing.',
    ],
    tips: [
      'Boarding announcements create a chain of reactions — trace them through the scene.',
      'The coffee kiosk line might shift as gate activity changes.',
      'Use phrases: "Once they board…", "It is likely that… because…"',
    ],
    imageSrc: '/speaking/scene-airport-departure.png',
    imageAlt: 'A busy airport departure area with travellers, a family saying goodbye, staff helping with luggage, and a coffee kiosk.',
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'predict-city-square-performer',
    title: 'Task 4 — Making Predictions',
    taskType: 'Making Predictions',
    prompt:
      'Look at the image again. The street performer near the fountain has just dropped one of the juggling items and the crowd is reacting. Predict what will happen next and give reasons for your predictions.',
    requirements: [
      'Predict at least two things that are likely to happen next.',
      'Support your predictions with logic and scene details.',
      'Include both the performer\'s likely response and the crowd\'s reaction.',
    ],
    tips: [
      'A dropped item in a performance creates a natural turning point — use it well.',
      'Crowds at street performances tend to react with laughter, clapping, or sympathy.',
      'Predict whether the performer will recover and continue, or wrap up.',
    ],
    imageSrc: '/speaking/scene-city-square-evening.png',
    imageAlt: 'A lively city square in the evening with string lights, a juggling street performer, people at outdoor tables, and children playing.',
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'predict-market-coffee-queue',
    title: 'Task 4 — Making Predictions',
    taskType: 'Making Predictions',
    prompt:
      'Look at the image again. The coffee stand at the market has just put up a "Sold Out" sign on one of its most popular drinks. Predict what will happen next among the people waiting in line and nearby. Give reasons based on what you see.',
    requirements: [
      'Make at least two specific predictions about what will happen.',
      'Support each prediction with evidence from the scene.',
      'Use natural future-tense language and hedging phrases.',
    ],
    tips: [
      'Think about how different people might react to the sold-out news.',
      'Consider what the vendor might do next to manage the situation.',
      'Use hedging: "It seems likely that…", "I would expect that…"',
    ],
    imageSrc: '/speaking/scene-farmers-market.png',
    imageAlt: 'A busy outdoor farmers market with vendors, a street musician, families browsing stalls, and a coffee stand.',
    prepSeconds: 30,
    speakSeconds: 60,
  },

  // ══════════════════════════════════════════════════════════════════
  //  TASK 5 — COMPARING AND PERSUADING  (10 prompts)
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'persuade-skating-vs-library',
    title: 'Task 5 — Comparing and Persuading',
    taskType: 'Comparing and Persuading',
    prompt:
      'Your city will use a budget surplus to fund one of two initiatives: Option A is to build a new covered outdoor skating rink downtown, or Option B is to expand the public library system with three new branches in underserved neighbourhoods. Choose one and persuade a friend who strongly prefers the other option.',
    requirements: [
      'Clearly state which option you prefer.',
      'Acknowledge at least one strength of the other option.',
      'Use persuasive language and give at least two strong reasons for your choice.',
    ],
    tips: [
      'Acknowledge your friend\'s view briefly: "I understand why you prefer Option B, however…"',
      'Use phrases: "Not only does this…", "The most compelling reason is…", "Consider the fact that…"',
      'End with a strong closing argument.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'persuade-commute-car-vs-transit',
    title: 'Task 5 — Comparing and Persuading',
    taskType: 'Comparing and Persuading',
    prompt:
      'A friend is deciding their daily commute: Option A is to buy a car (convenient but expensive), or Option B is to take public transit (cheaper but adds 45 minutes each way). They are leaning toward buying a car. Persuade them to choose public transit instead.',
    requirements: [
      'Acknowledge what your friend finds appealing about having a car.',
      'Present compelling reasons why public transit is the better choice.',
      'Address their main objection about the extra commute time.',
    ],
    tips: [
      'Turn the objection into an opportunity: "That time on the bus could be used to read, listen to podcasts, or relax."',
      'Use concrete comparisons: annual cost of a car vs. a transit pass.',
      'Mention environmental and stress-related benefits.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'persuade-online-vs-inperson-course',
    title: 'Task 5 — Comparing and Persuading',
    taskType: 'Comparing and Persuading',
    prompt:
      'You and a colleague are choosing a professional development course. Option A is in-person at a local college (more expensive, requires travel). Option B is an online version (cheaper, flexible). Your colleague strongly prefers the in-person course. Persuade them to choose the online option.',
    requirements: [
      'Acknowledge the genuine advantages of in-person learning.',
      'Argue persuasively for the online option with specific benefits.',
      'Address the most likely concern your colleague would raise.',
    ],
    tips: [
      'Flexibility, cost savings, and self-paced learning are strong arguments for online.',
      'Address concerns about interaction: "Many courses now offer live video sessions and online communities."',
      'End with a specific suggestion — for example, researching a highly rated course together.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'persuade-road-trip-vs-resort',
    title: 'Task 5 — Comparing and Persuading',
    taskType: 'Comparing and Persuading',
    prompt:
      'You and a friend are planning a week-long vacation on a limited budget. Option A is a beach resort in Mexico, and Option B is a road trip through national parks in British Columbia. Your friend strongly wants the beach resort. Persuade them to choose the road trip.',
    requirements: [
      'Show you understand the appeal of the beach resort.',
      'Give at least two strong arguments in favour of the road trip.',
      'Address the "relaxation" concern — your friend may say the road trip is too tiring.',
    ],
    tips: [
      'Cost savings is a strong argument — use it early.',
      'Turn the "tiring" objection around: road trips can be as relaxing or adventurous as you choose.',
      'Use a compelling image: "Imagine waking up to a mountain sunrise with no other tourists around."',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'persuade-keep-remote-work',
    title: 'Task 5 — Comparing and Persuading',
    taskType: 'Comparing and Persuading',
    prompt:
      'Your friend has been offered a promotion requiring five days a week in the office instead of working from home. The salary increase is significant. Option A is to take the promotion. Option B is to decline and keep the current remote role. They are leaning toward taking the promotion. Persuade them to keep their remote role instead.',
    requirements: [
      'Acknowledge the attractiveness of the promotion.',
      'Argue that remote work benefits outweigh the salary increase.',
      'Address the career advancement concern directly.',
    ],
    tips: [
      'Factor in commuting costs, childcare, and mental health — the net salary gain may be smaller than it appears.',
      'Point out that visibility at work is not the only path to career growth.',
      'Use a comparison: "When you factor in all the costs, the raise may amount to only a few hundred dollars a month."',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'persuade-trades-vs-university',
    title: 'Task 5 — Comparing and Persuading',
    taskType: 'Comparing and Persuading',
    prompt:
      'A younger cousin is deciding between Option A: a four-year university business degree, and Option B: a two-year skilled trades certification as an electrician. They are leaning toward university. Persuade them to consider the trades certification instead.',
    requirements: [
      'Acknowledge what is appealing about the university path.',
      'Present specific arguments for the trades certification.',
      'Address the social stigma concern — your cousin may feel trades are "less prestigious."',
    ],
    tips: [
      'Job security, earlier earnings, and lower student debt are compelling arguments.',
      'Challenge the prestige assumption directly: "The idea that trades are less valuable than degrees is outdated."',
      'Use concrete salary comparisons if you know them.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'persuade-quiet-restaurant',
    title: 'Task 5 — Comparing and Persuading',
    taskType: 'Comparing and Persuading',
    prompt:
      'You and a friend are choosing a birthday dinner restaurant. Option A is a trendy new place with great reviews but high prices and a very noisy atmosphere. Option B is a quieter, family-run Italian restaurant that is affordable and has been your favourite for years. Your friend is excited about the trendy new place. Persuade them to choose the Italian restaurant.',
    requirements: [
      'Acknowledge what makes the trendy restaurant appealing.',
      'Give at least two reasons the Italian restaurant is better for a birthday dinner.',
      'Address the "excitement" factor — your friend may say the Italian place is boring.',
    ],
    tips: [
      'For a birthday, conversation and atmosphere matter — use that argument.',
      'Cost is relevant: "At the Italian place, we can actually afford dessert and a bottle of wine."',
      'End with a personal, warm touch: "We always have the best conversations there."',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'persuade-home-workout',
    title: 'Task 5 — Comparing and Persuading',
    taskType: 'Comparing and Persuading',
    prompt:
      'A friend wants to start exercising regularly. Option A is to join a gym (monthly fees, travel, access to equipment and classes). Option B is to set up a small home workout space using online videos (one-time cost, no travel). Your friend is considering the gym. Persuade them that working out at home is the better choice.',
    requirements: [
      'Acknowledge the gym\'s real advantages.',
      'Make a clear case for home workouts with specific benefits.',
      'Address the motivation concern — many people struggle to stay consistent at home.',
    ],
    tips: [
      'Cost over time, travel time saved, and flexibility are strong arguments.',
      'Address motivation directly: "You can work out with a friend over a video call for accountability."',
      'Personalize: "Given how busy your schedule is, I think the convenience factor is huge."',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'persuade-community-garden',
    title: 'Task 5 — Comparing and Persuading',
    taskType: 'Comparing and Persuading',
    prompt:
      'Your neighbourhood is deciding what to do with an empty lot. Option A is to build a children\'s playground. Option B is to convert it into a community vegetable garden. You prefer the garden. Your neighbour strongly prefers the playground. Persuade them that the garden is the better choice.',
    requirements: [
      'Acknowledge the value of a playground, especially for families with young children.',
      'Argue persuasively for the community garden with at least two specific benefits.',
      'Suggest a compromise element if possible.',
    ],
    tips: [
      'The garden can serve all ages — not just children.',
      'Mention food security, community building, and environmental benefits.',
      'A compromise could be a seating area or small corner for children within the garden.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'persuade-cat-vs-dog',
    title: 'Task 5 — Comparing and Persuading',
    taskType: 'Comparing and Persuading',
    prompt:
      'A friend is deciding whether to adopt a pet. Option A is a dog (requires daily walks, significant attention, higher cost). Option B is a cat (more independent, lower maintenance, lower cost). Your friend is leaning toward a dog. Persuade them that a cat is the better choice given their busy lifestyle.',
    requirements: [
      'Acknowledge the appeal of owning a dog.',
      'Make a clear case for why a cat suits their lifestyle better.',
      'Address the common belief that cats are "less affectionate" than dogs.',
    ],
    tips: [
      'Match the argument to their lifestyle — if they travel or work long hours, a cat is clearly more suitable.',
      'Modern cat owners know cats can be very affectionate — challenge the stereotype.',
      'Use a cost comparison to strengthen your argument.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },

  // ══════════════════════════════════════════════════════════════════
  //  TASK 6 — DEALING WITH A DIFFICULT SITUATION  (10 prompts)
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'difficult-cafe-schedule',
    title: 'Task 6 — Dealing with a Difficult Situation',
    taskType: 'Difficult Situation',
    prompt:
      'You are a shift supervisor at a busy café. Two employees have both requested the same Saturday off — one has written approval, and the other says they were verbally told they could have the day. You cannot leave the café understaffed. Leave a voicemail for the employee whose request is not confirmed.',
    requirements: [
      'Explain the situation clearly and professionally.',
      'State your decision and the reason behind it.',
      'Use an appropriate, respectful tone throughout.',
    ],
    tips: [
      'Open your message by addressing the person and introducing the situation.',
      'Be direct but empathetic: "I understand this is disappointing, however…"',
      'Offer a next step — for example, offering another day off in exchange.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'difficult-fence-damage',
    title: 'Task 6 — Dealing with a Difficult Situation',
    taskType: 'Difficult Situation',
    prompt:
      'You accidentally backed your car into your neighbour\'s fence while leaving your driveway this morning. Your neighbour was not home at the time. Call your neighbour, explain what happened, take responsibility, and propose how you will resolve the situation.',
    requirements: [
      'Acknowledge what happened honestly and without making excuses.',
      'Take clear responsibility for the damage.',
      'Offer a specific and fair resolution.',
    ],
    tips: [
      'Do not open with excuses — own the mistake immediately.',
      'Specific offers are more credible than vague promises: "I would like to pay for the repairs."',
      'Keep a calm, sincere tone throughout.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'difficult-allergy-restaurant',
    title: 'Task 6 — Dealing with a Difficult Situation',
    taskType: 'Difficult Situation',
    prompt:
      'You are a server at a restaurant and a customer has just told you their meal was prepared incorrectly — they ordered without nuts due to a food allergy, but the dish contains nuts. The customer is upset but not yet in physical distress. Address the customer and explain what you will do.',
    requirements: [
      'Apologize sincerely and take the situation seriously immediately.',
      'Explain the steps you will take right away.',
      'Reassure the customer that their safety is your first concern.',
    ],
    tips: [
      'This is an allergy situation — treat it with urgency, not routine service recovery.',
      'Offer to bring the manager and replace the meal immediately.',
      'Do not make excuses for the kitchen error.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'difficult-landlord-repairs',
    title: 'Task 6 — Dealing with a Difficult Situation',
    taskType: 'Difficult Situation',
    prompt:
      'You have been waiting three weeks for your landlord to repair a leaking pipe in your apartment. You sent two emails that were not answered. Call your landlord and address the situation firmly and professionally, stating what you need and what you will do if the issue is not resolved.',
    requirements: [
      'Reference your previous communication attempts.',
      'Clearly describe the problem and its impact on your daily life.',
      'State a specific deadline and what steps you will take if it is not met.',
    ],
    tips: [
      'Be firm but professional — do not become aggressive.',
      'Know your escalation options: contacting the tenant board or filing a formal complaint.',
      'Set a clear deadline: "I need this resolved by Friday, otherwise I will have no choice but to…"',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'difficult-missed-client-meeting',
    title: 'Task 6 — Dealing with a Difficult Situation',
    taskType: 'Difficult Situation',
    prompt:
      'You completely forgot about an important meeting with a client this morning that was scheduled three weeks ago. The client waited 45 minutes and eventually left. Call the client, apologize, and try to repair the relationship.',
    requirements: [
      'Apologize genuinely and without excuses.',
      'Take full responsibility for the oversight.',
      'Propose a concrete way to make it up to the client.',
    ],
    tips: [
      'Do not blame technology, other meetings, or anyone else.',
      'An unconditional apology is more effective than one with qualifications.',
      'Offer something specific: "I would like to come to your office at a time that suits you."',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'difficult-coworker-took-credit',
    title: 'Task 6 — Dealing with a Difficult Situation',
    taskType: 'Difficult Situation',
    prompt:
      'A colleague has presented your project idea to your manager as their own, without crediting you. You found out indirectly. Speak to your colleague directly — you want the credit acknowledged without permanently damaging your working relationship.',
    requirements: [
      'Explain what you know happened without being accusatory.',
      'State clearly what you want as an outcome.',
      'Keep the tone professional and solution-focused.',
    ],
    tips: [
      'Use "I" statements: "I felt overlooked when I heard that…" rather than "You stole my idea."',
      'Assume good faith initially — perhaps it was an oversight.',
      'Propose a solution: "I\'d appreciate it if you could mention to the manager that this was a joint idea."',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'difficult-miss-wedding',
    title: 'Task 6 — Dealing with a Difficult Situation',
    taskType: 'Difficult Situation',
    prompt:
      'You RSVP\'d yes to a close friend\'s wedding three months ago, but a family emergency has come up and you cannot attend. The wedding is in five days. Call your friend and explain the situation.',
    requirements: [
      'Explain the family emergency without oversharing private details.',
      'Express genuine regret about missing such an important event.',
      'Offer something meaningful — a gift, a video call, or a plan to celebrate after.',
    ],
    tips: [
      'This is an emotionally sensitive call — lead with warmth, not logistics.',
      'Acknowledge how much the day means to your friend.',
      'Suggest a specific way to celebrate together after the wedding.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'difficult-misleading-course',
    title: 'Task 6 — Dealing with a Difficult Situation',
    taskType: 'Difficult Situation',
    prompt:
      'You bought an online training course, but after completing the first two modules you realize the content is completely different from what was advertised. Call the company\'s customer service line and request a full refund.',
    requirements: [
      'Clearly state what was advertised versus what was delivered.',
      'Request a full refund firmly and professionally.',
      'State what you will do if the refund is denied.',
    ],
    tips: [
      'Be specific about the discrepancy: "The course description said X, but the content covers Y."',
      'Mention consumer protection rights if relevant.',
      'Keep a calm, assertive tone — not angry, but determined.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'difficult-child-injured',
    title: 'Task 6 — Dealing with a Difficult Situation',
    taskType: 'Difficult Situation',
    prompt:
      'You are babysitting your neighbour\'s child. The child tripped in the backyard and has a small cut on their knee that you have cleaned and bandaged, but you think they may need to be seen by a doctor. Call the child\'s parent and explain what happened.',
    requirements: [
      'Explain what happened clearly and calmly.',
      'Describe what you have already done to help the child.',
      'Recommend the parent come home or consult a doctor, and ask what they would like you to do.',
    ],
    tips: [
      'The parent may be worried — stay calm and reassuring to prevent panic.',
      'Be honest about the situation without dramatizing the injury.',
      'Follow the parent\'s lead: "Would you prefer to come home, or shall I take them to a walk-in clinic?"',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },
  {
    id: 'difficult-delayed-project',
    title: 'Task 6 — Dealing with a Difficult Situation',
    taskType: 'Difficult Situation',
    prompt:
      'You are working on a team project at work and realize your section will not be ready by tomorrow\'s deadline due to an unexpected technical problem. Your manager is counting on the full project. Call your manager and explain the situation before the deadline arrives.',
    requirements: [
      'Explain the technical issue clearly without making excuses.',
      'Propose a revised timeline with a specific new deadline.',
      'Offer a partial delivery or temporary solution to minimize the impact.',
    ],
    tips: [
      'Managers appreciate early warnings far more than last-minute surprises.',
      'Come with a solution, not just a problem: "I believe I can have it ready by Thursday morning."',
      'Offer to prioritize the most critical sections for delivery on time.',
    ],
    prepSeconds: 60,
    speakSeconds: 60,
  },

  // ══════════════════════════════════════════════════════════════════
  //  TASK 7 — EXPRESSING OPINIONS  (10 prompts)
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'opinion-social-media-liability',
    title: 'Task 7 — Expressing Opinions',
    taskType: 'Expressing Opinions',
    prompt:
      'Some people believe social media platforms should be held legally responsible when false information spreads on their sites and causes harm. Others believe this would restrict freedom of expression. What is your opinion? Support your view with specific reasons and examples.',
    requirements: [
      'State your position clearly at the beginning.',
      'Support your position with at least two specific reasons or examples.',
      'Acknowledge the opposing view and explain why your position is stronger.',
    ],
    tips: [
      'Open with: "In my view…" or "I strongly believe that…"',
      'Use transitional phrases: "Firstly…", "Furthermore…", "On the other hand…", "Despite this…"',
      'Wrap up with a conclusion that restates your view in different words.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'opinion-mandatory-voting',
    title: 'Task 7 — Expressing Opinions',
    taskType: 'Expressing Opinions',
    prompt:
      'Some people argue that voting should be mandatory in democratic elections, as low voter turnout undermines democratic legitimacy. Others feel that forcing citizens to vote removes their freedom of choice. What is your opinion? Use specific reasons and examples to support your view.',
    requirements: [
      'State a clear position at the start.',
      'Support your view with at least two reasons.',
      'Engage with the opposing argument directly.',
    ],
    tips: [
      'Countries like Australia have mandatory voting — reference this as a real-world example.',
      'Engage with the "freedom of choice" argument rather than ignoring it.',
      'Conclude by restating your position in a compelling way.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'opinion-return-to-office',
    title: 'Task 7 — Expressing Opinions',
    taskType: 'Expressing Opinions',
    prompt:
      'Many employers are requiring workers to return to the office full-time, arguing that in-person collaboration improves productivity. Many employees feel remote work has proven equally productive and is better for their well-being. What is your opinion on whether employees should have the right to work remotely?',
    requirements: [
      'Give a clear personal position.',
      'Support it with at least two reasons or real examples.',
      'Acknowledge the employer\'s perspective and address it.',
    ],
    tips: [
      'Productivity data and work-life balance are strong arguments for remote work.',
      'Address the culture and collaboration concern that employers raise.',
      'Use specific examples: "Many technology companies have shown that remote teams can…"',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'opinion-free-university',
    title: 'Task 7 — Expressing Opinions',
    taskType: 'Expressing Opinions',
    prompt:
      'Some argue that university education should be free for all students, paid for by higher taxes on corporations and the wealthy. Others believe those who benefit most from a degree should pay for it. What is your opinion? Give your view with specific reasons and examples.',
    requirements: [
      'State your position clearly.',
      'Use at least two arguments to support your view.',
      'Respond directly to the strongest opposing argument.',
    ],
    tips: [
      'Nordic countries offer tuition-free university — a useful reference.',
      'Address the "who benefits?" argument: does society also benefit from an educated population?',
      'Consider the economic argument on both sides.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'opinion-ai-employment',
    title: 'Task 7 — Expressing Opinions',
    taskType: 'Expressing Opinions',
    prompt:
      'As artificial intelligence advances, many jobs in customer service, accounting, and transportation are being automated. Some believe AI will ultimately create more jobs than it eliminates. Others worry it will cause widespread unemployment. What is your opinion on AI\'s impact on employment?',
    requirements: [
      'Take a clear position on AI\'s impact on employment.',
      'Support your position with at least two specific points.',
      'Engage with the opposing view.',
    ],
    tips: [
      'Historical technological revolutions have created new types of work — you can reference the Industrial Revolution.',
      'Acknowledge the real short-term disruption automation causes.',
      'Consider whether the jobs AI creates are accessible to the same workers it displaces.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'opinion-junk-food-tax',
    title: 'Task 7 — Expressing Opinions',
    taskType: 'Expressing Opinions',
    prompt:
      'Some governments have introduced taxes on junk food and sugary drinks to address rising obesity rates. Supporters say these taxes discourage unhealthy choices. Critics argue they unfairly target lower-income people and violate personal freedom. What is your opinion?',
    requirements: [
      'State whether you support or oppose junk food taxes.',
      'Provide at least two reasons for your position.',
      'Address the "personal freedom" or "unfair to poor people" argument.',
    ],
    tips: [
      'Mexico and the UK have implemented sugar taxes — concrete examples to cite.',
      'The regressive nature of the tax is the strongest opposing argument — address it directly.',
      'Consider how tax revenue is used to counter the "unfair" argument.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'opinion-single-use-plastics',
    title: 'Task 7 — Expressing Opinions',
    taskType: 'Expressing Opinions',
    prompt:
      'Many countries are banning single-use plastics such as straws and bags, arguing the environmental damage outweighs their convenience. Some businesses argue such bans are costly and that consumers should choose freely. What is your opinion on banning single-use plastics?',
    requirements: [
      'State your position clearly.',
      'Support it with at least two environmental or practical arguments.',
      'Address the business cost concern.',
    ],
    tips: [
      'Ocean plastic pollution is a compelling reference point.',
      'Acknowledge business costs but argue long-term environmental costs are far greater.',
      'Many consumers have adapted quickly to alternatives — use this as evidence.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'opinion-mandatory-gym-class',
    title: 'Task 7 — Expressing Opinions',
    taskType: 'Expressing Opinions',
    prompt:
      'Some educators believe physical education classes should be mandatory throughout all school years, arguing physical activity is essential for health and academic concentration. Others feel limited school time should focus on academic subjects. What is your opinion?',
    requirements: [
      'Give a clear position on mandatory physical education.',
      'Support your view with at least two arguments.',
      'Respond to the "academic time is more important" argument.',
    ],
    tips: [
      'Research shows physical activity improves concentration and academic performance — use this.',
      'Address the academic time argument by explaining the benefits PE brings to learning.',
      'Consider whether the quality of PE matters as much as its presence.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'opinion-gap-year',
    title: 'Task 7 — Expressing Opinions',
    taskType: 'Expressing Opinions',
    prompt:
      'Some people believe students should take a "gap year" between high school and university — travelling, volunteering, or working. Others argue taking a year off disrupts academic momentum and students should go directly to university. What is your opinion on gap years?',
    requirements: [
      'State your opinion on gap years clearly.',
      'Support it with at least two reasons.',
      'Address the concern about losing academic momentum.',
    ],
    tips: [
      'Many highly successful people took gap years — worth mentioning as evidence.',
      'Life experience and self-awareness are benefits of a well-planned gap year.',
      'Address momentum concern: "Students who plan purposeful gap years often return with greater motivation."',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },
  {
    id: 'opinion-cycling-infrastructure',
    title: 'Task 7 — Expressing Opinions',
    taskType: 'Expressing Opinions',
    prompt:
      'Many cities are investing heavily in cycling infrastructure — bike lanes and bike-sharing programs — often at the expense of parking spaces and car lanes. Some residents strongly support this, while drivers feel it is not worth the disruption. What is your opinion?',
    requirements: [
      'State your position on urban cycling investment.',
      'Give at least two arguments in support of your view.',
      'Address the concerns raised by drivers.',
    ],
    tips: [
      'Cities like Amsterdam show that strong cycling infrastructure can work at scale.',
      'Environmental, health, and congestion benefits are strong arguments.',
      'Address the driver\'s concern: reduced car lanes may improve overall traffic flow.',
    ],
    prepSeconds: 30,
    speakSeconds: 90,
  },

  // ════════════════════════════════════════════════���═════════════════
  //  TASK 8 — DESCRIBING AN UNUSUAL SITUATION  (10 prompts)
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'unusual-wrong-package',
    title: 'Task 8 — Describing an Unusual Situation',
    taskType: 'Unusual Situation',
    prompt:
      'You ordered a replacement laptop online to arrive before an important work deadline. When the package arrives, you find it contains a children\'s toy keyboard, a bag of mixed socks, and a note addressed to someone else. Call the company\'s customer service line and describe exactly what you received, what you expected, and what resolution you want.',
    requirements: [
      'Describe what you received in specific detail.',
      'Clearly explain how it differs from what you ordered.',
      'State exactly what resolution you expect from the company.',
    ],
    tips: [
      'Be specific and clear — describe contents, colours, and quantities.',
      'Keep a polite but firm tone: you are dissatisfied but professional.',
      'Use contrast language: "Instead of…, I received…"',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'unusual-double-charge',
    title: 'Task 8 — Describing an Unusual Situation',
    taskType: 'Unusual Situation',
    prompt:
      'Your bank account has been charged twice for the same hotel reservation — once when you booked and once yesterday, two months after your stay. You have already paid in full. Call the hotel and explain the unusual billing situation.',
    requirements: [
      'Describe both charges — when they occurred and the amounts.',
      'Explain why you believe the second charge is an error.',
      'Request a specific resolution, such as a refund or written explanation.',
    ],
    tips: [
      'Have specific details ready: dates, amounts, booking reference.',
      'Stay calm — this may be a genuine error, not intentional fraud.',
      'Ask for written confirmation of the refund or investigation.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'unusual-car-towed',
    title: 'Task 8 — Describing an Unusual Situation',
    taskType: 'Unusual Situation',
    prompt:
      'You parked your car in what you believed was a legal spot near your workplace, but when you returned it was gone. You discover it has been towed. Call the towing company — you are confused because you do not believe you were parked illegally.',
    requirements: [
      'Describe where you parked and why you thought it was legal.',
      'Ask for clarification about why the car was towed.',
      'Request information about how to retrieve your car and at what cost.',
    ],
    tips: [
      'Describe the parking spot specifically — street name, signage, time restrictions.',
      'Stay composed — frustration is understandable but aggression will not help.',
      'Ask for the specific bylaw or sign that authorized the tow.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'unusual-wrong-hotel-room',
    title: 'Task 8 — Describing an Unusual Situation',
    taskType: 'Unusual Situation',
    prompt:
      'You booked a non-smoking king bedroom at a hotel for a special anniversary trip. When you arrive, you are checked in to a smoking queen room on the ground floor facing the parking lot. Call the front desk from your room and describe the discrepancy.',
    requirements: [
      'Clearly describe what you booked versus what you received.',
      'Explain why the difference matters to you.',
      'Request a specific resolution before the end of the call.',
    ],
    tips: [
      'Be specific: smoking vs. non-smoking, king vs. queen, floor preference, view.',
      'Mention the special occasion — it adds context without sounding demanding.',
      'Ask what options are available immediately: upgrade, room change, or discount.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'unusual-flight-diverted',
    title: 'Task 8 — Describing an Unusual Situation',
    taskType: 'Unusual Situation',
    prompt:
      'You were flying from Toronto to Vancouver for a job interview tomorrow morning. Your flight was diverted to Calgary due to a mechanical issue and will not continue tonight. The airline gave you a meal voucher but no accommodation. Call the airline\'s customer service and explain your situation.',
    requirements: [
      'Explain the diversion and its impact on your plans.',
      'State clearly what you need: accommodation, a rebooking, or compensation.',
      'Reference what you believe the airline is obligated to provide.',
    ],
    tips: [
      'A job interview is a concrete reason for urgency — state it clearly.',
      'Airlines in Canada are regulated by APPR passenger rights — reference these if you know them.',
      'Be firm: "I need to be in Vancouver by 8 AM at the latest."',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'unusual-wrong-business-review',
    title: 'Task 8 — Describing an Unusual Situation',
    taskType: 'Unusual Situation',
    prompt:
      'A one-star review has been posted on Google for your family\'s small business, but it clearly describes a completely different type of business at a different address. This is harming your reputation. Call Google support and explain the situation.',
    requirements: [
      'Describe what the review says and why you believe it was posted in error.',
      'Explain how it is affecting your business.',
      'Request immediate removal and ask what documentation Google needs.',
    ],
    tips: [
      'Be specific: quote or paraphrase the review and explain the discrepancy.',
      'Keep a professional tone — you are trying to resolve a mistake.',
      'Ask about the process and timeline for removal.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'unusual-gym-equipment-failure',
    title: 'Task 8 — Describing an Unusual Situation',
    taskType: 'Unusual Situation',
    prompt:
      'While using gym equipment, it suddenly malfunctioned — the cable snapped and the weight stack fell, narrowly missing your foot. You were not injured, but you are shaken and the equipment is clearly broken. Speak to the gym manager and describe exactly what happened.',
    requirements: [
      'Describe the incident in clear sequence: what you were doing, what happened, and the outcome.',
      'Note that the equipment appeared to be poorly maintained or defective.',
      'Request that the equipment be taken out of service and ask what the gym will do.',
    ],
    tips: [
      'Safety incidents should be reported clearly and calmly — this is a liability matter.',
      'Use precise sequencing: "I was performing a seated cable row when suddenly…"',
      'Ask whether an incident report will be filed.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'unusual-allergy-reaction',
    title: 'Task 8 — Describing an Unusual Situation',
    taskType: 'Unusual Situation',
    prompt:
      'You have a severe peanut allergy and specifically asked your server to confirm the dish was peanut-free. After eating half the meal, you notice a peanut taste and your throat begins to tighten slightly. You take your EpiPen and feel better. Speak to the restaurant manager about what happened.',
    requirements: [
      'Describe the sequence of events: the request, the confirmation, and the reaction.',
      'Explain the potential severity of what occurred.',
      'State what you expect the restaurant to do to address this.',
    ],
    tips: [
      'While assertive, your tone should aim to improve safety, not just escalate.',
      'Mention that you informed the server of the allergy explicitly — this is important context.',
      'Ask whether the restaurant has a documented allergy protocol and what went wrong.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'unusual-wrong-prescription',
    title: 'Task 8 — Describing an Unusual Situation',
    taskType: 'Unusual Situation',
    prompt:
      'You received a letter from your doctor\'s office with a dosage change for your medication. At the pharmacy, the pharmacist notices the new dosage in the letter is three times the standard dose — possibly a clerical error. Describe the situation to the pharmacist and explain what you would like to do.',
    requirements: [
      'Describe what the letter says and why the pharmacist flagged it.',
      'Express your concern without alarming the pharmacist unnecessarily.',
      'Ask what the correct next steps are to verify the correct dosage.',
    ],
    tips: [
      'Medical situations require calm, precise communication.',
      'Offer to call the doctor\'s office together or wait while the pharmacist confirms.',
      'Do not take the medication until the error is verified — state this clearly.',
    ],
    prepSeconds: 30,
    speakSeconds: 60,
  },
  {
    id: 'unusual-identity-confusion',
    title: 'Task 8 — Describing an Unusual Situation',
    taskType: 'Unusual Situation',
    prompt:
      'You received an email from your university stating you have been suspended for academic dishonesty. This is a complete surprise — you have submitted no recent work and have never been accused of anything. You discover the email was sent to you in error — it was intended for a student with a very similar name. Call student affairs and explain the situation.',
    requirements: [
      'Describe what you received and why you believe it is a case of mistaken identity.',
      'Express how the error has affected you.',
      'Request immediate written confirmation that the record has been corrected.',
    ],
    tips: [
      'Provide specific details: your student ID, your name, and how the names are similar.',
      'Remain calm despite being upset — professionalism will resolve the issue faster.',
      'Ask for written confirmation so the error is formally corrected in your academic record.',
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
