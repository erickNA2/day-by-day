CREATE DATABASE daybyday;
USE daybyday;

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

CREATE TABLE votes (
    idVoto INT PRIMARY KEY AUTO_INCREMENT,
    voto INT,
    fkUsuario INT,
    CONSTRAINT fkVotoUsuario FOREIGN KEY (fkUsuario)
    REFERENCES usuario(idUsuario)
);

INSERT INTO usuario VALUES 
    (null, 'erick', 'nunes', '2001', 'SP', 'erick@hotmail.com', '123', 'alto');

SELECT * FROM usuario;
