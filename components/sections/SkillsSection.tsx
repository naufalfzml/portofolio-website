"use client"

import { motion } from "framer-motion"
import { Braces, Code, Server, Database, Smartphone, Brain, Wrench } from "lucide-react"
import { SiSolidity } from "react-icons/si"
import TextReveal from "@/components/animations/TextReveal"
import FadeInView from "@/components/animations/FadeInView"
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeInView"

const skills = [
  {
    icon: Braces,
    title: "Languages",
    description: "Go, TypeScript, JavaScript, PHP, Java, Solidity, Rust, Python, C",
    iconColor: "text-neutral-300",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Next.js, React, TypeScript, Tailwind CSS, HTMX",
    iconColor: "text-sky-400",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Go, Nest.js, Express.js, Laravel, GraphQL",
    iconColor: "text-emerald-400",
  },
  {
    icon: Database,
    title: "Database & ORM",
    description: "MySQL, PostgreSQL, Prisma",
    iconColor: "text-indigo-400",
  },
  {
    icon: SiSolidity,
    title: "Web3 Development",
    description: "Solidity, Foundry, Anchor, Smart Contract",
    iconColor: "text-violet-400",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Python, scikit-learn, Streamlit",
    iconColor: "text-amber-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native",
    iconColor: "text-cyan-400",
  },
  {
    icon: Wrench,
    title: "Tools & Platform",
    description: "Git, GitHub, GitLab, Linux, Vercel",
    iconColor: "text-rose-400",
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <TextReveal as="h2" className="text-4xl lg:text-6xl font-bold text-white mb-6">
            My Skills
          </TextReveal>
          <FadeInView delay={0.3}>
            <div className="w-20 h-px bg-neutral-700 mx-auto mb-6" />
          </FadeInView>
          <FadeInView delay={0.4}>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              I specialize in modern web technologies and frameworks, constantly learning and
              adapting to new trends.
            </p>
          </FadeInView>
        </div>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <StaggerItem key={index}>
                <motion.div
                  className="group h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-full border border-neutral-800 p-8 hover:border-neutral-600 transition-all duration-300">
                    <div className="w-16 h-16 border border-neutral-700 p-4 mb-6 group-hover:border-neutral-500 transition-all duration-300">
                      <Icon className={`w-full h-full ${skill.iconColor}`} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neutral-300 transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed">{skill.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
