"use client";

import { routing ,type Locale } from "@/i18n/routing";

type Props = {
  lang: Locale;
  onChange: (lang: Locale) => void;
};

export function LanguageSwitcher({ lang, onChange }: Props) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-1 text-[11px]">
      {routing.locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => onChange(code)}
          className={`px-2 py-0.5 rounded-full uppercase tracking-[0.16em] transition-all duration-200 ${
            lang === code
              ? "bg-amber-400 text-black"
              : "text-neutral-400 hover:text-amber-300"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
