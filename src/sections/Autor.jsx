// Guardá tu foto como /public/federico.jpg para que aparezca acá
function FotoAutor() {
  return (
    <div className="w-full sm:w-64 h-72 sm:h-auto flex-shrink-0 relative overflow-hidden bg-dark-border">
      <img
        src="/federico.jpg"
        alt="Federico Cortés"
        className="w-full h-full object-cover object-[18%_8%]"
        style={{ minHeight: '260px' }}
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />
      {/* overlay sutil para integrar con el fondo oscuro */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-card opacity-40 sm:opacity-60 pointer-events-none" />
    </div>
  )
}

export default function Autor() {
  return (
    <section className="px-4 py-16 max-w-2xl mx-auto">
      <div className="bg-dark-card neon-border rounded-2xl overflow-hidden flex flex-col sm:flex-row gap-0">
        <FotoAutor />

        {/* Texto */}
        <div className="p-6 flex flex-col justify-center gap-3">
          <div>
            <p className="text-neon text-xs font-bold uppercase tracking-widest mb-1">
              Quién está detrás
            </p>
            <h3 className="text-white font-black text-xl leading-tight">
              Federico Cortés, 24 años
            </h3>
            <p className="text-gray-500 text-sm">Buenos Aires, Argentina</p>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Combino <strong className="text-white">desarrollo web con IA</strong> y estrategia de ventas.
            Llevo más de 3 años vendiendo webs a negocios locales desde{' '}
            <span className="text-neon font-semibold">presence.com.ar</span>.
          </p>

          <p className="text-gray-400 text-sm leading-relaxed">
            Este método es exactamente lo que yo uso —
            lo documenté paso a paso para que puedas replicarlo sin experiencia previa.
          </p>

          <div className="flex flex-wrap gap-3 mt-1">
            {['3+ años vendiendo webs', 'IA + estrategia de ventas', 'Resultados reales'].map((tag) => (
              <span
                key={tag}
                className="text-xs text-neon bg-neon/10 border border-neon/20 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
