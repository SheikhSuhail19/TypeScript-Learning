// var Users = {
//     name: '',
//     age: 1,
//     id: 1,
//     email: ''
// }

export interface User {
    name: string;
    age?: number;   /* ? => Optional */
    id: number;
    email: string;
}


let user: User = { name: "John", age: 21, id: 1, email: "" }
console.log(user)
console.log(user.name)
console.log(user.email)
let user2: User = { name: "John", id: 1, email: "" }
console.log(user2)

// OBJECT DESTRUCTURING
let { name, email }: User = { name: "John", age: 21, id: 1, email: "mail@mail.com" }
console.log(name)
console.log(email)

let { name: userName, email: userEmail }: User = { name: "John", age: 21, id: 1, email: "mail@mail.com" }
console.log(userName)
console.log(userEmail)


interface Employees extends User {
    salary: number;
}

let employee: Employees = { name: "John", id: 1, email: "", salary: 200000 }
console.log(employee)


export interface Login {
    Login(): User
}


let users: User[] = [
    { name: 'John', id: 1, email: '' },
    { name: 'Jane', id: 1, email: '' },
    { name: 'Jock', id: 1, email: '' },
]

console.log(users)


// ARRAY DESTRUCTURING
let [users1, users2, ...restUsers]: User[] = [
    { name: 'John', id: 1, email: '' },
    { name: 'Jane', id: 1, email: '' },
    { name: 'Jock', id: 1, email: '' },
    { name: 'Jack', id: 1, email: '' },
]

console.log(users1)
console.log(users2)
console.log(restUsers)


let result = restUsers.filter(user => user.id > 1)
console.log(result)


// @Component({})
// class ComponentDecorator {
//     constructor(public name : string) { }
// }