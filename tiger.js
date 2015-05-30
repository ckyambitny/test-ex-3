var Tiger = function (name, legs, eyes) {
    this.name = name;
    this. legs = legs;
    this.eyes = eyes;
};

Tiger.prototype = Animal.prototype;

if ( module.exports ) {
    module.exports = Tiger;
} else {
    this.Tiger = Tiger;
};
