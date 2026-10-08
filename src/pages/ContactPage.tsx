import {
  GoogleMark,
  IconMail,
  IconPhone,
  IconWhatsApp,
} from '../assets/Icons'
import { PageBanner } from '../components/PageBanner'
import {
  EMAIL,
  EMAIL_HREF,
  GOOGLE_REVIEW_URL,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../constants'

export function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact"
        subtitle="Call, WhatsApp or email — we are ready to book your journey."
      />
      <section className="page-section">
        <div className="container contact-page">
          <a className="contact-page__card" href={PHONE_TEL}>
            <IconPhone size={28} />
            <div>
              <small>Call</small>
              <strong>{WHATSAPP_DISPLAY}</strong>
            </div>
          </a>
          <a
            className="contact-page__card"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <IconWhatsApp size={28} />
            <div>
              <small>WhatsApp</small>
              <strong>Chat to book a ride</strong>
            </div>
          </a>
          <a className="contact-page__card" href={EMAIL_HREF}>
            <IconMail size={28} />
            <div>
              <small>Email</small>
              <strong>{EMAIL}</strong>
            </div>
          </a>
          <a
            className="contact-page__card"
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
          >
            <GoogleMark size={28} />
            <div>
              <small>Google Reviews</small>
              <strong>Please leave a review</strong>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}
