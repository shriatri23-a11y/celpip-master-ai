/**
 * Shared types for CELPIP Reading Part 2 ("Reading to Apply a Diagram").
 * A diagram is a comparison table where each row has an icon + label and a set
 * of feature cells — mirroring the official test's visual layout (e.g. comparing
 * travel options by features, price, and duration).
 */

export type ReadingDiagramIcon =
  | "train"
  | "bus"
  | "plane"
  | "car"
  | "ship"
  | "bike"
  | "clock"
  | "map"
  | "home"
  | "building"
  | "calendar"
  | "users"

export type ReadingDiagramCell = {
  /** Optional small heading for the cell, e.g. "Price" or "Duration". */
  label?: string
  /** One or more lines of text shown in the cell. */
  lines: string[]
}

export type ReadingDiagramRow = {
  /** Row label shown under the picture, e.g. "Train". */
  label: string
  /**
   * Path to a picture shown for this row (matches the official CELPIP layout,
   * which uses pictures rather than icons). Falls back to `icon` if omitted.
   */
  image?: string
  /** Icon key rendered from lucide-react (fallback when no image is provided). */
  icon?: ReadingDiagramIcon
  /** Feature cells for this row (rendered as columns). */
  cells: ReadingDiagramCell[]
}

export type ReadingDiagram = {
  /** Title shown above the diagram, e.g. "Travel Options to Seattle". */
  title: string
  /** Optional short caption under the title. */
  caption?: string
  rows: ReadingDiagramRow[]
}
