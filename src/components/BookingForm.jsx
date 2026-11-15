import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { useLang } from '../data/lang'
import { services } from '../data/services'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

export default function BookingForm({ mode, presetService = '', presetSize = '', presetFreq = '', presetNotes = '' }) {
  const { t } = useLang()
  const f = t.contact.f
  const book = mode === 'book'
  const [state, setState] = useState('idle') // idle | sending | ok | fail
  const [errors, setErrors] = useState({})

  async function submit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data.website) return // honeypot: bots fill this
    const er = {}
    ;['name', 'email', 'service', ...(book ? ['date', 'address'] : ['message'])].forEach((k) => { if (!data[k]?.trim()) er[k] = t.contact.err.required })
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) er.email = t.contact.err.email
    if (!data.consent) er.consent = t.contact.err.consent
    setErrors(er)
    if (Object.keys(er).length) { form.querySelector('[aria-invalid="true"]')?.focus(); return }
    setState('sending')
    try {
      if (!ENDPOINT) throw new Error('No form endpoint configured (see README)')
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ type: mode, ...data }) })
      if (!res.ok) throw new Error(res.status)
      setState('ok'); form.reset()
    } catch (err) { console.error(err); setState('fail') }
  }

  if (state === 'ok') return <div className="ok" role="status"><CheckCircle2 size={36} /><p>{t.contact.ok}</p></div>

  const F = ({ k, label, children, full }) => (
    <label className={'fld' + (full ? ' full' : '')}>
      <span>{label}</span>{children}
      {errors[k] && <em role="alert">{errors[k]}</em>}
    </label>
  )
  const inv = (k) => ({ name: k, 'aria-invalid': !!errors[k] })
  const svcSelect = (
    <select {...inv('service')} defaultValue={presetService}>
      <option value="">{f.choose}</option>
      {services.map((s) => <option key={s.id} value={s.id}>{t.services.list[s.id][0]}</option>)}
    </select>
  )
  return (
    <form onSubmit={submit} noValidate className="form">
      <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true" />
      <F k="name" label={f.name}><input {...inv('name')} autoComplete="name" /></F>
      <F k="email" label={f.email}><input {...inv('email')} type="email" autoComplete="email" /></F>
      <F k="phone" label={f.phone}><input name="phone" type="tel" autoComplete="tel" /></F>
      <F k="service" label={f.service}>{svcSelect}</F>
      {book ? (
        <>
          <F k="property" label={f.property}><select name="property">{f.props.map((p) => <option key={p}>{p}</option>)}</select></F>
          <F k="date" label={f.date}><input {...inv('date')} type="date" min={new Date().toISOString().slice(0, 10)} /></F>
          <F k="time" label={f.time}><select name="time"><option>{f.morning}</option><option>{f.afternoon}</option><option>{f.evening}</option></select></F>
          <F k="address" label={f.address}><input {...inv('address')} autoComplete="postal-code" /></F>
          <F k="size" label={f.size}><input name="size" type="number" min="1" inputMode="numeric" defaultValue={presetSize} /></F>
          <F k="freq" label={f.freq}><select name="freq" defaultValue={f[presetFreq] || f.once}><option>{f.once}</option><option>{f.weekly}</option><option>{f.biweekly}</option><option>{f.other}</option></select></F>
          <F k="notes" label={f.notes} full><textarea name="notes" rows="3" defaultValue={presetNotes && `${t.prices.builder.s4}: ${presetNotes}`} /></F>
        </>
      ) : (
        <F k="message" label={f.message} full><textarea {...inv('message')} rows="5" /></F>
      )}
      <label className="consent full"><input type="checkbox" name="consent" aria-invalid={!!errors.consent} /> <span>{f.consent}</span></label>
      {errors.consent && <em className="full err" role="alert">{errors.consent}</em>}
      {state === 'fail' && <p className="full err" role="alert">{t.contact.err.fail}</p>}
      <button className="btn gold full" disabled={state === 'sending'}>{state === 'sending' ? f.sending : f.send}</button>
      <p className="full note">{t.contact.response}</p>
    </form>
  )
}
