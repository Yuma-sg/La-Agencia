"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Servicios() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="link-highlight text-3xl font-bold tracking-tight sm:text-4xl">
            {t.servicios.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{t.servicios.subheading}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {t.servicios.items.map((servicio) => (
            <div
              key={servicio.titulo}
              className="card-hover rounded-2xl border border-foreground/10 bg-surface/50 p-8 shadow-xl shadow-black/40 hover:border-brand-400/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/15 text-2xl text-accent-400">
                {servicio.icono}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {servicio.titulo}
              </h3>
              <p className="mt-2 text-muted">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
