import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import BackgroundLines from "@/components/BackgroundLines";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import "./globals.css";

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (e) {}
})();
`;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://laagencia.com.mx";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "La Agencia | Marketing y Diseño para tu Negocio",
  description:
    "Branding, diseño web y redes sociales para negocios locales. Diagnóstico gratuito y una marca que se ve profesional, se recuerda y vende.",
  keywords: [
    "agencia de marketing digital",
    "agencia de diseño",
    "branding e identidad visual",
    "diseño web para negocios",
    "manejo de redes sociales",
    "agencia digital México",
  ],
  authors: [{ name: "La Agencia" }],
  openGraph: {
    title: "La Agencia | Marketing y Diseño para tu Negocio",
    description:
      "Branding, diseño web y redes sociales para negocios locales que quieren verse profesionales y vender más.",
    url: siteUrl,
    siteName: "La Agencia",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Agencia | Marketing y Diseño para tu Negocio",
    description:
      "Branding, diseño web y redes sociales para negocios locales que quieren verse profesionales y vender más.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`dark scroll-smooth ${poppins.variable}`}
    >
      <body className="bg-background font-sans text-foreground antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <LanguageProvider>
            <BackgroundLines />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
