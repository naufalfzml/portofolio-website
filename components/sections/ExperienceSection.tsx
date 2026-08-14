"use client"

import { motion } from "framer-motion"
import TextReveal from "@/components/animations/TextReveal"
import FadeInView from "@/components/animations/FadeInView"
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeInView"

const experiences = [
  {
    role: "Full Stack Developer",
    type: "Internship",
    company: "PT Sistem Integrasi Medika",
    period: "Jun 2026 - Present",
    highlights: [
      "Developed and maintained features for a Hospital Information System (HIS), including master data management, role-based access control, and payor/insurance configuration modules.",
      "Improved search performance across EMR and registration modules by upgrading multiple search endpoints to V2 with full-text ranking, implemented across Go backend and React frontend.",
    ],
    stack: ["Go", "HTMX", "GraphQL", "React", "TypeScript", "MySQL"],
  },
  {
    role: "Full Stack Developer",
    type: "Freelance",
    company: "CV Enzo Group",
    period: "Oct 2024 - Present",
    highlights: [
      "Developed internal ERP and KPI systems for Customer Service, Design, PPIC, Finance, Content, and HR.",
      "Handled backend business logic, validation, and system integration to support scalable cross-department workflows.",
      "Developed reporting and export features to improve operational visibility and support decision-making.",
    ],
    stack: ["Laravel", "Nest.js", "Next.js", "TypeScript", "Prisma", "MySQL"],
  },
  {
    role: "Full Stack Developer",
    type: "Freelance",
    company: "PT Prabotmama Indonesia",
    period: "Apr 2026 - Jun 2026",
    highlights: [
      "Developed a warehouse management and POS system to support inventory tracking, stock movement, and daily operational workflows across multiple modules.",
      "Built barcode and stock movement features to improve inventory accuracy and operational efficiency.",
    ],
    stack: ["Nest.js", "Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
  },
  {
    role: "WordPress Developer",
    type: "Freelance",
    company: "Slamet Riyadi University",
    period: "Sep 2024 - Oct 2024",
    highlights: [
      "Designed and maintained the Lembaga Sertifikasi Profesi and Lembaga Inovasi dan Kewirausahaan websites with WordPress for UNISRI.",
    ],
    stack: ["WordPress"],
  },
  {
    role: "Lecturer's Assistant",
    type: "Contract",
    company: "Sebelas Maret University",
    period: "Sep 2024 - Jul 2025",
    highlights: [
      "Assisted practical labs for Programming Concepts using C, covering fundamental logic, memory management, pointers, and functional programming.",
      "Mentored 40+ students in Data Structures & Algorithms, guiding the implementation of linked lists, trees, and graphs while strengthening algorithm analysis skills.",
      "Supported Computer System Organization sessions by explaining low-level computer architecture concepts, including Boolean algebra, logic gates, and CPU operations.",
    ],
    stack: ["C", "Java"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <TextReveal as="h2" className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Experience
          </TextReveal>
          <FadeInView delay={0.3}>
            <div className="w-20 h-px bg-neutral-700 mx-auto mb-6" />
          </FadeInView>
          <FadeInView delay={0.4}>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Building production systems for hospitals, manufacturers, and universities — from
              internal ERP to hospital information systems.
            </p>
          </FadeInView>
        </div>

        <StaggerContainer className="space-y-6" staggerDelay={0.12}>
          {experiences.map((exp, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="group border border-neutral-800 p-6 lg:p-8 hover:border-neutral-600 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                  <div className="lg:w-52 flex-shrink-0">
                    <p className="text-neutral-500 text-sm">{exp.period}</p>
                    <span className="inline-block mt-3 px-2 py-1 border border-neutral-700 text-neutral-400 text-xs">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-neutral-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-neutral-400 mb-5">{exp.company}</p>

                    <ul className="space-y-2.5 mb-6">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex gap-3 text-neutral-500 text-sm leading-relaxed"
                        >
                          <span className="text-neutral-700 flex-shrink-0">—</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 border border-neutral-800 text-neutral-500 text-xs font-medium"
                        >
                          {tech}
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
