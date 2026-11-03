"use client"

import Link from "next/link"
import {
  ArrowRight,
  CloudCog,
  Code2,
  Globe,
  Palette,
  Smartphone,
} from "lucide-react"
import { useTranslation } from "@/lib/i18n/context"

const services = [
  {
    title: "Développement Frontend",
    description: "Interfaces web modernes, responsives et centrées sur l'expérience utilisateur.",
    icon: Globe,
    href: "/services/developpement-frontend",
    color: "text-[#059669] dark:text-[#00e5a3]",
  },
  {
    title: "Développement Mobile",
    description: "Applications mobiles Android et iOS, fluides, intuitives et prêtes pour les stores.",
    icon: Smartphone,
    href: "/services/developpement-mobile",
    color: "text-[#2563eb] dark:text-[#93b4ff]",
  },
  {
    title: "UI/UX & Design",
    description: "Conception d'expériences numériques, maquettes, user flows et design systems.",
    icon: Palette,
    href: "/services/design-ui-ux",
    color: "text-[#059669] dark:text-[#00e5a3]",
  },
  {
    title: "Développement Backend",
    description: "API, logique métier et bases de données pour des services fiables et évolutifs.",
    icon: Code2,
    href: "/services/developpement-backend",
    color: "text-[#0f172a] dark:text-[#e1e2ec]",
  },
  {
    title: "DevOps & Hébergement",
    description: "Déploiement, infrastructure, fiabilité et maintenance des applications en production sur des serveurs VPS haute performance.",
    icon: CloudCog,
    href: "/services/devops-hebergement",
    color: "text-[#059669] dark:text-[#00e5a3]",
  },
]

export function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section id="services" className="w-full bg-[#f5f7f9] py-20 text-[#0f172a] transition-colors duration-300 dark:bg-[#0d0f14] dark:text-[#e1e2ec]">
      <div className="mb-12">
        <div className="mb-2 flex items-center gap-3">
          <span className="inline-block h-0.5 w-8 bg-[#059669] dark:bg-[#00e5a3]"></span>
          <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-[#059669] dark:text-[#00e5a3]">Offre de valeur</span>
        </div>
        <h2 className="font-['Plus_Jakarta_Sans'] text-[36px] text-[#0f172a] md:text-[46px] dark:text-[#e1e2ec]">{t.services.title}</h2>
        <p className="mt-2 max-w-3xl font-inter text-[15px] leading-relaxed text-[#475569] md:text-[18px] dark:text-[#9aa5b5]">
          {t.services.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
        {services.map((service, index) => {
          const Icon = service.icon
          const isLastTwo = index >= services.length - 2
          const widthClass = isLastTwo ? "lg:col-span-6" : "lg:col-span-4"

          return (
            <Link
              key={service.title}
              href={service.href}
              className={`${widthClass} group flex h-full flex-col justify-between rounded-xl border border-[#dfe4ea] bg-white p-8 transition-colors hover:border-[#059669]/40 dark:border-[#525c6c]/30 dark:bg-[#141824]`}
            >
              <div className="space-y-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg border border-[#dfe4ea] bg-[#f8fafc] ${service.color} transition-colors group-hover:bg-[#059669] group-hover:text-white dark:border-[#3b494b]/20 dark:bg-[#181b22] dark:group-hover:bg-[#00e5a3] dark:group-hover:text-[#0d0f14]`}>
                  <Icon size={26} />
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] text-[#0f172a] transition-colors group-hover:text-[#059669] dark:text-[#e1e2ec] dark:group-hover:text-[#00e5a3]">
                  {service.title}
                </h3>
                <p className="font-inter text-[15px] text-[#475569] dark:text-[#9aa5b5]">
                  {service.description}
                </p>
              </div>
              <div className="flex items-center gap-2 pt-6 font-mono text-[12px] font-semibold text-[#059669] dark:text-[#00e5a3]">
                <span>{t.services.learnMore}</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
