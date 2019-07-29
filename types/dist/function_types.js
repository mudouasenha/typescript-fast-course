"use strict";
function stringFunction() {
    console.log("Hello I'm a string function");
}
function cal(val1, val2) {
    let total = val1 + val2;
    return total;
}
cal(2, 3);
let universal;
universal = cal;
console.log(universal(2, 2));
