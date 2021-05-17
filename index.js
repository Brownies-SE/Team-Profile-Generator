const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs)");

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

const interQuestions = [
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
