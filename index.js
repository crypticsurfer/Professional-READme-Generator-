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
        },
        {
            type: 'input',
            name: 'github username',
            message: "What is your github username?",
            choices: ["Type A", "Type B", "Type C"],
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address?",
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