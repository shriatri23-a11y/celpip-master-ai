"use client"

import { useCallback, useEffect, useRef, useState } from "react"

// Minimal typings for the Web Speech API (not in standard lib DOM types).
type SpeechRecognitionResultLike = {
  0: { transcript: string }
  isFinal: boolean
}
type SpeechRecognitionEventLike = {
  resultIndex: number
  results: { length: number } & Record<number, SpeechRecognitionResultLike>
}
type SpeechRecognitionLike = {
  lang: string
  continuous: boolean
  interimResults: boolean
  start: () => void
  stop: () => void
  onresult: ((event: SpeechRecognitionEventLike) => void) | null
  onerror: ((event: { error: string }) => void) | null
  onend: (() => void) | null
}

export function useSpeechRecognition() {
  const [supported, setSupported] = useState(false)
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [interim, setInterim] = useState("")
  const [error, setError] = useState<string | null>(null)

  const recognitionRef = useRef<SpeechRecognitionLike | null>(null)
  const finalRef = useRef("")
  const wantListeningRef = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const Ctor =
      (window as unknown as { SpeechRecognition?: unknown }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: unknown }).webkitSpeechRecognition
    setSupported(Boolean(Ctor))
  }, [])

  const start = useCallback(() => {
    if (typeof window === "undefined") return
    const Ctor =
      (window as unknown as { SpeechRecognition?: new () => SpeechRecognitionLike })
        .SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: new () => SpeechRecognitionLike })
        .webkitSpeechRecognition
    if (!Ctor) {
      setError("Speech recognition is not supported in this browser. Try Chrome or Edge.")
      return
    }

    setError(null)
    finalRef.current = ""
    setTranscript("")
    setInterim("")

    const recognition = new Ctor()
    recognition.lang = "en-CA"
    recognition.continuous = true
    recognition.interimResults = true

    recognition.onresult = (event) => {
      let interimText = ""
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i]
        if (result.isFinal) {
          finalRef.current += result[0].transcript
        } else {
          interimText += result[0].transcript
        }
      }
      setTranscript(finalRef.current)
      setInterim(interimText)
    }

    recognition.onerror = (event) => {
      if (event.error !== "no-speech" && event.error !== "aborted") {
        setError(`Microphone error: ${event.error}`)
      }
    }

    recognition.onend = () => {
      // Chrome auto-stops after silence; restart while the user is still recording.
      if (wantListeningRef.current) {
        try {
          recognition.start()
        } catch {
          setListening(false)
        }
      } else {
        setListening(false)
      }
    }

    recognitionRef.current = recognition
    wantListeningRef.current = true
    recognition.start()
    setListening(true)
  }, [])

  const stop = useCallback(() => {
    wantListeningRef.current = false
    recognitionRef.current?.stop()
    setListening(false)
    setInterim("")
  }, [])

  const reset = useCallback(() => {
    finalRef.current = ""
    setTranscript("")
    setInterim("")
    setError(null)
  }, [])

  useEffect(() => {
    return () => {
      wantListeningRef.current = false
      recognitionRef.current?.stop()
    }
  }, [])

  return { supported, listening, transcript, interim, error, start, stop, reset }
}
