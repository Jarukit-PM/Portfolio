"use client";

import { useLanguage } from "@/app/lib/i18n/LanguageProvider";
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="flex items-center justify-between gap-4 rounded-3xl border border-zinc-800/60 bg-zinc-950/80 px-4 py-3 sm:px-6">
      <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
        Jarukit Pan-Iam
      </div>
      <div className="flex items-center gap-3">
        <nav className="hidden gap-4 text-xs font-medium text-zinc-400 sm:flex">
          <a href="#about" className="hover:text-zinc-100 transition-colors">
            {t.nav.about}
          </a>
          <a href="#skills" className="hover:text-zinc-100 transition-colors">
            {t.nav.skills}
          </a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">
            {t.nav.experience}
          </a>
          <a href="#education" className="hover:text-zinc-100 transition-colors">
            {t.nav.education}
          </a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">
            {t.nav.contact}
          </a>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
