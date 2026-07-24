"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { MailIcon, GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { useTranslation } from "@/lib/i18n/context";

export function AppFooter() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const navLabelMap: Record<string, keyof typeof t.nav> = {
    "/": "home",
    "#about": "about",
    "#skills": "skills",
    "#experiences": "experiences",
    "#services": "services",
    "#projects": "projects",
    "#contact": "contact",
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-background/80 backdrop-blur-md border-t border-border/50 mt-8"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left order-2 md:order-1">
            © {currentYear} {siteConfig.name}. {t.footer.rights}
          </p>

          {/* Navigation links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 order-3 md:order-2">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {t.nav[navLabelMap[item.href]]}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-3 order-1 md:order-3">
            <a
              href="mailto:modestep20.aps1a@gmail.com"
              className="flex h-8 w-8 items-center justify-center rounded-[0.125rem] border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              aria-label="Email"
            >
              <MailIcon size={16} />
            </a>
            <a
              href="https://github.com/Deste-Mo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-[0.125rem] border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/modeste-nirina-tolojanahary-b844b61b7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-[0.125rem] border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
