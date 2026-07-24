"use client"

import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { skillCategories } from "@/config/skills"
import { Code2, Server, Database, Share2, Wrench, Layers, Palette } from "lucide-react"

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 size={40} />,
  Backend: <Server size={40} />,
  "Bases de données": <Database size={40} />,
  "API & Data": <Share2 size={40} />,
  "Outils & Technologies": <Wrench size={40} />,
  "Architecture & Qualité": <Layers size={40} />,
  "UI/UX": <Palette size={40} />,
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
              <div className="relative overflow-hidden bg-muted/20 border border-border/50 rounded-xl p-6 md:p-8 hover:bg-muted/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group h-full">
                <div className="relative z-10">
                  <h3
                    className="font-manrope text-lg font-semibold text-foreground mb-1.5"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {category.title}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground mb-5" style={{ lineHeight: "1.6" }}>
                    {category.description}
                  </p>
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
                <div className="absolute bottom-0 right-0 z-0 pointer-events-none overflow-hidden w-16 h-16 mb-6 mr-6 group-hover:mb-0 group-hover:mr-0 group-hover:w-[45%] group-hover:h-full transition-all duration-500 ease-out">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="inline-flex items-center justify-center rounded-full text-primary/20 group-hover:text-primary/40 h-16 w-16 scale-100 group-hover:scale-[3] transition-all duration-500 ease-out">
                      {categoryIcons[category.title]}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
