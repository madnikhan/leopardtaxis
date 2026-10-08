import { IconDayOut, IconPlane, IconRoad } from '../assets/Icons'
import { PageBanner } from '../components/PageBanner'
import { WHATSAPP_URL } from '../constants'

const SERVICES = [
  {
    icon: IconPlane,
    title: 'Airport Transfer',
    body: 'Stress-free travel to and from all major airports, including Heathrow, Birmingham, Gatwick, Manchester and more. Meet & greet and flight tracking available on request.',
  },
  {
    icon: IconDayOut,
    title: 'Day Outs',
    body: 'Explore popular destinations with comfort and ease — from the Cotswolds and Bath to coastal escapes and landmark days out across the UK.',
  },
  {
    icon: IconRoad,
    title: 'Intercity Travel',
    body: 'Longer journeys, same high standards. Reliable private hire for business trips, family travel and nationwide transfers.',
  },
]

export function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Professional taxi and transfer services tailored to your journey."
      />
      <section className="page-section">
        <div className="container service-page__grid">
          {SERVICES.map(({ icon: Icon, title, body }) => (
            <article key={title} className="service-page__card">
              <Icon className="service-page__icon" size={36} />
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="container page-section__cta">
          <a className="btn-gold" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Book Your Ride
            <span className="btn-gold__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>
    </>
  )
}
