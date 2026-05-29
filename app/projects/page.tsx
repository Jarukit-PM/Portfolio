import type { Metadata } from "next";
import Link from "next/link";
import { AllProjectsGrid } from "@/app/components/AllProjectsGrid";
import { projects } from "@/app/lib/projects";

export const metadata: Metadata = {
  title: "All Projects · Portfolio",
  description: "A complete list of projects and work.",
};

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex w-fit items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
        >
          ← Back to home
        </Link>

        <header className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            All Projects
          </h1>
          <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
            Every project in one place — built to scale as the list grows.
          </p>
        </header>

        <AllProjectsGrid projects={projects} />
      </main>
    </div>
  );
}
