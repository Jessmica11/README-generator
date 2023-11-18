// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const Apache = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
const GNU = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
const MIT = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

inquirer
    .prompt = ([
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
//function writeToFile(fileName, data) {}

.then((data) => {
    const filename = `README-${data.title.toLowerCase().split(' ').join('')}.md`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('You have created a new README file!')
    );
  });

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
