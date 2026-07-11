"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import type { AudioLine } from "@/lib/mock-test/types"

type TtsStatus = "idle" | "playing" | "paused" | "ended"

// Roughly estimate spoken duration so we can animate a progress bar even when
// the browser does not fire reliable boundary events.
function estimateSeconds(lines: AudioLine[]) {
  const words = lines.reduce((n, l) => n + l.text.trim().split(/\s+/).length, 0)
  return Math.max(3, Math.round(words / 2.6)) // ~2.6 words/sec
}

export function useTts(lines: AudioLine[]) {
  const [status, setStatus] = useState<TtsStatus>("idle")
  const [elapsed, setElapsed] = useState(0)
  const durationRef = useRef(estimateSeconds(lines))
  const [duration, setDuration] = useState(durationRef.current)
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const voicesRef = useRef<SpeechSynthesisVoice[]>([])
  const supported =
    typeof window !== "undefined" && "speechSynthesis" in window

  useEffect(() => {
    durationRef.current = estimateSeconds(lines)
    setDuration(durationRef.current)
  }, [lines])

  useEffect(() => {
    if (!supported) return
    const load = () => {
      const all = window.speechSynthesis.getVoices()
      voicesRef.current = all.filter((v) => v.lang.startsWith("en"))
    }
    load()
    window.speechSynthesis.onvoiceschanged = load
    return () => {
      window.speechSynthesis.onvoiceschanged = null
      window.speechSynthesis.cancel()
      if (tickRef.current) clearInterval(tickRef.current)
    }
  }, [supported])

  const stopTick = useCallback(() => {
    if (tickRef.current) {
      clearInterval(tickRef.current)
      tickRef.current = null
    }
  }, [])

  const startTick = useCallback(() => {
    stopTick()
    tickRef.current = setInterval(() => {
      setElapsed((e) => Math.min(durationRef.current - 0.4, e + 0.2))
    }, 200)
  }, [stopTick])

  const play = useCallback(() => {
    if (!supported) {
      // Graceful fallback: simulate playback with the estimated duration.
      setStatus("playing")
      setElapsed(0)
      startTick()
      window.setTimeout(
        () => {
          stopTick()
          setElapsed(durationRef.current)
          setStatus("ended")
        },
        durationRef.current * 1000,
      )
      return
    }

    window.speechSynthesis.cancel()
    setElapsed(0)
    setStatus("playing")
    startTick()

    const voices = voicesRef.current
    const speakerVoice = new Map<string, SpeechSynthesisVoice | undefined>()
    let voiceIdx = 0

    lines.forEach((line, i) => {
      const u = new SpeechSynthesisUtterance(line.text)
      u.rate = 0.98
      u.pitch = 1
      if (voices.length) {
        const key = line.speaker ?? "narrator"
        if (!speakerVoice.has(key)) {
          speakerVoice.set(key, voices[voiceIdx % voices.length])
          voiceIdx++
        }
        u.voice = speakerVoice.get(key) ?? voices[0]
      }
      if (i === lines.length - 1) {
        u.onend = () => {
          stopTick()
          setElapsed(durationRef.current)
          setStatus("ended")
        }
      }
      window.speechSynthesis.speak(u)
    })
  }, [lines, startTick, stopTick, supported])

  const pause = useCallback(() => {
    if (supported) window.speechSynthesis.pause()
    stopTick()
    setStatus("paused")
  }, [stopTick, supported])

  const resume = useCallback(() => {
    if (supported) window.speechSynthesis.resume()
    startTick()
    setStatus("playing")
  }, [startTick, supported])

  const reset = useCallback(() => {
    if (supported) window.speechSynthesis.cancel()
    stopTick()
    setElapsed(0)
    setStatus("idle")
  }, [stopTick, supported])

  return { status, elapsed, duration, play, pause, resume, reset, supported }
}
