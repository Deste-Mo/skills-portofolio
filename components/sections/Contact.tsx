"use client"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 mb-8">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-0.5 bg-[#00e5a3] inline-block"></span>
          <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#00e5a3] font-semibold">Prendre Contact</span>
        </div>
        <h2 className="font-['Plus_Jakarta_Sans'] text-[36px] md:text-[46px] text-[#e1e2ec]">Contact</h2>
        <p className="font-inter text-[15px] md:text-[18px] text-[#9aa5b5] mt-2 max-w-2xl leading-relaxed">
          Discutons de votre prochain projet ensemble
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 p-8 rounded-xl bg-[#141824] border border-[#525c6c]/30 space-y-8">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-[28px] text-[#e1e2ec] mb-3">Parlons de votre projet</h3>
            <p className="font-inter text-[15px] text-[#9aa5b5] leading-relaxed">
              Je suis toujours ouvert aux nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour discuter de votre projet ou simplement dire bonjour.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#0d0f14] border border-[#3b494b]/20">
              <span className="p-2.5 rounded bg-[#181b22] text-[#00e5a3] material-symbols-outlined text-[24px]">email</span>
              <div className="space-y-0.5">
                <span className="font-mono text-[12px] text-[#525c6c] uppercase block">Email direct</span>
                <a className="font-inter text-[15px] text-[#e1e2ec] hover:text-[#00e5a3] transition-colors font-medium break-all" href="mailto:tolojanaharyjeanmodeste@gmail.com">
                  tolojanaharyjeanmodeste@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#0d0f14] border border-[#3b494b]/20">
              <span className="p-2.5 rounded bg-[#181b22] text-[#00e5a3] material-symbols-outlined text-[24px]">phone</span>
              <div className="space-y-0.5">
                <span className="font-mono text-[12px] text-[#525c6c] uppercase block">Téléphone</span>
                <a className="font-inter text-[15px] text-[#e1e2ec] hover:text-[#00e5a3] transition-colors font-medium" href="tel:+261347491885">
                  +261 34 74 918 85 / +261 38 36 842 11
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#0d0f14] border border-[#3b494b]/20">
              <span className="p-2.5 rounded bg-[#181b22] text-[#00e5a3] material-symbols-outlined text-[24px]">pin_drop</span>
              <div className="space-y-0.5">
                <span className="font-mono text-[12px] text-[#525c6c] uppercase block">Localisation</span>
                <p className="font-inter text-[15px] text-[#e1e2ec] font-medium">Fianarantsoa, Madagascar</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#0d0f14] border border-[#3b494b]/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></span>
              <span className="font-mono text-[12px] text-[#b6efff]">Prêt pour onboarding rapide</span>
            </div>
            <span className="font-mono text-[12px] text-[#525c6c]">Remote &amp; CDI</span>
          </div>
        </div>

        <div className="lg:col-span-7 p-8 rounded-xl bg-[#141824] border border-[#525c6c]/30">
          <form className="space-y-6" id="contact-form" onSubmit={(e) => { e.preventDefault(); const feedback = document.getElementById('form-feedback'); if (feedback) feedback.classList.remove('hidden'); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[12px] text-[#e1e2ec] block uppercase tracking-[0.2em]" htmlFor="name">
                  Nom complet <span className="text-[#00e5a3]">*</span>
                </label>
                <input className="w-full px-4 py-3.5 rounded-lg bg-[#0d0f14] border border-[#3b494b]/30 text-[#e1e2ec] placeholder:text-[#525c6c] font-inter text-[15px] focus:outline-none focus:border-[#00e5a3] transition-colors" id="name" placeholder="Votre nom" required type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[12px] text-[#e1e2ec] block uppercase tracking-[0.2em]" htmlFor="email">
                  Email <span className="text-[#00e5a3]">*</span>
                </label>
                <input className="w-full px-4 py-3.5 rounded-lg bg-[#0d0f14] border border-[#3b494b]/30 text-[#e1e2ec] placeholder:text-[#525c6c] font-inter text-[15px] focus:outline-none focus:border-[#00e5a3] transition-colors" id="email" placeholder="votre@email.com" required type="email" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[12px] text-[#e1e2ec] block uppercase tracking-[0.2em]" htmlFor="message">
                Message <span className="text-[#00e5a3]">*</span>
              </label>
              <textarea className="w-full px-4 py-3.5 rounded-lg bg-[#0d0f14] border border-[#3b494b]/30 text-[#e1e2ec] placeholder:text-[#525c6c] font-inter text-[15px] focus:outline-none focus:border-[#00e5a3] transition-colors resize-y" id="message" placeholder="Décrivez votre besoin ou votre projet..." required rows={5}></textarea>
            </div>

            <button className="w-full py-4 rounded-lg bg-[#00e5a3] text-[#0d0f14] font-manrope text-[15px] font-bold hover:bg-white transition-colors flex items-center justify-center gap-2" type="submit">
              <span className="material-symbols-outlined text-[20px]">send</span>
              <span>Envoyer le message</span>
            </button>

            <div className="hidden p-4 rounded-lg bg-[#181b22] border border-[#00e5a3]/40 text-[#00e5a3] font-mono text-[12px] flex items-center gap-3" id="form-feedback">
              <span className="material-symbols-outlined text-[#00e5a3]">check_circle</span>
              <span>Merci ! Votre message a été pris en compte. Je vous répondrai dans les plus brefs délais.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
