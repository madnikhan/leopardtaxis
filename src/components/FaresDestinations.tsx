const DESTINATIONS = [
  {
    label: 'Bournemouth & Durdle Door',
    src: '/images/dest-bournemouth.webp',
  },
  {
    label: 'Bath & Stonehenge',
    src: '/images/dest-bath-stonehenge.webp',
  },
  {
    label: 'Cotswolds',
    src: '/images/dest-cotswolds.webp',
  },
  {
    label: 'Oxford & Windsor',
    src: '/images/dest-oxford.webp',
  },
  {
    label: 'London',
    src: '/images/dest-london.webp',
  },
  {
    label: 'Lake & Peak Districts',
    src: '/images/dest-lakes.webp',
  },
]

export function FaresDestinations() {
  return (
    <section className="mid" aria-label="Popular destinations">
      <div className="container">
        <div className="panel panel--destinations panel--destinations-wide">
          <h2 className="panel__title">Popular Destinations Covered</h2>
          <div className="dest-grid dest-grid--wide">
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
