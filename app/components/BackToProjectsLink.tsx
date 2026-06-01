"use client";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";

export function BackToProjectsLink() {
  const { t } = useLanguage();

  return (
    <Link
      href="/#projects"
      className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-400 backdrop-blur-sm transition hover:border-zinc-600 hover:bg-zinc-800/80 hover:text-zinc-100"
    >
      <FiArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
      {t.projectDetail.backToProjects}
    </Link>
  );
}
