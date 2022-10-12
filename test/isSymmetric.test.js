const isSymetric = require('../isSymmetric');
const {assert,expect} = require('chai');
require('chai').should();

describe('Test isSymmetric functionallity', () => {
    it('Should pass when is symmetric array is provided', () => {
        let input = [1,2,3,2,1];
        let expectedResult = true;

        let actionResult = isSymetric(input);

        assert.equal(actionResult,expectedResult);
    });
    it('Should fail when is non symmetric array is provided', () => {
        let input = [1,2,3,3,1];
        let expectedResult = false;

        let actionResult = isSymetric(input);

        assert.equal(actionResult,expectedResult);
    });
    
    it('Should fail when is non array is provided as an argument', () => {
        
        let expectedResult = false;

        

        assert.equal(isSymetric(null),expectedResult);
        assert.equal(isSymetric(false),expectedResult);
        assert.equal(isSymetric({}),expectedResult);
        assert.equal(isSymetric(0),expectedResult);
        assert.equal(isSymetric(''),expectedResult);
        assert.equal(isSymetric(true),expectedResult);
    });
    it('Should pass when empty array is provided', () => {
        
        let actionResult = isSymetric([]);
        
       expect(actionResult).to.be.true;

        
    });
    it('Should pass', () => {
        
        let actionResult = isSymetric(['1',1]);
        
       actionResult.should.be.equal(false);

        
    });
});