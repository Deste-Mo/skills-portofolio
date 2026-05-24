"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { MailIcon, GithubIcon, LinkedinIcon } from "@/components/ui/icons"

function BoltIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function ContactIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="12" y2="14" />
    </svg>
  )
}

function MapPinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function AboutSection() {
  const contactItems = [
    { icon: MailIcon, label: "Email", value: "modestep20.aps1a@gmail.com", href: "mailto:modestep20.aps1a@gmail.com" },
    { icon: GithubIcon, label: "GitHub", value: "Deste-Mo", href: "https://github.com/Deste-Mo" },
    { icon: LinkedinIcon, label: "LinkedIn", value: "Modeste TOLOJANAHARY", href: "https://www.linkedin.com/in/modeste-nirina-tolojanahary-b844b61b7" },
    { icon: MapPinIcon, label: "Localisation", value: "Fianarantsoa, Madagascar" },
  ]

  const languages = ["Français", "Anglais", "Malagasy"]

  return (
    <section id="about" className="max-w-[1200px] mx-auto px-8 py-24 md:py-32">
      {/* Header */}
      <ScrollReveal animation="slide-up">
        <div className="mb-12 md:mb-16">
          <h2 className="font-manrope text-4xl md:text-[48px] font-semibold text-foreground mb-4" style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}>
            Apropos
          </h2>
          <p className="font-inter text-base md:text-lg text-muted-foreground max-w-2xl" style={{ lineHeight: "1.75" }}>
            Designer UI/UX et développeur Full-Stack passionné, je crée des expériences numériques
            qui allient esthétique et performance.
          </p>
        </div>
      </ScrollReveal>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* Bento Card 1: Wide — Profil */}
        <ScrollReveal animation="slide-up" delay={200} className="md:col-span-7 lg:col-span-8 order-1">
          <div className="bg-muted/20 border border-border/50 rounded-xl p-6 md:p-8 flex flex-col justify-between hover:bg-muted/30 transition-colors group h-full">
            <div className="mb-8 md:mb-12">
              <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <BoltIcon size={24} />
              </span>
              <h3 className="font-manrope text-xl md:text-[24px] font-semibold text-foreground mb-2" style={{ letterSpacing: "-0.01em" }}>
                Design & Développement
              </h3>
              <p className="font-inter text-sm md:text-base text-muted-foreground max-w-md" style={{ lineHeight: "1.6" }}>
                Du wireframe au déploiement, je maîtrise chaque étape du processus créatif et technique.
                Mon approche : comprendre vos besoins, designer l&apos;expérience idéale, puis la développer
                avec les technologies les plus adaptées.
              </p>
            </div>

            <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-muted/30 rounded-lg border border-border/30 relative overflow-hidden flex items-center justify-center">
              <Image
                src="/profil/mon-profil.webp"
                alt="Modeste TOLOJANAHARY"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />              <div className="absolute bottom-4 left-4 right-4 z-20 px-3 py-1 rounded text-black dark:text-white italic text-xs md:text-sm" style={{ lineHeight: "1.5", borderLeft: "4px solid", borderLeftColor: "currentColor" }}>
                &ldquo;Designer l&apos;expérience, développer la solution.&rdquo;
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bento Card 2: Tall — Contact */}
        <ScrollReveal animation="slide-up" delay={300} className="md:col-span-5 lg:col-span-4 order-2">
          <div className="bg-muted/20 border border-border/50 rounded-xl p-6 md:p-8 flex flex-col hover:bg-muted/30 transition-colors group h-full">
            <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 text-primary mb-4">
              <ContactIcon size={24} />
            </span>
            <h3 className="font-manrope text-xl md:text-[24px] font-semibold text-foreground mb-2" style={{ letterSpacing: "-0.01em" }}>
              Contact
            </h3>
            <p className="font-inter text-sm md:text-base text-muted-foreground mb-6 md:mb-8" style={{ lineHeight: "1.6" }}>
              Disponible pour discuter de votre projet.
            </p>

            <ul className="space-y-3 md:space-y-4 flex-grow">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="text-primary shrink-0">
                    <item.icon size={18} />
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-inter text-sm text-muted-foreground hover:text-foreground transition-colors truncate"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-inter text-sm text-muted-foreground">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 md:mt-8 pt-6 border-t border-border/50">
              <h4 className="font-manrope text-sm font-semibold text-foreground mb-3">Langues</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="font-inter text-xs font-medium text-muted-foreground bg-muted/30 border border-border/50 px-3 py-1.5 rounded-[0.125rem]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
