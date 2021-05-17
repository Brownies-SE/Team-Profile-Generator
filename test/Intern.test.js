const Intern = require("../lib/Intern");

describe("Intern tests", () => {
  it("Should get the school from the constructor", () => {
    const testSchool = "DU";
    const employee = new Intern(
      "Josh",
      12345,
      "Example@example.com",
      testSchool
    );
    expect(employee.school).toBe(testSchool);
  });

  it("Should get the school from the getSchool() function", () => {
    const testSchool = "DU";
    const employee = new Intern(
      "Josh",
      12345,
      "Example@example.com",
      testSchool
    );
    expect(employee.getSchool()).toBe(testSchool);
  });

  it("Should return intern when called upon", () => {
    const tst = "Intern";
    const employee = new Intern("Josh", 12345, "Example@example.com", "DU");
    expect(employee.getRole()).toBe(tst);
  });
});
