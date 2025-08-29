import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [hideTop, setHideTop] = useState(false)

  useEffect(() => {
    let lastY = 0
    function onScroll() {
      const y = window.scrollY || 0
      // esconder a faixa superior quando rolar para baixo além de 20px
      if (y > 20) setHideTop(true)
      else setHideTop(false)
      lastY = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* faixa superior clara */}
  <div className={`bg-white/90 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${hideTop ? '-translate-y-full opacity-0 pointer-events-none border-b-0' : 'translate-y-0 opacity-100 border-b'}`}>
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between text-xs text-slate-400">
          <div>
            <span className="hidden sm:inline">Suporte 24/7:</span>
            <a href="tel:+551199999999" className="ml-2 font-medium text-slate-600">(11) 99999-9999</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-slate-500">Atendimento comercial</span>
            <a href="#contrate" className="bg-amber-500 text-primary-900 px-3 py-1 rounded-md font-semibold">Contrate já</a>
          </div>
        </div>
      </div>

      {/* header principal escuro */}
      <div className={`bg-primary-900 text-white transform transition-all duration-300 ${hideTop ? '-mt-10' : 'mt-0'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-800 to-primary-900 rounded flex items-center justify-center text-white font-bold">T</div>
          </div>

          <nav className="hidden lg:flex gap-8 text-sm font-medium items-center">
            <a href="#hero" className="hover:text-slate-200">Home</a>
            <a href="#servicos" className="hover:text-slate-200">Serviços</a>
            <a href="#planos" className="hover:text-slate-200">Planos</a>
            <a href="#empresa" className="hover:text-slate-200">Empresa</a>
            <a href="#faq" className="hover:text-slate-200">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#planos" className="text-sm font-medium hover:text-slate-200">Verificar disponibilidade</a>
            <button className="lg:hidden p-2">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
