"use client"

import { useState } from "react"
import Image from "next/image"

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
    <section id="projets" className="py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-0.5 bg-[#00e5a3] inline-block"></span>
            <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#00e5a3] font-semibold">Portfolio Réalisations</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[36px] md:text-[46px] text-[#e1e2ec]">Projets</h2>
          <p className="font-inter text-[15px] md:text-[18px] text-[#9aa5b5] mt-2 max-w-2xl leading-relaxed">
            Une sélection de mes réalisations récentes
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-lg bg-[#181b22] border border-[#3b494b]/20 shrink-0" id="project-filters">
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
              className={`px-4 py-1.5 rounded-md font-mono text-[12px] uppercase transition-colors ${
                activeFilter === filter.value
                  ? "bg-[#00e5a3] text-[#0d0f14] font-semibold"
                  : "text-[#9aa5b5] hover:text-[#e1e2ec]"
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
            className="project-item rounded-xl bg-[#141824] border border-[#525c6c]/30 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-colors hover:border-[#00e5a3]/50"
            data-category={project.category}
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full bg-[#181b22] border border-[#3b494b]/20 font-mono text-[12px] uppercase tracking-[0.2em] font-semibold ${project.type.includes("IA") ? "text-[#00e5a3]" : project.title === "GHR" ? "text-[#93b4ff]" : "text-[#b6efff]"}`}>
                  {project.type}
                </span>
                <span className="font-mono text-[12px] text-[#525c6c]">{project.type === "Plateforme IA" ? "OpenAI / Production" : project.type === "Application" ? "Gestion Hôtelière & Restauration" : project.type === "Plateforme" ? "SIG & Topographie 3D" : "E-commerce Tourisme"}</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-[28px] text-[#e1e2ec]">{project.title}</h3>
              <p className="font-inter text-[15px] text-[#9aa5b5] leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-[#181b22] border border-[#3b494b]/20 font-mono text-[12px] text-[#00e5a3]">
                    {tag}
                  </span>
                ))}
              </div>

              {project.link ? (
                <div className="pt-4 flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00e5a3] text-[#0d0f14] font-manrope text-[14px] font-bold hover:bg-white transition-colors"
                  >
                    <span>{project.cta}</span>
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </div>
              ) : (
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  {project.links?.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#181b22] border border-[#3b494b]/20 text-[#e1e2ec] hover:text-[#00e5a3] hover:border-[#00e5a3]/40 transition-colors font-manrope text-[14px]"
                    >
                      <span>{link.label}</span>
                      <span className="material-symbols-outlined text-[18px]">{link.label.includes("Administration") ? "admin_panel_settings" : "group"}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-5 overflow-hidden rounded-xl bg-[#080a0e] border border-[#3b494b]/20 group">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                className="w-full h-64 object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
