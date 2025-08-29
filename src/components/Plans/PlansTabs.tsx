import PlanCard from './PlanCard'
import { Plan as PlanType } from '../../types'

type Props = {
  plans: PlanType[]
}

export default function PlansTabs({ plans }: Props) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.id} className="h-full">
            <PlanCard plan={p} />
          </div>
        ))}
      </div>
    </div>
  )
}
