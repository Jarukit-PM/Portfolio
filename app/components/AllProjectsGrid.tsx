"use client";

import { ProjectCard } from "@/app/components/ProjectCard";
import type { Project } from "@/app/lib/projects";

type AllProjectsGridProps = {
  projects: Project[];
};

export function AllProjectsGrid({ projects }: AllProjectsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} animate={false} />
      ))}
    </div>
  );
}
