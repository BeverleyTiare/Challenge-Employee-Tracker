USE employee_trackerDB;

INSERT INTO department (department_name)
VALUES 
('Research'),
('Biotech'),
('Finance'),
('Legal');

/*INSERT INTO department (name) 
Values ('Biotech'),
INSERT INTO department (name) 
VALUES('Finance'), 
INSERT INTO department (name)
VALUES ('Legal');*/

INSERT INTO role (title, salary, department_id)
VALUES 
('Research', 100000.00, 1),
('Medical', 80000.00, 1),
('Lead Engineer', 150000.00, 2),
('Software Engineer', 120000.00, 2),
('Marketing Manager', 125000.00, 3),
('Accountant', 125000.00, 3),
('Legal Team Lead', 250000.00, 4),
('Lawyer', 190000.00, 4);

/*INSERT INTO role (title, salary, department_id)
VALUES ('Medical', 80000.00, 1),
INSERT INTO role (title, salary, department_id)
VALUES('Lead Engineer', 150000.00, 2),
INSERT INTO role (title, salary, department_id)
VALUES ('Software Engineer', 120000.00, 2),
INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 125000.00, 3),
INSERT INTO role (title, salary, department_id)
VALUES ('Legal Team Lead', 250000.00, 4),
INSERT INTO role (title, salary, department_id)
VALUES('Lawyer', 190000.00, 4);*/

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Knut', 'Hamsun', 1, NULL),
('Maya', 'Angelou', 2, 1),
('John',  'Keats', 3, NULL),
('Pablo' , 'Neruda', 4, 3),
('Charles', 'Baudelaire', 5, NULL),
('Navit', 'Barel', 6, 5),
('Su', 'Shi', 7, NULL);



/*INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Emily', 'Dickenson', 2, 1),
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John',  'Keats', 3, NULL),
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES('Pablo' , 'Neruda', 4, 3),
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES('Charles', 'Baudelaire', 5, NULL),
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES('Navit', 'Barel', 6, 5),
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES('Su', 'Shi', 7, NULL);*/
   
