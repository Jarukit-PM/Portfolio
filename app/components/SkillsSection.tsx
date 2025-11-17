"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import skillsData from "@/data/skills.json";
import {
  SiAngular,
  SiC,
  SiCplusplus,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiGo,
  SiJavascript,
  SiJenkins,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";

const wrapper: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
    },
  },
};

const chip: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.15 + i * 0.04,
      type: "spring",
      stiffness: 140,
      damping: 14,
    },
  }),
};

const skillIcons: Record<string, ReactNode> = {
  React: <SiReact />,
  "React Native": <SiReact />,
  "Next.js": <SiNextdotjs />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  "Framer Motion": <SiFramer />,
  "Three.js": <SiThreedotjs />,
  "React Three Fiber": <SiReactquery />,
  Angular: <SiAngular />,
  ".NET": <SiDotnet />,
  C: <SiC />,
  "C++": <SiCplusplus />,
  "Node.js": <SiNodedotjs />,
  "REST APIs": <SiNodedotjs />,
  Go: <SiGo />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  PostgreSQL: <SiPostgresql />,
  Git: <SiGithub />,
  "GitHub Desktop": <SiGithub />,
  Jenkins: <SiJenkins />,
  "CI/CD": <SiGithub />,
  Docker: <SiDocker />,
};

const skillColors: Record<string, string> = {
  React: "text-sky-400",
  "React Native": "text-sky-400",
  "Next.js": "text-zinc-100",
  JavaScript: "text-yellow-300",
  TypeScript: "text-sky-300",
  "Tailwind CSS": "text-teal-300",
  "Framer Motion": "text-pink-300",
  "Three.js": "text-emerald-300",
  "React Three Fiber": "text-emerald-200",
  Angular: "text-red-400",
  ".NET": "text-indigo-300",
  C: "text-blue-300",
  "C++": "text-blue-400",
  "Node.js": "text-lime-300",
  "REST APIs": "text-lime-300",
  Go: "text-cyan-300",
  Express: "text-emerald-300",
  MongoDB: "text-emerald-400",
  Firebase: "text-amber-300",
  PostgreSQL: "text-sky-300",
  Git: "text-orange-300",
  "GitHub Desktop": "text-orange-300",
  Jenkins: "text-yellow-300",
  "CI/CD": "text-fuchsia-300",
  Docker: "text-sky-400",
};

export function SkillsSection() {
  const groups = [
    { label: "Frontend", items: skillsData.frontend },
    { label: "Backend", items: skillsData.backend },
    { label: "Database", items: skillsData.database },
    { label: "Tooling", items: skillsData.tooling },
  ];

  return (
    <section
      id="skills"
      className="space-y-6 rounded-3xl border border-zinc-800/50 bg-zinc-950/60 p-6 sm:p-8 lg:p-10"
    >
      <motion.div
        variants={wrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
          Skills
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          A mix of frontend, backend, and tooling that supports fullstack
          development.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.label} className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.9)]" />
              {group.label}
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-x-6 top-1 h-px bg-linear-to-r from-transparent via-zinc-700/80 to-transparent" />
              <div className="flex flex-wrap gap-2 pt-4">
                {group.items.map((item, index) => (
                  <motion.span
                    key={item}
                    variants={chip}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{
                      y: -4,
                      scale: 1.06,
                    }}
                    whileTap={{ scale: 0.97 }}
                    viewport={{ once: true, amount: 0.4 }}
                    custom={index}
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1 text-xs text-zinc-100 shadow-[0_0_22px_rgba(0,0,0,0.9)]"
                  >
                    {skillIcons[item] && (
                      <span
                        className={`text-sm ${skillColors[item] ?? "text-zinc-300"}`}
                      >
                        {skillIcons[item]}
                      </span>
                    )}
                    <span>{item}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


