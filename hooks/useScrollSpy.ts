"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"

function getSectionId(href: string): string {
  return href === "/" ? "hero" : href.slice(1)
}

export function useScrollSpy() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const pathname = usePathname()

  const isServicePage = pathname.startsWith("/services/")

  useEffect(() => {
    if (isServicePage) {
      setActiveSection("services")
      return
    }
    const hash = window.location.hash.slice(1)
    setActiveSection(hash || "hero")
  }, [isServicePage, pathname])

  useEffect(() => {
    if (isServicePage) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      if (window.scrollY < 80) {
        setActiveSection("hero")
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isServicePage])

  useEffect(() => {
    if (isServicePage) return

    const sectionIds = siteConfig.mainNav.map((item) => getSectionId(item.href))
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 80) {
          setActiveSection("hero")
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
