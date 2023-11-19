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
      choices: ['MIT', 'Apache', 'GPLv3']
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

  const licenseBadges = {
    MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    GPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  };

  const licenseTCs = {
    MIT: '[License MIT: Terms & Conditions](https://choosealicense.com/licenses/mit/)',
    Apache: '[License Apache 2.0: Terms & Conditions](https://choosealicense.com/licenses/apache-2.0/)',
    GPLv3: '[License GPL 3.0: Terms & Conditions](https://choosealicense.com/licenses/gpl-3.0/)'
  };

const licenseBadge = licenseBadges[answers.license];
const licenseText = licenseTCs[answers.license]

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
${licenseText}

## Questions
[Email Your Questions Here](mailto:${answers.email}?subject=?)

[GitHub Profile](https://github.com/${answers.github})

---
`;

// TODO: Create a function to write README file
fs.writeFileSync('README.md', readmeContent);
  console.log('You successfully created a README.md file!');
}

// TODO: Create a function to initialize app

// Function call to initialize app
generateREADME();
