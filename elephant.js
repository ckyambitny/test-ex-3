var Elephant = function (name, legs, eyes) {
    this.name = name;
    this.legs = legs;
    this.eyes = eyes;
};

var animal2 = new Animal();
Elephant.prototype = animal2.prototype;

if ( module.exports ) {
    module.exports = Elephant;
    } else {
    this.Elephant = Elephant;
};
