export default function Comunidad() {
  return (
    <section className="px-4 py-20 max-w-2xl mx-auto text-center">
      <span className="text-xs font-semibold text-neon uppercase tracking-widest">Comunidad</span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
        No arrancás solo
      </h2>
      <p className="mt-4 text-gray-400 text-base max-w-xl mx-auto">
        Entrás a una comunidad privada de WhatsApp con gente haciendo exactamente lo mismo que vos.
      </p>

      <div className="mt-10 bg-dark-card neon-border rounded-2xl p-6 sm:p-8 text-left">
        {/* Mockup de chat */}
        <div className="space-y-4 mb-6">
          {[
            { user: 'Nico M.', msg: 'Cerré mi segundo cliente hoy 🔥 $80 setup + $40/mes', time: '10:23' },
            { user: 'Caro R.', msg: 'El prompt del hero quedó increíble, gracias!', time: '10:31' },
            { user: 'Maxi G.', msg: 'Mandé 20 mensajes y ya tengo 3 interesados', time: '10:45' },
            { user: 'Juli F.', msg: 'Primera mensualidad cobrada 💪 esto funciona', time: '11:02' },
          ].map((m, i) => (
            <div key={i} className={`flex items-start gap-3 ${i % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-8 h-8 rounded-full bg-neon/20 neon-border flex items-center justify-center text-xs font-bold text-neon flex-shrink-0">
                {m.user[0]}
              </div>
              <div className={`max-w-xs rounded-2xl px-4 py-2 ${i % 2 !== 0 ? 'bg-neon/10 neon-border' : 'bg-dark-border'}`}>
                <p className="text-xs text-neon font-semibold mb-1">{m.user}</p>
                <p className="text-sm text-gray-200">{m.msg}</p>
                <p className="text-xs text-gray-500 mt-1 text-right">{m.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-dark-border pt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {[
            { val: '💬', label: 'Dudas y respuestas en tiempo real' },
            { val: '🚀', label: 'Avances y motivación del grupo' },
            { val: '💡', label: 'Ideas y oportunidades compartidas' },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{f.val}</span>
              <p className="text-xs text-gray-400">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
