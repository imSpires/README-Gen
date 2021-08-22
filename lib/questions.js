// Variable containing the prompted questions in the terminal
const questions = [
    {
        // Name
        type: 'input',
        message: 'Enter your name',
        name: 'authorName',
        validate: function(name) {
			if (name) {
				return true;
			}
			return 'Please enter a name.';
		},
    },

    {
        // Email
        type: 'input',
        message: 'Enter your email',
        name: 'email',
        validate: function(email) {
			if (email) {
				return true;
			}
			return 'Please enter a name.';
		},

    },

    {
        // Github
        type: 'input',
        message: 'Enter your github username',
        name: 'username',
        validate: function(username) {
			if (username) {
				return true;
			}
			return 'Please enter your username';
        },
    },

    {
        // Repo (needs to be exact)
        type: 'input',
        message: 'Enter your Project repo name',
        name: 'repoName',
        validate: function(repo) {
			if (repo) {
				return true;
			}

			return 'Please enter your Github repository name.';
		},
    },

    {   
        // Project tile
        type: 'input',
        message: 'Enter your Project Title',
        name: 'title',
        validate: function(title) {
			if (title) {
				return true;
			}

			return 'Please enter a project title.';
        }
    },

    {
		//Project objective
		type: 'input',
		message: 'What is your project objective?',
		name: 'objective',
		validate: function(objective) {
			if (objective) {
				return true;
			}

			return 'Please enter a project objective';
		},
	},

    {
        // Media
        type: 'confirm',
        message: 'Would you like to add any media to the README?',
        name: 'media',
        default: false
    },

    {
        // Media Links
        type: 'input',
        message: 'Enter the image paths or urls of screenshots or demo. (* Use comma "," to separate each path or url)',
        name: 'URL',
        when: function(answers) {
			return answers.screenshots !== false;
		},
		validate: function(imageURL) {
			if (imageURL) {
				return true;
			}

			return 'Provide the image paths or urls of the media. ';
		},
    },

	{
		//Technologies used
		type: 'input',
		message: 'List the technologies used for the Project. (Use comma "," to separate)',
		name: 'tech',
		validate: function(tech) {
			if (tech) {
				return true;
			}

			return 'What technology was used to create your project?';
		},
	},

	{
		//Installation
		type: 'input',
		message: 'What are the steps required to install your project?',
		name: 'installation',
		validate: function(install) {
			if (install) {
				return true;
			}

			return 'Enter instructions on how to install your project.';
		},
	},

    {
        // Usage
		type: 'input',
		message: 'Provide instructions on how to use your project',
		name: 'usage',
		validate: function(use) {
			if (use) {
				return true;
			}

			return 'Enter instructions on how to use your project.';
	    }
    },

    {
		// Pick a license
		type: 'list',
		message: 'Please select a license for your project.',
		name: 'license',
		choices: [
			{
				name: 'MIT',
				value: 'mit',
			},
			{
				name: 'GNU GPLv3',
				value: 'gpl-3.0',
			},

			{
				name: 'APACHE 2.0',
				value: 'apache-2.0',
			},

			{
				name: 'Mozilla Public 2.0',
				value: 'mpl-2.0',
			},
			
		],
	},
];

module.exports = questions;