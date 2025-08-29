export default function FAQ() {
  const faqs = [
    { q: 'Qual o tempo de instalação?', a: 'O tempo médio é de 7 a 15 dias úteis, dependendo da disponibilidade de infraestrutura.' },
    { q: 'Vocês oferecem suporte 24/7?', a: 'Sim, nosso suporte técnico é 24/7 para clientes empresariais.' },
    { q: 'Posso portar meu número?', a: 'Sim, oferecemos portabilidade de números sem complicação.' },
  ]

  return (
  <section id="faq" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-header">
      <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
      <div className="space-y-3">
        {faqs.map(item => (
          <details key={item.q} className="bg-white border rounded-lg p-4">
            <summary className="font-medium">{item.q}</summary>
            <p className="mt-2 text-sm text-slate-600">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
