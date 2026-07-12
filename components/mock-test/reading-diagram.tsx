import {
  Train,
  Bus,
  Plane,
  Car,
  Ship,
  Bike,
  Clock,
  Map,
  Home,
  Building2,
  Calendar,
  Users,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { ReadingDiagram, ReadingDiagramIcon } from "@/lib/reading-diagram"

const ICONS: Record<ReadingDiagramIcon, LucideIcon> = {
  train: Train,
  bus: Bus,
  plane: Plane,
  car: Car,
  ship: Ship,
  bike: Bike,
  clock: Clock,
  map: Map,
  home: Home,
  building: Building2,
  calendar: Calendar,
  users: Users,
}

/**
 * Renders a CELPIP Reading Part 2 diagram as a comparison table: each row shows
 * an icon + label on the left and a set of feature cells across the row.
 */
export function ReadingDiagramView({
  diagram,
  className,
}: {
  diagram: ReadingDiagram
  className?: string
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-mt-border bg-white",
        className,
      )}
    >
      <div className="border-b border-mt-border bg-mt-panel px-4 py-2.5">
        <p className="text-sm font-semibold text-mt-blue">{diagram.title}</p>
        {diagram.caption && (
          <p className="mt-0.5 text-xs text-muted-foreground">{diagram.caption}</p>
        )}
      </div>
      <div className="divide-y divide-mt-border">
        {diagram.rows.map((row, ri) => {
          const Icon = row.icon ? (ICONS[row.icon] ?? Map) : Map
          return (
            <div key={ri} className="grid grid-cols-[110px_1fr] items-stretch">
              {/* Picture + label */}
              <div className="flex flex-col items-center justify-center gap-1.5 border-r border-mt-border bg-mt-panel/50 p-2.5">
                {row.image ? (
                  <span className="flex size-20 items-center justify-center overflow-hidden rounded-md border border-mt-border bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={row.image || "/placeholder.svg"}
                      alt={row.label}
                      className="size-full object-contain"
                    />
                  </span>
                ) : (
                  <span className="flex size-11 items-center justify-center rounded-full bg-mt-blue/10">
                    <Icon className="size-6 text-mt-blue" aria-hidden="true" />
                  </span>
                )}
                <span className="text-center text-xs font-semibold text-mt-red">
                  {row.label}
                </span>
              </div>
              {/* Feature cells */}
              <div className="grid grid-cols-1 divide-y divide-mt-border/70 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {row.cells.map((cell, ci) => (
                  <div key={ci} className="flex flex-col gap-1 p-3">
                    {cell.label && (
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                        {cell.label}
                      </span>
                    )}
                    {cell.lines.map((line, li) => (
                      <span key={li} className="text-sm leading-snug text-mt-body">
                        {line}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
