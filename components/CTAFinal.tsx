import IconInstagram from "@/components/IconInstagram";

const WHATSAPP_NUMBER = "524491864565";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, quiero agendar una llamada para mejorar la marca de mi negocio."
);
const INSTAGRAM_URL = "https://www.instagram.com/laagenciaags/";

export default function CTAFinal() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="link-highlight text-3xl font-bold tracking-tight sm:text-4xl">
          Construyamos tu marca hoy mismo
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Escríbenos por WhatsApp y en menos de 24 horas te contactamos para
          agendar tu diagnóstico gratuito.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center bg-accent-400 px-8 py-4 text-base font-semibold text-slate-950 transition-colors hover:bg-magenta-400"
        >
          Hablar con La Agencia por WhatsApp
        </a>

        <footer className="mt-16 flex flex-col items-center gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-magenta-400"
          >
            <IconInstagram className="h-5 w-5" />
            @laagenciaags
          </a>
          <p>
            © {new Date().getFullYear()} La Agencia. Todos los derechos
            reservados.
          </p>
        </footer>
      </div>
    </section>
  );
}
