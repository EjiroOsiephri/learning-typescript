"use strict";
var _a;
const el = {
    name: "Ejiro",
    privileges: ["mikel", "daddy", "mummy"],
    startDate: new Date(),
};
console.log(el);
function add(a, b) {
    //   return a + b; returning this would lead to an error
    // so we add type guards
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
//function overload helps us to return a value aside from the value gotten by the type
const result = add("max", "schwartz");
result.split(" ");
const fetchUserData = {
    name: "Ejiro",
    id: "ul",
    job: { title: "CEO", description: "My own company" },
};
// console.log(fetchUserData.job && fetchUserData.job.title);
// this is used to prevent javascript runtime error
// in typescript abetter way is used using optional chaining
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// type unknownEmployee = Admin | Employee;
// function printEmployeeInformation(params: unknownEmployee) {
//   console.log("name" + params.name);
//   if ("privileges" in params) {
//     console.log("name" + params.privileges);
//   }
//   if ("startDate" in params) {
//     console.log("name" + params.startDate);
//   }
// }
// printEmployeeInformation(el);
// class car {
//   drive() {
//     console.log("driving");
//   }
// }
// class truck {
//   loadCargo(amount: number) {
//     console.log("driving a truck ");
//   }
// }
// type vehicle = car | truck;
// const v1 = new car();
// const v2 = new truck();
// // Discriminated union
// // to use union type we add special properties to the interface name holding the union types
// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }
// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//   // if ("flyingSpeed" in animal) {
//   //   console.log("Moving with a speed of" + animal.flyingSpeed);
//   // }
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("moving at speed" + speed);
// }
// moveAnimal({ type: "bird", flyingSpeed: 20 });
// // type casting will tell the dom writing in the typescript file that it is indeed not null but an html ellement
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
// const userInput = document.getElementById("user-input");
// // adding the exclamation property means this function will never return null
// // both will workwellbut because of the react the first example might not work
// userInput.value = "hi there";
// // index types
// interface ErrorContainer {
//   //this should contain { email: 'not a valid email', username: 'not a valid username'}
//   [prop: string]: string | number;
// }
// const errorBag: ErrorContainer = {
//   usename: "Ejiro",
//   email: "ejiroosiephri788",
// };
// // function overloads
