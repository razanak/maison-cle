import { Link } from 'react-router-dom'
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react'
import { useLang } from '../data/lang'
// Sticky action bar, shown on phones and tablets only.
export default function MobileBar() {
  const { t } = useLang()
  return (
    <div className="mbar">
      <a href="tel:+31626555881"><Phone size={18} /> {t.hero.call}</a>
      <a href="https://wa.me/31626555881" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
      <Link to="/contact?tab=book" className="main"><CalendarCheck size={18} /> {t.nav.book}</Link>
    </div>
  )
}
