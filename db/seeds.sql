INSERT INTO departments(name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles(title, salary, departments_id)
VALUES
('Sales Lead', 200000, 1),
('Engineering Lead', 300000, 2),
('Finance Lead', 190000, 3),
('Legal Lead', 190000, 4);


INSERT INTO employees(first_name, last_name, roles_id)
VALUES
('Beau', 'Jangles', 1),
('Chico', 'Bean', 2),
('Ashley', 'Sese', 3),
('Steven', 'Lin', 4);


INSERT INTO employees(first_name, last_name, roles_id, manager_id)
VALUES
('Pikachu', 'Catchum', 1, 1);
