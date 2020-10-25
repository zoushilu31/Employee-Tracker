DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE empolyee_db;
USE employee_db;

CREATE TABLE departments (
  id INTEGER(11) auto_increment NOT NULL,
  name VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,0) NOT NULL,
  department_id INTEGER(11) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employees(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  role_id INTEGER(11),
  manager_id INTEGER(11) NULL,
  PRIMARY KEY (id)
);
