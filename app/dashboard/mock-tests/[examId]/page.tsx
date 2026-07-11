import { redirect, notFound } from "next/navigation"
import Link from "next/link"
import { headers } from "next/headers"
import { ChevronRight } from "lucide-react"
import { auth } from "@/lib/auth"
import { getMockExam } from "@/lib/mock-test/exams"
import { getExamProgress } from "@/app/actions/mock-progress"
import { ExamStatus } from "@/components/mock-test/exam-status"

export default async function ExamHubPage({
  params,
}: {
  params: Promise<{ examId: string }>
}) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect("/sign-in")

  const { examId } = await params
  const exam = getMockExam(examId)
  if (!exam) notFound()

  const progress = await getExamProgress(examId)
  const completedCount = Object.values(progress).filter(
    (p) => p.status === "completed",
  ).length

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/dashboard" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="size-4" />
        <Link href="/dashboard/mock-tests" className="hover:text-foreground">
          Mock Exams
        </Link>
        <ChevronRight className="size-4" />
        <span className="font-medium text-foreground">{exam.title}</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Current Exam Status
        </h1>
        <p className="mt-1 text-muted-foreground">
          Track your progress across each section of the mock exam. You can take
          the sections in any order — pick whichever you want to do first.
        </p>
        <p className="mt-3 text-sm font-medium text-primary">
          {completedCount} of 4 sections completed
        </p>
      </div>

      <ExamStatus examId={examId} progress={progress} />

      {/* Gradient bar accent (matches the reference design) */}
      <div className="mt-10 h-1.5 w-full rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600" />
    </div>
  )
}
