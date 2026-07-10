"use client"

import { useEffect, useRef, useState } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Send, Sparkles, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/marketing/logo"

const suggestions = [
  "Give me a 2-week study plan for CELPIP.",
  "How is CELPIP Writing scored?",
  "Teach me useful phrases for Speaking Task 1.",
  "What are common mistakes in the Reading section?",
]

export default function CoachPage() {
  const [input, setInput] = useState("")
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/coach" }),
  })

  const scrollRef = useRef<HTMLDivElement>(null)
  const busy = status === "submitted" || status === "streaming"

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, status])

  function submit(text: string) {
    const value = text.trim()
    if (!value || busy) return
    sendMessage({ text: value })
    setInput("")
  }

  return (
    <div className="mx-auto flex h-[calc(100dvh-3.5rem)] max-w-3xl flex-col px-4 md:h-[calc(100dvh-4rem)] md:px-8">
      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto py-6">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Sparkles className="size-7" />
            </span>
            <h1 className="mt-5 font-display text-2xl font-bold text-foreground">
              Meet Maple, your CELPIP coach
            </h1>
            <p className="mt-2 max-w-md text-pretty text-muted-foreground">
              Ask about strategies, scoring, study plans, or request practice prompts and model
              answers. Maple is here around the clock.
            </p>
            <div className="mt-8 grid w-full max-w-lg gap-2 sm:grid-cols-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => submit(s)}
                  className="rounded-xl border border-border bg-card p-3 text-left text-sm text-card-foreground transition-colors hover:border-primary/40 hover:bg-accent/40"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full ${
                    message.role === "user"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {message.role === "user" ? (
                    <span className="text-xs font-semibold">You</span>
                  ) : (
                    <Sparkles className="size-4" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-card-foreground"
                  }`}
                >
                  {message.parts.map((part, i) =>
                    part.type === "text" ? (
                      <p key={i} className="whitespace-pre-wrap">
                        {part.text}
                      </p>
                    ) : null,
                  )}
                </div>
              </div>
            ))}

            {status === "submitted" && (
              <div className="flex gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="size-4" />
                </div>
                <div className="flex items-center rounded-2xl border border-border bg-card px-4 py-3">
                  <Loader2 className="size-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                Something went wrong. Please try again.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Composer */}
      <div className="border-t border-border py-4">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            submit(input)
          }}
          className="flex items-end gap-2 rounded-2xl border border-border bg-card p-2 focus-within:border-primary/40"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                !e.shiftKey &&
                !e.nativeEvent.isComposing &&
                e.keyCode !== 229
              ) {
                e.preventDefault()
                submit(input)
              }
            }}
            rows={1}
            placeholder="Ask Maple anything about CELPIP..."
            className="max-h-40 flex-1 resize-none bg-transparent px-2 py-1.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <Button type="submit" size="icon" disabled={busy || !input.trim()}>
            <Send className="size-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
        <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
          <Logo iconOnly className="size-3.5" />
          Maple can make mistakes. Verify important test details.
        </p>
      </div>
    </div>
  )
}
