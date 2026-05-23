import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ExperiencesSection } from "@/components/sections/Experiences";
import { ServicesSection } from "@/components/sections/Services";
import { ProjectsSection } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto w-full">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
