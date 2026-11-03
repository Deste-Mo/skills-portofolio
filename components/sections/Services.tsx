"use client"

import Link from "next/link"

const services = [
  {
    title: "Développement Frontend",
    description: "Interfaces web modernes, responsives et centrées sur l'expérience utilisateur.",
    icon: "web",
    href: "/services/developpement-frontend",
    color: "text-[#00e5a3]",
  },
  {
    title: "Développement Mobile",
    description: "Applications mobiles Android et iOS, fluides, intuitives et prêtes pour les stores.",
    icon: "smartphone",
    href: "/services/developpement-mobile",
    color: "text-[#93b4ff]",
  },
  {
    title: "UI/UX & Design",
    description: "Conception d'expériences numériques, maquettes, user flows et design systems.",
    icon: "palette",
    href: "/services/design-ui-ux",
    color: "text-[#00e5a3]",
  },
  {
    title: "Développement Backend",
    description: "API, logique métier et bases de données pour des services fiables et évolutifs.",
    icon: "terminal",
    href: "/services/developpement-backend",
    color: "text-[#b6efff]",
  },
  {
    title: "DevOps & Hébergement",
    description: "Déploiement, infrastructure, fiabilité et maintenance des applications en production sur des serveurs VPS haute performance.",
    icon: "cloud_done",
    href: "/services/devops-hebergement",
    color: "text-[#00e5a3]",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-0.5 bg-[#00e5a3] inline-block"></span>
          <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#00e5a3] font-semibold">Offre de Valeur</span>
        </div>
        <h2 className="font-['Plus_Jakarta_Sans'] text-[36px] md:text-[46px] text-[#e1e2ec]">Services</h2>
        <p className="font-inter text-[15px] md:text-[18px] text-[#9aa5b5] mt-2 max-w-2xl leading-relaxed">
          Ce que je peux faire pour vous
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="p-8 rounded-xl bg-[#141824] border border-[#525c6c]/30 hover:border-[#00e5a3]/50 transition-colors flex flex-col justify-between group h-full"
          >
            <div className="space-y-4">
              <div className={`w-12 h-12 rounded-lg bg-[#181b22] border border-[#3b494b]/20 flex items-center justify-center ${service.color} group-hover:bg-[#00e5a3] group-hover:text-[#0d0f14] transition-colors`}>
                <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] text-[#e1e2ec] group-hover:text-[#00e5a3] transition-colors">
                {service.title}
              </h3>
              <p className="font-inter text-[15px] text-[#9aa5b5]">
                {service.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#00e5a3] font-mono text-[12px] pt-6 font-semibold">
              <span>En savoir plus</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
