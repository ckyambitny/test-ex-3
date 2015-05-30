var Tiger = function (name, legs, eyes) {
    this.name = name;
    this. legs = legs;
    this.eyes = eyes;
};
Tiger.prototype = new Animal();

if ( ( typeof module === 'Object' ) && module.exports ) {
    module.exports = Tiger;
} else {
    this.Tiger = Tiger;
};
