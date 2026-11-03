"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function Hero() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 600], [1.04, 0.96])
  const y = useTransform(scrollY, [0, 600], [0, -80])
  const opacity = useTransform(scrollY, [0, 500, 600], [1, 0.85, 0.5])

  return (
    <section id="accueil" className="relative w-full min-h-screen bg-[#0d0f14] px-6 pt-20 lg:px-12">
      <div className="max-w-7xl mx-auto pt-8 pb-20 lg:pt-12 lg:pb-24">
        <motion.div
          style={{ scale, y, opacity }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-7rem)]"
        >
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="space-y-3">
              <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#00e5a3] block font-semibold">
                Portfolio Ingénieur
              </span>
              <h1 className="font-['Plus_Jakarta_Sans'] text-[40px] sm:text-[52px] md:text-[60px] lg:text-[72px] leading-[0.92] tracking-[-0.06em] text-[#e1e2ec]">
                MODESTE <br />
                <span className="text-[#00e5a3] font-extrabold">TOLOJANAHARY</span>
              </h1>
              <p className="font-['Plus_Jakarta_Sans'] text-[22px] md:text-[28px] text-[#93b4ff] font-medium tracking-tight">
                Développeur Full stack &amp; DevOps
              </p>
            </div>

            <p className="font-inter text-[18px] text-[#9aa5b5] max-w-2xl leading-relaxed">
              Développeur full stack &amp; DevOps (JavaScript, Python, PHP) : je conçois, développe et déploie des applications web et mobiles de bout en bout, du code jusqu’à la mise en production sur VPS.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projets"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#00e5a3] text-[#0d0f14] font-manrope text-[15px] font-bold hover:bg-white transition-colors"
              >
                <span>Voir mon travail</span>
                <span className="material-symbols-outlined ml-2 text-[20px]">arrow_downward</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#181b22] border border-[#525c6c]/30 text-[#e1e2ec] font-manrope text-[15px] font-semibold hover:bg-[#242936] hover:text-[#00e5a3] transition-colors"
              >
                <span>Discutons</span>
                <span className="material-symbols-outlined ml-2 text-[18px]">chat</span>
              </a>
              <a
                href="/doc/CV_Modeste_TOLOJANAHARY.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-lg bg-[#14171f] border border-[#3b494b]/20 text-[#9aa5b5] hover:text-[#00e5a3] hover:bg-[#181b22] transition-colors"
              >
                <span className="material-symbols-outlined mr-2 text-[20px]">description</span>
                <span className="font-mono text-[12px] uppercase tracking-[0.2em]">Mon CV (PDF)</span>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4 text-[#9aa5b5] flex-wrap">
              <span className="font-mono text-[12px] uppercase text-[#525c6c]">Réseaux :</span>
              <a href="https://github.com/Deste-Mo" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#14171f] border border-[#3b494b]/20 hover:bg-[#181b22] hover:text-[#00e5a3] transition-colors">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                <span className="font-mono text-[13px] font-medium">GitHub / Deste-Mo</span>
              </a>
              <a href="https://www.linkedin.com/in/modeste-nirina-tolojanahary-b844b61b7" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#14171f] border border-[#3b494b]/20 hover:bg-[#181b22] hover:text-[#00e5a3] transition-colors">
                <span className="material-symbols-outlined text-[18px]">share</span>
                <span className="font-mono text-[13px] font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl bg-[#141824] border border-[#525c6c]/30 p-6 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#525c6c]/20">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ffb4ab] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#fbbf24] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#22c55e] inline-block"></span>
                  <span className="font-mono text-[12px] text-[#9aa5b5] ml-2">runtime@vps-tolojanahary:~#</span>
                </div>
                <span className="font-mono text-[12px] text-[#00e5a3] bg-[#181b22] px-2 py-0.5 rounded border border-[#3b494b]/30 font-semibold">
                  CI/CD ACTIVE
                </span>
              </div>

              <div className="space-y-3 font-mono text-[13px] text-[#e1e2ec]">
                <div className="flex items-center gap-2 text-[#9aa5b5]">
                  <span className="text-[#00e5a3] font-bold">❯</span>
                  <span>docker compose -f prod.yml up -d --build</span>
                </div>
                <div className="p-3 rounded-lg bg-[#080a0e] border border-[#3b494b]/20 text-[13px] font-mono space-y-1.5 text-[#9aa5b5]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#00e5a3]">[+] service: fastapi_core</span>
                    <span className="text-[#b6efff] font-bold">HEALTHY :8000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#00e5a3]">[+] service: nextjs_frontend</span>
                    <span className="text-[#b6efff] font-bold">READY :3000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#00e5a3]">[+] service: laravel_api</span>
                    <span className="text-[#b6efff] font-bold">OK :8080</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#00e5a3]">[+] service: postgres_primary</span>
                    <span className="text-[#b6efff] font-bold">SYNCED :5432</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#00e5a3]">[+] nginx reverse_proxy</span>
                    <span className="text-[#b6efff] font-bold">SSL 200 OK</span>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <span className="font-mono text-[12px] text-[#525c6c] uppercase block mb-2">Stack de prédilection :</span>
                <div className="flex flex-wrap gap-2">
                  {['FastAPI', 'Laravel', 'Next.js', 'Docker & Compose', 'PostgreSQL', 'Debian VPS'].map((item) => (
                    <span key={item} className="px-2.5 py-1 rounded bg-[#181b22] border border-[#3b494b]/20 text-[#00e5a3] font-mono text-[12px]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3">
                <div className="p-3 rounded-lg bg-[#181b22] border border-[#3b494b]/20">
                  <span className="font-mono text-[12px] text-[#525c6c] block">Disponibilité</span>
                  <span className="font-['JetBrains_Mono'] text-[24px] text-[#00e5a3] font-bold">99.98%</span>
                  <span className="font-inter text-[13px] text-[#9aa5b5] block mt-0.5">Uptime Monitored</span>
                </div>
                <div className="p-3 rounded-lg bg-[#181b22] border border-[#3b494b]/20">
                  <span className="font-mono text-[12px] text-[#525c6c] block">Déploiements</span>
                  <span className="font-['JetBrains_Mono'] text-[24px] text-[#93b4ff] font-bold">&lt; 3 min</span>
                  <span className="font-inter text-[13px] text-[#9aa5b5] block mt-0.5">Automated Git Push</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
