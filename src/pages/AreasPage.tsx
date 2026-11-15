import { PageBanner } from '../components/PageBanner'
import { ServiceOffers } from '../components/ServiceOffers'
import { WHATSAPP_URL } from '../constants'

const AIRPORT_LABELS = [
  'Birmingham Airport',
  'Heathrow',
  'Gatwick & Stansted',
  'Luton Airport',
] as const

type AreaFares = {
  name: string
  image: string
  fares: [string, string, string, string]
  note?: string
}

const AREAS: AreaFares[] = [
  {
    name: 'Warwick & Leamington Spa',
    image: '/images/areas/area-warwick.jpg',
    fares: ['£40', '£130', '£170', '£100'],
  },
  {
    name: 'Wellesbourne / Stratford upon Avon',
    image: '/images/areas/area-stratford.jpg',
    fares: ['£50 / £55', '£145', '£185', '£115'],
  },
  {
    name: 'Kenilworth',
    image: '/images/areas/area-kenilworth.jpg',
    fares: ['£35', '£145', '£185', '£115'],
  },
  {
    name: 'Coventry',
    image: '/images/areas/area-coventry.jpg',
    fares: ['£40', '£150', '£180', '£100'],
  },
  {
    name: 'Solihull',
    image: '/images/areas/area-solihull.jpg',
    fares: ['£30', '£150', '£190', '£120'],
  },
  {
    name: 'Rugby',
    image: '/images/areas/area-rugby.jpg',
    fares: ['£65', '£150', '£190', '£100'],
  },
  {
    name: 'Nuneaton',
    image: '/images/areas/area-nuneaton.jpg',
    fares: ['£45', '£190', '£240', '£120'],
  },
  {
    name: 'Birmingham Central',
    image: '/images/areas/area-birmingham.jpg',
    fares: ['£35', '£175', '£220', '£120'],
    note: 'Please ask for fares to Airports from other areas of Birmingham',
  },
]

export function AreasPage() {
  return (
    <>
      <PageBanner
        title="Areas Covered"
        subtitle="Airport transfer fare guidelines from towns we cover across Warwickshire and the West Midlands."
      />
      <ServiceOffers variant="light" icon="van" birminghamNote />
      <section className="page-section">
        <div className="container areas-cards">
          {AREAS.map((area) => (
            <article key={area.name} className="area-card">
              <div className="area-card__media">
                <img
                  src={area.image}
                  alt={area.name}
                  width={640}
                  height={480}
                  loading="lazy"
                />
              </div>
              <div className="area-card__body">
                <h2>{area.name}</h2>
                {area.note ? <p className="area-card__note">* {area.note}</p> : null}
                <ul className="area-fares">
                  {AIRPORT_LABELS.map((label, i) => (
                    <li key={label}>
                      <span>{label}</span>
                      <strong>{area.fares[i]}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
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
