"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, ExternalLink, Filter } from "lucide-react"

const projectsData = [
  {
    type: "Plateforme IA",
    title: "Qui fait quoi",
    description: "Plateforme IA pour diagnostiquer les problèmes de logement locatif avec assistance en temps réel via GPT / OpenAI. Analyse rapide des baux, détection des responsabilités locataire/bailleur et conseils automatisés.",
    image: "/images/projects/qui-fait-qoui.png",
    tags: ["Next.js", "OpenAI API", "GPT", "Docker", "PostgreSQL", "Git"],
    category: "ia web",
    link: "https://qui-fait-qoui-test.vercel.app/",
    cta: "Voir le site",
  },
  {
    type: "Application",
    title: "GHR",
    description: "Plateforme web/mobile de gestion hôtelière et restauration : comptes du personnel, planning, suivi des activités et administration des établissements. Déploiement multi-tenant sécurisé.",
    image: "/images/projects/ghr.png",
    tags: ["Next.js", "FastAPI", "Flutter", "API REST", "PostgreSQL", "Git"],
    category: "web mobile",
    links: [
      { label: "Portail Personnel", href: "https://ghr-personnel.itdcmada.com/" },
      { label: "Portail Administration", href: "https://admin-etablissement.itdcmada.com" },
    ],
  },
  {
    type: "Plateforme",
    title: "Altigéo",
    description: "Plateforme de traitement et d’analyse de données géographiques : maquettes 3D, plans topographiques et SIG. Manipulation fluide de jeux de données massifs avec interface réactive.",
    image: "/images/projects/altigeo.png",
    tags: ["Next.js", "API REST", "PostgreSQL", "Git"],
    category: "web",
    link: "https://altigeo.mg/",
    cta: "Accéder à Altigéo",
  },
  {
    type: "Site web",
    title: "El Madagascar Tours",
    description: "Site de voyage proposant des circuits 4x4 à Madagascar, itinéraires sur mesure et réservation en ligne. Optimisation SEO, performances de rendu instantanées et expérience immersive.",
    image: "/images/projects/elmadagascar-tour.png",
    tags: ["Next.js", "API REST", "PostgreSQL", "Git"],
    category: "web",
    link: "https://elmadagascar-tours.com/",
    cta: "Découvrir le site",
  },
]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category.split(" ").includes(activeFilter))

  return (
    <section id="projets" className="py-20 text-[#0f172a] transition-colors duration-300 dark:text-[#e1e2ec]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="inline-block h-0.5 w-8 bg-[#059669] dark:bg-[#00e5a3]"></span>
              <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-[#059669] dark:text-[#00e5a3]">Portfolio Réalisations</span>
            </div>
            <h2 className="font-sans text-[36px] text-[#0f172a] md:text-[46px] dark:text-[#e1e2ec]">Projets</h2>
            <p className="mt-2 max-w-3xl font-sans text-[15px] leading-relaxed text-[#475569] md:text-[18px] dark:text-[#9aa5b5]">
              Une sélection de mes réalisations récentes
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-2 rounded-lg border border-[#dfe4ea] bg-white p-1.5 shadow-sm dark:border-[#3b494b]/20 dark:bg-[#181b22]" id="project-filters">
            {[
              { label: "Tous", value: "all" },
              { label: "Web", value: "web" },
              { label: "Mobile", value: "mobile" },
              { label: "IA", value: "ia" },
            ].map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-md px-4 py-1.5 font-mono text-[12px] uppercase transition-colors ${
                  activeFilter === filter.value
                    ? "bg-[#059669] text-white dark:bg-[#00e5a3] dark:text-[#0d0f14]"
                    : "text-[#475569] hover:text-[#0f172a] dark:text-[#9aa5b5] dark:hover:text-[#e1e2ec]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8" id="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title + index}
              className="project-item grid grid-cols-1 items-center gap-8 rounded-xl border border-[#dfe4ea] bg-white p-6 shadow-sm transition-colors hover:border-[#059669]/40 dark:border-[#525c6c]/30 dark:bg-[#141824] sm:p-8 lg:grid-cols-12"
              data-category={project.category}
            >
              <div className="space-y-4 lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className={`rounded-full border border-[#dfe4ea] bg-[#f8fafc] px-3 py-1 font-mono text-[12px] uppercase tracking-[0.2em] font-semibold dark:border-[#3b494b]/20 dark:bg-[#181b22] ${project.type.includes("IA") ? "text-[#059669] dark:text-[#00e5a3]" : project.title === "GHR" ? "text-[#2563eb] dark:text-[#93b4ff]" : "text-[#0f172a] dark:text-[#e1e2ec]"}`}>
                    {project.type}
                  </span>
                  <span className="font-mono text-[12px] text-[#64748b] dark:text-[#525c6c]">{project.type === "Plateforme IA" ? "OpenAI / Production" : project.type === "Application" ? "Gestion Hôtelière & Restauration" : project.type === "Plateforme" ? "SIG & Topographie 3D" : "E-commerce Tourisme"}</span>
                </div>

                <h3 className="font-sans text-[28px] text-[#0f172a] dark:text-[#e1e2ec]">{project.title}</h3>
                <p className="font-sans text-[15px] leading-relaxed text-[#475569] dark:text-[#9aa5b5]">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded border border-[#dfe4ea] bg-[#f8fafc] px-2.5 py-1 font-mono text-[12px] text-[#059669] dark:border-[#3b494b]/20 dark:bg-[#181b22] dark:text-[#00e5a3]">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <div className="flex items-center gap-4 pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#059669] px-5 py-2.5 font-sans text-[14px] font-bold text-white transition-colors hover:bg-[#047857] dark:bg-[#00e5a3] dark:text-[#0d0f14] dark:hover:bg-white"
                    >
                      <span>{project.cta}</span>
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    {project.links?.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#dfe4ea] bg-[#f8fafc] px-4 py-2.5 font-sans text-[14px] text-[#0f172a] transition-colors hover:border-[#059669] hover:text-[#059669] dark:border-[#3b494b]/20 dark:bg-[#181b22] dark:text-[#e1e2ec] dark:hover:text-[#00e5a3]"
                      >
                        <span>{link.label}</span>
                        <ExternalLink size={16} />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="overflow-hidden rounded-xl border border-[#dfe4ea] bg-[#f8fafc] group dark:border-[#3b494b]/20 dark:bg-[#080a0e] lg:col-span-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="h-64 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}
