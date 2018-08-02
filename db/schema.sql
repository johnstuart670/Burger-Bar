create database burgers_db;

create table burger_table (
	ID INT(50) NOT NULL  AUTO_INCREMENT,
	burger_name VARCHAR(45) NOT NULL,
	devoured boolean NOT NULL,
	PRIMARY KEY (ID)
);

