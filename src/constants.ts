export const WHATSAPP_NUMBER = '447947745958'
export const WHATSAPP_DISPLAY = '07947745958'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Leopard Taxis, I would like to get a quote.')}`
export const PHONE_TEL = 'tel:+447947745958'
export const EMAIL = 'info@leopardtaxis.co.uk'
export const EMAIL_HREF = `mailto:${EMAIL}`
export const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?q=Leopard+Taxis+Warwickshire+reviews'
export const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/info@leopardtaxis.co.uk'

export const HEATHROW_FARES = [
  { route: 'Leamington / Warwick', price: 'from £130' },
  { route: 'Kenilworth / Stratford upon Avon', price: 'from £145' },
  { route: 'Rugby / Solihull / Coventry', price: 'from £150' },
  { route: 'Nuneaton / Birmingham', price: 'from £175' },
] as const
