const steps = [
  {
    number: '01',
    title: 'Take a diagnostic',
    description:
      'Complete a short assessment across all four skills so we can estimate your current CELPIP level.',
  },
  {
    number: '02',
    title: 'Practice with instant feedback',
    description:
      'Attempt real Writing and Speaking tasks. The AI scores each response and shows exactly what to improve.',
  },
  {
    number: '03',
    title: 'Follow your coach plan',
    description:
      'Your AI coach turns feedback into a focused study plan and adapts it as your scores climb.',
  },
  {
    number: '04',
    title: 'Walk in test-ready',
    description:
      'Simulate full-length mock tests under real timing until hitting your target level feels routine.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-y border-border bg-card/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            From first attempt to test-ready in four steps
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-border bg-background p-6"
            >
              <span className="font-display text-4xl font-bold text-primary/25">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
