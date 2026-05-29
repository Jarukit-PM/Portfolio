"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import { ProjectCard } from "@/app/components/ProjectCard";
import { getFeaturedProjects, projects } from "@/app/lib/projects";

export function ProjectsSection() {
  const list = getFeaturedProjects();
  const totalCount = projects.length;

  const duplicatedProjects =
    list.length > 1 ? [...list, ...list, ...list] : list;
  const scrollRef = useRef<HTMLDivElement>(null);
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const pauseAutoScroll = useCallback(() => {
    setIsHovered(true);
    if (pauseTimeout.current) {
      clearTimeout(pauseTimeout.current);
    }
    pauseTimeout.current = setTimeout(() => {
      setIsHovered(false);
    }, 2500);
  }, []);

  const handleArrowClick = useCallback(
    (direction: "left" | "right") => {
      const container = scrollRef.current;
      if (!container) return;

      pauseAutoScroll();

      const scrollAmount = container.clientWidth * 0.85;
      const nextPosition =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: nextPosition,
        behavior: "smooth",
      });
    },
    [pauseAutoScroll]
  );

  const checkScrollButtons = useCallback(() => {
    const container = scrollRef.current;
    if (!container || list.length <= 1) {
      setShowLeftArrow(false);
      setShowRightArrow(false);
      return;
    }

    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  }, [list.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScrollButtons();
    container.addEventListener("scroll", checkScrollButtons);
    const handleResize = () => checkScrollButtons();
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("scroll", checkScrollButtons);
      window.removeEventListener("resize", handleResize);
      if (pauseTimeout.current) {
        clearTimeout(pauseTimeout.current);
      }
    };
  }, [checkScrollButtons]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isHovered || list.length <= 1) return;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 0.5;

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isHovered, list.length]);

  return (
    <section
      id="projects"
      className="space-y-6 rounded-3xl border border-zinc-800/60 bg-zinc-950/70 p-6 sm:p-8 lg:p-10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
            Projects
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            Selected work that highlights how I build and ship real products.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-red-500/60 hover:bg-red-500/10 hover:text-red-200"
        >
          View all projects
          <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
            {totalCount}
          </span>
          <FiArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-zinc-950/70 via-zinc-950/40 to-transparent" />
        {showLeftArrow && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            aria-label="Scroll projects left"
            onClick={() => handleArrowClick("left")}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 focus:outline-none"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-900/80 backdrop-blur-sm transition hover:border-red-500 hover:text-red-300">
              <FiChevronLeft className="h-5 w-5 text-zinc-300" />
            </div>
          </motion.button>
        )}

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-zinc-950/70 via-zinc-950/40 to-transparent" />
        {showRightArrow && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            aria-label="Scroll projects right"
            onClick={() => handleArrowClick("right")}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 focus:outline-none"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-900/80 backdrop-blur-sm transition hover:border-red-500 hover:text-red-300">
              <FiChevronRight className="h-5 w-5 text-zinc-300" />
            </div>
          </motion.button>
        )}

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onScroll={checkScrollButtons}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="w-80 shrink-0 sm:w-96"
              style={{ scrollSnapAlign: "start" }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
