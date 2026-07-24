"use client"

import { Code, Palette, Smartphone, Globe, Search, Rocket } from "lucide-react"
import { CarouselSkill } from "@/components/ui/CarouselSkill"

const services = [
  {
    icon: Code,
    title: "Développement Web",
    description: "Création de sites web modernes et performants avec les dernières technologies.",
    features: ["Sites vitrines", "Applications web", "E-commerce", "API REST"],
    gradient: "linear-gradient(160deg, #ede9fe 0%, #ddd6fe 60%, #c4b5fd 100%)",
    gradientDark: "linear-gradient(160deg, #2e1065 0%, #4c1d95 60%, #3730a3 100%)",
    accent: "#6d28d9",
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    description: "Conception d'interfaces utilisateur intuitives et esthétiques.",
    features: ["Maquettes Figma", "Prototypes", "Design System", "Tests utilisateurs"],
    gradient: "linear-gradient(160deg, #e0f2fe 0%, #bae6fd 60%, #a5f3fc 100%)",
    gradientDark: "linear-gradient(160deg, #0c4a6e 0%, #075985 60%, #164e63 100%)",
    accent: "#0e7490",
  },
  {
    icon: Smartphone,
    title: "Design Responsive",
    description: "Adaptation parfaite de vos interfaces sur tous les appareils.",
    features: ["Mobile-first", "Tablette", "Desktop", "Cross-browser"],
    gradient: "linear-gradient(160deg, #dcfce7 0%, #bbf7d0 60%, #a7f3d0 100%)",
    gradientDark: "linear-gradient(160deg, #052e16 0%, #064e3b 60%, #065f46 100%)",
    accent: "#065f46",
  },
  {
    icon: Globe,
    title: "SEO & Performance",
    description: "Optimisation pour les moteurs de recherche et amélioration des performances.",
    features: ["SEO technique", "Core Web Vitals", "Accessibilité", "Analytics"],
    gradient: "linear-gradient(160deg, #fce7f3 0%, #fbcfe8 60%, #f9a8d4 100%)",
    gradientDark: "linear-gradient(160deg, #500724 0%, #831843 60%, #701a75 100%)",
    accent: "#9d174d",
  },
  {
    icon: Search,
    title: "Audit & Conseil",
    description: "Analyse de votre présence digitale et recommandations stratégiques.",
    features: ["Audit technique", "Recommandations", "Formation", "Support"],
    gradient: "linear-gradient(160deg, #fef9c3 0%, #fde68a 60%, #fcd34d 100%)",
    gradientDark: "linear-gradient(160deg, #451a03 0%, #78350f 60%, #92400e 100%)",
    accent: "#92400e",
  },
  {
    icon: Rocket,
    title: "Déploiement & Maintenance",
    description: "Mise en production et suivi de vos applications.",
    features: ["Déploiement CI/CD", "Monitoring", "Backups", "Support technique"],
    gradient: "linear-gradient(160deg, #e0e7ff 0%, #c7d2fe 60%, #a5b4fc 100%)",
    gradientDark: "linear-gradient(160deg, #1e1b4b 0%, #312e81 60%, #3730a3 100%)",
    accent: "#4338ca",
  },
]

export function ServicesSection() {
  const items = services.map((service) => ({
    title: service.title,
    content: (
      <div
        className="flex flex-col h-full p-5 gap-2"
        style={{ background: service.gradient }}
      >
        <div
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white mb-1"
          style={{ background: service.accent }}
        >
          <service.icon className="h-5 w-5" />
        </div>

        <h3 className="text-sm font-bold text-foreground">{service.title}</h3>

        <p className="text-[11px] text-muted-foreground leading-relaxed flex-1">
          {service.description}
        </p>

        <ul className="space-y-1">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <span
                className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                style={{ background: service.accent }}
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ),
  }))

  return (
    <CarouselSkill
      items={items}
      header={
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
          <p className="text-lg text-muted-foreground">
            Des solutions complètes pour vos projets digitaux
          </p>
        </div>
      }
    />
  )
}
