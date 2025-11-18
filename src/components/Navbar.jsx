import { useState } from 'react'
import { PawPrint, Phone, Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 dark:bg-slate-900/70 border-b border-slate-200/50 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-600 text-white shadow">
              <PawPrint size={20} />
            </div>
            <span className="font-bold text-slate-900 dark:text-white">Blue Paws Vet</span>
          </button>

          <nav className="hidden md:flex items-center gap-6 text-slate-700 dark:text-slate-200">
            <button onClick={() => scrollTo('services')} className="hover:text-blue-600">Services</button>
            <button onClick={() => scrollTo('appointment')} className="hover:text-blue-600">Book</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-blue-600">Contact</button>
            <a href="tel:+15551234567" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
              <Phone size={16} /> Call</a>
          </nav>

          <button className="md:hidden p-2 text-slate-700 dark:text-slate-200" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 grid gap-2 text-slate-700 dark:text-slate-200">
            <button onClick={() => scrollTo('services')} className="text-left px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">Services</button>
            <button onClick={() => scrollTo('appointment')} className="text-left px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">Book</button>
            <button onClick={() => scrollTo('contact')} className="text-left px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">Contact</button>
            <a href="tel:+15551234567" className="px-2 py-2 rounded bg-blue-600 text-white">Call us</a>
          </div>
        )}
      </div>
    </header>
  )
}
