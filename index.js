// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, description, installation, usage, 
    guidelines, instructions, license, github, email }) =>
  `# ${title}
  ${license}
  
  ## Project Description
  ${description}
  
  ## Table of Contents
  [Installation](#installation)
  [Usage Information](#usage-information)
  [Contribution Guidelines](#contribution-guidelines)
  [Test Instructions](#test-instructions)
  [License](#license)
  [Questions](#questions)
  
  ## Installation
  ${installation}

  ## Usage Information
  ${usage}

  ## Contribution Guidelines
  ${guidelines}

  ## Test Instructions
  ${instructions}
  
  ## License
  ${license}

  ## Questions
  [Email Your Questions Here](mailto:${email}?subject=Email from "README Generator")
  [GitHub Profile](https://github.com/${github})

  ---`;

// TODO: Create an array of questions for user input
const Apache = '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
const GNU = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
const MIT = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

inquirer
    .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please enter a project title',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a project description',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation information',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter your project usage information',
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'Please enter your contribution guidelines',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'Please enter your project test instructions',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Please choose a markdown license',
      choices: [Apache, GNU, MIT],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address',
    }, 
]);

// TODO: Create a function to write README file
.then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('You have created a new README file!')
    );
});

// TODO: Create a function to initialize app


// Function call to initialize app
init();
