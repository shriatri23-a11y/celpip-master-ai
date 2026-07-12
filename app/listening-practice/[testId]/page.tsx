import { notFound } from "next/navigation"
import { findListeningTest } from "@/lib/listening-practice"
import { ListeningRunner } from "@/components/listening-practice/listening-runner"

// Full-screen runner (outside the dashboard chrome) so it mirrors the CELPIP
// mock-test experience exactly.
export default async function ListeningPracticeRunnerPage({
  params,
}: {
  params: Promise<{ testId: string }>
}) {
  const { testId } = await params
  const test = findListeningTest(testId)
  if (!test) notFound()

  return <ListeningRunner test={test} />
}
