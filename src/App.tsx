import Header from './components/Header'
import Hero from './components/Hero/Hero'
import ContactForm from './components/Contact/ContactForm'
import Services from './components/Services'
import Company from './components/Company'
import FAQ from './components/FAQ'
import Plans from './components/Plans'

export default function App() {
  return (
  <div className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">
      <Header />

      <main className="pt-24">
        <Hero />
        <Services />
        <Plans />
        <Company />
        <FAQ />
      </main>

      <footer className="border-t py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-600">© 2025 Telecom — Todos os direitos reservados</div>
      </footer>

      <div className="fixed bottom-6 right-6">
        <ContactForm />
      </div>
    </div>
  )
}
