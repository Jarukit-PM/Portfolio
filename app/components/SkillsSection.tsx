"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import skillsData from "@/data/skills.json";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";
import {
  SiAmazonwebservices,
  SiAngular,
  SiC,
  SiClaude,
  SiCplusplus,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiJenkins,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiSass,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";

function CursorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[1em] w-[1em]"
      aria-hidden
    >
      <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
    </svg>
  );
}

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
  SCSS: <SiSass />,
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
  "MongoDB Atlas": <SiMongodb />,
  Prisma: <SiPrisma />,
  Firebase: <SiFirebase />,
  PostgreSQL: <SiPostgresql />,
  "Google Cloud": <SiGooglecloud />,
  AWS: <SiAmazonwebservices />,
  Git: <SiGithub />,
  "GitHub Desktop": <SiGithub />,
  Jenkins: <SiJenkins />,
  "CI/CD": <SiGithub />,
  Docker: <SiDocker />,
  Cursor: <CursorIcon />,
  "Claude Code": <SiClaude />,
  Codex: <SiOpenai />,
};

const skillColors: Record<string, string> = {
  React: "text-sky-400",
  "React Native": "text-sky-400",
  "Next.js": "text-zinc-100",
  JavaScript: "text-yellow-300",
  TypeScript: "text-sky-300",
  SCSS: "text-pink-400",
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
  "MongoDB Atlas": "text-green-400",
  Prisma: "text-indigo-300",
  Firebase: "text-amber-300",
  PostgreSQL: "text-sky-300",
  "Google Cloud": "text-blue-400",
  AWS: "text-orange-400",
  Git: "text-orange-300",
  "GitHub Desktop": "text-orange-300",
  Jenkins: "text-yellow-300",
  "CI/CD": "text-fuchsia-300",
  Docker: "text-sky-400",
  Cursor: "text-zinc-100",
  "Claude Code": "text-orange-300",
  Codex: "text-emerald-300",
};

export function SkillsSection() {
  const { t } = useLanguage();
  const groups = [
    { label: t.skills.frontend, items: skillsData.frontend },
    { label: t.skills.backend, items: skillsData.backend },
    { label: t.skills.database, items: skillsData.database },
    { label: t.skills.cloud, items: skillsData.cloud },
    { label: t.skills.tooling, items: skillsData.tooling },
    { label: t.skills.aiAgents, items: skillsData.aiAgents },
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
          {t.skills.title}
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          {t.skills.subtitle}
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


