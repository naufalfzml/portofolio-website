import Section from "@/components/Section"
import Reveal from "@/components/animations/Reveal"
import { education, profile } from "@/lib/content"

const facts = [
  { key: "location", value: profile.location },
  { key: "education", value: "UNS — Informatics" },
  { key: "focus", value: "ERP · internal tools · smart contracts" },
  { key: "languages", value: "Indonesian · English" },
  { key: "status", value: profile.available ? "Open to work" : "Not looking" },
]

export default function AboutSection() {
  return (
    <Section id="about" command="cat about.md" title="About">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 lg:col-span-7">
          <Reveal>
            <p className="text-lg leading-relaxed text-paper lg:text-xl">
              I build the software a business actually runs on. Right now that means a hospital
              information system handling medical records and insurance configuration, and an ERP
              that replaced the spreadsheet sprawl six departments were maintaining by hand.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-6 leading-relaxed text-paper-dim">
              The other half of my work is on-chain. Over the past two years I have shipped
              perpetual trading, stablecoin, and prediction-market protocols in hackathons against
              global fields — four of them ended in wins. Different domain, same instinct: read the
              constraints carefully, then build the smallest thing that genuinely holds.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-paper-dim">
              I am an Informatics student at Universitas Sebelas Maret, where I also spent a year
              teaching data structures and algorithms to 40+ students. Explaining a red-black tree
              to someone who has never seen one is still the best debugging practice I know.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.1}>
            <dl className="font-mono text-[13px]">
              {facts.map((fact) => (
                <div
                  key={fact.key}
                  className="flex items-baseline justify-between gap-4 border-b border-rule py-3"
                >
                  <dt className="text-[10px] uppercase tracking-label text-paper-faint">
                    {fact.key}
                  </dt>
                  <dd className="text-right text-paper-dim">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 border-t border-rule pt-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-label text-paper-faint">
            Education
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-12 gap-x-6 gap-y-6">
          <div className="col-span-12 lg:col-span-3">
            <Reveal>
              <p className="tnum font-mono text-xs text-paper-faint">
                {education.start} — {education.end}
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <Reveal delay={0.05}>
              <h3 className="font-mono text-xl text-paper lg:text-2xl">{education.institution}</h3>
              <p className="mt-1 text-paper-dim">{education.degree}</p>
              <p className="mt-1 font-mono text-xs text-paper-faint">{education.location}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {education.coursework.map((course) => (
                  <li
                    key={course}
                    className="border border-rule px-2.5 py-1 font-mono text-[11px] text-paper-faint"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  )
}
