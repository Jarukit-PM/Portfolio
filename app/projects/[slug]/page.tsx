import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import {
  ProjectDetail,
  ProjectDetailPlaceholder,
} from "@/app/components/ProjectDetail";
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
        <Link
          href="/#projects"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-400 backdrop-blur-sm transition hover:border-zinc-600 hover:bg-zinc-800/80 hover:text-zinc-100"
        >
          <FiArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          Back to projects
        </Link>

        {showRichDetail ? (
          <ProjectDetail project={project} detail={detail} />
        ) : (
          <ProjectDetailPlaceholder project={project} />
        )}
      </main>
    </div>
  );
}
