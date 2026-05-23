"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon, MoonIcon, SunIcon } from "@/components/ui/icons";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";

export function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
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
      className={`bg-background/80 backdrop-blur-xl top-0 sticky z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-border shadow-sm" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-8 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative h-8 w-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Image
              src={logoSrc}
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold text-foreground tracking-tighter active:scale-[0.98] transition-transform">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-1">
          {siteConfig.mainNav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`font-manrope text-sm font-medium tracking-tight px-3 py-1.5 rounded-[0.125rem] active:scale-[0.98] transition-all duration-200 ${
                index === 0
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-[0.125rem] text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 active:scale-[0.98]"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-[0.125rem] font-manrope text-sm font-bold tracking-tight active:scale-[0.98] transition-transform hover:bg-primary/90"
          >
            Me contacter
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
              {siteConfig.mainNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-manrope text-sm font-medium tracking-tight text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3 py-2.5 rounded-[0.125rem] transition-all duration-200"
                >
                  {item.title}
                </a>
              ))}
              <div className="flex items-center justify-between pt-3 mt-2 border-t border-border">
                <button
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="flex items-center gap-2 font-manrope text-sm font-medium tracking-tight text-muted-foreground hover:text-foreground px-3 py-2 rounded-[0.125rem] hover:bg-muted/50 transition-all"
                >
                  {resolvedTheme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
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
