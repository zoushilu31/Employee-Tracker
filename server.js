const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: 'zoushilu',
  database: 'employee_db'
});

// 
class Database {
  constructor(config) {
      this.connection = mysql.createConnection(config);
  }

  query(sql, args) {
      return new Promise((resolve, reject) => {
          this.connection.query(sql, args, (err, rows) => {
              if (err)
                  return reject(err);
              resolve(rows);
          });
      });
  }

  close() {
      return new Promise((resolve, reject) => {
          this.connection.end(err => {
              if (err)
                  return reject(err);
              resolve();
          });
      });
  }
}

// Build table that shows all departments
async function displayAllDepartments() {
  console.log(' ');
  await db.query('SELECT id, name AS department FROM department', (err, res) => {
      if (err) throw err;
      console.table(res);
      runApp();
  })
};

// Builds table which shows existing roles and their departments
async function displayAllRoles() {
  console.log(' ');
  await db.query('SELECT r.id, title, salary, name AS department FROM role r LEFT JOIN department d ON department_id = d.id', (err, res) => {
      if (err) throw err;
      console.table(res);
      runApp();
  })
};

// Builds complete employee table
async function displayAllEmployees() {
  console.log(' ');
  await db.query('SELECT e.id, e.first_name AS First_Name, e.last_name AS Last_Name, title AS Title, salary AS Salary, name AS Department, CONCAT(m.first_name, " ", m.last_name) AS Manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role r ON e.role_id = r.id INNER JOIN department d ON r.department_id = d.id', (err, res) => {
      if (err) throw err;
      console.table(res);
      runApp();
  });
};
