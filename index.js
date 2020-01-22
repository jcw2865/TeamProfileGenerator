const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const Employee = require("./lib/employee");
const managerQuestions = [

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
        type: "input",
        name: "managerId",
        message: "Please enter your ID."
    },
    {
        type: "input",
        name: "managerPhone",
        message: "Please enter your phone number."
    },
    {
        type: "number",
        name: "teamSize",
        message: "Please enter the number of employees you have. (Numbers only)"
    }
];
const employeeQuestions = [
    // #####
    // QUESTIONS FOR EMPLOYEES
    // #####
    {
        type: "input",
        name: "employeeName",
        message: "Please enter an employee name."
    },
    {
        type: "input",
        name: "employeeId",
        message: "Please enter their ID."
    },
    {
        type: "list",
        name: "employeeRole",
        message: "Please enter their role in the organization.",
        choices: [
            "Engineer",
            "Intern"
        ]
    }
]
const engineerUsername = [
    {
        type: "input",
        name: "username",
        message: "Please enter their GitHub username."
    }
]
const internSchool = [
    {
        type: "input",
        name: "school",
        message: "Please enter their school name."
    }
]

async function init() {
    const managerResponse = await inquirer.prompt(managerQuestions);
    questionNum = managerResponse.teamSize;
    const employeeArray = [];
    for (i = 0; i < questionNum; i++) {
        const employeeResponse = await inquirer.prompt(employeeQuestions);
        if (employeeResponse.employeeRole === "Engineer") {
            // Ask for GH username
            const engineerResponse = await inquirer.prompt(engineerUsername);
            const thisEmployee = new Employee(employeeResponse.employeeName, employeeResponse.employeeId, employeeResponse.employeeRole, engineerResponse.username, null);
            employeeArray.push(thisEmployee);
        } else {
            // Ask for school name
            const internResponse = await inquirer.prompt(internSchool);
            const thisEmployee = new Employee(employeeResponse.employeeName, employeeResponse.employeeId, employeeResponse.employeeRole, null, internResponse.school);
            employeeArray.push(thisEmployee);
        }
    }
    // console.log(employeeArray);
    const fileHTML = await generateHTML(managerResponse, employeeArray);
    fs.writeFile("main.html", fileHTML, function (err) {
        // console.log(err);
    })

};
init();