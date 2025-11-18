import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function Contact(){
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('Message sent! We will reply soon.')
      setForm({ name: '', email: '', message: '' })
    } catch (err){
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Get in touch</h2>
          <p className="mt-3 text-slate-600">Have a question? Send us a message and we'll get right back.</p>

          <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-4">
            <input required className="w-full border border-slate-300 rounded-lg px-4 py-2" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
            <input required type="email" className="w-full border border-slate-300 rounded-lg px-4 py-2" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
            <textarea required rows={5} className="w-full border border-slate-300 rounded-lg px-4 py-2" placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />

            <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg inline-flex items-center gap-2"><Mail size={18}/> Send</button>
          </form>
          {status && (<p className="mt-4 text-sm text-slate-700">{status}</p>)}
        </div>

        <div className="rounded-2xl border border-slate-200 p-6 bg-white">
          <h3 className="font-semibold text-slate-900">Visit us</h3>
          <p className="text-sm text-slate-600 mt-2">123 Pet Street, Hometown</p>
          <p className="text-sm text-slate-600">Open daily 8am–8pm</p>
          <div className="mt-6 aspect-video rounded-xl overflow-hidden border border-slate-200">
            <iframe title="map" className="w-full h-full" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.14%2C51.50%2C-0.12%2C51.51&layer=mapnik" />
          </div>
        </div>
      </div>
    </section>
  )
}
