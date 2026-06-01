import { notFound } from "next/navigation";
import {
  ProjectDetail,
  ProjectDetailPlaceholder,
} from "@/app/components/ProjectDetail";
import { BackToProjectsLink } from "@/app/components/BackToProjectsLink";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getProjectDetail,
  hasRichProjectDetail,
} from "@/app/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} · Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const detail = getProjectDetail(slug);
  const showRichDetail = hasRichProjectDetail(slug) && detail;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-40 bg-linear-to-b from-red-950/20 via-transparent to-transparent" />
      <main className="relative mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <BackToProjectsLink />

        {showRichDetail ? (
          <ProjectDetail project={project} detail={detail} />
        ) : (
          <ProjectDetailPlaceholder project={project} />
        )}
      </main>
    </div>
  );
}
