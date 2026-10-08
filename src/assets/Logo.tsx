import { Link } from 'react-router-dom'
import { VerifiedBadge } from './Icons'

type LogoProps = {
  className?: string
  showText?: boolean
  showVerified?: boolean
  onNavigate?: () => void
}

export function LeopardMark({
  className = '',
  size = 56,
}: {
  className?: string
  size?: number
}) {
  return (
    <img
      className={className}
      src="/images/logo-leopard-round.png"
      alt=""
      width={size}
      height={size}
      decoding="async"
    />
  )
}

export function Logo({
  className = '',
  showText = true,
  showVerified = false,
  onNavigate,
}: LogoProps) {
  return (
    <Link
      to="/"
      className={`logo ${className}`}
      aria-label="Leopard Taxis home"
      onClick={onNavigate}
    >
      <LeopardMark className="logo__mark" size={56} />
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
      {showVerified && <VerifiedBadge className="logo__verified" />}
    </Link>
  )
}
