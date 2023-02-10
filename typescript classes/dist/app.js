"use strict";
// class with typescript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// the name of a class should always start with capital letter so that js knows its a class you are working with classes
var Department = /** @class */ (function () {
    // so instead we add public/private in front of the initialzer
    function Department(name, id) {
        this.name = name;
        this.id = id;
        //   age: number;
        // adding private  to the employees array means that the employee is only accesible in the class
        // adding public  to the employees array means that the employee is accesible outside the class
        this.employees = [];
        // the code above is a solutionfor double initialization
        // this.name = n;
        // this.age = g; // instead of adding all this we can make use ofthe typescript shorthand initialization
        this.Id = id;
    }
    // a method is a addded like this below
    // you can also add private as a method or even public
    Department.prototype.describe = function () {
        console.log("Department ".concat(this.name, ", ").concat(this.id, ", ").concat(this.employees));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
// class AccountingCopy {
//   names: string;
//   constructor(n: string) {
//     this.names = n;
//   }
// }
// physics.name = "angelo";
// const newCopy = new AccountingCopy("ejiro");
// console.log(newCopy);
var Unilag = /** @class */ (function () {
    function Unilag(name, age, arr) {
        this.name = name;
        this.age = age;
        this.arr = arr;
    }
    Unilag.prototype.describe = function () {
        console.log("".concat(this.name, ",").concat(this.age, ", ").concat(this.arr));
    };
    return Unilag;
}());
var institution = new Unilag("Meslier", 30, ["books", "redhood"]);
console.log(institution);
institution.describe();
var OAU = /** @class */ (function () {
    function OAU(n, a, d, dis) {
        this.name = n;
        this.age = a;
        this.department = d;
        this.distractions = dis;
    }
    OAU.prototype.decifer = function () {
        console.log("".concat(this.name, ",").concat(this.age, ",").concat(this.department, ",").concat(this.distractions));
    };
    return OAU;
}());
var result = new OAU("jay", 30, "pharmacy", ["girs", "anime"]);
console.log(result);
// read only means the code will not change after initialization
// we do this by
var UnilagStudent = /** @class */ (function () {
    function UnilagStudent(name, age, arr) {
        this.name = name;
        this.age = age;
        this.arr = arr;
    }
    UnilagStudent.prototype.describe = function () {
        // this.name = "Donald"; // this will return an error because it set to read only
        console.log("".concat(this.name, ",").concat(this.age, ", ").concat(this.arr));
    };
    return UnilagStudent;
}());
var institutions = new UnilagStudent("Meslier", 30, ["books", "redhood"]);
console.log(institutions);
institution.describe();
// inheritance
// we want to inherit the department class so we use the extends keyword
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = 
        // super takes the constructor of the Department class
        _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var physics = new ITDepartment("Physics", ["admin", "hrTiti"]);
console.log(physics);
physics.describe();
physics.addEmployee("max");
physics.addEmployee("maxine");
physics.employees[2] = "Ejiro";
physics.employees[3] = "Ejiros";
physics.printEmployeeInformation();
