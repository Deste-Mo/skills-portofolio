import type { Translations } from "../types"

const fr: Translations = {
  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    experiences: "Expériences",
    services: "Services",
    projects: "Projets",
    contact: "Contact",
  },
  language: {
    chooseLanguage: "Choisir la langue",
    french: "Français",
    english: "Anglais",
  },
  theme: {
    light: "Mode clair",
    dark: "Mode sombre",
    system: "Système",
    chooseTheme: "Choisir le thème",
    switchToLight: "Passer en mode clair",
    switchToDark: "Passer en mode sombre",
  },
  hero: {
    badge: "À l'écoute d'opportunités",
    name: "MODESTE TOLOJANAHARY",
    role: "Développeur Full stack & DevOps",
    description:
      "Développeur full stack & DevOps (JavaScript, Python) : je conçois, développe et déploie des applications web et mobiles de bout en bout, du code jusqu’à la mise en production sur VPS.",
    viewWork: "Voir mon travail",
    letsTalk: "Discutons",
    cv: "Mon CV",
    networks: "Réseaux :",
    preferredStack: "Stack de prédilection :",
    availability: "Disponibilité",
    uptime: "Suivi de disponibilité",
    deployments: "Déploiements",
    automatedGitPush: "Push Git automatisé",
  },
  about: {
    title: "À propos",
    subtitle:
      "Développeur full stack & DevOps (JavaScript, Python) : je conçois, développe et déploie des applications web et mobiles de bout en bout, du code jusqu’à la mise en production sur VPS.",
    role: "Développeur Full stack & DevOps",
    description:
      "Développeur full stack & DevOps (JavaScript, Python) : je conçois et mets en production des applications robustes, du frontend jusqu’aux environnements de déploiement. À l’aise avec Docker, Git, les API REST/GraphQL et la gestion des environnements dev/test/prod.",
    contact: "Contact",
    contactDesc: "Disponible pour de nouveaux projets, collaborations et missions techniques.",
    interests: "Centres d'intérêt",
    quote: "Designer l'expérience, développer la solution.",
    available: "Disponible",
    humanCentered: "Une approche axée sur l'expérience humaine, consolidée par une rigueur d'ingénierie logicielle sans faille.",
    seniorCore: "Senior Core",
    interestsList: {
      games: "Jeux",
      movies: "Films",
      anime: "Anime",
    },
  },
  skills: {
    title: "Compétences",
    description:
      "Technologies, outils et méthodologies que j'utilise au quotidien pour concevoir des applications robustes et évolutives.",
    technicalExpertise: "Expertise Technique",
    uiuxTitle: "UI / UX Design & Accessibilité",
    uiuxDescription: "Design d'interfaces modernes, responsives et accessibles",
    uiuxTags: [
      "Intégration de maquettes Figma",
      "Responsive Design",
      "Interfaces modernes",
      "Accessibilité",
    ],
    groups: {
      core: { title: "Langages", description: "Langages de programmation et logique métier", tags: ["PHP", "Python", "JavaScript", "TypeScript"] },
      client: { title: "Frontend & Mobile", description: "Interfaces web et applications mobiles modernes et performantes", tags: ["Next.js", "React.js", "React Native", "Flutter", "Expo"] },
      server: { title: "Backend & API", description: "API robustes, services serveur et intégrations tierces", tags: ["Laravel", "FastAPI", "Node.js", "Express.js", "Django", "REST API", "GraphQL", "Apollo Client", "Webhooks", "Intégration d'API tierces"] },
      data: { title: "Bases de données", description: "Conception, gestion et optimisation de données relationnelles", tags: ["PostgreSQL", "MySQL", "SQL", "Modélisation relationnelle", "Optimisation des requêtes"] },
      ops: { title: "DevOps & Déploiement", description: "Conteneurisation, déploiement et maintenance en production", tags: ["Docker", "VPS", "Vercel", "Netlify", "Firebase", "Git", "GitHub", "Environnements dev/test/prod"] },
      patterns: { title: "Architecture & Qualité", description: "Bonnes pratiques, composants réutilisables et amélioration continue", tags: ["Architecture Full Stack", "Composants réutilisables", "Hooks personnalisés", "Refactorisation", "Performance"] },
    },
  },
  experiences: {
    title: "Expériences",
    description: "Mon parcours professionnel et mes formations",
    formations: "Formations",
    formationsDesc: "Mon parcours académique et mes diplômes",
    journeyBadge: "Parcours & Évolution",
    formationsList: [
      { period: "2022 - En cours", degree: "Master & Licence en Développement informatique", school: "EMIT Fianarantsoa (Madagascar)" },
      { period: "2020 - 2023", degree: "Licence en Développement informatique", school: "EMEDIA Antananarivo (Madagascar)" },
      { period: "2020", degree: "Année préparatoire", school: "SESAME Antananarivo (Madagascar)" },
    ],
  },
  services: {
    title: "Services",
    description: "Ce que je peux faire pour vous",
    learnMore: "En savoir plus",
    valueOffer: "Offre de valeur",
    cards: {
      frontend: {
        title: "Développement Frontend",
        description: "Interfaces web modernes, responsives et centrées sur l'expérience utilisateur.",
      },
      mobile: {
        title: "Développement Mobile",
        description: "Applications mobiles Android et iOS, fluides, intuitives et prêtes pour les stores.",
      },
      design: {
        title: "UI/UX & Design",
        description: "Conception d'expériences numériques, maquettes, user flows et design systems.",
      },
      backend: {
        title: "Développement Backend",
        description: "API, logique métier et bases de données pour des services fiables et évolutifs.",
      },
      devops: {
        title: "DevOps & Hébergement",
        description: "Déploiement, infrastructure, fiabilité et maintenance des applications en production sur des serveurs VPS haute performance.",
      },
    },
  },
  projects: {
    title: "Projets",
    description: "Une sélection de mes réalisations récentes",
    badge: "Portfolio Réalisations",
    filters: {
      all: "Tous",
      web: "Web",
      mobile: "Mobile",
      ai: "IA",
    },
    meta: {
      ai: "OpenAI / Production",
      hotel: "Gestion Hôtelière & Restauration",
      gis: "SIG & Topographie 3D",
      tourism: "E-commerce Tourisme",
    },
    ready: "Prêt pour onboarding rapide",
    remote: "Remote & CDI",
  },
  contact: {
    badge: "Prendre Contact",
    title: "Contact",
    description: "Discutons de votre prochain projet ensemble",
    cta: "Parlons de votre projet",
    ctaDesc:
      "Je suis toujours ouvert aux nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour discuter de votre projet ou simplement dire bonjour.",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    locationValue: "Fianarantsoa, Madagascar",
    form: {
      name: "Nom complet",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      placeholderName: "Votre nom",
      placeholderEmail: "votre@email.com",
      placeholderSubject: "Sujet de votre message",
      placeholderMessage: "Votre message...",
      submit: "Envoyer le message",
    },
    success: {
      title: "Message envoyé !",
      description:
        "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    },
  },
  service: {
    back: "Tous les services",
    offerings: "Ce que j'offre",
    technologies: "Technologies & Outils",
    process: "Mon processus",
    otherServices: "Découvrez mes autres services",
    cta: {
      title: "Prêt à démarrer votre projet ?",
      description:
        "Discutons de vos besoins et voyons comment je peux vous aider",
      contact: "Me contacter",
      projects: "Voir mes projets",
    },
  },
  footer: {
    navigation: "Navigation",
    networkAndContact: "Réseaux & Contact",
    availableFor: "Disponible pour missions & CDI",
    downloadCv: "Télécharger CV (PDF)",
    rights: "Tous droits réservés.",
    designed: "Conçu avec rigueur • Dark Precision UI",
    description: "Ingénieur Full stack & DevOps spécialisé dans l'architecture distribuée, les conteneurs et les interfaces réactives haute performance.",
    githubProfile: "Profil GitHub",
    linkedinProfile: "Réseau LinkedIn",
  },
}

export default fr
