CREATE DATABASE IF NOT EXISTS portifolio;
CREATE USER IF NOT EXISTS 'localhostUser'@'localhost' IDENTIFIED BY 'Localhost@user100';

GRANT ALL ON portifolio.* TO 'localhostUser'@'localhost' IDENTIFIED BY 'Localhost@user100';

USE portifolio;

CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60),
    email VARCHAR(60),
    password VARCHAR(80)
);

CREATE TABLE comment(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR (100),
    content VARCHAR(450),
    fk_user INT,
    FOREIGN KEY (fk_user) REFERENCES usuario(id)
);