"use client"

import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { skillCategories } from "@/config/skills"
import { Code2, Server, Database, Share2, Wrench, Layers, Palette } from "lucide-react"

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 size={20} />,
  Backend: <Server size={20} />,
  "Bases de données": <Database size={20} />,
  "API & Data": <Share2 size={20} />,
  "Outils & Technologies": <Wrench size={20} />,
  "Architecture & Qualité": <Layers size={20} />,
  "UI/UX": <Palette size={20} />,
}

export function SkillsSection() {
  return (
    <section id="skills" className="max-w-[1200px] mx-auto px-8 py-24 md:py-32">
      <ScrollReveal animation="slide-up">
        <div className="mb-12 md:mb-16">
          <h2
            className="font-manrope text-4xl md:text-[48px] font-semibold text-foreground mb-4"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            Compétences
          </h2>
          <p
            className="font-inter text-base md:text-lg text-muted-foreground max-w-2xl"
            style={{ lineHeight: "1.75" }}
          >
            Technologies, outils et méthodologies que j&apos;utilise au quotidien
            pour concevoir des applications robustes et évolutives.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {skillCategories.map((category, index) => {
          const isFullWidth = index === skillCategories.length - 1
          return (
            <ScrollReveal
              key={category.title}
              animation="slide-up"
              delay={index * 100}
              className={isFullWidth ? "md:col-span-2" : ""}
            >
              <div className="bg-muted/20 border border-border/50 rounded-xl p-6 md:p-8 hover:bg-muted/30 transition-colors group h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">{categoryIcons[category.title]}</span>
                  <h3
                    className="font-manrope text-lg font-semibold text-foreground"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-inter text-xs font-medium text-muted-foreground bg-muted/30 border border-border/50 px-3 py-1.5 rounded-[0.125rem]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
