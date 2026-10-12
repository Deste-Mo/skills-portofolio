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
    title: "Langages",
    titleEn: "Languages",
    description: "Langages de programmation et outils de logique métier",
    descriptionEn: "Programming languages and business logic tools",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend & mobile",
    titleEn: "Frontend & mobile",
    description: "Interfaces web et applications mobiles modernes et performantes",
    descriptionEn: "Modern and high-performance web and mobile interfaces",
    skills: ["Next.js", "React.js", "React Native", "Flutter", "Expo"],
  },
  {
    title: "Backend & API",
    titleEn: "Backend & API",
    description: "API robustes, services serveur et intégrations tierces",
    descriptionEn: "Robust APIs, backend services, and third-party integrations",
    skills: ["Node.js", "Express.js", "FastAPI", "Django", "Laravel", "REST API", "GraphQL", "Apollo Client", "Webhooks", "Intégration d'API tierces"],
  },
  {
    title: "Bases de données",
    titleEn: "Databases",
    description: "Conception, gestion et optimisation de données relationnelles",
    descriptionEn: "Design, management, and optimization of relational data",
    skills: ["PostgreSQL", "MySQL", "SQL", "Modélisation relationnelle", "Optimisation des requêtes"],
  },
  {
    title: "DevOps & Déploiement",
    titleEn: "DevOps & Deployment",
    description: "Conteneurisation, déploiement et maintenance en production",
    descriptionEn: "Containerization, deployment, and production maintenance",
    skills: ["Docker", "VPS", "Vercel", "Netlify", "Firebase", "Git", "GitHub", "Trello", "Environnements dev/test/prod"],
  },
  {
    title: "Architecture & Qualité",
    titleEn: "Architecture & Quality",
    description: "Bonnes pratiques, composants réutilisables et amélioration continue",
    descriptionEn: "Best practices, reusable components, and continuous improvement",
    skills: ["Architecture Full Stack", "Composants réutilisables", "Hooks personnalisés", "Refactorisation", "Performance"],
  },
  {
    title: "UI/UX",
    description: "Design d'interfaces modernes, responsives et accessibles",
    descriptionEn: "Modern, responsive, and accessible interface design",
    skills: ["Intégration de maquettes Figma", "Responsive Design", "Interfaces modernes", "Accessibilité"],
  },
]

export const categoryIcons: Record<string, React.ReactNode> = {
  Langages: <Code2 size={40} />,
  Languages: <Code2 size={40} />,
  "Frontend & mobile": <Code2 size={40} />,
  "Backend & API": <Server size={40} />,
  "Bases de données": <Database size={40} />,
  Databases: <Database size={40} />,
  "DevOps & Déploiement": <Wrench size={40} />,
  "DevOps & Deployment": <Wrench size={40} />,
  "Architecture & Qualité": <Layers size={40} />,
  "Architecture & Quality": <Layers size={40} />,
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
