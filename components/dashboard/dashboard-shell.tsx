'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Flame } from 'lucide-react'
import { Logo } from '@/components/marketing/logo'
import { DashboardNav } from '@/components/dashboard/dashboard-nav'

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-sidebar p-4 md:flex">
        <Link href="/" className="px-2 py-1">
          <Logo />
        </Link>
        <div className="mt-8 flex-1">
          <DashboardNav />
        </div>
        <StreakCard />
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute left-0 top-0 flex h-full w-72 flex-col border-r border-border bg-sidebar p-4">
            <div className="flex items-center justify-between px-2 py-1">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-foreground"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="mt-8 flex-1">
              <DashboardNav onNavigate={() => setOpen(false)} />
            </div>
            <StreakCard />
          </aside>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-foreground"
          >
            <Menu className="size-5" />
          </button>
          <Logo />
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

function StreakCard() {
  return (
    <div className="mt-4 rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2">
        <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Flame className="size-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-card-foreground">
            7-day streak
          </p>
          <p className="text-xs text-muted-foreground">Keep it going!</p>
        </div>
      </div>
    </div>
  )
}
