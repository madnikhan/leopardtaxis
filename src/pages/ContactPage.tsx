import { useState } from 'react'
import type { FormEvent } from 'react'
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
  FORMSUBMIT_ENDPOINT,
  GOOGLE_REVIEW_URL,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../constants'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (String(data.get('_gotcha') || '').trim()) {
      setStatus('success')
      return
    }

    setStatus('sending')
    data.append('_subject', 'New enquiry from Leopard Taxis website')
    data.append('_template', 'table')
    data.append('_captcha', 'false')

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageBanner
        title="Contact"
        subtitle="Call, WhatsApp, email or send a message — we will get back to you promptly."
      />
      <section className="page-section">
        <div className="container contact-layout">
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

          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <h2>Send a message</h2>
            <p className="contact-form__lead">
              Enquiries are delivered to {EMAIL}.
            </p>

            <label>
              Name
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" required autoComplete="tel" />
            </label>
            <label>
              Email
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              Pickup (optional)
              <input name="pickup" type="text" autoComplete="street-address" />
            </label>
            <label>
              Destination (optional)
              <input name="destination" type="text" />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} required />
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

            {status === 'success' && (
              <p className="contact-form__status contact-form__status--ok" role="status">
                Thank you — your message has been sent. We will reply soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-form__status contact-form__status--err" role="alert">
                Something went wrong. Please email us directly at {EMAIL} or try WhatsApp.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
