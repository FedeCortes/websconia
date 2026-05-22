export default function Footer() {
  return (
    <footer className="border-t border-dark-border px-4 py-8 text-center text-gray-600 text-xs">
      <p className="text-gray-500 font-bold text-sm mb-1">WebSconia</p>
      <p>© {new Date().getFullYear()} — Todos los derechos reservados</p>
      <p className="mt-2 text-gray-700">
        Los resultados varían según cada persona. No garantizamos ingresos específicos.
      </p>
    </footer>
  )
}
