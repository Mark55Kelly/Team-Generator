const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile); //use this for the file at the bottom of the code.

let init = () =>
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'EmployeeName',

            },