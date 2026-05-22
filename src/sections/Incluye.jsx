import CTAButton from '../components/CTAButton'

const items = [
  { icon: '🎨', title: 'Templates listos', desc: 'Diseños profesionales para distintos rubros. Solo completás los datos.' },
  { icon: '🤖', title: 'Prompts para IA', desc: 'Prompts optimizados para crear webs completas en minutos con ChatGPT o Claude.' },
  { icon: '📋', title: 'Estrategia completa', desc: 'Cómo encontrar clientes, qué cobrar, cómo hacer el seguimiento.' },
  { icon: '💬', title: 'Comunidad de WhatsApp', desc: 'Accedés a un grupo privado con personas haciendo lo mismo que vos.' },
  { icon: '⚡', title: 'Acceso inmediato', desc: 'Apenas comprás, tenés acceso a todo. Sin esperas.' },
  { icon: '🔄', title: 'Actualizaciones incluidas', desc: 'El contenido se actualiza. Pagás una vez y siempre tenés lo más nuevo.' },
]

export default function Incluye() {
  return (
    <section className="px-4 py-20 max-w-3xl mx-auto text-center">
      <span className="text-xs font-semibold text-neon uppercase tracking-widest">Qué incluye</span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
        Todo lo que necesitás,{' '}
        <span className="text-neon">listo para usar</span>
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div key={i} className="bg-dark-card neon-border rounded-xl p-5 text-left flex gap-4 items-start">
            <span className="text-3xl flex-shrink-0">{item.icon}</span>
            <div>
              <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <CTAButton label="QUIERO ACCESO AHORA →" size="lg" ctaId="incluye" />
      </div>
    </section>
  )
}
