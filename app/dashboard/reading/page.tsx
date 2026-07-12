import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import { staticReadingTests, toSummary } from "@/lib/reading-practice"
import { getCommunityReadingTests } from "@/app/actions/ai-reading-tests"
import { ReadingHub } from "@/components/reading-practice/reading-hub"

export default async function ReadingPage() {
  const [session, community] = await Promise.all([
    auth.api.getSession({ headers: await headers() }).catch(() => null),
    getCommunityReadingTests().catch(() => []),
  ])

  const staticSummaries = staticReadingTests.map(toSummary)
  const communitySummaries = community.map(toSummary)

  return (
    <ReadingHub
      staticTests={staticSummaries}
      communityTests={communitySummaries}
      signedIn={!!session?.user}
    />
  )
}
