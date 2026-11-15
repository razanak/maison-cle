import { useLang } from '../data/lang'
export default function Legal() {
  const { t } = useLang(); const l = t.legal
  return (
    <>
      <section className="page-h"><div className="wrap"><h1 className="serif">{l.h}</h1><p>{l.note}</p></div></section>
      <section className="sec"><div className="wrap legal">
        <h2 className="serif">{l.pH}</h2>{l.p.map((x) => <p key={x}>{x}</p>)}
        <h2 className="serif">{l.tH}</h2>{l.t.map((x) => <p key={x}>{x}</p>)}
      </div></section>
    </>
  )
}
