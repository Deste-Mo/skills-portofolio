"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { skillCategories } from "@/config/skills"

export function SkillsSection() {
    const imageMap: Record<string, string> = {
        "Langages": "/images/skills/langage-de-programation-clair.png",
        "Frontend": "/images/skills/frontend-clair.png",
        "Backend": "/images/skills/backend-clair.png",
        "Bases de données & Design": "/images/skills/base-de-donne-&-design-clair.png",
        "Outils / DevOps": "/images/skills/outils-&-dev-ops-clair.png",
    }

    return (
        <section id="skills" className="max-w-[1200px] w-full mx-auto px-8 py-24 md:py-32">
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
                        Compétences transversales en design, développement et collaboration pour des produits numériques élégants et performants.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {skillCategories.map((category, index) => {
                    const isLast = index === skillCategories.length - 1
                    return (
                        <ScrollReveal
                            key={index}
                            animation="reveal-bottom"
                            delay={index * 100}
                            className={isLast ? "md:col-span-2" : ""}
                        >
                            <div className="bg-muted/20 border border-border/50 rounded-xl p-2.5 hover:bg-muted/30 transition-colors group h-full">
                                <div className="relative w-full h-48 bg-white rounded-lg overflow-hidden">
                                    <div className="absolute inset-0">
                                        <Image
                                            src={imageMap[category.title]}
                                            alt={category.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-full md:w-72 h-12 bg-white flex items-center md:rounded-tl-lg"
                                        style={{ marginBottom: "-0.375rem", marginRight: "-0.375rem" }}
                                    >
                                        <h3 className="font-inter text-xs uppercase tracking-wider text-muted-foreground/60 ml-2 md:ml-4 truncate">
                                            {category.title}
                                        </h3>
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
