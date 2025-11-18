import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Appointment from './components/Appointment'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Appointment />
        <Contact />
        <footer className="py-10 text-center text-sm text-slate-500 border-t border-slate-200">
          © {new Date().getFullYear()} Blue Paws Veterinary Clinic — All rights reserved
        </footer>
      </main>
    </div>
  )
}

export default App
