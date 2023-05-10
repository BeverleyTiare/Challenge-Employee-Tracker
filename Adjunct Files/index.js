//Dependencies list
const mysql = require("mysql2");
const inquirer = require("inquirer");
//const consoleTable = require("console.table");
//Use console table ??

//Create connection to mysql database
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  port: "3306",
  password: "ulla1914",
  database: "employee_trackerDB",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});

//Start function
function start() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a Department",
        "Remove Employee",
        "Add a role",
        "Add a Employee",
        "Update Employee Role",
        "Exit",
      ],

      //Switch case for each option
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View All Departments":
          viewAllDepartments();
          break;

        case "View All Roles":
          viewAllRoles();
          break;

        case "View All Employees":
          viewAllEmployees();
          break;

        case "Add a Department":
          addDepartment();
          break;

        case "Remove Employee":
          removeEmployee();
          break;

        case "Add a role":
          addRole();
          break;

        case "Add a Employee":
          addEmployee();
          break;

        case "Update Employee Role":
          updateRole();
          break;
      }
    });
}

// View Departments
function viewAllDepartments() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}

//View Employee Roles
function viewAllRoles() {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}
function viewAllEmployees() {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}

//Add a department to the database
function addDepartment() {
  inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "What department would you like to add?",
    })
    .then(function (answer) {
      connection.query(
        "INSERT INTO department SET ?",
        { department_name: answer.department },
        function (err) {
          if (err) throw err;
          console.log("Department added successfully!");
          start();
        }
      );
    });
}

//Add a role to the database
function addRole() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;

    if (res.length === 0) {
      console.log("Please add a department first!");
      start();
    } else {
      const departments = res;
      inquirer
        .prompt([
          {
            name: "title",
            type: "input",
            message: "What is the title of the role?",
          },
          {
            name: "salary",
            type: "input",
            message: "What is the salary of the role?",
          },
          {
            name: "department_id",
            type: "list",
            choices: departments.map((department) => ({
              name: department.department_name,
              value: department.id,
            })),
            message: "What is the department id of the role?",
          },
        ])
        .then(function (answer) {
          connection.query(
            "INSERT INTO role SET ?",
            {
              title: answer.title,
              salary: answer.salary,
              department_id: answer.department_id,
            },
            function (err) {
              if (err) throw err;
              console.log("Role added successfully!");
              start();
            }
          );
        });
    }
  });
}

//Add an employee to the database
function addEmployee() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;

    if (res.length === 0) {
      console.log("Please add a department first!");
      start();
    } else {
      const departments = res;
      connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;

        if (res.length === 0) {
          console.log("Please add a role first!");
          start();
        } else {
          const roles = res;
          connection.query("SELECT * FROM employee", function (err, res) {
            if (err) throw err;
            const employees = res;
            inquirer
              .prompt([
                {
                  name: "first_name",
                  type: "input",
                  message: "What is the employee's first name?",
                },
                {
                  name: "last_name",
                  type: "input",
                  message: "What is the employee's last name?",
                },
                {
                  name: "role_id",
                  type: "list",
                  choices: roles.map((role) => ({
                    name: role.title,
                    value: role.id,
                  })),
                  message: "What is the employee's role?",
                },
                {
                  name: "manager_id",
                  type: "list",
                  choices: [
                    { name: "No Manager", value: null },
                    ...employees.map((employee) => ({
                      name: `${employee.first_name} ${employee.last_name}`,
                      value: employee.id,
                    })),
                  ],
                  message: "Who is the employee's manager?",
                },
              ])
              .then(function (answer) {
                connection.query(
                  "INSERT INTO employee SET ?",
                  {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.role_id,
                    manager_id: answer.manager_id,
                  },
                  function (err) {
                    if (err) throw err;
                    console.log("Employee added successfully!");
                    start();
                  }
                );
              });
          });
        }
      });
    }
  });
}

//Remove an employee from the database
function removeEmployee() {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;

    if (res.length === 0) {
      console.log("There are no employees to remove!");
      start();
    } else {
      const employees = res;
      inquirer
        .prompt([
          {
            name: "employee_id",
            type: "list",
            choices: employees.map((employee) => ({
              name: `${employee.first_name} ${employee.last_name}`,
              value: employee.id,
            })),
            message: "What is the employee's id?",
          },
        ])
        .then(function (answer) {
          connection.query(
            "DELETE FROM employee WHERE id = ?",
            [answer.employee_id],
            function (err) {
              if (err.message.includes("a foreign key constraint fails")) {
                console.log("this person is a manager so cant be removed");
              } else {
                if (err) throw err;
                console.log("Employee removed successfully!");
              }
              start();
            }
          );
        });
    }
  });
}

//Update an employee role in the database
function updateRole() {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;

    if (res.length === 0) {
      console.log("There are no employees to update!");
      start();
    } else {
      const employees = res;
      connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;

        if (res.length === 0) {
          console.log("Please add a role first!");
          start();
        } else {
          const roles = res;
          inquirer
            .prompt([
              {
                name: "employee_id",
                type: "list",
                choices: employees.map((employee) => ({
                  name: `${employee.first_name} ${employee.last_name}`,
                  value: employee.id,
                })),
                message: "Which employee would you like to update?",
              },
              {
                name: "role_id",
                type: "list",
                choices: roles.map((role) => ({
                  name: role.title,
                  value: role.id,
                })),
                message: "What is the employee's new role?",
              },
            ])
            .then(function (answer) {
              connection.query(
                "UPDATE employee SET role_id = ? WHERE id = ?",
                [answer.role_id, answer.employee_id],
                function (err) {
                  if (err) throw err;
                  console.log("Employee role updated successfully!");
                  start();
                }
              );
            });
        }
      });
    }
  });
}

// see mini-project: promise function etc
