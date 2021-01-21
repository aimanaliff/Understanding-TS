function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
var combineValues; //makes it clear it needs to run a function
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
// let someValue: undefined; //undefined is a value but how useful it is, is another question
