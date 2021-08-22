// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

console.log('Welcome to the README generator!')

// Import array of questions used to generate readme
const questions = require('./lib/questions');

// Import readme template
const generateMarkdown = require('./lib/generateMarkdown');

function promptQuestions() {
    return inquirer.prompt(questions);
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
const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await promptQuestions();

        console.log(JSON.stringify(data, null, '\t'));
        
        const readme = generateMarkdown(data);

        await writeFileAsync('README.md', readme);

        console.log('Success!')
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();

