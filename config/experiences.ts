import type { Language } from "@/lib/i18n/types"

export interface Experience {
  title: string
  titleEn?: string
  company: string
  period: string
  periodEn?: string
  details: string[]
  detailsEn?: string[]
  technologies: string[]
}

export interface Formation {
  degree: string
  degreeEn?: string
  school: string
  period: string
  periodEn?: string
}

export const experiences: Experience[] = [
  {
    title: "Développeur Full stack & DevOps",
    titleEn: "Full Stack & DevOps Developer",
    company: "Mobile Sys",
    period: "Janvier 2026 - Présent",
    periodEn: "January 2026 - Present",
    details: [
      "Développement full stack, conteneurisation et déploiement sur VPS d’une plateforme de services d’assistance pour personnes âgées, en situation de handicap ou isolées.",
      "Développement frontend d’une application de réservation de voyages intégrant transports et hébergements.",
    ],
    detailsEn: [
      "Full stack development, containerization, and deployment on VPS for an assistance platform for elderly, disabled, or isolated people.",
      "Frontend development of a travel booking application integrating transport and accommodation services.",
    ],
    technologies: ["Flutter", "Next.js", "GraphQL", "Django", "Docker", "VPS"],
  },
  {
    title: "Développeur Frontend & DevOps",
    titleEn: "Frontend & DevOps Developer",
    company: "François Digital",
    period: "Juin 2025 - Mars 2026",
    periodEn: "June 2025 - March 2026",
    details: [
      "Développement et déploiement d’une application de prise de rendez-vous hospitaliers et de gestion des consultations.",
      "Développement et mise en production d’une plateforme de réservation de voyages avec paiement en ligne.",
      "Développement et déploiement d’une application de réservation multi-services (train, bus et hôtel).",
      "Conception et déploiement d’une plateforme dédiée aux formations, concours et parcours professionnels.",
    ],
    detailsEn: [
      "Development and deployment of a hospital appointment booking and consultation management application.",
      "Development and production launch of a travel booking platform with online payment.",
      "Development and deployment of a multi-service booking application (train, bus, and hotel).",
      "Design and deployment of a platform dedicated to training, competitive exams, and professional pathways.",
    ],
    technologies: ["Next.js", "Flutter", "API REST", "VPS"],
  },
  {
    title: "Stagiaire puis Développeur Full stack & DevOps",
    titleEn: "Intern then Full Stack & DevOps Developer",
    company: "NJCam Sys",
    period: "2023 - 2025",
    periodEn: "2023 - 2025",
    details: [
      "Développement full stack et déploiement d’une application web et mobile de gestion hôtelière et de restauration.",
      "Développement full stack et mise en production d’une application web et mobile de type réseau social dédiée à la collaboration autour des marchandises.",
      "Participation technique en tant qu’assistant lead dev (appui à la coordination technique, aux choix de développement et de déploiement).",
    ],
    detailsEn: [
      "Full stack development and deployment of a web and mobile application for hotel and restaurant management.",
      "Full stack development and production launch of a social-network-style web and mobile application focused on collaboration around goods.",
      "Technical participation as assistant lead developer, supporting technical coordination and development/deployment decisions.",
    ],
    technologies: ["Flutter", "React Native", "Node.js", "Express", "API REST", "VPS"],
  },
  {
    title: "Stagiaire (Développeur Full stack)",
    titleEn: "Intern (Full Stack Developer)",
    company: "IMIARY",
    period: "Mars - Juin 2022",
    periodEn: "March - June 2022",
    details: [
      "Développement d’une plateforme de location, vente et réservation de bateaux avec paiement en ligne.",
    ],
    detailsEn: [
      "Development of a boat rental, sales, and booking platform with online payment.",
    ],
    technologies: ["React Native", "Node.js", "Express", "API REST", "PostgreSQL", "Laravel"],
  },
]

export const formations: Formation[] = [
  {
    degree: "Master & Licence en Développement informatique",
    degreeEn: "Master's & Bachelor's in Computer Science",
    school: "EMIT Fianarantsoa (Madagascar)",
    period: "2022 - En cours",
    periodEn: "2022 - Ongoing",
  },
  {
    degree: "Licence en Développement informatique",
    degreeEn: "Bachelor's in Computer Science",
    school: "EMEDIA Antananarivo (Madagascar)",
    period: "2020 - 2023",
  },
  {
    degree: "Année préparatoire",
    degreeEn: "Preparatory year",
    school: "SESAME Antananarivo (Madagascar)",
    period: "2020",
  },
]

export function getLocalizedExperiences(lang: Language): Experience[] {
  return experiences.map((exp) => ({
    ...exp,
    title: lang === "en" ? (exp.titleEn ?? exp.title) : exp.title,
    period: lang === "en" ? (exp.periodEn ?? exp.period) : exp.period,
    details: lang === "en" ? (exp.detailsEn ?? exp.details) : exp.details,
  }))
}

export function getLocalizedFormations(lang: Language): Formation[] {
  return formations.map((f) => ({
    ...f,
    degree: lang === "en" ? (f.degreeEn ?? f.degree) : f.degree,
    period: lang === "en" ? (f.periodEn ?? f.period) : f.period,
  }))
}
