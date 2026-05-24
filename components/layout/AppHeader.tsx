"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon, MoonIcon, SunIcon, MailIcon } from "@/components/ui/icons";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";

function getSectionId(href: string): string {
  return href === "/" ? "hero" : href.slice(1);
}

export function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (window.scrollY < 80) {
        setActiveSection("hero");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = siteConfig.mainNav.map((item) => getSectionId(item.href));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 80) {
          setActiveSection("hero");
          return;
        }
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((prev, current) =>
            current.boundingClientRect.top < prev.boundingClientRect.top
              ? current
              : prev
          );
          setActiveSection(topMost.target.id);
        }
      },
      { rootMargin: "-80px 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const logoSrc = mounted && resolvedTheme === "dark"
    ? "/logo/logo-white.png"
    : "/logo/logo-black.png";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bg-background/80 backdrop-blur-xl top-0 sticky z-50 transition-all duration-300 overflow-x-hidden ${
        isScrolled ? "border-b border-border shadow-sm" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 lg:px-8 h-auto md:h-16 min-w-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0 min-w-0">
          <div className="relative h-8 w-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Image
              src={logoSrc}
              alt="Logo"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden lg:inline-flex text-xl font-bold text-foreground tracking-tighter active:scale-[0.98] transition-transform">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-1 min-w-0">
          {siteConfig.mainNav.map((item) => {
            const sectionId = getSectionId(item.href);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setActiveSection(sectionId);
                }}
                className={`font-manrope text-sm font-medium tracking-tight whitespace-nowrap px-3 py-1.5 rounded-[0.125rem] active:scale-[0.98] transition-all duration-200 ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.title}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-[0.125rem] text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 active:scale-[0.98]"
            aria-label="Toggle theme"
          >
            {mounted ? (
              resolvedTheme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />
            ) : (
              <div className="w-[18px] h-[18px]" />
            )}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex items-center justify-center rounded-[0.125rem] bg-primary text-primary-foreground p-2 text-sm font-bold tracking-tight transition-all duration-200 hover:bg-primary/90 active:scale-[0.98] md:w-10 md:h-10 lg:w-auto lg:h-auto lg:px-4 lg:py-2 lg:text-sm lg:font-bold lg:tracking-tight"
            aria-label="Me contacter"
          >
            <MailIcon size={18} />
            <span className="hidden lg:inline-flex ml-2">Me contacter</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground rounded-[0.125rem] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-8 py-4 gap-1">
              {siteConfig.mainNav.map((item) => {
                const sectionId = getSectionId(item.href);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setActiveSection(sectionId);
                    }}
                    className={`font-manrope text-sm font-medium tracking-tight px-3 py-2.5 rounded-[0.125rem] transition-all duration-200 ${
                      isActive
                        ? "text-foreground bg-muted/50"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.title}
                  </a>
                );
              })}
              <div className="flex items-center justify-between pt-3 mt-2 border-t border-border">
                <button
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="flex items-center gap-2 font-manrope text-sm font-medium tracking-tight text-muted-foreground hover:text-foreground px-3 py-2 rounded-[0.125rem] hover:bg-muted/50 transition-all"
                >
            {mounted ? (
              resolvedTheme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />
            ) : (
              <div className="w-[18px] h-[18px]" />
            )}
                  {resolvedTheme === "dark" ? "Mode clair" : "Mode sombre"}
                </button>
              </div>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-[0.125rem] font-manrope text-sm font-bold tracking-tight text-center hover:bg-primary/90 transition-colors active:scale-[0.98]"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
