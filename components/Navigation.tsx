"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { sections } from "@/lib/content"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // IntersectionObserver keeps the active item honest without fighting Lenis.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isScrolled ? "border-b border-rule bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-shell items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="#hero"
            onClick={(event) => {
              event.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
              setIsMenuOpen(false)
            }}
            className="font-mono text-sm text-paper transition-colors hover:text-phosphor"
          >
            naufal
            <span className="ml-2 text-paper-faint">~/portfolio</span>
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    goTo(id)
                  }}
                  className={`font-mono text-[13px] transition-colors ${
                    activeSection === id ? "text-phosphor" : "text-paper-dim hover:text-paper"
                  }`}
                >
                  <span
                    className={`mr-1.5 transition-opacity ${
                      activeSection === id ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="text-paper lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[57px] z-40 border-b border-rule bg-ink/95 backdrop-blur-md lg:hidden"
          >
            <ul className="px-6 py-4">
              {sections.map(({ id, label, command }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(event) => {
                      event.preventDefault()
                      goTo(id)
                    }}
                    className="flex items-baseline justify-between gap-4 border-b border-rule py-3.5 last:border-b-0"
                  >
                    <span
                      className={`font-mono text-base ${
                        activeSection === id ? "text-phosphor" : "text-paper"
                      }`}
                    >
                      {label}
                    </span>
                    <span className="font-mono text-[10px] text-paper-faint">{command}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
