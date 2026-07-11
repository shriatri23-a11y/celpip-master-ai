import { redirect, notFound } from "next/navigation"
import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import { getMockTest } from "@/lib/mock-test/listening-test"
import { TestRunner } from "@/components/mock-test/test-runner"

export default async function MockTestPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect("/sign-in")

  const { id } = await params
  const test = getMockTest(id)
  if (!test) notFound()

  return <TestRunner test={test} />
}
