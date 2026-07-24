"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Button } from "@/components/ui/Button"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { useTranslation } from "@/lib/i18n/context"

export function ContactSection() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 sm:py-32 bg-muted/10">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <ScrollReveal animation="slide-blur">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{t.contact.title}</h2>
            <p className="text-lg text-muted-foreground">
              {t.contact.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Informations de contact */}
          <ScrollReveal animation="slide-left" delay={200}>
            <div>
              <h3 className="mb-6 text-2xl font-semibold">{t.contact.cta}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {t.contact.ctaDesc}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 transition-transform hover:translate-x-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t.contact.email}</h4>
                    <a href="mailto:modestep20.aps1a@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      modestep20.aps1a@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 transition-transform hover:translate-x-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t.contact.phone}</h4>
                    <a href="tel:+261347491885" className="text-muted-foreground hover:text-primary transition-colors">
                      +261 34 74 918 85
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 transition-transform hover:translate-x-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t.contact.location}</h4>
                    <p className="text-muted-foreground">{t.contact.locationValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Formulaire */}
          <ScrollReveal animation="slide-right" delay={400}>
            <div className="rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm p-8 shadow-sm">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <CheckCircle className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{t.contact.success.title}</h3>
                  <p className="text-muted-foreground">{t.contact.success.description}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t.contact.form.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                        placeholder={t.contact.form.placeholderName}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t.contact.form.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                        placeholder={t.contact.form.placeholderEmail}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      {t.contact.form.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                      placeholder={t.contact.form.placeholderSubject}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                      placeholder={t.contact.form.placeholderMessage}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2 rounded-full">
                    <Send className="h-5 w-5" />
                    {t.contact.form.submit}
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
