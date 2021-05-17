const Employee = require("../lib/Employee");

describe("employee test", () => {
  it("Should verify that we are creating a new employee object", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });

  it("Should verify we can set a name in the employee object", () => {
    const name = "Josh";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

  it("Should verify we can set an id in the employee object", () => {
    const testId = 12345;
    const employee = new Employee("name", testId);
    expect(employee.id).toBe(testId);
  });

  it("Should verify we can set an email in the employee object", () => {
    const testEmail = "example@example.com";
    const employee = new Employee("name", 12345, testEmail);
    expect(employee.email).toBe(testEmail);
  });

  it("Should get a name through the getName() function ", () => {
    const testname = "Josh";
    const employee = new Employee(testname);
    expect(employee.getName()).toBe(testname);
  });

  it("Should get an Id through the getId() function", () => {
    const testId = 12345;
    const employee = new Employee("name", testId);
    expect(employee.getId()).toBe(testId);
  });

  it("Should get an Email through the getEmail() function", () => {
    const testEmail = "example@example.com";
    const employee = new Employee("name", 12345, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
  });

  it("Should return Employee when called", () => {
    const testEmployee = "Employee";
    const employee = new Employee("Josh", 12345, "example@example.com");
    expect(employee.getRole()).toBe(testEmployee);
  });
});
