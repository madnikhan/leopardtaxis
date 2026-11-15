import { IconReturn, IconStarFilled, IconVan } from '../assets/Icons'

export function ServiceOffers({
  variant,
  icon = 'star',
  birminghamNote = false,
}: {
  variant: 'dark' | 'light'
  icon?: 'star' | 'van'
  birminghamNote?: boolean
}) {
  return (
    <div className={`service-offers service-offers--${variant}`}>
      <div className="service-offers__row">
        {icon === 'van' ? <IconVan size={28} /> : <IconStarFilled size={22} />}
        <p>
          <strong>6/7 seater MPVs &amp; 8/9 seater Minibuses</strong> are available at minimal
          additional costs
        </p>
      </div>
      <div className="service-offers__row">
        <IconReturn size={26} />
        <p>
          <strong>Return offer:</strong> Book a return journey too, and we will pay the Airport set
          down / parking charges for both rides
          {birminghamNote ? (
            <span className="service-offers__aside">
              (This offer is not valid for Birmingham Airport)
            </span>
          ) : null}
        </p>
      </div>
    </div>
  )
}
