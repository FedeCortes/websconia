import { trackCheckoutClick } from '../utils/tracking'

// CHECKOUT_URL — link directo al checkout de Shopify.
export const CHECKOUT_URL =
  'https://0r1qck-r1.myshopify.com/checkouts/cn/hWNCWNVAjTGu1HIFlaKOM20g/es-ar?_r=AQAB0X2BpwcObo3zHHQ9KTsntL0ltuvDaukSxJ9PkGKd97I&preview_theme_id=153871810746'

export default function CTAButton({ label = 'QUIERO EMPEZAR AHORA', size = 'md', ctaId = 'generic', className = '' }) {
  const handleClick = () => {
    trackCheckoutClick(ctaId)
    window.location.href = CHECKOUT_URL
  }

  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
    xl: 'px-10 py-5 text-base sm:px-12 sm:py-6 sm:text-xl',
  }

  return (
    <button
      onClick={handleClick}
      className={`
        ${sizes[size]}
        bg-neon text-dark font-black rounded-xl
        shadow-neon hover:shadow-neon-lg
        hover:bg-white hover:scale-105
        active:scale-95
        transition-all duration-200
        uppercase tracking-wide whitespace-nowrap
        w-full sm:w-auto
        cursor-pointer
        ${className}
      `}
    >
      {label}
    </button>
  )
}
