// Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');


const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'Damian0811.',
        database: 'company_db',
    },
    console.log('Connected to the company_db database.')
);

// Beging prompts
const stateAction = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'action',
                choices: [
                    // Add the rest of it later(dont forget to add view employees)
                    'View All Departments',
                    'Add Departments',
                    'View All Employees',
                    'Add Employee',
                    'View Roles',
                    'Add Role',
                    'Quit']
            }
        ]) .then(response => {
            switch (response.action) {
                case 'View All Departments':
                    viewDepartment()
                    break;

                case 'Add Departments':
                    addDepartments()
                    break;

                case 'View Roles':
                    viewAllRoles()
                    break;

                case 'Add Role':
                    addRole()
                    break;

                case 'Add Employee':
                    addEmployees()
                    break;

                case 'View All Employees':
                    viewAllEmployees()
                    break;

                case 'Quit':
                    quit()
                    console.log('Database ending')
            }
        })
}

const viewDepartment = () =>{
    db.query('SELECT * FROM departments', function(err, results, fields) {
        console.table(results)
        stateAction()
    })
}


const viewAllEmployees = () =>{
    db.query('SELECT * FROM employees', function(err, results, fields) {
        console.table(results)
        stateAction()
    })
}

const viewAllRoles = () =>{
    db.query('SELECT * FROM roles', function(err, results, fields) {
        console.table(results)
        stateAction()
    })
}

function addEmployees() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your first name',
                name: 'firstName'
            },
            {
                type: 'input',
                message: 'What is your last name',
                name: 'lastName'
            },
            {
                type: 'input',
                message: 'What is your role?',
                name: 'employeeRole'
            },
            {
                type: 'input',
                message: 'What is your managers ID number',
                name: 'managerID',
                validate: (answer) => {
                    if (isNaN(answer)) {
                        return `You did not enter a valid number.`
                    }
                    else if (answer === ''){
                        return `Please enter a valid number.`
                    }
                    return true;
                },
            },
        ])
        .then((response)=>{
            db.query('INSERT INTO employees SET ?;', {
                first_name: response.firstName,
                last_name: response.lastName,
                titles: response.employeeRole,
                manager_id: response.managerID,

         });
         stateAction();
        })
}

function addDepartments() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Which department would you like to add?',
                name: 'addingDepartment'
            },
        ])
        .then((response)=>{
            db.query('INSERT INTO departments SET ?;', {
                name: response.addingDepartment
         });
         stateAction();
        })
}


function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What role would you like to add?',
                name: 'addingRole'
            },
            {
                type: 'input',
                message: 'What is the salary for this role?',
                name: 'salaryRole'
            },
            {
                type: 'input',
                message: 'What is the department id for this role?',
                name: 'departmentID',
            },

        ])
        .then((response)=>{
            db.query('INSERT INTO roles SET ?;', {
                titles: response.addingRole,
                salary: response.salaryRole,
                department_id:response.departmentID
         });
         stateAction();
        })
}




stateAction()
