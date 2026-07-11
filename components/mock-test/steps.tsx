"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { InfoBadge } from "./test-shell"
import { AudioPlayer } from "./audio-player"
import { useTts } from "@/hooks/use-tts"
import { useEffect, useRef, useState } from "react"
import { Mic, Square } from "lucide-react"
import { cn } from "@/lib/utils"
import type {
  InstructionStep,
  VideoStep,
  AudioStep,
  AudioMcqStep,
  McqStep,
  McqQuestion,
  ReadingStep,
  WritingStep,
  SpeakingStep,
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

      <AudioPlayer lines={step.script} src={step.audioSrc} onEnded={onEnded} />

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

export function McqBlock({
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

/* ---------------- Reading (passage + questions split) ---------------- */

export function ReadingContent({
  step,
  answers,
  onSelect,
}: {
  step: ReadingStep
  answers: Record<string, string>
  onSelect: (questionId: string, optionId: string) => void
}) {
  return (
    <div className="grid min-h-full grid-cols-1 md:grid-cols-2">
      {/* Left: passage */}
      <div className="border-mt-border px-8 py-10 md:border-r">
        <div className="mb-6 flex items-start gap-3">
          <span className="mt-0.5">
            <InfoBadge variant="bang" />
          </span>
          <h2 className="text-xl font-semibold text-mt-blue">
            {step.instruction}
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {step.passage.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-mt-body">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Right: questions */}
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
        <div className="flex flex-col gap-8">
          {step.questions.map((q, i) => (
            <div key={q.id}>
              {q.prompt && (
                <p className="mb-3 text-lg font-semibold text-[#222]">
                  {i + 1}. {q.prompt}
                </p>
              )}
              <McqBlock
                question={q}
                selectedId={answers[q.id]}
                onSelect={(optId) => onSelect(q.id, optId)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------------- Writing (timed textarea) ---------------- */

export function WritingContent({
  step,
  value,
  onChange,
}: {
  step: WritingStep
  value: string
  onChange: (text: string) => void
}) {
  const words = value.trim() ? value.trim().split(/\s+/).length : 0
  return (
    <div className="mx-auto grid min-h-full max-w-6xl grid-cols-1 gap-8 px-8 py-10 lg:grid-cols-2">
      <div>
        <div className="mb-6 flex items-start gap-3">
          <span className="mt-0.5">
            <InfoBadge variant="bang" />
          </span>
          <h2 className="text-xl font-semibold text-mt-blue">
            {step.instruction}
          </h2>
        </div>
        <div className="rounded-md border border-mt-border bg-white p-6">
          <p className="mb-4 whitespace-pre-line text-lg leading-relaxed text-mt-body">
            {step.prompt}
          </p>
          {step.requirements && step.requirements.length > 0 && (
            <ul className="mt-2">
              {step.requirements.map((r, i) => (
                <li
                  key={i}
                  className="flex gap-3 border-b border-dotted border-mt-border py-3 last:border-0"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mt-blue" />
                  <span className="leading-relaxed text-mt-blue">{r}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-2 flex items-center justify-between text-sm text-mt-body">
          <span>Write your response below</span>
          <span
            className={cn(
              words < step.minWords ? "text-mt-timer" : "text-emerald-600",
            )}
          >
            {words} words (target {step.minWords}–{step.maxWords})
          </span>
        </div>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-h-[420px] flex-1 resize-none rounded-md border border-mt-border bg-white p-4 text-lg leading-relaxed text-[#222] outline-none focus:border-mt-blue"
          placeholder="Start typing your response…"
        />
      </div>
    </div>
  )
}

/* ---------------- Speaking (prep + record) ---------------- */

function SpeakingWaveform({ active }: { active: boolean }) {
  const bars = 20
  return (
    <div className="flex items-center justify-center gap-[3px] h-8" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "w-[3px] rounded-full transition-all",
            active ? "bg-mt-timer" : "bg-mt-border h-1"
          )}
          style={
            active
              ? {
                  animationName: "mt-speaking-wave",
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                  animationDuration: `${400 + ((i * 137) % 300)}ms`,
                  animationDelay: `${(i * 70) % 500}ms`,
                }
              : undefined
          }
        />
      ))}
    </div>
  )
}

export function SpeakingContent({
  step,
  phase,
  secondsLeft,
  transcript,
  onStart,
}: {
  step: SpeakingStep
  phase: "idle" | "prep" | "speaking" | "done"
  secondsLeft: number | null
  transcript: string
  onStart: () => void
}) {
  return (
    <div className="mx-auto max-w-5xl px-8 py-8">
      <style>{`
        @keyframes mt-speaking-wave {
          0%, 100% { height: 3px; }
          50% { height: 22px; }
        }
      `}</style>

      <div className="mb-5 flex items-start gap-3">
        <span className="mt-0.5">
          <InfoBadge variant="bang" />
        </span>
        <h2 className="text-xl font-semibold text-mt-blue">{step.instruction}</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        {/* Prompt */}
        <div className="rounded-md border border-mt-border bg-white p-6">
          <p className="whitespace-pre-line text-lg leading-relaxed text-mt-body">
            {step.prompt}
          </p>
          {step.requirements && step.requirements.length > 0 && (
            <ul className="mt-4">
              {step.requirements.map((r, i) => (
                <li
                  key={i}
                  className="flex gap-3 border-b border-dotted border-mt-border py-3 last:border-0"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mt-blue" />
                  <span className="leading-relaxed text-mt-blue">{r}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Recorder panel */}
        <div className="flex flex-col rounded-md border border-mt-border bg-mt-panel overflow-hidden">
          <div className="flex flex-col items-center justify-center gap-4 p-6 flex-1">
            {phase === "idle" && (
              <>
                <div className="flex size-14 items-center justify-center rounded-full bg-mt-next/10">
                  <Mic className="size-7 text-mt-next" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-mt-title text-sm">Ready?</p>
                  <p className="text-xs text-mt-body mt-1">
                    {step.prepSeconds}s prep, then {step.speakSeconds}s to speak
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onStart}
                  className="flex items-center gap-2 rounded-full bg-mt-next px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-mt-next-hover"
                >
                  <Mic className="size-4" /> Start preparation
                </button>
              </>
            )}

            {phase === "prep" && (
              <>
                <div className="flex size-14 items-center justify-center rounded-full bg-mt-blue/10">
                  <Mic className="size-7 text-mt-blue" />
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-wide text-mt-body">
                    Preparation
                  </p>
                  <p className="text-4xl font-bold tabular-nums text-mt-title mt-1">
                    {secondsLeft}s
                  </p>
                  <p className="text-xs text-mt-body mt-1">Recording starts automatically.</p>
                </div>
              </>
            )}

            {phase === "speaking" && (
              <>
                <div className="flex flex-col items-center gap-3 w-full">
                  <span className="flex items-center gap-2 rounded-full bg-mt-timer/10 px-3 py-1.5 text-xs font-semibold text-mt-timer">
                    <span className="relative flex size-2.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-mt-timer/60" />
                      <span className="relative inline-flex size-2.5 rounded-full bg-mt-timer" />
                    </span>
                    Recording
                  </span>
                  <p className="text-4xl font-bold tabular-nums text-mt-timer">
                    {secondsLeft}s
                  </p>
                  <SpeakingWaveform active />
                </div>
              </>
            )}

            {phase === "done" && (
              <>
                <div className="flex size-14 items-center justify-center rounded-full bg-emerald-100">
                  <Mic className="size-7 text-emerald-600" />
                </div>
                <p className="text-sm font-semibold text-emerald-600 text-center">
                  Recorded. Click NEXT to continue.
                </p>
              </>
            )}
          </div>

          {/* Transcript area */}
          {(phase === "speaking" || phase === "done") && transcript && (
            <div className="border-t border-mt-border bg-white px-4 py-3">
              <p className="mb-1 text-xs font-semibold text-[#444] uppercase tracking-wide">
                Live transcript
              </p>
              <p className="text-sm leading-relaxed text-mt-body max-h-32 overflow-y-auto">
                {transcript}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
