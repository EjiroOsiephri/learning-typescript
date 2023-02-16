// Creating a first decorator
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log("logging...");
    console.log(constructor);
    console.log(logString);
  };
  // working with decorator factories
}

function withTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
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

function log(target: any, propertyName: string | symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

function log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accesory Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// a method decorator takes in three parameters
function log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
// parameter decorator
// this takes in target , name of the method and the position of the arguments
function log4(target: any, name: string | symbol, position: number) {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @log
  title: string;
  _price: number;

  @log2
  public set value(v: number) {
    if (v > 0) {
      this._price = v;
    } else {
      throw new Error("value gotten is negative");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @log3
  getTax(@log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// auto bind generator

function Autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
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
  message = "This works";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

interface validator {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: validator = {};

function required(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    [propertyName]: ["required"],
  };
}

function positiveNumber() {}

function validate(obj: object) {}

const button = document.querySelector("button")!;
button?.addEventListener("click", p.showMessage.bind(p));

class Course {
  @required
  title: string;

  @positiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("click", (event) => {
  event.preventDefault();

  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

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
