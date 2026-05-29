"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/app/lib/projects";
import { tagColors, tagIcons } from "@/app/lib/project-tags";
import { ProjectStars } from "@/app/components/ProjectStars";
import { getImagePath } from "@/app/lib/utils";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

type ProjectCardProps = {
  project: Project;
  className?: string;
  animate?: boolean;
};

export function ProjectCard({
  project,
  className = "",
  animate = true,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  const imageSrc =
    imageError || !project.image
      ? getImagePath("/github-cover.svg")
      : getImagePath(project.image);

  const card = (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800/70 bg-linear-to-br from-black via-zinc-950 to-zinc-900 transition-transform hover:scale-[1.02]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-red-500/60 to-transparent opacity-60" />

      <div className="flex h-full flex-col">
        <div className="relative h-56 w-full overflow-hidden sm:h-64">
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            className="object-cover object-center transition duration-500 group-hover:scale-105 group-hover:brightness-110"
            unoptimized
            onError={() => setImageError(true)}
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
                {project.title}
              </h3>
              <ProjectStars stars={project.stars} />
            </div>
            <p className="line-clamp-2 text-xs text-zinc-300 sm:text-sm">
              {project.description}
            </p>
          </div>

          {project.tags && project.tags.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-zinc-300 sm:text-xs">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-2.5 py-1"
                >
                  {tagIcons[tag] && (
                    <span
                      className={`text-xs ${tagColors[tag] ?? "text-zinc-300"}`}
                    >
                      {tagIcons[tag]}
                    </span>
                  )}
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          )}

          <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.16em] text-red-300">
            View details
          </span>
        </div>
      </div>
    </article>
  );

  const content = animate ? (
    <motion.div
      className="h-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        delay: 0.1,
        type: "spring",
        stiffness: 90,
        damping: 16,
      }}
      whileHover={{ y: -6 }}
    >
      {card}
    </motion.div>
  ) : (
    card
  );

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`block h-full ${className}`}
    >
      {content}
    </Link>
  );
}
