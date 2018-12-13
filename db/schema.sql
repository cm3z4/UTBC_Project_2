-- Create things4sale database.
CREATE DATABASE things4sale_db;
USE things4sale_db;

-- Create the users table. 
CREATE TABLE users(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
user VARCHAR(100) NOT NULL,
pass VARCHAR(100) NOT NULL);

-- Create the items table. 
CREATE TABLE items(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
user VARCHAR(100) NOT NULL,
title VARCHAR(100) NOT NULL,
price VARCHAR(100) NOT NULL,
category VARCHAR(100) NOT NULL,
info VARCHAR(500) NOT NULL,
zipCode VARCHAR(100) NOT NULL,
imageUrl VARCHAR(100) NOT NULL);
