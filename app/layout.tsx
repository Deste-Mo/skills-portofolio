import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";
import { LanguageProvider } from "@/lib/i18n/context";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Portfolio`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className="dark h-full antialiased scroll-smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#0d0f14] text-[#e1e2ec] transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <AppHeader />
            <div className="flex-1">{children}</div>
            <AppFooter />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
