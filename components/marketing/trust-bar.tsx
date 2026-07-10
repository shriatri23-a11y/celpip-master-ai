const stats = [
  { value: '4.9/5', label: 'Average learner rating' },
  { value: '50+', label: 'Full mock tests' },
  { value: '92%', label: 'Reached their target level' },
  { value: '10k+', label: 'Responses scored' },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:px-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-2xl font-bold text-foreground md:text-3xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
