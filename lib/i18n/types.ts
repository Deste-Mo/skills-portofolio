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
  theme: {
    light: string
    dark: string
  }
  hero: {
    badge: string
    name: string
    role: string
    description: string
    viewWork: string
    letsTalk: string
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
  }
  skills: {
    title: string
    description: string
  }
  experiences: {
    title: string
    description: string
    formations: string
    formationsDesc: string
  }
  services: {
    title: string
    description: string
    learnMore: string
  }
  projects: {
    title: string
    description: string
  }
  contact: {
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
    rights: string
  }
}
