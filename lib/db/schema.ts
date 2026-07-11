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
