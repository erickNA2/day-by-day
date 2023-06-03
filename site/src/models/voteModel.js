var database = require("../database/config");

function listar() {
  var instrucao = `
        SELECT voto FROM votos;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrar(voto, idUsuario) {
  var instrucao = `
        INSERT INTO votos (voto, fkUsuario) VALUES ('${voto}', '${idUsuario}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  cadastrar,
  listar,
};
