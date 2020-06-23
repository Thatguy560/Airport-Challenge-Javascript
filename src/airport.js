'use strict';

// A constructor is a function that creates an instance of a class which 
// is typically called an “object”
// typeof refers to a datatype, in this case this datatype weather is undefined. Other datatypes could be boolean, string, number, symbol.

function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
//   this.planes = function(){ 
//     return hanger; 
//   }
//   this.clearForLanding = function(plane) { 
//     if(this.isStormy()) {
//       throw new Error('cannot land during storm');
//     }
//     hanger.push(plane); 
//   };
//   this.clearForTakeOff = function(plane){
//     if(this.isStormy()) {
//       throw new Error('cannot takeoff during storm');
//     }
//     hanger = [];
//   };
//   this.isStormy = function(){
//     return false;
//   };
}
Airport.prototype.planes = function(){ return this._hangar; };

Airport.prototype.clearForLanding = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot land during storm');
  } 
  this._hangar.push(plane);  
};

Airport.prototype.clearForTakeOff = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot takeoff during storm');
  } 
  this._hangar = [];  
};