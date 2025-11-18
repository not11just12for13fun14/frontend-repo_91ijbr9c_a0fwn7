import { Stethoscope, Syringe, Dog, Cat } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Wellness Exams',
    desc: 'Comprehensive checkups to keep your pet healthy and happy.'
  },
  {
    icon: Syringe,
    title: 'Vaccinations',
    desc: 'Core and lifestyle vaccines tailored to your pet.'
  },
  {
    icon: Dog,
    title: 'Dental Care',
    desc: 'Cleaning, polishing, and dental X-rays for fresh smiles.'
  },
  {
    icon: Cat,
    title: 'Diagnostics',
    desc: 'In-house lab, digital X-ray, and ultrasound for fast answers.'
  }
]

export default function Services(){
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Services</h2>
        <p className="mt-3 text-slate-600 text-center">Everything your pet needs in one place</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({icon: Icon, title, desc}) => (
            <div key={title} className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow transition">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Icon />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="text-sm text-slate-600 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
