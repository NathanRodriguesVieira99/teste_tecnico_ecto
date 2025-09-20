# Teste Técnico Ecto

Projeto feito para o teste técnico da Ecto

## ✨ Funcionalidades

- Cadastro de usuário com validação de formulário (nome, sobrenome, e-mail, telefone, senha)
- Validação robusta com Zod
- Testes unitários, integração e e2e
- Componentização e boas práticas de acessibilidade
- UI responsiva

## 🚀 Instalação

```bash
pnpm install
```

## 🏃 Scripts principais

| Script                 | Descrição                                                       |
| ---------------------- | --------------------------------------------------------------- |
| `pnpm dev`             | Inicia o servidor Next.js em modo desenvolvimento               |
| `pnpm build`           | Gera build de produção                                          |
| `pnpm start`           | Inicia o servidor em produção                                   |
| `pnpm format`          | Formata o código com Biome                                      |
| `pnpm lint`            | Checa problemas de lint com Biome                               |
| `pnpm test:coverage`   | Roda cobertura de todos os testes com Vitest                    |
| `pnpm test:e2e:headed` | Roda cobertura de todos os testes com Playwright em modo headed |

## 🧪 Testes

- **Unitários:** `pnpm test:unit`
- **Integração:** `pnpm test:int`
- **E2E:** `pnpm test:e2e` (Playwright)
- **E2E:** `pnpm test:e2e:ui` (UI do Playwright)

Os testes são executados automaticamente em pre-commit via Husky e lint-staged.

## 🛠️ Tecnologias

- Next.js
- React 19
- React Query
- React Hook Form
- Zod
- TailwindCSS
- Vitest
- Testing Library
- Playwright
- Biome

## ⚙️ Variáveis de Ambiente (.env)

O projeto utiliza arquivos `.env` para configurar URLs e tokens de API em diferentes ambientes. Para cada ambiente, existem arquivos de exemplos (`.env.example`, `.env.test.example`) que serve como modelo para criar o arquivo real:

- **.env.example** → Copie para `.env` para uso em desenvolvimento local.
- **.env.test.example** → Copie para `.env.test` para rodar testes automatizados.

**Função de cada arquivo:**

- `.env`: Configura variáveis para desenvolvimento local .
- `.env.test`: Configura variáveis para o ambiente de testes automatizados.
- `.env.production`: Configura variáveis para produção.

**Exemplo de conteúdo:**

```env
NEXT_PUBLIC_API_URL=<url_da_api>
NEXT_PUBLIC_API_TOKEN=<token_da_api>
NODE_ENV=<development|test|production>
```

Preencha os valores conforme o ambiente desejado.

## 👤 Autor

Nathan Rodrigues Vieira
