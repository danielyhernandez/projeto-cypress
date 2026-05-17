🛒 Desafio Cypress — Busca de Produto no Mercado Livre
Projeto de automação de testes E2E com Cypress, desenvolvido como desafio de aprendizado. O teste valida o fluxo de busca de produtos no Mercado Livre, incluindo navegação entre domínios e scroll progressivo na página de resultados.

🧪 Tecnologias

Cypress v15.9.0
JavaScript
Node.js


📁 Estrutura do Projeto
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

✅ O que o teste cobre
EtapaDescriçãoAcesso à homeVisita https://www.mercadolivre.com.brBuscaDigita "notebook" no campo de busca e clica em buscarRedirecionamentoValida que a URL contém "notebook"ListagemConfirma que os produtos foram carregadosScrollRealiza scroll progressivo até o final da página de resultados

⚙️ Configuração
Pré-requisitos

Node.js >= 20
npm

Instalação
bash# Clone o repositório
git clone https://github.com/seu-usuario/desafio-cypress.git

# Acesse a pasta
cd desafio-cypress

# Instale as dependências
npm install

▶️ Como rodar os testes
Interface gráfica (recomendado para desenvolvimento)
bashnpx cypress open
Linha de comando (modo headless)
bashnpx cypress run
Rodar um teste específico
bashnpx cypress run --spec "cypress/e2e/buscarProduto.cy.js"

🌐 Variáveis de ambiente
O projeto suporta configuração via variáveis de ambiente:
VariávelDescriçãoPadrãoCYPRESS_BASE_URLURL base dos testeshttps://www.mercadolivre.com.brCYPRESS_USER_EMAILE-mail do usuário (uso futuro)—CYPRESS_USER_PASSWORDSenha do usuário (uso futuro)—
Exemplo de uso:
bashCYPRESS_BASE_URL=https://www.mercadolivre.com.br npx cypress run

📝 Observações

O teste usa cy.origin() para lidar com o redirecionamento para lista.mercadolivre.com.br, que é um domínio diferente do ponto de entrada.
Erros de JavaScript não críticos do site são ignorados via uncaught:exception no e2e.js, o que é esperado ao testar aplicações reais de terceiros.
O scroll é feito de forma progressiva em passos de 800px com intervalo de 600ms para simular comportamento real do usuário.


👩‍💻 Autora
Daniely
Desenvolvido como parte dos estudos em QA automação de testes com Cypress.