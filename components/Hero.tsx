const WHATSAPP_NUMBER = "5210000000000";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, quiero una auditoría gratuita para mi tienda en línea."
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-200">
          Especialistas en optimización de e-commerce
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Tu tienda en línea puede vender{" "}
          <span className="bg-gradient-to-r from-brand-400 to-brand-200 bg-clip-text text-transparent">
            mucho más
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          Convertimos visitantes en clientes con estrategia, diseño y
          optimización de e-commerce. Sin promesas vacías: solo cambios
          medibles en tu tasa de conversión.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400 hover:shadow-brand-400/40"
          >
            Quiero mi auditoría gratuita
          </a>
          <a
            href="#solucion"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-8 py-4 text-base font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
          >
            Ver cómo funciona
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Sin compromiso · Respuesta en menos de 24 horas
        </p>
      </div>
    </section>
  );
}
