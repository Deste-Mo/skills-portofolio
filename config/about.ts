import { MailIcon, GithubIcon, LinkedinIcon, PhoneIcon, MapPinIcon } from "@/components/ui/icons"

export interface ContactItem {
  icon: typeof MailIcon
  label: string
  value: string
  href?: string
}

export const contactItems: ContactItem[] = [
  { icon: MailIcon, label: "Email", value: "modestep20.aps1a@gmail.com", href: "mailto:modestep20.aps1a@gmail.com" },
  { icon: PhoneIcon, label: "Téléphone", value: "+261 34 74 918 85", href: "tel:+261347491885" },
  { icon: GithubIcon, label: "GitHub", value: "Deste-Mo", href: "https://github.com/Deste-Mo" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "Modeste TOLOJANAHARY", href: "https://www.linkedin.com/in/modeste-nirina-tolojanahary-b844b61b7" },
  { icon: MapPinIcon, label: "Localisation", value: "Andrainjato Fianarantsoa, Madagascar" },
]

export const interests: string[] = ["Games", "Films", "Anime"]
