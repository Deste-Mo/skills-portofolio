"use client"

import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react"
import { useTranslation } from "@/lib/i18n/context"

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="mb-8 py-20 text-[#0f172a] transition-colors duration-300 dark:text-[#e1e2ec]">
      <div className="mb-12">
        <div className="mb-2 flex items-center gap-3">
          <span className="inline-block h-0.5 w-8 bg-[#059669] dark:bg-[#00e5a3]"></span>
          <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-[#059669] dark:text-[#00e5a3]">
            {t.contact.badge}
          </span>
        </div>
        <h2 className="font-sans text-[36px] text-[#0f172a] md:text-[46px] dark:text-[#e1e2ec]">{t.contact.title}</h2>
        <p className="mt-2 max-w-3xl font-sans text-[15px] leading-relaxed text-[#475569] md:text-[18px] dark:text-[#9aa5b5]">
          {t.contact.description}
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="space-y-8 rounded-xl border border-[#dfe4ea] bg-white p-8 shadow-sm dark:border-[#525c6c]/30 dark:bg-[#141824] lg:col-span-5">
          <div>
            <h3 className="mb-3 font-sans text-[28px] text-[#0f172a] dark:text-[#e1e2ec]">{t.contact.cta}</h3>
            <p className="font-sans text-[15px] leading-relaxed text-[#475569] dark:text-[#9aa5b5]">{t.contact.ctaDesc}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-[#dfe4ea] bg-[#f8fafc] p-4 dark:border-[#3b494b]/20 dark:bg-[#0d0f14]">
              <span className="inline-flex rounded bg-[#ecfdf5] p-2.5 text-[#059669] dark:bg-[#181b22] dark:text-[#00e5a3]">
                <Mail size={22} />
              </span>
              <div className="space-y-0.5">
                <span className="block font-mono text-[12px] uppercase tracking-[0.2em] text-[#64748b] dark:text-[#525c6c]">{t.contact.email}</span>
                <a className="break-all font-sans text-[15px] font-medium text-[#0f172a] transition-colors hover:text-[#059669] dark:text-[#e1e2ec] dark:hover:text-[#00e5a3]" href="mailto:tolojanaharyjeanmodeste@gmail.com">
                  tolojanaharyjeanmodeste@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-[#dfe4ea] bg-[#f8fafc] p-4 dark:border-[#3b494b]/20 dark:bg-[#0d0f14]">
              <span className="inline-flex rounded bg-[#ecfdf5] p-2.5 text-[#059669] dark:bg-[#181b22] dark:text-[#00e5a3]">
                <Phone size={22} />
              </span>
              <div className="space-y-0.5">
                <span className="block font-mono text-[12px] uppercase tracking-[0.2em] text-[#64748b] dark:text-[#525c6c]">{t.contact.phone}</span>
                <a className="font-sans text-[15px] font-medium text-[#0f172a] transition-colors hover:text-[#059669] dark:text-[#e1e2ec] dark:hover:text-[#00e5a3]" href="tel:+261347491885">
                  +261 34 74 918 85 / +261 38 36 842 11
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-[#dfe4ea] bg-[#f8fafc] p-4 dark:border-[#3b494b]/20 dark:bg-[#0d0f14]">
              <span className="inline-flex rounded bg-[#ecfdf5] p-2.5 text-[#059669] dark:bg-[#181b22] dark:text-[#00e5a3]">
                <MapPin size={22} />
              </span>
              <div className="space-y-0.5">
                <span className="block font-mono text-[12px] uppercase tracking-[0.2em] text-[#64748b] dark:text-[#525c6c]">{t.contact.location}</span>
                <p className="font-sans text-[15px] font-medium text-[#0f172a] dark:text-[#e1e2ec]">{t.contact.locationValue}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-[#dfe4ea] bg-[#f8fafc] p-4 dark:border-[#3b494b]/20 dark:bg-[#0d0f14]">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]"></span>
              <span className="font-mono text-[12px] text-[#059669] dark:text-[#b6efff]">
                {t.projects.ready}
              </span>
            </div>
            <span className="font-mono text-[12px] text-[#64748b] dark:text-[#525c6c]">{t.projects.remote}</span>
          </div>
        </div>

        <div className="rounded-xl border border-[#dfe4ea] bg-white p-8 shadow-sm dark:border-[#525c6c]/30 dark:bg-[#141824] lg:col-span-7">
          <form className="space-y-6" id="contact-form" onSubmit={(e) => { e.preventDefault(); const feedback = document.getElementById('form-feedback'); if (feedback) { feedback.classList.remove('hidden'); feedback.style.display = 'flex'; } }}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="block font-mono text-[12px] uppercase tracking-[0.2em] text-[#0f172a] dark:text-[#e1e2ec]" htmlFor="name">
                  {t.contact.form.name} <span className="text-[#059669] dark:text-[#00e5a3]">*</span>
                </label>
                <input className="w-full rounded-lg border border-[#dfe4ea] bg-[#f8fafc] px-4 py-3.5 font-sans text-[15px] text-[#0f172a] placeholder:text-[#64748b] focus:border-[#059669] focus:outline-none dark:border-[#3b494b]/30 dark:bg-[#0d0f14] dark:text-[#e1e2ec] dark:placeholder:text-[#525c6c]" id="name" placeholder={t.contact.form.placeholderName} required type="text" />
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-[12px] uppercase tracking-[0.2em] text-[#0f172a] dark:text-[#e1e2ec]" htmlFor="email">
                  {t.contact.form.email} <span className="text-[#059669] dark:text-[#00e5a3]">*</span>
                </label>
                <input className="w-full rounded-lg border border-[#dfe4ea] bg-[#f8fafc] px-4 py-3.5 font-sans text-[15px] text-[#0f172a] placeholder:text-[#64748b] focus:border-[#059669] focus:outline-none dark:border-[#3b494b]/30 dark:bg-[#0d0f14] dark:text-[#e1e2ec] dark:placeholder:text-[#525c6c]" id="email" placeholder={t.contact.form.placeholderEmail} required type="email" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-[12px] uppercase tracking-[0.2em] text-[#0f172a] dark:text-[#e1e2ec]" htmlFor="message">
                {t.contact.form.message} <span className="text-[#059669] dark:text-[#00e5a3]">*</span>
              </label>
              <textarea className="w-full resize-y rounded-lg border border-[#dfe4ea] bg-[#f8fafc] px-4 py-3.5 font-sans text-[15px] text-[#0f172a] placeholder:text-[#64748b] focus:border-[#059669] focus:outline-none dark:border-[#3b494b]/30 dark:bg-[#0d0f14] dark:text-[#e1e2ec] dark:placeholder:text-[#525c6c]" id="message" placeholder={t.contact.form.placeholderMessage} required rows={5}></textarea>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#059669] px-6 py-4 font-sans text-[15px] font-bold text-white transition-colors hover:bg-[#047857] dark:bg-[#00e5a3] dark:text-[#0d0f14] dark:hover:bg-white" type="submit">
              <span>{t.contact.form.submit}</span>
              <ArrowRight size={18} />
            </button>

            <div className="hidden items-center gap-3 rounded-lg border border-[#a7f3d0] bg-[#ecfdf5] p-4 font-mono text-[12px] text-[#059669] dark:border-[#00e5a3]/40 dark:bg-[#181b22] dark:text-[#00e5a3]" id="form-feedback" style={{ display: 'none' }}>
              <CheckCircle2 size={16} />
              <span>{t.contact.success.description}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
