// Data for each employee role (not sure about this section yet)
// const employeeRole = {
//     manager: {
//         name: "",
//         email: "",
//     },
//     engineer: {
//         name: "",
//         github: "",
//     },
//     intern: {
//         name: "",
//         school: "",
//     }
// };

// const managerCard = require("./manager.html");


function generateHTML(managerResponse, employeeArray) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <style>
            body {
                background-color: #e67e22;
            }
    
            .header {
                padding: 60px;
                text-align: center;
                background: #2ecc71;
                color: white;
                font-size: 30px;
            }
    
            .cardContainer {
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
            }
    
            .card {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                transition: 0.3s;
                width: 40%;
                float: left;
                margin: 10px;
                background-color: #f1c40f;
            }
    
            .card:hover {
                box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
            }
    
            .container {
                padding: 2px 16px;
            }
    
            h4 {
                background-color: #1abc9c;
                text-align: center;
                padding-top: 10px;
                padding-bottom: 10px;
            }
        </style>
    </head>
    
    <body>
        <div class="header">
            <h1>The Dream Team</h1>
        </div>
        <div class="cardContainer">
            <div class="card">
                <div class="container">
                    <h4>
                        <b>${managerResponse.manager}</b>
                        <p>Manager</p>
                    </h4>
                    <p><strong>ID: </strong>${managerResponse.managerId}</p>
                    <p><strong>Email: </strong>${managerResponse.managerEmail}</p>
                    <p><strong>Phone: </strong>${managerResponse.managerPhone}</p>
                </div>
            </div>
            ${employeeArray.map(employee => `
            <div class="card">
            <div class="container">
                <h4>
                    <b>${employee.getName()}</b>
                    <p>${employee.getRole()}</p>
                </h4>
                <p><strong>ID: </strong>${employee.getId()}</p>
                ${employee.getGhusername() ? `<p><strong>GitHub Username: </strong>${employee.getGhusername()}</p>` : ''}
                ${employee.getSchool() ? `<p><strong>School: </strong>${employee.getSchool()}</p>` : ''}
            </div>
        </div>
            `)}
        </div>
    </body>
    
    </html>
`
}
module.exports = generateHTML;