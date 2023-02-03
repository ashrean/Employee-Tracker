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
                    'Add Employee',
                    'Remove Employee',
                    'View All Employees',
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

                case 'Add Employee':
                    addEmployees()
                    break;

                case 'Remove Employee':
                    removeEmployees()
                    break;

                case 'View All Employees':
                    viewAllEmployees()
                    break

                case 'Quit':
                    break;
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
    db.query('SELECT * FROM departments', function(err, results, fields) {
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
                message: 'What is your managers ID number',
                name: 'roleID',
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
                first_name: response.firstName
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




stateAction()
