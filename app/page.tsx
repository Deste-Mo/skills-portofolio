import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ExperiencesSection } from "@/components/sections/Experiences";
import { ServicesSection } from "@/components/sections/Services";
import { ProjectsSection } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="mx-auto w-full bg-[#0d0f14]">
      <Hero />
      <div className="relative z-10 bg-[#0d0f14]">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <AboutSection />
          <SkillsSection />
          <ExperiencesSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
