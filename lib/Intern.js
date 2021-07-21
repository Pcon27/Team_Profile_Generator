const Employee = require("./Employee");

class Intern extends Employee{
    constructor(employeeName, employeeID, employeeEmail, school, role) {
        super(employeeName, employeeID, employeeEmail, role);
        this.school = school;
      }
}

// const internQuestions = [...Employee.employeeQuestions, 
//     {   type: 'input',
//         name: 'school',
//         message: 'what school does the intern attend?',
//     },
//   ]




module.exports=Intern;

// console.log(internQuestions);