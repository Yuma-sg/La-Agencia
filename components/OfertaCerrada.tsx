const WHATSAPP_NUMBER = "524491864565";
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
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative border border-brand-400/40 bg-brand-950 p-8 text-center sm:p-14">
          <span className="inline-flex items-center bg-accent-400 px-4 py-1.5 text-sm font-semibold text-slate-950">
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
            className="mt-10 inline-flex translate-x-0 translate-y-0 items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-[5px_5px_0_0_rgba(255,255,255,0.15)] transition hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-brand-400 hover:shadow-[2px_2px_0_0_rgba(255,255,255,0.15)]"
          >
            Solicitar mi lugar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
