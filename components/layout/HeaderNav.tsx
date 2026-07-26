"use client"

import { useCallback } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import { useTranslation } from "@/lib/i18n/context"
import type { Translations } from "@/lib/i18n/types"

function getSectionId(href: string): string {
  return href === "/" ? "hero" : href.slice(1)
}

const navLabelMap: Record<string, keyof Translations["nav"]> = {
  "/": "home",
  "#about": "about",
  "#skills": "skills",
  "#experiences": "experiences",
  "#services": "services",
  "#projects": "projects",
  "#contact": "contact",
}

interface HeaderNavProps {
  className?: string
  linkClassName?: (isActive: boolean) => string
  activeSection: string
  setActiveSection: (id: string) => void
  onNavClick?: () => void
}

export function HeaderNav({ className = "", linkClassName, activeSection, setActiveSection, onNavClick }: HeaderNavProps) {
  const { t } = useTranslation()
  const router = useRouter()

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    onNavClick?.()

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(`/${href}`)
    }
  }, [router, onNavClick])

  const defaultClass = (isActive: boolean) =>
    `font-manrope text-sm font-medium tracking-tight whitespace-nowrap px-3 py-1.5 rounded-[0.125rem] active:scale-[0.98] transition-all duration-200 relative ${
      isActive
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
    }`

  const resolvedClass = linkClassName || defaultClass

  return (
    <>
      {siteConfig.mainNav.map((item) => {
        const sectionId = getSectionId(item.href)
        const isActive = activeSection === sectionId
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              handleNavClick(e, item.href)
              setActiveSection(sectionId)
            }}
            className={resolvedClass(isActive)}
            style={isActive ? { fontWeight: 600 } : undefined}
          >
            {isActive && (
              <motion.div
                layoutId="activeNav"
                className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {t.nav[navLabelMap[item.href]]}
          </a>
        )
      })}
    </>
  )
}
