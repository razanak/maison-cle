import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'
const Ctx = createContext()
export const useLang = () => useContext(Ctx)
export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'nl')
  useEffect(() => { document.documentElement.lang = lang; localStorage.setItem('lang', lang) }, [lang])
  return <Ctx.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</Ctx.Provider>
}
