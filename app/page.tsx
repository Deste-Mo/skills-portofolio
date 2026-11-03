import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ExperiencesSection } from "@/components/sections/Experiences";
import { ServicesSection } from "@/components/sections/Services";
import { ProjectsSection } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="mx-auto w-full">
      <Hero />
      <div className="relative z-10">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
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
