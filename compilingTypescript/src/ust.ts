// let and const with typescript
// function add(a: number, b: number) {
//   return a + b;
// // }
// console.log(add(5, 7));
// var only recognises to scope, the function scope and the global scope.
// let and const uses block scope to work

// arrow function
// const arrow = (a: number, b: number) => {
//   return a + b;
// };
// console.log(arrow(10, 23));

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// printOutput(100);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (events) => {
//     console.log(events);
//   });
// }
// default function parameter
// function scope(a: number, b: number = 62) {
//   return a + b;
// }
// console.log(scope(5));
// default arguments have to be the last on the list

// The spread operator
const hobbies = ["Sports", "cooking", "dancing", "killing", "reading"];
console.log(hobbies[0]);

// you can also add the spread operator to the arry you want to add thingss too
const activeHobbies = ["hiling", ...hobbies];

// activeHobbies.push(hobbies[0], hobbies[1]);
// console.log(activeHobbies);
// the spread operator uses ... before adding thearrays we want to push

// activeHobbies.push(...hobbies);

console.log(activeHobbies);

// the spread operator can also be added to an object

const person: {
  names: string;
  classs: string;
  age: number;
  class: string[];
} = {
  names: "ejiro",
  classs: "ss2",
  age: 30,
  class: ["ejiro", "obus"],
};

const copiedPerson = { ...person };

console.log(copiedPerson);

// rest operators
type numString = number | string;

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const callAdd = add(3, 5, 6.7, 5, 7, 8, 8);
// if we want to call a parameter with multiple arguments

console.log(callAdd);

// array object destructuring

const [hobby1, hobby2, ...remainingArr] = hobbies;

console.log(remainingArr[0]);

const { names, classs, ...anyMoreObjects } = person;

// in array destrucrturing, elements are pulle out in a particular order
// in object yoy can pull out element in any way
// you can only destructure object names

console.log(anyMoreObjects);
