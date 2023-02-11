// class with typescript

// the name of a class should always start with capital letter so that js knows its a class you are working with classes
abstract class Department {
  //  private name: string;
  public Id: string;
  static fiscalPolicy = 2021;
  //   age: number;
  // adding private  to the employees array means that the employee is only accesible in the class
  // adding public  to the employees array means that the employee is accesible outside the class
  protected employees: string[] = [];

  static CreateEmployee(names: string) {
    return { name: names };
  }
  // so instead we add public/private in front of the initialzer
  constructor(private name: string, public id: string) {
    // the code above is a solutionfor double initialization
    // this.name = n;
    // this.age = g; // instead of adding all this we can make use ofthe typescript shorthand initialization
    this.Id = id;
  }
  // a method is a addded like this below

  // you can also add private as a method or even public
  abstract describe(this: Department): void; //{
  // console.log(`Department ${this.name}, ${this.id}, ${this.employees}`);
  //}
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// class AccountingCopy {
//   names: string;
//   constructor(n: string) {
//     this.names = n;
//   }
// }

// physics.name = "angelo";

// const newCopy = new AccountingCopy("ejiro");
// console.log(newCopy);
class Unilag {
  constructor(
    private name: string,
    public age: number,
    private arr: string[]
  ) {}

  describe(this: Unilag) {
    console.log(`${this.name},${this.age}, ${this.arr}`);
  }
}
const institution = new Unilag("Meslier", 30, ["books", "redhood"]);
console.log(institution);
institution.describe();

class OAU {
  name: string;
  age: number;
  department: string;
  distractions: string[];
  constructor(n: string, a: number, d: string, dis: string[]) {
    this.name = n;
    this.age = a;
    this.department = d;
    this.distractions = dis;
  }
  decifer(this: OAU) {
    console.log(
      `${this.name},${this.age},${this.department},${this.distractions}`
    );
  }
}
const result = new OAU("jay", 30, "pharmacy", ["girs", "anime"]);
console.log(result);

// read only means the code will not change after initialization
// we do this by

class UnilagStudent {
  constructor(
    private readonly name: string,
    public age: number,
    private arr: string[]
  ) {}

  describe(this: UnilagStudent) {
    // this.name = "Donald"; // this will return an error because it set to read only
    console.log(`${this.name},${this.age}, ${this.arr}`);
  }
}
const institutions = new UnilagStudent("Meslier", 30, ["books", "redhood"]);
console.log(institutions);
institution.describe();
// inheritance
// we want to inherit the department class so we use the extends keyword
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    // super takes the constructor of the Department class
    super(id, "IT");
    this.admins = admins;
  }
  describe(this: Department): void {
    console.log("IT DEpeartment", this.id);
  }
}
const physics = new ITDepartment("Physics", ["admin", "hrTiti"]);
console.log(physics);

physics.describe();

physics.addEmployee("max");
physics.addEmployee("maxine");

physics.printEmployeeInformation();

// overriding properties using the protected modifier
// protected is just like private but it extends to any extended class

class AccountingDepartment extends Department {
  private lastReports: string; // getting setters

  get mostRecentsReports() {
    if (this.lastReports) {
      return this.lastReports;
    }
    {
      throw new Error("no Reports found");
    }
  }
  describe(this: Department) {
    console.log("accounting Department");
  }

  set mostRecentsReports(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
  }

  constructor(id: string, private Reports: string[]) {
    super(id, "accounting");
    this.lastReports = Reports[0];
  }
  addEmployee(name: string): void {
    if (name === "max") {
      return;
    } else {
      this.employees.push(name);
    }
  }

  addReports(texts: string) {
    this.Reports.push(texts);
    this.lastReports = texts;
  }
  getReports() {
    console.log(this.Reports);
  }
}
const acct = new AccountingDepartment("nil", []);
acct.mostRecentsReports = "EJIRO";
acct.addReports("something went wrong...");
acct.addEmployee("michell");
acct.addEmployee("rukevwe");
console.log(acct.mostRecentsReports);
acct.getReports();

// static keywords in typescript
const personalEmployee = Department.CreateEmployee("obus");
console.log(personalEmployee, Department.fiscalPolicy);

// interface
