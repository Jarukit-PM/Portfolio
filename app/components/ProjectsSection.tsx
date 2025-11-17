"use client";

import { motion, type Variants } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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

  // Duplicate projects for infinite scroll
  const duplicatedProjects = [...list, ...list, ...list];
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
    if (!container) return;
    
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScrollButtons();
    container.addEventListener("scroll", checkScrollButtons);
    // Also check on resize to handle window size changes
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
    if (!scrollContainer || isHovered) return;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 0.5; // Adjust speed here (lower = slower)
        
        // Reset to start when reaching the end (after first duplicate set)
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20); // Adjust interval for smoothness
    return () => clearInterval(interval);
  }, [isHovered]);

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

      <div className="relative">
        {/* Left gradient fade and arrow */}
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

        {/* Right gradient fade and arrow */}
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
              className="flex-shrink-0 w-80 sm:w-96"
              style={{ scrollSnapAlign: "start" }}
            >
              <Link
                href={project.github}
                target="_blank"
                className="block h-full"
              >
                <motion.article
                  className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800/70 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 transition-transform hover:scale-[1.02]"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 90,
                    damping: 16,
                  }}
                  whileHover={{ y: -6 }}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-red-500/60 to-transparent opacity-60" />

                  <div className="flex h-full flex-col">
                    <div className="relative h-56 w-full overflow-hidden sm:h-64">
                      <Image
                        src={project.image || "/github-cover.svg"}
                        alt={project.title}
                        fill
                        className="object-cover object-[10%_10%] transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    </div>

                    <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
                          {project.title}
                        </h3>
                        <p className="text-xs text-zinc-300 sm:text-sm line-clamp-2">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


