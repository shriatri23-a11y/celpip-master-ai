"use client"

import { useEffect, useRef } from "react"
import { Play, Pause, Volume2, MoreVertical } from "lucide-react"
import { useTts } from "@/hooks/use-tts"
import type { AudioLine } from "@/lib/mock-test/types"

function fmt(s: number) {
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, "0")}`
}

type AudioPlayerProps = {
  lines: AudioLine[]
  autoPlay?: boolean
  onEnded?: () => void
}

export function AudioPlayer({ lines, autoPlay = true, onEnded }: AudioPlayerProps) {
  const { status, elapsed, duration, play, pause, resume } = useTts(lines)
  const startedRef = useRef(false)
  const endedFiredRef = useRef(false)

  useEffect(() => {
    if (autoPlay && !startedRef.current) {
      startedRef.current = true
      // Small delay so the step is visible before audio begins.
      const t = setTimeout(() => play(), 400)
      return () => clearTimeout(t)
    }
  }, [autoPlay, play])

  useEffect(() => {
    if (status === "ended" && !endedFiredRef.current) {
      endedFiredRef.current = true
      onEnded?.()
    }
  }, [status, onEnded])

  const percent = duration > 0 ? Math.min(100, (elapsed / duration) * 100) : 0
  const isPlaying = status === "playing"

  const toggle = () => {
    if (status === "idle" || status === "ended") play()
    else if (status === "playing") pause()
    else resume()
  }

  return (
    <div className="flex flex-col items-center">
      {/* "Playing..." indicator box */}
      <div className="flex w-full max-w-xl items-center gap-4 rounded-xl bg-[#dcdcdc] p-4">
        <div className="flex size-16 items-center justify-center rounded-lg bg-white text-[#5b5f66] shadow-sm">
          <Volume2 className="size-8" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <p className="mb-2 text-center text-lg font-medium text-[#4a4f57]">
            {status === "ended" ? "Finished" : isPlaying ? "Playing..." : "Paused"}
          </p>
          <div className="h-6 w-full overflow-hidden rounded-sm bg-white">
            <div
              className="h-full bg-mt-progress transition-[width] duration-200 ease-linear"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Native-style playbar (dev aid) */}
      <div className="mt-6 flex items-center gap-3 rounded-full bg-[#f1f1f1] px-4 py-2">
        <button
          type="button"
          onClick={toggle}
          className="text-[#333] transition-opacity hover:opacity-70"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="size-5 fill-current" />
          ) : (
            <Play className="size-5 fill-current" />
          )}
        </button>
        <span className="text-sm tabular-nums text-[#333]">
          {fmt(elapsed)} / {fmt(duration)}
        </span>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-[#333]/25">
          <div
            className="h-full bg-[#333]"
            style={{ width: `${percent}%` }}
          />
        </div>
        <Volume2 className="size-5 text-[#333]" aria-hidden="true" />
        <MoreVertical className="size-5 text-[#333]" aria-hidden="true" />
      </div>

      <div className="mt-4 rounded-sm border-2 border-black px-4 py-2 text-sm text-[#333]">
        This playbar will not appear in the official test
      </div>
    </div>
  )
}
