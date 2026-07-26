"use client"

import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Button } from "@/components/ui/Button"
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react"
import { useTranslation } from "@/lib/i18n/context"
import { useContactForm } from "@/hooks/useContactForm"

export function ContactSection() {
  const { t, lang } = useTranslation()
  const { formData, status, errorMessage, handleChange, handleSubmit, resetForm } = useContactForm()

  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-8 py-24 md:py-32">
      <ScrollReveal animation="slide-up">
        <div className="mb-12 md:mb-16">
          <h2
            className="font-manrope text-4xl md:text-[48px] font-semibold text-foreground mb-4"
            style={{ lineHeight: "1.2", letterSpacing: "-0.015em" }}
          >
            {t.contact.title}
          </h2>
          <p
            className="font-inter text-base md:text-lg text-muted-foreground max-w-2xl"
            style={{ lineHeight: "1.75" }}
          >
            {t.contact.description}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 lg:grid-cols-2">
        <ScrollReveal animation="slide-up" delay={200} className="h-full">
          <div className="bg-muted/20 border border-border/50 rounded-xl p-6 md:p-8 h-full flex flex-col">
            <h3 className="font-manrope text-xl md:text-2xl font-semibold text-foreground mb-3">{t.contact.cta}</h3>
            <p className="font-inter text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
              {t.contact.ctaDesc}
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-inter text-sm font-semibold text-foreground">{t.contact.email}</p>
                  <a href="mailto:modestep20.aps1a@gmail.com" className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                    modestep20.aps1a@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-inter text-sm font-semibold text-foreground">{t.contact.phone}</p>
                  <a href="tel:+261347491885" className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors">
                    +261 34 74 918 85
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-inter text-sm font-semibold text-foreground">{t.contact.location}</p>
                  <p className="font-inter text-sm text-muted-foreground">{t.contact.locationValue}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={300} className="h-full">
          <div className="bg-muted/20 border border-border/50 rounded-xl p-6 md:p-8 h-full flex flex-col">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center flex-1 text-center">
                <CheckCircle className="h-16 w-16 text-primary mb-4" />
                <h3 className="font-manrope text-xl md:text-2xl font-semibold text-foreground mb-2">{t.contact.success.title}</h3>
                <p className="font-inter text-sm md:text-base text-muted-foreground mb-2">{t.contact.success.description}</p>
                <p className="font-inter text-xs text-muted-foreground/70 mb-6">{lang === "en" ? "If you don't see my reply, please check your spam folder." : "Si vous ne voyez pas ma réponse, pensez à vérifier vos spams."}</p>
                <Button variant="outline" size="sm" onClick={resetForm}>
                  {t.contact.form.submit}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="font-inter text-sm font-medium text-foreground mb-1.5 block">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === "sending"}
                      className="w-full rounded-xl border border-border/50 bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all disabled:opacity-50"
                      placeholder={t.contact.form.placeholderName}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-inter text-sm font-medium text-foreground mb-1.5 block">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === "sending"}
                      className="w-full rounded-xl border border-border/50 bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all disabled:opacity-50"
                      placeholder={t.contact.form.placeholderEmail}
                    />
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <label htmlFor="message" className="font-inter text-sm font-medium text-foreground mb-1.5 block">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                    rows={5}
                    className="w-full flex-1 rounded-xl border border-border/50 bg-muted/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none disabled:opacity-50"
                    placeholder={t.contact.form.placeholderMessage}
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 px-4 py-3 rounded-xl">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full gap-2 rounded-full" disabled={status === "sending"}>
                  {status === "sending" ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                  {t.contact.form.submit}
                </Button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
