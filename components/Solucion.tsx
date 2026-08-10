const pasos = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descripcion:
      "Revisamos tu marca, tu web y tus redes actuales para entender en dónde estás y qué te está frenando.",
  },
  {
    numero: "02",
    titulo: "Estrategia y diseño",
    descripcion:
      "Definimos tu identidad visual y el plan de contenido y web que mejor conecta con tus clientes ideales.",
  },
  {
    numero: "03",
    titulo: "Implementación",
    descripcion:
      "Creamos tu marca, tu sitio web y tu contenido, listos para publicarse y usarse en todos tus canales.",
  },
  {
    numero: "04",
    titulo: "Gestión y crecimiento",
    descripcion:
      "Mantenemos tus redes activas y seguimos ajustando la estrategia para que tu negocio crezca mes a mes.",
  },
];

export default function Solucion() {
  return (
    <section id="solucion" className="border-y border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="link-highlight text-3xl font-bold tracking-tight sm:text-4xl">
            Nuestra solución
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Un proceso claro para construir una marca que se vea, se sienta y
            venda mejor.
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
