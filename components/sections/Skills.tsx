"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { skillCategories } from "@/config/skills"

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 sm:py-32 overflow-hidden bg-muted/10">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <ScrollReveal animation="slide-blur">
                    <div className="text-center mb-16">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Compétences</h2>
                        <p className="text-lg text-muted-foreground">
                            Plus de 30 technologies et outils maîtrisés pour créer des solutions complètes
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-5xl mx-auto">
                    {skillCategories.map((category, categoryIndex) => (
                        <ScrollReveal key={category.title} animation="reveal-bottom" delay={categoryIndex * 100}>
                            <div className="flex flex-col items-center">
                                <h3 className="mb-10 text-2xl font-bold text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                    {category.title}
                                </h3>

                                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
                                    <div className="absolute z-10">
                                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border-2 border-primary/20 flex items-center justify-center shadow-xl">
                                            <span className="text-3xl md:text-4xl font-bold text-primary">
                                                {category.skills.length}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0">
                                        {category.skills.map((skill, idx) => {
                                            const angle = (idx / category.skills.length) * 360
                                            const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 110 : 150
                                            const angleRad = (angle * Math.PI) / 180
                                            const x = Math.cos(angleRad) * radius
                                            const y = Math.sin(angleRad) * radius

                                            return (
                                                <div
                                                    key={skill.name}
                                                    className="absolute top-1/2 left-1/2"
                                                    style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                                                >
                                                    <div className="flex flex-col items-center gap-1 md:gap-2 rounded-xl bg-background/80 backdrop-blur-md border border-border/50 p-2 md:p-4 transition-all duration-300 hover:scale-110 hover:bg-muted hover:border-primary/50 shadow-sm hover:shadow-xl group">
                                                        <div className="relative w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                                                            <Image src={skill.logo} alt={skill.name} fill className="object-contain transition-transform duration-300 group-hover:scale-110" />
                                                        </div>
                                                        <span className="text-[10px] md:text-xs font-semibold text-center whitespace-nowrap">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
