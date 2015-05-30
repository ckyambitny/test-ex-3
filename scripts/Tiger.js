var Animal = require('./Animal');

var Tiger = function (name, legs, eyes) {
    this.name = name;
    this.legs = legs;
    this.eyes = eyes;
};

Tiger.prototype = new Animal();

module.exports = Tiger;
