import { useSearchParams } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useLang } from '../data/lang'
import BookingForm from '../components/BookingForm'
export default function Contact() {
  const { t } = useLang(); const c = t.contact
  const [params, setParams] = useSearchParams()
  const mode = params.get('tab') === 'contact' ? 'contact' : 'book'
  const service = params.get('service') || ''
  const size = params.get('size') || ''; const freq = params.get('freq') || ''; const extras = params.get('extras') || ''
  return (
    <>
      <section className="page-h"><div className="wrap"><h1 className="serif">{c.h}</h1><p>{c.response}</p></div></section>
      <section className="sec"><div className="wrap split">
        <aside className="info">
          <h2 className="serif">{c.details}</h2>
          <a href="tel:+31626555881"><Phone size={18} /> +31 6 26555881</a>
          <a href="mailto:maisoncleaning@outlook.com"><Mail size={18} /> maisoncleaning@outlook.com</a>
          <span><MapPin size={18} /> {c.area}</span>
          {/* Replace with a Google Maps embed once the business location is confirmed */}
          <iframe title={c.map} loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=3.3%2C50.7%2C7.3%2C53.6&layer=mapnik&marker=52.5126%2C6.0937" />
        </aside>
        <div>
          <div className="tabs" role="tablist">
            {['book', 'contact'].map((m) => (
              <button key={m} role="tab" aria-selected={mode === m} className={mode === m ? 'on' : ''} onClick={() => setParams({ tab: m })}>{m === 'book' ? c.tabBook : c.tabContact}</button>
            ))}
          </div>
          <BookingForm key={mode + service + size + freq + extras} mode={mode} presetService={service} presetSize={size} presetFreq={freq} presetNotes={extras} />
        </div>
      </div></section>
    </>
  )
}
