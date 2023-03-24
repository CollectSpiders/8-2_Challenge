// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `What is the title of you're project?`,
        name: `title`
    },
    {
        type: `input`,
        message: `How would you go about installing your program?`,
        name: `installation`
    },
];

// installation, description, usage, contributing, license

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + `.md`, generateMarkdown(data), err => {
        if (err) {
          console.error(err);
        }

      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile(response.title, response));
}

// Function call to initialize app
init();
