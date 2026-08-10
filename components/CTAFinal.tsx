const WHATSAPP_NUMBER = "524491864565";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, quiero agendar una llamada para mejorar la marca de mi negocio."
);

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
          className="link-highlight mt-10 px-1 py-0.5 text-base font-semibold"
        >
          Hablar con La Agencia por WhatsApp
        </a>

        <footer className="mt-16 border-t border-slate-800 pt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} La Agencia. Todos los derechos
          reservados.
        </footer>
      </div>
    </section>
  );
}
