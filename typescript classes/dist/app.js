"use strict";
// interface with typescript
var add;
add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(100, 100));
// if we want aclass to implement an iterface we add the implement keyword
var inter;
inter = {
    name: "Ejiro",
    greatMe: function (phrase) {
        console.log(phrase + "My name is -" + this.name);
    },
};
console.log(inter.name);
