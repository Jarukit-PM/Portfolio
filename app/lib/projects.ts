import projectsData from "@/data/projects.json";
import projectDetailsData from "@/data/project-details.json";

export type Project = {
  id: number;
  slug: string;
  title: string;
  stars: number;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
  github?: string;
  demo?: string;
};

export type HighlightIconKey =
  | "mobile"
  | "web"
  | "api"
  | "workflow"
  | "management"
  | "launch";

export type ProjectHighlightStructured = {
  title: string;
  subtitle?: string;
  bullets: string[];
  icon?: HighlightIconKey;
};

export type ProjectHighlight = string | ProjectHighlightStructured;

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectScreenshotGroup = {
  title: string;
  subtitle?: string;
  platform?: "mobile" | "web";
  screenshots: ProjectScreenshot[];
};

export type ProjectDetailContent = {
  overview: string;
  highlights: ProjectHighlight[];
  role?: string;
  disclaimer?: string;
  screenshotGroups?: ProjectScreenshotGroup[];
};

export function isStructuredHighlight(
  item: ProjectHighlight
): item is ProjectHighlightStructured {
  return typeof item === "object" && item !== null && "bullets" in item;
}

export const projects = projectsData as Project[];

const projectDetails = projectDetailsData as Record<string, ProjectDetailContent>;

/** Projects shown in the home page carousel preview */
export const FEATURED_PROJECT_COUNT = 4;

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, FEATURED_PROJECT_COUNT);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectDetail(slug: string): ProjectDetailContent | undefined {
  return projectDetails[slug];
}

export function hasRichProjectDetail(slug: string): boolean {
  return slug in projectDetails;
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
