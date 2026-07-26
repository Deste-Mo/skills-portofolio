"use client"

import { useState, useEffect, useCallback } from "react"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon, MonitorIcon } from "@/components/ui/icons"
import { useClickOutside } from "@/hooks/useClickOutside"

interface ThemeToggleProps {
  variant?: "dropdown" | "inline"
}

const themes = [
  { key: "light", label: "Clair", labelEn: "Light", icon: SunIcon },
  { key: "dark", label: "Sombre", labelEn: "Dark", icon: MoonIcon },
  { key: "system", label: "Système", labelEn: "System", icon: MonitorIcon },
] as const

export function ThemeToggle({ variant = "dropdown" }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const close = useCallback(() => setOpen(false), [])
  useClickOutside(open, close)

  const current = themes.find((t) => t.key === theme) || themes[2]

  if (variant === "inline") {
    return (
      <div className="flex items-center gap-2">
        {themes.map((t) => {
          const Icon = t.icon
          return (
            <button
              key={t.key}
              onClick={() => setTheme(t.key)}
              className={`p-1.5 rounded-[0.125rem] transition-all ${theme === t.key ? "ring-1 ring-primary bg-muted/50" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}
              aria-label={t.label}
            >
              <Icon size={18} />
            </button>
          )
        })}
      </div>
    )
  }

  if (!mounted) {
    return (
      <div className="md:w-10 md:h-10 flex items-center justify-center p-2">
        <div className="w-[18px] h-[18px]" />
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(!open) }}
        className="md:w-10 md:h-10 flex items-center justify-center p-2 rounded-[0.125rem] text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 active:scale-[0.98]"
        aria-label="Select theme"
      >
        <current.icon size={20} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {themes.map((t) => {
            const Icon = t.icon
            return (
              <button
                key={t.key}
                onClick={() => { setTheme(t.key); setOpen(false) }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-muted/50 ${theme === t.key ? "text-foreground font-semibold" : "text-muted-foreground"}`}
              >
                <Icon size={18} />
                {t.label}
                {theme === t.key && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
