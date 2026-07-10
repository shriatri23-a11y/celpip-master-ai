import Link from 'next/link'
import { Logo } from '@/components/marketing/logo'
import { ShieldCheck, Sparkles, TrendingUp } from 'lucide-react'

const highlights = [
  {
    icon: Sparkles,
    title: 'Instant AI scoring',
    description: 'Writing and speaking feedback on the CELPIP 1–12 scale.',
  },
  {
    icon: TrendingUp,
    title: 'Track your progress',
    description: 'Every attempt is saved so you can see your level climb.',
  },
  {
    icon: ShieldCheck,
    title: 'Exam-aligned rubrics',
    description: 'Feedback mirrors the four official scoring criteria.',
  },
]

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-svh lg:grid lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden flex-col justify-between bg-primary p-10 text-primary-foreground lg:flex">
        <Link href="/" className="relative z-10">
          <span className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary-foreground/15">
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
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              CELPIP Master AI
            </span>
          </span>
        </Link>

        <div className="relative z-10 space-y-8">
          <h2 className="font-display text-3xl font-bold leading-tight text-balance">
            Your AI-powered path to a higher CELPIP score.
          </h2>
          <ul className="space-y-5">
            {highlights.map((h) => (
              <li key={h.title} className="flex gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15">
                  <h.icon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">{h.title}</p>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 text-sm text-primary-foreground/70">
          Trusted by newcomers preparing for Canadian PR and citizenship.
        </p>
      </div>

      {/* Form panel */}
      <div className="flex min-h-svh flex-col items-center justify-center px-6 py-10">
        <div className="mb-8 lg:hidden">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        {children}
      </div>
    </main>
  )
}
