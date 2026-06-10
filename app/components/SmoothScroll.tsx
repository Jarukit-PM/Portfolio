"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Site-wide inertial smooth scrolling via Lenis.
 * Disabled for users who prefer reduced motion and on coarse pointers,
 * where native momentum scrolling already feels right.
 */
export function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isTouchDevice) return;

    const lenis = new Lenis({
      lerp: 0.115,
      anchors: true,
    });

    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
