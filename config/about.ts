import { MailIcon, GithubIcon, LinkedinIcon, PhoneIcon, MapPinIcon, GlobeIcon } from "@/components/ui/icons"
import type { Language } from "@/lib/i18n/types"

export interface ContactItem {
  icon: typeof MailIcon
  label: string
  labelEn?: string
  value: string
  href?: string
}

export const contactItems: ContactItem[] = [
  { icon: MailIcon, label: "Email", value: "tolojanaharyjeanmodeste@gmail.com", href: "mailto:tolojanaharyjeanmodeste@gmail.com" },
  { icon: PhoneIcon, label: "Téléphone", labelEn: "Phone", value: "+261 34 74 918 85 / +261 38 36 842 11", href: "tel:+261347491885" },
  { icon: GithubIcon, label: "GitHub", value: "Deste-Mo", href: "https://github.com/Deste-Mo" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "Modeste TOLOJANAHARY", href: "https://www.linkedin.com/in/modeste-nirina-tolojanahary-b844b61b7" },
  { icon: GlobeIcon, label: "Site", labelEn: "Website", value: "tolojanahary-portofolio.vercel.app", href: "https://tolojanahary-portofolio.vercel.app/" },
  { icon: MapPinIcon, label: "Localisation", labelEn: "Location", value: "Andrainjato Fianarantsoa, Madagascar" },
]

export const interests: string[] = ["Games", "Films", "Anime"]

export function getLocalizedContactItems(lang: Language): ContactItem[] {
  return contactItems.map((item) => ({
    ...item,
    label: lang === "en" ? (item.labelEn ?? item.label) : item.label,
  }))
}
