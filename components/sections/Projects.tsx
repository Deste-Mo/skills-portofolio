"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Code, ArrowRight } from "lucide-react"
import { CarouselSkill } from "@/components/ui/CarouselSkill"
import { Button } from "@/components/ui/Button"

const projects = [
  {
    title: "Portfolio Personnel",
    description: "Site portfolio moderne avec animations fluides, mode sombre et design responsive.",
    image: "/images/projects/portfolio.svg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://modeste-tolojanahary.netlify.app",
    githubUrl: "#",
    gradient: "linear-gradient(160deg, #ede9fe 0%, #ddd6fe 60%, #c4b5fd 100%)",
    gradientDark: "linear-gradient(160deg, #2e1065 0%, #4c1d95 60%, #3730a3 100%)",
    accent: "#6d28d9",
  },
  {
    title: "Application E-commerce",
    description: "Plateforme de vente en ligne complète avec panier, paiement et gestion des commandes.",
    image: "/images/projects/ecommerce.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "linear-gradient(160deg, #e0f2fe 0%, #bae6fd 60%, #a5f3fc 100%)",
    gradientDark: "linear-gradient(160deg, #0c4a6e 0%, #075985 60%, #164e63 100%)",
    accent: "#0e7490",
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour la visualisation de données en temps réel.",
    image: "/images/projects/dashboard.svg",
    tags: ["Next.js", "Chart.js", "API REST", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "linear-gradient(160deg, #dcfce7 0%, #bbf7d0 60%, #a7f3d0 100%)",
    gradientDark: "linear-gradient(160deg, #052e16 0%, #064e3b 60%, #065f46 100%)",
    accent: "#065f46",
  },
  {
    title: "Application Météo",
    description: "Application météo avec géolocalisation et prévisions sur 7 jours.",
    image: "/images/projects/weather.svg",
    tags: ["React", "OpenWeather API", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "linear-gradient(160deg, #fef9c3 0%, #fde68a 60%, #fcd34d 100%)",
    gradientDark: "linear-gradient(160deg, #451a03 0%, #78350f 60%, #92400e 100%)",
    accent: "#92400e",
  },
]

export function ProjectsSection() {
  const items = projects.map((project) => ({
    title: project.title,
    content: (
      <div
        className="flex flex-col h-full p-4 gap-2 relative group"
        style={{ background: project.gradient }}
      >
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black/10 flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 180px, 20vw"
            className="object-contain p-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-2 right-2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            {project.liveUrl !== "#" && (
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            )}
            {project.githubUrl !== "#" && (
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors">
                <Code className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>

        <h3 className="text-sm font-bold text-foreground leading-tight">{project.title}</h3>

        <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-background/60 px-2 py-0.5 text-[9px] font-medium text-foreground/70">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  }))

  return (
    <CarouselSkill
      items={items}
      hideMouse
      header={
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Projets</h2>
          <p className="text-lg text-muted-foreground">
            Une sélection de mes réalisations récentes
          </p>
        </div>
      }
      footer={
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="#contact">
              Voir tous mes projets
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      }
    />
  )
}
