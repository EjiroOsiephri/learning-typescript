"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["ejiro"] = 4] = "ejiro";
    Roles[Roles["obus"] = 5] = "obus";
})(Roles || (Roles = {}));
console.log(Roles[5]);
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", () => {
        console.log("butoon");
    });
}
// the next strict type
// the null type check value
// this helps to check if the button we are selecting exists or not.
// so we add the exclamation mark to the back or wrapit up into an if statement
// the bind function
//# sourceMappingURL=analytics.js.map