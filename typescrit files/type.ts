// function add(num1: number, num2: number, showResult: boolean) {
//   if (showResult) {
//     console.log(num1 + num2);
//   } else {
//     return num1 + num2;
//   }
// }

// const number1 = 5;
// const number2 = 3.8;
// const printResult = true;

// add(number1, number2, printResult);

// Objects Types

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Ejiro",
//   age: 12,
// };
// console.log(person.name);

// Array Types

const person = {
  name: "Ejiro",
  age: 18,
  hobbies: ["eating", "Sleeping"],
};

let names = [
  ["eating", "jooging"],
  ["dancing", "drinking"],
];
let favoriteHobbies: any[];
favoriteHobbies = ["ejirt", 12];

names.forEach((element) => {
  console.log(element[0]);
});
