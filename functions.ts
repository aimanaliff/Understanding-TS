function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number){
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result); //callback function
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; //(function types) makes it clear it needs to run a function

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someValue: undefined; //undefined is a value but how useful it is, is another question

addAndHandle(10, 20, (result) => {
    console.log(result);
});