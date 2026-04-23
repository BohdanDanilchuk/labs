describe("2048 E2E Testing", () => {
  it("loads the game page correctly", () => {
    cy.visit("http://localhost:5173");

    cy.contains("2048").should("exist");
    cy.get(".game-container").should("exist");
    cy.get(".restart-button").should("exist");
    cy.get(".score-container").should("exist");
    cy.get(".tile-container .tile").its("length").should("be.greaterThan", 0);
  });

  it("restarts the game after clicking New Game", () => {
    cy.visit("http://localhost:5173");

    cy.get(".restart-button").click();

    cy.get(".game-container").should("exist");
    cy.get(".tile-container .tile").its("length").should("be.greaterThan", 0);
  });
});