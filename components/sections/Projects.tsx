"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Code, ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { useTranslation } from "@/lib/i18n/context"

type Category = "all" | "web" | "mobile" | "ai"

interface ProjectData {
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  type: string
  typeEn: string
  image: string
  tags: string[]
  categories: Category[]
  liveUrl: string
  githubUrl?: string
}

const projectsData: ProjectData[] = [
  {
    title: "El Madagascar Tours",
    titleEn: "El Madagascar Tours",
    description: "Site web de voyage et circuits 4x4 à Madagascar. Guides locaux, circuits sur mesure, tourisme durable et réservation en ligne.",
    descriptionEn: "Travel website for 4x4 tours in Madagascar. Local guides, custom itineraries, sustainable tourism, and online booking.",
    type: "Site web",
    typeEn: "Website",
    image: "/images/projects/elmadagascar-tour.png",
    tags: ["Next.js", "API REST", "PostgreSQL", "Git"],
    categories: ["web"],
    liveUrl: "https://elmadagascar-tours.com/",
  },
  {
    title: "Glib - Landing Page",
    titleEn: "Glib - Landing Page",
    description: "Landing page pour Glib, une application de voyage IA qui crée des itinéraires personnalisés, alertes en temps réel et réservation de restaurants.",
    descriptionEn: "Landing page for Glib, an AI travel app that creates custom itineraries, real-time alerts, and restaurant booking.",
    type: "Page d&apos;atterrissage",
    typeEn: "Landing Page",
    image: "/images/projects/glib.png",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Git"],
    categories: ["web"],
    liveUrl: "https://www.glib.fr/",
  },
  {
    title: "Glib - Application",
    titleEn: "Glib - Application",
    description: "Application web et mobile de voyage avec recherche de destinations, activités, hôtels et réservation multi-services.",
    descriptionEn: "Web and mobile travel application with destination search, activities, hotels, and multi-service booking.",
    type: "Application",
    typeEn: "Application",
    image: "/images/projects/glib-app.png",
    tags: ["Next.js", "React Native", "GraphQL", "PostgreSQL", "Git"],
    categories: ["web", "mobile", "ai"],
    liveUrl: "https://web.dev.glib.fr/",
  },
  {
    title: "GHR - Personnel",
    titleEn: "GHR - Personnel",
    description: "Plateforme de gestion hôtelière et restauration pour le personnel : comptes, planning et suivi des activités.",
    descriptionEn: "Hotel and restaurant management platform for staff: accounts, scheduling, and activity tracking.",
    type: "Application",
    typeEn: "Application",
    image: "/images/projects/ghr.png",
    tags: ["Next.js", "FastAPI", "Flutter", "API REST", "PostgreSQL", "Git"],
    categories: ["web", "mobile"],
    liveUrl: "https://ghr-personnel.itdcmada.com/",
  },
  {
    title: "GHR - Administration",
    titleEn: "GHR - Administration",
    description: "Interface d'administration pour la gestion des établissements hôteliers : utilisateurs, établissements et configurations.",
    descriptionEn: "Admin interface for hotel management: users, establishments, and configurations.",
    type: "Application",
    typeEn: "Application",
    image: "/images/projects/ghr-admin.png",
    tags: ["Next.js", "FastAPI", "Flutter", "API REST", "PostgreSQL", "Git"],
    categories: ["web", "mobile"],
    liveUrl: "https://admin-etablissement.itdcmada.com",
  },
  {
    title: "Altigéo",
    titleEn: "Altigéo",
    description: "Plateforme de traitement et analyse de données géographiques : maquettes 3D, plans topographiques et SIG.",
    descriptionEn: "Geographic data processing platform: 3D models, topographic maps, and GIS.",
    type: "Plateforme",
    typeEn: "Platform",
    image: "/images/projects/altigeo.png",
    tags: ["Next.js", "API REST", "PostgreSQL", "Git"],
    categories: ["web"],
    liveUrl: "https://altigeo.mg/",
  },
  {
    title: "Qui fait quoi",
    titleEn: "Qui fait quoi",
    description: "Plateforme IA pour diagnostiquer les problèmes de logement locatif. Assistance en temps réel avec GPT et OpenAI.",
    descriptionEn: "AI platform for diagnosing rental housing issues. Real-time assistance with GPT and OpenAI.",
    type: "Plateforme IA",
    typeEn: "AI Platform",
    image: "/images/projects/qui-fait-qoui.png",
    tags: ["Next.js", "OpenAI API", "GPT", "Docker", "PostgreSQL", "Git"],
    categories: ["web", "ai"],
    liveUrl: "https://qui-fait-qoui-test.vercel.app/",
  },
  {
    title: "Gotake",
    titleEn: "Gotake",
    description: "Application mobile de e-commerce et expédition. Développement frontend React Native et iOS.",
    descriptionEn: "Mobile e-commerce and shipping application. React Native and iOS frontend development.",
    type: "Application mobile",
    typeEn: "Mobile App",
    image: "/images/projects/go-take.png",
    tags: ["React Native", "Mobile", "iOS", "Git"],
    categories: ["mobile"],
    liveUrl: "https://gotake.company/",
  },
  {
    title: "Portfolio V1",
    titleEn: "Portfolio V1",
    description: "Site portfolio moderne avec animations fluides, mode sombre et design responsive.",
    descriptionEn: "Modern portfolio website with smooth animations, dark mode, and responsive design.",
    type: "Site web",
    typeEn: "Website",
    image: "/images/projects/portofolio-v1.png",
    tags: ["Next.js", "PostgreSQL", "Git"],
    categories: ["web"],
    liveUrl: "https://modeste-tolojanahary.netlify.app",
    githubUrl: "#",
  },
]

