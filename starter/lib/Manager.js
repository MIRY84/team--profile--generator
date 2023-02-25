// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) { // testing features// constructor
        super(name, id, email);//inheritance
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return this.role;
    }
}
module.exports = Manager;// added the module to export