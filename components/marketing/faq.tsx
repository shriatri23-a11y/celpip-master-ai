import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'What is the CELPIP test?',
    a: 'CELPIP (Canadian English Language Proficiency Index Program) is a computer-based English test accepted by IRCC for permanent residence and citizenship. It measures Listening, Reading, Writing, and Speaking on a scale of levels 1 to 12.',
  },
  {
    q: 'How accurate is the AI scoring?',
    a: 'Our scoring is calibrated against official CELPIP descriptors and provides a level estimate with detailed, criterion-based feedback. It is a powerful practice tool, though only an official test sitting produces an official score.',
  },
  {
    q: 'Which skills can I practice?',
    a: 'All four: Writing and Speaking include instant AI feedback and level estimates, while Listening and Reading offer realistic timed modules with answer explanations.',
  },
  {
    q: 'Do I need to install anything?',
    a: 'No. CELPIP Master AI runs in your browser on any device. Speaking practice uses your device microphone with your permission.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes. You can start practicing for free with no credit card. Upgrade any time for unlimited scoring and full-length mock tests.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            FAQ
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Questions, answered
          </h2>
        </div>

        <Accordion className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger className="py-5 text-base font-semibold text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
