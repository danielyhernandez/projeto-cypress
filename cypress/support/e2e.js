import './commands'

// Ignorar erros JS de sites reais (Mercado Livre, Magalu, etc)
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})