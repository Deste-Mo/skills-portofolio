"use client"

import {
  Blocks,
  CloudCog,
  Code2,
  Database,
  Palette,
  ServerCog,
  Smartphone,
} from "lucide-react"
import { useTranslation } from "@/lib/i18n/context"

export function SkillsSection() {
  const { t } = useTranslation()

  const skillGroups = [
    {
      number: "01 / CORE",
      icon: Code2,
      title: t.skills.groups.core.title,
      description: t.skills.groups.core.description,
      tags: t.skills.groups.core.tags,
      accent: "text-[#059669] dark:text-[#00e5a3]",
      chip: "bg-[#ecfdf5] text-[#059669] dark:bg-[#181b22] dark:text-[#00e5a3]",
    },
    {
      number: "02 / CLIENT",
      icon: Smartphone,
      title: t.skills.groups.client.title,
      description: t.skills.groups.client.description,
      tags: t.skills.groups.client.tags,
      accent: "text-[#2563eb] dark:text-[#93b4ff]",
      chip: "bg-[#eff6ff] text-[#2563eb] dark:bg-[#181b22] dark:text-[#93b4ff]",
    },
    {
      number: "03 / SERVER",
      icon: ServerCog,
      title: t.skills.groups.server.title,
      description: t.skills.groups.server.description,
      tags: t.skills.groups.server.tags,
      accent: "text-[#059669] dark:text-[#00e5a3]",
      chip: "bg-[#ecfdf5] text-[#059669] dark:bg-[#181b22] dark:text-[#00e5a3]",
    },
    {
      number: "04 / DATA",
      icon: Database,
      title: t.skills.groups.data.title,
      description: t.skills.groups.data.description,
      tags: t.skills.groups.data.tags,
      accent: "text-[#0f172a] dark:text-[#e1e2ec]",
      chip: "bg-[#f8fafc] text-[#0f172a] dark:bg-[#181b22] dark:text-[#e1e2ec]",
    },
    {
      number: "05 / OPS",
      icon: CloudCog,
      title: t.skills.groups.ops.title,
      description: t.skills.groups.ops.description,
      tags: t.skills.groups.ops.tags,
      accent: "text-[#059669] dark:text-[#00e5a3]",
      chip: "bg-[#ecfdf5] text-[#059669] dark:bg-[#181b22] dark:text-[#00e5a3]",
    },
    {
      number: "06 / PATTERNS",
      icon: Blocks,
      title: t.skills.groups.patterns.title,
      description: t.skills.groups.patterns.description,
      tags: t.skills.groups.patterns.tags,
      accent: "text-[#2563eb] dark:text-[#93b4ff]",
      chip: "bg-[#eff6ff] text-[#2563eb] dark:bg-[#181b22] dark:text-[#93b4ff]",
    },
  ]

  return (
    <section id="competences" className="w-full  py-20 text-[#0f172a] transition-colors duration-300 dark:bg-[#0d0f14] dark:text-[#e1e2ec]">
      <div className="mb-12">
        <div className="mb-2 flex items-center gap-3">
          <span className="inline-block h-0.5 w-8 bg-[#059669] dark:bg-[#00e5a3]"></span>
          <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-[#059669] dark:text-[#00e5a3]">
            {t.skills.technicalExpertise}
          </span>
        </div>
        <h2 className="font-sans text-[36px] text-[#0f172a] md:text-[46px] dark:text-[#e1e2ec]">{t.skills.title}</h2>
        <p className="mt-2 max-w-3xl font-sans text-[15px] leading-relaxed text-[#475569] md:text-[18px] dark:text-[#9aa5b5]">
          {t.skills.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((skill) => {
          const Icon = skill.icon

          return (
            <div key={skill.title} className="rounded-xl border border-[#dfe4ea] bg-white p-6 shadow-sm transition-colors hover:border-[#059669]/40 dark:border-[#525c6c]/30 dark:bg-[#141824]">
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className={`inline-flex rounded-lg bg-[#f8fafc] p-3 ${skill.accent} dark:bg-[#181b22]`}>
                  <Icon size={22} />
                </span>
                <span className="font-mono text-[12px] font-medium text-[#64748b] dark:text-[#525c6c]">{skill.number}</span>
              </div>

              <h3 className="mb-1 font-sans text-[20px] text-[#0f172a] dark:text-[#e1e2ec]">{skill.title}</h3>
              <p className="mb-4 font-sans text-[13px] leading-relaxed text-[#475569] dark:text-[#9aa5b5]">{skill.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {skill.tags.map((tag) => (
                  <span key={tag} className={`rounded-md border border-[#dfe4ea] px-2.5 py-1 font-mono text-[12px] ${skill.chip} dark:border-[#3b494b]/20`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        })}

        <div className="flex flex-col justify-between gap-6 rounded-xl border border-[#dfe4ea] bg-white p-6 shadow-sm md:col-span-2 md:flex-row md:items-center lg:col-span-3 dark:border-[#525c6c]/30 dark:bg-[#141824]">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-lg bg-[#ecfdf5] p-2.5 text-[#059669] dark:bg-[#181b22] dark:text-[#00e5a3]">
                <Palette size={22} />
              </span>
              <h3 className="font-sans text-[20px] text-[#0f172a] dark:text-[#e1e2ec]">
                {t.skills.uiuxTitle}
              </h3>
            </div>
            <p className="font-sans text-[13px] text-[#475569] dark:text-[#9aa5b5]">
              {t.skills.uiuxDescription}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {t.skills.uiuxTags.map((tag) => (
              <span key={tag} className="rounded-lg border border-[#dfe4ea] bg-[#f8fafc] px-3 py-1.5 font-mono text-[12px] text-[#059669] dark:border-[#3b494b]/20 dark:bg-[#181b22] dark:text-[#00e5a3]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
