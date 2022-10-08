const assert = require('chai').assert;
const sum = require('../sumOfNumbers');

describe('Test sum functionality', () => {
    it('Shoud add positive numbers',() => {
        let input = [1,2,3,4,5];
        let expectedResult = 15;
    
    
        let actionResult = sum(input);
    
       // if(expectedResult == actionResult){
       //  console.log('Passing');
       //}else{
       //    throw new Error('Sum shoud be 15');
       // }
    
      assert.strictEqual(actionResult,expectedResult);
    
    });
    
    it('Shoud return false ehrn adding positive numbers',() => {
        let input = [10,20,30,4,5];
        let expectedResult = 15;
    
    
        let actionResult = sum(input);
    
        assert.notEqual(actionResult,expectedResult);
    });
    it('Shoud pass when adding negative numbers ',() => {
        let input = [-1,-2,-3];
        let expectedResult = -6;
    
    
        let actionResult = sum(input);
    
        assert.strictEqual(actionResult,expectedResult);
    });
});