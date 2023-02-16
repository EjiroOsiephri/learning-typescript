"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Creating a first decorator
function Logger(logString) {
    return function (constructor) {
        console.log("logging...");
        console.log(constructor);
        console.log(logString);
    };
    // working with decorator factories
}
function withTemplate(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
withTemplate("<h1>You are mad<h1>", "app");
// @Logger("LOGGING-PERSON")
// class Person {
//   name = "Ejiro";
//   constructor() {
//     console.log("Creating a person object...");
//   }
// }
// const pers = new Person();
// console.log(pers);
// --property decorators
function log(target, propertyName) {
    console.log("Property Decorator");
    console.log(target, propertyName);
}
function log2(target, name, descriptor) {
    console.log("Accesory Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// a method decorator takes in three parameters
function log3(target, name, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// parameter decorator
// this takes in target , name of the method and the position of the arguments
function log4(target, name, position) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    set value(v) {
        if (v > 0) {
            this._price = v;
        }
        else {
            throw new Error("value gotten is negative");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    log
], Product.prototype, "title", void 0);
__decorate([
    log2
], Product.prototype, "value", null);
__decorate([
    log3,
    __param(0, log4)
], Product.prototype, "getTax", null);
// auto bind generator
function Autobind(target, methodName, descriptor) {
    const originMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = "This works";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const registeredValidators = {};
function required(target, propertyName) {
    registeredValidators[target.constructor.name] = {
        [propertyName]: ["required"],
    };
}
function positiveNumber() { }
function validate(obj) { }
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", p.showMessage.bind(p));
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    required
], Course.prototype, "title", void 0);
__decorate([
    positiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("click", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        // console.log(createdCourse);
        alert("invalid input");
        return;
    }
    console.log(createdCourse);
});
