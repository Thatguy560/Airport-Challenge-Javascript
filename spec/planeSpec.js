"use strict";

describe("Plane", () => {
  let plane;
  let airport;
  beforeEach(() => {
    plane = new Plane();
    airport = jasmine.createSpyObj("airport", [
      "clearForLanding",
      "clearForTakeOff",
      "isStormy",
    ]); // used to stub the interaction in the plane unit test.
    // Spys are Jasmines equivalent of Doubles.
  });

  it("can land at an airport", () => {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it("can takeoff from an airport", () => {
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});
