 ### Schema

CREATE DATABASE burgers_db;
USE burger_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burgername varchar(30) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)
);

/*
Time stamp: http://stackoverflow.com/questions/36284817/timestamp-in-xml-schema

https://www.w3schools.com/sql/sql_dates.asp

https://docs.oracle.com/cd/B25329_01/doc/appdev.102/b25108/xedev_sqlplus.htm#BJECGGFH



*/