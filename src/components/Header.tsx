import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { IconWhatsApp, MetaTick } from '../assets/Icons'
import { Logo } from '../assets/Logo'
import { PHONE_TEL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '../constants'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Our Services' },
  { to: '/areas', label: 'Areas Covered' },
  { to: '/fleet', label: 'Fleet' },
  { to: '/contact', label: 'Contact' },
]

function HeaderContact({ className = '' }: { className?: string }) {
  return (
    <div className={`header__contact ${className}`.trim()}>
      <a className="header__phone" href={PHONE_TEL}>
        {WHATSAPP_DISPLAY}
      </a>
      <a
        className="header__wa"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp — Meta Verified Business"
      >
        <IconWhatsApp size={18} />
        <span>WhatsApp</span>
        <MetaTick size={16} />
        <span className="header__meta-label">Meta Verified Business</span>
      </a>
    </div>
  )
}

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
          <HeaderContact className="header__contact--mobile" />
        </nav>
        <HeaderContact className="header__contact--desktop" />
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
