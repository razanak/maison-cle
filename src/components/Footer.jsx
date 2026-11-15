import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useLang } from '../data/lang'
import LanguageSwitcher from './LanguageSwitcher'
export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div><img className="foot-logo" src="/logo.png" alt="Maison Clé – Schoonmaakbedrijf" /><p className="it">{t.footer.tag}</p></div>
        <div className="stack">
          <a href="tel:+31626555881"><Phone size={16} /> +31 6 26555881</a>
          <a href="mailto:maisoncleaning@outlook.com"><Mail size={16} /> maisoncleaning@outlook.com</a>
          <span><MapPin size={16} /> {t.contact.area}</span>
          <span>KvK: 42168020</span>
        </div>
        <div className="stack">
          <b>{t.footer.links}</b>
          <Link to="/">{t.nav.home}</Link><Link to="/about">{t.nav.about}</Link><Link to="/prices">{t.nav.prices}</Link><Link to="/contact">{t.nav.contact}</Link><Link to="/privacy">{t.footer.legal}</Link>
          <LanguageSwitcher />
        </div>
      </div>
      <p className="wrap copy">© {new Date().getFullYear()} Maison Clé. {t.footer.rights}</p>
    </footer>
  )
}
