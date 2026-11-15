import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { IconStarFilled, VerifiedStack } from '../assets/Icons'
import { Logo } from '../assets/Logo'
import { GOOGLE_REVIEW_URL, PHONE_TEL, WHATSAPP_DISPLAY } from '../constants'

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

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  const classes = [
    'header',
    !isHome || scrolled ? 'header--solid' : 'header--home',
    scrolled ? 'header--scrolled' : '',
    open ? 'header--menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      <div className="container header__top">
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
          <div className="header__contact header__contact--mobile">
            <a className="header__phone" href={PHONE_TEL}>
              {WHATSAPP_DISPLAY}
            </a>
            <VerifiedStack />
          </div>
        </nav>
        <div className="header__contact header__contact--bar">
          <VerifiedStack />
        </div>
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
      <div className="container header__trust">
        <a className="trust-bar" href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer">
          <strong>(30+)</strong> 5 <IconStarFilled className="trust-bar__star" size={14} /> reviews on
          Google last month
        </a>
        <p className="trust-bar">Trusted, reliable and most competitive pricing in the area</p>
      </div>
    </header>
  )
}
