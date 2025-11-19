"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { getImagePath } from "@/app/lib/utils";
import {
  SiAngular,
  SiDotnet,
  SiJenkins,
  SiGithub,
} from "react-icons/si";
import { HiCodeBracket, HiServer } from "react-icons/hi2";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + index * 0.08,
      type: "spring" as const,
      stiffness: 80,
      damping: 16,
    },
  }),
};

const skillIcons: Record<string, React.ReactNode> = {
  "Full-Stack Development": <HiCodeBracket />,
  "Microsoft SQL Server": <HiServer />,
  "CI/CD": <SiGithub />,
  Jenkins: <SiJenkins />,
  Angular: <SiAngular />,
  ".NET": <SiDotnet />,
};

const skillColors: Record<string, string> = {
  "Full-Stack Development": "text-cyan-300",
  "Microsoft SQL Server": "text-red-400",
  "CI/CD": "text-fuchsia-300",
  Jenkins: "text-yellow-300",
  Angular: "text-red-400",
  ".NET": "text-indigo-300",
};

const experiences = [
  {
    role: "Full Stack Developer",
    company: "IRPC Public Company Limited",
    companyLogo: "/images/logos/IRPC_Logo.png",
    type: "Internship",
    period: "Jun 2025 – Aug 2025 · 2 mos",
    location: "Rayong, Thailand · On-site",
    bullets: [
      "Developed an internal web application using Angular and .NET, improving workflow efficiency across teams.",
      "Gained hands-on experience with Jenkins deployment and implemented CI/CD pipelines for automated builds and releases.",
      "Communicated technical concepts effectively with both technical and non-technical stakeholders.",
      "Strengthened problem-solving skills through debugging and refactoring.",
      "Designed the initial database structure and worked with SQL Server for data modeling, querying, and optimization.",
    ],
    skills:
      "Full-Stack Development · Microsoft SQL Server · CI/CD · Jenkins · Angular · .NET",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="space-y-8 rounded-3xl border border-zinc-800/50 bg-zinc-950/80 p-6 sm:p-8 lg:p-10"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
            Experience
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            Real-world impact from internships and hands-on projects.
          </p>
        </div>
        <div className="hidden text-xs font-medium text-zinc-400 sm:inline-flex">
          INTERN · FULLSTACK
        </div>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.role}
            className="relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-linear-to-br from-zinc-950 via-zinc-950/95 to-zinc-900/80 p-5 sm:p-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            custom={index}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-zinc-600/70 to-transparent" />

            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                {exp.companyLogo && (
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-zinc-700/50 bg-zinc-900/50 p-2">
                    <Image
                      src={getImagePath(exp.companyLogo)}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain"
                      sizes="96px"
                      unoptimized
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-medium text-zinc-300 sm:text-sm">
                    {exp.company} · {exp.type}
                  </p>
                </div>
              </div>
              <div className="text-right text-[11px] text-zinc-400 sm:text-xs">
                <p>{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-xs leading-relaxed text-zinc-300 sm:text-sm">
              {exp.bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-zinc-300 sm:text-xs">
              {exp.skills.split("·").map((skill) => {
                const skillName = skill.trim();
                const icon = skillIcons[skillName];
                const color = skillColors[skillName] || "text-zinc-300";
                return (
                  <span
                    key={skillName}
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-2.5 py-1 text-zinc-100 shadow-[0_0_22px_rgba(0,0,0,0.9)]"
                  >
                    {icon && <span className={`text-sm ${color}`}>{icon}</span>}
                    <span>{skillName}</span>
                  </span>
                );
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


