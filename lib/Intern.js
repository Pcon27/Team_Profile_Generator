const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
      }
}

const internQuestions = [...Employee.employeeQuestions, 
    {   type: 'input',
        name: 'school',
        message: 'what school does the intern attend?',
    },
  ]




module.exports=Intern;

console.log(internQuestions);