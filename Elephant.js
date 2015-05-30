var Elephant = function (name, legs, eyes) {
    this.name = name;
    this.legs = legs;
    this.eyes = eyes;
};

Elephant.prototype = new Animal();

if ( ( typeof module === 'Object' ) && module.exports ) {
    module.exports = Elephant;
    } else {
    this.Elephant = Elephant;
};
