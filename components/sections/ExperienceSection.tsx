import Section from "@/components/Section"
import Reveal from "@/components/animations/Reveal"
import { experiences } from "@/lib/content"

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
      command='git log --author="naufal"'
      title="Experience"
      lede="Five roles, three of them still running — each one shipped to people who noticed when it broke."
    >
      <ol>
        {experiences.map((exp, index) => (
          <li key={`${exp.company}-${exp.start}`}>
            <Reveal delay={Math.min(index * 0.04, 0.16)}>
              <article className="group grid grid-cols-12 gap-x-6 gap-y-5 border-t border-rule py-9 lg:py-11">
                <div className="col-span-12 flex gap-3 lg:col-span-3">
                  <span
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-rule-strong transition-colors duration-200 group-hover:bg-phosphor"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="tnum font-mono text-xs text-paper-dim">
                      {exp.start} — {exp.end}
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-label text-paper-faint">
                      {exp.type}
                    </p>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-9">
                  <h3 className="font-mono text-xl text-paper lg:text-2xl">{exp.role}</h3>
                  <p className="mt-1 text-paper-dim">{exp.company}</p>

                  <ul className="mt-5 max-w-3xl space-y-2.5">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-paper-dim"
                      >
                        <span className="select-none font-mono text-phosphor" aria-hidden="true">
                          —
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <li
                        key={tech}
                        className="border border-rule px-2.5 py-1 font-mono text-[11px] text-paper-faint"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
