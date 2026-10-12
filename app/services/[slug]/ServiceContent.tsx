"use client"

import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Box,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe,
  LayoutTemplate,
  MonitorSmartphone,
  Palette,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { getLocalizedService, getLocalizedServices } from "@/config/services"
import { useTranslation } from "@/lib/i18n/context"

function getTechnologyIcon(name: string) {
  const normalized = name.toLowerCase()

  if (normalized.includes("next") || normalized.includes("react") || normalized.includes("tailwind")) return LayoutTemplate
  if (normalized.includes("typescript") || normalized.includes("javascript") || normalized.includes("code")) return Code2
  if (normalized.includes("docker") || normalized.includes("container") || normalized.includes("nginx")) return Box
  if (normalized.includes("postgres") || normalized.includes("mysql") || normalized.includes("sql") || normalized.includes("database")) return Database
  if (normalized.includes("github") || normalized.includes("git")) return GitBranch
  if (normalized.includes("api") || normalized.includes("graphql") || normalized.includes("rest") || normalized.includes("webhook")) return Workflow
  if (normalized.includes("firebase") || normalized.includes("cloud") || normalized.includes("vps") || normalized.includes("linux")) return Cloud
  if (normalized.includes("figma") || normalized.includes("figjam") || normalized.includes("design") || normalized.includes("prototype") || normalized.includes("wireframe") || normalized.includes("access")) return Palette
  if (normalized.includes("node") || normalized.includes("express") || normalized.includes("laravel") || normalized.includes("fastapi") || normalized.includes("django")) return Server
  if (normalized.includes("flutter") || normalized.includes("react native") || normalized.includes("expo") || normalized.includes("mobile") || normalized.includes("ios") || normalized.includes("android")) return Smartphone
  if (normalized.includes("auth") || normalized.includes("jwt") || normalized.includes("security") || normalized.includes("https") || normalized.includes("ssl") || normalized.includes("dns")) return ShieldCheck
  if (normalized.includes("seo") || normalized.includes("performance") || normalized.includes("ux") || normalized.includes("responsive") || normalized.includes("optimisation")) return MonitorSmartphone
  if (normalized.includes("globe") || normalized.includes("web") || normalized.includes("frontend") || normalized.includes("interface")) return Globe
  if (normalized.includes("spark") || normalized.includes("micro") || normalized.includes("animation")) return Sparkles
  if (normalized.includes("branch") || normalized.includes("workflow")) return GitBranch

  return Rocket
}

export function ServiceContent({ slug }: { slug: string }) {
  const { t, lang } = useTranslation()
  const service = getLocalizedService(slug, lang)
  const allServices = getLocalizedServices(lang)
  const otherServices = allServices.filter(
    (item, index, list) => item.slug !== slug && list.findIndex((entry) => entry.slug === item.slug) === index,
  )
  if (!service) return null
  const ServiceIcon = service.icon

  return (
    <main className="max-w-[1200px] mx-auto px-8 py-24 md:py-32">
      <Link
        href="/#services"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.service.back}
      </Link>

      <ScrollReveal animation="slide-up">
        <div className="mb-16 md:mb-20">
          <h1
            className="font-manrope text-4xl md:text-[48px] font-semibold text-foreground mb-4 max-w-3xl flex items-center gap-4"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            <ServiceIcon className="h-8 w-8 md:h-10 md:w-10 text-primary shrink-0" />
            {service.title}
          </h1>
          <p
            className="font-inter text-base md:text-lg text-muted-foreground max-w-2xl"
            style={{ lineHeight: "1.75" }}
          >
            {service.heroDescription}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="slide-up">
        <section className="mb-16 md:mb-20">
          <h2
            className="font-manrope text-2xl md:text-3xl font-semibold text-foreground mb-8"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            {t.service.offerings}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.offerings.map((offer, i) => (
              <ScrollReveal key={offer} animation="slide-up" delay={i * 50}>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/20 border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-sm text-foreground">{offer}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="slide-up">
        <section className="mb-16 md:mb-20">
          <h2
            className="font-manrope text-2xl md:text-3xl font-semibold text-foreground mb-8"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            {t.service.technologies}
          </h2>

          <div className="space-y-6">
            {service.technologies.map((tech, i) => (
              <ScrollReveal key={tech.category} animation="slide-up" delay={i * 70}>
                <div className="bg-muted/20 border border-border/50 rounded-xl p-4 md:p-5">
                  <span className="font-manrope text-xs font-semibold text-muted-foreground uppercase tracking-[0.14em] mb-3 block">
                    {tech.category}
                  </span>

                  <div className="flex flex-wrap gap-3">
                    {tech.items.map((item) => {
                      const Icon = getTechnologyIcon(item.name)

                      return (
                        <div
                          key={item.name}
                          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-2 text-sm text-foreground shadow-sm"
                        >
                          <Icon className="h-4 w-4 text-primary" />
                          <span className="font-inter text-sm">{item.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="slide-up">
        <section className="mb-16 md:mb-20">
          <h2
            className="font-manrope text-2xl md:text-3xl font-semibold text-foreground mb-8"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            {t.service.process}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <ScrollReveal key={step.step} animation="slide-up" delay={i * 100}>
                <div className="bg-muted/20 border border-border/50 rounded-xl p-6 relative flex flex-col h-full">
                  <span className="font-manrope text-4xl font-bold text-primary/20 block mb-4">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <h3 className="font-manrope text-base font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {otherServices.length > 0 && (
        <ScrollReveal animation="slide-up">
          <section className="mb-16 md:mb-20">
            <h2
              className="font-manrope text-2xl md:text-3xl font-semibold text-foreground mb-8"
              style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
            >
              {t.service.otherServices}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherServices.map((other, i) => {
                const OtherIcon = other.icon
                return (
                  <ScrollReveal key={other.slug} animation="slide-up" delay={i * 100} className="h-full">
                    <Link
                      href={`/services/${other.slug}`}
                      className="group bg-muted/20 border border-border/50 rounded-xl p-6 hover:bg-muted/30 hover:scale-[1.02] transition-all duration-300 flex flex-col h-full"
                    >
                      <OtherIcon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-manrope text-sm font-semibold text-foreground mb-2">{other.title}</h3>
                      <p className="font-inter text-xs text-muted-foreground leading-relaxed flex-1 mb-3">
                        {other.description}
                      </p>
                      <div className="flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                        {t.services.learnMore}
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </Link>
                  </ScrollReveal>
                )
              })}
            </div>
          </section>
        </ScrollReveal>
      )}

      <ScrollReveal animation="slide-up">
        <section className="bg-muted/20 border border-border/50 rounded-xl p-8 md:p-12 text-center">
          <h2
            className="font-manrope text-2xl md:text-3xl font-semibold text-foreground mb-4"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            {t.service.cta.title}
          </h2>
          <p
            className="font-inter text-base text-muted-foreground mb-8 max-w-xl mx-auto"
            style={{ lineHeight: "1.75" }}
          >
            {t.service.cta.description}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-inter text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {t.service.cta.contact}
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 font-inter text-sm font-medium text-foreground hover:bg-muted/30 transition-colors"
            >
              {t.service.cta.projects}
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
