function subSum(numbers,startIndex,endIndex){
let result = numbers
.slice(startIndex,endIndex)
.reduce((a,x) => a + x, 0);

return result;
}

function testSubSum(){
    let numbers = [10,20,30,40,50,60];
    let startIndex = 3;
    let endIndex = 300;
    let expectedResult = 150;

    let actionResult = subSum(numbers,startIndex,endIndex);

    if(actionResult === expectedResult){
        console.log('Test is passing');
    }else {
        console.log('Test Tesult failed');
    }
}
testSubSum();