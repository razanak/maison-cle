import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { useLang } from '../data/lang'
const imgs = [['hero.jpg', 'Cleaner wiping a white kitchen island'], ['gallery/keyboard.jpg', 'Disinfecting an office keyboard'], ['gallery/kitchen.jpg', 'Cleaning a kitchen counter and sink'], ['gallery/desk.jpg', 'Gloved hands wiping a desk'], ['living.jpg', 'Bright living room'], ['cabin.jpg', 'Holiday cabins']]
export default function Gallery() {
  const { t } = useLang()
  const [i, setI] = useState(null)
  useEffect(() => {
    if (i === null) return
    const k = (e) => e.key === 'Escape' && setI(null)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [i])
  return (
    <>
      <div className="grid-g">
        {imgs.map(([f, alt], n) => (
          <button key={f} className={'g' + n} onClick={() => setI(n)}><img src={'/images/' + f} alt={alt} loading="lazy" /></button>
        ))}
      </div>
      {i !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setI(null)}>
          <button aria-label={t.gallery.close} onClick={() => setI(null)}><X /></button>
          <img src={'/images/' + imgs[i][0]} alt={imgs[i][1]} />
        </div>
      )}
    </>
  )
}
