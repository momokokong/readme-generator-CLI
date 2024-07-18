// TODO: Include packages needed for this application
const inquire = require("inquirer");
const color = require("colors");
const validator = require("validator");
const fs = require('fs');
const readmeGen = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  "\n============================\n May I have your user name?\n============================\n",
  "\n============================\n and email address?\n============================\n",
  "\n============================\n Tiltle of the project?\n============================\n", 
  "\n============================\n A short description:\n============================\n",
  "\n============================\n Installation steps:\n============================\n",
  "\n============================\n How to use it?\n============================\n",
  "\n============================\n Any license?\n============================\n",
  "\n============================\n Contributing?\n============================\n",
  "\n============================\n Tests\n============================\n",
];

const licenses = [
  "WTFPL",
  "MIT",
  "BSD 3-Clause",
  "CC0",
  "GNU GPL v3",
  "No license"
]

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("./md/README.md", readmeGen.generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('README.md saved in ./md!'));
}

function checkEmail(str) {
  if (validator.isEmail(str)) {
    return true;
  }
  return color.bgRed("Not an valid email.  Try again.");
}

function checkEmpty(str) {
  if (!validator.isEmpty(str.trim())) {
    return true;
  }
  return color.bgRed("You must enter something.  Try again");
}

// TODO: Create a function to initialize app
function init() {
  inquire.prompt([
    {
      type: 'input',
      message: color.inverse(questions[0]),
      name: "username",
      validate: checkEmpty,
    },
    {
      type: 'input',
      message: color.inverse(questions[1]),
      name: "email",
      validate: checkEmail,
    },
    {
      type: 'input',
      message: color.inverse(questions[2]),
      name: "title",
      validate: checkEmpty,
    },
    {
      type: 'input',
      message: color.inverse(questions[3]),
      name: "desc",
      validate: checkEmpty,
    },
    {
      type: 'input',
      message: color.inverse(questions[4]),
      name: "installation",
      validate: checkEmpty,
    },
    {
      type: 'input',
      message: color.inverse(questions[5]),
      name: "usage",
      validate: checkEmpty,
    },
    {
      type: 'list',
      message: color.inverse(questions[6]),
      name: "license",
      choices: licenses,
      validate: checkEmpty,
    },
    {
      type: 'input',
      message: color.inverse(questions[7]),
      name: "contributing",
      validate: checkEmpty,
    },
    {
      type: 'input',
      message: color.inverse(questions[8]),
      name: "tests",
      validate: checkEmpty,
    },
  ])
  .then((readme) =>
    writeToFile(readme)
  )
  .catch((error) => 
     console.log(error)
  );
}

// Function call to initialize app
init();
