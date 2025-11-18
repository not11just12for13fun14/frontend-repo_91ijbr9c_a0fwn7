import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-white to-white" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-sky-300/30 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Compassionate care for your best friend
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg text-slate-600"
          >
            Same-day appointments, modern facilities, and a team that treats every pet like family.
          </motion.p>

          <div className="mt-6 flex items-center gap-3">
            <a href="#appointment" className="px-5 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700">Book an appointment</a>
            <a href="#services" className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50">Our services</a>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-slate-500 text-sm">
            <Sparkles className="text-blue-600" size={18} />
            <span>Open 7 days • Emergency care available</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="relative"
        >
          <img src="/vet-hero.jpg" alt="Vet caring for a dog" className="rounded-2xl shadow-xl w-full object-cover" />
          <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur rounded-xl p-3 shadow flex items-center gap-3 border border-slate-200">
            <div className="w-10 h-10 rounded-full bg-blue-100" />
            <div>
              <p className="text-sm font-semibold text-slate-800">Dr. Amy</p>
              <p className="text-xs text-slate-500">22 years of experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
