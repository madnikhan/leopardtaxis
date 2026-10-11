import { LeopardMark, Logo } from '../assets/Logo'
import {
  FiveStarRow,
  GoogleMark,
  IconMail,
  IconPhone,
  MetaTick,
  WhatsAppBadge,
} from '../assets/Icons'
import {
  EMAIL,
  EMAIL_HREF,
  GOOGLE_BUSINESS_URL,
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
              <a
                className="footer__badge-link"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppBadge size={28} />
              </a>
              <span className="meta-inline" title="Meta Verified Business">
                <MetaTick size={28} />
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
              5 star reviews on Google
            </a>
            <FiveStarRow className="footer__stars google-stars" />
            <a
              className="footer__profile-link"
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noreferrer"
            >
              View Google Business Profile
            </a>
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
