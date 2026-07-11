"use client"

import { useEffect, useRef, useState } from "react"
import { AlertCircle, Pause, Play, Volume2 } from "lucide-react"
import { useTts } from "@/hooks/use-tts"
import type { AudioLine } from "@/lib/mock-test/types"

function fmt(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainder = Math.floor(seconds % 60)
  return `${minutes}:${remainder.toString().padStart(2, "0")}`
}

type AudioPlayerProps = {
  lines: AudioLine[]
  src?: string
  autoPlay?: boolean
  onEnded?: () => void
}

export function AudioPlayer({
  lines,
  src,
  autoPlay = true,
  onEnded,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const endedFiredRef = useRef(false)
  const tts = useTts(lines)
  const [fileState, setFileState] = useState<"loading" | "ready" | "playing" | "paused" | "ended" | "error">(
    src ? "loading" : "ready",
  )
  const [elapsed, setElapsed] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (!src || !autoPlay) return
    const timer = window.setTimeout(() => {
      audioRef.current?.play().catch(() => setFileState("paused"))
    }, 400)
    return () => window.clearTimeout(timer)
  }, [src, autoPlay])

  useEffect(() => {
    const ended = src ? fileState === "ended" : tts.status === "ended"
    if (ended && !endedFiredRef.current) {
      endedFiredRef.current = true
      onEnded?.()
    }
  }, [fileState, onEnded, src, tts.status])

  const status = src ? fileState : tts.status
  const currentTime = src ? elapsed : tts.elapsed
  const totalTime = src ? duration : tts.duration
  const percent = totalTime > 0 ? Math.min(100, (currentTime / totalTime) * 100) : 0
  const isPlaying = status === "playing"

  function toggle() {
    if (!src) {
      if (tts.status === "idle" || tts.status === "ended") tts.play()
      else if (tts.status === "playing") tts.pause()
      else tts.resume()
      return
    }

    const audio = audioRef.current
    if (!audio) return
    if (audio.ended) audio.currentTime = 0
    if (audio.paused) audio.play().catch(() => setFileState("error"))
    else audio.pause()
  }

  return (
    <div className="flex flex-col items-center">
      {src && (
        <audio
          ref={audioRef}
          src={src}
          preload="auto"
          onCanPlay={() => setFileState("ready")}
          onPlay={() => setFileState("playing")}
          onPause={() => !audioRef.current?.ended && setFileState("paused")}
          onTimeUpdate={(event) => setElapsed(event.currentTarget.currentTime)}
          onDurationChange={(event) => setDuration(event.currentTarget.duration || 0)}
          onEnded={() => setFileState("ended")}
          onError={() => setFileState("error")}
        />
      )}

      <div className="flex w-full max-w-xl items-center gap-4 rounded-xl bg-[#dcdcdc] p-4">
        <div className="flex size-16 items-center justify-center rounded-lg bg-white text-[#5b5f66] shadow-sm">
          {status === "error" ? <AlertCircle className="size-8" /> : <Volume2 className="size-8" />}
        </div>
        <div className="flex-1">
          <p className="mb-2 text-center text-lg font-medium text-[#4a4f57]" aria-live="polite">
            {status === "error"
              ? "Audio unavailable"
              : status === "loading"
                ? "Loading clear audio…"
                : status === "ended"
                  ? "Finished"
                  : isPlaying
                    ? "Playing…"
                    : "Ready"}
          </p>
          <div className="h-6 w-full overflow-hidden rounded-sm bg-white">
            <div className="h-full bg-mt-progress transition-[width] duration-200" style={{ width: `${percent}%` }} />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-full bg-[#f1f1f1] px-4 py-2">
        <button type="button" onClick={toggle} disabled={status === "loading" || status === "error"} className="text-[#333] disabled:opacity-40" aria-label={isPlaying ? "Pause audio" : "Play audio"}>
          {isPlaying ? <Pause className="size-5 fill-current" /> : <Play className="size-5 fill-current" />}
        </button>
        <span className="text-sm tabular-nums text-[#333]">{fmt(currentTime)} / {fmt(totalTime)}</span>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-[#333]/25">
          <div className="h-full bg-[#333]" style={{ width: `${percent}%` }} />
        </div>
        <Volume2 className="size-5 text-[#333]" aria-hidden="true" />
      </div>
      <p className="mt-3 text-xs text-[#5b5f66]">Audio plays once automatically. Check your volume before beginning.</p>
    </div>
  )
}
