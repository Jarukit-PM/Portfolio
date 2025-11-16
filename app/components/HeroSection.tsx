"use client";

import { motion, type Variants } from "framer-motion";
import { FiDownload, FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";

const container: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
      mass: 0.9,
    },
  },
};

const titleParent: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const titleChild: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

const glowOrb: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export function HeroSection() {
  const name = "Jarukit Pan-Iam";

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden rounded-3xl border border-zinc-800/40 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 px-6 py-16 shadow-[0_0_60px_rgba(0,0,0,0.7)] sm:px-10 lg:px-16">
      {/* background glow */}
      <motion.div
        className="pointer-events-none absolute -top-40 right-[-10%] h-72 w-72 rounded-full bg-red-500/25 blur-3xl"
        variants={glowOrb}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-72 w-72 rounded-full bg-white/10 blur-3xl"
        variants={glowOrb}
        initial="hidden"
        animate="visible"
      />

      <motion.div
        className="relative z-10 grid w-full max-w-5xl gap-10 lg:grid-cols-[2fr,1.4fr] lg:items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8">
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-200 backdrop-blur"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.9)]" />
            Available for opportunities
          </motion.div>

          <motion.div
            variants={titleParent}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <motion.h1
              variants={titleChild}
              className="text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl"
            >
              <span className="block text-zinc-400 text-base sm:text-lg">
                Hi, I&apos;m
              </span>
              <span className="bg-gradient-to-r from-zinc-50 via-red-200 to-red-500 bg-clip-text text-transparent">
                {name}
              </span>
            </motion.h1>

            <motion.p
              variants={titleChild}
              className="max-w-xl text-sm sm:text-base text-zinc-300"
            >
              Frontend Developer · Fullstack Developer · Software Engineer.
              Passionate about building immersive web experiences with clean
              code, smooth animations, and delightful details.
            </motion.p>

            <motion.div
              variants={titleChild}
              className="flex flex-wrap items-center gap-3 text-xs font-medium text-zinc-300"
            >
              <span className="rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1">
                Angular &amp; .NET experience
              </span>
              <span className="rounded-full border border-red-300/50 bg-red-500/5 px-3 py-1">
                CI/CD &amp; SQL Server
              </span>
              <span className="rounded-full border border-zinc-500/60 bg-zinc-800/80 px-3 py-1">
                MBA &amp; Computer Engineering
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={titleChild}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Link
              href="/resume/jarukit-pan-iam-resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-red-500/30 transition hover:bg-red-500 hover:text-zinc-50"
            >
              <FiDownload className="h-4 w-4 transition group-hover:-translate-y-0.5" />
              Download Resume
            </Link>

            <div className="flex items-center gap-3 text-zinc-300">
              <span className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Connect
              </span>
              <Link
                href="https://www.linkedin.com/in/jarukit-pan-iam-10b84b391/"
                target="_blank"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg text-zinc-100 transition hover:-translate-y-0.5 hover:border-red-500 hover:text-red-300"
              >
                <FiLinkedin />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg text-zinc-100 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-50"
              >
                <FiGithub />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right side: animated card / placeholder for future 3D */}
        <motion.div
          className="relative h-64 w-full max-w-md justify-self-center lg:h-72"
          initial={{ opacity: 0, x: 40, rotateX: -10 }}
          animate={{
            opacity: 1,
            x: 0,
            rotateX: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 16,
            delay: 0.4,
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-black via-zinc-900 to-zinc-950 p-[1px] shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
            style={{ perspective: 1200 }}
            animate={{
              boxShadow: [
                "0 24px 80px rgba(0,0,0,0.5)",
                "0 24px 120px rgba(239,68,68,0.7)",
                "0 24px 80px rgba(0,0,0,0.5)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-[radial-gradient(circle_at_top,#ef4444_0,#020617_45%,#000_70%)]"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-red-500/40 blur-3xl"
                animate={{
                  x: [0, 40, -20, 0],
                  y: [0, -20, 30, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-12 right-0 h-44 w-44 rounded-full bg-white/15 blur-3xl"
                animate={{
                  x: [0, -30, 10, 0],
                  y: [0, 20, -25, 0],
                }}
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative flex h-full flex-col justify-between p-6 text-sm text-zinc-100">
                <div className="flex items-center justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                      Current Focus
                    </p>
                    <p className="text-sm font-semibold text-zinc-50">
                      Frontend &amp; Fullstack Experiences
                    </p>
                  </div>
                  <div className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-medium text-zinc-200">
                    Angular · .NET · SQL Server
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs text-zinc-300/90">
                    Internship @ IRPC Public Company Limited. Developed internal
                    web apps, CI/CD pipelines, and database solutions that help
                    real teams work more efficiently.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] text-zinc-200">
                    <span className="rounded-full bg-white/10 px-2 py-1">
                      Debugging &amp; Refactoring
                    </span>
                    <span className="rounded-full bg-white/5 px-2 py-1">
                      CI/CD · Jenkins
                    </span>
                    <span className="rounded-full bg-white/5 px-2 py-1">
                      Problem Solving
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}


