const assert = require('chai').assert;
const sum = require('../sumOfNumbers');

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

})