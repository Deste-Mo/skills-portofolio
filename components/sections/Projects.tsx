"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { ExternalLink, Code, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

const projects = [
  {
    title: "Portfolio Personnel",
    description: "Site portfolio moderne avec animations fluides, mode sombre et design responsive. Construit avec Next.js et Tailwind CSS.",
    image: "/projects/portfolio.svg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://modeste-tolojanahary.netlify.app",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Application E-commerce",
    description: "Plateforme de vente en ligne complète avec panier, paiement et gestion des commandes. Interface utilisateur intuitive.",
    image: "/projects/ecommerce.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour la visualisation de données en temps réel. Graphiques dynamiques et rapports personnalisés.",
    image: "/projects/dashboard.svg",
    tags: ["Next.js", "Chart.js", "API REST", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Application Météo",
    description: "Application météo avec géolocalisation et prévisions sur 7 jours. Design minimaliste et données en temps réel.",
    image: "/projects/weather.svg",
    tags: ["React", "OpenWeather API", "CSS Modules"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <ScrollReveal animation="slide-blur">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Projets</h2>
            <p className="text-lg text-muted-foreground">
              Une sélection de mes réalisations récentes
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} animation="reveal-bottom" delay={index * 100}>
              <div className="group relative rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay boutons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {project.liveUrl !== "#" && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    )}
                    {project.githubUrl !== "#" && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
                      >
                        <Code className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Voir le projet
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="reveal-bottom" delay={400}>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="#contact">
                Voir tous mes projets
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
