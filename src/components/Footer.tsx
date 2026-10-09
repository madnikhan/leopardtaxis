import { LeopardMark, Logo } from '../assets/Logo'
import {
  GoogleMark,
  IconMail,
  IconPhone,
  IconWhatsApp,
  MetaTick,
} from '../assets/Icons'
import {
  EMAIL,
  EMAIL_HREF,
  GOOGLE_REVIEW_URL,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../constants'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__contact">
        <div className="footer__item">
          <IconPhone size={24} />
          <div className="footer__item-copy">
            <small>Call or WhatsApp</small>
            <a href={PHONE_TEL}>{WHATSAPP_DISPLAY}</a>
            <div className="footer__badges">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <IconWhatsApp size={18} />
              </a>
              <span className="meta-inline" title="Meta Verified Business">
                <MetaTick size={16} />
                <span>Meta Verified Business</span>
              </span>
            </div>
          </div>
        </div>

        <div className="footer__item">
          <IconMail size={24} />
          <div className="footer__item-copy">
            <small>Email</small>
            <a href={EMAIL_HREF}>{EMAIL}</a>
          </div>
        </div>

        <div className="footer__item">
          <GoogleMark size={28} />
          <div className="footer__item-copy">
            <small>Google Reviews</small>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer">
              Please leave a review
            </a>
            <div className="footer__stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    stroke="currentColor"
                    strokeWidth="1.6"
                    d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8L3.5 9.7l5.9-.9L12 3.5z"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container footer__brand">
        <LeopardMark className="footer__watermark" size={180} />
        <Logo className="logo--footer" />
        <p className="footer__scope">Local | Regional | Nationwide</p>
        <p className="footer__script">Ride with Confidence</p>
        <p className="footer__legal">© {new Date().getFullYear()} Leopard Taxis. All rights reserved.</p>
      </div>
    </footer>
  )
}
