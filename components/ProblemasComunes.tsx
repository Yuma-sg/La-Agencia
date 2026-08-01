const problemas = [
  {
    titulo: "Muchas visitas, pocas ventas",
    descripcion:
      "Tu tienda recibe tráfico pero la mayoría se va sin comprar. El problema no es la demanda, es la conversión.",
  },
  {
    titulo: "Checkout que espanta clientes",
    descripcion:
      "Pasos confusos, formularios largos y falta de confianza hacen que abandonen el carrito antes de pagar.",
  },
  {
    titulo: "Diseño que no genera confianza",
    descripcion:
      "Una tienda que se ve poco profesional o lenta le cuesta ventas a tu marca todos los días.",
  },
  {
    titulo: "Sin datos para decidir",
    descripcion:
      "Tomas decisiones a ciegas porque no sabes en qué punto exacto se está perdiendo a los clientes.",
  },
];

export default function ProblemasComunes() {
  return (
    <section className="bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Te suena familiar?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Estos son los problemas más comunes que frenan las ventas de
            tiendas en línea como la tuya.
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
