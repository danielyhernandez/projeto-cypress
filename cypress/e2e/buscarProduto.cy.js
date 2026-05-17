describe("Busca de produto - Automation Test Store", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve buscar laptops e rolar até o final da página", () => {

    // campo de busca
    cy.get('input[name="filter_keyword"]', { timeout: 15000 })
      .should("be.visible")
      .clear()
      .type("t-shirt{enter}");

    // valida redirecionamento
    cy.url({ timeout: 15000 })
      .should("include", "t-shirt");

    // garante que os produtos carregaram
    cy.get('.prdocutname', { timeout: 20000 })
      .should('have.length.greaterThan', 0);

    // scroll progressivo até o final
    cy.window().then((win) => {
      const scrollStep = 400;
      const scrollDelay = 1000;
      let currentPosition = 0;
      const totalHeight = win.document.body.scrollHeight;

      function scrollDown() {
        currentPosition += scrollStep;
        if (currentPosition < totalHeight) {
          cy.scrollTo(0, currentPosition);
          cy.wait(scrollDelay).then(scrollDown);
        }else {
        // chegou ao final, volta ao topo
        cy.scrollTo(0, 0);
        }
      }

      scrollDown();
    });

  });

});