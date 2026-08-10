const servicios = [
  {
    icono: "✦",
    titulo: "Branding e Identidad Visual",
    descripcion:
      "Logotipo, paleta de colores, tipografía y manual de marca para que tu negocio se vea consistente y profesional en todos lados.",
  },
  {
    icono: "◆",
    titulo: "Diseño y Desarrollo Web",
    descripcion:
      "Sitios web y landing pages rápidas, claras y pensadas para convertir visitas en clientes, con tu marca al centro.",
  },
  {
    icono: "●",
    titulo: "Redes Sociales y Contenido",
    descripcion:
      "Gestión de tus redes y creación de contenido que conecta con tu audiencia y mantiene tu marca presente todo el mes.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Qué hacemos por tu negocio
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Todo lo que necesitas para verte y venderte mejor en línea, en un
            solo equipo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {servicios.map((servicio) => (
            <div
              key={servicio.titulo}
              className="card-hover rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:border-brand-400/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/15 text-2xl text-accent-400">
                {servicio.icono}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {servicio.titulo}
              </h3>
              <p className="mt-2 text-slate-400">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
