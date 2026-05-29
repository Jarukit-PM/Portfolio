"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import {
  FiAlertTriangle,
  FiArrowUpRight,
  FiBriefcase,
  FiExternalLink,
  FiGithub,
  FiMap,
  FiMonitor,
  FiPlay,
  FiServer,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";
import type {
  HighlightIconKey,
  Project,
  ProjectDetailContent,
  ProjectHighlight,
} from "@/app/lib/projects";
import { isStructuredHighlight } from "@/app/lib/projects";
import { tagColors, tagIcons } from "@/app/lib/project-tags";
import { ProjectStars } from "@/app/components/ProjectStars";
import { getImagePath, getYouTubeVideoId } from "@/app/lib/utils";

type ProjectDetailProps = {
  project: Project;
  detail: ProjectDetailContent;
};

/** Content stays readable if scroll/viewport reveal never runs. */
const fadeUp: Variants = {
  hidden: { opacity: 1, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const staggerChild: Variants = {
  hidden: { opacity: 1, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

function SectionHeading({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <div className="flex items-center gap-3" id={id}>
      <span className="h-px w-8 shrink-0 bg-linear-to-r from-red-500/80 to-transparent" />
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300 sm:text-sm">
        {children}
      </h2>
    </div>
  );
}

function ExternalLinkButton({
  href,
  label,
  description,
  icon,
  variant = "default",
}: {
  href: string;
  label: string;
  description?: string;
  icon: ReactNode;
  variant?: "default" | "accent";
}) {
  const isExternal = href.startsWith("http");
  const isAccent = variant === "accent";

  return (
    <a
      href={href}
      target="_blank"
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group relative flex min-w-[min(100%,14rem)] flex-1 items-center gap-3 overflow-hidden rounded-2xl border px-4 py-3.5 transition sm:min-w-[12rem] ${
        isAccent
          ? "border-red-500/40 bg-linear-to-br from-red-500/15 via-zinc-900/80 to-zinc-950 hover:border-red-400/60 hover:from-red-500/25"
          : "border-zinc-800/80 bg-zinc-900/50 hover:border-zinc-600 hover:bg-zinc-800/60"
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
          isAccent
            ? "border-red-500/30 bg-red-500/10 text-red-200"
            : "border-zinc-700/80 bg-zinc-800/80 text-zinc-200"
        }`}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span
          className={`block text-sm font-medium ${isAccent ? "text-red-100" : "text-zinc-100"}`}
        >
          {label}
        </span>
        {description && (
          <span className="mt-0.5 block truncate text-xs text-zinc-500 group-hover:text-zinc-400">
            {description}
          </span>
        )}
      </span>
      <FiArrowUpRight
        className={`h-4 w-4 shrink-0 opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 ${
          isAccent ? "text-red-300" : "text-zinc-400"
        }`}
        aria-hidden
      />
    </a>
  );
}

function AnimatedSection({
  children,
  className = "",
  reduceMotion,
}: {
  children: ReactNode;
  className?: string;
  reduceMotion: boolean | null;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [revealedOnMount, setRevealedOnMount] = useState(false);

  useLayoutEffect(() => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const { top, bottom } = el.getBoundingClientRect();
    if (top < window.innerHeight && bottom > 0) {
      setRevealedOnMount(true);
    }
  }, [reduceMotion]);

  const isRevealed = isInView || revealedOnMount;

  if (reduceMotion) {
    return (
      <section ref={ref} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={isRevealed ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
}

function parseHighlight(text: string): { title?: string; body: string } {
  const colonIndex = text.indexOf(": ");
  if (colonIndex > 0 && colonIndex <= 72) {
    return {
      title: text.slice(0, colonIndex),
      body: text.slice(colonIndex + 2),
    };
  }
  return { body: text };
}

const featureCardClassName =
  "group relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-linear-to-br from-zinc-900/80 via-zinc-950/90 to-black/40 p-5 sm:p-6";

const featureCardInteractiveClassName =
  "transition duration-300 hover:border-red-500/30 hover:shadow-[0_12px_40px_-16px_rgba(239,68,68,0.22)] hover:-translate-y-0.5";

const highlightIcons: Record<HighlightIconKey, ReactNode> = {
  mobile: <FiSmartphone className="h-5 w-5" aria-hidden />,
  web: <FiMonitor className="h-5 w-5" aria-hidden />,
  api: <FiServer className="h-5 w-5" aria-hidden />,
  workflow: <FiMap className="h-5 w-5" aria-hidden />,
  management: <FiBriefcase className="h-5 w-5" aria-hidden />,
  launch: <FiZap className="h-5 w-5" aria-hidden />,
};

function highlightKey(item: ProjectHighlight, index: number): string {
  return isStructuredHighlight(item) ? item.title : `${item}-${index}`;
}

function FeatureHighlightCard({
  item,
  index,
}: {
  item: ProjectHighlight;
  index: number;
}) {
  const structured = isStructuredHighlight(item);

  return (
    <>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-0.5 bg-linear-to-b from-red-500/70 via-red-500/25 to-transparent"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-red-500/35 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex gap-4 sm:gap-5">
        <span
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-0.5 rounded-xl border border-red-500/35 bg-red-500/15 text-red-200 shadow-[0_0_20px_-6px_rgba(239,68,68,0.45)] sm:h-11 sm:w-11"
          aria-hidden
        >
          {structured && item.icon ? (
            highlightIcons[item.icon]
          ) : (
            <span className="text-sm font-bold tabular-nums tracking-tight sm:text-base">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </span>
        <div className="min-w-0 flex-1 space-y-2.5 pt-0.5">
          {structured ? (
            <>
              <div className="space-y-1">
                <p className="text-base font-semibold leading-snug text-zinc-50">
                  {item.title}
                </p>
                {item.subtitle ? (
                  <p className="text-xs font-medium uppercase tracking-wide text-red-300/90">
                    {item.subtitle}
                  </p>
                ) : null}
              </div>
              <ul className="space-y-2 pl-0.5">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2.5 text-sm leading-relaxed text-zinc-200 sm:text-[0.9375rem] sm:leading-6"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/90"
                      aria-hidden
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            (() => {
              const { title, body } = parseHighlight(item);
              return (
                <>
                  {title ? (
                    <p className="text-base font-semibold leading-snug text-zinc-50">
                      {title}
                    </p>
                  ) : null}
                  <p
                    className={`text-sm leading-relaxed text-zinc-200 sm:text-[0.9375rem] sm:leading-6 ${
                      title ? "" : "font-medium"
                    }`}
                  >
                    {body}
                  </p>
                </>
              );
            })()
          )}
        </div>
      </div>
    </>
  );
}

export function ProjectDetail({ project, detail }: ProjectDetailProps) {
  const reduceMotion = useReducedMotion();
  const imageSrc = project.image
    ? getImagePath(project.image)
    : getImagePath("/github-cover.svg");

  const liveUrl =
    project.link && project.link !== project.github ? project.link : undefined;
  const youtubeVideoId = project.demo
    ? getYouTubeVideoId(project.demo)
    : null;

  const heroMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { type: "spring" as const, stiffness: 70, damping: 18 },
      };

  const HeroWrapper = reduceMotion ? "header" : motion.header;

  return (
    <article className="space-y-12 sm:space-y-14">
      <HeroWrapper className="space-y-0" {...heroMotion}>
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-zinc-800/70 bg-linear-to-br from-zinc-900 via-zinc-950 to-black shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)] sm:aspect-video">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-red-500/70 to-transparent" />
          <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-zinc-950/50 via-transparent to-transparent" />

          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />

          <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-8">
            <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
              <h1 className="text-2xl font-semibold tracking-tight text-zinc-50 drop-shadow-sm sm:text-3xl lg:text-4xl">
                {project.title}
              </h1>
              <ProjectStars
                stars={project.stars}
                className="mb-1 text-sm sm:text-base"
              />
            </div>
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:mt-6 sm:text-base sm:leading-7">
          {project.description}
        </p>
      </HeroWrapper>

      {detail.disclaimer && (
        <AnimatedSection reduceMotion={reduceMotion}>
          <aside
            role="note"
            className="relative overflow-hidden rounded-2xl border border-amber-500/35 bg-linear-to-br from-amber-500/10 via-amber-950/20 to-zinc-950/80 px-5 py-4 sm:px-6 sm:py-5"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-400/50 to-transparent" />
            <div className="flex gap-3 sm:gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-300">
                <FiAlertTriangle className="h-4 w-4" aria-hidden />
              </span>
              <div className="min-w-0 space-y-1">
                <p className="text-sm font-semibold text-amber-200">
                  Educational use only
                </p>
                <p className="text-sm leading-relaxed text-amber-100/85">
                  {detail.disclaimer}
                </p>
              </div>
            </div>
          </aside>
        </AnimatedSection>
      )}

      <AnimatedSection className="space-y-4" reduceMotion={reduceMotion}>
        <SectionHeading id="overview">Overview</SectionHeading>
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-200 sm:text-base sm:leading-7">
          {detail.overview}
        </p>
      </AnimatedSection>

      <AnimatedSection className="space-y-5" reduceMotion={reduceMotion}>
        <SectionHeading id="features">Key features</SectionHeading>
        {reduceMotion ? (
          <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {detail.highlights.map((item, index) => (
              <li key={highlightKey(item, index)} className={featureCardClassName}>
                <FeatureHighlightCard item={item} index={index} />
              </li>
            ))}
          </ul>
        ) : (
          <motion.ul
            className="grid gap-5 sm:grid-cols-2 sm:gap-6"
            variants={staggerContainer}
          >
            {detail.highlights.map((item, index) => (
              <motion.li
                key={highlightKey(item, index)}
                variants={staggerChild}
                className={`${featureCardClassName} ${featureCardInteractiveClassName}`}
              >
                <FeatureHighlightCard item={item} index={index} />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatedSection>

      {detail.role && (
        <AnimatedSection className="space-y-4" reduceMotion={reduceMotion}>
          <SectionHeading id="role">My role</SectionHeading>
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800/70 border-l-2 border-l-red-500/50 bg-zinc-900/40 px-5 py-4 sm:px-6 sm:py-5">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-red-500/40 via-transparent to-transparent" />
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-200 sm:text-base sm:leading-7">
              {detail.role}
            </p>
          </div>
        </AnimatedSection>
      )}

      {project.tags && project.tags.length > 0 && (
        <AnimatedSection className="space-y-5" reduceMotion={reduceMotion}>
          <SectionHeading id="stack">Tech stack</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-800/80 sm:text-sm"
              >
                {tagIcons[tag] && (
                  <span
                    className={`text-sm ${tagColors[tag] ?? "text-zinc-300"}`}
                  >
                    {tagIcons[tag]}
                  </span>
                )}
                {tag}
              </span>
            ))}
          </div>
        </AnimatedSection>
      )}

      {youtubeVideoId && (
        <AnimatedSection className="space-y-5" reduceMotion={reduceMotion}>
          <SectionHeading id="demo">Demo</SectionHeading>
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-900 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.7)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-red-500/60 to-transparent" />
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title={`${project.title} demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection
        className="space-y-5 rounded-3xl border border-zinc-800/60 bg-linear-to-br from-zinc-900/50 via-zinc-950/80 to-black/40 p-6 sm:p-8"
        reduceMotion={reduceMotion}
      >
        <SectionHeading id="links">Links</SectionHeading>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {project.github && (
            <ExternalLinkButton
              href={project.github}
              label="View on GitHub"
              description="Source & docs"
              icon={<FiGithub className="h-5 w-5" />}
            />
          )}
          {liveUrl && (
            <ExternalLinkButton
              href={liveUrl}
              label="Live site"
              description="Open deployment"
              icon={<FiExternalLink className="h-5 w-5" />}
              variant="accent"
            />
          )}
          {project.demo && (
            <ExternalLinkButton
              href={project.demo}
              label={youtubeVideoId ? "Open on YouTube" : "Watch demo"}
              description={
                youtubeVideoId ? "Embedded above" : "External demo"
              }
              icon={<FiPlay className="h-5 w-5" />}
              variant="accent"
            />
          )}
        </div>
      </AnimatedSection>
    </article>
  );
}

export function ProjectDetailPlaceholder({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const imageSrc = project.image
    ? getImagePath(project.image)
    : getImagePath("/github-cover.svg");

  const heroMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { type: "spring" as const, stiffness: 80, damping: 18 },
      };

  const Wrapper = reduceMotion ? "article" : motion.article;

  return (
    <Wrapper className="space-y-8" {...heroMotion}>
      <header className="space-y-5">
        <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-dashed border-zinc-700/80 bg-zinc-900/50">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-red-500/40 to-transparent" />
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover object-center opacity-60"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-zinc-950/50" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                {project.title}
              </h1>
              <ProjectStars stars={project.stars} className="text-sm" />
            </div>
          </div>
        </div>
        <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
          {project.description}
        </p>
      </header>
      <p className="rounded-2xl border border-dashed border-zinc-700/80 bg-zinc-900/30 px-5 py-10 text-center text-sm text-zinc-500">
        Full case study coming soon.
      </p>
    </Wrapper>
  );
}
