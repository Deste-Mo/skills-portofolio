"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "@/components/ui/icons"

interface ThemeToggleProps {
  className?: string
  iconSize?: number
  showLabel?: boolean
}

export function ThemeToggle({ className = "", iconSize = 18, showLabel }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`p-2 rounded-[0.125rem] text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 active:scale-[0.98] ${className}`}
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
    >
      {mounted ? (
        isDark ? <SunIcon size={iconSize} /> : <MoonIcon size={iconSize} />
      ) : (
        <div style={{ width: iconSize, height: iconSize }} />
      )}
      {showLabel && (
        <span className="ml-2">{isDark ? "Mode clair" : "Mode sombre"}</span>
      )}
    </button>
  )
}
