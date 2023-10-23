import { Login, User } from './interface';

// import * as UserLogin from './interface';
// Login --- UserLogin.Login
// User  --- UserLogin.User


interface Address {
    street: string,
    city: string,
    state: string,
    pincode: string
}

class Employee implements Login {
    // private id : number;
    #id: number;
    // name : string;
    protected name: string;
    address: Address;

    static employeeCount: number = 0;

    static getEmployeeCount(): number {
        return this.employeeCount;
    }


    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    constructor(id: number, name: string, address: Address) {
        Employee.employeeCount++;
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    Login(): User {
        return { name: "John", id: 1, email: "" };
    }


    getDetails(): string {
        return `${this.name} stays at ${this.address.city}`;
    }

}


let emp = new Employee(1, "John", {
    street: "Baker Street",
    city: "London",
    state: "London",
    pincode: "122190"
});
// emp.id = 1;
// emp.name = "John"
// emp.address = "New York"


console.log(emp)

console.log(emp.getDetails())

console.log(Employee.getEmployeeCount());

emp.empId = 12;
console.log(emp.empId)



class Manager extends Employee {

    constructor(id: number, name: string, address: Address) {
        super(id, name, address)
    }

    getDetails(): string {
        return `${this.name} is a manager at ${this.address.city}`;
    }
}

let manager = new Manager(1, "Mike", {
    street: "Baker Street",
    city: "London",
    state: "London",
    pincode: "122190"
})
console.log(manager.getDetails());

console.log(Employee.getEmployeeCount());



