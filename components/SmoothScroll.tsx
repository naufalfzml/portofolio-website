"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Users who ask for less motion should get the browser's own scrolling.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    })

    // Keep a reference to the exact function passed to the ticker, otherwise
    // cleanup removes nothing and the callback leaks across remounts.
    const update = (time: number) => lenis.raf(time * 1000)

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
