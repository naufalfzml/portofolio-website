"use client"

import { motion, useScroll, useSpring } from "framer-motion"

interface ScrollProgressProps {
  position?: "top" | "bottom"
  height?: number
}

export default function ScrollProgress({
  position = "top",
  height = 2,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed left-0 right-0 z-[100] bg-white origin-left"
      style={{
        scaleX,
        height: `${height}px`,
        [position]: 0,
      }}
    />
  )
}
