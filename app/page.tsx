export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <header className="flex items-center justify-between gap-4 rounded-3xl border border-zinc-800/60 bg-zinc-950/80 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Jarukit Pan-Iam
          </div>
          <nav className="hidden gap-4 text-xs font-medium text-zinc-400 sm:flex">
            <a href="#skills" className="hover:text-zinc-100">
              Skills
            </a>
            <a href="#experience" className="hover:text-zinc-100">
              Experience
            </a>
            <a href="#education" className="hover:text-zinc-100">
              Education
            </a>
            <a href="#contact" className="hover:text-zinc-100">
              Contact
            </a>
          </nav>
        </header>

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

import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { ProjectsSection } from "./components/ProjectsSection";

