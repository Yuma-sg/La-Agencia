const metricas = [
  { valor: "+68%", etiqueta: "en tasa de conversión" },
  { valor: "-42%", etiqueta: "en abandono de carrito" },
  { valor: "2.3x", etiqueta: "en ingresos por visitante" },
];

export default function PruebaSocial() {
  return (
    <section className="bg-slate-900/40 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Resultados reales
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Así ayudamos a una marca de retail a transformar su tienda en
            línea en 8 semanas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {metricas.map((metrica) => (
            <div
              key={metrica.etiqueta}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-8 text-center"
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
            &ldquo;En dos meses de trabajo con La Agencia duplicamos nuestras
            ventas en línea sin aumentar el presupuesto de publicidad. El
            equipo entendió exactamente dónde estábamos perdiendo
            clientes.&rdquo;
          </p>
          <footer className="mt-6 text-slate-400">
            <span className="font-semibold text-slate-200">Ana Martínez</span>{" "}
            — Directora de E-commerce
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
