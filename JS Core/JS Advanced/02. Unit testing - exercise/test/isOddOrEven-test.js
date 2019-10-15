const assert = require('chai').assert;
const isOddOrEven = require('../isOddOrEven');

describe('isOddOrEven', function(){
    it('should return undefined', function(){
        let result = isOddOrEven(123);
        assert.equal(result, undefined);
    });
    it('should return odd', function(){
        let result = isOddOrEven('nqkuv text');
        assert.equal(result, 'even');
    });
    it('should return even', function(){
        let result = isOddOrEven('nqkuv text2');
        assert.equal(result, 'odd');
    });
});