// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const { writeFile } = require('fs');
// const { promisify } = require('util');

console.log('Welcome to the README generator!')

// Array of questions used to generate readme
const questions = require('./lib/questions');

// readme template
const generateMarkdown = require('./lib/generateMarkdown');

function promptQuestions() {
    return prompt(questions);
}

// function to write README
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your markdown file has been created.')
    });
}

// Reference: https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original
// const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

