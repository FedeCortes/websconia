import { useState } from 'react'

const faqs = [
  {
    q: '¿Necesito saber programar?',
    a: 'No. Usás herramientas de IA que generan el código y el diseño. Solo necesitas una pc, internet, configurar y entregás.',
  },
  {
    q: '¿Funciona si nunca hice una web?',
    a: 'Sí. Está pensado para personas sin experiencia. Mis herramientas y los prompts hacen el trabajo pesado.',
  },
  {
    q: '¿Cómo consigo clientes?',
    a: 'Usás IA + Google Maps para encontrar negocios sin web en tu zona. Te enseñamos el proceso completo.',
  },
  {
    q: '¿Cuánto puedo cobrar?',
    a: 'Depende de cada mercado. En LATAM, entre $50–$150 USD de setup y $30–$80 USD/mes por mantenimiento.',
  },
  {
    q: '¿Qué pasa si no me gusta?',
    a: 'Aplicás la garantía y te devolvemos todo el dinero. Sin vueltas.',
  },
  {
    q: '¿Cuándo tengo acceso?',
    a: 'Inmediatamente después de comprar. Accedés a todo el contenido al instante.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-dark-card neon-border rounded-xl overflow-hidden">
      <button
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-semibold text-sm sm:text-base">{q}</span>
        <span className={`text-neon text-xl font-bold transition-transform duration-200 flex-shrink-0 ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="px-4 py-20 max-w-2xl mx-auto text-center">
      <span className="text-xs font-semibold text-neon uppercase tracking-widest">FAQ</span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
        Preguntas frecuentes
      </h2>
      <p className="mt-4 text-gray-400 text-base mb-8">
        Si tenés dudas que no están acá, escribinos.
      </p>
      <div className="flex flex-col gap-3">
        {faqs.map((f, i) => (
          <FaqItem key={i} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  )
}
