export default function Garantia() {
  return (
    <section className="px-4 py-20 max-w-2xl mx-auto text-center">
      <div className="bg-dark-card neon-border rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        {/* Decorativo */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon opacity-5 rounded-full blur-2xl" />

        <div className="relative z-10">
          <span className="text-6xl">🛡️</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white leading-tight">
            Garantía <span className="text-neon">100%</span>
          </h2>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
            Si el producto no te sirve,{' '}
            <strong className="text-white">te devolvemos el dinero.</strong>
            {' '}Sin preguntas, sin burocracia.
          </p>
          <p className="mt-3 text-gray-500 text-sm">
            Tu inversión está 100% protegida. Probalo sin riesgo.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2"><span className="text-neon">✓</span> Sin preguntas</span>
            <span className="flex items-center gap-2"><span className="text-neon">✓</span> Devolución inmediata</span>
            <span className="flex items-center gap-2"><span className="text-neon">✓</span> Cero riesgo</span>
          </div>
        </div>
      </div>
    </section>
  )
}
