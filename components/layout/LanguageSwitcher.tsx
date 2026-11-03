"use client"

import { ChevronDown, Globe } from "lucide-react"
import { FlagFr, FlagGb } from "@/components/ui/icons"
import { useTranslation } from "@/lib/i18n/context"

interface LanguageSwitcherProps {
  variant?: "dropdown" | "inline"
}

export function LanguageSwitcher({ variant = "dropdown" }: LanguageSwitcherProps) {
  const { lang, setLang, t } = useTranslation()
  const selectedFlag = lang === "fr" ? <FlagFr size={16} className="rounded-sm" /> : <FlagGb size={16} className="rounded-sm" />
  const localeLabel = t.language.chooseLanguage

  if (variant === "inline") {
    return (
      <div className="flex items-center gap-2">
        <button onClick={() => setLang("fr")} aria-label={t.language.french} className={`rounded-md p-1.5 transition-all ${lang === "fr" ? "bg-[#e6f7f1] text-[#059669]" : "text-[#475569] hover:bg-slate-100"}`}>
          <span className="text-[11px] font-bold">FR</span>
        </button>
        <button onClick={() => setLang("en")} aria-label={t.language.english} className={`rounded-md p-1.5 transition-all ${lang === "en" ? "bg-[#e6f7f1] text-[#059669]" : "text-[#475569] hover:bg-slate-100"}`}>
          <span className="text-[11px] font-bold">EN</span>
        </button>
      </div>
    )
  }

  return (
    <div className="relative inline-flex items-center">
      <span className="pointer-events-none absolute left-2.5 z-10 flex items-center justify-center text-[#64748b]">
        {selectedFlag}
      </span>
      <Globe size={14} className="pointer-events-none absolute left-2.5 opacity-0" />
      <select
        aria-label={localeLabel}
        value={lang}
        onChange={(event) => setLang(event.target.value as "fr" | "en")}
        className="cursor-pointer appearance-none rounded-lg border border-[#dfe4ea] bg-white py-1.5 pl-9 pr-7 font-mono text-[11px] font-semibold uppercase tracking-wide text-[#0f172a] transition-all focus:border-[#059669] focus:outline-none dark:border-[#3b494b]/30 dark:bg-[#1f2430] dark:text-[#e1e2ec]"
      >
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>
      <span className="pointer-events-none absolute right-1.5 text-[#64748b]">
        <ChevronDown size={12} />
      </span>
    </div>
  )
}
