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
    title: "Développement Frontend",
    titleEn: "Frontend Development",
    slug: "developpement-frontend",
    description: "Interfaces web modernes, responsives et centrées sur l'expérience utilisateur",
    descriptionEn: "Modern, responsive web interfaces focused on user experience",
    heroDescription:
      "Je développe des interfaces web modernes et performantes, en intégrant les maquettes, la logique front-end et les bonnes pratiques UX pour offrir une expérience claire et fluide.",
    heroDescriptionEn:
      "I develop modern and high-performing web interfaces by integrating mockups, front-end logic, and UX best practices to deliver a clear and smooth experience.",
    offerings: [
      "Développement de sites web et applications web",
      "Création de tableaux de bord et interfaces d'administration",
      "Intégration de maquettes Figma",
      "Responsive design pour ordinateur, tablette et mobile",
      "Intégration d'API REST et GraphQL",
      "Optimisation des performances et du référencement technique",
      "Maintenance et modernisation d'interfaces existantes",
    ],
    offeringsEn: [
      "Development of websites and web applications",
      "Creation of dashboards and admin interfaces",
      "Figma mockup integration",
      "Responsive design for desktop, tablet, and mobile",
      "REST and GraphQL API integration",
      "Performance and technical SEO optimization",
      "Maintenance and modernization of existing interfaces",
    ],
    technologies: [
      { category: "Frontend", items: [{ name: "Next.js" }, { name: "React.js" }, { name: "TypeScript" }, { name: "Tailwind CSS" }] },
      { category: "Langages", items: [{ name: "JavaScript" }, { name: "TypeScript" }] },
      { category: "UI", items: [{ name: "Responsive Design" }, { name: "Figma" }, { name: "Accessibilité" }] },
      { category: "Performance", items: [{ name: "Optimisation UX" }, { name: "SEO technique" }, { name: "Performance web" }] },
    ],
    process: [
      { step: 1, title: "Analyse du besoin", description: "Compréhension du produit, des utilisateurs et des objectifs d'usage" },
      { step: 2, title: "Maquettes & structure", description: "Organisation des écrans, parcours et composants visuels" },
      { step: 3, title: "Développement front-end", description: "Mise en place de l’interface, des interactions et de la logique UI" },
      { step: 4, title: "Validation & maintenance", description: "Tests d’usage, optimisation et évolution continue" },
    ],
    processEn: [
      { step: 1, title: "Needs Analysis", description: "Understanding the product, users, and usage goals" },
      { step: 2, title: "Mockups & Structure", description: "Screen organization, journeys, and visual components" },
      { step: 3, title: "Front-end Development", description: "UI implementation, interactions, and front-end logic" },
      { step: 4, title: "Validation & Maintenance", description: "Usability testing, optimization, and ongoing evolution" },
    ],
  },
  {
    icon: Smartphone,
    title: "Développement Mobile",
    titleEn: "Mobile Development",
    slug: "developpement-mobile",
    description: "Applications mobiles Android et iOS, fluides, intuitives et prêtes pour les stores",
    descriptionEn: "Android and iOS mobile applications that are fluid, intuitive, and store-ready",
    heroDescription:
      "Je conçois et développe des applications mobiles multiplateformes pour Android et iOS, avec un focus sur la fluidité, l’expérience utilisateur et la qualité fonctionnelle.",
    heroDescriptionEn:
      "I design and build cross-platform mobile applications for Android and iOS, with a focus on fluidity, user experience, and functional quality.",
    offerings: [
      "Création d'applications mobiles multiplateformes",
      "Développement d'interfaces mobiles fluides et intuitives",
      "Intégration d'API et de services backend",
      "Authentification, notifications push et gestion des utilisateurs",
      "Stockage local et fonctionnalités hors ligne",
      "Publication et préparation des applications pour les stores",
      "Maintenance, correction de bugs et évolution des applications",
    ],
    offeringsEn: [
      "Creation of cross-platform mobile applications",
      "Development of smooth and intuitive mobile interfaces",
      "API and backend service integration",
      "Authentication, push notifications, and user management",
      "Local storage and offline functionality",
      "Publishing and preparation for app stores",
      "Maintenance, bug fixes, and application evolution",
    ],
    technologies: [
      { category: "Framework", items: [{ name: "Flutter" }, { name: "React Native" }, { name: "Expo" }] },
      { category: "Langages", items: [{ name: "Dart" }, { name: "TypeScript" }, { name: "JavaScript" }] },
      { category: "Intégration", items: [{ name: "REST API" }, { name: "GraphQL" }, { name: "Firebase" }] },
      { category: "Expérience", items: [{ name: "UX mobile" }, { name: "Notifications" }, { name: "Offline" }] },
    ],
    process: [
      { step: 1, title: "Analyse fonctionnelle", description: "Définition du besoin, des parcours mobiles et des cas d’usage" },
      { step: 2, title: "Conception UI/UX", description: "Création de l’architecture d’écrans et de l’expérience utilisateur" },
      { step: 3, title: "Développement mobile", description: "Implémentation des écrans, logique applicative et intégrations" },
      { step: 4, title: "Tests & publication", description: "Validation sur appareil, correction et préparation des stores" },
    ],
    processEn: [
      { step: 1, title: "Functional Analysis", description: "Definition of needs, mobile journeys, and use cases" },
      { step: 2, title: "UI/UX Design", description: "Creation of screen architecture and user experience" },
      { step: 3, title: "Mobile Development", description: "Implementation of screens, app logic, and integrations" },
      { step: 4, title: "Testing & Publication", description: "Device validation, fixes, and store preparation" },
    ],
  },
  {
    icon: Palette,
    title: "UI/UX & Design",
    titleEn: "UI/UX & Design",
    slug: "design-ui-ux",
    description: "Conception d'expériences numériques, maquettes, user flows et design systems",
    descriptionEn: "Design of digital experiences, mockups, user flows, and design systems",
    heroDescription:
      "Je conçois des interfaces cohérentes, accessibles et centrées sur l’utilisateur, de la structure de l’information aux maquettes et prototypes interactifs.",
    heroDescriptionEn:
      "I design coherent, accessible, and user-centered interfaces from information architecture to interactive mockups and prototypes.",
    offerings: [
      "Conception de maquettes et prototypes interactifs",
      "Architecture de l'information et organisation des parcours utilisateurs",
      "Création de wireframes et de user flows",
      "Conception de design systems et composants réutilisables",
      "Création d'interfaces cohérentes et accessibles",
      "Prototypage et préparation des maquettes pour le développement",
      "Amélioration de l'expérience utilisateur sur les interfaces existantes",
    ],
    offeringsEn: [
      "Creation of mockups and interactive prototypes",
      "Information architecture and user journey organization",
      "Creation of wireframes and user flows",
      "Design systems and reusable component design",
      "Creation of coherent and accessible interfaces",
      "Prototyping and preparation of mockups for development",
      "Improvement of user experience on existing interfaces",
    ],
    technologies: [
      { category: "Outils", items: [{ name: "Figma" }, { name: "FigJam" }, { name: "Prototypage" }] },
      { category: "UX", items: [{ name: "User flows" }, { name: "Wireframes" }, { name: "Accessibilité" }] },
      { category: "Design", items: [{ name: "Design system" }, { name: "Composants UI" }, { name: "Responsive" }] },
    ],
    process: [
      { step: 1, title: "Recherche & analyse", description: "Étude du besoin, des utilisateurs et des parcours" },
      { step: 2, title: "Wireframes & flows", description: "Structuration de l'information et des interactions" },
      { step: 3, title: "Design & prototype", description: "Création des visuels, composants et maquettes interactives" },
      { step: 4, title: "Validation UX", description: "Test, ajustements et préparation au développement" },
    ],
    processEn: [
      { step: 1, title: "Research & Analysis", description: "Study of needs, users, and journeys" },
      { step: 2, title: "Wireframes & Flows", description: "Structuring information and interactions" },
      { step: 3, title: "Design & Prototype", description: "Creation of visuals, components, and interactive mockups" },
      { step: 4, title: "UX Validation", description: "Testing, adjustments, and preparation for development" },
    ],
  },
  {
    icon: Search,
    title: "Développement Backend",
    titleEn: "Backend Development",
    slug: "developpement-backend",
    description: "API, logique métier et bases de données pour des services fiables et évolutifs",
    descriptionEn: "APIs, business logic, and databases for reliable and scalable services",
    heroDescription:
      "Je conçois et développe des API, services backend et architectures de données fiables, sécurisées et évolutives, en assurant la disponibilité, la cohérence et la performance du système.",
    heroDescriptionEn:
      "I design and develop reliable, secure, and scalable APIs, backend services, and data architectures, ensuring system availability, consistency, and performance.",
    offerings: [
      "Conception et développement d'API REST et GraphQL",
      "Création de systèmes d'authentification et d'autorisation",
      "Conception et optimisation de bases de données",
      "Développement de fonctionnalités métier et de services applicatifs",
      "Intégration de paiements et de services tiers",
      "Sécurisation des API et gestion des accès",
      "Documentation, tests et maintenance des services backend",
    ],
    offeringsEn: [
      "Design and development of REST and GraphQL APIs",
      "Creation of authentication and authorization systems",
      "Database design and optimization",
      "Development of business features and application services",
      "Payment and third-party service integration",
      "API hardening and access management",
      "Documentation, testing, and maintenance of backend services",
    ],
    technologies: [
      { category: "Backend", items: [{ name: "FastAPI" }, { name: "Node.js" }, { name: "Laravel" }, { name: "Express.js" }] },
      { category: "API", items: [{ name: "REST API" }, { name: "GraphQL" }, { name: "Webhooks" }] },
      { category: "Bases de données", items: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "SQL" }] },
      { category: "Sécurité", items: [{ name: "Auth" }, { name: "JWT" }, { name: "Autorisation" }] },
    ],
    process: [
      { step: 1, title: "Spécification", description: "Définition des cas d’usage, flux et règles métier" },
      { step: 2, title: "Modélisation", description: "Conception du schéma de données et des services applicatifs" },
      { step: 3, title: "Développement backend", description: "Mise en place des endpoints, logique métier et intégrations" },
      { step: 4, title: "Sécurisation & maintenance", description: "Protection, tests, monitoring et évolution continue" },
    ],
    processEn: [
      { step: 1, title: "Specification", description: "Definition of use cases, flows, and business rules" },
      { step: 2, title: "Modeling", description: "Design of the data model and application services" },
      { step: 3, title: "Backend Development", description: "Implementation of endpoints, business logic, and integrations" },
      { step: 4, title: "Security & Maintenance", description: "Protection, testing, monitoring, and continuous improvement" },
    ],
  },
  {
    icon: Wrench,
    title: "DevOps & Hébergement",
    titleEn: "DevOps & Hosting",
    slug: "devops-hebergement",
    description: "Déploiement, infrastructure, fiabilité et maintenance des applications en production",
    descriptionEn: "Deployment, infrastructure, reliability, and maintenance of applications in production",
    heroDescription:
      "Je mets en place l’infrastructure et les pipelines de livraison pour sécuriser les déploiements, améliorer la fiabilité et simplifier la maintenance des applications en production.",
    heroDescriptionEn:
      "I set up the infrastructure and delivery pipelines to secure deployments, improve reliability, and simplify the maintenance of production applications.",
    offerings: [
      "Déploiement d'applications web et d'API sur serveur ou cloud",
      "Configuration et administration de serveurs Linux",
      "Mise en place de pipelines CI/CD",
      "Conteneurisation avec Docker",
      "Configuration des domaines, DNS, HTTPS et certificats SSL",
      "Mise en place des sauvegardes et du monitoring",
      "Maintenance, mises à jour et résolution des incidents de production",
    ],
    offeringsEn: [
      "Deployment of web apps and APIs on servers or cloud",
      "Configuration and administration of Linux servers",
      "Setup of CI/CD pipelines",
      "Containerization with Docker",
      "Domain, DNS, HTTPS, and SSL certificate configuration",
      "Backup and monitoring setup",
      "Maintenance, updates, and production incident resolution",
    ],
    technologies: [
      { category: "Infra", items: [{ name: "Linux" }, { name: "VPS" }, { name: "Cloud" }, { name: "Nginx" }] },
      { category: "CI/CD", items: [{ name: "GitHub Actions" }, { name: "Docker" }, { name: "Git" }] },
      { category: "Sécurité", items: [{ name: "HTTPS" }, { name: "SSL" }, { name: "DNS" }, { name: "Monitoring" }] },
    ],
    process: [
      { step: 1, title: "Audit infrastructure", description: "Analyse de l’environnement actuel et des besoins de déploiement" },
      { step: 2, title: "Configuration serveur", description: "Mise en place des services, conteneurs, variables et sécurité" },
      { step: 3, title: "Déploiement & validation", description: "Livraison sécurisée et vérification fonctionnelle en production" },
      { step: 4, title: "Maintenance & supervision", description: "Surveillance, mises à jour et résolution des incidents" },
    ],
    processEn: [
      { step: 1, title: "Infrastructure Audit", description: "Analysis of the current environment and deployment needs" },
      { step: 2, title: "Server Configuration", description: "Setup of services, containers, variables, and security" },
      { step: 3, title: "Deployment & Validation", description: "Secure delivery and functional verification in production" },
      { step: 4, title: "Maintenance & Supervision", description: "Monitoring, updates, and incident resolution" },
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
