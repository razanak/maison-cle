import { Link } from 'react-router-dom'
import { useLang } from '../data/lang'
import Media from './Media'
export default function ServiceCard({ s }) {
  const { t } = useLang()
  const [title, desc] = t.services.list[s.id]
  const Icon = s.icon
  return (
    <article className="card">
      <Media s={s} className="card-img"><span><Icon size={22} /></span></Media>
      <div className="card-b">
        <h3 className="serif">{title}</h3><p>{desc}</p>
        <Link className="more" to={`/contact?tab=book&service=${s.id}`}>{t.services.more}</Link>
      </div>
    </article>
  )
}
