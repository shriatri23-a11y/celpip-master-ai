import {
  pgTable,
  text,
  timestamp,
  boolean,
  serial,
  integer,
  jsonb,
} from 'drizzle-orm/pg-core'

// --- Better Auth required tables -------------------------------------------
// Column names are camelCase to match Better Auth's defaults. Do not rename.

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('emailVerified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expiresAt').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  ipAddress: text('ipAddress'),
  userAgent: text('userAgent'),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
})

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('accountId').notNull(),
  providerId: text('providerId').notNull(),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('accessToken'),
  refreshToken: text('refreshToken'),
  idToken: text('idToken'),
  accessTokenExpiresAt: timestamp('accessTokenExpiresAt'),
  refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
})

// --- App tables ------------------------------------------------------------
// Per-user scoping relies on the `userId` column (no FK by design).

export const scoreAttempt = pgTable('score_attempt', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  skill: text('skill').notNull(), // "writing" | "speaking"
  taskType: text('taskType').notNull(),
  prompt: text('prompt').notNull(),
  responseText: text('responseText').notNull(),
  celpipLevel: integer('celpipLevel').notNull(),
  overallLabel: text('overallLabel').notNull(),
  report: jsonb('report').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

// AI-generated speaking tasks, shared across all users once published.
export const aiSpeakingTask = pgTable('ai_speaking_task', {
  id: serial('id').primaryKey(),
  createdByUserId: text('created_by_user_id').notNull(),
  taskType: text('task_type').notNull(),       // e.g. "Giving Advice"
  taskNumber: integer('task_number').notNull(), // 1–8
  title: text('title').notNull(),
  prompt: text('prompt').notNull(),
  requirements: jsonb('requirements').notNull().$type<string[]>(),
  tips: jsonb('tips').notNull().$type<string[]>(),
  imageSrc: text('image_src'),
  imageAlt: text('image_alt'),
  prepSeconds: integer('prep_seconds').notNull(),
  speakSeconds: integer('speak_seconds').notNull(),
  // Community visibility — true once the task is ready to appear for all users
  published: boolean('published').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

// AI-generated reading practice tests, shared across all users once published.
export const aiReadingTest = pgTable('ai_reading_test', {
  id: serial('id').primaryKey(),
  createdByUserId: text('created_by_user_id').notNull(),
  createdByName: text('created_by_name'),
  part: integer('part').notNull(), // 1–4 (CELPIP reading parts)
  partLabel: text('part_label').notNull(),
  title: text('title').notNull(),
  topic: text('topic'),
  difficulty: text('difficulty').notNull().default('medium'), // "easy" | "medium" | "hard"
  // Full self-contained reading test payload (passage, questions, answers, explanations)
  data: jsonb('data').notNull(),
  questionCount: integer('question_count').notNull().default(0),
  // Community visibility — true once the test is ready to appear for all users
  published: boolean('published').notNull().default(true),
  attempts: integer('attempts').notNull().default(0),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

// Per-user, per-exam progress for each of the four mock-exam sections.
export const mockSectionProgress = pgTable('mock_section_progress', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  examId: text('examId').notNull(),
  section: text('section').notNull(), // "listening" | "reading" | "writing" | "speaking"
  status: text('status').notNull().default('in_progress'), // "in_progress" | "completed"
  stepIndex: integer('stepIndex').notNull().default(0),
  answers: jsonb('answers').notNull().default({}),
  level: integer('level'),
  label: text('label'),
  correct: integer('correct'),
  total: integer('total'),
  // Stored AI task reports for writing/speaking so a past attempt can be
  // re-rendered without re-running the model.
  reviewData: jsonb('reviewData'),
  completedAt: timestamp('completedAt'),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})
