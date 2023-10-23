// let lname = 'John';

// lname = 10;


let lname: string;
lname = "Sandy";

let newname = lname.toUpperCase();

console.log(newname);

let age: number;
age = 21;

console.log(age);


let isValid: boolean
isValid = true

console.log(isValid)

// ARRAYS

// let arr : [];
let arr: Array<number>
// let arr : number[];
arr = [1, 2, 3]

console.log(arr)


let emplist: string[];
emplist = ["e1", "w1"]

console.log(emplist)


let deptlist: Array<string>;
deptlist = ["d1", "x1"]

console.log(deptlist)


let res = deptlist.find((dept) => dept === "d1");
console.log(res);

let result = arr.map(num => num ** 2)
console.log(result)

let sum = arr.reduce((acc, num) => acc + num)
console.log(sum)


// ENUM
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green

console.log(c)

// TUPLES
let swapNums: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

swapNums = swapNumbers(1, 2);
console.log(swapNums)
console.log(swapNums[0])
console.log(swapNums[1])
// console.log(swapNums[2])



// ANY (don't use, bad practice)
// Set noImplicitAny to true in tsconfig

// let dept;
let dept: any;
dept = 1;
dept = "11"


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
function assertNever(value: never): never {
    throw new Error(`Unexpected value: ${value}`);
}

function processValue(value: string | number) {
    if (typeof value === "string") {
        // Handle string case
    } else if (typeof value === "number") {
        // Handle number case
    } else {
        assertNever(value); // This line ensures that all possible types are handled
    }
}

processValue("stringvalue");
processValue(1223);
// processValue(true);