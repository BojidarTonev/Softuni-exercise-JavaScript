const AutoService = require('../autoServiceClass');
const assert = require('Chai').assert;

describe("autoService tests", function(){
    describe('constructor tests', function(){
        it('should instantiate the proper value when passed to the class', function(){
            let garage = new AutoService(2);

            assert.equal(garage.garageCapacity, 2);
        })
    })
    describe('repairCar functionallity tests', function(){
        it('no clients test should return proper message', function(){
            let garage = new AutoService(5);
            let message = garage.repairCar();

            assert.equal(message, 'No clients, we are just chilling...');
        })
        it('trying to repair not broken car should return proper message', function(){
            let garage = new AutoService(2);
            garage.signUpForReview('Petko', '1234', 'nema i nishto');

            assert.equal(garage.repairCar(), 'Your car was fine, nothing was repaired.');
        })
        it('trying to repair car with broken parts whould return the proper message', function(){
            let garage = new AutoService(2);
            let car = {
                engine: 'broken'
            }
            garage.signUpForReview('Petko', '1234', car);
            
            assert.equal(garage.repairCar(), 'Yours engine was repaired.');
        })
    })
    describe('sign up for review functionality tests', function(){
        it('sign up for review, should actually sign the car if there is free space in the garage', function(){
            let garage = new AutoService(5);
            garage.signUpForReview('Petko', '1234', 'car for repair');

            assert.equal(garage.workInProgress.length, 1);
        })
        it('sign up for review, should sign the car to the bag log when there is no available space in the garage', function(){
            let garage = new AutoService(0);
            garage.signUpForReview('Petko', '1234', 'car for repair');

            assert.equal(garage.backlogWork.length, 1);
        })
    })
    describe('car info functionality tests', function(){
        it('should return proper message when the searched car is not in the garage', function(){
            let garage = new AutoService(5);

            assert.equal(garage.carInfo('1234', 'Petko'), 'There is no car with platenumber 1234 and owner Petko.');
        })
        it('should return the searched car when it is found in the garage workInProgress', function(){
            let garage = new AutoService(5);
            garage.signUpForReview('Petko', '1234', 'good morning');
            let expected = {
                plateNumber: "1234",
                clientName: "Petko",
                carInfo: "good morning"
            }

            assert.deepEqual(garage.carInfo('1234', 'Petko'), expected);
        })
        it('should return the searched car when it is found in the garage backlogWork', function(){
            let garage = new AutoService(1);
            garage.signUpForReview('Petko', '1234', 'good afternoon');
            garage.signUpForReview('Ivan', '5678', 'good night');
            let expeted = {
                plateNumber: "5678",
                clientName: "Ivan",
                carInfo: "good night"
            }

            assert.deepEqual(garage.carInfo('5678', 'Ivan'), expeted);
        })
    })
})

