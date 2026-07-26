"use client"

import { useState, useCallback } from "react"
import { FlagFr, FlagGb } from "@/components/ui/icons"
import { useTranslation } from "@/lib/i18n/context"
import { useClickOutside } from "@/hooks/useClickOutside"

interface LanguageSwitcherProps {
  variant?: "dropdown" | "inline"
}

export function LanguageSwitcher({ variant = "dropdown" }: LanguageSwitcherProps) {
  const { lang, setLang } = useTranslation()
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])
  useClickOutside(open, close)

  if (variant === "inline") {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLang("fr")}
          className={`p-1.5 rounded-[0.125rem] transition-all ${lang === "fr" ? "ring-1 ring-primary bg-muted/50" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}
          aria-label="Français"
        >
          <FlagFr size={18} />
        </button>
        <button
          onClick={() => setLang("en")}
          className={`p-1.5 rounded-[0.125rem] transition-all ${lang === "en" ? "ring-1 ring-primary bg-muted/50" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}
          aria-label="English"
        >
          <FlagGb size={18} />
        </button>
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(!open) }}
        className="md:w-10 md:h-10 flex items-center justify-center p-2 rounded-[0.125rem] text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 active:scale-[0.98]"
        aria-label="Select language"
      >
        {lang === "fr" ? <FlagFr size={20} /> : <FlagGb size={20} />}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50">
          <button
            onClick={() => { setLang("fr"); setOpen(false) }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-muted/50 ${lang === "fr" ? "text-foreground font-semibold" : "text-muted-foreground"}`}
          >
            <FlagFr size={18} />
            Français
            {lang === "fr" && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
          </button>
          <button
            onClick={() => { setLang("en"); setOpen(false) }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-muted/50 ${lang === "en" ? "text-foreground font-semibold" : "text-muted-foreground"}`}
          >
            <FlagGb size={18} />
            English
            {lang === "en" && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
          </button>
        </div>
      )}
    </div>
  )
}
