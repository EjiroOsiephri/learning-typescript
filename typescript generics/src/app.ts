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
function merge<T extends object, U extends object>(objA: T, obj2: U): T & U {
  return Object.assign({}, objA, obj2);
}
// const merged = merge({ name: "ejiro" }, { age: 30 }) as { name: string };
// this above will work but withe the help of generics the code can be a lot shorter
const merged = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "ejiro", hobbies: ["coding", "eating", "dancing", "singing"] },
  { age: 35 }
  // the code above will not work because we added contraints which will make 35 not tobe merged because its not an object
);
console.log(merged);

interface lengthy {
  length: number;
}

function countAndPrint<T extends lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 Element";
  } else if (element.length > 1) {
    descriptionText = "Got" + " " + element.length + " " + "elements.";
  }
  return [element, descriptionText];
}
console.log(countAndPrint("What a life"));

// The constraint Key
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
extractAndConvert({ name: "ejiro" }, "name");

// Generic types
class getStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItem() {
    return [...this.data];
  }
}
const textStorage = new getStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.addItem("Micheal");
textStorage.removeItem("Max");
console.log(textStorage.getItem());

// typescript utility types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}
// partial changes all the attributes of the interface to be optional
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let CourseGoal: Partial<CourseGoal> = {};
  CourseGoal.title = title;
  CourseGoal.description = description;
  CourseGoal.completeUntil = date;
  return CourseGoal as CourseGoal;
}
const names: Readonly<string[]> = ["Mummy", "dad"];
// when we set read only nothing can be added or removed from the array or an object
// names.pop();
