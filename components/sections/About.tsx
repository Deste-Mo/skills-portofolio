"use client"

import Image from "next/image"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function AboutSection() {
    return (
        <section id="about" className="py-20 sm:py-32">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <ScrollReveal animation="slide-blur">
                    <div className="text-center mb-12">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">À propos</h2>
                        <p className="text-lg text-muted-foreground">
                            Designer & Développeur passionné par l'innovation digitale
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="scale" delay={100}>
                    <div className="flex justify-center mb-12">
                        <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                            <Image
                                src="/profil/mon-profil.webp"
                                alt="Modeste TOLOJANAHARY"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </ScrollReveal>

                <div className="grid gap-12 lg:grid-cols-2">
                    <ScrollReveal animation="slide-left" delay={200}>
                        <div>
                            <h3 className="mb-6 text-2xl font-semibold">Profil</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                                Designer UI/UX et développeur Full-Stack passionné, je crée des expériences numériques
                                qui allient esthétique et performance. Ma double casquette me permet de concevoir des
                                interfaces intuitives et de les transformer en applications robustes.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Du wireframe au déploiement, je maîtrise chaque étape du processus créatif et technique.
                                Mon approche : comprendre vos besoins, designer l'expérience idéale, puis la développer
                                avec les technologies les plus adaptées.
                            </p>
                            <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
                                "Designer l'expérience, développer la solution."
                            </blockquote>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-right" delay={400}>
                        <div>
                            <h3 className="mb-6 text-2xl font-semibold">Contact</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 transition-transform hover:translate-x-2">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <span>+261 34 74 918 85</span>
                                </div>
                                <div className="flex items-center gap-4 transition-transform hover:translate-x-2">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <a href="mailto:modestep20.aps1a@gmail.com" className="hover:text-primary transition-colors break-all">
                                        modestep20.aps1a@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-4 transition-transform hover:translate-x-2">
                                    <Globe className="h-5 w-5 text-primary" />
                                    <a href="https://modeste-tolojanahary.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors break-all">
                                        modeste-tolojanahary.netlify.app
                                    </a>
                                </div>
                                <div className="flex items-center gap-4 transition-transform hover:translate-x-2">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <span>Fianarantsoa, Madagascar</span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="mb-4 font-semibold">Langues</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm transition-all hover:bg-primary/20 hover:scale-105">Français</span>
                                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm transition-all hover:bg-primary/20 hover:scale-105">Anglais</span>
                                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm transition-all hover:bg-primary/20 hover:scale-105">Malagasy</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
