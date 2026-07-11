import { redirect, notFound } from "next/navigation"
import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import { getExamSection, type SectionKey } from "@/lib/mock-test/exams"
import { getExamProgress } from "@/app/actions/mock-progress"
import { TestRunner } from "@/components/mock-test/test-runner"

const SECTIONS: SectionKey[] = ["listening", "reading", "writing", "speaking"]

export default async function MockSectionPage({
  params,
  searchParams,
}: {
  params: Promise<{ examId: string; section: string }>
  searchParams: Promise<{ restart?: string }>
}) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect("/sign-in")

  const { examId, section } = await params
  const { restart } = await searchParams

  if (!SECTIONS.includes(section as SectionKey)) notFound()
  const sectionKey = section as SectionKey
  const test = getExamSection(examId, sectionKey)
  if (!test) notFound()

  // Resume state unless the user explicitly restarted.
  let initialStepIndex = 0
  let initialAnswers: Record<string, string> = {}
  if (!restart) {
    const progress = await getExamProgress(examId)
    const sp = progress[sectionKey]
    if (sp.status === "in_progress") {
      initialStepIndex = sp.stepIndex
      initialAnswers = sp.answers
    }
  }

  return (
    <TestRunner
      test={test}
      examId={examId}
      section={sectionKey}
      initialStepIndex={initialStepIndex}
      initialAnswers={initialAnswers}
    />
  )
}
