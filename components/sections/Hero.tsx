"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRightIcon, SendIcon, MailIcon, GithubIcon, LinkedinIcon } from "@/components/ui/icons"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function Hero() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 600], [1, 0.85])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])

  return (
    <section id="hero" className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center px-8 overflow-hidden bg-background z-0">
      <motion.div style={{ scale, opacity }} className="max-w-[1200px] mx-auto flex flex-col items-center">
        <ScrollReveal animation="slide-up" delay={100}>
          <span className="bg-muted/50 border border-border text-muted-foreground text-sm font-inter px-3 py-1 rounded-full mb-8 tracking-[0.05em] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            À l&apos;écoute d&apos;opportunités
          </span>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={200}>
          <h1
            className="max-w-6xl mb-6 text-foreground font-manrope text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            style={{ lineHeight: "1.1", letterSpacing: "-0.02em" }}
          >
            Modeste TOLOJANAHARY
            <br />
            <span className="text-muted-foreground">Développeur & Designer UI</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={300}>
          <p
            className="max-w-2xl mb-10 text-muted-foreground font-inter text-base sm:text-lg"
            style={{ lineHeight: "1.75", fontWeight: 400 }}
          >
            Je conçois et développe des interfaces modernes, interactives et accessibles.
            Mon objectif : transformer des problèmes complexes en solutions élégantes.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={400}>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="#projects"
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-[0.125rem] font-manrope text-[16px] font-semibold active:scale-[0.98] transition-transform hover:bg-primary/90 flex items-center justify-center gap-2"
              style={{ letterSpacing: "-0.01em" }}
            >
              Voir mon travail
              <ArrowRightIcon size={20} />
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto bg-transparent border border-border text-foreground px-8 py-4 rounded-[0.125rem] font-manrope text-[16px] font-semibold active:scale-[0.98] transition-colors hover:bg-muted/50 flex items-center justify-center gap-2"
              style={{ letterSpacing: "-0.01em" }}
            >
              <SendIcon size={20} />
              Discutons
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={500}>
          <div className="flex items-center justify-center gap-4 mt-10 md:mt-16">
            <a
              href="mailto:modestep20.aps1a@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-[0.125rem] border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              aria-label="Email"
            >
              <MailIcon size={18} />
            </a>
            <a
              href="https://github.com/Deste-Mo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-[0.125rem] border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/modeste-nirina-tolojanahary-b844b61b7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-[0.125rem] border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
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
