// Get the current year
let year = new Date().getFullYear();


// If there is no license, return an empty string -- NOT WORKING?
function renderLicenseBadge(data) {
  console.log(data)
  if (data.license === 'mit') {
    return `![license](https://img.shields.io/apm/l/vim-mode?color=blue&style=flat-square)`
  } else if (data.license === 'gpl-3.0') {
    return `![license](https://img.shields.io/badge/license-GPL%20v3-green)`
  } else if (data.license === 'apache-2.0') {
    return `![license](https://img.shields.io/badge/license-Apache%202.0-blue)`
  } else if (data.license === 'mpl-2.0') {
    return `![license](https://img.shields.io/badge/license-Mozilla%20Public-brightgreen)`
  } else {
    return " "
  }
}

// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data) {
    return `This project is [${data.license.toUpperCase()}](https://choosealicense.com/licenses/${data.license}/) licensed.<br />`
  } else {
    return " "
  }
}

// Generate markdown for README
function generateMarkdown(data) {
  let ProjectLinks = '';

	if (data.media) {
		ProjectLinks = data.media.split(',').join('<br>');
	}

	//Set screenshots 
	let screenshots = '';
	if (data.URL) {
		for (let i = 0; i < data.URL.split(',').length; i++) {
			screenshots += `<kbd>![screenshot-demo${i + 1}](${data.URL.split(',')[i].trim()})</kbd>`;
		}
	}
  return `
  # ${data.title.toUpperCase()}

  [![github-follow](https://img.shields.io/github/followers/${data.username
    .trim()
    .toLowerCase()}?label=Follow&logoColor=purple&style=social)](https://github.com/${data.username
    .trim()
    .toLowerCase()})
 ${renderLicenseBadge(data)}

  ## Table of Contents
  * [ Project Links ](#Project-Links)
  * [ Screenshots-Demo ](#Media)
  * [ Objective ](#Objective)
  * [ Technologies ](#Technologies)
  * [ Installation ](#Installation)
  * [ Usage ](#Usage)
  * [ Author Contact ](#AuthorContact)
  * [ Tests ](#Tests)
  * [ License ](#License)
  #

  ## Project Links
  https://github.com/${data.username.trim()
.toLowerCase()}/${data.repoName.trim()}<br>

  ## Media
  ${data.URL}

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

  ## Tests
  ${data.test}

  ## License
  ${renderLicenseSection(data)}

  Copyright © ${year} [${data.authorName.trim().toUpperCase()}](https://github.com/${data.username.trim().toLowerCase()})

  <hr>
  
  This README.md was created by ${data.authorName.trim().toUpperCase()}
  </i></p>
`;
}

module.exports = generateMarkdown;
