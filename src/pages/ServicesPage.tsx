import { PageBanner } from '../components/PageBanner'
import { WHATSAPP_URL } from '../constants'

const SERVICES = [
  {
    title: 'Airport Transfer',
    image: '/images/services/service-airport.jpg',
    body: [
      'Stress-free travel to and from all major UK airports including Heathrow, Birmingham, Gatwick, Stansted, Luton and Manchester.',
      'We offer meet & greet, flight tracking for delays, help with luggage, and fixed-price transfers so you know the fare before you travel.',
    ],
  },
  {
    title: 'Day Outs',
    image: '/images/services/service-dayout.jpg',
    body: [
      'Explore popular destinations with comfort and ease — from the Cotswolds and Bath to coastal escapes, theme parks and landmark days out.',
      'Your driver waits as needed so you can enjoy the day without parking or timetable stress. Ideal for couples, families and small groups.',
    ],
  },
  {
    title: 'Intercity Travel',
    image: '/images/services/service-intercity.jpg',
    body: [
      'Longer journeys with the same high standards — business trips, family visits, university runs and nationwide private hire.',
      'Door-to-door service in a clean, comfortable vehicle, with professional chauffeurs who know the UK road network.',
    ],
  },
  {
    title: 'Everyday Taxi Needs',
    image: '/images/services/service-everyday.jpg',
    body: [
      'Local runs across Warwickshire and the West Midlands for school runs, hospital appointments, nights out, shopping trips and corporate travel.',
      'Reliable pickups when you need them — early mornings, evenings and weekends — with clear communication and courteous drivers.',
    ],
  },
]

export function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Airport transfers, day outs, intercity travel and everyday taxi needs — covered with care."
      />

      <section className="chauffeur-banner" aria-label="Professional chauffeur welcome">
        <div className="container chauffeur-banner__inner">
          <div className="chauffeur-banner__media">
            <img
              className="chauffeur-banner__img"
              src="/images/services/service-chauffeur.jpg"
              alt="Uniformed Leopard Taxis chauffeur welcoming a guest"
              width={800}
              height={600}
            />
          </div>
          <div className="chauffeur-banner__copy">
            <p className="chauffeur-banner__eyebrow">Meet your chauffeur</p>
            <h2>Welcomed with professionalism</h2>
            <p>
              Our uniformed drivers greet you with courtesy — whether it is an
              airport arrivals hall, hotel forecourt or your front door. Smart
              presentation, punctual pickups and a calm, comfortable ride are
              standard with every booking.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container service-blocks">
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className={`service-block ${index % 2 === 1 ? 'service-block--reverse' : ''}`}
            >
              <div className="service-block__media">
                <img
                  src={service.image}
                  alt={service.title}
                  width={960}
                  height={540}
                  loading="lazy"
                />
              </div>
              <div className="service-block__copy">
                <h2>{service.title}</h2>
                {service.body.map((para) => (
                  <p key={para.slice(0, 32)}>{para}</p>
                ))}
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
