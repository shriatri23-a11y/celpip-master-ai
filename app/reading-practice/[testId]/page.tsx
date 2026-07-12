import { notFound } from 'next/navigation'
import { findStaticTest } from '@/lib/reading-practice'
import { getCommunityReadingTest } from '@/app/actions/ai-reading-tests'
import { PracticeRunner } from '@/components/reading-practice/practice-runner'

// Full-screen runner (outside the dashboard chrome) so it mirrors the CELPIP
// mock-test experience exactly.
export default async function ReadingPracticeRunnerPage({
  params,
}: {
  params: Promise<{ testId: string }>
}) {
  const { testId } = await params

  let test = findStaticTest(testId) ?? null

  if (!test && testId.startsWith('ai-')) {
    const dbId = Number(testId.slice(3))
    if (Number.isFinite(dbId)) {
      test = await getCommunityReadingTest(dbId)
    }
  }

  if (!test) notFound()

  return <PracticeRunner test={test} />
}
