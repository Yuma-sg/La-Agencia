const pasos = [
  {
    numero: "01",
    titulo: "Auditoría completa",
    descripcion:
      "Analizamos tu tienda, tu tráfico y tu embudo de conversión para encontrar exactamente dónde estás perdiendo ventas.",
  },
  {
    numero: "02",
    titulo: "Estrategia y diseño",
    descripcion:
      "Diseñamos una experiencia de compra clara, rápida y persuasiva, alineada con tu marca y tus clientes ideales.",
  },
  {
    numero: "03",
    titulo: "Implementación",
    descripcion:
      "Ejecutamos los cambios en tu tienda: UX, velocidad, checkout y mensajes que generan confianza.",
  },
  {
    numero: "04",
    titulo: "Medición y mejora continua",
    descripcion:
      "Monitoreamos resultados en tiempo real y seguimos optimizando para que la conversión suba mes a mes.",
  },
];

export default function Solucion() {
  return (
    <section id="solucion" className="bg-slate-900/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Nuestra solución
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Un proceso claro para convertir tu tienda en una máquina de
            ventas.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((paso) => (
            <div key={paso.numero} className="relative">
              <span className="text-4xl font-bold text-accent-400/60">
                {paso.numero}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {paso.titulo}
              </h3>
              <p className="mt-2 text-slate-400">{paso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
