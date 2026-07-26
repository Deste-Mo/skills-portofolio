"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { siteConfig } from "@/config/site"

export function HeaderLogo() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  const logoSrc = mounted && resolvedTheme === "dark"
    ? "/images/logo/logo-white.png"
    : "/images/logo/logo-black.png"

  return (
    <Link href="/" className="flex flex-col items-center gap-0 group shrink-0 min-w-0 py-1">
      <div className="relative h-7 w-7 md:h-8 md:w-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <Image
          src={logoSrc}
          alt="Logo"
          fill
          sizes="32px"
          className="object-contain"
          priority
        />
      </div>
      <span className="text-[10px] md:text-xs font-semibold text-foreground tracking-tight leading-tight">
        {siteConfig.name}
      </span>
    </Link>
  )
}
