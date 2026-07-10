import { PageHeader } from "@/components/dashboard/page-header"
import { HistoryList } from "@/components/dashboard/history-list"
import { getAttempts } from "@/app/actions/score-history"

export default async function HistoryPage() {
  const attempts = await getAttempts()

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-8">
      <PageHeader
        title="Score history"
        description="Review every writing and speaking attempt with its full feedback."
      />
      <HistoryList attempts={attempts} />
    </div>
  )
}
