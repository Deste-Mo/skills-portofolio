"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: "slide-up" | "slide-down" | "slide-left" | "slide-right" | "fade" | "scale" | "reveal-bottom" | "slide-blur"
  delay?: number
  duration?: number
  className?: string
}

export function ScrollReveal({
  children,
  animation = "slide-up",
  delay = 0,
  duration = 0.5,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slide-up" || animation === "reveal-bottom" ? 50 : animation === "slide-down" ? -50 : 0,
      x: animation === "slide-left" ? 50 : animation === "slide-right" ? -50 : 0,
      scale: animation === "scale" ? 0.8 : 1,
      filter: animation === "slide-blur" ? "blur(10px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        delay: delay / 1000,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={mainControls}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  )
}
