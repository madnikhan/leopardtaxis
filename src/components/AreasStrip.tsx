import { Link } from 'react-router-dom'

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

export function AreasStrip() {
  return (
    <section className="areas-strip" aria-label="Areas covered">
      <div className="container">
        <div className="areas-strip__inner">
          <h2 className="areas-strip__title">Areas Covered</h2>
          <ul className="areas-strip__list">
            {AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <Link className="areas-strip__link" to="/areas">
            View airport fares by area →
          </Link>
        </div>
      </div>
    </section>
  )
}
