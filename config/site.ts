export const siteConfig = {
  name: "Modeste",
  description: "Mon portfolio professionnel pour présenter mes compétences et projets.",
  mainNav: [
    {
      title: "Accueil",
      href: "/",
    },
    {
      title: "À propos",
      href: "#about",
    },
    {
      title: "Compétences",
      href: "#skills",
    },
    {
      title: "Projets",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
