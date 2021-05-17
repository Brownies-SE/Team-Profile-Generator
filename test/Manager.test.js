const Manager = require("../lib/Manager");

describe("Manager tests", () => {
  it("Should set and office number from the constructor", () => {
    const tst = 12345;
    const employee = new Manager("Josh", 12345, "Example@example.com", tst);
    expect(employee.officeNumber).toBe(tst);
  });

  it("Should return the Manager when calling getRole()", () => {
    const tst = "Manager";
    const employee = new Manager("Josh", 12345, "Example@example.com", 12345);
    expect(employee.getRole()).toBe(tst);
  });
});
