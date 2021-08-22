// Get the current year
let year = new Date().getFullYear();

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title.toUpperCase()}

  ## Table of Contents
  * [Project Links] (#Project-Links)
  * [ Screenshots-Demo ](#Media)
  * [ Project Objective ](#Project-Objective)
  * [ Technologies ](#Technologies)
  * [ Installation ](#Installation)
  * [ Usage ](#Usage)
  * [ Author Contact ](#Author-Contact)
  * [ License ](#License)
  #

  ## Project Links
  https://github.com/${data.username.trim()
.toLowerCase()}/${data.repoName.trim()}<br>

  ## Media
  ${URL}

  ## Objective
  ${data.objective}

  ## Technologies
  \`\`\`
  ${data.tech}
  \`\`\`

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Author/Contact
  Contact the author with any questions!<br>
  Github link: [${data.username
		.trim()
		.toLowerCase()}](https://github.com/${data.username.trim().toLowerCase()})<br>
  Email: ${data.email}

  ## License
  This project is [${data.license.toUpperCase()}](https://choosealicense.com/licenses/${data.license}/) licensed.<br />

  Copyright © ${year} [${data.authorName.trim().toUpperCase()}](https://github.com/${data.username.trim().toLowerCase()})

  <hr>
  <p align='center'><i>
  This README.md was created by ${data.authorName.trim().toUpperCase()}
  </i></p>
`;
}

module.exports = generateMarkdown;
