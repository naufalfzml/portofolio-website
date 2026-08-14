"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { COMMAND_NAMES, run, type Line } from "@/lib/terminal"

type Entry = { id: number; line: Line }

const toneClass: Record<string, string> = {
  out: "text-paper",
  dim: "text-paper-dim",
  accent: "text-phosphor",
  err: "text-paper-dim",
  cmd: "text-paper",
}

const SUGGESTIONS = ["help", "projects", "awards", "contact"]

export default function Terminal() {
  const [entries, setEntries] = useState<Entry[]>([])
  const [input, setInput] = useState("")

  const idRef = useRef(0)
  const bootedRef = useRef(false)
  const commandHistory = useRef<string[]>([])
  const historyCursor = useRef(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const reduceMotion = useReducedMotion()

  const push = useCallback((lines: Line[]) => {
    setEntries((prev) => [
      ...prev,
      ...lines.map((line) => ({ id: idRef.current++, line })),
    ])
  }, [])

  // Boot with a real command so the screen is never empty.
  useEffect(() => {
    if (bootedRef.current) return
    bootedRef.current = true

    const intro: Line[] = [{ text: "whoami", tone: "cmd" }, ...run("whoami").lines]

    if (reduceMotion) {
      push(intro)
      return
    }

    let index = 0
    const timer = setInterval(() => {
      push([intro[index]])
      index += 1
      if (index >= intro.length) clearInterval(timer)
    }, 85)

    return () => clearInterval(timer)
  }, [push, reduceMotion])

  useEffect(() => {
    const node = scrollRef.current
    if (node) node.scrollTop = node.scrollHeight
  }, [entries])

  const submit = useCallback(
    (raw: string) => {
      const value = raw.trim()
      push([{ text: value, tone: "cmd" }])
      setInput("")

      if (value) {
        commandHistory.current = [value, ...commandHistory.current].slice(0, 50)
      }
      historyCursor.current = -1

      const result = run(value)

      if (result.clear) {
        setEntries([])
        return
      }

      push(result.lines)

      if (result.scrollTo) {
        document.getElementById(result.scrollTo)?.scrollIntoView({ behavior: "smooth" })
      }
      if (result.open) {
        window.open(result.open, "_blank", "noopener,noreferrer")
      }
    },
    [push]
  )

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault()
      submit(input)
      return
    }

    if (event.key === "Tab") {
      event.preventDefault()
      const match = COMMAND_NAMES.find((name) => name.startsWith(input.trim().toLowerCase()))
      if (match && input.trim()) setInput(match)
      return
    }

    if (event.key === "ArrowUp") {
      event.preventDefault()
      const next = Math.min(historyCursor.current + 1, commandHistory.current.length - 1)
      if (next >= 0) {
        historyCursor.current = next
        setInput(commandHistory.current[next])
      }
      return
    }

    if (event.key === "ArrowDown") {
      event.preventDefault()
      const next = historyCursor.current - 1
      historyCursor.current = Math.max(next, -1)
      setInput(next >= 0 ? commandHistory.current[next] : "")
    }
  }

  return (
    <div
      className="border border-rule bg-ink-sunken"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center justify-between border-b border-rule px-4 py-2.5">
        <span className="font-mono text-[11px] tracking-label text-paper-faint">
          naufal@portfolio:~
        </span>
        <span className="flex items-center gap-2 font-mono text-[11px] tracking-label text-paper-faint">
          <span className="inline-block h-1.5 w-1.5 bg-phosphor" aria-hidden="true" />
          live
        </span>
      </div>

      <div
        ref={scrollRef}
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
        className="h-[300px] overflow-y-auto px-4 py-4 font-mono text-[13px] leading-[1.75] sm:h-[340px]"
      >
        {entries.map(({ id, line }) => {
          if (line.tone === "cmd") {
            return (
              <p key={id} className="text-paper">
                <span className="mr-2 text-phosphor">$</span>
                {line.text}
              </p>
            )
          }

          const content = line.href ? (
            <a
              href={line.href}
              target={line.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="underline decoration-rule-strong underline-offset-4 transition-colors hover:text-phosphor hover:decoration-phosphor"
              onClick={(event) => event.stopPropagation()}
            >
              {line.text}
            </a>
          ) : (
            line.text || " "
          )

          return (
            <p
              key={id}
              className={`whitespace-pre-wrap break-words ${toneClass[line.tone ?? "out"]}`}
            >
              {line.tone === "err" && <span className="mr-2 text-phosphor">!</span>}
              {content}
            </p>
          )
        })}

        <div className="flex items-center">
          <span className="mr-2 font-mono text-[13px] text-phosphor">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Type a command"
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            className="w-full bg-transparent font-mono text-[13px] text-paper caret-phosphor outline-none placeholder:text-paper-faint"
            placeholder="type a command…"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-rule px-4 py-3">
        <span className="font-mono text-[11px] tracking-label text-paper-faint">try</span>
        {SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              submit(suggestion)
              inputRef.current?.focus()
            }}
            className="border border-rule px-2.5 py-1 font-mono text-[11px] text-paper-dim transition-colors hover:border-phosphor hover:text-phosphor"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}
