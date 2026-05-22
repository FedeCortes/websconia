import CTAButton from '../components/CTAButton'

const stats = [
  { number: '+5M', label: 'negocios locales sin web en LATAM' },
  { number: '$20–150', label: 'mensualidad por mantenimiento' },
  { number: '30 min', label: 'para crear una web con IA' },
  { number: '100%', label: 'remoto, sin horarios fijos' },
]

export default function Oportunidad() {
  return (
    <section className="px-4 py-20 max-w-3xl mx-auto text-center">
      <span className="text-xs font-semibold text-neon uppercase tracking-widest">La oportunidad</span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
        Millones de negocios <span className="text-neon">no tienen web.</span>
        <br />Vos se las podés hacer.
      </h2>
      <p className="mt-4 text-gray-400 text-base max-w-xl mx-auto">
        Restaurantes, peluquerías, médicos, gimnasios, ferreterías... todos necesitan presencia online
        y casi ninguno sabe cómo armarla. Ahí entrás vos.
      </p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-dark-card neon-border rounded-xl p-5 flex flex-col items-center gap-1">
            <span className="text-3xl font-black text-neon">{s.number}</span>
            <span className="text-xs text-gray-400 text-center leading-snug">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Antes / Después */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
        <div className="bg-dark-card border border-red-800/40 rounded-xl p-5">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-3">Antes</p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>❌ Sin ingresos extras</li>
            <li>❌ Sin habilidades técnicas</li>
            <li>❌ Sin clientes, sin modelo</li>
            <li>❌ Perdiendo tiempo</li>
          </ul>
        </div>
        <div className="bg-dark-card neon-border rounded-xl p-5">
          <p className="text-xs font-semibold text-neon uppercase tracking-widest mb-3">Después</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>✅ Ingresos mensuales recurrentes</li>
            <li>✅ IA hace el trabajo pesado</li>
            <li>✅ Clientes usando Google Maps</li>
            <li>✅ Aprendés una vez, creás webs infinitas</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <CTAButton label="QUIERO ESTA OPORTUNIDAD →" size="lg" ctaId="oportunidad" />
      </div>
    </section>
  )
}
