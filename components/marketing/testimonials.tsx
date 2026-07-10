import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The Writing feedback was scarily accurate. I went from an estimated 8 to a real 10 in three weeks and got my PR points.',
    name: 'Priya Sharma',
    role: 'Registered Nurse · Toronto',
    image: '/testimonials/priya.png',
  },
  {
    quote:
      'Speaking was my weakest skill. Recording answers and hearing exactly what to fix each time made all the difference.',
    name: 'Daniel Alvarez',
    role: 'Software Developer · Calgary',
    image: '/testimonials/daniel.png',
  },
  {
    quote:
      'Having a coach available at midnight when I actually study was a game changer. It felt like a private tutor.',
    name: 'Mei Chen',
    role: 'Accountant · Vancouver',
    image: '/testimonials/mei.png',
  },
]

export function Testimonials() {
  return (
    <section id="results" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Real results
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Newcomers hitting the levels they need
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-card-foreground">
                {`"${t.quote}"`}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.image || '/placeholder.svg'}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
