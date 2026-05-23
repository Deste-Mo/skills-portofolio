"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon, MoonIcon, SunIcon } from "@/components/ui/icons";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";

export function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && resolvedTheme === "dark"
    ? "/logo/logo-white.png"
    : "/logo/logo-black.png";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-zinc-950/80 backdrop-blur-xl top-0 sticky z-50 border-b border-white/10"
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-8 h-16">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Image
                src={logoSrc}
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-white tracking-tighter active:scale-[0.98] transition-transform">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {siteConfig.mainNav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-manrope text-sm font-medium tracking-tight active:scale-[0.98] transition-transform ${
                  index === 0
                    ? "text-white border-b border-white pb-1"
                    : "text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                }`}
                style={index === 0 ? {} : { fontFamily: "var(--font-manrope)" }}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-[0.125rem] text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200 active:scale-[0.98]"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="bg-primary text-[#000000] px-4 py-2 rounded-[0.125rem] font-manrope text-sm font-bold tracking-tight active:scale-[0.98] transition-transform hover:bg-zinc-200"
            >
              Me contacter
            </a>
          </div>
        </div>

        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white rounded-[0.125rem] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-zinc-950 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-8 py-4 gap-1">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-manrope text-sm font-medium tracking-tight text-zinc-400 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-[0.125rem] transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/10">
                <button
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="flex items-center gap-2 font-manrope text-sm font-medium tracking-tight text-zinc-400 hover:text-white px-3 py-2 rounded-[0.125rem] hover:bg-white/5 transition-all"
                >
                  {resolvedTheme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
                  {resolvedTheme === "dark" ? "Mode clair" : "Mode sombre"}
                </button>
              </div>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 bg-primary text-[#000000] px-4 py-2.5 rounded-[0.125rem] font-manrope text-sm font-bold tracking-tight text-center hover:bg-zinc-200 transition-colors active:scale-[0.98]"
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
