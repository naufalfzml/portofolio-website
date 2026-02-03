"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react"
import TextReveal from "@/components/animations/TextReveal"
import FadeInView from "@/components/animations/FadeInView"
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeInView"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "naufalfzml07@gmail.com",
    href: "mailto:naufalfzml07@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Surakarta, Indonesia",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/naufalfzml",
    username: "@naufalfzml",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fawwaz-naufal/",
    username: "Fawwaz Naufal",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <TextReveal as="h2" className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Get In Touch
          </TextReveal>
          <FadeInView delay={0.3}>
            <div className="w-20 h-px bg-neutral-700 mx-auto mb-6" />
          </FadeInView>
          <FadeInView delay={0.4}>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </FadeInView>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FadeInView delay={0.3} direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s work together</h3>
                <p className="text-neutral-400 leading-relaxed">
                  I&apos;m always interested in new opportunities and exciting projects. Whether you
                  have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
              </div>

              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  const Content = (
                    <div className="flex items-center gap-4 p-4 border border-neutral-800 hover:border-neutral-600 transition-all duration-300">
                      <div className="w-12 h-12 bg-white text-black flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm text-neutral-500">{item.label}</div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </div>
                  )

                  return (
                    <StaggerItem key={index}>
                      {item.href ? (
                        <motion.a
                          href={item.href}
                          className="block"
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {Content}
                        </motion.a>
                      ) : (
                        <div>{Content}</div>
                      )}
                    </StaggerItem>
                  )
                })}
              </StaggerContainer>
            </div>
          </FadeInView>

          <FadeInView delay={0.4} direction="right">
            <div className="h-full flex flex-col justify-center">
              <h4 className="text-lg font-medium text-white mb-6">Connect with me</h4>

              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <StaggerItem key={index}>
                      <motion.a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 border border-neutral-800 hover:border-neutral-600 transition-all duration-300"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="text-white font-medium">{link.label}</div>
                            <div className="text-sm text-neutral-500">{link.username}</div>
                          </div>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </motion.a>
                    </StaggerItem>
                  )
                })}
              </StaggerContainer>
            </div>
          </FadeInView>
        </div>

        <FadeInView delay={0.6}>
          <div className="text-center pt-16 border-t border-neutral-800">
            <p className="text-neutral-600 text-sm">
              &copy; {new Date().getFullYear()} Fawwaz Naufal. All rights reserved.
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
