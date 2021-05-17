const Engineer = require("../lib/Engineer");

describe("Engineer tests", () => {
  it("Should set a github acount from the constructor", () => {
    const testGit = "User1";
    const employee = new Engineer(
      "Josh",
      12345,
      "example@example.com",
      testGit
    );
    expect(employee.github).toBe(testGit);
  });

  it("Should get a github username from the getGithub() function", () => {
    const testGit = "User1";
    const employee = new Engineer(
      "Josh",
      12345,
      "example@example.com",
      testGit
    );
    expect(employee.getGithub()).toBe(testGit);
  });

  it("Should execute the getRole function and return the engineer", () => {
    const testGit = "Engineer"; //Has to be here to test that it is returning the engineer
    const employee = new Engineer(
      "Josh",
      12345,
      "example@example.com",
      "User1"
    );
    expect(employee.getRole()).toBe(testGit);
  });
});
