"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import TextReveal from "@/components/animations/TextReveal"
import FadeInView from "@/components/animations/FadeInView"
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeInView"

const tagColors: Record<string, string> = {
  "Backend": "border-emerald-600 text-emerald-400",
  "Laravel": "border-red-600 text-red-400",
  "Solidity": "border-neutral-500 text-neutral-300",
  "Foundry": "border-amber-600 text-amber-400",
  "Next.js": "border-white text-white",
  "Web3": "border-indigo-500 text-indigo-400",
  "Payment": "border-green-500 text-green-400",
  "AI / Machine Learning": "border-violet-600 text-violet-400",
  "Python": "border-yellow-600 text-yellow-400",
  "Fullstack": "border-sky-600 text-sky-400",
  "Flask": "border-neutral-400 text-neutral-300",
  "Frontend": "border-cyan-600 text-cyan-400",
  "WordPress": "border-blue-600 text-blue-400",
  "Java": "border-orange-600 text-orange-400",
  "Greenfoot": "border-green-600 text-green-400",
  "C#": "border-purple-600 text-purple-400",
  "Unity": "border-neutral-400 text-neutral-300",
  "React Native": "border-cyan-500 text-cyan-400",
}

const projects = [
  {
    title: "Tethra",
    description:
      "Oracle-based perpetual trading protocol with tap-to-trade interface — making leveraged trading as intuitive as tapping a chart, powered by Pyth Network oracle and Account Abstraction.",
    image: "/tethra.png",
    github: "github.com/Tethra-Dex",
    website: "tethra.trade",
    tags: ["Next.js", "Foundry", "Web3"],
  },
  {
    title: "RyvynPay",
    description:
      "Ryvyn is a real-world asset (RWA)-backed stablecoin protocol that turns every transaction into an investment through the “Move & Earn” concept. Instead of locking up funds (staking), you automatically earn yield when you send or use your money.",
    image: "/ryvyn.png",
    github: "github.com/RyvynPay",
    website: "ryvyn-pay.vercel.app",
    tags: ["Next.js", "Foundry", "Web3"],
  },
  {
    title: "ArtaPay",
    description:
      "ArtaPay is a multi-stablecoin transfer and payment platform that allows users to pay gas fees using stablecoins (without the need for ETH). The platform supports 7 stablecoins from various countries with features such as user-to-user transfers, QR code payments, and auto-swap.",
    image: "/artapay.png",
    github: "github.com/ArtaPay",
    website: "artapay.vercel.app",
    tags: ["Next.js", "Foundry", "Payment", "Web3"],
  },
  {
    title: "Enzo Group ERP",
    description:
      "Laravel-based website for managing customer orders, tracking inventory, and team calendars, replacing spreadsheets with an efficient, centralized system.",
    image: "/enzo-erp.png",
    github: "github.com/naufalfzml/enzo-group-erp-fix",
    website: "erp.enzocreatives.com",
    tags: ["Backend", "Laravel"],
  },
  {
    title: "Verifund",
    description:
      "A fundraising platform that ensures 100% transparency, where donation agencies can create campaigns. Funds are stored in smart contracts and only disbursed to verified wallet addresses announced beforehand.",
    image: "/verifund.png",
    github: "github.com/Verifund-Team",
    website: "verifund.vercel.app",
    tags: ["Solidity", "Foundry", "Next.js"],
  },
  {
    title: "CKD Prediction",
    description:
      "A project to detect chronic kidney disease by analyzing user-inserted indicators, with additional features that allow users to upload CSV files to make input easier.",
    image: "/ckd.png",
    github: "github.com/naufalfzml/ckd-disease-pred",
    website: "cek-ginjal-plus.streamlit.app",
    tags: ["AI / Machine Learning", "Python"],
  },
  {
    title: "PAUD Cahya Indria",
    description:
      "The Next.js-based PAUD website is used to manage PAUD administration, such as registration, criticism and suggestions, as well as articles and news about PAUD.",
    image: "/paud.png",
    github: "github.com/naufalfzml/paud-web",
    website: "",
    tags: ["Fullstack", "Next.js"],
  },
  {
    title: "Hotel Management",
    description:
      "This project is a website that uses the flask framework for its backend. This project is a website to manage the running of a hotel system that implements simple CRUD from a database.",
    image: "/hotel-management.png",
    github: "github.com/naufalfzml/Project-Akhir-BasisData",
    website: "",
    tags: ["Fullstack", "Flask"],
  },
  {
    title: "Unisri's LSP",
    description:
      "The UNISRI LSP website is a platform designed to manage and streamline the certification process for professional training and qualifications.",
    image: "/lsp.png",
    github: "",
    website: "lsp-unisri.com",
    tags: ["Frontend", "WordPress"],
  },
  {
    title: "Unisri's LIK",
    description:
      "Developed a user-friendly website with WordPress for UNISRI's LIK, streamlining the registration and management of innovation and entrepreneurship programs.",
    image: "/lik.png",
    github: "",
    website: "lik-unisri.com",
    tags: ["Frontend", "WordPress"],
  },
  {
    title: "Heart Disease Prediction",
    description:
      "A project to detect heart disease by analyzing user-inserted indicators, with additional features that allow users to upload CSV files to make input easier.",
    image: "/heart-disease.png",
    github: "github.com/naufalfzml/porto-ml-dqlab",
    website: "cardiocarepluz.streamlit.app",
    tags: ["AI / Machine Learning", "Python"],
  },
  {
    title: "Cult of University",
    description:
      "This game was developed with Java in Greenfoot as a final OOP project, telling the story of Mahmud from FATISDA who saves his university from an occult monster attack.",
    image: "/cult-of-university.png",
    github: "",
    website: "greenfoot.org/scenarios/34054",
    tags: ["Java", "Greenfoot"],
  },
  {
    title: "Para Pencari RTX",
    description:
      "Para Pencari RTX is a Unity game built with C# as a final project for the Programming Concept course, where players collect RTX to win, inspired by Super Mario Bros.",
    image: "/para-pencari-rtx.png",
    github: "github.com/naufalfzml/Project-Uas-KP-Para-Pencari-RTX",
    website: "",
    tags: ["C#", "Unity"],
  },
  {
    title: "SIGAP App",
    description:
      "A mobile application built with React Native for emergency response and community safety reporting.",
    image: "/verifund.png",
    github: "github.com/naufalfzml/sigap-app",
    website: "",
    tags: ["React Native"],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <TextReveal as="h2" className="text-4xl lg:text-6xl font-bold text-white mb-6">
            My Projects
          </TextReveal>
          <FadeInView delay={0.3}>
            <div className="w-20 h-px bg-neutral-700 mx-auto mb-6" />
          </FadeInView>
          <FadeInView delay={0.4}>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Check out some of my recent projects. Each project is uniquely designed and developed
              to meet specific needs.
            </p>
          </FadeInView>
        </div>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="group h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-full border border-neutral-800 overflow-hidden hover:border-neutral-600 transition-all duration-300 flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      {project.website && (
                        <motion.a
                          href={`https://${project.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white text-black text-sm font-medium flex items-center gap-2 hover:bg-neutral-200 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={`https://${project.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-white text-white text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neutral-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2 py-1 border text-xs font-medium ${tagColors[tag] || "border-neutral-700 text-neutral-400"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
