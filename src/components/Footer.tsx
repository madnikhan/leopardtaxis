import { LeopardMark, Logo } from '../assets/Logo'
import { IconMail, IconPhone, VerifiedLabelRow, WhatsAppBadge } from '../assets/Icons'
import { GoogleReviewsFooter } from './GoogleReviews'
import { EMAIL, EMAIL_HREF, PHONE_TEL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '../constants'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__contact">
        <div className="footer__item">
          <IconPhone size={24} />
          <div className="footer__item-copy">
            <small>Call or WhatsApp</small>
            <div className="footer__phone-line">
              <a
                className="footer__badge-link"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppBadge size={28} />
              </a>
              <a href={PHONE_TEL}>{WHATSAPP_DISPLAY}</a>
            </div>
            <VerifiedLabelRow className="footer__verified-labels" />
          </div>
        </div>

        <div className="footer__item">
          <IconMail size={24} />
          <div className="footer__item-copy">
            <small>Email</small>
            <a href={EMAIL_HREF}>{EMAIL}</a>
          </div>
        </div>

        <GoogleReviewsFooter />
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
