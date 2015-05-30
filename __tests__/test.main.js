jest.dontMock('../Animal');

var Animal = require('../Animal');
var Tiger = require('../Tiger');
var Elephant = require('../Elephant');

describe('General', function () {
    it('should list of constructor exists', function () {
        expect(typeof Animal).toEqual('function');
        expect(typeof Tiger).toEqual('function');
        expect(typeof Elephant).toEqual('function');
    });
});

describe('Animal', function () {
    it('Animal should have own prototype', function () {
        expect(Animal.prototype).not.toEqual({});
    });
});

describe('Tiger', function () {
    it('Animal should have own prototype', function () {
        expect(Tiger.prototype).not.toEqual({});
    });
});

describe('Elephant', function () {
    it('Animal should have own prototype', function () {
        expect(Elephant.prototype).not.toBe({});
    });
});
