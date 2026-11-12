export const WHATSAPP_NUMBER = '447947745958'
export const WHATSAPP_DISPLAY = '+44 794 774 5958'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const PHONE_TEL = 'tel:+447947745958'
export const EMAIL = 'info@leopardtaxis.co.uk'
export const EMAIL_HREF = `mailto:${EMAIL}`
export const GOOGLE_REVIEW_URL = 'https://g.page/r/CX_xvXJIL8xxEBM/review'
export const GOOGLE_BUSINESS_URL = 'https://share.google/11keWnUie9bfzBBoe'
/** IONOS PHP mail endpoint (copied from public/ into dist/) */
export const CONTACT_ENDPOINT = '/contact.php'

export const HEATHROW_FARES = [
  { route: 'Leamington / Warwick', price: '£130' },
  { route: 'Kenilworth / Stratford upon Avon', price: '£145' },
  { route: 'Rugby / Solihull / Coventry', price: '£150' },
  { route: 'Nuneaton / Birmingham', price: '£175' },
] as const
