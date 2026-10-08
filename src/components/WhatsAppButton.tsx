import { IconWhatsApp } from '../assets/Icons'
import { WHATSAPP_URL } from '../constants'

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-fab"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp to book a ride"
    >
      <IconWhatsApp size={30} />
      <span className="whatsapp-fab__badge" aria-hidden="true">
        <svg viewBox="0 0 12 12" fill="none">
          <path
            d="M4.8 8.4 2.4 6l.9-.9 1.5 1.5 3.3-3.3.9.9-4.2 4.2z"
            fill="#fff"
          />
        </svg>
      </span>
    </a>
  )
}
