"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Solucion() {
  const { t } = useLanguage();

  return (
    <section
      id="solucion"
      className="border-y border-foreground/10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="link-highlight text-3xl font-bold tracking-tight sm:text-4xl">
            {t.solucion.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{t.solucion.subheading}</p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.solucion.steps.map((paso) => (
            <div key={paso.numero} className="relative">
              <span className="text-4xl font-bold text-accent-400/60">
                {paso.numero}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {paso.titulo}
              </h3>
              <p className="mt-2 text-muted">{paso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
