# Employee Tracker

# Table of Contents
- [Employee Tracker](#employee-tracker)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Installtion Instructions](#installtion-instructions)
- [Github Account](#github-account)
- [Images](#images)
- [Contacts](#contacts)
- [Code Snippets](#code-snippets)
- [Resources](#resources)
- [Credits](#credits)


# Description
This application was created to show the comapany's database, you will see tables from the Departments, then from there you can see the roles
along with the Employees and the associated job salaries.

# Installtion Instructions
- To run this program there is a few steps to do. Please make sure `node.js` is isntalled.
  - In your local terminal to run it off mysql type `mysql -u root -p`
  - Then run `SOURCE ./db/schema.sql` then `./db/seeds.sql` to sync all the tables together.
  - To view the tables type `SELECT * FROM tablename;`
- To run this application
  - In your local terminal type `npm start`
  - Then run `node server.js`
  - The prompts will show up then answer the following questions.

# Github Account
- [GitHub](https://github.com/ashrean)
- [Video Link]()

# Images
![alt text](./assets/Screenshot%202023-02-02%20at%2010.23.01%20PM.png)

# Contacts
- [Email](sese.ashrean@gmail.com)
- [Linkedin](https://www.linkedin.com/in/ashleyrean/)

# Code Snippets
- This snippet shows the roles table which is the child of the parent table called "departments". The
table contains the following information of the title from the department, salary and the id.
```
INSERT INTO roles(titles, salary, department_id)
VALUES
('Sales Manager', 200000, 1),
('Salesperson', 115000, 1),
('Engineering Manager', 300000, 2),
('Software Engineer', 120000, 2),
('Finance Manager', 190000, 3),
('Accoutant', 115000, 3),
('Legal Manager', 190000, 4),
('Lawyer', 130000, 4)
```

# Resources
- [MySql2](https://www.npmjs.com/package/mysql2)
- [Consol.Table](https://www.npmjs.com/package/console.table)
- [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4)

# Credits
