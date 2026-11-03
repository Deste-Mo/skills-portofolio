"use client"

import { useState } from "react"
import Image from "next/image"

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Compétences", href: "#competences" },
  { label: "Expériences", href: "#experiences" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
]

export function AppHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-[#2a2e39]/80 bg-[#111319]/95 backdrop-blur-sm">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-12 items-center">
          <div className="col-span-3 flex items-center justify-start">
            <a href="#accueil" className="flex flex-col items-center justify-center group gap-1 py-1">
              <Image
                src="/images/logo/logo-white.png"
                alt="Logo Modeste"
                width={120}
                height={42}
                className="h-7 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-manrope text-[13px] tracking-[0.2em] uppercase text-[#e1e2ec] group-hover:text-[#00e5a3] transition-colors font-bold leading-none">
                Modeste
              </span>
            </a>
          </div>

          <nav className="col-span-6 hidden lg:flex items-center justify-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-inter text-[14px] text-[#9aa5b5] hover:text-[#e1e2ec] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="col-span-9 lg:col-span-3 flex items-center justify-end gap-3.5">
            <div className="relative inline-flex items-center">
              <span className="material-symbols-outlined absolute left-2.5 text-[16px] text-[#525c6c] pointer-events-none">language</span>
              <select
                aria-label="Choisir la langue"
                className="pl-8 pr-7 py-1.5 rounded-lg bg-[#1f2430] border border-[#3b494b]/30 text-[#e1e2ec] font-mono text-[12px] uppercase tracking-wider focus:outline-none focus:border-[#00e5a3] cursor-pointer hover:bg-[#242936] appearance-none"
                defaultValue="fr"
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 text-[14px] text-[#525c6c] pointer-events-none">expand_more</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00e5a3] font-manrope text-[13px] font-bold text-[#0d0f14] hover:bg-white transition-colors"
            >
              <span>Discutons</span>
              <span className="material-symbols-outlined text-[18px] ml-1.5">arrow_forward</span>
            </a>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d0f14]/80 lg:hidden">
          <div className="w-full max-w-sm bg-[#111319] h-full border-r border-[#2a2e39] p-6">
            <div className="flex items-center justify-between mb-8">
              <Image src="/images/logo/logo-white.png" alt="Logo" width={120} height={36} className="h-8 w-auto" />
              <button onClick={() => setMobileOpen(false)} className="text-[#e1e2ec] p-2">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#9aa5b5] hover:text-[#00e5a3] transition-colors text-sm"
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
        className="fixed right-4 top-5 z-50 lg:hidden rounded-lg border border-[#3b494b]/30 bg-[#1d2436] p-2 text-[#e1e2ec]"
        aria-label="Menu mobile"
      >
        <span className="material-symbols-outlined text-[22px]">{mobileOpen ? "close" : "menu"}</span>
      </button>
    </>
  )
}
