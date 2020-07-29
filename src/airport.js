"use strict";

// A constructor is a function that creates an instance of a class which
// is typically called an “object”

// typeof refers to a datatype, in this case this datatype weather is undefined. Other datatypes could be boolean, string, number, symbol.

class Airport {
  constructor(weather) {
    this._weather = typeof weather !== "undefined" ? weather : new Weather();
    this._hangar = [];
  }
  // Can work with the arrow function '= () =>'
  planes() {
    return this._hangar;
  }
  clearForLanding(plane) {
    if (this._weather.isStormy()) {
      throw new Error("cannot land during storm");
    }
    this._hangar.push(plane);
  }
  clearForTakeOff(plane) {
    if (this._weather.isStormy()) {
      throw new Error("cannot takeoff during storm");
    }
    this._hangar = [];
  }
}

// Old Code

// function Airport(weather) {
//   this._weather = typeof weather !== "undefined" ? weather : new Weather();
//   this._hangar = [];
// }
// Airport.prototype.planes = function () {
//   return this._hangar;
// };

// Airport.prototype.clearForLanding = function (plane) {
//   if (this._weather.isStormy()) {
//     throw new Error("cannot land during storm");
//   }
//   this._hangar.push(plane);
// };

// Airport.prototype.clearForTakeOff = function (plane) {
//   if (this._weather.isStormy()) {
//     throw new Error("cannot takeoff during storm");
//   }
//   this._hangar = [];
// };
