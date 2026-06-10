import type { Metadata } from "next";
import { AllProjectsView } from "@/app/components/AllProjectsView";
import { projects } from "@/app/lib/projects";

export const metadata: Metadata = {
  title: "All Projects · Portfolio",
  description: "A complete list of projects and work.",
};

export default function AllProjectsPage() {
  return (
    <div className="relative min-h-screen text-zinc-50">
      <AllProjectsView projects={projects} />
    </div>
  );
}
