import SectionTransitionBackground from './SectionTransitionBackground'

export default function Company() {
  return (
  <section id="empresa" className="bg-slate-50 py-16 relative overflow-hidden scroll-mt-header">
      <SectionTransitionBackground />
  <div className="max-w-6xl mx-auto px-6 space-y-12 relative z-10 section-arrive">

        {/* Overview */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold">Sobre a nossa empresa</h2>
          <p className="mt-4 text-slate-700 max-w-3xl mx-auto">Somos uma operadora especializada em soluções de conectividade e comunicação para empresas de todos os tamanhos. Oferecemos fibra dedicada, serviços gerenciados, soluções de voz e segurança com SLA robusto e suporte 24/7.</p>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Nossa missão</h3>
            <p className="text-slate-600">Entregar conectividade confiável e soluções que aumentem a produtividade das empresas, com transparência e alto padrão de atendimento.</p>
            <h4 className="mt-4 font-medium">Nossos valores</h4>
            <ul className="mt-2 list-disc ml-5 text-slate-700 space-y-1">
              <li>Compromisso com o cliente</li>
              <li>Transparência operacional</li>
              <li>Inovação contínua</li>
            </ul>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Nossa visão</h3>
            <p className="text-slate-600">Ser referência em conectividade empresarial no país, entregando soluções escaláveis que suportem o crescimento dos nossos clientes.</p>
          </div>
        </div>

        {/* Numbers / KPIs */}
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Nossos números</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">1.200+</div>
              <div className="text-sm text-slate-600">Clientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-sm text-slate-600">Uptime médio</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-slate-600">Suporte</div>
            </div>
            <div>
              <div className="text-3xl font-bold">+150</div>
              <div className="text-sm text-slate-600">Cidades atendidas</div>
            </div>
          </div>
        </div>

        {/* Clientes / Logos (placeholders) */}
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Alguns clientes</h3>
          <p className="text-slate-600 mb-4">Parceiros e clientes que confiam nas nossas soluções.</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center">
            <div className="h-12 bg-slate-100 rounded flex items-center justify-center">Logo</div>
            <div className="h-12 bg-slate-100 rounded flex items-center justify-center">Logo</div>
            <div className="h-12 bg-slate-100 rounded flex items-center justify-center">Logo</div>
            <div className="h-12 bg-slate-100 rounded flex items-center justify-center">Logo</div>
            <div className="h-12 bg-slate-100 rounded flex items-center justify-center">Logo</div>
            <div className="h-12 bg-slate-100 rounded flex items-center justify-center">Logo</div>
          </div>
        </div>

        {/* History / Team */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Nossa história</h3>
            <p className="text-slate-600">Fundada com o objetivo de levar conectividade de alta qualidade a empresas, crescemos rapidamente graças à nossa proposta técnica e foco em atendimento, hoje somos presentes em dezenas de cidades com uma equipe técnica própria.</p>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Time</h3>
            <p className="text-slate-600">Equipe multidisciplinar com profissionais de rede, suporte, vendas e desenvolvimento — todos focados em entregar resultados reais para o cliente.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
