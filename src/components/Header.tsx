import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Logo } from '../assets/Logo'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Our Services' },
  { to: '/areas', label: 'Areas Covered' },
  { to: '/fleet', label: 'Fleet' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const classes = [
    'header',
    !isHome || scrolled ? 'header--solid' : 'header--home',
    scrolled ? 'header--scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      <div className="container header__inner">
        <Logo showVerified onNavigate={() => setOpen(false)} />
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
