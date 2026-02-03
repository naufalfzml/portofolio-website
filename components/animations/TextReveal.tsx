"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  stagger?: number
  as?: "h1" | "h2" | "h3" | "p" | "span"
  splitBy?: "char" | "word"
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.03,
  as: Component = "span",
  splitBy = "char",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const text = children
    container.innerHTML = ""

    const items = splitBy === "char" ? text.split("") : text.split(" ")

    items.forEach((item, index) => {
      const wrapper = document.createElement("span")
      wrapper.style.display = "inline-block"
      wrapper.style.overflow = "hidden"
      wrapper.style.verticalAlign = "bottom"

      const span = document.createElement("span")
      span.style.display = "inline-block"
      span.style.transform = "translateY(100%)"
      span.textContent = item === " " ? "\u00A0" : item
      if (splitBy === "word" && index < items.length - 1) {
        span.textContent += "\u00A0"
      }

      wrapper.appendChild(span)
      container.appendChild(wrapper)
    })

    const spans = container.querySelectorAll("span > span")

    setIsReady(true)

    const animation = gsap.to(spans, {
      y: 0,
      duration: 0.6,
      stagger: stagger,
      ease: "power3.out",
      delay: delay,
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill()
        }
      })
    }
  }, [children, delay, stagger, splitBy])

  return (
    <Component
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={className}
      style={{ visibility: isReady ? "visible" : "hidden" }}
    >
      {children}
    </Component>
  )
}