const filterOptions: { key: Category; labelFr: string; labelEn: string }[] = [
  { key: "all", labelFr: "Tous", labelEn: "All" },
  { key: "web", labelFr: "Web", labelEn: "Web" },
  { key: "mobile", labelFr: "Mobile", labelEn: "Mobile" },
  { key: "ai", labelFr: "IA", labelEn: "AI" },
]

export function ProjectsSection() {
  const { t, lang } = useTranslation()
  const [activeFilter, setActiveFilter] = useState<Category>("all")

  const filtered = activeFilter === "all"
    ? projectsData
    : projectsData.filter((p) => p.categories.includes(activeFilter))

  const projects = filtered.map((p) => ({
    ...p,
    title: lang === "en" ? p.titleEn : p.title,
    description: lang === "en" ? p.descriptionEn : p.description,
    type: lang === "en" ? p.typeEn : p.type,
  }))

  const filterLabels = filterOptions.map((f) => ({
    key: f.key,
    label: lang === "en" ? f.labelEn : f.labelFr,
  }))

  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-8 py-24 md:py-32">
      <ScrollReveal animation="slide-up">
        <div className="mb-12 md:mb-16">
          <h2
            className="font-manrope text-4xl md:text-[48px] font-semibold text-foreground mb-4"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            {t.projects.title}
          </h2>
          <p
            className="font-inter text-base md:text-lg text-muted-foreground max-w-2xl"
            style={{ lineHeight: "1.75" }}
          >
            {t.projects.description}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="slide-up" delay={100}>
        <div className="flex flex-wrap gap-3 mb-12">
          {filterLabels.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`font-inter text-sm px-5 py-2 rounded-full transition-all duration-200 active:scale-[0.96] ${
                activeFilter === f.key
                  ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                  : "bg-muted/20 text-muted-foreground hover:text-foreground hover:bg-muted/40 border border-border/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="space-y-8 md:space-y-12">
        {projects.map((project, index) => (
          <ScrollReveal key={index} animation="slide-up" delay={index * 80}>
            <div className="group md:flex md:flex-row-reverse md:items-stretch bg-muted/20 border border-border/50 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300">
              <div className="relative w-full md:w-[45%] lg:w-[40%] aspect-[16/10] md:aspect-auto md:min-h-[280px] bg-gradient-to-br from-primary/[0.04] to-muted/30 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-contain p-4 md:p-6 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-background/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.liveUrl !== "#" && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/90 backdrop-blur-sm text-primary-foreground hover:bg-primary transition-colors shadow-lg" aria-label={lang === "en" ? "View live" : "Voir le site"}>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors shadow-lg" aria-label="GitHub">
                      <Code className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>
              <div className="flex-1 p-5 md:p-7 lg:p-8 flex flex-col justify-center">
                <span className="font-inter text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-3">
                  {project.type}
                </span>
                <h3 className="font-manrope text-xl md:text-2xl font-bold text-foreground mb-3">
                  {project.liveUrl !== "#" ? (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      {project.title}
                    </Link>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="font-inter text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-inter text-[11px] font-medium text-muted-foreground bg-muted/30 border border-border/50 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border/30">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-inter text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1.5">
                    {lang === "en" ? "Visit Project" : "Visiter le projet"}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
