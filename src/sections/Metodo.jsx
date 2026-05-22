const pasos = [
  {
    num: '01',
    icon: '🗺️',
    titulo: 'Encontrás negocios',
    desc: 'Usás IA + Google Maps para identificar negocios locales sin web o con web vieja en tu zona.',
  },
  {
    num: '02',
    icon: '⚡',
    titulo: 'Creás la web',
    desc: 'Con las herramientas que yo uso y los prompts armás una web profesional en menos de 30 minutos.',
  },
  {
    num: '03',
    icon: '📱',
    titulo: 'Se la mostrás',
    desc: 'Le mandás un mensaje por WhatsApp al dueño con el preview de la web ya armada. Simple.',
  },
  {
    num: '04',
    icon: '💰',
    titulo: 'Cobrás y repetís',
    desc: 'Cobrás un setup único + una mensualidad por mantenimiento. Cada cliente es ingreso recurrente.',
  },
]

export default function Metodo() {
  return (
    <section className="px-4 py-20 max-w-3xl mx-auto text-center">
      <span className="text-xs font-semibold text-neon uppercase tracking-widest">El método</span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
        4 pasos. Sin complicaciones.
      </h2>
      <p className="mt-4 text-gray-400 text-base">
        Un sistema simple, probado, que podés empezar hoy mismo.
      </p>

      <div className="mt-12 flex flex-col gap-0 relative">
        {/* Línea vertical */}
        <div className="absolute left-8 top-10 bottom-10 w-px bg-neon opacity-20 hidden sm:block" />

        {pasos.map((p, i) => (
          <div key={i} className="relative flex items-start gap-5 text-left mb-6 last:mb-0">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-dark-card neon-border flex flex-col items-center justify-center z-10">
              <span className="text-xl">{p.icon}</span>
              <span className="text-xs text-neon font-bold">{p.num}</span>
            </div>
            <div className="bg-dark-card neon-border rounded-2xl p-5 flex-1">
              <h3 className="text-white font-bold text-lg mb-1">{p.titulo}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 bg-neon/5 neon-border rounded-2xl">
        <p className="text-neon font-bold text-base">
          Con 3 clientes ya superás un sueldo mínimo. Con 10, tenés libertad real.
        </p>
      </div>
    </section>
  )
}
