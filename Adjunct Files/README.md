## Employee Tracker-SQL-Challenge-12

This project concerns the development of a Content Management System (CMS) using the CLI so to enable the user to manage an employee database : specifically the application allows the delivery of tabulated data concerning departments, roles, and employees, as well as options to add department, roles and employees. The build involves Node.js, Inquirer, and MySql to store data for the user.

## Install

To install inquirer use: 

```npm i inquirer@I 8.2.4```

## Usage

Following package installation, run 

node Adjunct\ Files.js

in the CLI

To end: enter control + c


## Instructions 

1. Choose an option to view preferred table and associated data in the CLI. 
2. Your options are as follows: 
DATABASE SCHEMA: three tables to view and manage as follows; 
 -all departments,
 -all roles,
 -all employees. 
 Also, additional options are as follows: 
 add a department, 
 add a role, 
 add an employee, 
 update an employee role.
3. Departments: id - INT PRIMARY KEY, name - VARCHAR (45) for department name 
4. Role : id - INT PRIMARY KEY, title - VARCHAR (45) for role title, salary - DECIMAL for role salary, department id - INT for department where role subsides.
5. Employee : id - INT PRIMARY KEY, first_name - VARCHAR (30) for first name, surname - VARCHAR (30) for last name, role id - INT for employee role.

## Links/

The URL of the GitHub repository:

To view the video:
https://drive.google.com/file/d/10CLmGLZWzOvoQ3XIqKm_PriM0z8tQFJK/view


## Acknowledgement

Bootcamp TAs, tutors, opensource code sites, W3 schools, MDN, stackoverflow, medium

## License

MIT License

Copyright © 2023 BeverleyTiare

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.













