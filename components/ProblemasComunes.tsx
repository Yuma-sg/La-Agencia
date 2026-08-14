"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ProblemasComunes() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="link-highlight text-3xl font-bold tracking-tight sm:text-4xl">
            {t.problemas.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{t.problemas.subheading}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.problemas.items.map((problema) => (
            <div
              key={problema.titulo}
              className="card-hover rounded-2xl border border-foreground/10 bg-surface/50 p-6 shadow-xl shadow-black/40 hover:border-magenta-400/40"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {problema.titulo}
              </h3>
              <p className="mt-2 text-muted">{problema.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
