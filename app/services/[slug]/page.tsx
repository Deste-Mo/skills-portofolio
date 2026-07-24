import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { services, getServiceBySlug, getOtherServices } from "@/config/services"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const otherServices = getOtherServices(slug)
  const ServiceIcon = service.icon

  return (
    <main className="max-w-[1200px] mx-auto px-8 py-24 md:py-32">
      <Link
        href="/#services"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <ArrowLeft className="h-4 w-4" />
        Tous les services
      </Link>

      <ScrollReveal animation="slide-up">
        <div className="mb-16 md:mb-20">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
            <ServiceIcon className="h-6 w-6" />
          </div>
          <h1
            className="font-manrope text-4xl md:text-[48px] font-semibold text-foreground mb-4 max-w-3xl"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            {service.title}
          </h1>
          <p
            className="font-inter text-base md:text-lg text-muted-foreground max-w-2xl"
            style={{ lineHeight: "1.75" }}
          >
            {service.heroDescription}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="slide-up">
        <section className="mb-16 md:mb-20">
          <h2
            className="font-manrope text-2xl md:text-3xl font-semibold text-foreground mb-8"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            Ce que j&apos;offre
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.offerings.map((offer, i) => (
              <ScrollReveal key={offer} animation="slide-up" delay={i * 50}>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/20 border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-sm text-foreground">{offer}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="slide-up">
        <section className="mb-16 md:mb-20">
          <h2
            className="font-manrope text-2xl md:text-3xl font-semibold text-foreground mb-8"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            Technologies & Outils
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {service.technologies.map((tech, i) => (
              <ScrollReveal key={tech.category} animation="slide-up" delay={i * 80}>
                <div className="bg-muted/20 border border-border/50 rounded-xl p-4 flex flex-col items-center text-center hover:bg-muted/30 transition-colors">
                  <span className="font-manrope text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {tech.category}
                  </span>
                  {tech.items.map((item) => (
                    <span key={item.name} className="font-inter text-sm text-foreground">
                      {item.name}
                      {item.sub && (
                        <span className="block text-xs text-muted-foreground">{item.sub}</span>
                      )}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="slide-up">
        <section className="mb-16 md:mb-20">
          <h2
            className="font-manrope text-2xl md:text-3xl font-semibold text-foreground mb-8"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            Mon processus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <ScrollReveal key={step.step} animation="slide-up" delay={i * 100}>
                <div className="bg-muted/20 border border-border/50 rounded-xl p-6 relative">
                  <span className="font-manrope text-4xl font-bold text-primary/20 block mb-4">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <h3 className="font-manrope text-base font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {otherServices.length > 0 && (
        <ScrollReveal animation="slide-up">
          <section className="mb-16 md:mb-20">
            <h2
              className="font-manrope text-2xl md:text-3xl font-semibold text-foreground mb-8"
              style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
            >
              Découvrez mes autres services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherServices.map((other, i) => {
                const OtherIcon = other.icon
                return (
                  <ScrollReveal key={other.slug} animation="slide-up" delay={i * 100}>
                    <Link
                      href={`/services/${other.slug}`}
                      className="group bg-muted/20 border border-border/50 rounded-xl p-6 hover:bg-muted/30 hover:scale-[1.02] transition-all duration-300 flex flex-col"
                    >
                      <OtherIcon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-manrope text-sm font-semibold text-foreground mb-2">{other.title}</h3>
                      <p className="font-inter text-xs text-muted-foreground leading-relaxed flex-1 mb-3">
                        {other.description}
                      </p>
                      <div className="flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                        En savoir plus
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </Link>
                  </ScrollReveal>
                )
              })}
            </div>
          </section>
        </ScrollReveal>
      )}

      <ScrollReveal animation="slide-up">
        <section className="bg-muted/20 border border-border/50 rounded-xl p-8 md:p-12 text-center">
          <h2
            className="font-manrope text-2xl md:text-3xl font-semibold text-foreground mb-4"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            Prêt à démarrer votre projet ?
          </h2>
          <p
            className="font-inter text-base text-muted-foreground mb-8 max-w-xl mx-auto"
            style={{ lineHeight: "1.75" }}
          >
            Discutons de vos besoins et voyons comment je peux vous aider
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-inter text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Me contacter
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 font-inter text-sm font-medium text-foreground hover:bg-muted/30 transition-colors"
            >
              Voir mes projets
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
