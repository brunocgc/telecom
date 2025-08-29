import Button from '../ui/Button'
import NetworkBackground from './NetworkBackground'
import SectionTransitionBackground from '../SectionTransitionBackground'

type Props = {
  title?: string
  subtitle?: string
}

export default function Hero({ title, subtitle }: Props) {
  return (
  <section id="hero" className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-slate-50 scroll-mt-header" style={{ minHeight: 'calc(100vh - 6rem)' }}>
      <SectionTransitionBackground />
      <NetworkBackground />
  <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center flex flex-col justify-center relative z-10 section-arrive">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-white/10 text-sm text-slate-200 px-4 py-2 rounded-full">
            <span className="text-xs">🚀</span>
            <span>Transforme sua internet hoje mesmo</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto text-white">
          {title ?? 'Conectividade que impulsiona o seu negócio'}
        </h1>

        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
          {subtitle ?? 'Fibra ultrarápida, soluções de voz e segurança gerenciável - instalação rápida e suporte 24/7.'}
        </p>

        <div className="mt-8 flex justify-center">
          <Button variant="primary" className="px-6 py-3">Contrate agora</Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">👥</div>
            <div className="font-semibold text-white">+1000 empresas</div>
            <div className="text-sm text-slate-300">Confiam em nossa plataforma</div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">⏱️</div>
            <div className="font-semibold text-white">24/7 Suporte</div>
            <div className="text-sm text-slate-300">Atendimento sempre disponível</div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">🔒</div>
            <div className="font-semibold text-white">100% Seguro</div>
            <div className="text-sm text-slate-300">Seus dados protegidos</div>
          </div>
        </div>
      </div>
    </section>
  )
}
