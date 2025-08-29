# Plano de Landing Page — Empresa de Telecom

Este documento centraliza o planejamento para uma landing page de empresa de Telecom construída com React 19, TailwindCSS, Font Awesome e Radix / shadcn.

## Checklist de requisitos
- [x] Usar React 19
- [x] Usar TailwindCSS
- [x] Ícones em Font Awesome
- [x] Componentes Radix / ShadowCN (shadcn)
- [x] Landing page dividida em componentes
- [x] Referências: Algar, Claro, Gerax (conteúdo analisado e parafraseado)

## Sumário (o que está aqui)
- Sitemap proposto
- Lista de componentes reusáveis com contratos (TypeScript)
- Contratos de dados (Modelos/Interfaces)
- Conteúdo / copy inspirada nas referências
- CTAs e fluxos de conversão
- Acessibilidade, SEO e performance
- Tech stack e ferramentas recomendadas
- Estrutura de pastas sugerida
- Edge cases e riscos
- Próximos passos e opções de execução

## Sitemap (single-page / landing)
1. Header: logo, nav ancoras (Serviços, Planos, Empresas, Como Funciona, FAQ, Contato), CTA "Contratar / Simular".
2. Hero: título, subtítulo, formulário rápido de disponibilidade por CEP, CTA primário.
3. Principais Serviços / Soluções: Fibra, Internet Corporativa, Voz (SIP/PABX), Segurança/Cloud, IoT/5G privada.
4. Planos / Ofertas: cards (tabs) com preços, inclusos e botão "Consultar disponibilidade".
5. Benefícios / Diferenciais: velocidade, SLA, suporte 24/7, instalação grátis, Wi‑Fi Mesh.
6. Como Funciona: 3–4 passos (Solicitar → Ativação → Instalação → Suporte).
7. Depoimentos / Clientes: logos + quotes.
8. FAQ / Accordion.
9. CTA final / Banner de conversão.
10. Footer: contatos, telefones, links institucionais, redes sociais, política de privacidade.

## Componentes (reusáveis) — contratos e notas
Observação: usar TypeScript para contratos.

- Header
  - Props: { logoUrl: string; menuItems: {label:string; href:string}[]; onCTAClick: ()=>void }
  - Comportamento: responsivo, menu hambúrguer em mobile, CTA destacado

- Hero
  - Props: { title: string; subtitle?: string; ctaLabel: string; onCta: ()=>void; showCepForm?: boolean }
  - Função: opcional `onCheckCep(cep:string): Promise<{available:boolean; message?:string}>`
  - Edge: validação CEP, loading, error state

- ServiceCard
  - Props: { id:string; title:string; description:string; icon:string /* Font Awesome class */; features?: string[] }

- PlansTabs (usar Radix Tabs)
  - Props: { plans: Plan[] }
  - Plan type: interface Plan { id:string; name:string; speed?:string; price:number; period:string; perks:string[]; badge?:string }
  - Behavior: suporta ficha por CEP (consulta assíncrona)

- ContactForm (Radix Dialog / Modal)
  - Props: { onSubmit: (data:ContactPayload)=>Promise<void> }
  - ContactPayload: { name:string; email:string; phone?:string; company?:string; cep?:string; message:string }
  - Segurança: honeypot + validação + feedback via Toast

- FAQAccordion (Radix Accordion)
  - Props: { items: {id:string; q:string; a:string}[] }

- ToastProvider (Radix Toast)
  - Usar para mensagens de sucesso/erro

- ClientsCarousel / Logos
  - Props: { logos: string[] }

- Footer
  - Props: { contacts: {label:string; value:string}[]; links: {label:string; href:string}[]; socialLinks: {name:string; href:string}[] }

