"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useTranslation } from "@/lib/i18n/context"

export function AppFooter() {
  const { t, lang } = useTranslation()
  const { resolvedTheme } = useTheme()

  const logoSrc = resolvedTheme === "dark" ? "/images/logo/logo-white.png" : "/images/logo/logo-black.png"
  const footerBackgroundClass = resolvedTheme === "dark" ? "bg-[#00e5a3]/8" : "bg-[#059669]/6"

  const navItems = [
    { label: t.nav.home, href: "#accueil" },
    { label: t.nav.about, href: "#a-propos" },
    { label: t.nav.skills, href: "#competences" },
    { label: t.nav.experiences, href: "#experiences" },
    { label: t.nav.projects, href: "#projets" },
  ]

  const socialLinks = [
    { label: "tolojanaharyjeanmodeste@gmail.com", href: "#contact" },
    { label: lang === "fr" ? "Profil GitHub" : "GitHub Profile", href: "https://github.com/Deste-Mo" },
    { label: lang === "fr" ? "Réseau LinkedIn" : "LinkedIn Network", href: "https://www.linkedin.com/in/modeste-nirina-tolojanahary-b844b61b7" },
    { label: t.footer.downloadCv, href: "/doc/CV_Modeste_TOLOJANAHARY.pdf" },
  ]

  return (
    <footer className={`mt-20 w-full ${footerBackgroundClass}`}>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <a href="#accueil" className="group inline-flex flex-col items-start gap-1 py-1">
              <Image
                src={logoSrc}
                alt="Logo"
                width={150}
                height={48}
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
            <p className="max-w-md font-sans text-[15px] text-muted-foreground">
              {lang === "fr"
                ? "Ingénieur Full stack & DevOps spécialisé dans l'architecture distribuée, les conteneurs et les interfaces réactives haute performance."
                : "Full Stack & DevOps engineer specialized in distributed architecture, containers, and high-performance reactive interfaces."}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-[#22c55e]"></span>
                <span className="font-mono text-[12px] text-foreground">{t.footer.availableFor}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <span className="block font-mono text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">{t.footer.navigation}</span>
            <ul className="space-y-2 font-sans text-[13px]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="block text-muted-foreground transition-colors hover:text-foreground" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <span className="block font-mono text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">{t.footer.networkAndContact}</span>
            <ul className="space-y-2 font-sans text-[13px]">
              {socialLinks.map((item) => (
                <li key={item.href + item.label}>
                  <a
                    className="block text-muted-foreground transition-colors hover:text-foreground"
                    href={item.href}
                    rel={item.href.startsWith("http") || item.href.startsWith("/") ? "noreferrer" : undefined}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 font-mono text-[12px] text-muted-foreground sm:flex-row">
          <p>
            © 2025 Modeste TOLOJANAHARY. {t.footer.rights}
          </p>
          <p className="text-muted-foreground">{t.footer.designed}</p>
        </div>
      </div>
    </footer>
  )
}
