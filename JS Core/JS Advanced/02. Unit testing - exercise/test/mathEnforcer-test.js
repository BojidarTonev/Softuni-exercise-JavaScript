const assert = require('chai').assert;
const mathEnforcer = require('../mathEnforcer');

describe('mathEnforcer', function(){
    it('if we pass string to addFive should return undefined', function(){
        let result = mathEnforcer.addFive('pet');
        assert.equal(result, undefined);
    });
    it('if we pass NaN to subtractTen should return undefined', function(){
        let result = mathEnforcer.subtractTen('shest');
        assert.equal(result, undefined);
    });
    it('if we pass first argument NaN to sum should return undefined', function(){
        let result = mathEnforcer.sum('edno', 2);
        assert.equal(result, undefined);
    });
    it('if we pass second argument NaN to sum should return undefined', function(){
        let result = mathEnforcer.sum(1, 'dve');
        assert.equal(result, undefined);
    });
    it('if we pass two NaN to sum should return undefined', function(){
        let result = mathEnforcer('edno', 'dve');
        assert.equal(result, undefined);
    });
    it('passing 5 to addFive should return 10', function(){
        let result = mathEnforcer.addFive(5);
        assert.equal(result, 10);
    });
    it('passing 10 to subtractTen should return 0', function(){
        let result = mathEnforcer.subtractTen(10);
        assert.equal(result, 0);
    });
    it('passing 2 and 3 to sum should return 5', function(){
        let result = mathEnforcer.sum(2, 3);
        assert.equal(result, 5);
    });
    it('addFive should work properly with negative numbers', function(){
        let result = mathEnforcer.addFive(-5);
        assert.equal(result, 0);
    });
    it('subtractTen should work properly with negative numbers', function(){
        let result = mathEnforcer.subtractTen(-10);
        assert.equal(result, -20);
    });
    it('addFive should work properly with decimals', function(){
        let result = mathEnforcer.addFive(3.15);
        assert.equal(result, 8.15);
    });
    it('subtractTen should work properly with decimals', function(){
        let result = mathEnforcer.subtractTen(11.5);
        assert.equal(result, 1.5);
    });
});