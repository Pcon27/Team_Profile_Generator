const Manager = require("../lib/Employee");

describe("Manager", () => { 
    describe("Initialization", () => { 
        it("should have a property of 'office' containing a number", () => {
            const manager = new Manager("John Smith",2,"jsmith@company.com", 5);

            expect(typeof manager.office).toEqual(Number);

        });

    })
})

