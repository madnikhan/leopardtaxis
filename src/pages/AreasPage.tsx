import { PageBanner } from '../components/PageBanner'
import { WHATSAPP_URL } from '../constants'

const AREAS = [
  {
    name: 'Warwick',
    landmark: 'Warwick Castle',
    image: '/images/areas/area-warwick.jpg',
    blurb:
      'Home to Warwick Castle and a historic county town centre. We cover local pickups, castle visits and transfers across Warwickshire.',
  },
  {
    name: 'Leamington Spa',
    landmark: 'Royal Pump Rooms',
    image: '/images/areas/area-leamington.jpg',
    blurb:
      'Elegant spa-town streets, the Parade and Royal Pump Rooms. Ideal for town centre runs, station transfers and airport journeys.',
  },
  {
    name: 'Stratford upon Avon',
    landmark: "Shakespeare's Birthplace",
    image: '/images/areas/area-stratford.jpg',
    blurb:
      "Shakespeare's town — theatres, riverside walks and visitor attractions. Perfect for theatre nights and tourist day trips.",
  },
  {
    name: 'Kenilworth',
    landmark: 'Kenilworth Castle',
    image: '/images/areas/area-kenilworth.jpg',
    blurb:
      'Famous for Kenilworth Castle ruins and a welcoming high street. Reliable local taxis and onward travel to Coventry or airports.',
  },
  {
    name: 'Coventry',
    landmark: 'Coventry Cathedral',
    image: '/images/areas/area-coventry.jpg',
    blurb:
      'Cathedral city with universities, stations and arenas. We handle student moves, events and airport connections with ease.',
  },
  {
    name: 'Solihull',
    landmark: 'Touchwood & town centre',
    image: '/images/areas/area-solihull.jpg',
    blurb:
      'Shopping, business parks and residential areas. Smooth links to Birmingham Airport and the wider West Midlands.',
  },
  {
    name: 'Rugby',
    landmark: 'Rugby School heritage',
    image: '/images/areas/area-rugby.jpg',
    blurb:
      'Historic rugby town with strong rail links. Local hire, school runs and long-distance transfers available.',
  },
  {
    name: 'Nuneaton',
    landmark: 'Town centre & rail links',
    image: '/images/areas/area-nuneaton.jpg',
    blurb:
      'Convenient for Midlands travel and mainline rail. Book us for appointments, nights out and airport runs.',
  },
  {
    name: 'Birmingham',
    landmark: 'Bullring & city skyline',
    image: '/images/areas/area-birmingham.jpg',
    blurb:
      'The UK’s second city — shopping, nightlife, NEC and airport. Executive and group vehicles for city and beyond.',
  },
]

export function AreasPage() {
  return (
    <>
      <PageBanner
        title="Areas Covered"
        subtitle="Landmark towns across Warwickshire and the West Midlands — and journeys nationwide."
      />
      <section className="page-section">
        <div className="container areas-cards">
          {AREAS.map((area) => (
            <article key={area.name} className="area-card">
              <div className="area-card__media">
                <img
                  src={area.image}
                  alt={`${area.name} — ${area.landmark}`}
                  width={640}
                  height={480}
                  loading="lazy"
                />
              </div>
              <div className="area-card__body">
                <h2>{area.name}</h2>
                <p className="area-card__landmark">{area.landmark}</p>
                <p>{area.blurb}</p>
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
