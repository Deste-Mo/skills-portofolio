import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Inter, Just_Me_Again_Down_Here } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";
import { LanguageProvider } from "@/lib/i18n/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const justMeAgainDownHere = Just_Me_Again_Down_Here({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: "400",
});

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
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${inter.variable} ${justMeAgainDownHere.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <AppHeader />
            <div className="pt-14 md:pt-16 flex-1">
              {children}
            </div>
            <AppFooter />
            <ThemeToggle />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
