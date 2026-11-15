import { useEffect, useRef } from 'react'
// Fades children in once when scrolled into view. Respects reduced motion via CSS.
export default function Reveal({ as: Tag = 'div', className = '', children }) {
  const ref = useRef()
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.classList.add('in'); io.disconnect() } }, { threshold: 0.15 })
    io.observe(ref.current); return () => io.disconnect()
  }, [])
  return <Tag ref={ref} className={'reveal ' + className}>{children}</Tag>
}
