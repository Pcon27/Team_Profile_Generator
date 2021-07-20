const Engineer = require("../lib/Employee");

describe("Engineer", () => { 
    describe("Initialization", () => { 
        it("should have a property of 'github' containing a string", () => {
            const engineer = new Engineer("John Smith",2,"jsmith@company.com", "Jsmith");

            expect(typeof engineer.github).toEqual("string");

        });

    })
})