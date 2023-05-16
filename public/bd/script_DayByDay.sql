CREATE DATABASE DayByDay;
USE DayByDay;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    sbrNome VARCHAR(45),
    dtNasc DATE,
    estado CHAR(2),
    email VARCHAR(60),
    senha VARCHAR(20),
    nplLow TINYINT,
    nplMid TINYINT,
    nplHigh TINYINT
);