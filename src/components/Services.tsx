import SectionTransitionBackground from './SectionTransitionBackground'
export default function Services() {
  const services = [
    { title: 'Internet Dedicada', desc: 'Links simétricos com SLA 99.9% — planos de 150 Mbps, 350 Mbps e 1 Gbps. Ideal para operações com alto consumo de dados.' },
    { title: 'Telefonia IP', desc: 'SIP Trunk, PABX na nuvem e integração com CRM — tarifação transparente e roteamento inteligente.' },
    { title: 'Segurança Gerenciada', desc: 'Firewall gerenciado, proteção contra DDoS e VPNs corporativas com monitoramento 24/7.' },
    { title: 'Suporte & Monitoramento', desc: 'Equipe dedicada com monitoramento proativo, playbooks de resposta e SLA personalizado.' },
  ]

    return (
    <section id="servicos" className="max-w-6xl mx-auto px-6 py-12 relative overflow-hidden scroll-mt-header">
        <SectionTransitionBackground />
    <div className="relative z-10 section-arrive">
          <h2 className="text-2xl font-bold mb-6">Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="bg-white border rounded-lg p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
