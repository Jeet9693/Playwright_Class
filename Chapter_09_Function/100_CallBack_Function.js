function runTest(testName, callback) {
let result = "pass";
// 100 lines
callback(testName, result)
function onComplete (name, result){

}

runTest ("loginTest", onComplete)