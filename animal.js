var Animal = function () {
    this.name = 'unknown';
    this.legs = 0;
    this.eyes = 0;
};

Animal.prototype = {{
    getName: function () {
        return this.name;
    },
    setName: function (name) {
        this.name = name;
    },
    getLegs: function () {
        return this.legs;
    },
    setLegs: function (legs) {
        this.legs = legs;
    },
    getEyes: function () {
        return this.eyes;
    },
    setEyes: function (eyes) {
        this.eyes = eyes;
    }
};

if ( module.exports ) {
    module.exports = Animal;
} else {
    this.Animal = Animal 
};
