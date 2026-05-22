const problemas = [
  { icon: '😤', text: 'Buscás trabajo y no encontrás nada que valga la pena' },
  { icon: '💸', text: 'Querés ingresos extras pero no sabés por dónde empezar' },
  { icon: '🤯', text: 'Escuchás de "freelancing" pero parece complicado y lento' },
  { icon: '⏳', text: 'Perdés tiempo en cosas que no te generan plata' },
]

export default function Problema() {
  return (
    <section className="px-4 py-20 max-w-2xl mx-auto text-center">
      <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">El problema</span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
        ¿Te suena familiar?
      </h2>
      <p className="mt-4 text-gray-400 text-base">
        La mayoría de las personas quiere generar ingresos extras pero no sabe cómo empezar ni qué ofrecer.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {problemas.map((p, i) => (
          <div
            key={i}
            className="flex items-start gap-4 text-left bg-dark-card border border-red-900/30 rounded-xl p-4"
          >
            <span className="text-2xl flex-shrink-0">{p.icon}</span>
            <p className="text-gray-300 text-sm leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 bg-dark-card neon-border rounded-2xl">
        <p className="text-white font-bold text-lg">
          La solución ya existe. Solo necesitás el método correcto.
        </p>
      </div>
    </section>
  )
}
