INSERT INTO departments(name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles(titles, salary, department_id)
VALUES
('Sales Manager', 200000, 1),
('Salesperson', 115000, 1),
('Engineering Manager', 300000, 2),
('Software Engineer', 120000, 2),
('Finance Manager', 190000, 3),
('Accoutant', 115000, 3),
('Legal Manager', 190000, 4),
('Lawyer', 130000, 4);



INSERT INTO employees(first_name, last_name, titles, manager_id)
VALUES
('Beau', 'Jangles', 'Sales Manager', 1),
('Damian', 'Lin', 'Engineering Manager', 2),
('Avery', 'Soriano', 'Finance Manager', 3),
('Selena', 'Lew', 'Legal Manager', 4);

INSERT INTO employees(first_name, last_name, titles, roles_id, manager_id)
VALUES
('Jordan', 'Poole', 'Salesperson', 1, 1),
('Vince', 'Carter', 'Software Engineer', 2, 2),
('Steph', 'Curry', 'Accountant', 3, 3),
('Klay', 'Thompson', 'Lawyer', 4, 4);
