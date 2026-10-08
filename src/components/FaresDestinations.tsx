const FARES = [
  { route: 'Leamington / Warwick', price: 'from £130' },
  { route: 'Kenilworth / Stratford upon Avon', price: 'from £145' },
  { route: 'Rugby / Solihull / Coventry', price: 'from £150' },
  { route: 'Nuneaton / Birmingham', price: 'from £175' },
]

const DESTINATIONS = [
  {
    label: 'Bournemouth & Durdle Door',
    src: '/images/dest-bournemouth.jpg',
  },
  {
    label: 'Bath & Stonehenge',
    src: '/images/dest-bath-stonehenge.jpg',
  },
  {
    label: 'Cotswolds',
    src: '/images/dest-cotswolds.jpg',
  },
  {
    label: 'Oxford & Windsor',
    src: '/images/dest-oxford.jpg',
  },
  {
    label: 'London',
    src: '/images/dest-london.jpg',
  },
  {
    label: 'Lake & Peak Districts',
    src: '/images/dest-lakes.jpg',
  },
]

export function FaresDestinations() {
  return (
    <section className="mid" aria-label="Fares and popular destinations">
      <div className="container mid__grid">
        <div className="panel panel--fares">
          <p className="panel__eyebrow">Heathrow London</p>
          <h2 className="panel__title">Fare Guideline to Heathrow</h2>
          <ul className="fare-list">
            {FARES.map((fare) => (
              <li key={fare.route}>
                <span className="fare-list__route">{fare.route}</span>
                <span className="fare-list__price">{fare.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel panel--destinations">
          <h2 className="panel__title">Popular Destinations Covered</h2>
          <div className="dest-grid">
            {DESTINATIONS.map((dest) => (
              <figure key={dest.label} className="dest-card">
                <img src={dest.src} alt={dest.label} width={640} height={480} loading="lazy" />
                <figcaption className="dest-card__label">{dest.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