## Contratos de dados (exemplos TypeScript)
```ts
interface Service {
  id: string;
  title: string;
  short: string;
  long?: string;
  icon: string; // FA class ou nome
  cta?: { label: string; href: string };
}

interface Plan {
  id: string;
  name: string;
  speed?: string;
  price: number;
  period: string; // ex: "mês"
  perks: string[];
  badge?: string;
}

interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
  avatar?: string;
  company?: string;
}
```

## Conteúdo / Copy (inspirado nas referências — reescrito)
- Tone: comercial, direto, confiável, focado em benefícios mensuráveis.
- Exemplos:
  - Hero: "Conectividade que impulsiona o seu negócio" — "Fibra ultrarrápida, soluções de voz e segurança gerenciável — instalação rápida e suporte 24/7."
  - Serviço Fibra: "Velocidade simétrica, instalação grátis e Wi‑Fi Mesh opcional."
  - Soluções Corporativas: "SIP Trunk, PABX virtual e SD‑WAN para alta disponibilidade."
  - CTA primário: "Verificar disponibilidade" (abre formulário CEP)
  - CTA secundário: "Fale com um consultor" (modal contato)

> Observação: textos são rascunhos e evitam cópia direta das páginas referenciadas.

## CTAs e fluxos de conversão
- CTA principal: "Verificar disponibilidade" → formulário CEP → resultado: disponível / pré-cadastro
- CTA secundária: "Fale com um consultor" → modal com `ContactForm`
- Micro-conversões: "Assine agora" / "Simular pacote"

## Acessibilidade, SEO e performance
- Landmarks semânticos: header, main, footer
- Aria-labels para componentes Radix (aria-expanded, aria-controls, roles)
- SEO: H1 no hero, meta description, Open Graph
- Performance: imagens AVIF/WebP, lazy loading, tailwind JIT, reduzir bundle Font Awesome (subconjunto)

## Tech stack e ferramentas recomendadas
- Vite + React 19 + TypeScript (recomendado para SPA)
- TailwindCSS (JIT)
- Radix Primitives + shadcn (ShadowCN) para UI acessível
- Font Awesome (carregar subset) ou usar SVGs para ícones críticos
- React Hook Form + Zod para formulários
- ESLint + Prettier + Vitest (tests)
- Hospedagem: Vercel / Netlify / Static host

## Estrutura de pastas sugerida
```
src/
  components/
  hooks/
  lib/
  pages/ (ou app/ se Next)
  styles/
  data/
  utils/
public/
```

## Edge cases e riscos
- Disponibilidade condicional por CEP — sempre oferecer pré-cadastro quando indisponível
- Proteção contra spam em formulários (honeypot, rate-limit)
- Requisitos legais: incluir política de privacidade e informações institucionais (CNPJ, SAC)

## QA / Quality gates recomendados
- Build e lint: ESLint + TypeScript
- Unit tests: Vitest + Testing Library (smoke + 1–2 edge cases)
- A11y: axe-core

## Próximos passos (opções)
- Opção A — Scaffold completo agora: Vite + React 19 + Tailwind + Radix + shadcn + Font Awesome + exemplo de Header, Hero e PlansTabs (eu crio os arquivos iniciais). Recomendado se quiser um repositório inicial pronto.
- Opção B — Gerar apenas stubs de componentes (TSX) e dados mock para integração posterior.
- Opção C — Apenas feedback e revisão do conteúdo/plano antes de implementar.

---

### Requirements coverage
- React 19: Done (planejamento e recomendações)
- TailwindCSS: Done (recomendações e uso com shadcn)
- Font Awesome: Done (instruções sobre subset)
- Radix / ShadowCN: Done (componentes sugeridos usando Radix)
- Landing page em componentes: Done (lista e contratos)
- Referências Algar / Claro / Gerax: Done (conteúdo analisado e reescrito)

---

Arquivo criado: `PLANO_LANDING_TELECOM.md` — plano completo para iniciar a implementação.

Se quiser que eu execute a Opção A (scaffold + exemplos), responda "A" e eu começo a criar o projeto e os primeiros componentes. Se preferir os stubs, responda "B".
