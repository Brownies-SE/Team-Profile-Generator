const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const card = require("./src/card");
const template = require("./src/template");

const newTeam = [];

const ManagerQuestion = [
  {
    type: "input",
    name: "name",
    message: "Manager's Name:",
  },
  {
    type: "input",
    name: "id",
    message: "Managers ID Number:",
  },
  {
    type: "input",
    name: "email",
    message: "Managers Email Address:",
  },
  {
    type: "input",
    name: "number",
    message: "Managers Office Number:",
  },
];

const employeeQuestions = [
  {
    type: "list",
    name: "nextChoice",
    message: "Would you like to add an additional employee?",
    choices: ["Engineer", "Intern", "Done"],
  },
];

const EngineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Engineer's Name:",
  },
  {
    type: "input",
    name: "id",
    message: "ID Number:",
  },
  {
    type: "input",
    name: "email",
    message: "Email Address:",
  },
  {
    type: "input",
    name: "gitHub",
    message: "GitHub User Name:",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Intern's Name:",
  },
  {
    type: "input",
    name: "id",
    message: "ID Number:",
  },
  {
    type: "input",
    name: "email",
    message: "Email Address:",
  },
  {
    type: "input",
    name: "school",
    message: "School of Origin:",
  },
];

const managerInput = () => {
  inquirer.prompt(ManagerQuestion).then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.number
    );
    newTeam.push(manager);
    menu();
  });
};

const menu = () => {
  inquirer.prompt(employeeQuestions).then((answers) => {
    switch (answers.nextChoice) {
      case "Engineer":
        engineerInput();
        break;

      case "Intern":
        internInput();
        break;

      case "Done":
        generate();
        break;
    }
  });
};

const engineerInput = () => {
  inquirer.prompt(EngineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.gitHub
    );
    newTeam.push(engineer);
    menu();
  });
};

const internInput = () => {
  inquirer.prompt(internQuestions).then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    newTeam.push(intern);
    menu();
  });
};

const generate = () => {
  let cardString = "";
  for (let i = 0; i < newTeam.length; i++) {
    cardString = cardString + card(newTeam[i]);
  }
  fs.writeFileSync("./index.html", template(cardString));
};

managerInput();
