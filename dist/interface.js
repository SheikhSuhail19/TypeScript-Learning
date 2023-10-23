"use strict";
// var Users = {
//     name: '',
//     age: 1,
//     id: 1,
//     email: ''
// }
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", age: 21, id: 1, email: "" };
console.log(user);
console.log(user.name);
console.log(user.email);
let user2 = { name: "John", id: 1, email: "" };
console.log(user2);
// OBJECT DESTRUCTURING
let { name, email } = { name: "John", age: 21, id: 1, email: "mail@mail.com" };
console.log(name);
console.log(email);
let { name: userName, email: userEmail } = { name: "John", age: 21, id: 1, email: "mail@mail.com" };
console.log(userName);
console.log(userEmail);
let employee = { name: "John", id: 1, email: "", salary: 200000 };
console.log(employee);
let users = [
    { name: 'John', id: 1, email: '' },
    { name: 'Jane', id: 1, email: '' },
    { name: 'Jock', id: 1, email: '' },
];
console.log(users);
// ARRAY DESTRUCTURING
let [users1, users2, ...restUsers] = [
    { name: 'John', id: 1, email: '' },
    { name: 'Jane', id: 1, email: '' },
    { name: 'Jock', id: 1, email: '' },
    { name: 'Jack', id: 1, email: '' },
];
console.log(users1);
console.log(users2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 1);
console.log(result);
// @Component({})
// class ComponentDecorator {
//     constructor(public name : string) { }
// }
//# sourceMappingURL=interface.js.map