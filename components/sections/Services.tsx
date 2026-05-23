"use client"

import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Code, Palette, Smartphone, Globe, Search, Rocket } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Développement Web",
    description: "Création de sites web modernes et performants avec les dernières technologies. Applications React, Next.js et solutions sur mesure.",
    features: ["Sites vitrines", "Applications web", "E-commerce", "API REST"],
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    description: "Conception d'interfaces utilisateur intuitives et esthétiques. Maquettes, prototypes et systèmes de design complets.",
    features: ["Maquettes Figma", "Prototypes", "Design System", "Tests utilisateurs"],
  },
  {
    icon: Smartphone,
    title: "Design Responsive",
    description: "Adaptation parfaite de vos interfaces sur tous les appareils. Mobile-first et expérience utilisateur optimale.",
    features: ["Mobile-first", "Tablette", "Desktop", "Cross-browser"],
  },
  {
    icon: Globe,
    title: "SEO & Performance",
    description: "Optimisation pour les moteurs de recherche et amélioration des performances. Vitesse de chargement et visibilité.",
    features: ["SEO technique", "Core Web Vitals", "Accessibilité", "Analytics"],
  },
  {
    icon: Search,
    title: "Audit & Conseil",
    description: "Analyse de votre présence digitale et recommandations stratégiques. Amélioration continue et bonnes pratiques.",
    features: ["Audit technique", "Recommandations", "Formation", "Support"],
  },
  {
    icon: Rocket,
    title: "Déploiement & Maintenance",
    description: "Mise en production et suivi de vos applications. Hébergement, monitoring et mises à jour régulières.",
    features: ["Déploiement CI/CD", "Monitoring", "Backups", "Support technique"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-muted/10">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <ScrollReveal animation="slide-blur">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
            <p className="text-lg text-muted-foreground">
              Des solutions complètes pour vos projets digitaux
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} animation="reveal-bottom" delay={index * 100}>
              <div className="group relative rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
