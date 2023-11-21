// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");
const path = reqiore("path");

// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'project_title',
          message: "What's your project title?",
        },
        {
          type: 'input',
          name: 'description',
          message: "What's your project description?",
        },
        {
            type: 'input',
            name: 'installation',
            message: "What's your installation instructions?",
        },
        {
            type: 'input',
            name: 'usage',
            message: "How do you use this application?",
        },
        {
            type: 'input',
            name: 'contribution',
            message: "What are the contribution guidelines for this project?",
        },
        {
            type: 'input',
            name: 'testing',
            message: "What are the test instructions for this project?",
        },
        {
            type: 'list',
            name: 'license',
            message: "What license are you using for this project?",
            choices: ["Type A", "Type B", "Type C"],
        },
        {
            type: 'input',
            name: 'github username',
            message: "What is your github username?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address?",
        },
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = path.join(fileName)
    fs.writeFile(filePath, generateMarkdowndata, (err) =>
    err ? console.error(err) : console.log(`ReadMe generated! @:${filePath}`)
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = JSON.stringify(answers, null, '  ');
        console.log(data);
        writeToFile(data);
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
    });
}

// Function call to initialize app
init();