// Setting return types in typescript]

function add(num1: number, num2: number): number {
  return num1 + num2;
}
function printResult(num: number): void {
  console.log("Result:" + num);
  //   return;
}
printResult(add(5, 12));

// a function without a return statement is will have a type of void

//if a return statement as no value init its type is set to undefined

// function types

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult; this causes an error because we set the params of print result toonly on parameter
console.log(combineValues(7, 7));

// function callbacks

function isCardValid(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  cb(result);
}
// we can see below that we cam return a statement, this is because we set the value if the function cb to be eqal to void , which means that we are promising typescript that we wont be returning anything.

isCardValid(10, 20, (result) => {
  console.log(result);
  // return result
});
