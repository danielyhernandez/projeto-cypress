# 🛒 Projeto Cypress. Busca de Produto no Automation Test Store

Projeto de automação de testes E2E com Cypress, desenvolvido como parte dos estudos em QA. O teste valida o fluxo de busca de produtos no Automation Test Store, incluindo scroll progressivo e retorno ao topo da página.

---

## 🧪 Tecnologias

- [Cypress](https://www.cypress.io/) v15.9.0
- JavaScript
- Node.js >= 20

---

## 📁 Estrutura do Projeto

```
desafio/
├── cypress/
│   ├── e2e/
│   │   └── buscarProduto.cy.js   # Teste principal
│   ├── fixtures/
│   │   └── example.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
```

---

## ✅ O que o teste cobre

| Etapa | Descrição |
|---|---|
| Acesso à home | Visita `https://automationteststore.com` |
| Busca | Digita "t-shirt" no campo de busca e pressiona Enter |
| Redirecionamento | Valida que a URL contém "t-shirt" |
| Listagem | Confirma que os produtos foram carregados |
| Scroll | Realiza scroll progressivo até o final da página |
| Retorno ao topo | Volta ao início da página após chegar ao final |

---

## ⚙️ Configuração

### Pré-requisitos

- Node.js `>= 20`
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/projeto-cypress.git

# Acesse a pasta
cd projeto-cypress

# Instale as dependências
npm install
```

---

## ▶️ Como rodar os testes

### Interface gráfica (recomendado para desenvolvimento)

```bash
npx cypress open
```

### Linha de comando (modo headless)

```bash
npx cypress run
```

### Rodar um teste específico

```bash
npx cypress run --spec "cypress/e2e/buscarProduto.cy.js"
```

---

## 🌐 Variáveis de ambiente

| Variável | Descrição | Padrão |
|---|---|---|
| `CYPRESS_BASE_URL` | URL base dos testes | `https://automationteststore.com` |
| `CYPRESS_USER_EMAIL` | E-mail do usuário (uso futuro) | — |
| `CYPRESS_USER_PASSWORD` | Senha do usuário (uso futuro) | — |

Exemplo de uso:

```bash
CYPRESS_BASE_URL=https://automationteststore.com npx cypress run
```

---

## 📝 Observações

- O scroll é feito de forma progressiva em passos de 400px com intervalo de 1 segundo para simular comportamento real do usuário.
- Após chegar ao final da página, o teste retorna automaticamente ao topo.
- Erros de JavaScript não críticos do site são ignorados via `uncaught:exception` no `e2e.js`.

---

## 👩‍💻 Autora

**Daniely**  
Desenvolvido como parte dos estudos em QA automação de testes com Cypress.
