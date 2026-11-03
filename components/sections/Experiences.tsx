"use client"

import { ArrowRight, GraduationCap, MapPin } from "lucide-react"
import { useTranslation } from "@/lib/i18n/context"

export function ExperiencesSection() {
  const { t } = useTranslation()

  const experiences = [
    {
      role: "Développeur Full stack & DevOps",
      company: "@ Mobile Sys",
      period: "Janvier 2026 - Présent",
      details: [
        "Développement full stack, conteneurisation et déploiement sur VPS d’une plateforme de services d’assistance pour personnes âgées, en situation de handicap ou isolées.",
        "Développement frontend d’une application de réservation de voyages intégrant transports et hébergements.",
      ],
      tags: ["Flutter", "Next.js", "GraphQL", "Django", "Docker", "VPS"],
    },
    {
      role: "Développeur Frontend & DevOps",
      company: "@ François Digital",
      period: "Juin 2025 - Mars 2026",
      details: [
        "Développement et déploiement d’une application de prise de rendez-vous hospitaliers et de gestion des consultations.",
        "Développement et mise en production d’une plateforme de réservation de voyages avec paiement en ligne.",
        "Développement et déploiement d’une application de réservation multi-services (train, bus et hôtel).",
        "Conception et déploiement d’une plateforme dédiée aux formations, concours et parcours professionnels.",
      ],
      tags: ["Next.js", "Flutter", "API REST", "VPS"],
    },
    {
      role: "Stagiaire puis Développeur Full stack & DevOps",
      company: "@ NJCam Sys",
      period: "2023 - 2025",
      details: [
        "Développement full stack et déploiement d’une application web et mobile de gestion hôtelière et de restauration.",
        "Développement full stack et mise en production d’une application web et mobile de type réseau social dédiée à la collaboration autour des marchandises.",
        "Participation technique en tant qu’assistant lead dev (appui à la coordination technique, aux choix de développement et de déploiement).",
      ],
      tags: ["Flutter", "React Native", "Node.js", "Express", "API REST", "VPS"],
    },
    {
      role: "Stagiaire (Développeur Full stack)",
      company: "@ IMIARY",
      period: "Mars - Juin 2022",
      details: [
        "Développement d’une plateforme de location, vente et réservation de bateaux avec paiement en ligne.",
      ],
      tags: ["PHP", "Laravel", "React Native", "Node.js", "API REST", "PostgreSQL"],
    },
  ]

  const formations = t.experiences.formationsList

  return (
    <section id="experiences" className="w-full py-20 text-[#0f172a] transition-colors duration-300 dark:bg-[#0d0f14] dark:text-[#e1e2ec]">
      <div className="mb-12">
        <div className="mb-2 flex items-center gap-3">
          <span className="inline-block h-0.5 w-8 bg-[#059669] dark:bg-[#00e5a3]"></span>
          <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-[#059669] dark:text-[#00e5a3]">
            {t.experiences.journeyBadge}
          </span>
        </div>
        <h2 className="font-sans text-[36px] text-[#0f172a] md:text-[46px] dark:text-[#e1e2ec]">{t.experiences.title}</h2>
        <p className="mt-2 max-w-3xl font-sans text-[15px] leading-relaxed text-[#475569] md:text-[18px] dark:text-[#9aa5b5]">
          {t.experiences.description}
        </p>
      </div>

      <div className="relative space-y-8 pl-6 sm:pl-10 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#dfe4ea] before:content-[''] sm:before:left-4 dark:before:bg-[#3b494b]/40">
        {experiences.map((exp) => (
          <div key={exp.company} className="group relative">
            <div className="absolute -left-6 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-[#f5f7f9] transition-colors group-hover:bg-[#059669] sm:-left-10 dark:bg-[#141824] dark:ring-[#0d0f14] dark:group-hover:bg-[#00e5a3]">
              <div className="h-2 w-2 rounded-full bg-[#059669] dark:bg-[#00e5a3]"></div>
            </div>

            <div className="rounded-xl border border-[#dfe4ea] bg-white p-6 shadow-sm transition-colors hover:border-[#059669]/40 dark:border-[#525c6c]/30 dark:bg-[#141824] sm:p-8">
              <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <h3 className="flex flex-wrap items-center gap-2 font-sans text-[20px] text-[#0f172a] dark:text-[#e1e2ec]">
                    <span>{exp.role}</span>
                    <span className="font-mono text-[12px] font-normal text-[#059669] dark:text-[#00e5a3]">{exp.company}</span>
                  </h3>
                </div>
                <span className="shrink-0 self-start rounded border border-[#dfe4ea] bg-[#f8fafc] px-3 py-1 font-mono text-[12px] font-semibold text-[#059669] dark:border-[#3b494b]/30 dark:bg-[#181b22] dark:text-[#00e5a3] sm:self-auto">
                  {exp.period}
                </span>
              </div>

              <ul className="mb-5 space-y-2.5 font-sans text-[15px] text-[#475569] dark:text-[#9aa5b5]">
                {exp.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <ArrowRight size={16} className="mt-1 shrink-0 text-[#059669] dark:text-[#00e5a3]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="rounded border border-[#dfe4ea] bg-[#f8fafc] px-2.5 py-1 font-mono text-[12px] text-[#059669] dark:border-[#3b494b]/20 dark:bg-[#181b22] dark:text-[#00e5a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-[#dfe4ea] pt-12 dark:border-[#3b494b]/20">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <GraduationCap size={18} className="text-[#059669] dark:text-[#00e5a3]" />
            <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-[#059669] dark:text-[#00e5a3]">{t.experiences.formations}</span>
          </div>
          <h3 className="font-sans text-[28px] text-[#0f172a] dark:text-[#e1e2ec]">{t.experiences.formations}</h3>
          <p className="mt-1 font-sans text-[13px] text-[#475569] dark:text-[#9aa5b5]">{t.experiences.formationsDesc}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {formations.map((formation) => (
            <div key={formation.degree} className="flex h-full flex-col justify-between rounded-xl border border-[#dfe4ea] bg-white p-6 shadow-sm dark:border-[#525c6c]/30 dark:bg-[#141824]">
              <div className="space-y-3">
                <span className="inline-block rounded border border-[#dfe4ea] bg-[#f8fafc] px-2.5 py-1 font-mono text-[12px] font-semibold text-[#059669] dark:border-[#3b494b]/20 dark:bg-[#181b22] dark:text-[#00e5a3]">
                  {formation.period}
                </span>
                <h4 className="font-sans text-[20px] leading-snug text-[#0f172a] dark:text-[#e1e2ec]">{formation.degree}</h4>
              </div>
              <p className="mt-4 flex items-center gap-2 border-t border-[#dfe4ea] pt-4 font-sans text-[13px] text-[#475569] dark:border-[#3b494b]/20 dark:text-[#9aa5b5]">
                <MapPin size={16} className="text-[#64748b] dark:text-[#525c6c]" />
                {formation.school}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
