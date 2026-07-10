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
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 4 7v5c0 4.5 3.2 7.7 8 9 4.8-1.3 8-4.5 8-9V7l-8-4Z" />
      <path d="m9 12 2 2 4-4" />
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
