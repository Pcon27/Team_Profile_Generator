const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const { Console } = require('console');
const ManagerCard = require("./dist/ManagerCard")
const InternCard = require("./dist/InternCard")
const EngineerCard = require("./dist/EngineerCard")
const MainSite = require("./dist/MainSite")
const employees = [];
const allEmployees = [];

// console.log(Intern.internQuestions);

const employeeQuestions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'what is the name of the employee?',
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'what is the ID of the employee?',
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'what is the Email of the employee?',
    },
]

  const internQuestions = [ ...employeeQuestions,
    {   type: 'input',
        name: 'school',
        message: "what school does the intern attend?",
    },
]

  const managerQuestions = [ ...employeeQuestions,
    {   type: 'input',
        name: 'office',
        message: "what is the manager's office?",
    },
]

    const engineerQuestions = [ ...employeeQuestions,
        {   type: 'input',
            name: 'github',
            message: "what is their github?",
        },
]

    const promptQuestion = [
        {
            type: 'list',
            name: 'prompt',
            message: "do you want to add an Employee?",
            choices: [
                "yes", 
                "no",
            ]
        }
]

    const roleQuestion = [
        {
            type: 'list',
            name: 'role',
            message: "what is their role?",
            choices: [
                "Manager", 
                "Engineer",
                "Intern",
            ]
        }
]


const starterQuestion = () => {
    inquirer
    .prompt(promptQuestion) 

    .then((data) => {
        data.prompt==="yes"? roleQuestionFunc() : renderHTML()
    })
};

function roleQuestionFunc(){
    inquirer
    .prompt(roleQuestion)

    .then ((data) => {
        if (data.role==="Manager"){
            askManagerQuestions(data.role)
        } 
        else if (data.role==="Engineer") {
            askEngineerQuestions(data.role)
        } 
        else{
         askInternQuestions(data.role)
    }
    })

};

function askManagerQuestions(role) {
    inquirer
    .prompt(managerQuestions)

    .then((data) =>{
        employees.push(new Manager(data.employeeName, data.employeeID, data.employeeEmail, data.office, role))
    })

    .then (() => {
        starterQuestion()
    })
}
function askEngineerQuestions(role) {
    inquirer
    .prompt(engineerQuestions)

    .then((data) =>{
        employees.push(new Engineer(data.employeeName, data.employeeID, data.employeeEmail, data.github, role))
    })

    .then (() => {
        starterQuestion()
    })
}
function askInternQuestions(role) {
    inquirer
    .prompt(internQuestions)

    .then((data) =>{
        employees.push(new Intern(data.employeeName, data.employeeID, data.employeeEmail, data.school, role))
    })

    .then (() => {
        starterQuestion()
    })
}

starterQuestion();



function renderHTML() {
    for (var i=0; i <employees.length; i++){
    if (employees[i].role === "Manager") {
        const newEmployee = new Manager(employees[i].employeeName, employees[i].employeeID, employees[i].employeeEmail, employees[i].office, employees[i].role)
        const newCard = ManagerCard(newEmployee)
        allEmployees.push(newCard)
    }
    else if (employees[i].role === "Engineer") {
        const newEmployee = new Engineer(employees[i].employeeName, employees[i].employeeID, employees[i].employeeEmail, employees[i].github, employees[i].role)
        const newCard = EngineerCard(newEmployee)
        allEmployees.push(newCard)
    }
    else if (employees[i].role === "Intern") {
        const newEmployee = new Intern(employees[i].employeeName, employees[i].employeeID, employees[i].employeeEmail, employees[i].school, employees[i].role)
        const newCard = InternCard(newEmployee)
        allEmployees.push(newCard)

        console.log(newCard)
    }
    }
    const Template = allEmployees.join("")
    const finalPage = MainSite(Template)
    fs.writeFile("teamMembers.html", finalPage, (err) =>
     err ? console.log("error!") : console.log("your team page has been created!"))

     console.log(employees)

}



