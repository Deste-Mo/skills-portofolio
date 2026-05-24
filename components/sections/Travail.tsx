"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function TravailSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(t)
  }, [])
  return (
    <section className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
      <div className="w-full h-full aspect-video min-h-[220px] rounded-xl bg-muted/30 relative overflow-hidden shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 dark:from-white/40 via-transparent to-transparent z-10 pointer-events-none" />
        <Image
          src={mounted && resolvedTheme === "dark" ? "/images/code-claire.png" : "/images/code-sombre.png"}
          alt="Aperçu de mon travail"
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
