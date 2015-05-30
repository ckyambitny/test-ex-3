var Tiger = function (name, legs, eyes) {
    this.name = name;
    this. legs = legs;
    this.eyes = eyes;
};
var animal = new Animal();
Tiger.prototype = animal.prototype;

if ( module.exports ) {
    module.exports = Tiger;
} else {
    this.Tiger = Tiger;
};
