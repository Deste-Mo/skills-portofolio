"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function TravailSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0.4, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0.4, 0.9], [1, 0])

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(t)
  }, [])

  return (
    <ScrollReveal animation="slide-up">
      <section className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
        <motion.div
          ref={sectionRef}
          style={{ scale, opacity }}
          className="w-full h-full aspect-video min-h-[220px] rounded-xl bg-muted/30 relative overflow-hidden shadow-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />              
          <Image
            src={mounted && resolvedTheme === "dark" ? "/images/code-sombre.png" : "/images/code-claire.png"}
            alt="Aperçu de mon travail"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </motion.div>
      </section>
    </ScrollReveal>
  )
}
