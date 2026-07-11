import { headers } from "next/headers"
import { notFound, redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { getExamProgress, type SectionName } from "@/app/actions/mock-progress"
import { getExamSection, getMockExam, SECTION_ORDER } from "@/lib/mock-test/exams"
import { buildReview, type TaskReview } from "@/lib/mock-test/review"
import { ReviewShell } from "@/components/mock-test/review-shell"

export default async function SavedReviewPage({
  params,
}: {
  params: Promise<{ examId: string; section: string }>
}) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect("/sign-in")

  const { examId, section: sectionParam } = await params
  if (!SECTION_ORDER.includes(sectionParam as SectionName)) notFound()

  const section = sectionParam as SectionName
  const exam = getMockExam(examId)
  const test = getExamSection(examId, section)
  if (!exam || !test) notFound()

  const progress = (await getExamProgress(examId))[section]
  if (progress.status !== "completed") {
    redirect(`/dashboard/mock-tests/${examId}`)
  }

  const isAutoScored = section === "listening" || section === "reading"
  const aiTasks = Array.isArray(progress.reviewData)
    ? (progress.reviewData as TaskReview[])
    : []

  return (
    <ReviewShell
      examId={examId}
      examTitle={exam.title}
      section={section}
      level={progress.level}
      autoGroups={isAutoScored ? buildReview(test, progress.answers) : undefined}
      aiTasks={isAutoScored ? undefined : aiTasks}
    />
  )
}
