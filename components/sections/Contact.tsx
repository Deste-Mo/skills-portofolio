"use client"

import { ArrowRight, CheckCircle2, Mail, MapPin, MessageSquareText, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="mb-8 py-20 text-[#0f172a] transition-colors duration-300 dark:text-[#e1e2ec]">
        <div className="mb-12">
          <div className="mb-2 flex items-center gap-3">
            <span className="inline-block h-0.5 w-8 bg-[#059669] dark:bg-[#00e5a3]"></span>
            <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-[#059669] dark:text-[#00e5a3]">Prendre Contact</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[36px] text-[#0f172a] md:text-[46px] dark:text-[#e1e2ec]">Contact</h2>
          <p className="mt-2 max-w-3xl font-inter text-[15px] leading-relaxed text-[#475569] md:text-[18px] dark:text-[#9aa5b5]">
            Discutons de votre prochain projet ensemble
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="space-y-8 rounded-xl border border-[#dfe4ea] bg-white p-8 shadow-sm dark:border-[#525c6c]/30 dark:bg-[#141824] lg:col-span-5">
            <div>
              <h3 className="mb-3 font-['Plus_Jakarta_Sans'] text-[28px] text-[#0f172a] dark:text-[#e1e2ec]">Parlons de votre projet</h3>
              <p className="font-inter text-[15px] leading-relaxed text-[#475569] dark:text-[#9aa5b5]">
                Je suis toujours ouvert aux nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour discuter de votre projet ou simplement dire bonjour.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-lg border border-[#dfe4ea] bg-[#f8fafc] p-4 dark:border-[#3b494b]/20 dark:bg-[#0d0f14]">
                <span className="inline-flex rounded bg-[#ecfdf5] p-2.5 text-[#059669] dark:bg-[#181b22] dark:text-[#00e5a3]">
                  <Mail size={22} />
                </span>
                <div className="space-y-0.5">
                  <span className="block font-mono text-[12px] uppercase tracking-[0.2em] text-[#64748b] dark:text-[#525c6c]">Email direct</span>
                  <a className="break-all font-inter text-[15px] font-medium text-[#0f172a] transition-colors hover:text-[#059669] dark:text-[#e1e2ec] dark:hover:text-[#00e5a3]" href="mailto:tolojanaharyjeanmodeste@gmail.com">
                    tolojanaharyjeanmodeste@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-[#dfe4ea] bg-[#f8fafc] p-4 dark:border-[#3b494b]/20 dark:bg-[#0d0f14]">
                <span className="inline-flex rounded bg-[#ecfdf5] p-2.5 text-[#059669] dark:bg-[#181b22] dark:text-[#00e5a3]">
                  <Phone size={22} />
                </span>
                <div className="space-y-0.5">
                  <span className="block font-mono text-[12px] uppercase tracking-[0.2em] text-[#64748b] dark:text-[#525c6c]">Téléphone</span>
                  <a className="font-inter text-[15px] font-medium text-[#0f172a] transition-colors hover:text-[#059669] dark:text-[#e1e2ec] dark:hover:text-[#00e5a3]" href="tel:+261347491885">
                    +261 34 74 918 85 / +261 38 36 842 11
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-[#dfe4ea] bg-[#f8fafc] p-4 dark:border-[#3b494b]/20 dark:bg-[#0d0f14]">
                <span className="inline-flex rounded bg-[#ecfdf5] p-2.5 text-[#059669] dark:bg-[#181b22] dark:text-[#00e5a3]">
                  <MapPin size={22} />
                </span>
                <div className="space-y-0.5">
                  <span className="block font-mono text-[12px] uppercase tracking-[0.2em] text-[#64748b] dark:text-[#525c6c]">Localisation</span>
                  <p className="font-inter text-[15px] font-medium text-[#0f172a] dark:text-[#e1e2ec]">Fianarantsoa, Madagascar</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-[#dfe4ea] bg-[#f8fafc] p-4 dark:border-[#3b494b]/20 dark:bg-[#0d0f14]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]"></span>
                <span className="font-mono text-[12px] text-[#059669] dark:text-[#b6efff]">Prêt pour onboarding rapide</span>
              </div>
              <span className="font-mono text-[12px] text-[#64748b] dark:text-[#525c6c]">Remote &amp; CDI</span>
            </div>
          </div>

          <div className="rounded-xl border border-[#dfe4ea] bg-white p-8 shadow-sm dark:border-[#525c6c]/30 dark:bg-[#141824] lg:col-span-7">
            <form className="space-y-6" id="contact-form" onSubmit={(e) => { e.preventDefault(); const feedback = document.getElementById('form-feedback'); if (feedback) { feedback.classList.remove('hidden'); feedback.style.display = 'flex'; } }}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block font-mono text-[12px] uppercase tracking-[0.2em] text-[#0f172a] dark:text-[#e1e2ec]" htmlFor="name">
                    Nom complet <span className="text-[#059669] dark:text-[#00e5a3]">*</span>
                  </label>
                  <input className="w-full rounded-lg border border-[#dfe4ea] bg-[#f8fafc] px-4 py-3.5 font-inter text-[15px] text-[#0f172a] placeholder:text-[#64748b] focus:border-[#059669] focus:outline-none dark:border-[#3b494b]/30 dark:bg-[#0d0f14] dark:text-[#e1e2ec] dark:placeholder:text-[#525c6c]" id="name" placeholder="Votre nom" required type="text" />
                </div>
                <div className="space-y-2">
                  <label className="block font-mono text-[12px] uppercase tracking-[0.2em] text-[#0f172a] dark:text-[#e1e2ec]" htmlFor="email">
                    Email <span className="text-[#059669] dark:text-[#00e5a3]">*</span>
                  </label>
                  <input className="w-full rounded-lg border border-[#dfe4ea] bg-[#f8fafc] px-4 py-3.5 font-inter text-[15px] text-[#0f172a] placeholder:text-[#64748b] focus:border-[#059669] focus:outline-none dark:border-[#3b494b]/30 dark:bg-[#0d0f14] dark:text-[#e1e2ec] dark:placeholder:text-[#525c6c]" id="email" placeholder="votre@email.com" required type="email" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-[12px] uppercase tracking-[0.2em] text-[#0f172a] dark:text-[#e1e2ec]" htmlFor="message">
                  Message <span className="text-[#059669] dark:text-[#00e5a3]">*</span>
                </label>
                <textarea className="w-full resize-y rounded-lg border border-[#dfe4ea] bg-[#f8fafc] px-4 py-3.5 font-inter text-[15px] text-[#0f172a] placeholder:text-[#64748b] focus:border-[#059669] focus:outline-none dark:border-[#3b494b]/30 dark:bg-[#0d0f14] dark:text-[#e1e2ec] dark:placeholder:text-[#525c6c]" id="message" placeholder="Décrivez votre besoin ou votre projet..." required rows={5}></textarea>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#059669] px-6 py-4 font-manrope text-[15px] font-bold text-white transition-colors hover:bg-[#047857] dark:bg-[#00e5a3] dark:text-[#0d0f14] dark:hover:bg-white" type="submit">
                <span>Envoyer le message</span>
                <ArrowRight size={18} />
              </button>

              <div className="hidden items-center gap-3 rounded-lg border border-[#a7f3d0] bg-[#ecfdf5] p-4 font-mono text-[12px] text-[#059669] dark:border-[#00e5a3]/40 dark:bg-[#181b22] dark:text-[#00e5a3]" id="form-feedback" style={{ display: 'none' }}>
                <CheckCircle2 size={16} />
                <span>Merci ! Votre message a été pris en compte. Je vous répondrai dans les plus brefs délais.</span>
              </div>
            </form>
          </div>
        </div>
    </section>
  )
}
