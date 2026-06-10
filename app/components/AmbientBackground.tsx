"use client";

/**
 * Fixed, site-wide atmospheric backdrop: drifting aurora blobs in the
 * portfolio's red accent palette, a faint perspective grid, and film grain.
 * Pure CSS animation — no canvas, no per-frame JS.
 */
export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-zinc-950"
      aria-hidden
    >
      {/* aurora blobs */}
      <div className="ambient-blob absolute -top-[20%] left-[8%] h-[55vmax] w-[55vmax] rounded-full bg-red-600/[0.07] blur-[120px]" />
      <div className="ambient-blob-slow absolute top-[35%] right-[-15%] h-[45vmax] w-[45vmax] rounded-full bg-red-400/[0.05] blur-[110px]" />
      <div className="ambient-blob-reverse absolute bottom-[-25%] left-[30%] h-[50vmax] w-[50vmax] rounded-full bg-zinc-100/[0.035] blur-[130px]" />

      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(244,244,245,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,244,245,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      {/* film grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px 160px",
        }}
      />

      {/* vignette to keep content legible */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(9,9,11,0.5)_100%)]" />
    </div>
  );
}
