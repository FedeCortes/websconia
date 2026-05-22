import { useState, useEffect } from 'react'
import CTAButton from './CTAButton'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-dark/95 backdrop-blur-sm border-t border-neon/30 px-4 py-3">
        <CTAButton
          label="QUIERO EMPEZAR AHORA →"
          size="md"
          ctaId="sticky_mobile"
          className="w-full"
        />
      </div>
    </div>
  )
}
