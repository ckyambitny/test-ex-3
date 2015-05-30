var Elephant = function (name, legs, eyes) {
    this.name = name;
    this.legs = legs;
    this.eyes = eyes;
};

Elephant.prototype = Animal.prototype;

if ( module.exports ) {
    module.exports = Elephant;
    } else {
    this.Elephant = Elephant;
};
