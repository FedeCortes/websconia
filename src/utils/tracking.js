// ============================================================
// TRACKING — eventos de conversión
// Para activar Meta Pixel: descomentá las líneas fbq(...)
// Para activar GA4: descomentá las líneas gtag(...)
// ============================================================

export function trackCheckoutClick(label = 'cta') {
  console.log(`[tracking] checkout_click — ${label}`)

  // Meta Pixel
  // if (typeof fbq !== 'undefined') {
  //   fbq('track', 'InitiateCheckout', { content_name: label })
  // }

  // Google Analytics 4
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', 'checkout_click', { cta_label: label })
  // }
}
