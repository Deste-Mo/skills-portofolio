"use client"

export function ExperiencesSection() {
  const experiences = [
    {
      role: "Développeur Full stack & DevOps",
      company: "@ Mobile Sys",
      period: "Janvier 2026 - Présent",
      details: [
        "Développement full stack, conteneurisation et déploiement sur VPS d’une plateforme de services d’assistance pour personnes âgées, en situation de handicap ou isolées.",
        "Développement frontend d’une application de réservation de voyages intégrant transports et hébergements.",
      ],
      tags: ["Flutter", "Next.js", "GraphQL", "Django", "Docker", "VPS"],
    },
    {
      role: "Développeur Frontend & DevOps",
      company: "@ François Digital",
      period: "Juin 2025 - Mars 2026",
      details: [
        "Développement et déploiement d’une application de prise de rendez-vous hospitaliers et de gestion des consultations.",
        "Développement et mise en production d’une plateforme de réservation de voyages avec paiement en ligne.",
        "Développement et déploiement d’une application de réservation multi-services (train, bus et hôtel).",
        "Conception et déploiement d’une plateforme dédiée aux formations, concours et parcours professionnels.",
      ],
      tags: ["Next.js", "Flutter", "API REST", "VPS"],
    },
    {
      role: "Stagiaire puis Développeur Full stack & DevOps",
      company: "@ NJCam Sys",
      period: "2023 - 2025",
      details: [
        "Développement full stack et déploiement d’une application web et mobile de gestion hôtelière et de restauration.",
        "Développement full stack et mise en production d’une application web et mobile de type réseau social dédiée à la collaboration autour des marchandises.",
        "Participation technique en tant qu’assistant lead dev (appui à la coordination technique, aux choix de développement et de déploiement).",
      ],
      tags: ["Flutter", "React Native", "Node.js", "Express", "API REST", "VPS"],
    },
    {
      role: "Stagiaire (Développeur Full stack)",
      company: "@ IMIARY",
      period: "Mars - Juin 2022",
      details: [
        "Développement d’une plateforme de location, vente et réservation de bateaux avec paiement en ligne.",
      ],
      tags: ["PHP", "Laravel", "React Native", "Node.js", "API REST", "PostgreSQL"],
    },
  ]

  const formations = [
    { period: "2022 - En cours", degree: "Master & Licence en Développement informatique", school: "EMIT Fianarantsoa (Madagascar)" },
    { period: "2020 - 2023", degree: "Licence en Développement informatique", school: "EMEDIA Antananarivo (Madagascar)" },
    { period: "2020", degree: "Année préparatoire", school: "SESAME Antananarivo (Madagascar)" },
  ]

  return (
    <section id="experiences" className="py-20">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-0.5 bg-[#00e5a3] inline-block"></span>
          <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#00e5a3] font-semibold">Parcours &amp; Évolution</span>
        </div>
        <h2 className="font-['Plus_Jakarta_Sans'] text-[36px] md:text-[46px] text-[#e1e2ec]">Expériences</h2>
        <p className="font-inter text-[15px] md:text-[18px] text-[#9aa5b5] mt-2 max-w-2xl leading-relaxed">
          Mon parcours professionnel et mes formations
        </p>
      </div>

      <div className="relative space-y-8 pl-6 sm:pl-10 before:content-[''] before:absolute before:left-2.5 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#242936]">
        {experiences.map((exp, index) => (
          <div key={exp.company} className="relative group">
            <div className="absolute -left-6 sm:-left-10 top-1.5 w-5 h-5 rounded-full bg-[#181b22] flex items-center justify-center ring-4 ring-[#0d0f14] group-hover:bg-[#00e5a3] transition-colors">
              <div className="w-2 h-2 rounded-full bg-[#00e5a3]"></div>
            </div>
            <div className="p-6 sm:p-8 rounded-xl bg-[#141824] border border-[#525c6c]/30 transition-colors hover:bg-[#1b1f29]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] text-[#e1e2ec] flex items-center gap-2 flex-wrap">
                    <span>{exp.role}</span>
                    <span className="text-[#00e5a3] font-mono text-[12px] font-normal">{exp.company}</span>
                  </h3>
                </div>
                <span className="font-mono text-[12px] px-3 py-1 rounded bg-[#181b22] border border-[#3b494b]/30 text-[#00e5a3] shrink-0 self-start sm:self-auto font-semibold">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2.5 font-inter text-[15px] text-[#9aa5b5] mb-5">
                {exp.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="text-[#00e5a3] mt-1 material-symbols-outlined text-[16px]">arrow_right_alt</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-[#181b22] border border-[#3b494b]/20 font-mono text-[12px] text-[#00e5a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-12 border-t border-[#3b494b]/20">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-[#00e5a3] text-[20px]">school</span>
            <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#00e5a3] font-semibold">Diplômes &amp; Cursus</span>
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] text-[28px] text-[#e1e2ec]">Formations</h3>
          <p className="font-inter text-[13px] text-[#9aa5b5] mt-1">Mon parcours académique et mes diplômes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formations.map((formation) => (
            <div key={formation.degree} className="p-6 rounded-xl bg-[#141824] border border-[#525c6c]/30 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <span className="font-mono text-[12px] px-2.5 py-1 rounded bg-[#181b22] text-[#00e5a3] border border-[#3b494b]/20 inline-block font-semibold">
                  {formation.period}
                </span>
                <h4 className="font-['Plus_Jakarta_Sans'] text-[20px] text-[#e1e2ec] leading-snug">{formation.degree}</h4>
              </div>
              <p className="font-inter text-[13px] text-[#9aa5b5] mt-4 pt-4 border-t border-[#3b494b]/20 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#525c6c] text-[18px]">location_on</span>
                {formation.school}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
