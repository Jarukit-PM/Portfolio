export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <SiteHeader />

        <section className="space-y-8">
          {/* main hero + skills stacked */}
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </section>
      </main>
    </div>
  );
}

import { SiteHeader } from "./components/SiteHeader";
import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { ProjectsSection } from "./components/ProjectsSection";

