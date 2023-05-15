export class FlightSearch {
  //selectors
  get roundTripButton() {
    return cy.get('[title="Round trip"]');
  }

  get oneWayButton() {
    return cy.contains("One way");
  }

  get originAirportButton() {
    return cy.get(".route-selection-origin");
  }

  get destinationAirportButton() {
    return cy.get(".route-selection-destination");
  }

  get acceptAirport() {
    return cy.get(".airport-option");
  }

  get departureDateButton() {
    return cy.get('[name="DepartureDate1"]');
  }

  //methods
  chooseOneWayTrip() {
    this.roundTripButton.click();
    this.oneWayButton.click();
  }

  chooseOriginAirport(originAirport) {
    this.originAirportButton.click().type(originAirport);
    this.acceptAirport.click();
  }

  chooseDestinationAirport(destinationAirport) {
    this.destinationAirportButton.click().type(destinationAirport);
    this.acceptAirport.click();
  }

  chooseFlightDate() {
    this.departureDateButton.click();
  }

  getFirstAvailableFlightPrice() {
    return cy.get(".DayPicker-Day--today .calendar-flight-price");
  }
}

export const onFlightSearchPage = new FlightSearch();
