export interface Experience {
  title: string
  company: string
  period: string
  details: string[]
  technologies: string[]
}

export interface Formation {
  degree: string
  school: string
  period: string
}

export const experiences: Experience[] = [
  {
    title: "Développeur Full stack",
    company: "Mobile Sys",
    period: "Janvier 2026 - Présent",
    details: [
      "Développement d'une plateforme de services d'assistance pour personnes âgées, en situation de handicap ou isolées.",
      "Développement d'une application de réservation de voyages intégrant transports et hébergements.",
    ],
    technologies: ["Flutter", "Next.js", "GraphQL", "Django"],
  },
  {
    title: "Développeur Frontend",
    company: "François Digital",
    period: "Juin 2025 - Mars 2026",
    details: [
      "Développement d'une application de prise de rendez-vous hospitaliers et de gestion des consultations.",
      "Développement d'une plateforme de réservation de voyages avec paiement en ligne.",
      "Développement d'une application de réservation multi-services (train, bus et hôtel).",
      "Conception d'une plateforme dédiée aux formations, concours et parcours professionnels.",
    ],
    technologies: ["Next.js", "Flutter", "Django"],
  },
  {
    title: "Stagiaire puis Développeur Full stack",
    company: "NJCam Sys",
    period: "2023 - 2025",
    details: [
      "Développement d'une application web et mobile de gestion hôtelière et de restauration.",
      "Développement fullstack d'une application web et mobile de type réseau social dédiée à la collaboration autour des marchandises.",
      "Participation technique en tant qu'assistant lead dev (appui à la coordination technique et aux choix de développement).",
    ],
    technologies: ["Flutter", "React Native", "Node.js", "Express"],
  },
  {
    title: "Développeur Frontend",
    company: "IMIARY",
    period: "Mars - Juin 2022",
    details: [
      "Développement d'une plateforme de location, vente et réservation de bateaux avec paiement en ligne.",
    ],
    technologies: ["React Native", "Node.js", "Express"],
  },
]

export const formations: Formation[] = [
  {
    degree: "Master & Licence en Développement informatique",
    school: "EMIT Fianarantsoa (Madagascar)",
    period: "2022 - en cours",
  },
  {
    degree: "Licence en Développement informatique",
    school: "EMEDIA Antananarivo (Madagascar)",
    period: "2020 - 2023",
  },
  {
    degree: "Année préparatoire",
    school: "SESAME Antananarivo (Madagascar)",
    period: "2020",
  },
]
