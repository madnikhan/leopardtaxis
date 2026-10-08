import { IconCrown } from '../assets/Icons'

const VEHICLES = [
  { name: 'Saloon', src: '/images/fleet-saloon.jpg' },
  { name: 'Estate', src: '/images/fleet-estate.jpg' },
  { name: 'Executive', src: '/images/fleet-executive.jpg' },
  { name: '6 Seaters', src: '/images/fleet-6seater.jpg' },
  { name: '8 Seaters', src: '/images/fleet-8seater.jpg' },
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
            <IconCrown size={30} />
            <h2>Our Fleet</h2>
            <p>A range of vehicles to suit your needs.</p>
          </div>
        ) : null}
        <div className="fleet__grid">
          {VEHICLES.map((vehicle) => (
            <article key={vehicle.name} className="fleet-card">
              <div className="fleet-card__media">
                <img
                  src={vehicle.src}
                  alt={`Leopard Taxis ${vehicle.name}`}
                  width={640}
                  height={480}
                  loading="lazy"
                />
              </div>
              <h3 className="fleet-card__label">{vehicle.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
