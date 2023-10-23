"use strict";
// let lname = 'John';
// lname = 10;
let lname;
lname = "Sandy";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 21;
console.log(age);
let isValid;
isValid = true;
console.log(isValid);
// ARRAYS
// let arr : [];
let arr;
// let arr : number[];
arr = [1, 2, 3];
console.log(arr);
let emplist;
emplist = ["e1", "w1"];
console.log(emplist);
let deptlist;
deptlist = ["d1", "x1"];
console.log(deptlist);
let res = deptlist.find((dept) => dept === "d1");
console.log(res);
let result = arr.map(num => num ** 2);
console.log(result);
let sum = arr.reduce((acc, num) => acc + num);
console.log(sum);
let c = 1 /* Color.Green */;
console.log(c);
// TUPLES
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(1, 2);
console.log(swapNums);
console.log(swapNums[0]);
console.log(swapNums[1]);
// console.log(swapNums[2])
// ANY (don't use, bad practice)
// Set noImplicitAny to true in tsconfig
// let dept;
let dept;
dept = 1;
dept = "11";
// VOID
// nothing, like some function returns nothing
// NEVER
// where a value should never exist in the program's runtime
// Functions That Never Return
// function throwError(message: string): never {
//     throw new Error(message);
// }
// throwError("Error");
// Inferencing Unreachable Code
// function infiniteLoop(): never {
//     while (true) { }
// }
// let unreachableValue: never = infiniteLoop();
// To indicate that a specific branch of code should never be reached
function assertNever(value) {
    throw new Error(`Unexpected value: ${value}`);
}
function processValue(value) {
    if (typeof value === "string") {
        // Handle string case
    }
    else if (typeof value === "number") {
        // Handle number case
    }
    else {
        assertNever(value); // This line ensures that all possible types are handled
    }
}
processValue("stringvalue");
processValue(1223);
// processValue(true);
//# sourceMappingURL=datatypes.js.map