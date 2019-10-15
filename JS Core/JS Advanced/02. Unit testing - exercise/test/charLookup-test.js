const expect = require('chai').expect;
const lookupChar = require('../charLookup');

describe('charLookup', function(){
    it('with a non-string first argument should return undefined', function(){
        let result = lookupChar(13, 0);
        expect(result).to.equal(undefined);
    });
    it('should return undefined with second argument string', function(){
        let result = lookupChar(13, 'nqkuv text');
        expect(result).to.equal(undefined);
    });
    it('should return undefined with second argument decimal point nuber', function(){
        let result = lookupChar(13, 13.4);
        expect(result).to.equal(undefined);
    });
    it('should return incorrect index when index is smaller than zero', function(){
        let result = lookupChar('nqkuv string', -3);
        expect(result).to.equal('Incorrect index');
    });
    it('should return incorrect index when string length is smaller than the given index', function(){
        let result = lookupChar('nqkuv string', 100);
        expect(result).to.equal('Incorrect index');
    });
    it('should return undefined if we pass two strings', function(){
        let result = lookupChar('nqkuv string', '100');
        expect(result).to.equal(undefined);
    });
    it('should return undefined if we pass empty string', function(){
        let result = lookupChar('', 3);
        expect(result).to.equal(undefined);
    });
    it('should return the correct character', function(){
        let result = lookupChar('12345', 4);
        expect(result).to.equal('5');
    });
});