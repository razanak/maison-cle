import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Users, Euro, Clock, SprayCan, ShieldCheck } from 'lucide-react'
import { useLang } from '../data/lang'
import { services } from '../data/services'
import { reviews } from '../data/reviews'
import ServiceCard from '../components/ServiceCard'
import Gallery from '../components/Gallery'
import ReviewCard from '../components/ReviewCard'
import Reveal from '../components/Reveal'

const whyIcons = [Users, Euro, Clock, SprayCan, ShieldCheck]
export default function Home() {
  const { t } = useLang()
  return (
    <>
      <section className="hero photo" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
        <div className="wrap hero-in">
          <div className="hero-t">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="serif">{t.hero.h}</h1>
            <p>{t.hero.p}</p>
            <div className="row">
              <Link to="/contact?tab=book" className="btn gold">{t.hero.c2}</Link>
              <a href="tel:+31626555881" className="btn ghost"><Phone size={16} /> {t.hero.call}</a>
              <a href="https://wa.me/31626555881" target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={16} /> {t.hero.wa}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="sec ivory"><div className="wrap">
        <h2 className="serif">{t.services.h}</h2>
        <div className="cards">{services.filter((s) => s.featured).map((s) => <Reveal key={s.id}><ServiceCard s={s} /></Reveal>)}</div>
        <p className="center"><Link to="/prices" className="btn gold">{t.services.all}</Link></p>
      </div></section>

      <section className="sec navy"><div className="wrap why">
        <h2 className="serif">{t.why.h}</h2><p className="sub">{t.why.sub}</p>
        <ul>{t.why.items.map((x, i) => { const I = whyIcons[i]; return <li key={x}><span><I size={22} /></span>{x}</li> })}</ul>
      </div></section>

      <section className="sec ivory"><div className="wrap">
        <h2 className="serif">{t.steps.h}</h2>
        <ol className="how">{t.steps.list.map(([h, p], i) => <li key={h}><b>{i + 1}</b><h3 className="serif">{h}</h3><p>{p}</p></li>)}</ol>
      </div></section>

      <section className="sec"><div className="wrap"><h2 className="serif">{t.gallery.h}</h2><Gallery /></div></section>

      {reviews.length > 0 && (
        <section className="sec ivory"><div className="wrap">
          <h2 className="serif">{t.reviews.h}</h2>
          <div className="cards three">{reviews.map((r) => <ReviewCard key={r.name} r={r} />)}</div>
        </div></section>
      )}

      <section className="sec navy cta"><div className="wrap">
        <h2 className="serif">{t.cta.h}</h2><p>{t.cta.p}</p>
        <Link to="/contact?tab=book" className="btn gold">{t.cta.b}</Link>
      </div></section>
    </>
  )
}
