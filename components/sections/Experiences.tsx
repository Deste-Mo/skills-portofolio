"use client"

import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Développeur Full-Stack",
    company: "Freelance",
    period: "2023 - Présent",
    location: "Fianarantsoa, Madagascar",
    description: "Développement d'applications web complètes pour des clients locaux et internationaux. Création de sites vitrines, e-commerce et applications SaaS.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Designer UI/UX",
    company: "Projet Personnel",
    period: "2022 - 2023",
    location: "Remote",
    description: "Conception d'interfaces utilisateur modernes et intuitives. Création de maquettes, prototypes interactifs et systèmes de design.",
    technologies: ["Figma", "Adobe XD", "Prototyping", "Design System"],
  },
  {
    title: "Développeur Frontend",
    company: "Stage / Formation",
    period: "2021 - 2022",
    location: "Fianarantsoa, Madagascar",
    description: "Apprentissage et développement de projets web avec les technologies modernes. Participation à des projets collaboratifs.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
]

export function ExperiencesSection() {
  return (
    <section id="experiences" className="py-20 sm:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <ScrollReveal animation="slide-blur">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Expériences</h2>
            <p className="text-lg text-muted-foreground">
              Mon parcours professionnel et mes réalisations
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} animation={index % 2 === 0 ? "slide-left" : "slide-right"} delay={index * 150}>
                <div className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Point sur la timeline */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-2 mt-6 z-10"></div>

                  {/* Contenu */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <Briefcase className="h-6 w-6 text-primary/50" />
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Espace vide pour l'autre côté */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
