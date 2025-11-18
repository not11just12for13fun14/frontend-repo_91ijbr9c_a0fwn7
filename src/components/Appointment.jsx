import { useState } from 'react'

export default function Appointment(){
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({
    name: '', email: '', phone: '', pet_name: '', pet_type: 'Dog', preferred_date: '', message: ''
  })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const payload = { ...form, preferred_date: new Date(form.preferred_date).toISOString() }
      const res = await fetch(`${baseUrl}/api/appointments`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('Request received. We will confirm shortly!')
      setForm({ name: '', email: '', phone: '', pet_name: '', pet_type: 'Dog', preferred_date: '', message: '' })
    } catch (err){
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <section id="appointment" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Book an appointment</h2>
          <p className="mt-3 text-slate-600">Tell us a little about your pet and preferred time. We'll get back to you to confirm.</p>

          <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-4">
            <input required className="w-full border border-slate-300 rounded-lg px-4 py-2" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
            <input required type="email" className="w-full border border-slate-300 rounded-lg px-4 py-2" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
            <input className="w-full border border-slate-300 rounded-lg px-4 py-2" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
            <div className="grid grid-cols-2 gap-4">
              <input required className="w-full border border-slate-300 rounded-lg px-4 py-2" placeholder="Pet name" value={form.pet_name} onChange={e=>setForm({...form,pet_name:e.target.value})} />
              <select className="w-full border border-slate-300 rounded-lg px-4 py-2" value={form.pet_type} onChange={e=>setForm({...form,pet_type:e.target.value})}>
                {['Dog','Cat','Bird','Rabbit','Other'].map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <input required type="datetime-local" className="w-full border border-slate-300 rounded-lg px-4 py-2" value={form.preferred_date} onChange={e=>setForm({...form,preferred_date:e.target.value})} />
            <textarea rows={4} className="w-full border border-slate-300 rounded-lg px-4 py-2" placeholder="Additional details" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />

            <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg">Submit request</button>
          </form>

          {status && (<p className="mt-4 text-sm text-slate-700">{status}</p>)}
        </div>

        <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-blue-50 to-white">
          <h3 className="font-semibold text-slate-900">What to expect</h3>
          <ul className="mt-3 text-sm text-slate-600 list-disc pl-5 space-y-1">
            <li>We'll confirm your time by email or phone</li>
            <li>Please bring previous medical records if available</li>
            <li>Free treats and cuddles provided on arrival</li>
          </ul>
          <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200">
            <p className="text-sm text-slate-600">Tip: Morning slots are less busy and great for nervous pets.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
