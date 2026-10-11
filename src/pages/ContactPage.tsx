import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import {
  FiveStarRow,
  GoogleMark,
  IconMail,
  IconPhone,
  IconWhatsApp,
} from '../assets/Icons'
import {
  CONTACT_ENDPOINT,
  EMAIL,
  EMAIL_HREF,
  GOOGLE_BUSINESS_URL,
  GOOGLE_REVIEW_URL,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../constants'

type Status = 'idle' | 'sending' | 'error'

function isContactSuccess(payload: unknown): boolean {
  if (!payload || typeof payload !== 'object') return false
  const success = (payload as { success?: unknown }).success
  return success === true || success === 'true'
}

export function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (!showSuccess) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowSuccess(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showSuccess])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (String(data.get('_gotcha') || '').trim()) {
      setShowSuccess(true)
      form.reset()
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      let payload: unknown = null
      try {
        payload = await response.json()
      } catch {
        payload = null
      }

      if (!response.ok || !isContactSuccess(payload)) {
        const message =
          payload &&
          typeof payload === 'object' &&
          'message' in payload &&
          typeof (payload as { message: unknown }).message === 'string'
            ? (payload as { message: string }).message
            : ''
        throw new Error(message || 'Failed')
      }

      setStatus('idle')
      setShowSuccess(true)
      form.reset()
    } catch (error) {
      setStatus('error')
      const message = error instanceof Error ? error.message : ''
      setErrorMessage(
        message || `Something went wrong. Please email us at ${EMAIL} or try WhatsApp.`,
      )
    }
  }

  return (
    <>
      <section className="page-banner page-banner--compact" aria-label="Contact">
        <div className="container page-banner__inner">
          <h1 className="page-banner__title">Contact</h1>
          <p className="page-banner__subtitle">Send a message — we will get back to you promptly.</p>
        </div>
      </section>

      <section className="page-section page-section--contact">
        <div className="container contact-layout contact-layout--form-first">
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <h2>Send a message</h2>
            <p className="contact-form__lead">Enquiries go to {EMAIL}.</p>

            <div className="contact-form__row">
              <label>
                Name
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" required autoComplete="tel" />
              </label>
            </div>
            <label>
              Email
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <div className="contact-form__row">
              <label>
                Pickup (optional)
                <input name="pickup" type="text" autoComplete="street-address" />
              </label>
              <label>
                Destination (optional)
                <input name="destination" type="text" />
              </label>
            </div>
            <label>
              Message
              <textarea name="message" rows={3} required />
            </label>

            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="contact-form__honeypot"
              aria-hidden="true"
            />

            <button className="btn-gold" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'error' && (
              <p className="contact-form__status contact-form__status--err" role="alert">
                {errorMessage}
              </p>
            )}
          </form>

          <div className="contact-page">
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
                <strong>Chat to get a quote</strong>
              </div>
            </a>
            <a className="contact-page__card" href={EMAIL_HREF}>
              <IconMail size={28} />
              <div>
                <small>Email</small>
                <strong>{EMAIL}</strong>
              </div>
            </a>
            <div className="contact-page__card contact-page__card--google">
              <GoogleMark size={28} />
              <div>
                <small>Google Reviews</small>
                <a
                  className="contact-page__review-link"
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Leave a 5 star review
                </a>
                <FiveStarRow className="google-stars contact-page__stars" />
                <a
                  className="contact-page__profile-link"
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  View business profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showSuccess ? (
        <div
          className="contact-modal"
          role="presentation"
          onClick={() => setShowSuccess(false)}
        >
          <div
            className="contact-modal__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="contact-success-title">Message sent</h2>
            <p>Thank you — your message has been sent. We will reply soon.</p>
            <button
              type="button"
              className="btn-gold btn-gold--sm"
              onClick={() => setShowSuccess(false)}
            >
              OK
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
