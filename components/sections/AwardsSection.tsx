import Section from "@/components/Section"
import Reveal from "@/components/animations/Reveal"
import CountUp from "@/components/reactbits/CountUp"
import { awards, awardStats, type AwardKind } from "@/lib/content"

const kindLabel: Record<AwardKind, string> = {
  win: "WIN",
  fund: "FUND",
  acad: "ACAD",
  org: "ORG",
}

export default function AwardsSection() {
  return (
    <Section
      id="awards"
      command="cat awards.log"
      title="Honors & awards"
      lede="Four hackathon wins across global fields, university-backed funding, and faculty recognition."
    >
      <Reveal>
        <div className="mb-16 grid grid-cols-12 gap-x-6 gap-y-10 border-y border-rule-strong py-12">
          <div className="col-span-12 sm:col-span-4">
            {/* Derived from the list below so the count can never drift from it. */}
            <p className="tnum font-mono text-5xl tracking-display text-paper lg:text-7xl">
              <CountUp to={awards.length} duration={1.6} />
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-label text-paper-faint">
              Awards &amp; recognitions
            </p>
          </div>

          <div className="col-span-12 sm:col-span-4">
            <p className="tnum font-mono text-5xl tracking-display text-paper lg:text-7xl">
              <CountUp to={awardStats.hackathonWins} duration={1.6} />
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-label text-paper-faint">
              Hackathon wins
            </p>
          </div>

          <div className="col-span-12 sm:col-span-4">
            <p className="tnum font-mono text-5xl tracking-display text-paper lg:text-7xl">
              $<CountUp to={awardStats.prizeTotal} duration={1.6} />K
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-label text-paper-faint">
              Total prize money
            </p>
          </div>
        </div>
      </Reveal>

      <ol>
        {awards.map((award, index) => (
          <li key={award.title}>
            <Reveal delay={Math.min(index * 0.03, 0.15)}>
              <article className="grid grid-cols-12 gap-x-6 gap-y-2 border-b border-rule py-6">
                <div className="col-span-4 lg:col-span-1">
                  <p className="tnum font-mono text-xs text-paper-faint">{award.year}</p>
                </div>

                <div className="col-span-8 lg:col-span-1">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-label ${
                      award.kind === "win" ? "text-phosphor" : "text-paper-faint"
                    }`}
                  >
                    [{kindLabel[award.kind]}]
                  </span>
                </div>

                <div className="col-span-12 lg:col-span-6">
                  <h3 className="font-mono text-base text-paper">{award.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-paper-dim">{award.detail}</p>
                </div>

                <div className="col-span-6 lg:col-span-2">
                  <p className="font-mono text-xs text-paper-dim">{award.placement}</p>
                </div>

                <div className="col-span-6 lg:col-span-2 lg:text-right">
                  <p
                    className={`tnum font-mono text-sm ${
                      award.prize ? "text-paper" : "text-rule-strong"
                    }`}
                  >
                    {award.prize ?? "—"}
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
