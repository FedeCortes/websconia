import Hero from './sections/Hero'
import Problema from './sections/Problema'
import Oportunidad from './sections/Oportunidad'
import Metodo from './sections/Metodo'
import Incluye from './sections/Incluye'
import Comunidad from './sections/Comunidad'
import Bonos from './sections/Bonos'
// import Testimonios from './sections/Testimonios' // activar cuando tengas testimonios reales
import Autor from './sections/Autor'
import Garantia from './sections/Garantia'
import FAQ from './sections/FAQ'
import CTAFinal from './sections/CTAFinal'
import StickyMobileCTA from './components/StickyMobileCTA'
import WhatsAppButton from './components/WhatsAppButton'
import SectionDivider from './components/SectionDivider'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-dark min-h-screen text-white overflow-x-hidden">
      <Hero />
      <SectionDivider />
      <Problema />
      <SectionDivider />
      <Oportunidad />
      <SectionDivider />
      <Metodo />
      <SectionDivider />
      <Incluye />
      <SectionDivider />
      <Comunidad />
      <SectionDivider />
      <Bonos />
      <SectionDivider />
      {/* <Testimonios /> — descomentar cuando tengas testimonios reales */}
      <Autor />
      <SectionDivider />
      <Garantia />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <CTAFinal />
      <Footer />

      <StickyMobileCTA />
      <WhatsAppButton />
    </div>
  )
}
