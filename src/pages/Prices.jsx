import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Minus, ArrowRight, PencilRuler } from 'lucide-react'
import { useLang } from '../data/lang'
import { services } from '../data/services'
import Media from '../components/Media'

const freqIds = ['once', 'weekly', 'biweekly', 'other']
export default function Prices() {
  const { t } = useLang(); const p = t.prices; const b = p.builder; const f = t.contact.f
  const [service, setService] = useState('')
  const [size, setSize] = useState(80)
  const [freq, setFreq] = useState('once')
  const [extras, setExtras] = useState([])
  const toggle = (x) => setExtras((e) => (e.includes(x) ? e.filter((y) => y !== x) : [...e, x]))
  const q = new URLSearchParams({ tab: 'book', service, size, freq, extras: extras.join(', ') }).toString()
  return (
    <>
      <section className="page-h"><div className="wrap"><h1 className="serif">{p.h}</h1><p>{p.intro}</p></div></section>

      <section className="sec ivory"><div className="wrap">
        <h2 className="serif">{b.h}</h2><p className="lead">{b.sub}</p>
        <div className="builder">
          <div className="steps-col">
            <fieldset><legend><i>1</i>{b.s1}</legend>
              <div className="tiles">
                {services.map((s) => { const Icon = s.icon; return (
                  <button type="button" key={s.id} className={'tile' + (service === s.id ? ' on' : '')} aria-pressed={service === s.id} onClick={() => setService(s.id)}>
                    <Media s={s} className="tile-img"><span><Icon size={16} /></span></Media>
                    <b>{t.services.list[s.id][0]}</b>
                  </button>) })}
              </div>
            </fieldset>
            <fieldset><legend><i>2</i>{b.s2}</legend>
              <div className="range"><input type="range" min="20" max="500" step="10" value={size} onChange={(e) => setSize(e.target.value)} aria-label={b.s2} /><output>{size >= 500 ? '500+' : size} m²</output></div>
            </fieldset>
            <fieldset><legend><i>3</i>{b.s3}</legend>
              <div className="pills">{freqIds.map((id) => <button type="button" key={id} className={freq === id ? 'on' : ''} aria-pressed={freq === id} onClick={() => setFreq(id)}>{f[id]}</button>)}</div>
            </fieldset>
            <fieldset><legend><i>4</i>{b.s4}</legend>
              <div className="pills">{p.addons.map((a) => <button type="button" key={a} className={extras.includes(a) ? 'on' : ''} aria-pressed={extras.includes(a)} onClick={() => toggle(a)}>{a}</button>)}</div>
            </fieldset>
          </div>
          <aside className="sum">
            <h3 className="serif">{b.yours}</h3>
            <dl>
              <dt>{f.service}</dt><dd>{service ? t.services.list[service][0] : b.none}</dd>
              <dt>{f.size}</dt><dd>{size >= 500 ? '500+' : size} m²</dd>
              <dt>{f.freq}</dt><dd>{f[freq]}</dd>
              {extras.length > 0 && <><dt>{b.s4}</dt><dd>{extras.join(', ')}</dd></>}
            </dl>
            <Link to={'/contact?' + q} className={'btn gold' + (service ? '' : ' disabled')} aria-disabled={!service} onClick={(e) => !service && e.preventDefault()}>{b.go} <ArrowRight size={16} /></Link>
            <small><Check size={14} /> {b.free}</small>
          </aside>
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <h2 className="serif">{p.compare.h}</h2><p className="lead">{p.compare.sub}</p>
        <div className="tablewrap"><table className="cmp">
          <thead><tr><th></th>{p.compare.cols.map((c) => <th key={c}>{c}</th>)}</tr></thead>
          <tbody>{p.compare.rows.map(([label, v]) => (
            <tr key={label}><th scope="row">{label}</th>{v.map((x, i) => <td key={i}>{x ? <Check size={18} className="y" aria-label="yes" /> : <Minus size={18} className="n" aria-label="no" />}</td>)}</tr>
          ))}</tbody>
        </table></div>
      </div></section>

      <section className="sec ivory"><div className="wrap two">
        <div><h2 className="serif">{p.faqH}</h2><div className="faq">{p.faq.map(([qq, a]) => <details key={qq}><summary>{qq}</summary><p>{a}</p></details>)}</div></div>
        <div className="custom-box"><PencilRuler size={30} /><h3 className="serif">{p.custom.h}</h3><p>{p.custom.p}</p><Link to="/contact?tab=contact" className="btn gold">{p.custom.b}</Link></div>
      </div></section>
    </>
  )
}
