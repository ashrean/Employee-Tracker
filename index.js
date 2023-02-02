// Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql12');
const cTable = require('console.table');


const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'Damian0811.',
        database: 'company_db',
    },
    console.log('Connected to the comapny_db database.')
);


