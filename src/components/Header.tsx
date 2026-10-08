import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Logo } from '../assets/Logo'
import { VerifiedBadge } from '../assets/Icons'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Our Services' },
  { to: '/areas', label: 'Areas Covered' },
  { to: '/fleet', label: 'Fleet' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const solid = pathname !== '/'

  return (
    <header className={`header ${solid ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <Logo onNavigate={() => setOpen(false)} />
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <VerifiedBadge className="header__badge" />
        <button
          type="button"
          className={`header__toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  )
}
