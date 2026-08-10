const WHATSAPP_NUMBER = "5210000000000";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, quiero aprovechar el diagnóstico gratuito + plan de marca."
);

const incluye = [
  "Diagnóstico completo de tu marca y presencia digital",
  "Revisión de tu web, redes sociales y competencia",
  "Plan de branding y marketing con prioridades claras",
  "Sesión de revisión de resultados en vivo",
];

export default function OfertaCerrada() {
  return (
    <section className="bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-brand-400/30 bg-gradient-to-b from-brand-950 to-slate-900 p-8 text-center sm:p-14">
          <span className="inline-flex items-center rounded-full bg-accent-400 px-4 py-1.5 text-sm font-semibold text-slate-950">
            Cupo limitado este mes
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Diagnóstico gratuito + plan de marca
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            Antes de invertir en nosotros, te mostramos exactamente qué le
            falta a tu marca y cómo lo resolveríamos. Sin costo, sin
            compromiso.
          </p>

          <ul className="mx-auto mt-8 grid max-w-md gap-3 text-left">
            {incluye.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-200">
                <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-400/20 text-accent-400">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400 hover:shadow-brand-400/40"
          >
            Solicitar mi lugar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
