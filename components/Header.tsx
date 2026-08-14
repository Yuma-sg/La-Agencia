import Image from "next/image";
import IconInstagram from "@/components/IconInstagram";

const WHATSAPP_NUMBER = "524491864565";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, quiero un diagnóstico gratuito para mi negocio."
);
const INSTAGRAM_URL = "https://www.instagram.com/laagenciaags/";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center">
          <Image
            src="/logo-wordmark.png"
            alt="La Agencia"
            width={190}
            height={85}
            className="h-9 w-auto"
            priority
          />
        </a>

        <div className="flex items-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de La Agencia"
            className="text-slate-300 transition-colors hover:text-magenta-400"
          >
            <IconInstagram className="h-6 w-6" />
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center bg-magenta-400 px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-400"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
