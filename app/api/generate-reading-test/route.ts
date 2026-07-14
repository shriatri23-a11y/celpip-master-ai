import { NextResponse } from 'next/server'
import { generateObject } from 'ai'
import { z } from 'zod'
import { headers } from 'next/headers'
import { withModelFallback } from '@/lib/ai'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { aiReadingTest } from '@/lib/db/schema'

export const maxDuration = 60

const QUESTIONS_PER_TEST = 15

const PART_META: Record<number, { label: string; questions: number; blurb: string }> = {
  1: {
    label: 'Reading Correspondence',
    questions: QUESTIONS_PER_TEST,
    blurb:
      'A personal or semi-formal message (email or letter). Questions test comprehension of the message, then a short reply email with blanks that must be completed by choosing the best word/phrase from context.',
  },
  2: {
    label: 'Reading to Apply a Diagram',
    questions: QUESTIONS_PER_TEST,
    blurb:
      'A visual comparison of options (e.g. plans, venues, tours) plus a short email. Readers apply information from the diagram to the email to answer questions and complete a reply.',
  },
  3: {
    label: 'Reading for Information',
    questions: QUESTIONS_PER_TEST,
    blurb:
      'An informational passage split into labelled paragraphs (A, B, C, D). Questions ask which paragraph contains specific information, with one or more "not given" style distractors.',
  },
  4: {
    label: 'Reading for Viewpoints',
    questions: QUESTIONS_PER_TEST,
    blurb:
      'A news-style article presenting a topic followed by a reader comment expressing an opinion. Questions test viewpoints, opinions, and completing a summary of the comment.',
  },
}

const questionSchema = z.object({
  prompt: z.string().describe('The question stem or, for cloze items, a short lead-in.'),
  options: z.array(z.string()).length(4).describe('Exactly four answer options.'),
  correctIndex: z.number().min(0).max(3).describe('Index (0-3) of the correct option.'),
  explanation: z.string().describe('One to two sentences explaining why the answer is correct.'),
})

const testSchema = z.object({
  title: z.string().describe('A short, specific title for the passage.'),
  intro: z.string().describe('One sentence shown before the passage explaining the scenario.'),
  passageTitle: z.string().describe('Heading displayed above the passage text.'),
  passageParagraphs: z
    .array(z.string())
    .min(2)
    .describe('The passage split into paragraphs. For Part 3 begin each paragraph with "A. ", "B. " etc.'),
  questionInstructions: z.string().describe('Instruction line shown above the questions.'),
  questions: z.array(questionSchema).min(4),
})

export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({ headers: await headers() })
    if (!session?.user) {
      return NextResponse.json({ error: 'You must be signed in to generate a test.' }, { status: 401 })
    }

    const body = await req.json().catch(() => ({}))
    const part = Number(body.part)
    const topic = typeof body.topic === 'string' ? body.topic.trim().slice(0, 120) : ''
    const difficulty = ['easy', 'medium', 'hard'].includes(body.difficulty) ? body.difficulty : 'medium'

    const meta = PART_META[part]
    if (!meta) {
      return NextResponse.json({ error: 'Invalid reading part.' }, { status: 400 })
    }

    const { object } = await withModelFallback((model) => generateObject({
      model,
      schema: testSchema,
      prompt: `You are an expert CELPIP test writer. Create ONE authentic CELPIP Reading practice test for "Part ${part}: ${meta.label}".

Format requirements: ${meta.blurb}
Produce exactly ${meta.questions} multiple-choice questions, each with 4 options and one correct answer.
The passage MUST be long and detailed enough to fairly support all ${meta.questions} questions — write a substantial passage (for Parts 1 & 2 include the message plus a reply with several blanks to complete; for Parts 3 & 4 write enough paragraphs and detail). Every question must be distinct and answerable from the passage; do not pad with repetitive or trivial items.
Difficulty: ${difficulty}.
${topic ? `Base the passage on this topic/theme: "${topic}".` : 'Choose a realistic everyday Canadian context.'}

Rules:
- Keep language natural and level-appropriate for CELPIP (CLB 7-10).
- Make distractors plausible but clearly wrong on close reading.
- Every explanation must reference specific evidence from the passage.
- Do not mention that this is AI-generated.`,
    }))

    const questions = object.questions.map((q) => ({
      prompt: q.prompt,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
    }))

    // Stored JSON must match the shared `ReadingPracticeTest` shape so it flows
    // through the exact same frame-accurate runner as static tests.
    const data = {
      instruction: object.questionInstructions || `Read the passage and answer the questions.`,
      timeMinutes: part === 4 ? 15 : part === 1 ? 13 : 12,
      passage: [object.passageTitle, ...object.passageParagraphs].filter(Boolean),
      questions,
      difficulty,
    }

    const [row] = await db
      .insert(aiReadingTest)
      .values({
        createdByUserId: session.user.id,
        createdByName: session.user.name ?? null,
        part,
        partLabel: meta.label,
        title: object.title,
        topic: topic || null,
        difficulty,
        data,
        questionCount: questions.length,
        published: true,
      })
      .returning({ id: aiReadingTest.id })

    return NextResponse.json({ id: row.id })
  } catch (err) {
    console.error('[v0] generate-reading-test error:', err)
    return NextResponse.json(
      { error: 'Failed to generate the reading test. Please try again.' },
      { status: 500 },
    )
  }
}
