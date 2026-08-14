"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Language, type Translations } from "@/lib/translations";

const LanguageContext = createContext<{
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    const initial: Language = stored === "en" ? "en" : "es";
    setLanguageState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLanguage = (value: Language) => {
    setLanguageState(value);
    document.documentElement.lang = value;
    window.localStorage.setItem("lang", value);
  };

  const toggleLanguage = () => setLanguage(language === "es" ? "en" : "es");

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
