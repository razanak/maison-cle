import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { useLang } from '../data/lang'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 20)
    f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f)
  }, [])
  const links = [['/', t.nav.home], ['/about', t.nav.about], ['/prices', t.nav.prices], ['/contact', t.nav.contact]]
  return (
    <header className={'nav' + (solid || open ? ' solid' : '')}>
      <div className="wrap nav-in">
        <Link to="/" className="brand" aria-label="Maison Clé"><img src="/logo-mark.png" alt="" width="40" height="26" /><span>Maison Clé</span></Link>
        <nav className={'links' + (open ? ' open' : '')} aria-label="Main">
          {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
          <Link to="/contact?tab=book" className="btn gold sm">{t.nav.book}</Link>
          <div className="menu-cta">
            <a href="tel:+31626555881" className="btn ghost"><Phone size={16} /> {t.hero.call}</a>
            <a href="https://wa.me/31626555881" target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={16} /> WhatsApp</a>
          </div>
        </nav>
        <LanguageSwitcher />
        <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={t.nav.menu}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}
