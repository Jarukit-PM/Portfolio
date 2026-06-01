"use client";

import { FiGlobe } from "react-icons/fi";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";
import { LANGUAGES } from "@/app/lib/i18n/translations";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-zinc-800/80 bg-zinc-900/80 p-0.5 text-xs font-medium text-zinc-400 ${className}`}
      role="group"
      aria-label={t.nav.languageLabel}
    >
      <FiGlobe className="ml-1.5 h-3.5 w-3.5 text-zinc-500" aria-hidden />
      {LANGUAGES.map(({ code, label }) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              isActive
                ? "bg-red-500/90 text-zinc-50 shadow-[0_0_12px_rgba(239,68,68,0.5)]"
                : "text-zinc-400 hover:text-zinc-100"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
