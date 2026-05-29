import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Base path for static assets. Matches next.config.ts `basePath` (e.g. `/portfolio` on GitHub Pages).
 * Do not infer from URL segments like `/projects` — that breaks image paths on app routes.
 */
export function getBasePath(): string {
  const configured = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (configured) {
    return configured;
  }

  if (typeof window === "undefined") {
    return "";
  }

  try {
    const hostname = window.location.hostname;

    if (!hostname.includes("github.io")) {
      return "";
    }

    const pathname = window.location.pathname;
    const pathSegments = pathname.split("/").filter(Boolean);

    if (pathSegments.length > 0) {
      const firstSegment = pathSegments[0];
      const reserved = ["index.html", "404.html", "_next", "404", "projects"];
      if (!reserved.includes(firstSegment) && !firstSegment.includes(".")) {
        return `/${firstSegment}`;
      }
    }

    if (typeof document !== "undefined") {
      const baseTag = document.querySelector("base");
      const baseHref = baseTag?.getAttribute("href") ?? "";
      if (baseHref && baseHref !== "/") {
        return baseHref.endsWith("/") ? baseHref.slice(0, -1) : baseHref;
      }
    }

    return "/portfolio";
  } catch (error) {
    console.warn("Error detecting basePath:", error);
    return "";
  }
}

/**
 * Resolve a public asset path with the deployment base path when needed.
 */
/**
 * Extract a YouTube video ID from youtu.be, watch, embed, or shorts URLs.
 */
export function getYouTubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.slice(1).split("/")[0];
      return id || null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }
      const segments = parsed.pathname.split("/").filter(Boolean);
      if (segments[0] === "embed" || segments[0] === "shorts") {
        return segments[1] ?? null;
      }
    }

    return null;
  } catch {
    return null;
  }
}

export function getImagePath(imagePath: string): string {
  const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  const base = getBasePath();

  if (!base) {
    return cleanPath;
  }

  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${normalizedBase}${cleanPath}`;
}
