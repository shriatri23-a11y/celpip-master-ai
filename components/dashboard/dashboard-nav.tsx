'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  PenLine,
  Mic,
  MessagesSquare,
  BookOpen,
  Headphones,
  History,
  ClipboardList,
  ExternalLink,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/mock-tests', label: 'Mock Tests', icon: ClipboardList },
  { href: '/dashboard/writing', label: 'Writing', icon: PenLine },
  { href: '/dashboard/speaking', label: 'Speaking', icon: Mic },
  { href: '/dashboard/reading', label: 'Reading', icon: BookOpen },
  { href: '/dashboard/listening', label: 'Listening', icon: Headphones },
  { href: '/dashboard/coach', label: 'AI Coach', icon: MessagesSquare },
  { href: '/dashboard/history', label: 'History', icon: History },
]

const soonItems: { label: string; icon: typeof BookOpen }[] = []

export function DashboardNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-1">
      <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Practice
      </p>
      {navItems.map((item) => {
        const active =
          item.href === '/dashboard'
            ? pathname === '/dashboard'
            : pathname.startsWith(item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              active
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            )}
          >
            <item.icon className="size-4" />
            {item.label}
          </Link>
        )
      })}

      <a
        href="https://instructionalproducts.paragontesting.ca/InstructionalProducts/FreeOnlineSampleTest/FOST"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <ExternalLink className="size-4" />
        Official Sample Test
      </a>

      {soonItems.length > 0 && (
        <p className="px-3 pb-2 pt-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Coming soon
        </p>
      )}
      {soonItems.map((item) => (
        <span
          key={item.label}
          className="flex cursor-not-allowed items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground/50"
        >
          <item.icon className="size-4" />
          {item.label}
          <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
            Soon
          </span>
        </span>
      ))}
    </nav>
  )
}
