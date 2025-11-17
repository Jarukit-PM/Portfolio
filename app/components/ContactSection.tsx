"use client";

import { motion, type Variants } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";

const container: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 16,
    },
  },
};

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-gradient-to-r from-zinc-950 via-zinc-950 to-zinc-900 px-6 py-8 sm:px-8 sm:py-10 lg:px-10"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div
        className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-red-500/25 blur-3xl"
        animate={{
          x: [0, -15, 0],
          y: [0, 10, -5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
            Let&apos;s build something great together.
          </h2>
          <p className="mt-1 max-w-md text-sm text-zinc-400">
            Open to frontend, fullstack, and software engineering roles,
            especially where modern web tech and great UX come together.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <a
            href="mailto:jarukit.pm@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-50 px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-red-500/30 transition hover:bg-red-500 hover:text-zinc-50"
          >
            <FiMail className="h-4 w-4 transition group-hover:-translate-y-0.5" />
            Email me
          </a>

          <div className="flex items-center gap-3 text-zinc-300">
            <Link
              href="https://www.linkedin.com/in/jarukit-pan-iam-10b84b391/"
              target="_blank"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg text-zinc-100 transition hover:-translate-y-0.5 hover:border-red-500 hover:text-red-300"
            >
              <FiLinkedin />
            </Link>
            <Link
              href="https://github.com/Jarukit-PM"
              target="_blank"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg text-zinc-100 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-50"
            >
              <FiGithub />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


