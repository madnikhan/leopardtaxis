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
