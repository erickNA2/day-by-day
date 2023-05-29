var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT escolha FROM vote;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(escolha, fkUsuario) {
    var instrucao = `
        INSERT INTO carro (escolha, frUsuario) VALUES ('${escolha}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};