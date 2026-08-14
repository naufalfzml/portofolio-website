import {
  awards,
  awardStats,
  contact,
  education,
  experiences,
  profile,
  projects,
  sections,
  stack,
} from "./content"

export type Tone = "out" | "dim" | "accent" | "cmd" | "err"

export type Line = { text: string; tone?: Tone; href?: string }

export type CommandResult = {
  lines: Line[]
  clear?: boolean
  scrollTo?: string
  open?: string
}

const out = (text: string): Line => ({ text, tone: "out" })
const dim = (text: string): Line => ({ text, tone: "dim" })
const accent = (text: string): Line => ({ text, tone: "accent" })
const err = (text: string): Line => ({ text, tone: "err" })
const blank = (): Line => ({ text: "", tone: "dim" })

/** Two aligned columns. Monospace does the rest. */
const row = (left: string, right: string, width = 18) =>
  out(`${left.padEnd(width)}${right}`)

export const COMMANDS: { name: string; summary: string }[] = [
  { name: "whoami", summary: "who you are talking to" },
  { name: "about", summary: "the short version" },
  { name: "experience", summary: "where I have worked" },
  { name: "stack", summary: "what I build with" },
  { name: "projects", summary: "what I have shipped" },
  { name: "awards", summary: "hackathons and recognition" },
  { name: "contact", summary: "how to reach me" },
  { name: "open <name>", summary: "jump to a section or open a project" },
  { name: "clear", summary: "clear the screen" },
]

function helpLines(): Line[] {
  return [
    dim("Available commands:"),
    blank(),
    ...COMMANDS.map((c) => row(`  ${c.name}`, c.summary, 20)),
    blank(),
    dim("Tip: press Tab to complete, ↑/↓ for history."),
  ]
}

function whoamiLines(): Line[] {
  return [
    accent(profile.name),
    out(`${profile.role} — ${profile.location}`),
    blank(),
    out(profile.summary),
    dim(
      `${awardStats.hackathonWins} hackathon wins · USD ${awardStats.prizeTotal}K in prizes · ${experiences.length} roles shipped`
    ),
    blank(),
    dim("Type `help` to see what else this thing does."),
  ]
}

function aboutLines(): Line[] {
  return [
    out(profile.summary),
    blank(),
    row("  location", profile.location),
    row("  education", `${education.institution} — Informatics`),
    row("  focus", "ERP · internal tools · smart contracts"),
    row("  status", profile.available ? "open to work" : "not looking right now"),
  ]
}

function experienceLines(): Line[] {
  return experiences.flatMap((exp) => [
    out(`${`${exp.start}–${exp.end}`.padEnd(20)}${exp.role}`),
    dim(`${"".padEnd(20)}${exp.company} · ${exp.type}`),
    dim(`${"".padEnd(20)}${exp.stack.join(" · ")}`),
    blank(),
  ])
}

function stackLines(): Line[] {
  return [
    accent("~/stack"),
    ...stack.flatMap((group, groupIndex) => {
      const lastGroup = groupIndex === stack.length - 1
      const groupBranch = lastGroup ? "└──" : "├──"
      const groupPipe = lastGroup ? "   " : "│  "

      return [
        out(`${groupBranch} ${group.dir}/`),
        ...group.items.map((item, itemIndex) =>
          dim(
            `${groupPipe} ${itemIndex === group.items.length - 1 ? "└──" : "├──"} ${item}`
          )
        ),
      ]
    }),
  ]
}

function projectLines(): Line[] {
  const shown = projects.slice(0, 8)

  return [
    ...shown.map((p) =>
      out(`${p.slug.padEnd(24)}${p.kind.padEnd(18)}${p.year}`)
    ),
    blank(),
    dim(
      `${projects.length} projects total. Try \`open tethra\`, or scroll to the projects section.`
    ),
  ]
}

function awardLines(): Line[] {
  return [
    ...awards.map((a) =>
      out(
        `${a.year.padEnd(6)}${a.title.slice(0, 38).padEnd(40)}${(a.prize ?? "—").padStart(12)}`
      )
    ),
    blank(),
    accent(
      `Total: USD ${awardStats.prizeTotal}K across ${awardStats.hackathonWins} hackathon wins.`
    ),
  ]
}

function contactLines(): Line[] {
  return [
    { text: `  email      ${contact.email}`, tone: "out", href: `mailto:${contact.email}` },
    { text: `  github     ${contact.github.handle}`, tone: "out", href: contact.github.url },
    { text: `  linkedin   ${contact.linkedin.handle}`, tone: "out", href: contact.linkedin.url },
    blank(),
    dim("Open to internships, freelance work, and hackathon teams."),
  ]
}

function openTarget(arg: string): CommandResult {
  const target = arg.trim().toLowerCase()

  if (!target) {
    return { lines: [err("open: needs a name. Try `open projects` or `open tethra`.")] }
  }

  const section = sections.find((s) => s.id === target || s.label === target)
  if (section) {
    return { lines: [dim(`Jumping to ${section.label}…`)], scrollTo: section.id }
  }

  const project = projects.find((p) => p.slug === target || p.title.toLowerCase() === target)
  if (project) {
    const url = project.website || project.github
    if (!url) {
      return {
        lines: [dim(`${project.title} has no public link yet. It is in the projects section.`)],
        scrollTo: "projects",
      }
    }
    return { lines: [dim(`Opening ${url}`)], open: url }
  }

  return { lines: [err(`open: no section or project called "${target}".`)] }
}

export function run(raw: string): CommandResult {
  const input = raw.trim()
  if (!input) return { lines: [] }

  const [command, ...rest] = input.split(/\s+/)
  const arg = rest.join(" ")

  switch (command.toLowerCase()) {
    case "help":
    case "?":
      return { lines: helpLines() }
    case "whoami":
      return { lines: whoamiLines() }
    case "about":
      return { lines: aboutLines() }
    case "experience":
    case "work":
      return { lines: experienceLines() }
    case "stack":
    case "skills":
      return { lines: stackLines() }
    case "projects":
    case "ls":
      return { lines: projectLines() }
    case "awards":
      return { lines: awardLines() }
    case "contact":
      return { lines: contactLines() }
    case "open":
    case "cd":
      return openTarget(arg)
    case "clear":
      return { lines: [], clear: true }
    case "sudo":
      return { lines: [dim("Nice try. You already have everything you need here.")] }
    default:
      return {
        lines: [
          err(`command not found: ${command}`),
          dim("Type `help` for the list."),
        ],
      }
  }
}

export const COMMAND_NAMES = [
  "help",
  "whoami",
  "about",
  "experience",
  "stack",
  "projects",
  "awards",
  "contact",
  "open",
  "clear",
]
