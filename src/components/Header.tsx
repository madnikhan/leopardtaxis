import { useEffect, useState } from 'react'
import { Logo } from '../assets/Logo'
import { VerifiedBadge } from '../assets/Icons'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Our Services' },
  { href: '#areas', label: 'Areas Covered' },
  { href: '#fleet', label: 'Fleet' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const ids = ['home', 'services', 'areas', 'fleet', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`)
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const onNavClick = () => setOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'is-active' : undefined}
              onClick={onNavClick}
            >
              {link.label}
            </a>
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
