// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How would someone install your project:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How do you use your program?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who all has contributed in your project?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'What license did you use for your project:',
        name: 'license',
        choices: ['GNU GPLv3', 'MIT', 'Apache License 2.0', 'ISC']
        /* 
            https://choosealicense.com/
            https://choosealicense.com/community/ 
            for some information on these options
        */
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
];

// This function will write the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + `.md`, generateMarkdown(data), err => {
        if (err) {
          console.error(err);
        }
    });
}

// This function will initialize the app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile(response.title, response));
}

// Function call to initialize app
init();
