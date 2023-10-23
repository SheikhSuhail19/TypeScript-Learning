"use strict";
// Named function (with optional param)
function add(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(add(2, 3));
console.log(add(2, 3, 5));
// Arrow function (with required param)
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(2, 5));
console.log(sub(2, 5, 20));
// Function expression
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(3, 5));
// Rest params
function addition(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log(addition(1, 3));
console.log(addition(1, 2, 3, 7));
let nums = [5, 6, 7];
console.log(addition(1, 3, ...nums));
// GENERIC Function
function getItems(items) {
    return new Array().concat(items);
}
// let concatres = getItems([1,2,3,45,6])
let concatres = getItems([1, 2, 3, 45, 6]);
// let concatstr = getItems(["a", "b", "c"])
let concatstr = getItems(["a", "b", "c"]);
console.log(concatres, concatstr);
//# sourceMappingURL=functions.js.map