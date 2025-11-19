"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { HiCodeBracket, HiLightBulb } from "react-icons/hi2";
import { FaRocket, FaGraduationCap } from "react-icons/fa";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.06,
      type: "spring" as const,
      stiffness: 90,
      damping: 16,
    },
  }),
};

const tagIcons: Record<string, React.ReactNode> = {
  Entrepreneurship: <FaRocket />,
  "Innovation Management": <HiLightBulb />,
  "Software Development": <HiCodeBracket />,
  "Web Development": <HiCodeBracket />,
};

const tagColors: Record<string, string> = {
  Entrepreneurship: "text-orange-300",
  "Innovation Management": "text-yellow-300",
  "Software Development": "text-blue-400",
  "Web Development": "text-cyan-300",
};

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    field: "Entrepreneurship / Entrepreneurial Studies",
    school: "King Mongkut's University of Technology Thonburi",
    schoolLogo: "/images/logos/KMUTT_Logo.png",
    period: "Aug 2024 – May 2027",
    tags: ["Entrepreneurship", "Innovation Management"],
  },
  {
    degree: "Bachelor of Engineering (BE)",
    field: "Computer Engineering",
    school: "King Mongkut's University of Technology Thonburi",
    schoolLogo: "/images/logos/KMUTT_Logo.png",
    period: "Aug 2022 – May 2026",
    tags: ["Software Development", "Web Development"],
  },
];

export function EducationSection() {
  return (
    <section
      id="education"
      className="space-y-6 rounded-3xl border border-zinc-800/50 bg-zinc-950/70 p-6 sm:p-8 lg:p-10"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
            Education
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            Engineering + business background that bridges tech and impact.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-5">
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            className="relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-linear-to-br from-zinc-950 via-zinc-950/95 to-zinc-900/80 p-5 sm:p-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-red-400/60 to-transparent" />
            <div className="flex items-start gap-3">
              {item.schoolLogo && (
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-zinc-700/50 bg-zinc-900/50 p-2">
                  <Image
                    src={item.schoolLogo}
                    alt={`${item.school} logo`}
                    fill
                    className="object-contain"
                    sizes="80px"
                    unoptimized
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
                  {item.degree}
                </h3>
                <p className="text-xs font-medium text-zinc-300 sm:text-sm">
                  {item.field}
                </p>
                <p className="mt-1 text-xs text-zinc-400">{item.school}</p>
                <p className="mt-1 text-xs text-zinc-500">{item.period}</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-zinc-300 sm:text-xs">
              {item.tags.map((tag) => {
                const icon = tagIcons[tag];
                const color = tagColors[tag] || "text-zinc-300";
                return (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-2.5 py-1 text-zinc-100 shadow-[0_0_22px_rgba(0,0,0,0.9)]"
                  >
                    {icon && <span className={`text-sm ${color}`}>{icon}</span>}
                    <span>{tag}</span>
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


