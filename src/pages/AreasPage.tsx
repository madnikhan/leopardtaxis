import { IconPin } from '../assets/Icons'
import { PageBanner } from '../components/PageBanner'
import { WHATSAPP_URL } from '../constants'

const AREAS = [
  'Warwick',
  'Leamington Spa',
  'Stratford upon Avon',
  'Kenilworth',
  'Coventry',
  'Solihull',
  'Rugby',
  'Nuneaton',
  'Birmingham',
]

export function AreasPage() {
  return (
    <>
      <PageBanner
        title="Areas Covered"
        subtitle="Local coverage across Warwickshire, the West Midlands and beyond."
      />
      <section className="page-section">
        <div className="container areas-page">
          <div className="areas-page__intro">
            <IconPin size={36} className="areas-page__icon" />
            <p>
              Based in Warwickshire, Leopard Taxis provides reliable pickups and
              drop-offs across the region — plus airport and intercity travel
              nationwide.
            </p>
          </div>
          <ul className="areas-page__grid">
            {AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <div className="page-section__cta">
            <a className="btn-gold" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Book Your Ride
              <span className="btn-gold__arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
