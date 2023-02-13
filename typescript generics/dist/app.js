"use strict";
// type combinable = string | number[];
// const names: Array<string> = ["ejiro"];
// names[0].split(" ");
// const promise = new Promise<any>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });
// promise.then((data) => {});
// Building Generic Functions
function merge(objA, obj2) {
    return Object.assign({}, objA, obj2);
}
// const merged = merge({ name: "ejiro" }, { age: 30 }) as { name: string };
// this above will work but withe the help of generics the code can be a lot shorter
const merged = merge({ name: "ejiro", hobbies: ["coding", "eating", "dancing", "singing"] }, { age: 35 }
// the code above will not work because we added contraints which will make 35 not tobe merged because its not an object
);
console.log(merged);
function countAndPrint(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 Element";
    }
    else if (element.length > 1) {
        descriptionText = "Got" + " " + element.length + " " + "elements.";
    }
    return [element, descriptionText];
}
console.log(countAndPrint("What a life"));
// The constraint Key
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: "ejiro" }, "name");
// Generic types
class getStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const textStorage = new getStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.addItem("Micheal");
textStorage.removeItem("Max");
console.log(textStorage.getItem());
// partial changes all the attributes of the interface to be optional
function createCourseGoal(title, description, date) {
    let CourseGoal = {};
    CourseGoal.title = title;
    CourseGoal.description = description;
    CourseGoal.completeUntil = date;
    return CourseGoal;
}
const names = ["Mummy", "dad"];
// when we set read only nothing can be added or removed from the array or an object
// names.pop();
