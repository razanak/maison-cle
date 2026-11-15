import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import MobileBar from './components/MobileBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Prices from './pages/Prices'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import { useLang } from './data/lang'

export default function App() {
  const { pathname } = useLocation()
  const { lang } = useLang()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  useEffect(() => {
    const names = { '/': '', '/about': ' – ' + (lang === 'nl' ? 'Over ons' : 'About'), '/prices': ' – ' + (lang === 'nl' ? 'Prijzen' : 'Prices'), '/contact': ' – Contact', '/privacy': ' – Privacy' }
    document.title = 'Maison Clé' + (names[pathname] ?? '')
  }, [pathname, lang])
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
