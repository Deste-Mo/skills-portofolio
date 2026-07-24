import { Globe, Smartphone, Palette, Search, Wrench } from "lucide-react"
import type { Language } from "@/lib/i18n/types"

export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  slug: string
  description: string
  heroDescription: string
  offerings: string[]
  technologies: { category: string; items: { name: string; sub?: string }[] }[]
  process: { step: number; title: string; description: string }[]
}

interface ServiceI18n {
  icon: React.ComponentType<{ className?: string }>
  title: string
  titleEn: string
  slug: string
  description: string
  descriptionEn: string
  heroDescription: string
  heroDescriptionEn: string
  offerings: string[]
  offeringsEn: string[]
  technologies: { category: string; items: { name: string; sub?: string }[] }[]
  process: { step: number; title: string; description: string }[]
  processEn: { step: number; title: string; description: string }[]
}

const servicesData: ServiceI18n[] = [
  {
    icon: Globe,
    title: "Développement Web Full-Stack",
    titleEn: "Full-Stack Web Development",
    slug: "developpement-web",
    description: "Création d'applications web complètes, du frontend au backend",
    descriptionEn: "Building complete web applications, from frontend to backend",
    heroDescription:
      "Je crée des applications web complètes, du frontend au backend, avec une attention particulière portée à la performance, la sécurité et l'expérience utilisateur.",
    heroDescriptionEn:
      "I build complete web applications, from frontend to backend, with a special focus on performance, security, and user experience.",
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
    offeringsEn: [
      "Modern and performant web applications",
      "Scalable and maintainable architecture",
      "RESTful and GraphQL APIs",
      "Relational and NoSQL databases",
      "Authentication and security",
      "Deployment and CI/CD",
      "Automated testing",
      "Complete documentation",
    ],
    technologies: [
      { category: "Frontend", items: [{ name: "React / Next.js" }] },
      { category: "Backend", items: [{ name: "Node.js / Express" }] },
      { category: "Langage", items: [{ name: "TypeScript" }] },
      { category: "Base de données", items: [{ name: "PostgreSQL / MongoDB" }] },
      { category: "DevOps", items: [{ name: "Docker" }] },
      { category: "Cloud", items: [{ name: "AWS / Vercel / Netlify" }] },
    ],
    process: [
      { step: 1, title: "Analyse des besoins", description: "Compréhension approfondie de votre projet et de vos objectifs" },
      { step: 2, title: "Architecture technique", description: "Conception de l'architecture et choix des technologies adaptées" },
      { step: 3, title: "Développement", description: "Développement itératif avec revues régulières" },
      { step: 4, title: "Tests & Déploiement", description: "Tests complets et mise en production sécurisée" },
    ],
    processEn: [
      { step: 1, title: "Requirements Analysis", description: "In-depth understanding of your project and goals" },
      { step: 2, title: "Technical Architecture", description: "Architecture design and selection of appropriate technologies" },
      { step: 3, title: "Development", description: "Iterative development with regular reviews" },
      { step: 4, title: "Testing & Deployment", description: "Complete testing and secure production deployment" },
    ],
  },
  {
    icon: Smartphone,
    title: "Développement Mobile",
    titleEn: "Mobile Development",
    slug: "developpement-mobile",
    description: "Applications mobiles multiplateformes performantes",
    descriptionEn: "High-performance cross-platform mobile applications",
    heroDescription:
      "Je développe des applications mobiles multiplateformes performantes et intuitives pour iOS et Android, avec une expérience utilisateur optimale.",
    heroDescriptionEn:
      "I develop high-performance, intuitive cross-platform mobile applications for iOS and Android, with an optimal user experience.",
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
    offeringsEn: [
      "Native iOS and Android applications",
      "Cross-platform development (React Native, Flutter)",
      "Intuitive user interface",
      "Optimized performance",
      "API integration and cloud services",
      "Push notifications",
      "In-app payments",
      "Store publication",
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
    processEn: [
      { step: 1, title: "UX/UI Design", description: "Design adapted to mobile platforms and guidelines" },
      { step: 2, title: "Development", description: "Development with testing on real devices" },
      { step: 3, title: "Testing & Optimization", description: "Performance and usability testing" },
      { step: 4, title: "Publication", description: "Submission and publication on app stores" },
    ],
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    titleEn: "UI/UX Design",
    slug: "design-ui-ux",
    description: "Interfaces modernes et ergonomiques adaptées à tous les écrans",
    descriptionEn: "Modern and ergonomic interfaces adapted to all screens",
    heroDescription:
      "Je conçois des interfaces utilisateur modernes, intuitives et accessibles, en mettant l'accent sur l'expérience utilisateur et l'ergonomie.",
    heroDescriptionEn:
      "I design modern, intuitive, and accessible user interfaces, with a focus on user experience and ergonomics.",
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
    offeringsEn: [
      "User research and personas",
      "Wireframes and interactive prototypes",
      "Design system and reusable components",
      "Responsive interface (mobile, tablet, desktop)",
      "Accessibility (WCAG 2.1)",
      "User testing",
      "Modern and clean design",
      "Animations and micro-interactions",
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
    processEn: [
      { step: 1, title: "Research & Analysis", description: "Study of users, competitors, and trends" },
      { step: 2, title: "Wireframing", description: "Creating low-fidelity mockups" },
      { step: 3, title: "UI Design", description: "Visual design and design system" },
      { step: 4, title: "Prototyping", description: "Interactive prototypes and user testing" },
    ],
  },
  {
    icon: Search,
    title: "Optimisation SEO",
    titleEn: "SEO Optimization",
    slug: "optimisation-seo",
    description: "Amélioration de la visibilité de votre site sur les moteurs de recherche",
    descriptionEn: "Improving your website's visibility on search engines",
    heroDescription:
      "J'améliore la visibilité de votre site sur les moteurs de recherche grâce à des techniques SEO éprouvées et une optimisation technique complète.",
    heroDescriptionEn:
      "I improve your website's visibility on search engines using proven SEO techniques and complete technical optimization.",
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
    offeringsEn: [
      "Complete SEO audit",
      "Technical optimization (speed, structure)",
      "Keyword research",
      "Content optimization",
      "Link building",
      "Local SEO",
      "Monthly tracking and reports",
      "Core Web Vitals compliance",
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
    processEn: [
      { step: 1, title: "SEO Audit", description: "Complete analysis of your site and competition" },
      { step: 2, title: "Strategy", description: "Definition of objectives and action plan" },
      { step: 3, title: "Optimization", description: "Implementation of technical and content optimizations" },
      { step: 4, title: "Monitoring", description: "Performance monitoring and adjustments" },
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    titleEn: "Maintenance & Support",
    slug: "maintenance-support",
    description: "Assistance technique et maintenance continue de vos projets",
    descriptionEn: "Technical assistance and ongoing maintenance for your projects",
    heroDescription:
      "J'assure la maintenance continue de vos projets web et mobiles, avec un support technique réactif et des mises à jour régulières.",
    heroDescriptionEn:
      "I ensure ongoing maintenance of your web and mobile projects, with responsive technical support and regular updates.",
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
    offeringsEn: [
      "24/7 monitoring",
      "Security updates",
      "Bug fixes",
      "Performance optimization",
      "Automatic backups",
      "Priority technical support",
      "Functional upgrades",
      "Technical documentation",
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
    processEn: [
      { step: 1, title: "Initial Audit", description: "Assessment of your project's current state" },
      { step: 2, title: "Maintenance Plan", description: "Definition of interventions and frequency" },
      { step: 3, title: "Monitoring", description: "Continuous monitoring and automatic alerts" },
      { step: 4, title: "Interventions", description: "Fixes, updates, and improvements" },
    ],
  },
]

export const services: Service[] = servicesData

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug) ?? null
}

export function getOtherServices(currentSlug: string) {
  return servicesData.filter((s) => s.slug !== currentSlug)
}

export function getLocalizedService(slug: string, lang: Language): Service | null {
  const s = servicesData.find((svc) => svc.slug === slug)
  if (!s) return null
  if (lang === "fr") {
    return {
      icon: s.icon,
      title: s.title,
      slug: s.slug,
      description: s.description,
      heroDescription: s.heroDescription,
      offerings: s.offerings,
      technologies: s.technologies,
      process: s.process,
    }
  }
  return {
    icon: s.icon,
    title: s.titleEn,
    slug: s.slug,
    description: s.descriptionEn,
    heroDescription: s.heroDescriptionEn,
    offerings: s.offeringsEn,
    technologies: s.technologies,
    process: s.processEn,
  }
}

export function getLocalizedServices(lang: Language): Service[] {
  return servicesData.map((s) => {
    if (lang === "fr") {
      return {
        icon: s.icon,
        title: s.title,
        slug: s.slug,
        description: s.description,
        heroDescription: s.heroDescription,
        offerings: s.offerings,
        technologies: s.technologies,
        process: s.process,
      }
    }
    return {
      icon: s.icon,
      title: s.titleEn,
      slug: s.slug,
      description: s.descriptionEn,
      heroDescription: s.heroDescriptionEn,
      offerings: s.offeringsEn,
      technologies: s.technologies,
      process: s.processEn,
    }
  })
}
