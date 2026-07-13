"use client"

import Link from "next/link"
import { Headphones, Clock, ListChecks, Layers, ArrowRight, ExternalLink } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import type { ListeningTestSummary } from "@/lib/listening-practice"

export function ListeningHub({ tests }: { tests: ListeningTestSummary[] }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
      <PageHeader
        title="Listening practice"
        description="Full-length CELPIP Listening tests in the real test interface. Every test is authored at the hardest tier — dense audio, close distractors, and inference-heavy questions built to challenge even strong test-takers."
      />

      <section className="mt-6 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-start gap-3">
          <Headphones className="mt-0.5 size-5 shrink-0 text-primary" />
          <div>
            <h2 className="font-display text-lg font-bold text-card-foreground">
              Hardest-tier full tests
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Each test covers all six listening parts — Problem Solving, Daily Life Conversation,
              Information, News Item, Discussion, and Viewpoints. Audio plays once via realistic
              text-to-speech, so take notes as you go.
            </p>
            <a
              href="https://instructionalproducts.paragontesting.ca/InstructionalProducts/FreeOnlineSampleTest/FOST"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Practice with the official CELPIP sample test
              <ExternalLink className="size-4" />
            </a>
            <p className="mt-2 text-xs text-muted-foreground">
              Opens Paragon Testing&apos;s free online sample test in a new tab.
            </p>
          </div>
        </div>
      </section>

      <h3 className="mb-3 mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        <Layers className="size-4" /> Full-length tests
      </h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tests.map((t, i) => (
          <TestCard key={t.id} test={t} number={i + 1} />
        ))}
      </div>
    </div>
  )
}

function TestCard({ test, number }: { test: ListeningTestSummary; number: number }) {
  return (
    <Link
      href={`/listening-practice/${test.id}`}
      className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-muted"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="flex size-8 items-center justify-center rounded-lg bg-muted text-sm font-bold text-foreground">
          {number}
        </span>
        <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-medium capitalize text-destructive">
          {test.difficulty}
        </span>
      </div>
      <p className="font-display font-semibold leading-snug text-card-foreground text-pretty">
        {test.title}
      </p>
      {test.topic && <p className="text-xs leading-relaxed text-muted-foreground">{test.topic}</p>}
      <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <ListChecks className="size-3.5" />
            {test.questionCount} Q
          </span>
          <span className="flex items-center gap-1">
            <Layers className="size-3.5" />
            {test.partCount} parts
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {test.timeMinutes} min
          </span>
        </span>
        <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}
