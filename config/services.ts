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
    title: "Développement Web & Mobile Full Stack",
    titleEn: "Full Stack Web & Mobile Development",
    slug: "developpement-web-mobile",
    description: "Solutions complètes web et mobile pour lancer des produits fiables et évolutifs",
    descriptionEn: "Complete web and mobile solutions to launch reliable and scalable products",
    heroDescription:
      "Je conçois et développe des applications web et mobiles complètes, en orchestrant le front, le back, les intégrations et le déploiement pour offrir un produit prêt à évoluer.",
    heroDescriptionEn:
      "I design and develop complete web and mobile applications by coordinating front-end, back-end, integrations, and deployment to deliver a product ready to scale.",
    offerings: [
      "Applications web modernes et orientées business",
      "Back-office, dashboards et plateformes SaaS",
      "Applications mobiles complètes avec API backend",
      "Architecture technique scalable et maintenable",
      "Intégration de services tiers et automatisations",
      "Déploiement sur VPS, Vercel, Netlify et Firebase",
      "Workflow Git/GitHub et documentation d'équipe",
      "Support technique et amélioration continue",
    ],
    offeringsEn: [
      "Modern business-oriented web applications",
      "Back-office, dashboards, and SaaS platforms",
      "Complete mobile apps with backend API support",
      "Scalable and maintainable technical architecture",
      "Third-party integrations and automation flows",
      "Deployment on VPS, Vercel, Netlify, and Firebase",
      "Git/GitHub workflows and team documentation",
      "Technical support and continuous improvement",
    ],
    technologies: [
      { category: "Frontend", items: [{ name: "Next.js" }, { name: "React.js" }, { name: "Flutter" }] },
      { category: "Backend", items: [{ name: "Node.js" }, { name: "Django" }, { name: "FastAPI" }, { name: "Laravel" }] },
      { category: "API", items: [{ name: "REST API" }, { name: "GraphQL" }, { name: "Webhooks" }] },
      { category: "Base de données", items: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "SQL" }] },
      { category: "DevOps", items: [{ name: "Docker" }, { name: "Git" }, { name: "GitHub" }, { name: "VPS" }] },
    ],
    process: [
      { step: 1, title: "Analyse du besoin", description: "Compréhension du contexte métier, des utilisateurs et des objectifs" },
      { step: 2, title: "Architecture & Design", description: "Choix des technologies, modèle de données et structure applicative" },
      { step: 3, title: "Développement itératif", description: "Construction progressive avec livraisons régulières et validation" },
      { step: 4, title: "Déploiement & maintenance", description: "Mise en production, supervision et amélioration continue" },
    ],
    processEn: [
      { step: 1, title: "Needs Analysis", description: "Understanding business context, users, and goals" },
      { step: 2, title: "Architecture & Design", description: "Technology selection, data model, and application structure" },
      { step: 3, title: "Iterative Development", description: "Progressive build with regular validation and delivery" },
      { step: 4, title: "Deployment & Maintenance", description: "Production launch, monitoring, and continuous improvement" },
    ],
  },
  {
    icon: Smartphone,
    title: "Développement Mobile",
    titleEn: "Mobile Development",
    slug: "developpement-mobile",
    description: "Applications iOS/Android fluides, ergonomiques et orientées usage",
    descriptionEn: "Smooth, ergonomic, and user-focused iOS and Android applications",
    heroDescription:
      "Je développe des applications mobiles avec Flutter et React Native en mettant l'accent sur la fluidité, la qualité UX et la fiabilité des parcours utilisateurs.",
    heroDescriptionEn:
      "I build mobile applications with Flutter and React Native, focusing on smoothness, UX quality, and reliability across the user journey.",
    offerings: [
      "Applications mobiles pour iOS et Android",
      "Interfaces ergonomiques et pensées pour l'usage",
      "Synchronisation locale et gestion des données",
      "Intégration API et services tiers",
      "Parcours utilisateur optimisés et testés",
      "Livraison sur environnements de test puis production",
      "Déploiement, maintenance et support",
    ],
    offeringsEn: [
      "Mobile apps for iOS and Android",
      "Ergonomic interfaces designed around real user needs",
      "Local synchronization and data management",
      "API and third-party service integration",
      "Optimized and validated user journeys",
      "Delivery through test and production environments",
      "Deployment, maintenance, and support",
    ],
    technologies: [
      { category: "Framework", items: [{ name: "Flutter" }, { name: "React Native" }, { name: "Expo" }] },
      { category: "Langage", items: [{ name: "Dart" }, { name: "TypeScript" }, { name: "JavaScript" }] },
      { category: "Backend", items: [{ name: "Node.js" }, { name: "FastAPI" }, { name: "Django" }] },
      { category: "Intégration", items: [{ name: "API REST" }, { name: "GraphQL" }, { name: "Webhooks" }] },
    ],
    process: [
      { step: 1, title: "Conception UX/UI", description: "Élaboration des parcours utilisateurs et maquettes fonctionnelles" },
      { step: 2, title: "Développement", description: "Mise en place des écrans, logique et services backend" },
      { step: 3, title: "Tests & validation", description: "Vérification du comportement sur différents cas d'usage" },
      { step: 4, title: "Livraison", description: "Publication, déploiement et support post-livraison" },
    ],
    processEn: [
      { step: 1, title: "UX/UI Design", description: "Definition of user journeys and functional mockups" },
      { step: 2, title: "Development", description: "Implementation of screens, logic, and backend services" },
      { step: 3, title: "Testing & Validation", description: "Cross-checking behavior across real user scenarios" },
      { step: 4, title: "Delivery", description: "Release, deployment, and post-delivery support" },
    ],
  },
  {
    icon: Palette,
    title: "UI/UX & Design d'interface",
    titleEn: "UI/UX & Interface Design",
    slug: "design-ui-ux",
    description: "Interfaces modernes, claires et centrées sur l'expérience utilisateur",
    descriptionEn: "Modern, clear interfaces centered on the user experience",
    heroDescription:
      "Je conçois des interfaces accessibles et cohérentes, du wireframe au design system, en pensant à la clarté, à la conversion et à la simplicité d’usage.",
    heroDescriptionEn:
      "I design accessible and cohesive interfaces from wireframe to design system, with a focus on clarity, conversion, and ease of use.",
    offerings: [
      "Audit UX et parcours utilisateur",
      "Wireframes, maquettes et prototypes interactifs",
      "Design system et composants réutilisables",
      "Responsive design mobile, tablette et desktop",
      "Interfaces modernes, lisibles et accessibles",
      "Micro-interactions et animations utiles",
      "Intégration front-end cohérente avec le produit",
    ],
    offeringsEn: [
      "UX audit and user journey mapping",
      "Wireframes, mockups, and interactive prototypes",
      "Design systems and reusable components",
      "Responsive design for mobile, tablet, and desktop",
      "Modern, readable, and accessible interfaces",
      "Useful micro-interactions and animations",
      "Coherent front-end integration with the product",
    ],
    technologies: [
      { category: "Design", items: [{ name: "Figma" }] },
      { category: "Frontend", items: [{ name: "Next.js" }, { name: "React.js" }, { name: "Tailwind CSS" }] },
      { category: "Animation", items: [{ name: "Framer Motion" }] },
      { category: "UX", items: [{ name: "Responsive Design" }, { name: "Accessibilité" }] },
    ],
    process: [
      { step: 1, title: "Recherche & Analyse", description: "Étude du besoin, des utilisateurs et des parcours" },
      { step: 2, title: "Wireframe & Maquette", description: "Structuration visuelle et hiérarchisation du contenu" },
      { step: 3, title: "Design & intégration", description: "Mise en forme des écrans et adaptation sur tous supports" },
      { step: 4, title: "Validation UX", description: "Test d'usage, ajustements et finalisation" },
    ],
    processEn: [
      { step: 1, title: "Research & Analysis", description: "Study of user needs and journeys" },
      { step: 2, title: "Wireframe & Mockup", description: "Visual structure and content hierarchy" },
      { step: 3, title: "Design & Integration", description: "Screen styling and multi-device adaptation" },
      { step: 4, title: "UX Validation", description: "Usage testing, adjustments, and finalization" },
    ],
  },
  {
    icon: Search,
    title: "API & Backend",
    titleEn: "API & Backend",
    slug: "api-backend",
    description: "API sécurisées, backend robustes et intégrations fiables",
    descriptionEn: "Secure APIs, robust backends, and reliable integrations",
    heroDescription:
      "Je conçois et implémente des API, services backend et flux d’intégration qui garantissent stabilité, sécurité et évolutivité pour les produits numériques.",
    heroDescriptionEn:
      "I design and implement APIs, backend services, and integration flows that ensure stability, security, and scalability for digital products.",
    offerings: [
      "API REST et GraphQL performantes",
      "Services backend, microservices et logique métier",
      "Authentification, permissions et sécurité",
      "Modélisation de données et gestion relationnelle",
      "Intégration d'API tierces et webhooks",
      "Automatisations et traitement asynchrone",
      "Optimisation des requêtes et monitoring",
      "Maintenance et évolutions techniques",
    ],
    offeringsEn: [
      "High-performance REST and GraphQL APIs",
      "Backend services, microservices, and business logic",
      "Authentication, permissions, and security",
      "Data modeling and relational management",
      "Third-party API integration and webhooks",
      "Automation and asynchronous processing",
      "Query optimization and monitoring",
      "Maintenance and technical evolution",
    ],
    technologies: [
      { category: "Backend", items: [{ name: "Node.js" }, { name: "Express.js" }, { name: "FastAPI" }, { name: "Django" }, { name: "Laravel" }] },
      { category: "API", items: [{ name: "REST API" }, { name: "GraphQL" }, { name: "Apollo Client" }, { name: "Webhooks" }] },
      { category: "Base de données", items: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "SQL" }] },
    ],
    process: [
      { step: 1, title: "Spécification", description: "Définition des cas d'usage, flux et règles métier" },
      { step: 2, title: "Modélisation", description: "Mise en place du schéma de données et logique applicative" },
      { step: 3, title: "Développement & tests", description: "Implémentation des endpoints et validation fonctionnelle" },
      { step: 4, title: "Sécurisation & déploiement", description: "Protection, monitoring et mise en production" },
    ],
    processEn: [
      { step: 1, title: "Specification", description: "Definition of use cases, flows, and business rules" },
      { step: 2, title: "Modeling", description: "Setup of data schema and application logic" },
      { step: 3, title: "Development & Tests", description: "Endpoint implementation and functional validation" },
      { step: 4, title: "Security & Deployment", description: "Protection, monitoring, and production launch" },
    ],
  },
  {
    icon: Wrench,
    title: "DevOps & Hébergement",
    titleEn: "DevOps & Hosting",
    slug: "devops-hebergement",
    description: "Infrastructure, CI/CD et hébergement pour des livraisons fiables",
    descriptionEn: "Infrastructure, CI/CD, and hosting for reliable delivery",
    heroDescription:
      "Je mets en place les pipelines de déploiement, la conteneurisation et les bonnes pratiques d’hébergement pour sécuriser les mises en production et faciliter la maintenance.",
    heroDescriptionEn:
      "I set up deployment pipelines, containerization, and hosting best practices to secure production releases and simplify maintenance.",
    offerings: [
      "Conteneurisation avec Docker",
      "CI/CD et automatisation des livraisons",
      "Déploiement sur VPS, Vercel, Netlify et Firebase",
      "Gestion des environnements dev/test/prod",
      "Versioning Git/GitHub et workflow d’équipe",
      "Monitoring, sécurité et sauvegarde",
      "Mise en production et maintenance",
      "Documentation technique et guides d’exploitation",
    ],
    offeringsEn: [
      "Containerization with Docker",
      "CI/CD and deployment automation",
      "Deployment on VPS, Vercel, Netlify, and Firebase",
      "Management of dev/test/prod environments",
      "Git/GitHub versioning and team workflow",
      "Monitoring, security, and backup",
      "Production launch and maintenance",
      "Technical documentation and operations guides",
    ],
    technologies: [
      { category: "DevOps", items: [{ name: "Docker" }, { name: "Git" }, { name: "GitHub" }, { name: "VPS" }, { name: "Trello" }] },
      { category: "Hébergement", items: [{ name: "Vercel" }, { name: "Netlify" }, { name: "Firebase" }] },
      { category: "Qualité", items: [{ name: "Environnement dev/test/prod" }, { name: "Mise en production" }] },
    ],
    process: [
      { step: 1, title: "Évaluation de l'infra", description: "Analyse de l'environnement actuel et des besoins de déploiement" },
      { step: 2, title: "Configuration", description: "Préparation des services, conteneurs et variables d'environnement" },
      { step: 3, title: "Déploiement", description: "Mise en ligne sécurisée et validation fonctionnelle" },
      { step: 4, title: "Maintenance", description: "Suivi, mises à jour et optimisation continue" },
    ],
    processEn: [
      { step: 1, title: "Infrastructure Assessment", description: "Analysis of the current environment and deployment needs" },
      { step: 2, title: "Configuration", description: "Preparation of services, containers, and environment variables" },
      { step: 3, title: "Deployment", description: "Secure release and functional validation" },
      { step: 4, title: "Maintenance", description: "Monitoring, updates, and continuous optimization" },
    ],
  },
]

const uniqueServicesData = Array.from(
  new Map(servicesData.map((service) => [service.slug, service])).values(),
)

export const services: Service[] = uniqueServicesData

export function getServiceBySlug(slug: string) {
  return uniqueServicesData.find((s) => s.slug === slug) ?? null
}

export function getOtherServices(currentSlug: string) {
  return uniqueServicesData.filter((s) => s.slug !== currentSlug)
}

export function getLocalizedService(slug: string, lang: Language): Service | null {
  const s = uniqueServicesData.find((svc) => svc.slug === slug)
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
  return uniqueServicesData.map((s) => {
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
