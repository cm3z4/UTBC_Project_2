### Schema

CREATE DATABASE gitshopping_db;
USE gitshopping_db;

CREATE TABLE gituser
(
	id int NOT NULL AUTO_INCREMENT,
	user varchar(100) NOT NULL,
	pwd varchar(100) NOT NULL,
	admin BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE gitshopping
(
	id int NOT NULL AUTO_INCREMENT,
	shop_id int NOT NULL AUTO_INCREMENT,
	title varchar(100) NOT NULL,
	body varchar(100) NOT NULL,
	category varchar(100) NOT NULL,
	sold BOOLEAN DEFAULT false,
	deleted BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);