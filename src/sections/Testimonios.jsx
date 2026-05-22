const testimonios = [
  {
    nombre: 'Nicolás M.',
    ciudad: 'Córdoba, AR',
    texto:
      'En la primera semana cerré 2 clientes. Uno me pagó $80 de setup y $40/mes. El método es clarísimo.',
    emoji: '🧑',
    stars: 5,
  },
  {
    nombre: 'Carolina R.',
    ciudad: 'Buenos Aires, AR',
    texto:
      'Nunca había hecho una web. Con los prompts y templates, la primera quedó mejor que muchas que vi online.',
    emoji: '👩',
    stars: 5,
  },
  {
    nombre: 'Maximiliano G.',
    ciudad: 'Rosario, AR',
    texto:
      'Tengo 6 clientes activos en 2 meses. La mensualidad ya supera mi trabajo de 8 horas. Increíble.',
    emoji: '🧑',
    stars: 5,
  },
]

export default function Testimonios() {
  return (
    <section className="px-4 py-16 max-w-3xl mx-auto text-center">
      <span className="text-xs font-semibold text-neon uppercase tracking-widest">Resultados reales</span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
        Lo que dicen los que ya empezaron
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {testimonios.map((t, i) => (
          <div key={i} className="bg-dark-card neon-border rounded-xl p-5 text-left flex flex-col gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: t.stars }).map((_, s) => (
                <span key={s} className="text-neon text-sm">★</span>
              ))}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed flex-1">"{t.texto}"</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="w-9 h-9 rounded-full bg-neon/10 neon-border flex items-center justify-center text-lg">
                {t.emoji}
              </span>
              <div>
                <p className="text-white font-semibold text-sm">{t.nombre}</p>
                <p className="text-gray-500 text-xs">{t.ciudad}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
