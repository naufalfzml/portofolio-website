import type { ReactNode } from "react"
import Reveal from "@/components/animations/Reveal"

/**
 * Every section is a query against the same person, so each one is labelled
 * with the command that would have produced it. The rail keeps that label out
 * of the content column, which stays left-aligned on a 12-column grid.
 */
export default function Section({
  id,
  command,
  title,
  lede,
  children,
}: {
  id: string
  command: string
  title: string
  lede?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-rule">
      <div className="mx-auto max-w-shell px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-14 grid grid-cols-12 gap-x-6 gap-y-6 lg:mb-20">
          <div className="col-span-12 lg:col-span-3">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-label text-paper-faint">
                <span className="mr-2 text-phosphor">$</span>
                {command}
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <Reveal delay={0.05}>
              <h2 className="font-mono text-3xl tracking-display text-paper lg:text-5xl">
                {title}
              </h2>
            </Reveal>
            {lede && (
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-2xl leading-relaxed text-paper-dim">{lede}</p>
              </Reveal>
            )}
          </div>
        </div>

        {children}
      </div>
    </section>
  )
}
