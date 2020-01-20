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
                message: "Welcome, manager. What is your name?"
            },
            {
                type: "number",
                name: "teamSize",
                message: "How many employees do you have? Please enter only numbers."
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