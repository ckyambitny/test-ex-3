var Animal = function () {
};

Animal.prototype = Animal.prototype || {
    name: 'unknown',
    legs: 0,
    eyes: 0,
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


