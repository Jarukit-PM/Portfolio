"use client";

import Link from "next/link";
import { AllProjectsGrid } from "@/app/components/AllProjectsGrid";
import { DocumentTitle } from "@/app/components/DocumentTitle";
import { SiteHeader } from "@/app/components/SiteHeader";
import type { Project } from "@/app/lib/projects";
import { localizeProjects } from "@/app/lib/i18n/project-locale";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";

export function AllProjectsView({ projects }: { projects: Project[] }) {
  const { lang, t } = useLanguage();
  const localizedProjects = localizeProjects(projects, lang);

  return (
    <>
      <DocumentTitle title={t.allProjects.metaTitle} />
      <SiteHeader />
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/#projects"
        className="inline-flex w-fit items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
      >
        {t.allProjects.backToHome}
      </Link>

      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
          {t.allProjects.title}
        </h1>
        <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
          {t.allProjects.subtitle}
        </p>
      </header>

      <AllProjectsGrid projects={localizedProjects} />
    </main>
    </>
  );
}
