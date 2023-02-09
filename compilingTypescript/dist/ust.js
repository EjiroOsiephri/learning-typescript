"use strict";
// let and const with typescript
// function add(a: number, b: number) {
//   return a + b;
// // }
// console.log(add(5, 7));
// var only recognises to scope, the function scope and the global scope.
// let and const uses block scope to work
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var hobbies = ["Sports", "cooking", "dancing", "killing", "reading"];
console.log(hobbies[0]);
// you can also add the spread operator to the arry you want to add thingss too
var activeHobbies = __spreadArray(["hiling"], hobbies, true);
// activeHobbies.push(hobbies[0], hobbies[1]);
// console.log(activeHobbies);
// the spread operator uses ... before adding thearrays we want to push
// activeHobbies.push(...hobbies);
console.log(activeHobbies);
// the spread operator can also be added to an object
var person = {
    names: "ejiro",
    classs: "ss2",
    age: 30,
    class: ["ejiro", "obus"],
};
var copiedPerson = __assign({}, person);
console.log(copiedPerson);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var callAdd = add(3, 5, 6.7, 5, 7, 8, 8);
// if we want to call a parameter with multiple arguments
console.log(callAdd);
// array object destructuring
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingArr = hobbies.slice(2);
console.log(remainingArr[0]);
var names = person.names, classs = person.classs, anyMoreObjects = __rest(person, ["names", "classs"]);
// in array destrucrturing, elements are pulle out in a particular order
// in object yoy can pull out element in any way
// you can only destructure object names
console.log(anyMoreObjects);
