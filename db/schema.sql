### Schema

CREATE DATABASE things4sale_db;
USE things4sale_db;

-- Create burgers table.
CREATE TABLE users(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
user VARCHAR(100) NOT NULL,
pass VARCHAR(100) NOT NULL);