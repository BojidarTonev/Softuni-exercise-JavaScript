let holidayPackage = require('../holydayPackage');
let assert = require('Chai').assert;

describe('holidayPackage tests', function(){
    it('add vacantioner should throw exception with empty string argument', function(){
        let package = new holidayPackage();
        assert.throws(() => package.addVacationer(' '), 'Vacationer name must be a non-empty string');
    })
    it('add vacantioner should throw exception with non-string argument', function(){
        let package = new holidayPackage();
        assert.throws(() => package.addVacationer([]), 'Vacationer name must be a non-empty string');
    })
    it('add vacntioner should throw exception if not enough tokens are passed', function(){
        let package = new holidayPackage();
        assert.throws(() => package.addVacationer('Petko'), 'Name must consist of first name and last name');
    })
})