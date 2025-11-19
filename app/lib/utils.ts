import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the base path for GitHub Pages deployment
 * This should match the logic in next.config.ts
 * For static export, we detect it from the current URL at runtime
 */
export function getBasePath(): string {
  // Only run on client-side
  if (typeof window === "undefined") {
    return "";
  }
  
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;
  
  // For GitHub Pages (github.io domain)
  if (hostname.includes("github.io")) {
    // Extract repository name from pathname: /repository-name/...
    const pathSegments = pathname.split("/").filter(Boolean);
    
    // If pathname has segments and first one is not a page route, use it
    if (pathSegments.length > 0) {
      const firstSegment = pathSegments[0];
      const pageRoutes = ["index.html", "404.html", "_next", "404"];
      if (!pageRoutes.includes(firstSegment) && !firstSegment.includes(".")) {
        return `/${firstSegment}`;
      }
    }
    
    // If we're at root or index, try to detect from the HTML base tag or use common pattern
    // Check if we can find a base tag in the document
    const baseTag = document.querySelector("base");
    if (baseTag && baseTag.getAttribute("href")) {
      const baseHref = baseTag.getAttribute("href") || "";
      if (baseHref && baseHref !== "/") {
        return baseHref.endsWith("/") ? baseHref.slice(0, -1) : baseHref;
      }
    }
    
    // Last resort: check common repository names or use portfolio as default
    // This is a fallback - ideally the pathname should have the repo name
    return "/portfolio";
  }
  
  // For local development, check pathname
  const pathSegments = pathname.split("/").filter(Boolean);
  if (pathSegments.length > 0) {
    const firstSegment = pathSegments[0];
    if (firstSegment && firstSegment !== "index.html" && !firstSegment.startsWith("_") && !firstSegment.includes(".")) {
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
  // Only process on client-side
  if (typeof window === "undefined") {
    return imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  }
  
  const basePath = getBasePath();
  // Ensure imagePath starts with /
  const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  
  // If we have a basePath, prepend it
  if (basePath) {
    // Remove trailing slash from basePath if present, and ensure cleanPath doesn't have leading issues
    const normalizedBasePath = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
    return `${normalizedBasePath}${cleanPath}`;
  }
  
  return cleanPath;
}

