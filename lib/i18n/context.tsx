"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Language, Translations } from "./types"
import { translations } from "./translations"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("fr")
  const t = translations[lang]

  const handleSetLang = useCallback((l: Language) => {
    setLang(l)
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider")
  return ctx
}
