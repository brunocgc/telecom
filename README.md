# Telecom Landing (scaffold)

Projeto scaffold para uma landing page de telecom com React 19, Vite, TypeScript, TailwindCSS, Radix e componentes estilo shadcn.

Setup rápido
- copie `.env.example` para `.env` e preencha `SUBMIT_WEBHOOK` (usado pelo endpoint serverless em `api/submitContact.js`).
- npm install
- npm run dev (abre em http://localhost:5174)
- npm run test (executa Vitest)

Deploy
- Vercel: basta apontar o repositório e definir a variável de ambiente `SUBMIT_WEBHOOK` no painel do projeto.
- Netlify: inclua `api/submitContact.js` na pasta `api/` (Netlify Functions) e defina `SUBMIT_WEBHOOK` nos Environment Variables.
# Telecom Landing

Scaffold inicial para a landing page de Telecom.

Para começar:

1. Instalar dependências:

```pwsh
npm install
```

2. Rodar dev server:

```pwsh
npm run dev
```

Stack: React 19, Vite, TailwindCSS, Radix, Font Awesome.
