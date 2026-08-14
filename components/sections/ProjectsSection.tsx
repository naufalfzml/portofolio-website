import Image from "next/image"
import Section from "@/components/Section"
import Reveal from "@/components/animations/Reveal"
import { projects, type Project } from "@/lib/content"

const featured = projects.filter((project) => project.featured)

/** Honest stand-in until a real screenshot exists, rather than a stock placeholder. */
function NoPreview({ title }: { title: string }) {
  return (
    <div className="flex aspect-video flex-col items-center justify-center border border-dashed border-rule bg-ink-raised">
      <p className="font-mono text-2xl uppercase tracking-display text-rule-strong lg:text-4xl">
        {title}
      </p>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-label text-paper-faint">
        no preview yet
      </p>
    </div>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.website && !project.github) {
    return <p className="font-mono text-[11px] text-paper-faint">No public link yet</p>
  }

  return (
    <div className="flex flex-wrap gap-6">
      {project.website && (
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link font-mono text-[13px] text-paper transition-colors hover:text-phosphor"
        >
          Visit site
          <span className="ml-1.5 inline-block transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
            ↗
          </span>
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link font-mono text-[13px] text-paper-dim transition-colors hover:text-phosphor"
        >
          Source
          <span className="ml-1.5 inline-block transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
            ↗
          </span>
        </a>
      )}
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      command="ls ./projects"
      title="Projects"
      lede="Three worth your time first, then everything else in one table. Sixteen in total."
    >
      <div className="mb-20">
        {featured.map((project, index) => (
          <Reveal key={project.slug} delay={Math.min(index * 0.05, 0.15)}>
            <article className="group grid grid-cols-12 gap-x-6 gap-y-6 border-t border-rule py-10 lg:py-14">
              <div className="col-span-12 lg:col-span-7">
                <div className="relative overflow-hidden border border-rule">
                  {project.image ? (
                    <div className="relative aspect-video">
                      <Image
                        src={project.image}
                        alt={`${project.title} interface`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  ) : (
                    <NoPreview title={project.title} />
                  )}
                </div>
              </div>

              <div className="col-span-12 lg:col-span-5">
                <p className="font-mono text-[11px] uppercase tracking-label text-paper-faint">
                  {project.kind} <span className="mx-1">·</span> {project.year}
                </p>

                <h3 className="mt-3 font-mono text-2xl tracking-display text-paper lg:text-4xl">
                  {project.title}
                </h3>

                {project.note && (
                  <p className="mt-3 font-mono text-xs text-phosphor">{project.note}</p>
                )}

                <p className="mt-5 leading-relaxed text-paper-dim">{project.description}</p>

                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border border-rule px-2.5 py-1 font-mono text-[11px] text-paper-faint"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mb-6 font-mono text-[11px] uppercase tracking-label text-paper-faint">
          All projects
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-y border-rule-strong font-mono text-[10px] uppercase tracking-label text-paper-faint">
                <th scope="col" className="w-16 py-3 pr-4 font-normal">
                  #
                </th>
                <th scope="col" className="py-3 pr-4 font-normal">
                  Project
                </th>
                <th scope="col" className="py-3 pr-4 font-normal">
                  Type
                </th>
                <th scope="col" className="py-3 pr-4 font-normal">
                  Stack
                </th>
                <th scope="col" className="w-20 py-3 pr-4 font-normal">
                  Year
                </th>
                <th scope="col" className="w-28 py-3 text-right font-normal">
                  Links
                </th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={project.slug}
                  className="border-b border-rule transition-colors hover:bg-ink-raised"
                >
                  <td className="tnum py-4 pr-4 font-mono text-xs text-paper-faint">
                    {String(index + 1).padStart(3, "0")}
                  </td>
                  <td className="py-4 pr-4 font-mono text-sm text-paper">{project.title}</td>
                  <td className="py-4 pr-4 font-mono text-xs text-paper-dim">{project.kind}</td>
                  <td className="py-4 pr-4 font-mono text-xs text-paper-faint">
                    {project.stack.slice(0, 3).join(" · ")}
                  </td>
                  <td className="tnum py-4 pr-4 font-mono text-xs text-paper-dim">
                    {project.year}
                  </td>
                  <td className="py-4 text-right font-mono text-xs">
                    <div className="flex justify-end gap-3">
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-paper-dim transition-colors hover:text-phosphor"
                        >
                          site ↗
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-paper-dim transition-colors hover:text-phosphor"
                        >
                          code ↗
                        </a>
                      )}
                      {!project.website && !project.github && (
                        <span className="text-rule-strong">—</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  )
}
