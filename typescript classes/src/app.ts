// interface with typescript

// we can extend multile interface when we use the extend keyword
type addFn = (a: number, b: number) => number;
let add: addFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(100, 100));

interface Person {
  name: string;
  greatMe(phrase: string): void;
}
// if we want aclass to implement an iterface we add the implement keyword

let inter: Person;
inter = {
  name: "Ejiro",
  greatMe(phrase: string) {
    console.log(phrase + "My name is -" + this.name);
  },
};
console.log(inter.name);
