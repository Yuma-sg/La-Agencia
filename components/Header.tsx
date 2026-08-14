"use client";

import Image from "next/image";
import IconInstagram from "@/components/IconInstagram";
import IconSun from "@/components/IconSun";
import IconMoon from "@/components/IconMoon";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useLanguage } from "@/components/providers/LanguageProvider";

const WHATSAPP_NUMBER = "524491864565";
const INSTAGRAM_URL = "https://www.instagram.com/laagenciaags/";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t.header.whatsappMessage);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center">
          <Image
            src={
              theme === "dark"
                ? "/logo-wordmark.png"
                : "/logo-wordmark-dark.png"
            }
            alt="La Agencia"
            width={190}
            height={85}
            className="h-9 w-auto"
            priority
          />
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={toggleLanguage}
            className="h-9 border border-foreground/15 px-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40"
            aria-label="Toggle language"
          >
            {language === "es" ? "EN" : "ES"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? t.header.themeLabel : t.header.themeLabelToDark
            }
            className="flex h-9 w-9 items-center justify-center border border-foreground/15 text-foreground transition-colors hover:border-foreground/40"
          >
            {theme === "dark" ? (
              <IconSun className="h-5 w-5" />
            ) : (
              <IconMoon className="h-5 w-5" />
            )}
          </button>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.header.instagramLabel}
            className="hidden text-foreground/80 transition-colors hover:text-magenta-400 sm:block"
          >
            <IconInstagram className="h-6 w-6" />
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center bg-magenta-400 px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-400"
          >
            {t.header.whatsapp}
          </a>
        </div>
      </div>
    </header>
  );
}
