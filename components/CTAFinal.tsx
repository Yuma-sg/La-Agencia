"use client";

import IconInstagram from "@/components/IconInstagram";
import { useLanguage } from "@/components/providers/LanguageProvider";

const WHATSAPP_NUMBER = "524491864565";
const INSTAGRAM_URL = "https://www.instagram.com/laagenciaags/";

export default function CTAFinal() {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t.ctaFinal.whatsappMessage);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="link-highlight text-3xl font-bold tracking-tight sm:text-4xl">
          {t.ctaFinal.heading}
        </h2>
        <p className="mt-4 text-lg text-muted">{t.ctaFinal.paragraph}</p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center bg-accent-400 px-8 py-4 text-base font-semibold text-slate-950 transition-colors hover:bg-magenta-400"
        >
          {t.ctaFinal.cta}
        </a>

        <footer className="mt-16 flex flex-col items-center gap-4 border-t border-foreground/10 pt-8 text-sm text-muted">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-magenta-400"
          >
            <IconInstagram className="h-5 w-5" />
            {t.ctaFinal.instagramHandle}
          </a>
          <p>{t.ctaFinal.copyright(new Date().getFullYear())}</p>
        </footer>
      </div>
    </section>
  );
}
