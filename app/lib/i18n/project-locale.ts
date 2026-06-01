import projectsTh from "@/data/projects.th.json";
import projectDetailsTh from "@/data/project-details.th.json";
import type {
  Project,
  ProjectDetailContent,
} from "@/app/lib/projects";
import type { Language } from "@/app/lib/i18n/translations";

const projectDescriptionsTh = projectsTh as Record<
  string,
  { description: string }
>;

const projectDetailsLocale = projectDetailsTh as Record<
  string,
  ProjectDetailContent
>;

export function localizeProject(project: Project, lang: Language): Project {
  if (lang === "en") return project;
  const localized = projectDescriptionsTh[project.slug];
  if (!localized) return project;
  return { ...project, description: localized.description };
}

export function localizeProjects(projects: Project[], lang: Language): Project[] {
  if (lang === "en") return projects;
  return projects.map((project) => localizeProject(project, lang));
}

export function localizeProjectDetail(
  slug: string,
  detail: ProjectDetailContent | undefined,
  lang: Language
): ProjectDetailContent | undefined {
  if (!detail || lang === "en") return detail;
  return projectDetailsLocale[slug] ?? detail;
}
