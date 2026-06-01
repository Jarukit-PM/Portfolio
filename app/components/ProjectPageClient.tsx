"use client";

import {
  ProjectDetail,
  ProjectDetailPlaceholder,
} from "@/app/components/ProjectDetail";
import { BackToProjectsLink } from "@/app/components/BackToProjectsLink";
import { DocumentTitle } from "@/app/components/DocumentTitle";
import { SiteHeader } from "@/app/components/SiteHeader";
import {
  localizeProject,
  localizeProjectDetail,
} from "@/app/lib/i18n/project-locale";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";
import type { Project, ProjectDetailContent } from "@/app/lib/projects";

type ProjectPageClientProps = {
  project: Project;
  detail?: ProjectDetailContent;
  showRichDetail: boolean;
};

export function ProjectPageClient({
  project,
  detail,
  showRichDetail,
}: ProjectPageClientProps) {
  const { lang, t } = useLanguage();
  const localizedProject = localizeProject(project, lang);
  const localizedDetail = localizeProjectDetail(
    project.slug,
    detail,
    lang
  );

  return (
    <>
      <DocumentTitle title={`${localizedProject.title} · ${t.meta.siteTitle}`} />
      <SiteHeader />
      <main className="relative mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <BackToProjectsLink />

        {showRichDetail && localizedDetail ? (
          <ProjectDetail project={localizedProject} detail={localizedDetail} />
        ) : (
          <ProjectDetailPlaceholder project={localizedProject} />
        )}
      </main>
    </>
  );
}
