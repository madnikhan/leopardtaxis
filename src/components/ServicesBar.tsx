import { IconDayOut, IconPin, IconPlane, IconRoad } from '../assets/Icons'

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

export function ServicesBar() {
  return (
    <section id="services" className="services" aria-label="Our services">
      <div id="areas" className="container services__grid">
        <article className="service-card">
          <IconPin className="service-card__icon" />
          <h3>Areas Covered</h3>
          <ul>
            {AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </article>
        <article className="service-card">
          <IconPlane className="service-card__icon" />
          <h3>Airport Transfer</h3>
          <p>Stress-free travel to and from all major airports.</p>
        </article>
        <article className="service-card">
          <IconDayOut className="service-card__icon" />
          <h3>Day Outs</h3>
          <p>Explore popular destinations with comfort and ease.</p>
        </article>
        <article className="service-card">
          <IconRoad className="service-card__icon" />
          <h3>Intercity Travel</h3>
          <p>Longer journeys, same high standards.</p>
        </article>
      </div>
    </section>
  )
}
