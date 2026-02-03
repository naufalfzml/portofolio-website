"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import TextReveal from "@/components/animations/TextReveal"
import FadeInView from "@/components/animations/FadeInView"

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <FadeInView delay={0.2}>
              <p className="text-neutral-500 text-lg tracking-wide">Hello there</p>
            </FadeInView>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                <TextReveal delay={0.4} stagger={0.04}>
                  I&apos;m Naufal,
                </TextReveal>
              </h1>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                <TextReveal delay={0.8} stagger={0.04}>
                  Web Developer
                </TextReveal>
              </h1>
            </div>

            <FadeInView delay={1.2}>
              <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
                I build visually captivating, user-friendly websites & applications that deliver
                exceptional user experiences.
              </p>
            </FadeInView>

            <FadeInView delay={1.4} className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-8 py-4 bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Projects
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-8 py-4 border border-neutral-700 text-white font-medium hover:bg-neutral-900 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </FadeInView>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full border-2 border-neutral-800 p-1">
                  <div className="w-full h-full bg-black rounded-full overflow-hidden">
                    <Image
                      src="/prof-pic.jpeg"
                      alt="Naufal - Web Developer"
                      fill
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 hover:text-white transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  )
}
