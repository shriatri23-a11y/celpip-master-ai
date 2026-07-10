import { z } from 'zod'

export const scoreSchema = z.object({
  overallLevel: z
    .number()
    .min(1)
    .max(12)
    .describe('Estimated overall CELPIP level from 1 to 12'),
  criteria: z
    .array(
      z.object({
        name: z.string().describe('Name of the scoring criterion'),
        score: z.number().min(1).max(12).describe('Level for this criterion'),
        feedback: z
          .string()
          .describe('One or two sentences of specific feedback'),
      }),
    )
    .describe('Score for each CELPIP criterion'),
  strengths: z
    .array(z.string())
    .describe('2-4 concrete strengths in the response'),
  improvements: z
    .array(z.string())
    .describe('2-4 specific, actionable improvements'),
  revisedExample: z
    .string()
    .describe(
      'A short improved rewrite of one weak sentence or paragraph, showing higher-level language',
    ),
  summary: z
    .string()
    .describe('A short encouraging summary of the overall performance'),
})

export type ScoreResult = z.infer<typeof scoreSchema>
