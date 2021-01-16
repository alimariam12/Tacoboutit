-- DROP DATABASE restaurants_db;
CREATE DATABASE restaurants_db;
USE restaurants_db;

CREATE TABLE restaurant (
id INT NOT NULL AUTO_INCREMENT,
user_name VARCHAR(50) NOT NULL,
review VARCHAR(255) NOT NULL,
restaurant_name VARCHAR(50) NOT NULL,
PRIMARY KEY (id)
);