"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

/**
 * WebGL backdrop for the hero. Renders only on the client, pauses when the
 * hero scrolls off-screen, and degrades to a static scene when the user
 * prefers reduced motion.
 */
export function HeroCanvas() {
  const reducedMotion = useReducedMotion() ?? false;
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.01 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
    >
      {mounted && (
        <Canvas
          frameloop={visible ? "always" : "never"}
          camera={{ position: [0, 0, 9], fov: 50 }}
          dpr={[1, 1.8]}
          gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
          className="!absolute inset-0"
        >
          <Suspense fallback={null}>
            <HeroScene reducedMotion={reducedMotion} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
