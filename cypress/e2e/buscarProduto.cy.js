describe("Busca de produto - Mercado Livre", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve buscar notebooks e rolar até o final da página", () => {

    // campo de busca
    cy.get('input[name="as_word"]', { timeout: 15000 })
      .should("be.visible")
      .clear()
      .type("notebook");

    // botão buscar
    cy.get('button[type="submit"]')
      .should("be.visible")
      .click();

    // valida redirecionamento
    cy.url({ timeout: 15000 })
      .should("include", "notebook");

    // 🔑 tudo que é lista precisa ficar DENTRO do it
    cy.origin('https://lista.mercadolivre.com.br', () => {

      // garante que os produtos carregaram
      cy.get('ol li', { timeout: 20000 })
        .should('have.length.greaterThan', 0);

      // scroll progressivo até o final
      cy.window().then((win) => {
        const scrollStep = 800;
        const scrollDelay = 600;
        let currentPosition = 0;
        const totalHeight = win.document.body.scrollHeight;

        function scrollDown() {
          currentPosition += scrollStep;

          if (currentPosition < totalHeight) {
            cy.scrollTo(0, currentPosition);
            cy.wait(scrollDelay).then(scrollDown);
          }
        }

        scrollDown();
      });

    });

  });

});
