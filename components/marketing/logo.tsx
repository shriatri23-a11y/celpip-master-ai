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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Rising trend arrow — progress / improvement */}
      <path
        d="M7 13.4 10.2 10.2 12.6 12.4 16.4 8.4"
        fill="none"
        className="stroke-emerald-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4 8.4 16.4 8.4 16.4 11.4"
        fill="none"
        className="stroke-emerald-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        CELPIP Master<span className="text-primary"> AI</span>
      </span>
    </span>
  )
}
