"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    lenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
    }
  }, [])

  return <>{children}</>
}

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const checkLenis = () => {
      const lenisInstance = (window as unknown as { lenis?: Lenis }).lenis
      if (lenisInstance) {
        lenisRef.current = lenisInstance
      }
    }
    checkLenis()
  }, [])

  const scrollTo = (target: string | number, options?: { offset?: number }) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options)
    } else {
      const element = typeof target === "string" ? document.querySelector(target) : null
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      } else if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" })
      }
    }
  }

  return { scrollTo }
}
