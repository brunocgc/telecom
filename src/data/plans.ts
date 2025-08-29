import type { Plan } from '../types'

export const plans: Plan[] = [
  { id: 'p1', name: 'Essencial', speed: '150 Mbps', price: 99.9, period: 'mês', perks: ['Instalação Grátis', 'Suporte 24/7'], promoBadge: 'Mais barato' },
  { id: 'p2', name: 'Avançado', speed: '350 Mbps', price: 139.9, period: 'mês', perks: ['Roteador Wi‑Fi 6', 'Suporte 24/7'] },
  { id: 'p3', name: 'Premium', speed: '1 Gbps', price: 249.9, period: 'mês', perks: ['Wi‑Fi Mesh', 'SLA 99.9%'], promoBadge: 'Popular' },
]
