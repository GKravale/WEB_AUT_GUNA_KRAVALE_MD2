import { AppPage } from "./pageObjects/appPage";

describe("Katalon Cura Appointment Tests", () => {
  const username = "John Doe";
  const password = "ThisIsNotAPassword";

  beforeEach(() => {
    AppPage.open();
    AppPage.clickMakeAppointment();
    AppPage.login(username, password);
  });

  it("Scenario 1 - Make an Appointment", () => {
    AppPage.fillAppointmentForm();
    AppPage.verifyAppointmentDetails();
  });

  it("Scenario 2 - Appointment history empty", () => {
    AppPage.openHistory();
    AppPage.verifySidebarActive();
    AppPage.verifyNoAppointments();
  });
});
