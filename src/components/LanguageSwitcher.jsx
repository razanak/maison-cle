import { useLang } from '../data/lang'
export default function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang" role="group" aria-label="Language">
      {['nl', 'en'].map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={lang === l ? 'on' : ''}>{l.toUpperCase()}</button>
      ))}
    </div>
  )
}
