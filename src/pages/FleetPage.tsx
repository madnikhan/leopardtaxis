import { Fleet } from '../components/Fleet'
import { PageBanner } from '../components/PageBanner'
import { WHATSAPP_URL } from '../constants'

export function FleetPage() {
  return (
    <>
      <PageBanner
        title="Our Fleet"
        subtitle="A range of vehicles to suit your needs — from saloon to 8-seaters."
      />
      <section className="page-section">
        <Fleet showHeader={false} />
        <div className="container page-section__cta">
          <a
            className="btn-gold btn-gold--sm"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Ask a question
            <span className="btn-gold__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>
    </>
  )
}
