import { cn } from '@/lib/utils'

export function Logo({
  className,
  iconOnly = false,
}: {
  className?: string
  iconOnly?: boolean
}) {
  const icon = (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      aria-hidden="true"
    >
      {/* Speech bubble — conversation */}
      <path
        d="M20 11.3c0 3.9-3.8 7-8.5 7-1 0-2-.12-2.9-.35L4 19.5l1.2-3.35C4.1 14.8 3 13.2 3 11.3c0-3.9 3.8-7 8.5-7s8.5 3.1 8.5 7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Ascending bars — score progress */}
      <line
        x1="8.6"
        y1="14"
        x2="8.6"
        y2="11.6"
        className="stroke-emerald-400"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <line
        x1="11.5"
        y1="14"
        x2="11.5"
        y2="9.8"
        className="stroke-emerald-400"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <line
        x1="14.4"
        y1="14"
        x2="14.4"
        y2="7.8"
        className="stroke-emerald-400"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  )

  if (iconOnly) {
    return (
      <span
        className={cn(
          'flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground',
          className,
        )}
      >
        {icon}
      </span>
    )
  }

  return (
    <span className={cn('flex items-center gap-2', className)}>
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        {icon}
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        CELPIP <span className="text-primary">Master</span>
        <span className="text-emerald-500"> AI</span>
      </span>
    </span>
  )
}
