// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    // name
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  // project name?
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
  },
  {
    // Description of project
    type: "input",
    name: "description",
    message: "Provide a description of this project! (Required)",
  },
  {
    // Install instructions
    type: "input",
    name: "installation",
    message: "How can someone install your project? (Required)",
  },
  {
    // how to use this project
    type: "input",
    name: "usage",
    message: "How do you use this project? (Required)",
  },
  {
    // test instructions
    type: "input",
    name: "testing",
    message: "How to test this project? (Required)",
  },
  {
    // license input
    type: "checkbox",
    name: "licensing",
    message: "Choose a license for your project! (Required)",
    choices: [],
  },
  {
    // github username
    type: "input",
    name: "github",
    message: "Enter your Github Username! (Required)",
  },
  {
    // user email address
    type: "input",
    name: "email",
    message: "Would you like to add an email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((conclude, dismiss) => {
    fs.writeFile("./dist/README.md", data, (err) => {
      if (err) {
        dismiss(err);
        return;
      }
      conclude({
        ok: true,
        message: console.log(""),
      });
    });
  });
}

// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions);
};

// Function call to initialize app
init().then((userInput) => {
  return;
});
