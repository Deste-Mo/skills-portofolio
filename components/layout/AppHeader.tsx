"use client"

import { ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"
import { HeaderLogo } from "@/components/layout/HeaderLogo"
import { ThemeToggle } from "@/components/layout/ThemeToggle"
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher"
import { useTranslation } from "@/lib/i18n/context"

export function AppHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useTranslation()

  const navItems = [
    { label: t.nav.home, href: "#accueil" },
    { label: t.nav.about, href: "#a-propos" },
    { label: t.nav.skills, href: "#competences" },
    { label: t.nav.experiences, href: "#experiences" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projets" },
  ]

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-md dark:bg-[#111319]/95 dark:shadow-none">
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex shrink-0 items-center justify-start">
            <HeaderLogo />
          </div>

          <nav className="hidden items-center justify-center gap-6 xl:gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-inter text-[14px] font-medium text-[#475569] transition-colors hover:text-[#0f172a] dark:text-[#9aa5b5] dark:hover:text-[#e1e2ec]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-3.5">
            <LanguageSwitcher variant="dropdown" />

            <ThemeToggle />

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#059669] px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-[#047857] dark:bg-[#00e5a3] dark:text-[#0d0f14] dark:hover:bg-white"
            >
              <span>{t.hero.letsTalk}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d0f14]/80 lg:hidden">
          <div className="w-full max-w-sm bg-white h-full border-r border-[#e2e8f0] p-6 dark:bg-[#111319] dark:border-[#2a2e39]/80">
            <div className="flex items-center justify-between mb-8">
              <HeaderLogo />
              <button onClick={() => setMobileOpen(false)} className="p-2 text-[#0f172a] dark:text-[#e1e2ec]">
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#475569] hover:text-[#059669] transition-colors text-sm dark:text-[#9aa5b5] dark:hover:text-[#00e5a3]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setMobileOpen((v) => !v)}
        className="fixed right-4 top-5 z-50 rounded-lg border border-[#cbd5e1] bg-white p-2 text-[#0f172a] shadow-sm lg:hidden dark:border-[#3b494b]/30 dark:bg-[#1d2436] dark:text-[#e1e2ec]"
        aria-label="Menu mobile"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </>
  )
}
