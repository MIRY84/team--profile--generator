// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, github) { // testing features// constructor
        super(name, id, email);//inheritance
        this.github = github;
    }
}

module.exports = Manager;// added the module to export