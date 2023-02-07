// union types

// function combine(num1: number | string, num2: number | string) {
//   let result;
//   if (typeof num1 == "number" && typeof num2 === "number") {
//     result = num1 + num2;
//   } else {
//     result = num1.toString() + num2.toString();
//   }

//   return result;
// }

// const combinedAges = combine(40, 30);
// console.log(combinedAges);

// const combinedNames = combine("ejiro", "jerry");
// console.log(combinedNames);

// literal types

// function combine(
//   num1: number | string,
//   num2: number | string,
//   stringConversion: "as-number" | "as-text"
// ) {
//   let result;
//   if (
//     (typeof num1 == "number" && typeof num2 === "number") ||
//     stringConversion === "as-number"
//   ) {
//     result = +num1 + +num2;
//   } else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
//   if (stringConversion === "as-number") {
//     return +result;
//   } else {
//     return result.toString();
//   }

// Type aliases

// instead of of setting union types all the time we provide an alias type which can be equal to the union type.

type combineAble = number | string;

type conversionDescriptor = "as-number" | "as-text";

function combine(
  num1: combineAble,
  num2: combineAble,
  stringConversion: conversionDescriptor
) {
  let result;
  if (
    (typeof num1 == "number" && typeof num2 === "number") ||
    stringConversion === "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const combinedAges = combine(40, 30, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("40", "30", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("ejiro", "jerry", "as-text");
console.log(combinedNames);
