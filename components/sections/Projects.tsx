"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Code } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { useTranslation } from "@/lib/i18n/context"

interface ProjectData {
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
}

const projectsData: ProjectData[] = [
  {
    title: "Portfolio Personnel",
    titleEn: "Personal Portfolio",
    description: "Site portfolio moderne avec animations fluides, mode sombre et design responsive.",
    descriptionEn: "Modern portfolio website with smooth animations, dark mode, and responsive design.",
    image: "/images/projects/portfolio.svg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://modeste-tolojanahary.netlify.app",
    githubUrl: "#",
  },
  {
    title: "Application E-commerce",
    titleEn: "E-commerce Application",
    description: "Plateforme de vente en ligne complète avec panier, paiement et gestion des commandes.",
    descriptionEn: "Complete online sales platform with cart, payment, and order management.",
    image: "/images/projects/ecommerce.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Dashboard Analytics",
    titleEn: "Analytics Dashboard",
    description: "Tableau de bord interactif pour la visualisation de données en temps réel.",
    descriptionEn: "Interactive dashboard for real-time data visualization.",
    image: "/images/projects/dashboard.svg",
    tags: ["Next.js", "Chart.js", "API REST", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Application Météo",
    titleEn: "Weather App",
    description: "Application météo avec géolocalisation et prévisions sur 7 jours.",
    descriptionEn: "Weather application with geolocation and 7-day forecasts.",
    image: "/images/projects/weather.svg",
    tags: ["React", "OpenWeather API", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  const { t, lang } = useTranslation()
  const projects = projectsData.map((p) => ({
    ...p,
    title: lang === "en" ? p.titleEn : p.title,
    description: lang === "en" ? p.descriptionEn : p.description,
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ScrollReveal key={index} animation="slide-up" delay={index * 100}>
            <div className="group bg-muted/20 border border-border/50 rounded-xl overflow-hidden hover:bg-muted/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 h-full flex flex-col">
              <div className="relative w-full aspect-video bg-muted/30 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  {project.liveUrl !== "#" && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                  {project.githubUrl !== "#" && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors">
                      <Code className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
              <div className="p-4 md:p-5 flex flex-col flex-1">
                <h3 className="font-manrope text-sm font-semibold text-foreground mb-1.5">{project.title}</h3>
                <p className="font-inter text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-inter text-[10px] font-medium text-muted-foreground bg-muted/30 border border-border/50 px-2 py-1 rounded-[0.125rem]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
