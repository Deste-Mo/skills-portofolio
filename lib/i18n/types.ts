export type Language = "fr" | "en"

export interface Translations {
  nav: {
    home: string
    about: string
    skills: string
    experiences: string
    services: string
    projects: string
    contact: string
  }
  language: {
    chooseLanguage: string
    french: string
    english: string
  }
  theme: {
    light: string
    dark: string
    system: string
    chooseTheme: string
    switchToLight: string
    switchToDark: string
  }
  hero: {
    badge: string
    name: string
    role: string
    description: string
    viewWork: string
    letsTalk: string
    cv: string
    networks: string
    preferredStack: string
    availability: string
    uptime: string
    deployments: string
    automatedGitPush: string
  }
  about: {
    title: string
    subtitle: string
    role: string
    description: string
    contact: string
    contactDesc: string
    interests: string
    quote: string
    available: string
    humanCentered: string
    seniorCore: string
    interestsList: {
      games: string
      movies: string
      anime: string
    }
  }
  skills: {
    title: string
    description: string
    technicalExpertise: string
    uiuxTitle: string
    uiuxDescription: string
    uiuxTags: string[]
    groups: {
      core: { title: string; description: string; tags: string[] }
      client: { title: string; description: string; tags: string[] }
      server: { title: string; description: string; tags: string[] }
      data: { title: string; description: string; tags: string[] }
      ops: { title: string; description: string; tags: string[] }
      patterns: { title: string; description: string; tags: string[] }
    }
  }
  experiences: {
    title: string
    description: string
    formations: string
    formationsDesc: string
    journeyBadge: string
    formationsList: Array<{ period: string; degree: string; school: string }>
  }
  services: {
    title: string
    description: string
    learnMore: string
    valueOffer: string
    cards: {
      frontend: { title: string; description: string }
      mobile: { title: string; description: string }
      design: { title: string; description: string }
      backend: { title: string; description: string }
      devops: { title: string; description: string }
    }
  }
  projects: {
    title: string
    description: string
    badge: string
    filters: {
      all: string
      web: string
      mobile: string
      ai: string
    }
    meta: {
      ai: string
      hotel: string
      gis: string
      tourism: string
    }
    ready: string
    remote: string
  }
  contact: {
    badge: string
    title: string
    description: string
    cta: string
    ctaDesc: string
    email: string
    phone: string
    location: string
    locationValue: string
    form: {
      name: string
      email: string
      subject: string
      message: string
      placeholderName: string
      placeholderEmail: string
      placeholderSubject: string
      placeholderMessage: string
      submit: string
    }
    success: {
      title: string
      description: string
    }
  }
  service: {
    back: string
    offerings: string
    technologies: string
    process: string
    otherServices: string
    cta: {
      title: string
      description: string
      contact: string
      projects: string
    }
  }
  footer: {
    navigation: string
    networkAndContact: string
    availableFor: string
    downloadCv: string
    rights: string
    designed: string
    description: string
    githubProfile: string
    linkedinProfile: string
  }
}
