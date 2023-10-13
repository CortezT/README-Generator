const fs = require('fs');
const inquirer = require('inquirer');

// Prompt the user for README information
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the project title:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a project description:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contributing guidelines:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions:',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Enter project license:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
    ])
    .then((answers) => {
        const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
${answers.license}

## Questions
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
    `;

        // Write the README file
        fs.writeFile('README.md', readmeContent, (err) => {
            if (err) throw err;
            console.log('README.md has been created successfully.');
        });
    });