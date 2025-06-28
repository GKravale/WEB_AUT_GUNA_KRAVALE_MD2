import { BasePage } from "../pageObjects/basePage";

export class AppPage extends BasePage {
  static open() {
    super.visit("https://katalon-demo-cura.herokuapp.com/");
  }

  static clickMakeAppointment() {
    cy.contains("Make Appointment").click();
  }

  static login(username, password) {
    cy.get("#txt-username").type(username);
    cy.get("#txt-password").type(password);
    cy.get("#btn-login").click();
  }

  static fillAppointmentForm() {
    cy.get("#combo_facility").select("Seoul CURA Healthcare Center");
    cy.get("#chk_hospotal_readmission").check();
    cy.get("#radio_program_medicaid").check();
    cy.get("#txt_visit_date").click();
    cy.get(".day").contains("30").click();
    cy.get("#txt_comment").type("CURA Healthcare Service");
    cy.get("#btn-book-appointment").click();
  }

  static verifyAppointmentDetails() {
    cy.get("#facility").should("have.text", "Seoul CURA Healthcare Center");
    cy.get("#hospital_readmission").should("have.text", "Yes");
    cy.get("#program").should("have.text", "Medicaid");
    cy.get("#visit_date").should("contain", "30");
    cy.get("#comment").should("have.text", "CURA Healthcare Service");
  }

  static openHistory() {
    cy.get("#menu-toggle").click();
    cy.contains("History").click();
  }

  static verifyNoAppointments() {
    cy.contains("No appointment").should("be.visible");
  }

  static verifySidebarActive() {
    // cy.get("nav#sidebar-wrapper").should("be.visible");
    cy.get("nav#sidebar-wrapper").should("exist");
  }
}
