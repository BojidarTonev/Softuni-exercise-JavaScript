const assert = require('chai').assert;
const WareHouse = require('../Warehouse');

describe('wareHouse', function(){
    describe('constructor', function(){
        it('constructor with invalid capacity', function(){
            let initCapacity = -10;
            assert.throws(() => new WareHouse(initCapacity), `Invalid given warehouse space`);
        });
        it('constructor with invalid capacity type', function(){
            let initCapacity = 'asd';
            assert.throws(() => new WareHouse(initCapacity), `Invalid given warehouse space`);
        });
    });
   
});