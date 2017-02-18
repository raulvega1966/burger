CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE IF NOT EXISTS burger
(
	id int NOT NULL AUTO_INCREMENT,
	burgername varchar(30) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO burger (burgername) VALUES
('The Lambshank Redemption'),
('The Sweet Sunrise'),
('Numb Burger'),
('Rings of Fire'),
('Baby Got Bok Choy'),
('The 38th Parallel');

SELECT * FROM burger;
