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
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tupules
// } = {
//   name: "Ejiro",
//   age: 18,
//   hobbies: ["eating", "Sleeping"],
//   role: [2, "author"],
// };
// person.role.push("admin"); // the .push is an exception for the tupule types
// person.role[1] = 10;
// let favoriteHobbies: string[];
// favoriteHobbies = ["ejirt", "ejiro"];
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }
// ENUMS TYPES
// assigning variables will work fine but ENUM save us the stress
// const admin = 0;
// const readOnly = 2;
// const author = 1;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Ejiro",
    age: 18,
    hobbies: ["eating", "Sleeping"],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("is Role admin");
}
