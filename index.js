// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
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
    ];
    var inquirer = require('inquirer');
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
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