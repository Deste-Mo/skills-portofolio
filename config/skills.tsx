import { Code2, Server, Database, Share2, Wrench, Layers, Palette } from "lucide-react"

export interface SkillCategory {
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Développement d'interfaces utilisateur réactives et modernes",
    skills: ["Next.js", "React.js", "Flutter", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    description: "Création d'API et de logique serveur performantes",
    skills: ["Node.js", "FastAPI", "Laravel", "Express.js"],
  },
  {
    title: "Bases de données",
    description: "Conception et optimisation de bases de données relationnelles",
    skills: ["MySQL", "PostgreSQL", "Modélisation relationnelle", "SQL", "Optimisation des requêtes"],
  },
  {
    title: "API & Data",
    description: "Intégration et développement d'API robustes",
    skills: ["REST API", "GraphQL", "Apollo Client", "Intégration d'API tierces", "Webhooks"],
  },
  {
    title: "Outils & Technologies",
    description: "Environnement de développement et déploiement",
    skills: ["Git", "Docker", "Firebase", "Expo", "Trello", "VS Code"],
  },
  {
    title: "Architecture & Qualité",
    description: "Bonnes pratiques et code maintenable",
    skills: ["Architecture Full Stack", "Composants réutilisables", "Hooks personnalisés", "Refactorisation", "Responsive Design", "Performance"],
  },
  {
    title: "UI/UX",
    description: "Design et expérience utilisateur",
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
