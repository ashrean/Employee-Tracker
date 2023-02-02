USE company_db

-- Defining the departments
INSERT INTO departments(name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal'),

-- Defining the titles and the salary
INSERT INTO (title, salary, department_id)
VALUES
('Sales Lead', 190000, 1),
('Salesperson', 90000, 1),
('Lead Engineer', 280000, 2),
('Engineer', 120000, 2),
('Account Manager', 180000, 3),
('Accoutant', 115000, 3),
('Lawyer Team Lead' 250000, 4),
('Lawyer', 190000, 4),

INSERT INTO (first_name, last_name, role_id, manager_id)
VALUES
('Beau', 'Jangles', 1, null),
('Chico', 'Bean', 2, 1),
('Ashley' 'Sese', 3, null),
('Steven', 'Lin', 4, 3),
('Damian', 'Lin', 5, null),
('Nico', 'Chan', 6, 5),
('Jack', 'Barry', 7, null),
('Malachi', 'Callejo', 8, 7)
