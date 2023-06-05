CREATE DATABASE daybyday;
USE daybyday;

CREATE TABLE usuarios (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80),
    estado CHAR(2),
    email VARCHAR(80),
    senha VARCHAR(20),
    testeIng INT,
    testeFra INT,
    testeJpn INT
);

CREATE TABLE votos (
    idVoto INT AUTO_INCREMENT,
    voto INT,
    fkUsuario INT,
    PRIMARY KEY (idVoto, fkUsuario),
    CONSTRAINT fkVotoUsuario FOREIGN KEY (fkUsuario)
    REFERENCES usuarios(idUsuario)
);

INSERT INTO usuario VALUES 
    (null, 'Erick Nunes', 'SP', 'erick@hotmail.com', '123', 0, 0, 0, 0),
    (null, 'Admin', 'SP', 'admin@hotmail.com', '123', 0, 0, 0, 0),
    (null, 'Alice Faria', 'RJ', 'lice@hotmail.com', '123', 0, 0, 0, 0),
    (null, 'Fabio Fagundes', 'MS', 'fabio@hotmail.com', '123', 0, 0, 0, 0);

INSERT INTO votos VALUES 
    (null, 1, 1),
    (null, 2, 1),
    (null, 3, 1),
    (null, 4, 1),
    (null, 2, 1),
    (null, 3, 1),
    (null, 1, 1);

SELECT * FROM usuario;
