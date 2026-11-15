import { LeopardMark, Logo } from '../assets/Logo'
import { IconFacebook, VerifiedLabelRow, WhatsAppBadge, XVerifiedMark } from '../assets/Icons'
import { GoogleReviewsFooter } from './GoogleReviews'
import {
  EMAIL,
  EMAIL_HREF,
  FACEBOOK_URL,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  X_URL,
} from '../constants'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__contact">
        <div className="footer__item">
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
                <WhatsAppBadge size={22} />
              </a>
              <a href={PHONE_TEL}>{WHATSAPP_DISPLAY}</a>
            </div>
            <VerifiedLabelRow className="footer__verified-labels" />
          </div>
        </div>

        <div className="footer__item">
          <div className="footer__item-copy">
            <small>Social</small>
            <div className="footer__social">
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                <IconFacebook size={28} />
                Find us on Facebook
              </a>
              <a href={X_URL} target="_blank" rel="noreferrer">
                <XVerifiedMark size={28} />
                Find us on X
              </a>
            </div>
          </div>
        </div>

        <div className="footer__item">
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
        <p className="footer__company">
          Leopard Taxis Limited is registered in the Companies house, registered number is 17026262.
          Registered Address: 76 Lionheart Avenue, Leamington Spa, CV33 9SW.
        </p>
      </div>
    </footer>
  )
}
