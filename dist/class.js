"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    static getEmployeeCount() {
        return this.employeeCount;
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    constructor(id, name, address) {
        // private id : number;
        _Employee_id.set(this, void 0);
        Employee.employeeCount++;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    Login() {
        return { name: "John", id: 1, email: "" };
    }
    getDetails() {
        return `${this.name} stays at ${this.address.city}`;
    }
}
_Employee_id = new WeakMap();
Employee.employeeCount = 0;
let emp = new Employee(1, "John", {
    street: "Baker Street",
    city: "London",
    state: "London",
    pincode: "122190"
});
// emp.id = 1;
// emp.name = "John"
// emp.address = "New York"
console.log(emp);
console.log(emp.getDetails());
console.log(Employee.getEmployeeCount());
emp.empId = 12;
console.log(emp.empId);
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getDetails() {
        return `${this.name} is a manager at ${this.address.city}`;
    }
}
let manager = new Manager(1, "Mike", {
    street: "Baker Street",
    city: "London",
    state: "London",
    pincode: "122190"
});
console.log(manager.getDetails());
console.log(Employee.getEmployeeCount());
//# sourceMappingURL=class.js.map