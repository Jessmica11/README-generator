// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
async function generateREADME() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter project title:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter project description:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:'
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'Enter contribution guidelines:'
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'Enter test instructions:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache 2.0', 'GPLv3']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    }
  ]);

const licenseBadge = `![License](https://img.shields.io/badge/license-${encodeURIComponent(answers.license)}-blue.svg)`;

const readmeContent = `# ${answers.title}
${licenseBadge}

## Project Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage Information
${answers.usage}

## Contribution Guidelines
${answers.guidelines}

## Test Instructions
${answers.instructions}

## License
${answers.license}

## Questions
[Email Your Questions Here](mailto:${answers.email}?subject=?)

[GitHub Profile](https://github.com/${answers.github})

---`;

// TODO: Create a function to write README file
fs.writeFileSync('README.md', readmeContent);
  console.log('You successfully created a README.md file!');
}

// TODO: Create a function to initialize app

// Function call to initialize app
generateREADME();
