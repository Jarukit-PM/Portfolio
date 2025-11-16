"use client";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.06,
      type: "spring",
      stiffness: 90,
      damping: 16,
    },
  }),
};

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    field: "Entrepreneurship / Entrepreneurial Studies",
    school: "King Mongkut's University of Technology Thonburi",
    period: "Aug 2024 – May 2027",
    tags: ["Entrepreneurship", "Innovation Management"],
  },
  {
    degree: "Bachelor of Engineering (BE)",
    field: "Computer Engineering",
    school: "King Mongkut's University of Technology Thonburi",
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
            className="relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-gradient-to-br from-zinc-950 via-zinc-950/95 to-zinc-900/80 p-5 sm:p-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/60 to-transparent" />
            <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
              {item.degree}
            </h3>
            <p className="text-xs font-medium text-zinc-300 sm:text-sm">
              {item.field}
            </p>
            <p className="mt-1 text-xs text-zinc-400">{item.school}</p>
            <p className="mt-1 text-xs text-zinc-500">{item.period}</p>

            <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-zinc-300 sm:text-xs">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700/80 bg-zinc-900/80 px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


