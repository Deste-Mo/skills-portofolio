"use client";

import Image from "next/image";

export function AppFooter() {
  return (
    <footer className="w-full bg-[#0b0d12] border-t border-[#2a2e39]/40 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <a href="#accueil" className="inline-flex flex-col items-start group gap-1 py-1">
              <Image
                src="/images/logo/logo-white.png"
                alt="Logo Modeste TOLOJANAHARY"
                width={150}
                height={48}
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-sans text-[14px] tracking-[0.2em] uppercase text-[#e1e2ec] font-bold group-hover:text-[#00e5a3] transition-colors">
                Modeste TOLOJANAHARY
              </span>
            </a>
            <p className="font-sans text-[15px] text-[#9aa5b5] max-w-md">
              Ingénieur Full stack &amp; DevOps spécialisé dans l'architecture distribuée, les conteneurs et les interfaces réactives haute performance.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#1d2436] border border-[#3b494b]/20">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                <span className="font-mono text-[12px] text-[#b6efff]">Disponible pour missions &amp; CDI</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-[12px] text-[#00e5a3] uppercase tracking-[0.2em] block font-semibold">Navigation</span>
            <ul className="space-y-2 font-sans text-[13px]">
              <li><a className="text-[#9aa5b5] hover:text-[#e1e2ec] transition-colors block" href="#accueil">Accueil</a></li>
              <li><a className="text-[#9aa5b5] hover:text-[#e1e2ec] transition-colors block" href="#a-propos">À propos</a></li>
              <li><a className="text-[#9aa5b5] hover:text-[#e1e2ec] transition-colors block" href="#competences">Compétences</a></li>
              <li><a className="text-[#9aa5b5] hover:text-[#e1e2ec] transition-colors block" href="#experiences">Expériences</a></li>
              <li><a className="text-[#9aa5b5] hover:text-[#e1e2ec] transition-colors block" href="#projets">Projets &amp; Réalisations</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-[12px] text-[#00e5a3] uppercase tracking-[0.2em] block font-semibold">Réseaux &amp; Contact</span>
            <ul className="space-y-2 font-sans text-[13px]">
              <li><a className="text-[#9aa5b5] hover:text-[#e1e2ec] transition-colors block" href="#contact">tolojanaharyjeanmodeste@gmail.com</a></li>
              <li><a className="text-[#9aa5b5] hover:text-[#e1e2ec] transition-colors block" href="https://github.com/Deste-Mo" rel="noreferrer" target="_blank">GitHub Profile</a></li>
              <li><a className="text-[#9aa5b5] hover:text-[#e1e2ec] transition-colors block" href="https://www.linkedin.com/in/modeste-nirina-tolojanahary-b844b61b7" rel="noreferrer" target="_blank">LinkedIn Network</a></li>
              <li><a className="text-[#9aa5b5] hover:text-[#e1e2ec] transition-colors block" href="/doc/CV_Modeste_TOLOJANAHARY.pdf" rel="noreferrer" target="_blank">Télécharger CV (PDF)</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2a2e39]/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[12px] text-[#9aa5b5]">
          <p>© 2025 Modeste TOLOJANAHARY. Tous droits réservés.</p>
          <p className="text-[#525c6c]">Conçu avec rigueur • Dark Precision UI</p>
        </div>
      </div>
    </footer>
  );
}
