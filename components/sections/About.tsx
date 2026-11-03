"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section id="a-propos" className="py-20">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-0.5 bg-[#00e5a3] inline-block"></span>
          <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#00e5a3] font-semibold">Présentation</span>
        </div>
        <h2 className="font-['Plus_Jakarta_Sans'] text-[36px] md:text-[46px] text-[#e1e2ec]">À propos</h2>
        <p className="font-inter text-[15px] md:text-[18px] text-[#9aa5b5] mt-2 max-w-3xl leading-relaxed">
          Développeur full stack &amp; DevOps (JavaScript, Python, PHP) : je conçois, développe et déploie des applications web et mobiles de bout en bout, du code jusqu’à la mise en production sur VPS.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 p-8 rounded-xl bg-[#141824] border border-[#525c6c]/30 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-[#181b22] text-[#00e5a3] material-symbols-outlined text-[24px]">terminal</span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] text-[#e1e2ec]">Développeur Full stack &amp; DevOps</h3>
              </div>
              <span className="font-mono text-[12px] px-3 py-1 rounded-full bg-[#181b22] text-[#00e5a3] border border-[#3b494b]/30">Senior Core</span>
            </div>
            <p className="font-inter text-[15px] text-[#9aa5b5] leading-relaxed">
              Développeur full stack &amp; DevOps (JavaScript, Python, PHP) : je conçois et mets en production des applications robustes, du frontend jusqu’aux environnements de déploiement. À l’aise avec Docker, Git, les API REST/GraphQL et la gestion des environnements dev/test/prod.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-[#0d0f14] p-6 space-y-4 border border-[#3b494b]/20">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border-2 border-[#00e5a3]">
                <Image
                  src="/images/profil/mon-profil.webp"
                  alt="Portrait Modeste"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <blockquote className="font-['Plus_Jakarta_Sans'] text-[18px] text-[#00e5a3] italic font-medium">
                  « Designer l'expérience, développer la solution. »
                </blockquote>
                <p className="font-inter text-[13px] text-[#9aa5b5]">
                  Une approche axée sur l'expérience humaine, consolidée par une rigueur d'ingénierie logicielle sans faille.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 p-8 rounded-xl bg-[#141824] border border-[#525c6c]/30 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-[#181b22] text-[#93b4ff] material-symbols-outlined text-[24px]">contact_page</span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] text-[#e1e2ec]">Coordonnées</h3>
              </div>
              <span className="font-mono text-[12px] text-[#00e5a3] flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                Disponible
              </span>
            </div>
            <p className="font-inter text-[13px] text-[#9aa5b5]">
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
                <li key={item.label} className="flex items-center gap-3 p-2.5 rounded-lg bg-[#181b22] border border-[#3b494b]/20 hover:border-[#00e5a3]/40 transition-colors">
                  <span className="material-symbols-outlined text-[#00e5a3] text-[20px]">{item.icon}</span>
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="text-[#e1e2ec] hover:text-[#00e5a3] transition-colors truncate">
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 p-2.5 rounded-lg bg-[#181b22] border border-[#3b494b]/20">
                <span className="material-symbols-outlined text-[#00e5a3] text-[20px]">location_on</span>
                <span className="text-[#e1e2ec]">Andrainjato Fianarantsoa, Madagascar</span>
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <span className="font-mono text-[12px] text-[#525c6c] uppercase tracking-[0.2em] block mb-2.5">Centres d'intérêt</span>
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { icon: "sports_esports", label: "Games" },
                { icon: "movie", label: "Films" },
                { icon: "smart_display", label: "Anime" },
              ].map((item) => (
                <span key={item.label} className="px-3.5 py-1.5 rounded-full bg-[#181b22] border border-[#3b494b]/20 text-[#e1e2ec] font-inter text-[13px] flex items-center gap-1.5 hover:bg-[#1f2430] transition-colors">
                  <span className="material-symbols-outlined text-[16px] text-[#00e5a3]">{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
