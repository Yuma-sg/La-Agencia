"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function PruebaSocial() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-foreground/10 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="link-highlight text-3xl font-bold tracking-tight sm:text-4xl">
            {t.prueba.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{t.prueba.subheading}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {t.prueba.metrics.map((metrica) => (
            <div
              key={metrica.etiqueta}
              className="card-hover rounded-2xl border border-foreground/10 bg-surface/60 p-8 text-center shadow-xl shadow-black/40 hover:border-accent-400/40"
            >
              <p className="text-4xl font-bold text-brand-400">
                {metrica.valor}
              </p>
              <p className="mt-2 text-muted">{metrica.etiqueta}</p>
            </div>
          ))}
        </div>

        <blockquote className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-xl font-medium text-foreground sm:text-2xl">
            {t.prueba.quote}
          </p>
          <footer className="mt-6 text-muted">
            <span className="font-semibold text-foreground">
              {t.prueba.name}
            </span>{" "}
            — {t.prueba.role}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
