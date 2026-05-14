import Link from "next/link"
import { ArrowRight, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 sm:py-32 min-h-screen flex items-center">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex justify-center opacity-0 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-2 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Ouvert aux opportunités professionnelles
            </div>
          </div>

          <h1 className="mb-6 text-center text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl opacity-0 animate-fade-in-up animation-delay-100">
            Modeste TOLOJANAHARY
          </h1>

          <p className="mb-6 text-center text-xl sm:text-2xl font-semibold text-muted-foreground opacity-0 animate-fade-in-up animation-delay-200">
            Designer UI/UX & Développeur Full-Stack
          </p>

          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up animation-delay-300">
            Je conçois et développe des expériences numériques exceptionnelles. Du design d'interface au code,
            je transforme vos idées en solutions digitales performantes, élégantes et centrées sur l'utilisateur.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in-up animation-delay-400">
            <Button asChild size="lg" className="gap-2">
              <Link href="#projects">
                Voir mes projets
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="#contact">
                <Mail className="h-4 w-4" />
                Me contacter
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="/cv.pdf" download="CV_Modeste_TOLOJANAHARY.pdf">
                <Download className="h-4 w-4" />
                Télécharger CV
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mb-16 opacity-0 animate-fade-in animation-delay-500">
            <Link
              href="https://github.com/Deste-Mo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
            </Link>
            <Link
              href="https://linkedin.com/in/modeste-tolojanahary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </Link>
            <Link
              href="mailto:modestep20.aps1a@gmail.com"
              className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-3xl mx-auto">
            <div className="text-center p-4 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm opacity-0 animate-scale-in animation-delay-200 hover:border-primary/50 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">4+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Années d'expérience</div>
            </div>
            <div className="text-center p-4 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm opacity-0 animate-scale-in animation-delay-300 hover:border-primary/50 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Projets réalisés</div>
            </div>
            <div className="text-center p-4 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm opacity-0 animate-scale-in animation-delay-400 hover:border-primary/50 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">10+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="text-center p-4 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm opacity-0 animate-scale-in animation-delay-500 hover:border-primary/50 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">30+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Technologies maîtrisées</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
