"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section id="a-propos" className="w-full bg-[#f5f7f9] py-20 text-[#0f172a] transition-colors duration-300 dark:bg-[#0d0f14] dark:text-[#e1e2ec]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="mb-2 flex items-center gap-3">
            <span className="inline-block h-0.5 w-8 bg-[#00e5a3]"></span>
            <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-[#059669] dark:text-[#00e5a3]">Présentation</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[36px] text-[#0f172a] md:text-[46px] dark:text-[#e1e2ec]">À propos</h2>
          <p className="mt-2 max-w-3xl font-inter text-[15px] leading-relaxed text-[#475569] md:text-[18px] dark:text-[#9aa5b5]">
            Développeur full stack &amp; DevOps (JavaScript, Python, PHP) : je conçois, développe et déploie des applications web et mobiles de bout en bout, du code jusqu’à la mise en production sur VPS.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between space-y-6 rounded-xl border border-[#dfe4ea] bg-white p-8 shadow-sm dark:border-[#525c6c]/30 dark:bg-[#141824] lg:col-span-7">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined rounded-lg bg-[#f0fdf7] p-2 text-[24px] text-[#059669] dark:bg-[#181b22] dark:text-[#00e5a3]">terminal</span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] text-[#0f172a] dark:text-[#e1e2ec]">Développeur Full stack &amp; DevOps</h3>
                </div>
                <span className="rounded-full border border-[#dfe4ea] bg-[#f8fafc] px-3 py-1 font-mono text-[12px] text-[#059669] dark:border-[#3b494b]/30 dark:bg-[#181b22] dark:text-[#00e5a3]">Senior Core</span>
              </div>
              <p className="font-inter text-[15px] leading-relaxed text-[#475569] dark:text-[#9aa5b5]">
                Développeur full stack &amp; DevOps (JavaScript, Python, PHP) : je conçois et mets en production des applications robustes, du frontend jusqu’aux environnements de déploiement. À l’aise avec Docker, Git, les API REST/GraphQL et la gestion des environnements dev/test/prod.
              </p>
            </div>

            <div className="relative space-y-4 overflow-hidden rounded-xl border border-[#dfe4ea] bg-[#f8fafc] p-6 dark:border-[#3b494b]/20 dark:bg-[#0d0f14]">
              <div className="flex flex-col items-center gap-6 sm:flex-row">
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[#00e5a3] sm:h-28 sm:w-28">
                  <Image
                    src="/images/profil/mon-profil.webp"
                    alt="Portrait Modeste"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <blockquote className="font-['Plus_Jakarta_Sans'] text-[18px] font-medium italic text-[#059669] dark:text-[#00e5a3]">
                    « Designer l'expérience, développer la solution. »
                  </blockquote>
                  <p className="font-inter text-[13px] text-[#475569] dark:text-[#9aa5b5]">
                    Une approche axée sur l'expérience humaine, consolidée par une rigueur d'ingénierie logicielle sans faille.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-6 rounded-xl border border-[#dfe4ea] bg-white p-8 shadow-sm dark:border-[#525c6c]/30 dark:bg-[#141824] lg:col-span-5">
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined rounded-lg bg-[#eef2ff] p-2 text-[24px] text-[#2563eb] dark:bg-[#181b22] dark:text-[#93b4ff]">contact_page</span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] text-[#0f172a] dark:text-[#e1e2ec]">Coordonnées</h3>
                </div>
                <span className="flex items-center gap-1.5 font-mono text-[12px] font-semibold text-[#059669] dark:text-[#00e5a3]">
                  <span className="h-2 w-2 rounded-full bg-[#22c55e]"></span>
                  Disponible
                </span>
              </div>
              <p className="font-inter text-[13px] text-[#475569] dark:text-[#9aa5b5]">
                Disponible pour de nouveaux projets, collaborations et missions techniques.
              </p>
              <ul className="space-y-3 font-inter text-[13px]">
                {[
                  { icon: "mail", label: "tolojanaharyjeanmodeste@gmail.com", href: "mailto:tolojanaharyjeanmodeste@gmail.com" },
                  { icon: "call", label: "+261 34 74 918 85 / +261 38 36 842 11", href: "tel:+261347491885" },
                  { icon: "code", label: "GitHub : Deste-Mo", href: "https://github.com/Deste-Mo" },
                  { icon: "badge", label: "LinkedIn : Modeste TOLOJANAHARY", href: "https://www.linkedin.com/in/modeste-nirina-tolojanahary-b844b61b7" },
                  { icon: "language", label: "tolojanahary-portofolio.vercel.app", href: "https://tolojanahary-portofolio.vercel.app/" },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3 rounded-lg border border-[#dfe4ea] bg-[#f8fafc] p-2.5 transition-colors hover:border-[#059669]/40 dark:border-[#3b494b]/20 dark:bg-[#181b22]">
                    <span className="material-symbols-outlined text-[20px] text-[#059669] dark:text-[#00e5a3]">{item.icon}</span>
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="truncate text-[#0f172a] transition-colors hover:text-[#059669] dark:text-[#e1e2ec] dark:hover:text-[#00e5a3]">
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-3 rounded-lg border border-[#dfe4ea] bg-[#f8fafc] p-2.5 dark:border-[#3b494b]/20 dark:bg-[#181b22]">
                  <span className="material-symbols-outlined text-[20px] text-[#059669] dark:text-[#00e5a3]">location_on</span>
                  <span className="text-[#0f172a] dark:text-[#e1e2ec]">Andrainjato Fianarantsoa, Madagascar</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <span className="mb-2.5 block font-mono text-[12px] uppercase tracking-[0.2em] text-[#64748b] dark:text-[#525c6c]">Centres d'intérêt</span>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { icon: "sports_esports", label: "Games" },
                  { icon: "movie", label: "Films" },
                  { icon: "smart_display", label: "Anime" },
                ].map((item) => (
                  <span key={item.label} className="flex items-center gap-1.5 rounded-full border border-[#dfe4ea] bg-[#f8fafc] px-3.5 py-1.5 font-inter text-[13px] text-[#0f172a] transition-colors hover:bg-[#eef2ff] dark:border-[#3b494b]/20 dark:bg-[#181b22] dark:text-[#e1e2ec]">
                    <span className="material-symbols-outlined text-[16px] text-[#059669] dark:text-[#00e5a3]">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
