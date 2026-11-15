import { Briefcase, Building2, Brush, Home, KeyRound, PackageCheck, Sofa, Sparkles, Store, UtensilsCrossed } from 'lucide-react'
// To add a service: add one line here + its text in translations.js (services.list). Images are optional.
// cat: private | business | specialist.  featured: shown on the Home page.
// Photos: drop a file named <id>.jpg into public/images/services/ (e.g. office.jpg) or set img below.
const list = [
  { id: 'office', cat: 'business', icon: Briefcase, featured: true },
  { id: 'hotel', cat: 'business', icon: Building2, featured: true },
  { id: 'holiday', cat: 'private', icon: KeyRound, img: '/images/cabin.jpg', featured: true },
  { id: 'residential', cat: 'private', icon: Home, img: '/images/hero.jpg', featured: true },
  { id: 'horeca', cat: 'business', icon: UtensilsCrossed },
  { id: 'endofstay', cat: 'private', icon: PackageCheck, img: '/images/living.jpg' },
  { id: 'deep', cat: 'specialist', icon: Sparkles },
  { id: 'upholstery', cat: 'specialist', icon: Sofa },
  { id: 'floors', cat: 'specialist', icon: Brush },
]
export const services = list.map((s) => ({ ...s, img: s.img ?? `/images/services/${s.id}.jpg` }))
