const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(employeeName, employeeID, employeeEmail, github, role) {
        super(employeeName, employeeID, employeeEmail, role);
        this.github = github;
      }
}

module.exports=Engineer;