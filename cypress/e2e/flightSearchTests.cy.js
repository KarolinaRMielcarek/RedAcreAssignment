import { onFlightSearchPage } from "../support/page_objects/flightSearch";

describe("Testing flight search on Air Malta website", () => {
  beforeEach("Visit AirMalta airline site", () => {
    cy.visit("/");
  });

  it("Check the first available flight price", () => {
    onFlightSearchPage.chooseOneWayTrip();
    onFlightSearchPage.chooseOriginAirport("Vienna");
    onFlightSearchPage.chooseDestinationAirport("Malta");
    onFlightSearchPage.chooseFlightDate();
    onFlightSearchPage
      .getFirstAvailableFlightPrice()
      .should("contain.text", "€");
  });
});
