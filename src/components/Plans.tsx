import { plans } from '../data/plans'
import PlansTabs from './Plans/PlansTabs'
import SectionTransitionBackground from './SectionTransitionBackground'

export default function Plans() {

  return (
  <section id="planos" className="max-w-6xl mx-auto p-6 relative overflow-hidden scroll-mt-header">
      <SectionTransitionBackground />
      <div className="relative z-10 section-arrive">
        <h2 className="text-2xl font-bold mb-4">Nossos Planos</h2>
        <PlansTabs plans={plans} />
      </div>
    </section>
  )
}
