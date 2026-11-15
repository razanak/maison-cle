import { useState } from 'react'
// Shows a service photo; if the file is missing it falls back to a navy panel (class "noimg").
export default function Media({ s, className, children }) {
  const [ok, setOk] = useState(true)
  return (
    <div className={className + (ok ? '' : ' noimg')}>
      {ok && <img src={s.img} alt="" loading="lazy" onError={() => setOk(false)} />}
      {children}
    </div>
  )
}
