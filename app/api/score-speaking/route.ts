import { generateText, Output } from "ai"
import { z } from "zod"
import { scoreReportSchema } from "@/lib/scoring-schema"

export const maxDuration = 60

const bodySchema = z.object({
  prompt: z.string().min(1),
  taskTitle: z.string().min(1),
  transcript: z.string().min(1),
  durationSeconds: z.number().optional(),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const { prompt, taskTitle, transcript, durationSeconds } = bodySchema.parse(json)

    const wordCount = transcript.trim().split(/\s+/).filter(Boolean).length

    const { experimental_output: report } = await generateText({
      model: "openai/gpt-4o-mini",
      experimental_output: Output.object({ schema: scoreReportSchema }),
      system:
        "You are a certified CELPIP Speaking examiner. You evaluate spoken responses that have been transcribed to text. " +
        "Assess Content/Coherence, Vocabulary, Listenability (fluency, natural phrasing, filler words), and Task Fulfillment. " +
        "CELPIP Speaking is scored on levels M and 1-12. Be fair but rigorous, and calibrate to real CELPIP standards. " +
        "Because this is a transcript, do not penalize for spelling or punctuation. Infer hesitation and fillers (um, uh, like) from the text. " +
        "Return all fields required by the schema. Keep feedback specific, actionable, and encouraging.",
      prompt:
        `CELPIP Speaking task: "${taskTitle}"\n\n` +
        `Prompt shown to the test taker:\n${prompt}\n\n` +
        `Transcribed spoken response (${wordCount} words${
          durationSeconds ? `, ${durationSeconds}s speaking time` : ""
        }):\n"""\n${transcript}\n"""\n\n` +
        `Provide a full CELPIP Speaking evaluation.`,
    })

    return Response.json(report)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error"
    console.log("[v0] score-speaking error:", message)
    return Response.json({ error: message }, { status: 500 })
  }
}
