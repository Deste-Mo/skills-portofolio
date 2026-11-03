"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const sectionIds = [
  "accueil",
  "a-propos",
  "competences",
  "experiences",
  "services",
  "projets",
  "contact",
]

export function useScrollSpy() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("accueil")
  const pathname = usePathname()

  const isServicePage = pathname.startsWith("/services/")

  useEffect(() => {
    if (isServicePage) {
      setActiveSection("services")
      return
    }

    const hash = window.location.hash.slice(1)
    setActiveSection(hash || "accueil")
  }, [isServicePage, pathname])

  useEffect(() => {
    if (isServicePage) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      if (window.scrollY < 80) {
        setActiveSection("accueil")
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isServicePage])

  useEffect(() => {
    if (isServicePage) return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 80) {
          setActiveSection("accueil")
          return
        }

        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const topMost = visible.reduce((prev, current) =>
            current.boundingClientRect.top < prev.boundingClientRect.top
              ? current
              : prev
          )
          setActiveSection(topMost.target.id)
        }
      },
      { rootMargin: "-80px 0px -50% 0px", threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [isServicePage])

  return { isScrolled, activeSection, isServicePage, setActiveSection }
}
