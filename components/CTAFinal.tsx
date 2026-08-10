const WHATSAPP_NUMBER = "5210000000000";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, quiero agendar una llamada para mejorar la marca de mi negocio."
);

export default function CTAFinal() {
  return (
    <section className="bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
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
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400 hover:shadow-brand-400/40"
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
