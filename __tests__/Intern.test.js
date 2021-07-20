const Intern = require("../lib/Employee");

describe("Intern", () => { 
    describe("Initialization", () => { 
        it("should have a property of 'school' containing a string", () => {
            const intern = new Manager("John Smith",2,"jsmith@company.com", "UCLA");

            expect(typeof intern.office).toEqual("string");

        });

    })
})