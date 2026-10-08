import { Link } from 'react-router-dom'

type LogoProps = {
  className?: string
  showText?: boolean
  onNavigate?: () => void
}

/** Gold leopard head in profile (facing left), matching the brand mock. */
export function LeopardMark({
  className = '',
  size = 48,
}: {
  className?: string
  size?: number
}) {
  return (
    <img
      className={className}
      src="/images/logo-leopard.png"
      alt=""
      width={size}
      height={size}
      decoding="async"
    />
  )
}

export function Logo({ className = '', showText = true, onNavigate }: LogoProps) {
  return (
    <Link
      to="/"
      className={`logo ${className}`}
      aria-label="Leopard Taxis home"
      onClick={onNavigate}
    >
      <LeopardMark className="logo__mark" size={52} />
      {showText && (
        <span className="logo__text">
          <span className="logo__name">LEOPARD</span>
          <span className="logo__sub">
            <span className="logo__rule" aria-hidden="true" />
            <span className="logo__name logo__name--sub">TAXIS</span>
            <span className="logo__rule" aria-hidden="true" />
          </span>
        </span>
      )}
    </Link>
  )
}
