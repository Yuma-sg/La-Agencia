"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

const WHATSAPP_NUMBER = "524491864565";

export default function Hero() {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t.hero.whatsappMessage);

  return (
    <section className="relative pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <span className="inline-flex items-center gap-2 bg-magenta-400 px-4 py-1.5 text-sm font-semibold text-slate-950">
          {t.hero.badge}
        </span>

        <h1 className="mt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {t.hero.titleLine1}{" "}
          <span className="link-highlight">{t.hero.titleHighlight}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          {t.hero.paragraph}
        </p>

        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent-400 px-8 py-4 text-base font-semibold text-slate-950 transition-colors hover:bg-magenta-400"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center bg-accent-400 px-6 py-4 text-base font-semibold text-slate-950 transition-colors hover:bg-magenta-400"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        <p className="mt-6 text-sm text-muted">{t.hero.footnote}</p>
      </div>
    </section>
  );
}
