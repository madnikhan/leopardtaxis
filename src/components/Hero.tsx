import { HEATHROW_FARES, WHATSAPP_URL } from '../constants'

export function Hero() {
  return (
    <section className="hero" aria-label="Leopard Taxis hero">
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__sky"
          src="/images/hero-sky.jpg"
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <img
          className="hero__plane"
          src="/images/hero-plane.png"
          alt=""
          width={960}
          height={540}
        />
        <img
          className="hero__car"
          src="/images/hero-car.png"
          alt=""
          width={1280}
          height={720}
        />
      </div>
      <div className="hero__shade" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow">Safe · Reliable · Comfortable</p>
          <h1 className="hero__title">Your Journey, Our Priority</h1>
          <p className="hero__lead">
            Professional taxi and transfer services across Warwickshire, West
            Midlands and beyond.
          </p>
          <a className="btn-gold" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Get a Quote
            <span className="btn-gold__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <aside className="hero__fares" aria-label="Heathrow fare guideline">
          <p className="hero__fares-eyebrow">Heathrow London</p>
          <h2 className="hero__fares-title">Fare Guideline to Heathrow</h2>
          <ul className="hero__fares-list">
            {HEATHROW_FARES.map((fare) => (
              <li key={fare.route}>
                <span>{fare.route}</span>
                <strong>{fare.price}</strong>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
