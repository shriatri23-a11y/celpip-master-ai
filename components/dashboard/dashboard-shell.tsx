'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Menu, X, LogOut } from 'lucide-react'
import { Logo } from '@/components/marketing/logo'
import { DashboardNav } from '@/components/dashboard/dashboard-nav'
import { authClient } from '@/lib/auth-client'

type SessionUser = { name: string; email: string }

export function DashboardShell({
  children,
  user,
}: {
  children: React.ReactNode
  user: SessionUser
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-sidebar p-4 md:flex">
        <Link href="/dashboard" className="px-2 py-1">
          <Logo />
        </Link>
        <div className="mt-8 flex-1">
          <DashboardNav />
        </div>
        <UserCard user={user} />
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
            <UserCard user={user} />
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
          <Link href="/dashboard">
            <Logo />
          </Link>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

function UserCard({ user }: { user: SessionUser }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const handleSignOut = async () => {
    setLoading(true)
    await authClient.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <div className="mt-4 rounded-xl border border-border bg-card p-3">
      <div className="flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {initials || 'U'}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-card-foreground">
            {user.name}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {user.email}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={handleSignOut}
        disabled={loading}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-50"
      >
        <LogOut className="size-4" />
        {loading ? 'Signing out…' : 'Sign out'}
      </button>
    </div>
  )
}
