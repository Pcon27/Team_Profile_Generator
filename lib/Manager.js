const Employee = require("./Employee");

class Manager extends Employee{
    constructor(employeeName, employeeID, employeeEmail, office, role) {
        super(employeeName, employeeID, employeeEmail, role);
        this.office = office;
      }
}



module.exports = Manager;