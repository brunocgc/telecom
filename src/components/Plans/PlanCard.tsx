import { Plan } from '../../types'

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="relative">
      {plan.promoBadge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-700 text-white text-sm px-3 py-1 rounded-full shadow">{plan.promoBadge}</div>
      )}

      <div className="bg-white border rounded-xl p-6 shadow-lg h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
          <p className="text-slate-500 mt-1">Velocidade: {plan.speed ?? '—'}</p>
          <div className="mt-4 text-3xl font-extrabold">R$ {plan.price.toFixed(2)} <span className="text-base font-medium">/{plan.period}</span></div>
          <ul className="mt-4 space-y-2 text-slate-700">
            {plan.perks.map((perk: string) => (
              <li key={perk} className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button className="bg-slate-700 text-white px-4 py-3 rounded-md shadow-md">Contrate Agora</button>
          <button className="border border-slate-200 px-4 py-3 rounded-md">Saiba mais</button>
        </div>
      </div>
    </div>
  )
}
