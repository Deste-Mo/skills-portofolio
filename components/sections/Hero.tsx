import Link from "next/link"
import { ArrowRightIcon, SendIcon, MailIcon, GithubIcon, LinkedinIcon } from "@/components/ui/icons"

export function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 py-32 flex flex-col items-center text-center">
      {/* Badge */}
      <span className="bg-zinc-900 border border-white/10 text-zinc-200 text-sm font-inter px-3 py-1 rounded-full mb-8 tracking-[0.05em] uppercase flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
        À l&apos;écoute d&apos;opportunités
      </span>

      {/* Heading */}
      <h1
        className="max-w-4xl mb-6 text-white font-manrope"
        style={{ fontSize: "64px", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: 700 }}
      >
        Modeste TOLOJANAHARY
        <br />
        <span className="text-zinc-500">Développeur Web & Designer UI</span>
      </h1>

      {/* Description */}
      <p
        className="max-w-2xl mb-10 text-zinc-400 font-inter"
        style={{ fontSize: "18px", lineHeight: "1.75", fontWeight: 400 }}
      >
        Je conçois et développe des interfaces modernes, interactives et accessibles.
        Mon objectif : transformer des problèmes complexes en solutions élégantes.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Link
          href="#projects"
          className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-[0.125rem] font-manrope text-[16px] font-semibold active:scale-[0.98] transition-transform hover:bg-zinc-200 flex items-center justify-center gap-2"
          style={{ letterSpacing: "-0.01em" }}
        >
          Voir mon travail
          <ArrowRightIcon size={20} />
        </Link>
        <Link
          href="#contact"
          className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-4 rounded-[0.125rem] font-manrope text-[16px] font-semibold active:scale-[0.98] transition-colors hover:bg-white/5 flex items-center justify-center gap-2"
          style={{ letterSpacing: "-0.01em" }}
        >
          <SendIcon size={20} />
          Discutons
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 mt-16">
        <a
          href="mailto:modestep20.aps1a@gmail.com"
          className="flex h-10 w-10 items-center justify-center rounded-[0.125rem] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
          aria-label="Email"
        >
          <MailIcon size={18} />
        </a>
        <a
          href="https://github.com/Deste-Mo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-[0.125rem] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
          aria-label="GitHub"
        >
          <GithubIcon size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/modeste-nirina-tolojanahary-b844b61b7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-[0.125rem] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={18} />
        </a>
      </div>
    </section>
  )
}
