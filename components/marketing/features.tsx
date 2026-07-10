import {
  PenLine,
  Mic,
  Headphones,
  BookOpen,
  MessagesSquare,
  Trophy,
} from 'lucide-react'

const features = [
  {
    icon: PenLine,
    title: 'AI Writing scoring',
    description:
      'Submit your email or survey response and get a level estimate with criterion-by-criterion feedback and inline suggestions.',
    accent: true,
  },
  {
    icon: Mic,
    title: 'AI Speaking examiner',
    description:
      'Record answers to real speaking tasks. The AI transcribes, evaluates fluency and vocabulary, and shows you what to fix.',
    accent: true,
  },
  {
    icon: MessagesSquare,
    title: 'Personal AI coach',
    description:
      'Chat 24/7 with a coach that knows the CELPIP format, builds study plans, and answers your grammar questions.',
    accent: true,
  },
  {
    icon: Headphones,
    title: 'Listening practice',
    description:
      'Realistic audio scenarios with timed question sets that mirror the real test experience.',
  },
  {
    icon: BookOpen,
    title: 'Reading modules',
    description:
      'Correspondence, diagrams, and viewpoint passages with instant answer explanations.',
  },
  {
    icon: Trophy,
    title: 'Progress & streaks',
    description:
      'Track your level over time, keep daily streaks, and earn badges that keep you motivated.',
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Everything in one place
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A complete CELPIP prep platform, powered by AI
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Train every skill the test measures and know exactly where you
            stand before test day.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-foreground/5"
            >
              <div
                className={`flex size-11 items-center justify-center rounded-xl ${
                  f.accent
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground'
                }`}
              >
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-card-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
