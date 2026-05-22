import CTAButton from '../components/CTAButton'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-20 text-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-dark-card neon-border text-neon text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest">
          <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
          Acceso inmediato
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
          Creá webs con IA{' '}
          <span className="text-neon glow-text">en minutos</span>
          <br />y cobralas{' '}
          <span className="text-neon glow-text">mensualmente</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
          Encontrá negocios locales usando <strong className="text-white">IA + Google Maps</strong>,
          creales una web y cobrá setup + mensualidad.{' '}
          <strong className="text-neon">Sin experiencia previa.</strong>
        </p>

        {/* Herramientas */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { icon: '🤖', label: 'ChatGPT / Claude' },
            { icon: '🗺️', label: 'Google Maps' },
            { icon: '💬', label: 'WhatsApp' },
            { icon: '⚡', label: 'Sin programar' },
          ].map((t) => (
            <span
              key={t.label}
              className="flex items-center gap-1.5 bg-dark-card neon-border text-gray-300 text-xs px-3 py-1.5 rounded-full"
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </span>
          ))}
        </div>

        {/* CTA */}
        <CTAButton label="QUIERO EMPEZAR AHORA →" size="xl" ctaId="hero_main" />

        <p className="text-xs text-gray-500">
          Sin experiencia previa · Acceso inmediato · Garantía 100%
        </p>

        {/* Mockup placeholder */}
        <div className="mt-6 w-full max-w-lg neon-border rounded-2xl bg-dark-card p-4 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-neon" />
            <span className="ml-2 text-xs text-gray-500 font-mono">tu-cliente.com</span>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-dark-border rounded w-3/4" />
            <div className="h-3 bg-dark-border rounded w-full" />
            <div className="h-3 bg-dark-border rounded w-5/6" />
            <div className="mt-3 h-8 bg-neon opacity-20 rounded-lg w-1/3" />
          </div>
          <p className="mt-3 text-center text-xs text-neon font-semibold opacity-70">
            Web lista en minutos con IA
          </p>
        </div>
      </div>
    </section>
  )
}
