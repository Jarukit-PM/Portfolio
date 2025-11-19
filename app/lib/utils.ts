import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the base path for GitHub Pages deployment
 * This should match the logic in next.config.ts
 * For static export, we detect it from the current pathname at runtime
 */
export function getBasePath(): string {
  // Only run on client-side
  if (typeof window === "undefined") {
    return "";
  }
  
  // Client-side: detect from current pathname
  const pathname = window.location.pathname;
  
  // For GitHub Pages, the pathname will be like /repository-name/...
  // Extract the first segment if it exists and is not empty
  const pathSegments = pathname.split("/").filter(Boolean);
  
  // If we're on github.io and have a path segment, use it as basePath
  if (window.location.hostname.includes("github.io") && pathSegments.length > 0) {
    // Check if the first segment looks like a repository name (not a page route)
    const firstSegment = pathSegments[0];
    // Common page routes to exclude
    const pageRoutes = ["index.html", "404.html", "_next"];
    if (!pageRoutes.includes(firstSegment)) {
      return `/${firstSegment}`;
    }
  }
  
  // Fallback: check if we're in a subdirectory (for local development with basePath)
  // This handles the case where basePath is set in next.config.ts
  if (pathSegments.length > 0) {
    const firstSegment = pathSegments[0];
    // If the first segment matches common repo name patterns, use it
    if (firstSegment && firstSegment !== "index.html") {
      return `/${firstSegment}`;
    }
  }
  
  return "";
}

/**
 * Get image path with basePath prepended if needed
 * @param imagePath - Path to image (e.g., "/images/logo.png")
 * @returns Full path with basePath if needed
 */
export function getImagePath(imagePath: string): string {
  const basePath = getBasePath();
  // Ensure imagePath starts with /
  const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  // Combine basePath and imagePath, avoiding double slashes
  return basePath ? `${basePath}${cleanPath}` : cleanPath;
}

