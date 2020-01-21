const inquirer = require("inquirer");
const fs = require("fs");

function promptUser() {
    inquirer
        .prompt([
            // #####
            // QUESTIONS FOR MANAGER
            // #####
            {
                type: "input",
                name: "manager",
                message: "Welcome, manager. Please enter your name."
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter your email."
            },
            {
                type: "number",
                name: "teamSize",
                message: "Please enter the number of employees you have. (Numbers only)"
            },
            // #####
            // QUESTIONS FOR EMPLOYEES
            // #####
            {
                type: "list",
                name: "role",
                message: "What is your role in the organization?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ]
            }
        ]);
}