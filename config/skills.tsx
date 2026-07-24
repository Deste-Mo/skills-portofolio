import { Code2, Server, Database, Share2, Wrench, Layers, Palette } from "lucide-react"
import type { Language } from "@/lib/i18n/types"

export interface SkillCategory {
  title: string
  titleEn?: string
  description: string
  descriptionEn?: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Développement d'interfaces utilisateur réactives et modernes",
    descriptionEn: "Building responsive and modern user interfaces",
    skills: ["Next.js", "React.js", "Flutter", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    description: "Création d'API et de logique serveur performantes",
    descriptionEn: "Creating high-performance APIs and server logic",
    skills: ["Node.js", "FastAPI", "Laravel", "Express.js"],
  },
  {
    title: "Bases de données",
    titleEn: "Databases",
    description: "Conception et optimisation de bases de données relationnelles",
    descriptionEn: "Designing and optimizing relational databases",
    skills: ["MySQL", "PostgreSQL", "Modélisation relationnelle", "SQL", "Optimisation des requêtes"],
  },
  {
    title: "API & Data",
    description: "Intégration et développement d'API robustes",
    descriptionEn: "Integrating and developing robust APIs",
    skills: ["REST API", "GraphQL", "Apollo Client", "Intégration d'API tierces", "Webhooks"],
  },
  {
    title: "Outils & Technologies",
    titleEn: "Tools & Technologies",
    description: "Environnement de développement et déploiement",
    descriptionEn: "Development environment and deployment",
    skills: ["Git", "Docker", "Firebase", "Expo", "Trello", "VS Code"],
  },
  {
    title: "Architecture & Qualité",
    titleEn: "Architecture & Quality",
    description: "Bonnes pratiques et code maintenable",
    descriptionEn: "Best practices and maintainable code",
    skills: ["Architecture Full Stack", "Composants réutilisables", "Hooks personnalisés", "Refactorisation", "Responsive Design", "Performance"],
  },
  {
    title: "UI/UX",
    description: "Design et expérience utilisateur",
    descriptionEn: "Design and user experience",
    skills: ["Intégration de maquettes Figma", "Responsive Design", "Interfaces modernes", "Accessibilité"],
  },
]

export const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 size={40} />,
  Backend: <Server size={40} />,
  "Bases de données": <Database size={40} />,
  "API & Data": <Share2 size={40} />,
  "Outils & Technologies": <Wrench size={40} />,
  "Architecture & Qualité": <Layers size={40} />,
  "UI/UX": <Palette size={40} />,
}

export function getLocalizedCategories(lang: Language): (SkillCategory & { originalTitle: string })[] {
  return skillCategories.map((cat) => ({
    ...cat,
    title: lang === "en" ? (cat.titleEn ?? cat.title) : cat.title,
    description: lang === "en" ? (cat.descriptionEn ?? cat.description) : cat.description,
    originalTitle: cat.title,
  }))
}
