import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://laagencia.com.mx";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "La Agencia | Optimización de E-commerce que Vende Más",
  description:
    "Ayudamos a marcas a vender más en línea con estrategia, diseño y optimización de e-commerce. Auditoría gratuita y resultados medibles en semanas.",
  keywords: [
    "agencia de marketing digital",
    "optimización de e-commerce",
    "diseño web para tiendas en línea",
    "CRO ecommerce",
    "agencia digital México",
  ],
  authors: [{ name: "La Agencia" }],
  openGraph: {
    title: "La Agencia | Optimización de E-commerce que Vende Más",
    description:
      "Estrategia, diseño y optimización de e-commerce para marcas que quieren vender más en línea.",
    url: siteUrl,
    siteName: "La Agencia",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Agencia | Optimización de E-commerce que Vende Más",
    description:
      "Estrategia, diseño y optimización de e-commerce para marcas que quieren vender más en línea.",
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
    <html lang="es" className={`scroll-smooth ${poppins.variable}`}>
      <body className="bg-slate-950 font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
