import Image from "next/image";

const WHATSAPP_NUMBER = "5210000000000";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, quiero una auditoría gratuita para mi tienda en línea."
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="La Agencia"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-white">
            La Agencia
          </span>
        </a>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-accent-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-accent-300"
        >
          Hablar por WhatsApp
        </a>
      </div>
    </header>
  );
}
