"use client"

import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"
import { getLocalizedExperiences, getLocalizedFormations } from "@/config/experiences"
import { useTranslation } from "@/lib/i18n/context"

export function ExperiencesSection() {
  const { t, lang } = useTranslation()
  const experiences = getLocalizedExperiences(lang)
  const formations = getLocalizedFormations(lang)
  return (
    <section id="experiences" className="max-w-[1200px] mx-auto px-8 py-24 md:py-32">
      <ScrollReveal animation="slide-up">
        <div className="mb-12 md:mb-16">
          <h2
            className="font-manrope text-4xl md:text-[48px] font-semibold text-foreground mb-4"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            {t.experiences.title}
          </h2>
          <p
            className="font-inter text-base md:text-lg text-muted-foreground max-w-2xl"
            style={{ lineHeight: "1.75" }}
          >
            {t.experiences.description}
          </p>
        </div>
      </ScrollReveal>

      <div className="relative mb-16 md:mb-24">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-0.5"></div>
        <div className="space-y-10 md:space-y-14">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} animation="slide-up" delay={index * 100}>
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background md:-translate-x-1.5 mt-2 z-10"></div>
                <div className={`pl-8 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-10" : "md:pl-10 md:ml-auto"}`}>
                  <div className="bg-muted/20 border border-border/50 rounded-xl p-5 md:p-6 hover:bg-muted/30 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-full">
                        <h3 className="font-manrope text-base md:text-lg font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-sm text-primary font-medium">{exp.company}</p>
                      </div>
                      <Briefcase className="h-5 w-5 text-primary/40 shrink-0 mt-0.5" />
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="font-inter text-sm text-muted-foreground leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-inter text-[11px] font-medium text-muted-foreground bg-muted/30 border border-border/50 px-2.5 py-1 rounded-[0.125rem]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal animation="slide-up">
        <div className="mb-10 md:mb-12">
          <h2
            className="font-manrope text-4xl md:text-[48px] font-semibold text-foreground mb-4"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            {t.experiences.formations}
          </h2>
          <p
            className="font-inter text-base md:text-lg text-muted-foreground max-w-2xl"
            style={{ lineHeight: "1.75" }}
          >
            {t.experiences.formationsDesc}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {formations.map((f, index) => (
          <ScrollReveal key={index} animation="slide-up" delay={index * 100}>
            <div className="bg-muted/20 border border-border/50 rounded-xl p-5 md:p-6 hover:bg-muted/30 transition-colors h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground">{f.period}</span>
              </div>
              <h4 className="font-manrope text-sm font-semibold text-foreground mb-1">{f.degree}</h4>
              <p className="font-inter text-sm text-muted-foreground mt-auto">{f.school}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
