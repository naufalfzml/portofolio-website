import Section from "@/components/Section"
import Reveal from "@/components/animations/Reveal"
import { contact, profile } from "@/lib/content"

const channels = [
  { key: "email", value: contact.email, href: `mailto:${contact.email}` },
  { key: "github", value: contact.github.handle, href: contact.github.url },
  { key: "linkedin", value: contact.linkedin.handle, href: contact.linkedin.url },
]

export default function ContactSection() {
  return (
    <Section
      id="contact"
      command="./contact.sh"
      title="Get in touch"
      lede="Open to internships, freelance builds, and hackathon teams. The fastest route is email — I read everything."
    >
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 lg:col-span-8">
          <ul>
            {channels.map((channel, index) => (
              <li key={channel.key}>
                <Reveal delay={Math.min(index * 0.05, 0.15)}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-6 border-t border-rule py-6 transition-colors hover:bg-ink-raised"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-label text-paper-faint">
                      {channel.key}
                    </span>
                    <span className="flex items-baseline gap-3 font-mono text-base text-paper transition-colors group-hover:text-phosphor lg:text-xl">
                      {channel.value}
                      <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={0.15}>
            <div className="flex items-baseline justify-between gap-6 border-y border-rule py-6">
              <span className="font-mono text-[10px] uppercase tracking-label text-paper-faint">
                location
              </span>
              <span className="font-mono text-base text-paper-dim lg:text-xl">
                {profile.location}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-3 lg:col-start-10">
          <Reveal delay={0.1}>
            <p className="font-mono text-[13px] leading-relaxed text-paper-dim">
              <span className="mr-2 text-phosphor">$</span>
              You can also just type{" "}
              <span className="text-paper">contact</span> into the terminal at the top of this page.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8">
        <p className="font-mono text-[11px] tracking-label text-paper-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-[11px] tracking-label text-paper-faint">
          Built with Next.js, Tailwind, and too much coffee
        </p>
      </div>
    </Section>
  )
}
