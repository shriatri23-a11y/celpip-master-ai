import { listeningSummaries } from "@/lib/listening-practice"
import { ListeningHub } from "@/components/listening-practice/listening-hub"

export default function ListeningPage() {
  return <ListeningHub tests={listeningSummaries()} />
}
