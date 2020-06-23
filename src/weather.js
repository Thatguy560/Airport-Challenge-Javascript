'use strict'

// A constructor is a function that creates an instance of a class which 
// is typically called an “object”

class Weather {
  constructor() {
    this._CHANCE_OF_STORMY = 0.5;
  }
  isStormy() {
    return (Math.random() > this._CHANCE_OF_STORMY);
  }
}

// You could also write it like this.

// function Weather(){
//   this._CHANCE_OF_STORMY = 0.5;
// }
// Weather.prototype.isStormy = function(){
//   return (Math.random() > this._CHANCE_OF_STORMY);
// };