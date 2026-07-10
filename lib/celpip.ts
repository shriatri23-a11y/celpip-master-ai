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

export const levelDescriptor = (level: number): string => {
  if (level >= 11) return 'Advanced — highly effective, native-like control'
  if (level >= 9) return 'Very good — strong, fluent, and well-organized'
  if (level >= 7) return 'Good — clear communication with minor lapses'
  if (level >= 5) return 'Developing — adequate but inconsistent'
  return 'Emerging — frequent breakdowns in communication'
}
