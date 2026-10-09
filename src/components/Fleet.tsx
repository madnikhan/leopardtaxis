const VEHICLES = [
  {
    name: 'Saloon',
    src: '/images/fleet-saloon.jpg',
    detail:
      'Comfortable 3–4 passenger saloon for airport runs, business travel and everyday hire. Ideal when you need a smart, efficient ride with standard luggage space.',
  },
  {
    name: 'Estate',
    src: '/images/fleet-estate.jpg',
    detail:
      'Extra boot space for suitcases, golf bags or shopping. Perfect for families and travellers with more luggage without moving up to an MPV.',
  },
  {
    name: 'Executive',
    src: '/images/fleet-executive.jpg',
    detail:
      'Premium black executive car for VIP transfers, corporate travel and special occasions. Refined cabin comfort with professional, pleasant drivers.',
  },
  {
    name: '6 Seaters',
    src: '/images/fleet-6seater.jpg',
    detail:
      'Spacious black MPV-style people carrier for up to 6 passengers. Great for families, small groups and airport transfers with multiple bags.',
  },
  {
    name: '8 Seaters',
    src: '/images/fleet-8seater.jpg',
    detail:
      'Black Mercedes-Benz Vito people carrier for up to 8 passengers. Ideal for group days out, sports teams, weddings and multi-family airport trips.',
  },
]

type FleetProps = {
  showHeader?: boolean
}

export function Fleet({ showHeader = true }: FleetProps) {
  return (
    <section className="fleet" aria-label="Our fleet">
      <div className="container">
        {showHeader ? (
          <div className="fleet__header">
            <h2>Our Fleet</h2>
            <p>A range of vehicles to suit your needs.</p>
          </div>
        ) : null}
        <div className="fleet__grid fleet__grid--detailed">
          {VEHICLES.map((vehicle) => (
            <article key={vehicle.name} className="fleet-card fleet-card--detailed">
              <div className="fleet-card__media">
                <img
                  src={vehicle.src}
                  alt={`Leopard Taxis ${vehicle.name}`}
                  width={640}
                  height={480}
                  loading="lazy"
                />
              </div>
              <div className="fleet-card__body">
                <h3 className="fleet-card__label">{vehicle.name}</h3>
                <p>{vehicle.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
