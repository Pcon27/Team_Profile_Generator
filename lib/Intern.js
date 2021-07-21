const Employee = require("./Employee");

class Intern extends Employee{
    constructor(employeeName, employeeID, employeeEmail, school, role) {
        super(employeeName, employeeID, employeeEmail, role);
        this.school = school;
      }
}

module.exports=Intern;

// console.log(internQuestions);