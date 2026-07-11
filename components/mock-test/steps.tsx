"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { InfoBadge } from "./test-shell"
import { AudioPlayer } from "./audio-player"
import { useTts } from "@/hooks/use-tts"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import type {
  InstructionStep,
  VideoStep,
  AudioStep,
  AudioMcqStep,
  McqStep,
  McqQuestion,
} from "@/lib/mock-test/types"

/* ---------------- Instruction ---------------- */

export function InstructionContent({ step }: { step: InstructionStep }) {
  return (
    <div className="mx-auto max-w-4xl px-8 py-8">
      {step.heading && (
        <div className="mb-6 flex items-center gap-3">
          <InfoBadge variant="info" />
          <h2 className="text-xl font-semibold text-mt-blue">{step.heading}</h2>
        </div>
      )}
      {step.sectionTitle && (
        <h3 className="mb-6 text-xl font-bold text-[#222]">{step.sectionTitle}</h3>
      )}

      {step.paragraphs?.map((p, i) => (
        <p key={i} className="mb-4 text-lg leading-relaxed text-mt-body">
          {p}
        </p>
      ))}

      {step.bullets && step.bullets.length > 0 && (
        <ul className="mt-2">
          {step.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-3 border-b border-dotted border-mt-border py-4"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mt-blue" />
              <span className="text-lg font-medium leading-relaxed text-mt-blue">
                {b}
              </span>
            </li>
          ))}
        </ul>
      )}

      {step.imageSrc && (
        <div className="mt-8 flex justify-center">
          <Image
            src={step.imageSrc || "/placeholder.svg"}
            alt={step.imageAlt ?? ""}
            width={720}
            height={420}
            className="h-auto max-w-full rounded-md"
          />
        </div>
      )}
    </div>
  )
}

/* ---------------- Video ---------------- */

export function VideoContent({ step }: { step: VideoStep }) {
  const { status, play } = useTts([{ text: step.narration }])
  const started = status !== "idle"

  return (
    <div className="mx-auto max-w-4xl px-8 py-8">
      <div className="mb-6 flex items-center gap-3">
        <InfoBadge variant="info" />
        <h2 className="text-xl font-semibold text-mt-blue">{step.heading}</h2>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="relative overflow-hidden rounded-md border border-mt-border bg-white">
          <Image
            src={step.posterSrc || "/placeholder.svg"}
            alt="Instructional video"
            width={960}
            height={540}
            className="h-auto w-full"
          />
          {!started && (
            <button
              type="button"
              onClick={play}
              className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
              aria-label="Play instructional video"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-white/90 text-mt-title shadow-lg">
                <Play className="ml-1 size-8 fill-current" />
              </span>
            </button>
          )}
          <div className="flex items-center gap-3 bg-[#1a1a1a] px-4 py-2 text-white">
            <Play className="size-4 fill-current" />
            <span className="text-xs">
              {started ? "Playing narration…" : "0:00 / 0:41"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Audio only ---------------- */

export function AudioContent({
  step,
  showTranscript,
  onEnded,
}: {
  step: AudioStep
  showTranscript: boolean
  onEnded?: () => void
}) {
  return (
    <div className="mx-auto max-w-4xl px-8 py-10">
      <div className="mb-10 flex items-start gap-3">
        <span className="mt-0.5">
          <InfoBadge variant="bang" />
        </span>
        <h2 className="text-xl font-semibold text-mt-blue">{step.instruction}</h2>
      </div>

      <AudioPlayer lines={step.script} onEnded={onEnded} />

      {showTranscript && step.transcript && (
        <div className="mx-auto mt-8 max-w-2xl rounded-md border border-mt-border bg-white p-5 text-mt-body">
          <p className="mb-2 font-semibold text-[#222]">Transcript</p>
          <p className="whitespace-pre-line leading-relaxed">{step.transcript}</p>
        </div>
      )}
    </div>
  )
}

/* ---------------- MCQ list (shared) ---------------- */

function McqBlock({
  question,
  selectedId,
  onSelect,
  showResult,
}: {
  question: McqQuestion
  selectedId?: string
  onSelect: (optionId: string) => void
  showResult?: boolean
}) {
  return (
    <div>
      {question.prompt && (
        <p className="mb-4 text-lg font-medium text-[#222]">{question.prompt}</p>
      )}
      <div>
        {question.options.map((opt) => {
          const selected = selectedId === opt.id
          const isCorrect = opt.id === question.correctOptionId
          return (
            <label
              key={opt.id}
              className={cn(
                "flex cursor-pointer items-start gap-3 border-b border-mt-border py-3.5 transition-colors",
                !showResult && "hover:bg-black/[0.02]",
                showResult && isCorrect && "bg-emerald-50",
                showResult && selected && !isCorrect && "bg-red-50",
              )}
            >
              <input
                type="radio"
                name={question.id}
                checked={selected ?? false}
                onChange={() => onSelect(opt.id)}
                disabled={showResult}
                className="mt-1 size-4 accent-mt-next"
              />
              <span className="text-lg text-mt-body">{opt.text}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

/* ---------------- Audio + MCQ split ---------------- */

export function AudioMcqContent({
  step,
  selectedId,
  onSelect,
  onAudioEnded,
}: {
  step: AudioMcqStep
  selectedId?: string
  onSelect: (optionId: string) => void
  onAudioEnded: () => void
}) {
  return (
    <div className="grid min-h-full grid-cols-1 md:grid-cols-2">
      {/* Left: audio */}
      <div className="border-mt-border px-8 py-10 md:border-r">
        <div className="mb-8 flex items-start gap-3">
          <span className="mt-0.5">
            <InfoBadge variant="bang" />
          </span>
          <h2 className="text-xl font-semibold text-mt-blue">
            {step.instruction}
          </h2>
        </div>
        <AudioPlayer lines={step.script} onEnded={onAudioEnded} />
      </div>

      {/* Right: question */}
      <div className="bg-mt-panel px-8 py-10">
        <p className="mb-3 text-lg font-medium text-[#333]">Question</p>
        <div className="mb-6 flex items-start gap-3">
          <span className="mt-0.5">
            <InfoBadge variant="bang" />
          </span>
          <h3 className="text-xl font-semibold text-mt-blue">
            Choose the best answer to each question.
          </h3>
        </div>
        <McqBlock
          question={step.question}
          selectedId={selectedId}
          onSelect={onSelect}
        />
      </div>
    </div>
  )
}

/* ---------------- MCQ (text) ---------------- */

export function McqContent({
  step,
  answers,
  onSelect,
}: {
  step: McqStep
  answers: Record<string, string>
  onSelect: (questionId: string, optionId: string) => void
}) {
  return (
    <div className="mx-auto max-w-4xl px-8 py-10">
      <div className="mb-6 flex items-start gap-3">
        <span className="mt-0.5">
          <InfoBadge variant="bang" />
        </span>
        <h2 className="text-xl font-semibold text-mt-blue">{step.instruction}</h2>
      </div>
      {step.passage && (
        <div className="mb-8 whitespace-pre-line rounded-md border border-mt-border bg-white p-5 text-lg leading-relaxed text-mt-body">
          {step.passage}
        </div>
      )}
      <div className="flex flex-col gap-8">
        {step.questions.map((q, i) => (
          <div key={q.id}>
            <p className="mb-3 text-lg font-semibold text-[#222]">
              {i + 1}. {q.prompt}
            </p>
            <McqBlock
              question={q}
              selectedId={answers[q.id]}
              onSelect={(optId) => onSelect(q.id, optId)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
