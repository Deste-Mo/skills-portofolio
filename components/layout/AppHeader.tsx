"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MenuIcon, XIcon } from "@/components/ui/icons"
import { HeaderLogo } from "./HeaderLogo"
import { HeaderNav } from "./HeaderNav"
import { ThemeToggle } from "./ThemeToggle"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { useScrollSpy } from "@/hooks/useScrollSpy"

export function AppHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isScrolled, activeSection, setActiveSection } = useScrollSpy()

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`bg-background/80 backdrop-blur-xl top-0 fixed z-50 transition-all duration-300 w-full ${
          isScrolled ? "border-b border-border shadow-sm" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-2 px-4 sm:px-6 lg:px-8 h-16">
          <HeaderLogo />

          <nav className="hidden md:flex items-center justify-center flex-1 gap-1">
            <HeaderNav
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              onNavClick={closeMobile}
            />
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground rounded-[0.125rem] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-8 py-4 gap-1">
              <HeaderNav
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                onNavClick={closeMobile}
                linkClassName={(isActive) =>
                  `font-manrope text-sm font-medium tracking-tight px-3 py-2.5 rounded-[0.125rem] transition-all duration-200 ${
                    isActive
                      ? "text-foreground bg-muted/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`
                }
              />
              <div className="flex items-center justify-between pt-3 mt-2 border-t border-border">
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <LanguageSwitcher variant="inline" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
