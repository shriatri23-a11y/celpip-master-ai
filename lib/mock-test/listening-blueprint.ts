/**
 * Listening content blueprint (report section 5.2).
 *
 * Every scored listening audio section is classified against one of these
 * task categories so the practice content maps to the same taxonomy the
 * assessment framework uses. Each entry carries the category name, the skill
 * purpose it targets, and the typical clip duration for that category.
 */

export type BlueprintCategory = {
  /** Human-readable task category, e.g. "Customer Service Call". */
  category: string
  /** The primary skill/purpose the category measures. */
  purpose: string
  /** Typical clip duration for the category. */
  duration: string
}

export const LISTENING_BLUEPRINT = {
  dailyConversation: {
    category: "Daily Conversation",
    purpose: "Everyday communication",
    duration: "30–60 sec",
  },
  workplaceMeeting: {
    category: "Workplace Meeting",
    purpose: "Professional English",
    duration: "60–120 sec",
  },
  customerService: {
    category: "Customer Service Call",
    purpose: "Information retrieval",
    duration: "45–90 sec",
  },
  travelAnnouncement: {
    category: "Travel Announcement",
    purpose: "Listening for details",
    duration: "30–60 sec",
  },
  campusDiscussion: {
    category: "Campus Discussion",
    purpose: "Academic English",
    duration: "90–150 sec",
  },
  newsReport: {
    category: "News Report",
    purpose: "Main idea & inference",
    duration: "60–120 sec",
  },
  publicTalk: {
    category: "Public Talk",
    purpose: "Extended comprehension",
    duration: "2–4 min",
  },
  interview: {
    category: "Interview",
    purpose: "Speaker attitude & opinion",
    duration: "90–180 sec",
  },
} as const satisfies Record<string, BlueprintCategory>

export type BlueprintKey = keyof typeof LISTENING_BLUEPRINT
