-- Active: 1669778322899@@127.0.0.1@3306@books_db
DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employee (
    id INT NOT NULL,
    fist_name VARCHAR(30) NOT NULL,
    last_name VARCHAR (30) NOT NULL, 
    active BOOLEAN NOT NULL,
    date_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE jobrole (
    id INT NOT NULL,
    salary INT NOT NULL,
    job_description VARCHAR(200) NOT NULL,
    manager_name VARCHAR(60) NOT NULL,
    department VARCHAR(30) NOT NULL, 
    active BOOLEAN NOT NULL, 
    date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

