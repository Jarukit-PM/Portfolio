"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import projects from "@/data/projects.json";

type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
  github?: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function ProjectsSection() {
  const list = (projects as Project[]).map((p) => ({
    ...p,
    github: p.github ?? "https://github.com", // placeholder – replace with real repo per project
  }));

  return (
    <section
      id="projects"
      className="space-y-6 rounded-3xl border border-zinc-800/60 bg-zinc-950/70 p-6 sm:p-8 lg:p-10"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
            Projects
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            Selected work that highlights how I build and ship real products.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:gap-6">
        {list.map((project, index) => (
          <Link
            key={project.id}
            href={project.github}
            target="_blank"
            className="block"
          >
            <motion.article
              className="group relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-gradient-to-br from-black via-zinc-950 to-zinc-900"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                delay: 0.1 + index * 0.08,
                type: "spring",
                stiffness: 90,
                damping: 16,
              }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-red-500/60 to-transparent opacity-60" />

              <div className="flex h-full flex-col">
                <div className="relative h-56 w-full overflow-hidden sm:h-64">
                  <Image
                    src={project.image || "/github-cover.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-[50%_20%] transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-300 sm:text-sm">
                      {project.description}
                    </p>
                  </div>

                  {project.tags && project.tags.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-zinc-300 sm:text-xs">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-zinc-700/80 bg-zinc-900/80 px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.16em] text-red-300">
                    View on GitHub
                  </span>
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </section>
  );
}


