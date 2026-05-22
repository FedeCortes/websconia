import CTAButton from '../components/CTAButton'

export default function CTAFinal() {
  return (
    <section className="px-4 py-24 max-w-2xl mx-auto text-center relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-neon opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <span className="text-xs font-semibold text-neon uppercase tracking-widest">Empezá hoy</span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white leading-tight">
          El único momento para empezar
          <br />
          <span className="text-neon glow-text">es ahora.</span>
        </h2>
        <p className="mt-5 text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
          Aprendé a crear webs premium con IA, encontrá negocios locales y cobrá mensualidades.
          Todo listo para arrancar hoy.
        </p>

        {/* Lo que conseguís */}
        <div className="mt-8 bg-dark-card neon-border rounded-2xl p-6 text-left max-w-md mx-auto">
          <p className="text-neon text-xs font-bold uppercase tracking-widest mb-4">Incluye todo esto:</p>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              'Método completo paso a paso',
              'Templates para negocios locales',
              'Prompts listos para IA',
              'Scripts de venta por WhatsApp',
              'Checklist de entrega al cliente',
              'Comunidad privada de WhatsApp',
              'Actualizaciones gratuitas',
              'Garantía 100% devolución',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-neon font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Precio */}
        <div className="mt-8 flex flex-col items-center gap-1">
          <p className="text-gray-500 text-xs uppercase tracking-widest">Precio de lanzamiento</p>
          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-black text-neon glow-text">$27.000</span>
            <span className="text-gray-400 text-lg font-semibold">ARS</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Pago único · Acceso inmediato · Garantía 100%</p>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4">
          <CTAButton label="QUIERO ACCESO INMEDIATO →" size="xl" ctaId="cta_final" />
          <p className="text-xs text-gray-500">
            Garantía 100% · Acceso inmediato · Sin contrato
          </p>
        </div>
      </div>
    </section>
  )
}
