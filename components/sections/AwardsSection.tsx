"use client"

import { motion } from "framer-motion"
import { Trophy, Banknote, Medal, Star } from "lucide-react"
import TextReveal from "@/components/animations/TextReveal"
import FadeInView from "@/components/animations/FadeInView"
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeInView"

const categoryStyles = {
  hackathon: { icon: Trophy, color: "text-amber-400", label: "Hackathon" },
  funding: { icon: Banknote, color: "text-emerald-400", label: "Funding" },
  academic: { icon: Medal, color: "text-sky-400", label: "Academic" },
  organization: { icon: Star, color: "text-violet-400", label: "Organization" },
} as const

type Category = keyof typeof categoryStyles

const awards: {
  title: string
  placement: string
  year: string
  category: Category
  description: string
  prize?: string
}[] = [
  {
    title: "Base Batches 002: Builder Track",
    placement: "Winner — Top 50 Global",
    year: "2025",
    category: "hackathon",
    description:
      "Ranked Top 50 out of 913 global projects, including Top 12 APAC and Top 7 Indonesia, earning acceptance into Incubase.",
    prize: "USD 5,000",
  },
  {
    title: "Convergence Chainlink Hackathon",
    placement: "2nd Place — Prediction Markets Track",
    year: "2026",
    category: "hackathon",
    description:
      "Secured 2nd place in the Prediction Markets Track among 500+ submissions and 3,000+ participants.",
    prize: "USD 6,000",
  },
  {
    title: "Base Indonesia Hackathon",
    placement: "Winner — Top 3",
    year: "2025",
    category: "hackathon",
    description: "Ranked Top 3 out of 110 projects in the Base Track.",
    prize: "USD 500",
  },
  {
    title: "Lisk Builder Challenge Round Two SEA",
    placement: "Most Favorite Project & Binary Holdings Track",
    year: "2025",
    category: "hackathon",
    description: "Recognized as one of the standout Web3 projects in Southeast Asia.",
    prize: "USD 200",
  },
  {
    title: "WIBAWA UNS Digital Business Funding",
    placement: "Funding Recipient",
    year: "2025",
    category: "funding",
    description:
      "Secured funding through the WIBAWA UNS digital business program to develop a digital product.",
    prize: "IDR 7,000,000",
  },
  {
    title: "Outstanding Student Selection (PILMAPRES)",
    placement: "3rd Place — Faculty Level",
    year: "2026",
    category: "academic",
    description: "Awarded 3rd place at FATISDA, Universitas Sebelas Maret.",
  },
  {
    title: "Innovative Excellent Award FATISDA UNS",
    placement: "Awardee",
    year: "2025",
    category: "academic",
    description: "Received recognition for achievements beyond academic activities.",
  },
  {
    title: "Most Valuable Crew of Mid Year, BEM FATISDA",
    placement: "Awardee",
    year: "2025",
    category: "organization",
    description: "Recognized for strong contribution in the Interest and Talent Division.",
  },
]

const stats = [
  { value: "8", label: "Awards & Recognitions" },
  { value: "4", label: "Hackathon Wins" },
  { value: "$11.7K", label: "Total Prize Money" },
]

export default function AwardsSection() {
  return (
    <section id="awards" className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <TextReveal as="h2" className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Honors & Awards
          </TextReveal>
          <FadeInView delay={0.3}>
            <div className="w-20 h-px bg-neutral-700 mx-auto mb-6" />
          </FadeInView>
          <FadeInView delay={0.4}>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Recognition from international hackathons, university programs, and student
              organizations.
            </p>
          </FadeInView>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16" staggerDelay={0.1}>
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="text-center p-6 border border-neutral-800">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-neutral-500 text-sm">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.08}>
          {awards.map((award, index) => {
            const { icon: Icon, color, label } = categoryStyles[award.category]

            return (
              <StaggerItem key={index}>
                <motion.div
                  className="group h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-full border border-neutral-800 p-6 lg:p-8 hover:border-neutral-600 transition-all duration-300 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-14 h-14 border border-neutral-700 p-3.5 flex-shrink-0 group-hover:border-neutral-500 transition-all duration-300">
                        <Icon className={`w-full h-full ${color}`} />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-neutral-600 text-sm">{award.year}</span>
                        <span className="px-2 py-1 border border-neutral-800 text-neutral-500 text-xs font-medium">
                          {label}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-neutral-300 transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4">{award.placement}</p>

                    <p className="text-neutral-500 text-sm leading-relaxed flex-grow">
                      {award.description}
                    </p>

                    {award.prize && (
                      <div className="mt-5 pt-5 border-t border-neutral-800">
                        <span className="text-white font-medium">{award.prize}</span>
                        <span className="text-neutral-600 text-sm"> in prizes</span>
                      </div>
                    )}
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
