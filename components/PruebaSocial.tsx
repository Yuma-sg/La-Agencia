const metricas = [
  { valor: "+180%", etiqueta: "en seguidores en redes" },
  { valor: "3x", etiqueta: "más clientes nuevos al mes" },
  { valor: "30 días", etiqueta: "de marca a sitio web listo" },
];

export default function PruebaSocial() {
  return (
    <section className="border-y border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Resultados reales
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Así ayudamos a un negocio local a construir su marca desde cero
            en 8 semanas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {metricas.map((metrica) => (
            <div
              key={metrica.etiqueta}
              className="card-hover rounded-2xl border border-slate-800 bg-slate-950/60 p-8 text-center hover:border-accent-400/40"
            >
              <p className="text-4xl font-bold text-brand-400">
                {metrica.valor}
              </p>
              <p className="mt-2 text-slate-400">{metrica.etiqueta}</p>
            </div>
          ))}
        </div>

        <blockquote className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-xl font-medium text-slate-200 sm:text-2xl">
            &ldquo;Antes de La Agencia no teníamos ni logo. Hoy tenemos una
            marca que la gente reconoce, un sitio web que se ve profesional
            y redes que por fin traen clientes nuevos cada semana.&rdquo;
          </p>
          <footer className="mt-6 text-slate-400">
            <span className="font-semibold text-slate-200">Ana Martínez</span>{" "}
            — Dueña de negocio local
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
