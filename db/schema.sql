### Schema

CREATE DATABASE gitshopping_db;
USE gitshopping_db;

CREATE TABLE gituser
(
	id int NOT NULL AUTO_INCREMENT,
	f_name varchar(100) NOT NULL,
	l_name varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	phone varchar(20),
	admin BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE gitpost
(
	id int NOT NULL AUTO_INCREMENT,
	post_id int NOT NULL AUTO_INCREMENT,
	title varchar(100) NOT NULL,
	body varchar(100) NOT NULL,
	category varchar(100) NOT NULL,
	pic_1 varchar(100),
	pic_2 varchar(100),
	pic_3 varchar(100),
	pic_4 varchar(100),
	pic_5 varchar(100),
	sold BOOLEAN DEFAULT false,
	deleted BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);