import { Link } from 'react-router-dom'
import { useLang } from '../data/lang'
import Reveal from '../components/Reveal'
export default function About() {
  const { t } = useLang(); const a = t.about
  return (
    <>
      <section className="page-h"><div className="wrap"><h1 className="serif">{a.h}</h1><p>{a.intro}</p></div></section>
      <section className="sec"><div className="wrap two">
        <Reveal><h2 className="serif">{a.storyH}</h2>{a.story.map((x, i) => <p key={i} className={i === a.story.length - 1 ? 'it tagline' : ''}>{x}</p>)}</Reveal>
        <Reveal><h2 className="serif">{a.missionH}</h2><p>{a.mission}</p></Reveal>
      </div></section>
      <section className="sec ivory"><div className="wrap">
        <h2 className="serif">{a.valuesH}</h2>
        <ul className="chips">{a.values.map((v) => <li key={v}>{v}</li>)}</ul>
        <h2 className="serif">{a.approachH}</h2>
        <ol className="steps">{a.approach.map((s) => <li key={s}>{s}</li>)}</ol>
      </div></section>
      <section className="sec"><div className="wrap">
        <h2 className="serif">{a.whoH}</h2>
        <ul className="chips">{a.who.map((v) => <li key={v}>{v}</li>)}</ul>
        <Link to="/contact" className="btn gold">{t.cta.b}</Link>
      </div></section>
    </>
  )
}
