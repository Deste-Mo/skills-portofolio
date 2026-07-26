"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon, MoonIcon, SunIcon, MailIcon, FlagFr, FlagGb } from "@/components/ui/icons";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/lib/i18n/context";
import type { Translations } from "@/lib/i18n/types";

function getSectionId(href: string): string {
  return href === "/" ? "hero" : href.slice(1);
}

export function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [langOpen, setLangOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { lang, setLang, t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const isServicePage = pathname.startsWith("/services/");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isServicePage) {
      setActiveSection("services");
      return;
    }
    const hash = window.location.hash.slice(1);
    setActiveSection(hash || "hero");
  }, [isServicePage, pathname]);

  useEffect(() => {
    if (isServicePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (window.scrollY < 80) {
        setActiveSection("hero");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isServicePage]);

  useEffect(() => {
    if (isServicePage) return;

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
  }, [isServicePage]);

  useEffect(() => {
    if (!langOpen) return
    const close = () => setLangOpen(false)
    window.addEventListener("click", close, { once: true })
    return () => window.removeEventListener("click", close)
  }, [langOpen])

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
    } else {
      router.push(`/${href}`);
    }
  }, [router]);

  const logoSrc = mounted && resolvedTheme === "dark"
    ? "/images/logo/logo-white.png"
    : "/images/logo/logo-black.png";

  const navLabelMap: Record<string, keyof Translations["nav"]> = {
    "/": "home",
    "#about": "about",
    "#skills": "skills",
    "#experiences": "experiences",
    "#services": "services",
    "#projects": "projects",
    "#contact": "contact",
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bg-background/80 backdrop-blur-xl top-0 fixed z-50 transition-all duration-300 w-full ${
        isScrolled ? "border-b border-border shadow-sm" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 lg:px-8 h-auto md:h-16 min-w-0">
        {/* Logo + Name stacked */}
        <Link href="/" className="flex flex-col items-center gap-0 group shrink-0 min-w-0 py-1">
          <div className="relative h-7 w-7 md:h-8 md:w-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Image
              src={logoSrc}
              alt="Logo"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </div>
          <span className="text-[10px] md:text-xs font-semibold text-foreground tracking-tight leading-tight">
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
                className={`font-manrope text-sm font-medium tracking-tight whitespace-nowrap px-3 py-1.5 rounded-[0.125rem] active:scale-[0.98] transition-all duration-200 relative ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
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

          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen) }}
              className="md:w-10 md:h-10 flex items-center justify-center p-2 rounded-[0.125rem] text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 active:scale-[0.98]"
              aria-label="Select language"
            >
              {lang === "fr" ? <FlagFr size={20} /> : <FlagGb size={20} />}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 w-40 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50">
                <button
                  onClick={() => { setLang("fr"); setLangOpen(false) }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-muted/50 ${lang === "fr" ? "text-foreground font-semibold" : "text-muted-foreground"}`}
                >
                  <FlagFr size={18} />
                  Français
                  {lang === "fr" && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                </button>
                <button
                  onClick={() => { setLang("en"); setLangOpen(false) }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-muted/50 ${lang === "en" ? "text-foreground font-semibold" : "text-muted-foreground"}`}
                >
                  <FlagGb size={18} />
                  English
                  {lang === "en" && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                </button>
              </div>
            )}
          </div>
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
                    {t.nav[navLabelMap[item.href]]}
                  </a>
                );
              })}
              <div className="flex items-center justify-between pt-3 mt-2 border-t border-border">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-[0.125rem] text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                    aria-label={resolvedTheme === "dark" ? t.theme.light : t.theme.dark}
                  >
                    {mounted ? (
                      resolvedTheme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />
                    ) : (
                      <div className="w-[18px] h-[18px]" />
                    )}
                  </button>
                  <button
                    onClick={() => setLang("fr")}
                    className={`p-1.5 rounded-[0.125rem] transition-all ${lang === "fr" ? "ring-1 ring-primary bg-muted/50" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}
                    aria-label="Français"
                  >
                    <FlagFr size={18} />
                  </button>
                  <button
                    onClick={() => setLang("en")}
                    className={`p-1.5 rounded-[0.125rem] transition-all ${lang === "en" ? "ring-1 ring-primary bg-muted/50" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}
                    aria-label="English"
                  >
                    <FlagGb size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
