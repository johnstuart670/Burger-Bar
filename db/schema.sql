create database burgers_db;

create table burger_table (
	ID INT NOT NULL auto_increment primary key,
	burger_name VARCHAR(45) NOT NULL,
	devoured boolean NOT NULL 
);

