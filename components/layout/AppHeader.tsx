"use client"

import { useState, useEffect } from "react"
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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

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
            className="md:hidden p-2 text-muted-foreground hover:text-foreground rounded-[0.125rem] transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={closeMobile}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] z-50 md:hidden bg-background border-r border-border flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-border shrink-0">
                <HeaderLogo />
                <button
                  onClick={closeMobile}
                  className="p-2 text-muted-foreground hover:text-foreground rounded-[0.125rem] transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <XIcon size={22} />
                </button>
              </div>
              <nav className="flex-1 flex flex-col gap-1 px-4 py-6 overflow-y-auto">
                <HeaderNav
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                  onNavClick={closeMobile}
                  linkClassName={(isActive) =>
                    `font-manrope text-base font-medium tracking-tight px-4 py-3.5 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-foreground bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`
                  }
                />
              </nav>
              <div className="flex items-center justify-center gap-3 px-6 py-5 border-t border-border shrink-0">
                <ThemeToggle variant="inline" />
                <LanguageSwitcher variant="inline" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
