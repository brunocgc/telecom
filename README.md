# Telecom Landing (scaffold)

Projeto scaffold para uma landing page de telecom com React 19, Vite, TypeScript, TailwindCSS, Radix e componentes estilo shadcn.

Setup rápido
- copie `.env.example` para `.env` e preencha `SUBMIT_WEBHOOK` (usado pelo endpoint serverless em `api/submitContact.js`).
- npm install
- npm run dev (abre em http://localhost:5174)
- npm run test (executa Vitest)

Deploy
- Vercel: basta apontar o repositório e definir a variável de ambiente `SUBMIT_WEBHOOK` no painel do projeto.
	- Recomendado (válido para Vercel): crie um Secret chamado `submit_webhook` e então, na seção Environment Variables do projeto, adicione `SUBMIT_WEBHOOK` apontando para esse Secret.
		- No dashboard Vercel: Project > Settings > Environment Variables > Add > select "From Secret" > choose `submit_webhook`.
		- Ou via CLI: `vercel secrets add submit_webhook <YOUR_WEBHOOK_URL>`
	- Se a variável `SUBMIT_WEBHOOK` não existir, a função serverless retornará um erro claro explicando como criar o Secret.
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

Visualizar o site: https://telecom-beige.vercel.app/

CI / Deploy automatizado (GitHub Actions)

Incluí um workflow de exemplo em `.github/workflows/vercel-deploy.yml` que faz build e deploy para Vercel quando houver push na branch `master`.

Requisitos (GitHub repository secrets):
- `VERCEL_TOKEN` — token pessoal (Vercel) com permissões de deploy.
- `VERCEL_ORG_ID` — ID da organização no Vercel.
- `VERCEL_PROJECT_ID` — ID do projeto Vercel.
- `SUBMIT_WEBHOOK` — URL do webhook usado pelo endpoint serverless (pode ser colocado como GitHub secret ou configurado no painel do Vercel como Secret `submit_webhook`).

Exemplo rápido (via GitHub):
1. Vá em Settings → Secrets → Actions → New repository secret.
2. Adicione `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` e `SUBMIT_WEBHOOK`.

Se você preferir criar um Secret no Vercel para o webhook, use `vercel secrets add submit_webhook <url>` e aponte a Environment Variable `SUBMIT_WEBHOOK` no painel do projeto escolhendo "From Secret" → `submit_webhook`.
