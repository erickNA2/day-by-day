CREATE DATABASE DayByDay;
USE DayByDay;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    sbrNome VARCHAR(45),
    ano CHAR(4),
    estado CHAR(2),
    email VARCHAR(60),
    senha VARCHAR(20),
    idiomaExp VARCHAR(10)
);

DROP TABLE usuario;

SELECT * FROM usuario;
