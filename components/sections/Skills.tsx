"use client"

export function SkillsSection() {
  return (
    <section id="competences" className="py-20">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-0.5 bg-[#00e5a3] inline-block"></span>
          <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#00e5a3] font-semibold">Expertise Technique</span>
        </div>
        <h2 className="font-['Plus_Jakarta_Sans'] text-[36px] md:text-[46px] text-[#e1e2ec]">Compétences</h2>
        <p className="font-inter text-[15px] md:text-[18px] text-[#9aa5b5] mt-2 max-w-2xl leading-relaxed">
          Technologies, outils et méthodologies que j'utilise au quotidien pour concevoir des applications robustes et évolutives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            number: "01 / CORE",
            icon: "code",
            title: "Langages",
            description: "Langages de programmation et logique métier",
            tags: ["PHP", "Python", "JavaScript", "TypeScript"],
            color: "text-[#00e5a3]",
          },
          {
            number: "02 / CLIENT",
            icon: "devices",
            title: "Frontend & Mobile",
            description: "Interfaces web et applications mobiles modernes et performantes",
            tags: ["Next.js", "React.js", "React Native", "Flutter", "Expo"],
            color: "text-[#93b4ff]",
          },
          {
            number: "03 / SERVER",
            icon: "dns",
            title: "Backend & API",
            description: "API robustes, services serveur et intégrations tierces",
            tags: ["Laravel", "FastAPI", "Node.js", "Express.js", "Django", "REST API", "GraphQL", "Apollo Client", "Webhooks", "Intégration tierces"],
            color: "text-[#00e5a3]",
          },
          {
            number: "04 / DATA",
            icon: "database",
            title: "Bases de données",
            description: "Conception, gestion et optimisation de données relationnelles",
            tags: ["PostgreSQL", "MySQL", "SQL", "Modélisation relationnelle", "Optimisation requêtes"],
            color: "text-[#b6efff]",
          },
          {
            number: "05 / OPS",
            icon: "cloud_sync",
            title: "DevOps & Déploiement",
            description: "Conteneurisation, déploiement et maintenance en production",
            tags: ["Docker", "VPS", "Vercel", "Netlify", "Firebase", "Git", "GitHub", "Environnements dev/test/prod"],
            color: "text-[#00e5a3]",
          },
          {
            number: "06 / PATTERNS",
            icon: "architecture",
            title: "Architecture & Qualité",
            description: "Bonnes pratiques, composants réutilisables et amélioration continue",
            tags: ["Architecture Full Stack", "Composants réutilisables", "Hooks personnalisés", "Refactorisation", "Performance"],
            color: "text-[#93b4ff]",
          },
        ].map((skill, index) => (
          <div key={skill.title} className={`p-6 rounded-xl bg-[#141824] border border-[#525c6c]/30 hover:border-[#00e5a3]/50 transition-colors group ${index === 6 ? "md:col-span-2 lg:col-span-3" : ""}`}>
            <div className="flex items-start justify-between mb-4">
              <span className={`p-3 rounded-lg bg-[#181b22] ${skill.color} material-symbols-outlined text-[24px]`}>{skill.icon}</span>
              <span className="font-mono text-[12px] text-[#525c6c] font-mono">{skill.number}</span>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] text-[#e1e2ec] mb-1">{skill.title}</h3>
            <p className="font-inter text-[13px] text-[#9aa5b5] mb-4">{skill.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {skill.tags.map((tag) => (
                <span key={tag} className={`px-2.5 py-1 rounded bg-[#181b22] border border-[#3b494b]/20 font-mono text-[12px] ${tag.includes("FastAPI") || tag.includes("Laravel") || tag.includes("Docker") || tag.includes("VPS") || tag.includes("Performance") || tag.includes("GraphQL") ? "text-[#00e5a3]" : "text-[#e1e2ec]"}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="p-6 rounded-xl bg-[#141824] border border-[#525c6c]/30 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-lg bg-[#181b22] text-[#00e5a3] material-symbols-outlined text-[24px]">design_services</span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] text-[#e1e2ec]">UI / UX Design &amp; Accessibilité</h3>
            </div>
            <p className="font-inter text-[13px] text-[#9aa5b5]">
              Design d'interfaces modernes, responsives et accessibles
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            {['Intégration de maquettes Figma', 'Responsive Design', 'Interfaces modernes', 'Accessibilité'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#181b22] border border-[#3b494b]/20 font-mono text-[12px] text-[#00e5a3]">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
