/**
 * Single source of truth for everything on the page.
 * The hero terminal answers questions from this same data, so a command like
 * `awards` can never drift from what the Awards section renders.
 */

export const profile = {
  name: "Fawwaz Naufal Maulana",
  shortName: "Fawwaz Naufal",
  role: "Full-stack Developer",
  location: "Surakarta, Central Java",
  summary:
    "Informatics student and full-stack developer building ERP systems, internal tools, and smart contracts.",
  available: true,
}

export const contact = {
  email: "naufalfzml07@gmail.com",
  github: { handle: "@naufalfzml", url: "https://github.com/naufalfzml" },
  linkedin: { handle: "Fawwaz Naufal Maulana", url: "https://www.linkedin.com/in/fawwaz-naufal/" },
}

export type Experience = {
  role: string
  type: string
  company: string
  start: string
  end: string
  highlights: string[]
  stack: string[]
}

export const experiences: Experience[] = [
  {
    role: "Full-stack Developer",
    type: "Internship",
    company: "PT Sistem Integrasi Medika",
    start: "2026.06",
    end: "present",
    highlights: [
      "Developed and maintained features for a Hospital Information System, including master data management, role-based access control, and payor/insurance configuration modules.",
      "Upgraded search endpoints across the EMR and registration modules to a V2 with full-text ranking, implemented across the Go backend and React frontend.",
    ],
    stack: ["Go", "HTMX", "GraphQL", "React", "TypeScript", "MySQL"],
  },
  {
    role: "Full-stack Developer",
    type: "Freelance",
    company: "CV Enzo Group",
    start: "2024.10",
    end: "present",
    highlights: [
      "Built internal ERP and KPI systems for Customer Service, Design, PPIC, Finance, Content, and HR.",
      "Owned backend business logic, validation, and system integration for cross-department workflows.",
      "Shipped reporting and export features that made operational performance visible to management.",
    ],
    stack: ["Laravel", "Nest.js", "Next.js", "TypeScript", "Prisma", "MySQL"],
  },
  {
    role: "Full-stack Developer",
    type: "Freelance",
    company: "PT Prabotmama Indonesia",
    start: "2026.04",
    end: "2026.06",
    highlights: [
      "Built a warehouse management and POS system covering inventory tracking, stock movement, and daily operational workflows.",
      "Added barcode scanning and stock movement features that improved inventory accuracy.",
    ],
    stack: ["Nest.js", "Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
  },
  {
    role: "WordPress Developer",
    type: "Freelance",
    company: "Slamet Riyadi University",
    start: "2024.09",
    end: "2024.10",
    highlights: [
      "Designed and maintained the Lembaga Sertifikasi Profesi and Lembaga Inovasi dan Kewirausahaan websites for UNISRI.",
    ],
    stack: ["WordPress"],
  },
  {
    role: "Lecturer's Assistant",
    type: "Contract",
    company: "Sebelas Maret University",
    start: "2024.09",
    end: "2025.07",
    highlights: [
      "Ran practical labs for Programming Concepts in C, covering logic, memory management, pointers, and functional programming.",
      "Mentored 40+ students through Data Structures & Algorithms, from linked lists and trees to graphs and complexity analysis.",
      "Supported Computer System Organization sessions on Boolean algebra, logic gates, and CPU operations.",
    ],
    stack: ["C", "Java"],
  },
]

export const education = {
  institution: "Universitas Sebelas Maret",
  degree: "Bachelor of Computer Science, Informatics",
  start: "2023.08",
  end: "present",
  location: "Surakarta, Central Java",
  coursework: [
    "Database",
    "Data Structure & Algorithm",
    "Algorithm Design & Analysis",
    "Application & Web Programming",
    "Software Engineering",
    "Computer Networks",
    "Operating System",
  ],
}

export const stack: { dir: string; items: string[] }[] = [
  {
    dir: "languages",
    items: ["go", "typescript", "javascript", "php", "java", "solidity", "rust", "python", "c"],
  },
  { dir: "backend", items: ["go", "nest.js", "express.js", "laravel", "graphql"] },
  { dir: "frontend", items: ["next.js", "react", "tailwind css", "htmx"] },
  { dir: "data", items: ["mysql", "postgresql", "prisma"] },
  { dir: "web3", items: ["solidity", "foundry", "anchor", "pyth network"] },
  { dir: "ml", items: ["python", "scikit-learn", "streamlit"] },
  { dir: "mobile", items: ["react native"] },
  { dir: "tools", items: ["git", "github", "gitlab", "linux", "vercel"] },
]

export type Project = {
  slug: string
  title: string
  kind: string
  year: string
  description: string
  image: string
  github: string
  website: string
  stack: string[]
  featured?: boolean
  note?: string
}

export const projects: Project[] = [
  {
    slug: "tethra",
    title: "Tethra",
    kind: "Perpetual DEX",
    year: "2025",
    description:
      "An oracle-based perpetual trading protocol with a tap-to-trade interface, making leveraged trading as direct as tapping a chart. Built on Pyth Network price feeds with account abstraction so traders never manage a gas balance.",
    image: "/tethra.png",
    github: "https://github.com/Tethra-Dex",
    website: "https://tethra.trade",
    stack: ["Next.js", "Solidity", "Foundry", "Privy", "Pyth Network"],
    featured: true,
    note: "Top 50 of 913 · Base Batches 002",
  },
  {
    slug: "memepull-arena",
    title: "Memepull Arena",
    kind: "GameFi",
    year: "2026",
    description:
      "A trustless Web3 GameFi platform built around PvP liquidity battles and milestone-based prediction markets for meme coin communities. Settlement runs on Chainlink CRE.",
    image: "",
    github: "",
    website: "",
    stack: ["Next.js", "Solidity", "Foundry", "Go", "Chainlink CRE"],
    featured: true,
    note: "2nd place of 500+ · Convergence Chainlink",
  },
  {
    slug: "enzo-group-erp",
    title: "Enzo Group ERP",
    kind: "ERP",
    year: "2024",
    description:
      "A multi-module ERP running a real business: order management and operational workflows, with connected KPI modules for Design, Content, Customer Service, PPIC, and Finance. It replaced a spreadsheet sprawl that six departments were maintaining by hand.",
    image: "/enzo-erp.png",
    github: "https://github.com/naufalfzml/enzo-group-erp-fix",
    website: "https://erp.enzocreatives.com",
    stack: ["Laravel", "Nest.js", "Next.js", "Prisma", "PostgreSQL"],
    featured: true,
    note: "In production since 2024",
  },
  {
    slug: "ryvynpay",
    title: "RyvynPay",
    kind: "Stablecoin",
    year: "2026",
    description:
      "An RWA-backed stablecoin protocol that turns spending into yield. Instead of locking funds in staking, balances earn while they move.",
    image: "/ryvyn.png",
    github: "https://github.com/RyvynPay",
    website: "https://ryvyn-pay.vercel.app",
    stack: ["Next.js", "Solidity", "Foundry", "Tailwind CSS"],
    note: "Top 3 of 110 · Base Indonesia",
  },
  {
    slug: "artapay",
    title: "ArtaPay",
    kind: "Payments",
    year: "2025",
    description:
      "A multi-stablecoin payment platform where gas is paid in stablecoins, so users never need to hold ETH. Supports seven stablecoins with user-to-user transfers, QR payments, and auto-swap.",
    image: "/artapay.png",
    github: "https://github.com/ArtaPay",
    website: "https://artapay.vercel.app",
    stack: ["Next.js", "Solidity", "Foundry"],
  },
  {
    slug: "verifund",
    title: "Verifund",
    kind: "Fundraising",
    year: "2025",
    description:
      "A fundraising platform where every rupiah is traceable. Funds sit in a smart contract and can only be released to wallet addresses published before the campaign opens.",
    image: "/verifund.png",
    github: "https://github.com/Verifund-Team",
    website: "https://verifund.vercel.app",
    stack: ["Next.js", "Solidity", "Foundry"],
  },
  {
    slug: "rekandana",
    title: "Rekandana",
    kind: "Platform",
    year: "2025",
    description:
      "A collaboration platform connecting university event committees and academic initiatives with companies for sponsorship, partnerships, and research support.",
    image: "",
    github: "",
    website: "",
    stack: ["Laravel", "Tailwind CSS"],
    note: "Funded by WIBAWA UNS",
  },
  {
    slug: "ckd-prediction",
    title: "CKD Prediction",
    kind: "Machine Learning",
    year: "2025",
    description:
      "Chronic kidney disease screening from clinical indicators, with CSV upload so a whole batch of records can be scored at once.",
    image: "/ckd.png",
    github: "https://github.com/naufalfzml/ckd-disease-pred",
    website: "https://cek-ginjal-plus.streamlit.app",
    stack: ["Python", "scikit-learn", "Streamlit"],
  },
  {
    slug: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    kind: "Machine Learning",
    year: "2025",
    description:
      "Heart disease risk screening from user-supplied indicators, with the same CSV batch workflow.",
    image: "/heart-disease.png",
    github: "https://github.com/naufalfzml/porto-ml-dqlab",
    website: "https://cardiocarepluz.streamlit.app",
    stack: ["Python", "scikit-learn", "Streamlit"],
  },
  {
    slug: "paud-cahya-indria",
    title: "PAUD Cahya Indria",
    kind: "School Web",
    year: "2024",
    description:
      "Administration site for an early-childhood school: enrolment, feedback intake, and school news in one place.",
    image: "/paud.png",
    github: "https://github.com/naufalfzml/paud-web",
    website: "",
    stack: ["Next.js", "TypeScript"],
  },
  {
    slug: "sigap-app",
    title: "SIGAP App",
    kind: "Mobile",
    year: "2025",
    description: "A mobile app for emergency response and community safety reporting.",
    image: "",
    github: "https://github.com/naufalfzml/sigap-app",
    website: "",
    stack: ["React Native"],
  },
  {
    slug: "lsp-unisri",
    title: "UNISRI LSP",
    kind: "WordPress",
    year: "2024",
    description:
      "Public site for UNISRI's professional certification body, covering the certification process end to end.",
    image: "/lsp.png",
    github: "",
    website: "https://lsp-unisri.com",
    stack: ["WordPress"],
  },
  {
    slug: "lik-unisri",
    title: "UNISRI LIK",
    kind: "WordPress",
    year: "2024",
    description:
      "Site for UNISRI's innovation and entrepreneurship institute, handling programme registration and management.",
    image: "/lik.png",
    github: "",
    website: "https://lik-unisri.com",
    stack: ["WordPress"],
  },
  {
    slug: "hotel-management",
    title: "Hotel Management",
    kind: "Coursework",
    year: "2024",
    description:
      "A hotel operations system built on Flask as a database course final project, covering the full CRUD surface over a normalised schema.",
    image: "/hotel-management.png",
    github: "https://github.com/naufalfzml/Project-Akhir-BasisData",
    website: "",
    stack: ["Flask", "Python", "MySQL"],
  },
  {
    slug: "cult-of-university",
    title: "Cult of University",
    kind: "Game",
    year: "2024",
    description:
      "A Java/Greenfoot game made as an OOP final project, in which Mahmud of FATISDA saves his university from an occult monster attack.",
    image: "/cult-of-university.png",
    github: "",
    website: "https://greenfoot.org/scenarios/34054",
    stack: ["Java", "Greenfoot"],
  },
  {
    slug: "para-pencari-rtx",
    title: "Para Pencari RTX",
    kind: "Game",
    year: "2023",
    description:
      "A Unity platformer written in C# for the Programming Concepts course, where players collect RTX cards to win. Inspired by Super Mario Bros.",
    image: "/para-pencari-rtx.png",
    github: "https://github.com/naufalfzml/Project-Uas-KP-Para-Pencari-RTX",
    website: "",
    stack: ["C#", "Unity"],
  },
]

export type AwardKind = "win" | "fund" | "acad" | "org"

export type Award = {
  year: string
  kind: AwardKind
  title: string
  placement: string
  detail: string
  prize?: string
}

export const awards: Award[] = [
  {
    year: "2026",
    kind: "win",
    title: "Convergence Chainlink Hackathon",
    placement: "2nd — Prediction Markets",
    detail: "2nd of 500+ submissions and 3,000+ participants.",
    prize: "USD 6,000",
  },
  {
    year: "2025",
    kind: "win",
    title: "Base Batches 002 — Builder Track",
    placement: "Top 50 global",
    detail: "Top 50 of 913 projects, Top 12 APAC and Top 7 Indonesia. Accepted into Incubase.",
    prize: "USD 5,000",
  },
  {
    year: "2025",
    kind: "win",
    title: "Base Indonesia Hackathon",
    placement: "Top 3 — Base Track",
    detail: "Top 3 of 110 projects.",
    prize: "USD 500",
  },
  {
    year: "2025",
    kind: "win",
    title: "Lisk Builder Challenge Round Two SEA",
    placement: "Most Favorite Project",
    detail: "Also took the Binary Holdings track, as one of the standout Web3 projects in SEA.",
    prize: "USD 200",
  },
  {
    year: "2025",
    kind: "fund",
    title: "WIBAWA UNS Digital Business Funding",
    placement: "Recipient",
    detail: "University-backed funding to build and run a digital product.",
    prize: "IDR 7,000,000",
  },
  {
    year: "2026",
    kind: "acad",
    title: "Outstanding Student Selection (PILMAPRES)",
    placement: "3rd — Faculty level",
    detail: "Awarded at FATISDA, Universitas Sebelas Maret.",
  },
  {
    year: "2025",
    kind: "acad",
    title: "Innovative Excellent Award FATISDA UNS",
    placement: "Awardee",
    detail: "Recognition for achievement beyond coursework.",
  },
  {
    year: "2025",
    kind: "org",
    title: "Most Valuable Crew of Mid Year, BEM FATISDA",
    placement: "Awardee",
    detail: "For contribution in the Interest and Talent Division.",
  },
]

export const awardStats = {
  prizeTotal: 11.7,
  hackathonWins: 4,
}

export const sections = [
  { id: "about", label: "about", command: "cat about.md" },
  { id: "experience", label: "experience", command: 'git log --author="naufal"' },
  { id: "stack", label: "stack", command: "ls -R ~/stack" },
  { id: "projects", label: "projects", command: "ls ./projects" },
  { id: "awards", label: "awards", command: "cat awards.log" },
  { id: "contact", label: "contact", command: "./contact.sh" },
]
