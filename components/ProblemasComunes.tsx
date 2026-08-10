const problemas = [
  {
    titulo: "Tu marca no se ve profesional",
    descripcion:
      "Logo hecho a la carrera, colores que cambian según el día y nada de consistencia entre tu local, tus redes y tu papelería.",
  },
  {
    titulo: "No tienes página web (o da pena)",
    descripcion:
      "Tus clientes te buscan en línea antes de visitarte y no encuentran nada, o encuentran algo que no representa tu negocio.",
  },
  {
    titulo: "Redes sociales abandonadas",
    descripcion:
      "Publicas cuando alcanzas, sin estrategia ni constancia, y tu negocio se va perdiendo entre la competencia.",
  },
  {
    titulo: "No sabes qué está funcionando",
    descripcion:
      "Inviertes tiempo y dinero en marketing sin saber qué te trae clientes de verdad y qué es solo ruido.",
  },
];

export default function ProblemasComunes() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Te suena familiar?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Estos son los problemas más comunes que frenan el crecimiento de
            negocios como el tuyo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {problemas.map((problema) => (
            <div
              key={problema.titulo}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700"
            >
              <h3 className="text-lg font-semibold text-white">
                {problema.titulo}
              </h3>
              <p className="mt-2 text-slate-400">{problema.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
