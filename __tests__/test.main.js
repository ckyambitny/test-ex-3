jest.dontMock('../scripts/Animal');

var Animal = require('../scripts/Animal');
var Tiger = require('../scripts/Tiger');
var Elephant = require('../scripts/Elephant');

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
