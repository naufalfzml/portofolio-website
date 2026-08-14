"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { GraduationCap } from "lucide-react"
import TextReveal from "@/components/animations/TextReveal"
import FadeInView from "@/components/animations/FadeInView"
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeInView"

const education = {
  institution: "Universitas Sebelas Maret",
  degree: "Bachelor of Computer Science, Informatics",
  period: "Aug 2023 - Present",
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

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

function Counter({ end, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <TextReveal as="h2" className="text-4xl lg:text-6xl font-bold text-white mb-6">
            About Me
          </TextReveal>
          <FadeInView delay={0.3}>
            <div className="w-20 h-px bg-neutral-700 mx-auto" />
          </FadeInView>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <FadeInView direction="left" delay={0.2}>
            <div className="relative">
              <div className="relative border border-neutral-800 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Who am I?</h3>
                <p className="text-neutral-400 leading-relaxed">
                  An Informatics student at Universitas Sebelas Maret and a full-stack developer
                  with experience building ERP systems, web platforms, and Web3 applications. I work
                  day to day with Go, Laravel, Next.js, and Solidity, shipping scalable digital
                  products across both business and decentralized environments.
                </p>
              </div>
            </div>
          </FadeInView>

          <div className="space-y-8">
            <FadeInView direction="right" delay={0.3}>
              <p className="text-neutral-400 text-lg leading-relaxed">
                I care about software that holds up in production, whether that&apos;s an internal
                ERP replacing a maze of spreadsheets, a hospital information system serving real
                patients, or a smart contract moving real value. That work has been recognized
                through international hackathons and university-backed digital business funding.
              </p>
            </FadeInView>

            <FadeInView delay={0.4}>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 border border-neutral-800">
                  <div className="text-4xl font-bold text-white mb-2">
                    <Counter end={16} suffix="+" />
                  </div>
                  <div className="text-neutral-500 text-sm">Projects Completed</div>
                </div>
                <div className="text-center p-6 border border-neutral-800">
                  <div className="text-4xl font-bold text-white mb-2">
                    <Counter end={2} />
                  </div>
                  <div className="text-neutral-500 text-sm">Years of Experience</div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <TextReveal as="h3" className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Education
            </TextReveal>
            <FadeInView delay={0.2}>
              <div className="w-16 h-px bg-neutral-700 mx-auto" />
            </FadeInView>
          </div>

          <FadeInView delay={0.3}>
            <div className="group border border-neutral-800 p-6 lg:p-8 hover:border-neutral-600 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-white text-black flex items-center justify-center group-hover:bg-neutral-200 transition-colors duration-300">
                  <GraduationCap className="w-7 h-7" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1 mb-2">
                    <h4 className="text-xl font-bold text-white group-hover:text-neutral-300 transition-colors">
                      {education.institution}
                    </h4>
                    <p className="text-neutral-600 text-sm">{education.period}</p>
                  </div>

                  <p className="text-neutral-400">{education.degree}</p>
                  <p className="text-neutral-600 text-sm mb-6">{education.location}</p>

                  <p className="text-neutral-500 text-sm mb-3">Relevant coursework</p>
                  <StaggerContainer className="flex flex-wrap gap-1.5" staggerDelay={0.05}>
                    {education.coursework.map((course, index) => (
                      <StaggerItem key={index}>
                        <span className="inline-block px-2 py-1 border border-neutral-800 text-neutral-500 text-xs font-medium">
                          {course}
                        </span>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
