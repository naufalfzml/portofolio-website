import Section from "@/components/Section"
import Reveal from "@/components/animations/Reveal"
import { stack } from "@/lib/content"

export default function SkillsSection() {
  return (
    <Section
      id="stack"
      command="ls -R ~/stack"
      title="Stack"
      lede="Everything here has shipped to production or to a hackathon deadline. Nothing on this list is from a tutorial."
    >
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        {stack.map((group, index) => (
          <div key={group.dir} className="col-span-12 sm:col-span-6 lg:col-span-3">
            <Reveal delay={Math.min(index * 0.03, 0.15)}>
              <p className="font-mono text-sm text-paper">
                <span className="mr-2 text-phosphor" aria-hidden="true">
                  ▸
                </span>
                {group.dir}/
              </p>

              <ul className="mt-4 space-y-1.5">
                {group.items.map((item, itemIndex) => (
                  <li key={item} className="font-mono text-[13px] text-paper-dim">
                    <span className="mr-1 text-rule-strong" aria-hidden="true">
                      {itemIndex === group.items.length - 1 ? "└──" : "├──"}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  )
}
