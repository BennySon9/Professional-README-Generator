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
    message: "What is your name? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You MUST enter your name!");
        return false;
      }
    },
  },
  // project name?
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (projectName) => {
      if (projectName) {
        return true;
      } else {
        console.log("You MUST enter your projects name!");
        return false;
      }
    },
  },
  {
    // Description of project
    type: "input",
    name: "description",
    message: "Provide a description of this project! (Required)",
    validate: (projectDescription) => {
      if (projectDescription) {
        return true;
      } else {
        console.log("You MUST provide a project description!");
        return false;
      }
    },
  },
  {
    // Install instructions
    type: "input",
    name: "installation",
    message: "How can someone install your project? (Required)",
    validate: (installInstructions) => {
      if (installInstructions) {
        return true;
      } else {
        console.log("You MUST describe installation details!");
        return false;
      }
    },
  },
  {
    // how to use this project
    type: "input",
    name: "usage",
    message: "How do you use this project? (Required)",
    validate: (usageDetails) => {
      if (usageDetails) {
        return true;
      } else {
        console.log("You MUST provide how to use this project!");
        return false;
      }
    },
  },
  {
    // test instructions
    type: "input",
    name: "testing",
    message: "How to test this project? (Required)",
    validate: (testProject) => {
      if (testProject) {
        return true;
      } else {
        console.log("Please provide how to test this project!");
        return false;
      }
    },
  },
  {
    // license input
    type: "checkbox",
    name: "licensing",
    message: "Choose a license for your project! (Required)",
    choices: ["MIT", "GPL", "CC--0"],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("You MUST check one of the options to continue!");
        return false;
      }
    },
  },
  {
    // github username
    type: "input",
    name: "github",
    message: "Enter your Github Username! (Required)",
    validate: (githubName) => {
      if (githubName) {
        return true;
      } else {
        console.log("You MUST provide your GitHub Username!");
        return false;
      }
    },
  },
  {
    // user email address
    type: "input",
    name: "email",
    message: "Would you like to add an email? (Required)",
    validate: (emailAddress) => {
      if (emailAddress) {
        return true;
      } else {
        console.log("You MUST provide your email to continue!");
        return false;
      }
    },
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
        message: console.log(
          "Refer to dist folder to see your created README.md"
        ),
      });
    });
  });
}

// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions);
};

// Function call to initialize app
init()
  .then((userInput) => {
    return generateMarkdown(userInput);
  })
  .then((userReadMe) => {
    return writeToFile(userReadMe);
  })
  .catch((err) => {
    console.log(err);
  });
