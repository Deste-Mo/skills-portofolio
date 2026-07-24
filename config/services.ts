import { Globe, Smartphone, Palette, Search, Wrench } from "lucide-react"

export interface ServiceTechnology {
  category: string
  items: { name: string; sub?: string }[]
}

export interface ServiceProcess {
  step: number
  title: string
  description: string
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  slug: string
  description: string
  heroDescription: string
  offerings: string[]
  technologies: ServiceTechnology[]
  process: ServiceProcess[]
}

export const services: Service[] = [
  {
    icon: Globe,
    title: "Développement Web Full-Stack",
    slug: "developpement-web",
    description: "Création d'applications web complètes, du frontend au backend",
    heroDescription:
      "Je crée des applications web complètes, du frontend au backend, avec une attention particulière portée à la performance, la sécurité et l'expérience utilisateur.",
    offerings: [
      "Applications web modernes et performantes",
      "Architecture scalable et maintenable",
      "API RESTful et GraphQL",
      "Bases de données relationnelles et NoSQL",
      "Authentification et sécurité",
      "Déploiement et CI/CD",
      "Tests automatisés",
      "Documentation complète",
    ],
    technologies: [
      {
        category: "Frontend",
        items: [{ name: "React / Next.js" }],
      },
      {
        category: "Backend",
        items: [{ name: "Node.js / Express" }],
      },
      {
        category: "Langage",
        items: [{ name: "TypeScript" }],
      },
      {
        category: "Base de données",
        items: [{ name: "PostgreSQL / MongoDB" }],
      },
      {
        category: "DevOps",
        items: [{ name: "Docker" }],
      },
      {
        category: "Cloud",
        items: [{ name: "AWS / Vercel / Netlify" }],
      },
    ],
    process: [
      { step: 1, title: "Analyse des besoins", description: "Compréhension approfondie de votre projet et de vos objectifs" },
      { step: 2, title: "Architecture technique", description: "Conception de l'architecture et choix des technologies adaptées" },
      { step: 3, title: "Développement", description: "Développement itératif avec revues régulières" },
      { step: 4, title: "Tests & Déploiement", description: "Tests complets et mise en production sécurisée" },
    ],
  },
  {
    icon: Smartphone,
    title: "Développement Mobile",
    slug: "developpement-mobile",
    description: "Applications mobiles multiplateformes performantes",
    heroDescription:
      "Je développe des applications mobiles multiplateformes performantes et intuitives pour iOS et Android, avec une expérience utilisateur optimale.",
    offerings: [
      "Applications iOS et Android natives",
      "Développement cross-platform (React Native, Flutter)",
      "Interface utilisateur intuitive",
      "Performance optimisée",
      "Intégration API et services cloud",
      "Notifications push",
      "Paiements in-app",
      "Publication sur les stores",
    ],
    technologies: [
      { category: "Framework", items: [{ name: "React Native" }, { name: "Flutter" }] },
      { category: "Langage", items: [{ name: "TypeScript / Dart" }] },
      { category: "Backend", items: [{ name: "Firebase" }] },
      { category: "State Management", items: [{ name: "Redux / MobX" }] },
      { category: "Distribution", items: [{ name: "App Store / Play Store" }] },
    ],
    process: [
      { step: 1, title: "Conception UX/UI", description: "Design adapté aux plateformes mobiles et aux guidelines" },
      { step: 2, title: "Développement", description: "Développement avec tests sur devices réels" },
      { step: 3, title: "Tests & Optimisation", description: "Tests de performance et d'utilisabilité" },
      { step: 4, title: "Publication", description: "Soumission et publication sur les stores" },
    ],
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    slug: "design-ui-ux",
    description: "Interfaces modernes et ergonomiques adaptées à tous les écrans",
    heroDescription:
      "Je conçois des interfaces utilisateur modernes, intuitives et accessibles, en mettant l'accent sur l'expérience utilisateur et l'ergonomie.",
    offerings: [
      "Recherche utilisateur et personas",
      "Wireframes et prototypes interactifs",
      "Design system et composants réutilisables",
      "Interface responsive (mobile, tablet, desktop)",
      "Accessibilité (WCAG 2.1)",
      "Tests utilisateurs",
      "Design moderne et épuré",
      "Animations et micro-interactions",
    ],
    technologies: [
      { category: "Design", items: [{ name: "Figma" }, { name: "Adobe XD" }, { name: "Sketch" }] },
      { category: "Framework CSS", items: [{ name: "Tailwind CSS" }] },
      { category: "Animations", items: [{ name: "Framer Motion" }] },
      { category: "Documentation", items: [{ name: "Storybook" }] },
    ],
    process: [
      { step: 1, title: "Recherche & Analyse", description: "Étude des utilisateurs, concurrents et tendances" },
      { step: 2, title: "Wireframing", description: "Création de maquettes basse fidélité" },
      { step: 3, title: "Design UI", description: "Conception visuelle et design system" },
      { step: 4, title: "Prototypage", description: "Prototypes interactifs et tests utilisateurs" },
    ],
  },
  {
    icon: Search,
    title: "Optimisation SEO",
    slug: "optimisation-seo",
    description: "Amélioration de la visibilité de votre site sur les moteurs de recherche",
    heroDescription:
      "J'améliore la visibilité de votre site sur les moteurs de recherche grâce à des techniques SEO éprouvées et une optimisation technique complète.",
    offerings: [
      "Audit SEO complet",
      "Optimisation technique (vitesse, structure)",
      "Recherche de mots-clés",
      "Optimisation du contenu",
      "Link building",
      "SEO local",
      "Suivi et rapports mensuels",
      "Conformité Core Web Vitals",
    ],
    technologies: [
      { category: "Analyse", items: [{ name: "Google Search Console" }, { name: "Google Analytics" }] },
      { category: "Outils SEO", items: [{ name: "Semrush / Ahrefs" }] },
      { category: "Performance", items: [{ name: "Lighthouse" }] },
      { category: "Données structurées", items: [{ name: "Schema.org" }] },
      { category: "Framework", items: [{ name: "Next.js SEO" }] },
    ],
    process: [
      { step: 1, title: "Audit SEO", description: "Analyse complète de votre site et de la concurrence" },
      { step: 2, title: "Stratégie", description: "Définition des objectifs et plan d'action" },
      { step: 3, title: "Optimisation", description: "Mise en œuvre des optimisations techniques et contenu" },
      { step: 4, title: "Suivi", description: "Monitoring des performances et ajustements" },
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    slug: "maintenance-support",
    description: "Assistance technique et maintenance continue de vos projets",
    heroDescription:
      "J'assure la maintenance continue de vos projets web et mobiles, avec un support technique réactif et des mises à jour régulières.",
    offerings: [
      "Surveillance 24/7",
      "Mises à jour de sécurité",
      "Corrections de bugs",
      "Optimisation des performances",
      "Sauvegardes automatiques",
      "Support technique prioritaire",
      "Évolutions fonctionnelles",
      "Documentation technique",
    ],
    technologies: [
      { category: "Surveillance", items: [{ name: "Monitoring (Sentry, LogRocket)" }] },
      { category: "Déploiement", items: [{ name: "CI/CD (GitHub Actions)" }] },
      { category: "Conteneurisation", items: [{ name: "Docker" }] },
      { category: "Sécurité", items: [{ name: "Backup automatisé" }, { name: "SSL/TLS" }] },
      { category: "Performance", items: [{ name: "CDN" }] },
    ],
    process: [
      { step: 1, title: "Audit initial", description: "Évaluation de l'état actuel de votre projet" },
      { step: 2, title: "Plan de maintenance", description: "Définition des interventions et fréquence" },
      { step: 3, title: "Surveillance", description: "Monitoring continu et alertes automatiques" },
      { step: 4, title: "Interventions", description: "Corrections, mises à jour et améliorations" },
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug) ?? null
}

export function getOtherServices(currentSlug: string) {
  return services.filter((s) => s.slug !== currentSlug)
}
