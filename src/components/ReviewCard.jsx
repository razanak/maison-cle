import { Star } from 'lucide-react'
import { useLang } from '../data/lang'
export default function ReviewCard({ r }) {
  const { lang } = useLang()
  return (
    <figure className="review">
      <div className="stars" aria-label={`${r.rating}/5`}>{Array.from({ length: r.rating }, (_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
      <blockquote>{r[lang]}</blockquote>
      <figcaption>{r.name}</figcaption>
    </figure>
  )
}
