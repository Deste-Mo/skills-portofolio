"use client"

import { useEffect, useState } from "react"
import { MonitorCog, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useTranslation } from "@/lib/i18n/context"

interface ThemeToggleProps {
  variant?: "dropdown" | "switch"
}

export function ThemeToggle({ variant = "dropdown" }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const { t } = useTranslation()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-9 w-27.5 rounded-lg border border-[#dfe4ea] bg-white" />
  }

  const currentValue = theme ?? "system"
  const iconColor = "#475569"
  const themeLabel = t.theme.chooseTheme

  if (variant === "switch") {
    const isDark = resolvedTheme === "dark"
    return (
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#dfe4ea] bg-white text-[#0f172a] transition-colors hover:border-[#059669] hover:text-[#059669] dark:border-[#3b494b]/30 dark:bg-[#1f2430] dark:text-[#e1e2ec] dark:hover:text-[#00e5a3]"
        aria-label={isDark ? t.theme.switchToLight : t.theme.switchToDark}
      >
        {isDark ? <Sun size={18} color={iconColor} /> : <Moon size={18} color={iconColor} />}
      </button>
    )
  }

  return (
    <div className="relative inline-flex items-center">
      <span className="pointer-events-none absolute left-2.5 text-[#64748b]">
        {resolvedTheme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
      </span>
      <select
        aria-label={themeLabel}
        value={currentValue}
        onChange={(event) => setTheme(event.target.value)}
        className="cursor-pointer appearance-none rounded-lg border border-[#dfe4ea] bg-white py-1.5 pl-8 pr-6 font-mono text-[11px] font-semibold uppercase tracking-wide text-[#0f172a] transition-all focus:border-[#059669] focus:outline-none dark:border-[#3b494b]/30 dark:bg-[#1f2430] dark:text-[#e1e2ec]"
      >
        <option value="light">{t.theme.light}</option>
        <option value="dark">{t.theme.dark}</option>
        <option value="system">{t.theme.system}</option>
      </select>
      <span className="pointer-events-none absolute right-1.5 text-[#64748b]">
        <MonitorCog size={12} />
      </span>
    </div>
  )
}
