const WHATSAPP_NUMBER = "524491864565";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, quiero un diagnóstico gratuito para mi negocio."
);

export default function Hero() {
  return (
    <section className="relative pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <span className="inline-flex items-center gap-2 bg-magenta-400 px-4 py-1.5 text-sm font-semibold text-slate-950">
          Marketing y diseño para negocios locales
        </span>

        <h1 className="mt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
          Dale a tu negocio la imagen{" "}
          <span className="link-highlight">que se merece</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          Branding, diseño web y redes sociales para que tu negocio se vea
          profesional, se recuerde y venda. Todo en un solo lugar, sin
          complicaciones.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent-400 px-8 py-4 text-base font-semibold text-slate-950 transition-colors hover:bg-magenta-400"
          >
            Quiero mi diagnóstico gratuito
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center bg-accent-400 px-6 py-4 text-base font-semibold text-slate-950 transition-colors hover:bg-magenta-400"
          >
            Ver servicios
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Sin compromiso · Respuesta en menos de 24 horas
        </p>
      </div>
    </section>
  );
}
