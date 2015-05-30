var Animal = require('./Animal');
var Elephant = function (name, legs, eyes) {
    this.name = name;
    this.legs = legs;
    this.eyes = eyes;
};

Elephant.prototype = new Animal();

module.exports = Elephant;
    
