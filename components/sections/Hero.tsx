"use client"

import { ArrowDown, MessageCircle, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons"
import { useTranslation } from "@/lib/i18n/context"

export function Hero() {
  const { t, lang } = useTranslation()

  return (
    <section id="accueil" className="relative min-h-screen pt-28 text-[#0f172a] transition-colors duration-300 dark:text-[#e1e2ec] lg:pt-32">
      <div className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <motion.div
          className="grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-12 lg:grid-cols-12"
        >
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            <div className="space-y-3">
              <span className="block font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-[#059669] dark:text-[#00e5a3]">
                {t.hero.badge}
              </span>
              <h1 className="font-sans text-[40px] leading-[0.92] tracking-[-0.06em] text-[#0f172a] sm:text-[52px] md:text-[60px] lg:text-[72px] dark:text-[#e1e2ec]">
                MODESTE <br />
                <span className="font-extrabold text-[#059669] dark:text-[#00e5a3]">TOLOJANAHARY</span>
              </h1>
              <p className="font-sans text-[22px] font-medium tracking-tight text-[#2563eb] dark:text-[#93b4ff] md:text-[28px]">
                {t.hero.role}
              </p>
            </div>

            <p className="max-w-2xl font-sans text-[18px] leading-relaxed text-[#475569] dark:text-[#9aa5b5]">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projets"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#059669] px-6 py-3.5 font-sans text-[15px] font-bold text-white transition-colors hover:bg-[#047857] dark:bg-[#00e5a3] dark:text-[#0d0f14] dark:hover:bg-white"
              >
                <span>{t.hero.viewWork}</span>
                <ArrowDown size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#dfe4ea] bg-white px-6 py-3.5 font-sans text-[15px] font-semibold text-[#0f172a] transition-colors hover:border-[#059669] hover:text-[#059669] dark:border-[#525c6c]/30 dark:bg-[#181b22] dark:text-[#e1e2ec] dark:hover:text-[#00e5a3]"
              >
                <span>{t.hero.letsTalk}</span>
                <MessageCircle size={18} />
              </a>
              <a
                href="/doc/CV_Modeste_TOLOJANAHARY.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#dfe4ea] bg-white px-5 py-3.5 text-[#475569] transition-colors hover:text-[#059669] dark:border-[#3b494b]/20 dark:bg-[#14171f] dark:text-[#9aa5b5] dark:hover:text-[#00e5a3]"
              >
                <FileText size={18} />
                <span className="font-mono text-[12px] uppercase tracking-[0.2em]">{t.hero.cv}</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 text-[#475569] dark:text-[#9aa5b5]">
              <span className="font-mono text-[12px] uppercase text-[#64748b] dark:text-[#525c6c]">
                {lang === "fr" ? "Réseaux :" : "Links :"}
              </span>
              <a href="https://github.com/Deste-Mo" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-[#dfe4ea] bg-white px-3 py-1.5 transition-colors hover:text-[#059669] dark:border-[#3b494b]/20 dark:bg-[#14171f] dark:hover:text-[#00e5a3]">
                <GithubIcon size={16} className="text-current" />
                <span className="font-mono text-[13px] font-medium">GitHub / Deste-Mo</span>
              </a>
              <a href="https://www.linkedin.com/in/modeste-nirina-tolojanahary-b844b61b7" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-[#dfe4ea] bg-white px-3 py-1.5 transition-colors hover:text-[#059669] dark:border-[#3b494b]/20 dark:bg-[#14171f] dark:hover:text-[#00e5a3]">
                <LinkedinIcon size={16} className="text-current" />
                <span className="font-mono text-[13px] font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-xl border border-[#dfe4ea] bg-white p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.02)] dark:border-[#525c6c]/30 dark:bg-[#141824]">
              <div className="mb-4 flex items-center justify-between border-b border-[#dfe4ea] pb-4 dark:border-[#525c6c]/20">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-3 w-3 rounded-full bg-[#ffb4ab]"></span>
                  <span className="inline-block h-3 w-3 rounded-full bg-[#fbbf24]"></span>
                  <span className="inline-block h-3 w-3 rounded-full bg-[#22c55e]"></span>
                  <span className="ml-2 font-mono text-[12px] text-[#64748b] dark:text-[#9aa5b5]">runtime@vps-tolojanahary:~#</span>
                </div>
                <span className="rounded border border-[#dfe4ea] bg-white px-2 py-0.5 font-mono text-[12px] font-semibold text-[#059669] dark:border-[#3b494b]/30 dark:bg-[#181b22] dark:text-[#00e5a3]">
                  CI/CD ACTIVE
                </span>
              </div>

              <div className="space-y-3 font-mono text-[13px] text-[#0f172a] dark:text-[#e1e2ec]">
                <div className="flex items-center gap-2 text-[#475569] dark:text-[#9aa5b5]">
                  <span className="font-bold text-[#059669] dark:text-[#00e5a3]">❯</span>
                  <span>docker compose -f prod.yml up -d --build</span>
                </div>
                <div className="space-y-1.5 rounded-lg border border-[#dfe4ea] bg-[#f8fafc] p-3 font-mono text-[13px] text-[#475569] dark:border-[#3b494b]/20 dark:bg-[#080a0e] dark:text-[#9aa5b5]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[#059669] dark:text-[#00e5a3]">[+] service: fastapi_core</span>
                    <span className="font-bold text-[#0ea5e9]">HEALTHY :8000</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[#059669] dark:text-[#00e5a3]">[+] service: nextjs_frontend</span>
                    <span className="font-bold text-[#0ea5e9]">READY :3000</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[#059669] dark:text-[#00e5a3]">[+] service: laravel_api</span>
                    <span className="font-bold text-[#0ea5e9]">OK :8080</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[#059669] dark:text-[#00e5a3]">[+] service: postgres_primary</span>
                    <span className="font-bold text-[#0ea5e9]">SYNCED :5432</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[#059669] dark:text-[#00e5a3]">[+] nginx reverse_proxy</span>
                    <span className="font-bold text-[#0ea5e9]">SSL 200 OK</span>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <span className="mb-2 block font-mono text-[12px] uppercase text-[#64748b] dark:text-[#525c6c]">
                  {lang === "fr" ? "Stack de prédilection :" : "Preferred stack :"}
                </span>
                <div className="flex flex-wrap gap-2">
                  {['FastAPI', 'Laravel', 'Next.js', 'Docker & Compose', 'PostgreSQL', 'Debian VPS'].map((item) => (
                    <span key={item} className="rounded border border-[#dfe4ea] bg-[#f8fafc] px-2.5 py-1 font-mono text-[12px] text-[#059669] dark:border-[#3b494b]/20 dark:bg-[#181b22] dark:text-[#00e5a3]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3">
                <div className="rounded-lg border border-[#dfe4ea] bg-[#f8fafc] p-3 dark:border-[#3b494b]/20 dark:bg-[#181b22]">
                  <span className="block font-mono text-[12px] text-[#64748b] dark:text-[#525c6c]">
                    {lang === "fr" ? "Disponibilité" : "Availability"}
                  </span>
                  <span className="font-mono text-[24px] font-bold text-[#059669] dark:text-[#00e5a3]">99.98%</span>
                  <span className="mt-0.5 block font-sans text-[13px] text-[#475569] dark:text-[#9aa5b5]">
                    {lang === "fr" ? "Suivi de disponibilité" : "Uptime monitored"}
                  </span>
                </div>
                <div className="rounded-lg border border-[#dfe4ea] bg-[#f8fafc] p-3 dark:border-[#3b494b]/20 dark:bg-[#181b22]">
                  <span className="block font-mono text-[12px] text-[#64748b] dark:text-[#525c6c]">
                    {lang === "fr" ? "Déploiements" : "Deployments"}
                  </span>
                  <span className="font-mono text-[24px] font-bold text-[#2563eb] dark:text-[#93b4ff]">&lt; 3 min</span>
                  <span className="mt-0.5 block font-sans text-[13px] text-[#475569] dark:text-[#9aa5b5]">
                    {lang === "fr" ? "Push Git automatisé" : "Automated Git push"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
