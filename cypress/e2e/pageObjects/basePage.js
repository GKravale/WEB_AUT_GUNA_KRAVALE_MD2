export class BasePage {
    static visit(url) {
        cy.visit(url);
    }
}
