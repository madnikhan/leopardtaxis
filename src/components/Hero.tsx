import { WHATSAPP_URL } from '../constants'

export function Hero() {
  return (
    <section id="home" className="hero" aria-label="Leopard Taxis hero">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/images/hero-airport.jpg"
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
        />
      </div>
      <div className="hero__shade" aria-hidden="true" />
      <div className="container">
        <div className="hero__content">
          <p className="hero__eyebrow">Safe · Reliable · Comfortable</p>
          <h1 className="hero__title">Your Journey, Our Priority</h1>
          <p className="hero__lead">
            Professional taxi and transfer services across Warwickshire, West
            Midlands and beyond.
          </p>
          <a className="btn-gold" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Book Your Ride
            <span className="btn-gold__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
