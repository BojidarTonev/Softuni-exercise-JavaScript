let WareHouse = require('../warehouse');
let assert = require('Chai').assert;

describe("warehouse tests", function() {
    describe("constructor", function() {
        let initCapacity = 10;
        let wareHouse = new WareHouse(initCapacity);

        let actualyCapacity = wareHouse._capacity;

        assert.equal(actualyCapacity, initCapacity, `Must be ${initCapacity}, but was ${actualyCapacity}`);
    });
});