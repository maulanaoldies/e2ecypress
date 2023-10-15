describe("register spec", () => {
  it("Error on empty field", () => {
    cy.visit("/");
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="error-nik"').should("exist");
    cy.get('[data-cy="error-name"').should("exist");
    cy.get('[data-cy="error-age"').should("exist");
  });
});
