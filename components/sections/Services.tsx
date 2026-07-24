"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { services } from "@/config/services"

export function ServicesSection() {
  return (
    <section id="services" className="max-w-[1200px] mx-auto px-8 py-24 md:py-32">
      <ScrollReveal animation="slide-up">
        <div className="mb-12 md:mb-16">
          <h2
            className="font-manrope text-4xl md:text-[48px] font-semibold text-foreground mb-4"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            Services
          </h2>
          <p
            className="font-inter text-base md:text-lg text-muted-foreground max-w-2xl"
            style={{ lineHeight: "1.75" }}
          >
            Ce que je peux faire pour vous
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <ScrollReveal key={service.title} animation="slide-up" delay={index * 100}>
            <Link
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden bg-muted/20 border border-border/50 rounded-xl p-6 md:p-8 hover:bg-muted/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 block h-full"
            >
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="font-manrope text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                <p
                  className="font-inter text-sm text-muted-foreground leading-relaxed flex-1 mb-4"
                >
                  {service.description}
                </p>

                <div className="flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              <div className="absolute bottom-0 right-0 z-0 pointer-events-none overflow-hidden w-16 h-16 mb-6 mr-6 group-hover:mb-0 group-hover:mr-0 group-hover:w-[45%] group-hover:h-full transition-all duration-500 ease-out">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="inline-flex items-center justify-center rounded-full text-primary/20 group-hover:text-primary/40 h-16 w-16 rotate-0 group-hover:rotate-[25deg] scale-100 group-hover:scale-[3] transition-all duration-500 ease-out">
                    <service.icon className="h-7 w-7" />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
