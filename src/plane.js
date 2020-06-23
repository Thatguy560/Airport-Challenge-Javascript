'use strict';

// A constructor is a function that creates an instance of a class which 
// is typically called an “object”

class Plane {
    constructor(){
      this._location;
    }
    land(airport){
      airport.clearForLanding(this) // this referring to the plane
      this._location = airport;
    };
    takeoff() {
      this._location.clearForTakeOff()
    }
};