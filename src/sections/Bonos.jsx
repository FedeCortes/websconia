const bonos = [
  {
    icon: '⚡',
    titulo: 'Pack de Prompts Ultra-Rápidos',
    desc: 'Prompts listos para crear una web completa en menos de 20 minutos con cualquier IA.',
    valor: '$29',
  },
  {
    icon: '📩',
    titulo: 'Scripts de Venta por WhatsApp',
    desc: 'Mensajes palabra por palabra para contactar al dueño del negocio y cerrar la venta.',
    valor: '$19',
  },
  {
    icon: '✅',
    titulo: 'Checklist de Entrega al Cliente',
    desc: 'Todo lo que tenés que verificar antes de entregarle la web. Quedás como un profesional.',
    valor: '$15',
  },
  {
    icon: '🏪',
    titulo: 'Templates por Rubro',
    desc: 'Diseños específicos para restaurants, peluquerías, dentistas, gimnasios y más.',
    valor: '$39',
  },
]

export default function Bonos() {
  return (
    <section className="px-4 py-20 max-w-3xl mx-auto text-center">
      <span className="text-xs font-semibold text-yellow-400 uppercase tracking-widest">🎁 Bonos exclusivos</span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
        Todo esto también incluye
      </h2>
      <p className="mt-4 text-gray-400 text-base">
        Sin costo adicional. Son tuyos cuando comprás hoy.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {bonos.map((b, i) => (
          <div key={i} className="bg-dark-card border border-yellow-500/20 rounded-xl p-5 text-left flex gap-4 relative overflow-hidden">
            <div className="absolute top-3 right-3 text-xs font-bold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full">
              Valor {b.valor}
            </div>
            <span className="text-3xl flex-shrink-0 mt-1">{b.icon}</span>
            <div className="pr-10">
              <h3 className="text-white font-bold text-base mb-1">{b.titulo}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 bg-yellow-400/5 border border-yellow-500/20 rounded-2xl">
        <p className="text-yellow-400 font-bold text-base">
          Valor total de bonos: <span className="line-through text-gray-500 mr-2">$102</span>
          <span className="text-white">GRATIS con tu compra</span>
        </p>
      </div>
    </section>
  )
}
