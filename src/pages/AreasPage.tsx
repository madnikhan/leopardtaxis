import { PageBanner } from '../components/PageBanner'
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
}

const AREAS: AreaFares[] = [
  {
    name: 'Warwick & Leamington Spa',
    image: '/images/areas/area-warwick.jpg',
    fares: ['from £40', 'from £130', 'from £170', 'from £100'],
  },
  {
    name: 'Stratford upon Avon',
    image: '/images/areas/area-stratford.jpg',
    fares: ['from £50', 'from £145', 'from £185', 'from £115'],
  },
  {
    name: 'Kenilworth',
    image: '/images/areas/area-kenilworth.jpg',
    fares: ['from £35', 'from £145', 'from £185', 'from £115'],
  },
  {
    name: 'Coventry',
    image: '/images/areas/area-coventry.jpg',
    fares: ['from £40', 'from £150', 'from £180', 'from £100'],
  },
  {
    name: 'Solihull',
    image: '/images/areas/area-solihull.jpg',
    fares: ['from £30', 'from £150', 'from £190', 'from £120'],
  },
  {
    name: 'Rugby',
    image: '/images/areas/area-rugby.jpg',
    fares: ['from £65', 'from £150', 'from £190', 'from £100'],
  },
  {
    name: 'Nuneaton',
    image: '/images/areas/area-nuneaton.jpg',
    fares: ['from £45', 'from £190', 'from £240', 'from £120'],
  },
  {
    name: 'Birmingham',
    image: '/images/areas/area-birmingham.jpg',
    fares: ['from £30', 'from £175', 'from £220', 'from £120'],
  },
]

export function AreasPage() {
  return (
    <>
      <PageBanner
        title="Areas Covered"
        subtitle="Airport transfer fare guidelines from towns we cover across Warwickshire and the West Midlands."
      />
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
          <a className="btn-gold" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Get a Quote
            <span className="btn-gold__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>
    </>
  )
}
