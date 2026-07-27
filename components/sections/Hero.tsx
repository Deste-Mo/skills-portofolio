"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRightIcon, SendIcon, MailIcon, GithubIcon, LinkedinIcon } from "@/components/ui/icons"
import { Download, Eye } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { useTranslation } from "@/lib/i18n/context"

export function Hero() {
  const { t } = useTranslation()
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 600], [1, 0.85])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])

  return (
    <section id="hero" className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 overflow-hidden bg-background z-0 pt-12 md:pt-16 lg:pt-20">
      <motion.div style={{ scale, opacity }} className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
        <ScrollReveal animation="slide-up" delay={100}>
          <span className="border border-border text-muted-foreground text-[11px] sm:text-sm font-inter px-2.5 sm:px-3 py-1 rounded-full mb-6 sm:mb-8 tracking-[0.05em] uppercase flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shrink-0 animate-pulse"></span>
            <span className="truncate">{t.hero.badge}</span>
          </span>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={200}>
          <h1
            className="w-full max-w-6xl mb-4 sm:mb-6 text-foreground font-manrope text-[28px] sm:text-4xl md:text-5xl lg:text-7xl font-bold px-2 sm:px-0"
            style={{ lineHeight: "1.1", letterSpacing: "-0.02em" }}
          >
            {t.hero.name}
            <br />
            <span className="text-primary/60 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">{t.hero.role}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={300}>
          <p
            className="w-full max-w-2xl mb-6 sm:mb-10 text-muted-foreground font-inter text-sm sm:text-base md:text-lg px-2 sm:px-0"
            style={{ lineHeight: "1.75", fontWeight: 400 }}
          >
            {t.hero.description}
          </p>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Link
              href="#projects"
              className="group flex items-center gap-2 bg-primary text-primary-foreground font-semibold shadow-sm px-6 py-3 sm:px-4 sm:py-3 rounded-full font-inter text-sm sm:text-[16px] active:scale-[0.96] transition-all duration-300"
            >
              <Eye size={20} className="hidden sm:block sm:group-hover:hidden shrink-0" />
              <span className="sm:overflow-hidden sm:max-w-0 sm:group-hover:max-w-[200px] sm:opacity-0 sm:group-hover:opacity-100 sm:transition-all sm:duration-300 sm:whitespace-nowrap">
                {t.hero.viewWork}
              </span>
              <ArrowRightIcon size={20} className="shrink-0 sm:hidden sm:group-hover:inline" />
            </Link>
            <Link
              href="#contact"
              className="group flex items-center gap-2 bg-primary text-primary-foreground font-semibold shadow-sm px-6 py-3 sm:px-4 sm:py-3 rounded-full font-inter text-sm sm:text-[16px] active:scale-[0.96] transition-all duration-300"
            >
              <span className="sm:overflow-hidden sm:max-w-0 sm:group-hover:max-w-[200px] sm:opacity-0 sm:group-hover:opacity-100 sm:transition-all sm:duration-300 sm:whitespace-nowrap">
                {t.hero.letsTalk}
              </span>
              <SendIcon size={20} className="shrink-0" />
            </Link>
            <a
              href="/doc/CV_Modeste_TOLOJANAHARY.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-primary text-primary-foreground font-semibold shadow-sm px-6 py-3 sm:px-4 sm:py-3 rounded-full font-inter text-sm sm:text-[16px] active:scale-[0.96] transition-all duration-300"
            >
              <span className="sm:overflow-hidden sm:max-w-0 sm:group-hover:max-w-[200px] sm:opacity-0 sm:group-hover:opacity-100 sm:transition-all sm:duration-300 sm:whitespace-nowrap">
                {t.hero.cv}
              </span>
              <Download size={20} className="shrink-0" />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={500}>
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-10 md:mt-16">
            <a
              href="mailto:modestep20.aps1a@gmail.com"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-[0.125rem] border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              aria-label="Email"
            >
              <MailIcon size={18} />
            </a>
            <a
              href="https://github.com/Deste-Mo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-[0.125rem] border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/modeste-nirina-tolojanahary-b844b61b7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-[0.125rem] border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </ScrollReveal>
      </motion.div>
    </section>
  )
}
