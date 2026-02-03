"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase } from "lucide-react"
import TextReveal from "@/components/animations/TextReveal"
import FadeInView from "@/components/animations/FadeInView"
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeInView"

const experiences = [
  {
    title: "Web Developer",
    company: "Enzo Group CV",
    period: "Oct 2024 - Present",
  },
  {
    title: "Lecturer's Assistant",
    company: "Programming Concept, Data Structure & Algorithm, Computer System Organization",
    period: "Sept 2024 - July 2025",
  },
  {
    title: "WordPress Developer",
    company: "LSP & LIK UNISRI",
    period: "Sept 2024 - Oct 2024",
  },
]

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
                  A sixth-semester Informatics student at Sebelas Maret University with experience
                  in backend web development and software development. Familiar with C, C++, Java, PHP, 
                  and currently learning Go. Passionate about building real-world applications, contributing 
                  to research projects, and always ready to learn new technologies and skills.
                </p>
              </div>
            </div>
          </FadeInView>

          <div className="space-y-8">
            <FadeInView direction="right" delay={0.3}>
              <p className="text-neutral-400 text-lg leading-relaxed">
                I&apos;m passionate about creating solutions that solve real problems and help
                businesses grow. Whether it&apos;s a simple landing page or a complex web
                application, I approach each project with dedication and attention to detail.
              </p>
            </FadeInView>

            <FadeInView delay={0.4}>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 border border-neutral-800">
                  <div className="text-4xl font-bold text-white mb-2">
                    <Counter end={10} suffix="+" />
                  </div>
                  <div className="text-neutral-500 text-sm">Projects Completed</div>
                </div>
                <div className="text-center p-6 border border-neutral-800">
                  <div className="text-4xl font-bold text-white mb-2">
                    <Counter end={1} suffix="+" />
                  </div>
                  <div className="text-neutral-500 text-sm">Years Experience</div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <TextReveal as="h3" className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Experience
            </TextReveal>
            <FadeInView delay={0.2}>
              <div className="w-16 h-px bg-neutral-700 mx-auto" />
            </FadeInView>
          </div>

          <StaggerContainer className="space-y-6" staggerDelay={0.15}>
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="group border border-neutral-800 p-6 lg:p-8 hover:border-neutral-600 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-white text-black flex items-center justify-center group-hover:bg-neutral-200 transition-colors duration-300">
                      <Briefcase className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-neutral-300 transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-neutral-400 mb-2">{exp.company}</p>
                      <p className="text-neutral-600 text-sm">{exp.period}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
