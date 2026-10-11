import { HEATHROW_FARES, PHONE_TEL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '../constants'

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
        <div className="hero__intro">
          <p className="hero__promo">Best airport rates in Warwickshire</p>
          <p className="hero__eyebrow">Safe · Reliable · Comfortable</p>
        </div>

        <aside className="hero__fares" aria-label="Heathrow fare guideline">
          <div className="hero__fares-top">
            <div>
              <p className="hero__fares-eyebrow">Heathrow London</p>
              <h1 className="hero__fares-title">Fare Guideline to Heathrow</h1>
              <a className="hero__fares-phone" href={PHONE_TEL}>
                {WHATSAPP_DISPLAY}
              </a>
            </div>
            <span className="fare-discount" title="5% discount on return journeys">
              5% OFF
              <small>return journeys</small>
            </span>
          </div>
          <ul className="hero__fares-list">
            {HEATHROW_FARES.map((fare) => (
              <li key={fare.route}>
                <span>{fare.route}</span>
                <strong>{fare.price}</strong>
              </li>
            ))}
          </ul>
        </aside>

        <div className="hero__actions">
          <a
            className="btn-gold btn-gold--sm"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Ask a question
            <span className="btn-gold__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
