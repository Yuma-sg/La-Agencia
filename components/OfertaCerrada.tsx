"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

const WHATSAPP_NUMBER = "524491864565";

export default function OfertaCerrada() {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t.oferta.whatsappMessage);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="card-hover relative rounded-2xl border border-foreground/10 bg-surface/50 p-8 text-center shadow-2xl shadow-black/50 hover:border-brand-400/40 sm:p-14">
          <span className="inline-flex items-center bg-accent-400 px-4 py-1.5 text-sm font-semibold text-slate-950">
            {t.oferta.badge}
          </span>

          <h2 className="link-highlight mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {t.oferta.heading}
          </h2>

          <p className="mt-4 text-lg text-muted">{t.oferta.paragraph}</p>

          <ul className="mx-auto mt-8 grid max-w-md gap-3 text-left">
            {t.oferta.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-foreground"
              >
                <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-400/20 text-accent-400">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center bg-accent-400 px-8 py-4 text-base font-semibold text-slate-950 transition-colors hover:bg-magenta-400"
          >
            {t.oferta.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
