// A function that takes a function as argument or returns a function.

function runWithLogging(testfn, testName){
console. log (`Starting: ${testName}`);
let result = testfn();
console. log (`Finished: ${testName)  ${result}`);
return result;



}

//need to work