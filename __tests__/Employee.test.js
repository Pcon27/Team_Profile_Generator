const Employee = require("../lib/employee")

describe("Employee", () => { 
    describe("Initialization", () => { 
        it("should have a property of 'name' containing a string which has a space", () => {
            const employee = new Employee("John Smith",2,"jsmith@company.com");

            expect(typeof employee.name).toEqual("string");
            expect(employee.name.indexOf(" ")).toNotBe(-1);
        });

        it("should have a unique ID that goes up by one each time", () => {
            const employee = new Employee("John Smith",2,"jsmith@company.com");

            expect(typeof employee.id).toEqual(Number);

        });

        it ("should have an email that is a string, contains an @, and a .", () =>{
            const employee = new Employee("John Smith",2,"jsmith@company.com");

            expect(typeof employee.email).toEqual("string");
            expect(employee.emaul.indexOf("@")).toNotBe(-1);
            expect(employee.emaul.indexOf(".")).toNotBe(-1);



        });



    })


})


// The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'


